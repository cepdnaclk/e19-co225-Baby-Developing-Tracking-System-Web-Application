package com.babydevelopingtrackingsystem.Model;

import io.swagger.v3.oas.annotations.Hidden;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table
public class Appointment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int id;
    @ManyToOne
    @JoinColumn(name = "baby_id")
    @Hidden
    private Baby baby;
    @ManyToOne
    @JoinColumn(name="doctor_id")
    @Hidden
    private Doctor doctor;

    private Date placementDateTime;

    private Date scheduledDateTime;

    private String venue;

    private String appointmentStatus; //PENDING or ACCEPTED

}
