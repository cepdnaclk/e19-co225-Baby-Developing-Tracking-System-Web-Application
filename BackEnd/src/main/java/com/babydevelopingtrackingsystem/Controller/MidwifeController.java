package com.babydevelopingtrackingsystem.Controller;

import com.babydevelopingtrackingsystem.Dto.DoctorBabyResponse;
import com.babydevelopingtrackingsystem.Dto.MidwifeBabyResponse;
import com.babydevelopingtrackingsystem.Service.DoctorService;
import com.babydevelopingtrackingsystem.Service.MidwifeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RestController

public class MidwifeController {
    private final MidwifeService midwifeService;

    public MidwifeController(MidwifeService midwifeService) {
        this.midwifeService = midwifeService;
    }

    @GetMapping
    public ResponseEntity<List<MidwifeBabyResponse>> getAssignedBabies(){
        return ResponseEntity.ok(midwifeService.getAllAssignedBabies());
    }

    @PutMapping("/baby_vaccine/mark/{id}")
    public ResponseEntity<String> markVaccinationDone(@PathVariable int id){
        String responseStatus = midwifeService.markVaccineCompleted(id);
        if(responseStatus.equals("00")){
            return ResponseEntity.ok("Successfully Marked");
        }
        else if(responseStatus.equals("01")){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Vaccine Record Not Found");
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
    }

}
