package com.babydevelopingtrackingsystem.Dto;

import com.babydevelopingtrackingsystem.Utill.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {

    private int id;
    private String email;
    private String firstname;
    private String lastName;
    private String password;

    private Role role;




}
