package com.babydevelopingtrackingsystem.Dto;

import com.babydevelopingtrackingsystem.Model.BabyVaccination;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DoctorBabyResponse {
    private int id;
    private String babyName;
    private String parentName;
    private String midWifeName;


    private String gender;

    private List<BabyVaccinationResponse> babyVaccinations;
}
