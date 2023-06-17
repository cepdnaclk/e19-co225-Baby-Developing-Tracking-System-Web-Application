package com.babydevelopingtrackingsystem.Dto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ParentDto {


    private int id;
    private String email;
    private String firstname;
    private String lastName;
    private String password;

    private String role;

    private String isMotherFatherGuardian;
}
