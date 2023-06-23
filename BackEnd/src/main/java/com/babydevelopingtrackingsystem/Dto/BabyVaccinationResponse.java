package com.babydevelopingtrackingsystem.Dto;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
public class BabyVaccinationResponse {
    String vaccineName;
    LocalDate dueDate;
    String status;
}
