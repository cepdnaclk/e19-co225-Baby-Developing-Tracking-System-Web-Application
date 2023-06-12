package com.babydevelopingtrackingsystem.Service;
import com.babydevelopingtrackingsystem.Dto.BabyDto;
import com.babydevelopingtrackingsystem.Model.Baby;
import com.babydevelopingtrackingsystem.Model.BabyVaccination;
import com.babydevelopingtrackingsystem.Model.Vaccination;
import com.babydevelopingtrackingsystem.Repository.BabyRepository;
import com.babydevelopingtrackingsystem.Repository.BabyVaccinationRepository;
import com.babydevelopingtrackingsystem.Repository.VaccinationRepository;
import com.babydevelopingtrackingsystem.Utill.VariableList;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
@Transactional
public class BabyService {

    @Autowired
    private BabyRepository babyRepo;

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private VaccinationRepository vaccinationRepository;

    @Autowired
    private BabyVaccinationRepository babyVaccinationRepository;


    //-----------------------------------------To save the Baby----------------------------------------
    public String saveBaby(BabyDto babyDto){
        if (babyRepo.existsById(babyDto.getId())){
            return VariableList.RSP_DUPLICATED;
        }
            Baby savedBaby = babyRepo.save(modelMapper.map(babyDto, Baby.class));

        List<Vaccination> compulsoryVaccinations = vaccinationRepository.findByType("Compulsory");


        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        LocalDate birthday = LocalDate.parse(babyDto.getDateofBirth(), formatter);

        for (Vaccination vaccination : compulsoryVaccinations) {
            LocalDate dueDate = birthday.plusMonths(vaccination.getAgeInMonths());


            babyVaccinationRepository.save(new BabyVaccination( dueDate, "Pending",savedBaby, vaccination));
        }
            return VariableList.RSP_SUCCESS;

    }

    //-----------------------------------------To update the Baby----------------------------------------

    public String updateBaby(BabyDto babyDto){
        if (babyRepo.existsById(babyDto.getId())){
            babyRepo.save(modelMapper.map(babyDto, Baby.class));
            return VariableList.RSP_SUCCESS;

        }else {
            return VariableList.R$P_NO_DATA_FOUND;
        }
    }

    //-----------------------------------------To Delete the Baby----------------------------------------

    public String deleteBaby(int userId){
        if (babyRepo.existsById(userId)){
            babyRepo.deleteById(userId);
            return VariableList.RSP_SUCCESS;
        }else {
            return VariableList.R$P_NO_DATA_FOUND;
        }
    }



}
