package com.babydevelopingsystem.Repository;

import com.babydevelopingsystem.Model.DoctorModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DoctorRepo extends JpaRepository<DoctorModel,Integer> {
}
