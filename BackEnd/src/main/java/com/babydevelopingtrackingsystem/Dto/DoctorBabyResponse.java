package com.babydevelopingtrackingsystem.Dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DoctorBabyResponse {
    private String babyName;
    private String parentName;
    private String midWifeName;

    private String gender;
}
