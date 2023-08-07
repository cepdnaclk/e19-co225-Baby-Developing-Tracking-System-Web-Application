package com.babydevelopingtrackingsystem.Repository;

import com.babydevelopingtrackingsystem.Model.Baby;
import com.babydevelopingtrackingsystem.Model.BabyVaccination;
import com.babydevelopingtrackingsystem.Model.Vaccination;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.util.List;

public interface BabyVaccinationRepository extends JpaRepository<BabyVaccination,Integer> {
    public boolean existsBabyVaccinationByBabyAndVaccination(Baby baby, Vaccination vaccination);
    public BabyVaccination findBabyVaccinationByBabyAndVaccination(Baby baby, Vaccination vaccination);

    public List<BabyVaccination> findByBabyOrderByVaccinationDate(Baby baby);


    @Query("SELECT v FROM BabyVaccination v WHERE v.vaccinationDate <= :notificationDate AND v.vaccinationDate >= :today")
    List<BabyVaccination> findUpcomingBabyVaccines(LocalDate today, LocalDate notificationDate);


}
