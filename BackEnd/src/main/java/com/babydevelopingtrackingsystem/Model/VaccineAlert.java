package com.babydevelopingtrackingsystem.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class VaccineAlert {
    private String babyName;
    private LocalDate vaccineDate;

    private String vaccineName;
}
