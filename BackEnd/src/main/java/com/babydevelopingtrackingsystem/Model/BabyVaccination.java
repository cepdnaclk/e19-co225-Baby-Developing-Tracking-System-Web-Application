package com.babydevelopingtrackingsystem.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "baby_vaccination")
public class BabyVaccination {
    @Id
    private int id;

    private Date vaccinationDate;

    private String Status;

    @ManyToOne
    @JoinColumn(name = "baby_id")
    private Baby baby;
    @ManyToOne
    @JoinColumn(name = "vaccination_id")
    private Vaccination vaccination;

}
