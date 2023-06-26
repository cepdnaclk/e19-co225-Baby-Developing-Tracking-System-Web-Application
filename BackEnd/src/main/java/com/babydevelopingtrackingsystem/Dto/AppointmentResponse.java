package com.babydevelopingtrackingsystem.Dto;

import com.babydevelopingtrackingsystem.Utill.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AppointmentResponse {
    //General Attributes
    private int id;

    private LocalDateTime scheduledTime;
    private String AppointmentStatus;


    //Attributes Only for Parents
    private Role role;

    private String midwifeName; //for doctor as well

    private String doctorName; //for midwife as well

    //Attributes for doctor and midwife

    private String parentName;
    private String babyName;





}
