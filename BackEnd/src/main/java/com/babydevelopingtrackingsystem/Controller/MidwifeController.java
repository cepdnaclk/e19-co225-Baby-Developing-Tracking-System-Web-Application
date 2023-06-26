package com.babydevelopingtrackingsystem.Controller;

import com.babydevelopingtrackingsystem.Dto.AppointmentRequest;
import com.babydevelopingtrackingsystem.Dto.AppointmentResponse;
import com.babydevelopingtrackingsystem.Dto.MidwifeBabyResponse;
import com.babydevelopingtrackingsystem.Service.AppointmentService;
import com.babydevelopingtrackingsystem.Service.MidwifeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("api/v1/midwife")

public class MidwifeController {
    private final MidwifeService midwifeService;
    private final AppointmentService appointmentService;

    public MidwifeController(MidwifeService midwifeService, AppointmentService appointmentService) {
        this.midwifeService = midwifeService;
        this.appointmentService = appointmentService;
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

    @PostMapping("appointment/accept")
    public void acceptAppointment(@RequestBody int id){
        appointmentService.acceptAppointment(id);

    }
    @GetMapping("appointment/get")
    public List<AppointmentResponse> getAllAppointments(){
        return appointmentService.findByUser();
    }

    @GetMapping("appointment/get/{babyId}")
    public List<AppointmentResponse> getAppointmentsByBabyId(@PathVariable int babyId){
        return appointmentService.getAppointmentsByBabyId(babyId);
    }
}
