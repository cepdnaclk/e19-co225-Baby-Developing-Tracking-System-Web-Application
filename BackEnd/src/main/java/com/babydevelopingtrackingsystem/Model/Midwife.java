package com.babydevelopingtrackingsystem.Model;

import com.babydevelopingtrackingsystem.Utill.Role;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table
public class Midwife extends User{

    private String hospital;
    private String regNo;
    @OneToMany(mappedBy = "midwife")
    private List<Baby> babies;

    public Midwife(String firstname, String lastname, String email, String password, Role role, String hospital, String regNo) {
        super(firstname, lastname, email, password, role);
        this.hospital = hospital;
        this.regNo = regNo;
    }
}




