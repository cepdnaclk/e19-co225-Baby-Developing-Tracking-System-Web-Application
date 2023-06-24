package com.babydevelopingtrackingsystem.Repository;

import com.babydevelopingtrackingsystem.Model.Appointment;
import com.babydevelopingtrackingsystem.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AppointmentRepository extends JpaRepository<Appointment,Integer> {
    public List<Appointment> findByAcceptorUserOrRequestorUser(User user);
}
