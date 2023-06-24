package com.babydevelopingtrackingsystem.Repository;

import com.babydevelopingtrackingsystem.Model.Baby;

import com.babydevelopingtrackingsystem.Model.Midwife;

import com.babydevelopingtrackingsystem.Model.Doctor;

import com.babydevelopingtrackingsystem.Model.Parent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BabyRepository extends JpaRepository<Baby,Integer> {

    List<Baby> findAllByDoctor(Doctor doctor);

    boolean existsByParent(Parent parent);

    Baby findBabyByParent(Parent parent);

    Baby findBabyByMidwife(Midwife midwife);
}
