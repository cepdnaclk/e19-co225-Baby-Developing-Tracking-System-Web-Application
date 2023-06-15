package com.babydevelopingtrackingsystem.Controller;

import com.babydevelopingtrackingsystem.Dto.BabyVaccinationRequest;
import com.babydevelopingtrackingsystem.Model.BabyVaccination;
import com.babydevelopingtrackingsystem.Dto.VaccineAlert;
import com.babydevelopingtrackingsystem.Service.BabyVaccinationService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/add_vaccine")
public class BabyVaccinationController {
    private final BabyVaccinationService babyVaccinationService;

    public BabyVaccinationController(BabyVaccinationService babyVaccinationService) {
        this.babyVaccinationService = babyVaccinationService;
    }

    @PostMapping
    public ResponseEntity<BabyVaccination> assignVaccinationToBaby(

            @RequestBody BabyVaccinationRequest request){
        BabyVaccination newBabyVaccine = babyVaccinationService.addVaccineToBaby(request);
        if (newBabyVaccine == null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(newBabyVaccine);
    }
    @GetMapping("alerts/{babyId}")
    public ResponseEntity<List<VaccineAlert>> getVaccineAlerts(@PathVariable int babyId){
        return ResponseEntity.ok(babyVaccinationService.getAlerts(babyId));
    }
}
