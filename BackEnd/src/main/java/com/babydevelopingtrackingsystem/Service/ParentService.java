package com.babydevelopingtrackingsystem.Service;

import com.babydevelopingtrackingsystem.Dto.BabyRegistrationRequest;
import com.babydevelopingtrackingsystem.Dto.BabyVaccinationResponse;
import com.babydevelopingtrackingsystem.Dto.ParentBabyResponse;
import com.babydevelopingtrackingsystem.Model.Baby;
import com.babydevelopingtrackingsystem.Model.BabyVaccination;
import com.babydevelopingtrackingsystem.Model.Parent;
import com.babydevelopingtrackingsystem.Repository.BabyRepository;
import com.babydevelopingtrackingsystem.Repository.ParentRepository;
import com.babydevelopingtrackingsystem.Utill.DateFormatConverter;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ParentService {
    private final ParentRepository parentRepository;
    private final BabyRepository babyRepository;

    public ParentService(ParentRepository parentRepository, BabyRepository babyRepository) {
        this.parentRepository = parentRepository;
        this.babyRepository = babyRepository;
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
        baby.setDateofBirth(DateFormatConverter.convertDateFormat(birthday));
        baby.setName(babyRegistrationRequest.getFirstName()+babyRegistrationRequest.getLastName());
        baby.setGender(babyRegistrationRequest.getGender());

        babyRepository.save(baby);

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
            babySend.setBabyName(baby.getName());
            babySend.setBabyVaccinations(babyVaccinationResponses);
            babySend.setGender(baby.getGender());
            babySend.setDoctorName(baby.getDoctor().getFirstname()+baby.getDoctor().getLastname());
            babySend.setMidwifeName(baby.getMidwife().getFirstname()+baby.getMidwife().getLastname());
        }


        return babySend;

    }

    //Appointments
    //TODO
}
