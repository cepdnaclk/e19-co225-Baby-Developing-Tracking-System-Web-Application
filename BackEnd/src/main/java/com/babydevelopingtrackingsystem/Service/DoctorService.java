package com.babydevelopingtrackingsystem.Service;

import com.babydevelopingtrackingsystem.Dto.AppointmentRequest;
import com.babydevelopingtrackingsystem.Dto.BabyVaccinationRequest;
import com.babydevelopingtrackingsystem.Dto.BabyVaccinationResponse;
import com.babydevelopingtrackingsystem.Dto.DoctorBabyResponse;

import com.babydevelopingtrackingsystem.Model.*;

import com.babydevelopingtrackingsystem.Model.Baby;
import com.babydevelopingtrackingsystem.Model.BabyVaccination;
import com.babydevelopingtrackingsystem.Model.User;
import com.babydevelopingtrackingsystem.Model.Vaccination;

import com.babydevelopingtrackingsystem.Repository.*;
import com.babydevelopingtrackingsystem.Utill.VariableList;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Service
public class DoctorService {
    Logger logger  = LoggerFactory.getLogger(DoctorService.class);

    private final BabyRepository babyRepository;
    private final UserRepository userRepository;

    private final VaccinationRepository vaccinationRepository;

    private final BabyVaccinationRepository babyVaccinationRepository;
    private final DoctorRepository doctorRepository;



    private final AppointmentRepository appointmentRepository;

    public DoctorService(BabyRepository babyRepository, UserRepository userRepository, VaccinationRepository vaccinationRepository, BabyVaccinationRepository babyVaccinationRepository, AppointmentRepository appointmentRepository) {

    public DoctorService(BabyRepository babyRepository, UserRepository userRepository, VaccinationRepository vaccinationRepository, BabyVaccinationRepository babyVaccinationRepository, DoctorRepository doctorRepository) {

        this.babyRepository = babyRepository;
        this.userRepository = userRepository;
        this.vaccinationRepository = vaccinationRepository;
        this.babyVaccinationRepository = babyVaccinationRepository;

        this.appointmentRepository = appointmentRepository;

        this.doctorRepository = doctorRepository;

    }

    public List<DoctorBabyResponse> getAllAssignedBabies() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        String email = authentication.getName();
        User user = userRepository.findByEmail(email).get();
        logger.info(user.getEmail());

        List<DoctorBabyResponse> doctorBabyResponses = new ArrayList<>();
        List<Baby> babies =  babyRepository.findAllByDoctor(doctorRepository.findById(user.getId()).get());
        logger.info(String.valueOf(babies.size()));
        for(Baby baby:babies){

            List<BabyVaccinationResponse> babyVaccinationResponses = new ArrayList<>();
            List<BabyVaccination> babyVaccinations = baby.getBabyVaccinations();
            logger.info(String.valueOf(babyVaccinations.size()));
            for(BabyVaccination babyVaccination:babyVaccinations){
                babyVaccinationResponses.add(new BabyVaccinationResponse(babyVaccination.getVaccination().getName(),
                        babyVaccination.getVaccinationDate(),
                        babyVaccination.getStatus()));
            }
            doctorBabyResponses.add(new DoctorBabyResponse(
                    baby.getId(),
                    baby.getName(),
                    baby.getParent().getFirstname(),
                    baby.getMidwife().getFirstname(),
                    baby.getGender(),
                   babyVaccinationResponses
            ));
        }
        return doctorBabyResponses;
    }
    //Handling Vaccinations
    public String markVaccineCompleted(int babyVaccinationId){
        Optional<BabyVaccination> babyVaccination = babyVaccinationRepository.findById(babyVaccinationId);
        if (babyVaccination.isPresent()){
            babyVaccination.get().setStatus("Completed");
            babyVaccinationRepository.save(babyVaccination.get());
            return VariableList.RSP_SUCCESS;
        }
        return VariableList.R$P_NO_DATA_FOUND;

    }
    public String addVaccineToBaby(BabyVaccinationRequest babyVaccinationRequest){
        Optional<Baby> baby = babyRepository.findById(babyVaccinationRequest.babyId());
        Optional<Vaccination> vaccine = vaccinationRepository.findById(babyVaccinationRequest.vaccineId());

        if(baby.isPresent() && vaccine.isPresent()){

                boolean isAlreadyAssigned = babyVaccinationRepository
                        .existsBabyVaccinationByBabyAndVaccination(baby.get(),
                                vaccine.get());
                if(!isAlreadyAssigned){
                    babyVaccinationRepository.save(new BabyVaccination(
                            babyVaccinationRequest.date(),
                            "Pending",
                            baby.get(),
                            vaccine.get()));
                    return VariableList.RSP_SUCCESS;
                }
                else{
                    return VariableList.RSP_DUPLICATED;
                }


        }

        return VariableList.R$P_NO_DATA_FOUND;

    }

    //Appointments
    public void createAppointment(AppointmentRequest appointmentRequest) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        String email = authentication.getName();


        Optional<Baby> baby = babyRepository.findById(appointmentRequest.getBabyId());
        Optional<User> parentUser = userRepository.findById(baby.get().getParent().getId());
        Optional<User> doctorUser = userRepository.findByEmail(email);

        Appointment appointment = new Appointment();
        appointment.setRequestorUser(doctorUser.get());
        appointment.setAcceptorUser(parentUser.get());

        appointment.setAppointmentStatus("PENDING");
        appointment.setVenue(appointmentRequest.getVenue());
        appointment.setPlacementDateTime(LocalDateTime.now());
        appointment.setScheduledDateTime(appointmentRequest.getDateTime());

        appointmentRepository.save(appointment);

    }
}
