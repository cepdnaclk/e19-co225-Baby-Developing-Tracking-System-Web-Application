package com.babydevelopingtrackingsystem.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


import java.time.LocalDate;
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table
public class BabyHeightWeight {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private float height;
    private float weight;

    private LocalDate date;
    @ManyToOne
    @JoinColumn(name="baby_id")
    private Baby baby;
}
