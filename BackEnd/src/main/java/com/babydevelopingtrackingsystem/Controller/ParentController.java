package com.babydevelopingtrackingsystem.Controller;

import com.babydevelopingtrackingsystem.Dto.AppointmentRequest;
import com.babydevelopingtrackingsystem.Dto.AppointmentResponse;
import com.babydevelopingtrackingsystem.Dto.BabyRegistrationRequest;
import com.babydevelopingtrackingsystem.Dto.ParentBabyResponse;
import com.babydevelopingtrackingsystem.Service.AppointmentService;
import com.babydevelopingtrackingsystem.Service.ParentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/parent")
public class ParentController {
    private final ParentService parentService;
    private final AppointmentService appointmentService;

    public ParentController(ParentService parentService, AppointmentService appointmentService) {
        this.parentService = parentService;
        this.appointmentService = appointmentService;
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
    @GetMapping("appointment/get")
    public List<AppointmentResponse> getAllAppointments(){
        return appointmentService.findByUser();
    }
    @PostMapping("appointment/accept")
    public void acceptAppointment(@RequestBody int id){
        appointmentService.acceptAppointment(id);

    }

    @PostMapping("appointment/create")
    public void createAppointment(@RequestBody AppointmentRequest appointmentRequest){
        parentService.createAppointment(appointmentRequest);
    }
}
