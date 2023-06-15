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

    private String gender;

    private LocalDate birthday;
}
