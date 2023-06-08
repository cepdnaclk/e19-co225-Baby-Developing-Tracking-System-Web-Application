package com.babydevelopingtrackingsystem.Repository;

import com.babydevelopingtrackingsystem.Model.Baby;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BabyRepository extends JpaRepository<Baby,Integer> {
}
