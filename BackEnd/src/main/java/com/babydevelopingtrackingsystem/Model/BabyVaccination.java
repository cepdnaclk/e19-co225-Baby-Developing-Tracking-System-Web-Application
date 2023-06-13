package com.babydevelopingtrackingsystem.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.Date;
import java.util.Optional;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "baby_vaccination")
public class BabyVaccination {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private LocalDate vaccinationDate;

    private String status;



    @ManyToOne
    @JoinColumn(name = "baby_id")
    private Baby baby;
    @ManyToOne
    @JoinColumn(name = "vaccination_id")
    private Vaccination vaccination;

    public BabyVaccination(LocalDate vaccinationDate, String status, Baby baby, Vaccination vaccination) {
        this.vaccinationDate = vaccinationDate;
        this.status = status;
        this.baby = baby;
        this.vaccination = vaccination;
    }

}
