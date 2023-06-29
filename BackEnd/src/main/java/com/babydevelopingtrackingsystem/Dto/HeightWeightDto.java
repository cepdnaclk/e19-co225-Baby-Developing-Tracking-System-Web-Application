package com.babydevelopingtrackingsystem.Dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class HeightWeightDto {

    private int id;
    private float height;
    private float weight;

    private LocalDate date;
}
