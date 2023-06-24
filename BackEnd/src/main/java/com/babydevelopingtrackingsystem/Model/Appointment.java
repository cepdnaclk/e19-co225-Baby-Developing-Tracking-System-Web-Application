package com.babydevelopingtrackingsystem.Model;

import io.swagger.v3.oas.annotations.Hidden;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
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
    @JoinColumn(name = "requester_id")
    @Hidden
    private User requestorUser;
    @ManyToOne
    @JoinColumn(name="acceptor_id")
    @Hidden
    private User acceptorUser;

    private LocalDateTime placementDateTime;

    private LocalDateTime scheduledDateTime;

    private String venue;

    private String appointmentStatus; //PENDING or ACCEPTED

}
