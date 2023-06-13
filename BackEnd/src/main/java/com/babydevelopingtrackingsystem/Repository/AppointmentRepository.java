package com.babydevelopingtrackingsystem.Repository;

import com.babydevelopingtrackingsystem.Model.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppointmentRepository extends JpaRepository<Appointment,Integer> {
}
