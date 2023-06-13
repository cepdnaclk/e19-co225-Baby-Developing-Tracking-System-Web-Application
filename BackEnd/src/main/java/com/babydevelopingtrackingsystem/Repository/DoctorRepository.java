package com.babydevelopingtrackingsystem.Repository;

import com.babydevelopingtrackingsystem.Model.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DoctorRepository extends JpaRepository<Doctor,Integer> {
}
