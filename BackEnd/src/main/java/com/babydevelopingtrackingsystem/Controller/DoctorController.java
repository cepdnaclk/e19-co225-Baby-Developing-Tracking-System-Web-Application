package com.babydevelopingtrackingsystem.Controller;
import com.babydevelopingtrackingsystem.Dto.BabyVaccinationRequest;
import com.babydevelopingtrackingsystem.Dto.DoctorBabyResponse;
import com.babydevelopingtrackingsystem.Service.DoctorService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("api/v1/doctor")

public class DoctorController {
    private final DoctorService doctorService;

    public DoctorController(DoctorService doctorService) {
        this.doctorService = doctorService;
    }
    //Get Assigned Babies
    @GetMapping("/getAll")
    public ResponseEntity<List<DoctorBabyResponse>> getAssignedBabies(){
        return ResponseEntity.ok(doctorService.getAllAssignedBabies());
    }

    //Baby Vaccinations

    @PutMapping("/baby_vaccine/mark/{id}")
    public ResponseEntity<String> markVaccinationDone(@PathVariable int id){
        String responseStatus = doctorService.markVaccineCompleted(id);
        if(responseStatus.equals("00")){
            return ResponseEntity.ok("Successfully Marked");
        }
        else if(responseStatus.equals("01")){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Vaccine Record Not Found");
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
    }

    @PostMapping("/baby_vaccine/add")
    public ResponseEntity<String> assignVaccineToBaby(@RequestBody BabyVaccinationRequest babyVaccinationRequest){
        String responseStatus = doctorService.addVaccineToBaby(babyVaccinationRequest);
        if(responseStatus.equals("00")){
            return ResponseEntity.ok("Successfully Added Vaccine to baby");
        }
        else if(responseStatus.equals("01")){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("baby or vaccine not found");
        }
        else if(responseStatus.equals("06")){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("vaccine already assigned");
        }

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);

    }


    //Appointments
    //TODO

}
