package com.babydevelopingtrackingsystem.Controller;

import com.babydevelopingtrackingsystem.Dto.VaccinationDto;
import com.babydevelopingtrackingsystem.Service.VaccinationService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1/vaccine")
public class VaccinationController {
    private final VaccinationService vaccinationService;


    public VaccinationController(VaccinationService vaccinationService) {
        this.vaccinationService = vaccinationService;
    }

    @GetMapping
    public List<VaccinationDto> getAllVaccinations(){
        return vaccinationService.getAllVaccinations();

    }

    //TODO
    //Get Vaccine By Id
    //Create Vaccine
    //Update Vaccine
    //Delete Vaccine


}
