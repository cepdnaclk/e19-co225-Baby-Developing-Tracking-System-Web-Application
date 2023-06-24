package com.babydevelopingtrackingsystem.Dto;

import com.babydevelopingtrackingsystem.Utill.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


import java.time.LocalDateTime;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class AppointmentRequest {
    private LocalDateTime dateTime;
    private Role role; //Only for Parent

    private String venue;

    private int babyId; // Only for Doctor and Midwife

}
