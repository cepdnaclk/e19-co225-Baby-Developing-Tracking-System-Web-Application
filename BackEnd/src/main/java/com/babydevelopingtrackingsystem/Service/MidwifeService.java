package com.babydevelopingtrackingsystem.Service;

import com.babydevelopingtrackingsystem.Dto.AppointmentRequest;
import com.babydevelopingtrackingsystem.Dto.BabyVaccinationResponse;
import com.babydevelopingtrackingsystem.Dto.MidwifeBabyResponse;
import com.babydevelopingtrackingsystem.Model.*;
import com.babydevelopingtrackingsystem.Repository.*;
import com.babydevelopingtrackingsystem.Utill.VariableList;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class MidwifeService {
    private final BabyRepository babyRepository;
    private final UserRepository userRepository;

    private final VaccinationRepository vaccinationRepository;

    private final BabyVaccinationRepository babyVaccinationRepository;

    private final ParentRepository parentRepository;



    private final MidwifeRepository midwifeRepository;
    private final DoctorRepository doctorRepository;

    private final AppointmentRepository appointmentRepository;

    public MidwifeService(BabyRepository babyRepository, UserRepository userRepository, VaccinationRepository vaccinationRepository, BabyVaccinationRepository babyVaccinationRepository, ParentRepository parentRepository, MidwifeRepository midwifeRepository, DoctorRepository doctorRepository, AppointmentRepository appointmentRepository) {
        this.babyRepository = babyRepository;
        this.userRepository = userRepository;
        this.vaccinationRepository = vaccinationRepository;
        this.babyVaccinationRepository = babyVaccinationRepository;
        this.parentRepository = parentRepository;
        this.midwifeRepository = midwifeRepository;
        this.doctorRepository = doctorRepository;
        this.appointmentRepository = appointmentRepository;
    }

    public List<MidwifeBabyResponse> getAllAssignedBabies() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String email = authentication.getName();
        User user = userRepository.findByEmail(email).get();
        List<MidwifeBabyResponse> midwifeBabyResponses = new ArrayList<>();
        List<Baby> babies =  new ArrayList<>(); //babyRepository.findAllByDoctor(user.getId());
        for(Baby baby:babies){
            List<BabyVaccinationResponse> babyVaccinationResponses = new ArrayList<>();
            List<BabyVaccination> babyVaccinations = baby.getBabyVaccinations();
            for(BabyVaccination babyVaccination:babyVaccinations){
                babyVaccinationResponses.add(new BabyVaccinationResponse(babyVaccination.getVaccination().getName(),
                        babyVaccination.getVaccinationDate(),
                        babyVaccination.getStatus()));
            }
            midwifeBabyResponses.add(new MidwifeBabyResponse(
                    baby.getId(),
                    baby.getName(),
                    baby.getParent().getFirstname(),
                    baby.getDoctor().getFirstname(),
                    baby.getGender(),
                    babyVaccinationResponses
            ));
        }
        return midwifeBabyResponses;
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
    //Appointments
    public void createAppointment(AppointmentRequest appointmentRequest) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        String email = authentication.getName();

        Midwife midwife = midwifeRepository.findByEmail(email);
        Optional<Baby> baby = babyRepository.findById(appointmentRequest.getBabyId());
        Optional<User> parentUser = userRepository.findById(baby.get().getParent().getId());
        Optional<User> midwifeUser = userRepository.findById(midwife.getId());

        Appointment appointment = new Appointment();
        appointment.setRequestorUser(midwifeUser.get());
        appointment.setAcceptorUser(parentUser.get());

        appointment.setAppointmentStatus("PENDING");
        appointment.setVenue(appointmentRequest.getVenue());
        appointment.setPlacementDateTime(LocalDateTime.now());
        appointment.setScheduledDateTime(appointmentRequest.getDateTime());

        appointmentRepository.save(appointment);

    }
}
