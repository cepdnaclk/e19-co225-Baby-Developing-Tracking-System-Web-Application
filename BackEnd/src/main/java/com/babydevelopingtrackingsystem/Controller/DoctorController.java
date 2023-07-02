package com.babydevelopingtrackingsystem.Controller;
import com.babydevelopingtrackingsystem.Dto.AppointmentRequest;
import com.babydevelopingtrackingsystem.Dto.AppointmentResponse;
import com.babydevelopingtrackingsystem.Dto.BabyVaccinationRequest;
import com.babydevelopingtrackingsystem.Dto.DoctorBabyResponse;
import com.babydevelopingtrackingsystem.Service.AppointmentService;
import com.babydevelopingtrackingsystem.Service.DoctorService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/doctor")

public class DoctorController {
    private final DoctorService doctorService;
    private final AppointmentService appointmentService;

    public DoctorController(DoctorService doctorService, AppointmentService appointmentService) {
        this.doctorService = doctorService;
        this.appointmentService = appointmentService;
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

    @PostMapping("/baby_vaccine/update")
    public ResponseEntity<String> editVaccine(@RequestBody BabyVaccinationRequest babyVaccinationRequest){
        String responseStatus = doctorService.editVaccine(babyVaccinationRequest);
        if(responseStatus.equals("00")){
            return ResponseEntity.ok("Successfully Edited Vaccine");
        }
        else if(responseStatus.equals("01")){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("baby or vaccine not found");
        }


        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);

    }
    @DeleteMapping("/baby_vaccine/delete/{id}")
    public ResponseEntity<String> deleteVaccine(@PathVariable int id){
        String responseStatus = doctorService.deleteVaccine(id);
        if(responseStatus.equals("00")){
            return ResponseEntity.ok("Successfully Deleted Vaccine");
        }
        else if(responseStatus.equals("01")){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("baby or vaccine not found");
        }


        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);

    }

    //Appointments
    @PostMapping("appointment/create")
    public void createAppointment(@RequestBody AppointmentRequest appointmentRequest){
        doctorService.createAppointment(appointmentRequest);
    }

    @PostMapping("appointment/accept/{id}")
    public void acceptAppointment(@PathVariable int id){
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
