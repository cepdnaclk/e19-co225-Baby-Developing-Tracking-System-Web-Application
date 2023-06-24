package com.babydevelopingtrackingsystem.Controller;

import com.babydevelopingtrackingsystem.Dto.AppointmentRequest;
import com.babydevelopingtrackingsystem.Dto.AppointmentResponse;
import com.babydevelopingtrackingsystem.Dto.BabyRegistrationRequest;
import com.babydevelopingtrackingsystem.Dto.ParentBabyResponse;
import com.babydevelopingtrackingsystem.Model.Baby;
import com.babydevelopingtrackingsystem.Service.ParentService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/parent")
public class ParentController {
    private final ParentService parentService;

    public ParentController(ParentService parentService) {
        this.parentService = parentService;
    }

    @GetMapping("/babyNotExist")
    public boolean babyNotExist(){
       return !parentService.doesBabyExistForParent();
    }
    @PostMapping("/registerBaby")
    public void registerBaby(@RequestBody BabyRegistrationRequest babyRegistrationRequest){
        parentService.addNewBaby(babyRegistrationRequest);

    }

    @GetMapping("/getBaby")
    public ParentBabyResponse getYourBaby(){
        return parentService.getYourBaby();
    }


    //Appointments
    //TODO
@PostMapping("appointment/create")
    public void createAppointment(@RequestBody AppointmentRequest appointmentRequest){
        parentService.createAppointment(appointmentRequest);
    }
}
