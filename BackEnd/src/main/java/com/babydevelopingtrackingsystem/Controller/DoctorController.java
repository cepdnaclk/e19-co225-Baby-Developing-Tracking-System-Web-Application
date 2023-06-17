package com.babydevelopingtrackingsystem.Controller;
import com.babydevelopingtrackingsystem.Dto.DoctorBabyResponse;
import com.babydevelopingtrackingsystem.Service.DoctorService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1/doctor")

public class DoctorController {
    private final DoctorService doctorService;

    public DoctorController(DoctorService doctorService) {
        this.doctorService = doctorService;
    }

    @GetMapping
    public ResponseEntity<List<DoctorBabyResponse>> getAssignedBabies(){
        return ResponseEntity.ok(doctorService.getAllAssignedBabies());
    }
}
