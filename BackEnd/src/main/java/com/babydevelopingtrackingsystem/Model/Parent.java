package com.babydevelopingtrackingsystem.Model;

import com.babydevelopingtrackingsystem.Utill.Role;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table
public class Parent extends User{

    private String isMotherFatherGuardian;


    public Parent(String firstname, String lastname, String email, String password, Role role, String isMotherFatherGuardian) {
        super(firstname, lastname, email, password, role);
        this.isMotherFatherGuardian = isMotherFatherGuardian;
    }
}
