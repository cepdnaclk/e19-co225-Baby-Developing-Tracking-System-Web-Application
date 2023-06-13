package com.babydevelopingtrackingsystem.Repository;

import com.babydevelopingtrackingsystem.Model.Vaccination;
import com.babydevelopingtrackingsystem.Model.VaccineAlert;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface VaccinationRepository extends JpaRepository<Vaccination,Integer> {
    List<Vaccination> findByType(String compulsory);


}
