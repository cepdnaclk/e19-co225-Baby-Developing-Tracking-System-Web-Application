package com.babydevelopingtrackingsystem.Repository;

import com.babydevelopingtrackingsystem.Model.BabyVaccination;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BabyVaccinationRepository extends JpaRepository<BabyVaccination,Integer> {
}
