package com.babydevelopingtrackingsystem.Model;

import io.swagger.v3.oas.annotations.Hidden;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table
public class Vaccination {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;

    private int ageInMonths;
    private String type;
    @OneToMany(mappedBy = "vaccination")
    @Hidden
    private List<BabyVaccination> babyVaccinations;

    public Vaccination(String name, int age, String type) {
        this.name = name;
        this.ageInMonths = age;
        this.type = type;
    }
}
