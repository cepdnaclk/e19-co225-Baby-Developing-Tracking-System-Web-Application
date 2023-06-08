package com.babydevelopingtrackingsystem.Repository;

import com.babydevelopingtrackingsystem.Model.Vaccination;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VaccinationRepository extends JpaRepository<Vaccination,Integer> {
}
