package com.babydevelopingtrackingsystem.Dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
@Data
@NoArgsConstructor
@AllArgsConstructor
public class BabyVaccinationResponse {
    private int id;

    private int vaccineId;
    String vaccineName;
    LocalDate dueDate;
    String status;

    public BabyVaccinationResponse(int id, String vaccineName, LocalDate dueDate, String status) {
        this.id = id;
        this.vaccineName = vaccineName;
        this.dueDate = dueDate;
        this.status = status;
    }
}
