package com.babydevelopingtrackingsystem.Controller;

import com.babydevelopingtrackingsystem.Dto.AppointmentRequest;
import com.babydevelopingtrackingsystem.Dto.DoctorBabyResponse;
import com.babydevelopingtrackingsystem.Dto.MidwifeBabyResponse;
import com.babydevelopingtrackingsystem.Service.DoctorService;
import com.babydevelopingtrackingsystem.Service.MidwifeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("api/v1/midwife")

public class MidwifeController {
    private final MidwifeService midwifeService;

    public MidwifeController(MidwifeService midwifeService) {
        this.midwifeService = midwifeService;
    }
    @GetMapping("/getAll")
    public ResponseEntity<List<MidwifeBabyResponse>> getAssignedBabies(){
        return ResponseEntity.ok(midwifeService.getAllAssignedBabies());
    }
    //Vaccines
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
    //Appointments
    @PostMapping("appointment/create")
    public void createAppointment(@RequestBody AppointmentRequest appointmentRequest){
       midwifeService.createAppointment(appointmentRequest);
    }
}
