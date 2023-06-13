package com.babydevelopingtrackingsystem.Repository;

import com.babydevelopingtrackingsystem.Model.Baby;
import com.babydevelopingtrackingsystem.Model.BabyVaccination;
import com.babydevelopingtrackingsystem.Model.Vaccination;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BabyVaccinationRepository extends JpaRepository<BabyVaccination,Integer> {
    public boolean existsBabyVaccinationByBabyAndVaccination(Baby baby, Vaccination vaccination);
}
