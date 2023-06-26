package com.babydevelopingtrackingsystem.Dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class BabyRegistrationRequest {
    private String firstName;
    private String lastName;
    private LocalDate birthday;
    private String gender;
    private String bloodType;
    private int birthHeight;
    private int birthWeight;
    private String eyeColor;
    private String hairColor;
    private String skinColor;
    private String nationality;
    private String motherName;
    private String motherContact;
    private String fatherName;
    private String fatherContact;
    private String allergies;
    private String immunizationRecords;
    private String growthRecords;
    private String developmentMilestones;
}
