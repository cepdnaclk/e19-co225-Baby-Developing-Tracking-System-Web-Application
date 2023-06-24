package com.babydevelopingtrackingsystem.Service;

import com.babydevelopingtrackingsystem.Dto.*;
import com.babydevelopingtrackingsystem.Model.*;
import com.babydevelopingtrackingsystem.Repository.*;
import com.babydevelopingtrackingsystem.Utill.Role;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ParentService {
    private final ParentRepository parentRepository;
    private final BabyRepository babyRepository;

    private final VaccinationRepository vaccinationRepository;

    private final BabyVaccinationRepository babyVaccinationRepository;

    private final AppointmentRepository appointmentRepository;
    private final DoctorRepository doctorRepository;
    private final MidwifeRepository midwifeRepository;

    private final UserRepository userRepository;
    public ParentService(ParentRepository parentRepository, BabyRepository babyRepository, VaccinationRepository vaccinationRepository, BabyVaccinationRepository babyVaccinationRepository, AppointmentRepository appointmentRepository, DoctorRepository doctorRepository, MidwifeRepository midwifeRepository, UserRepository userRepository) {
        this.parentRepository = parentRepository;
        this.babyRepository = babyRepository;
        this.vaccinationRepository = vaccinationRepository;
        this.babyVaccinationRepository = babyVaccinationRepository;
        this.appointmentRepository = appointmentRepository;
        this.doctorRepository = doctorRepository;
        this.midwifeRepository = midwifeRepository;
        this.userRepository = userRepository;
    }
    //Baby
    public boolean doesBabyExistForParent() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        String email = authentication.getName();

        Parent parent = parentRepository.findByEmail(email);

        return babyRepository.existsByParent(parent);
    }

    public void addNewBaby(BabyRegistrationRequest babyRegistrationRequest) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        String email = authentication.getName();

        Parent parent = parentRepository.findByEmail(email);
        Baby baby = new Baby();

        baby.setParent(parent);
        String birthday = babyRegistrationRequest.getBirthday().toString();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        baby.setDateofBirth(String.valueOf(LocalDate.parse(birthday, formatter)));
        baby.setName(babyRegistrationRequest.getFirstName()+" "+ babyRegistrationRequest.getLastName());
        baby.setGender(babyRegistrationRequest.getGender());

        List<Vaccination> compulsoryVaccinations = vaccinationRepository.findByType("Compulsory");


        Baby savedBaby = babyRepository.save(baby);


        for (Vaccination vaccination : compulsoryVaccinations) {
            LocalDate dueDate = LocalDate.parse(birthday, formatter).plusMonths(vaccination.getAgeInMonths());


            babyVaccinationRepository.save(new BabyVaccination( dueDate, "Pending",savedBaby, vaccination));
        }



    }

    public ParentBabyResponse getYourBaby() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        String email = authentication.getName();

        Parent parent = parentRepository.findByEmail(email);

        Baby baby =  babyRepository.findBabyByParent(parent);

        ParentBabyResponse babySend = new ParentBabyResponse();
        if (baby!=null){
            List<BabyVaccinationResponse> babyVaccinationResponses = new ArrayList<>();
            List<BabyVaccination> babyVaccinations = baby.getBabyVaccinations();
            for(BabyVaccination babyVaccination:babyVaccinations){
                babyVaccinationResponses.add(new BabyVaccinationResponse(babyVaccination.getVaccination().getName(),
                        babyVaccination.getVaccinationDate(),
                        babyVaccination.getStatus()));
            }
            String doctorName;
            String midwifeName;

            try{
                doctorName = baby.getDoctor().getFirstname()+baby.getDoctor().getLastname() ;
            }
            catch(Exception e){
                doctorName = "Not yet Assigned";
            }
            try{
                midwifeName = baby.getMidwife().getFirstname()+baby.getMidwife().getLastname();
            }
            catch(Exception e){
                midwifeName = "Not yet Assigned";
            }
            babySend.setBabyName(baby.getName());
            babySend.setBabyVaccinations(babyVaccinationResponses);
            babySend.setGender(baby.getGender());
            babySend.setDoctorName(doctorName);
            babySend.setMidwifeName(midwifeName);
        }


        return babySend;

    }

    public void createAppointment(AppointmentRequest appointmentRequest) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        String email = authentication.getName();

        Parent parent = parentRepository.findByEmail(email);
        Baby baby = babyRepository.findBabyByParent(parent);
        Optional<User> parentUser = userRepository.findById(parent.getId());

        Appointment appointment = new Appointment();
        appointment.setRequestorUser(parentUser.get());

        Role acceptorRole = appointmentRequest.getRole();
        if(acceptorRole.equals(Role.DOCTOR)){
            Optional<User> doctorUser = userRepository.findById(baby.getDoctor().getId());
            appointment.setAcceptorUser(doctorUser.get());

        }
        else if(acceptorRole.equals(Role.MIDWIFE)){
            Optional<User> midwifeUser = userRepository.findById(baby.getMidwife().getId());
            appointment.setAcceptorUser(midwifeUser.get());

        }
        appointment.setAppointmentStatus("PENDING");
        appointment.setVenue(appointmentRequest.getVenue());
        appointment.setPlacementDateTime(LocalDateTime.now());
        appointment.setScheduledDateTime(appointmentRequest.getDateTime());

        appointmentRepository.save(appointment);

    }



    //Appointments
    //TODO
}
