package com.babydevelopingtrackingsystem.Controller;

import com.babydevelopingtrackingsystem.Service.VaccinationService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/vaccine")
public class VaccinationController {
    private final VaccinationService vaccinationService;


    public VaccinationController(VaccinationService vaccinationService) {
        this.vaccinationService = vaccinationService;
    }

    //TODO
    //Get All Vaccines
    //Get Vaccine By Id
    //Create Vaccine
    //Update Vaccine
    //Delete Vaccine


}
