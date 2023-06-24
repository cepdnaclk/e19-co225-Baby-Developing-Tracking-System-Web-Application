package com.babydevelopingtrackingsystem.Repository;

import com.babydevelopingtrackingsystem.Model.Midwife;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MidwifeRepository extends JpaRepository<Midwife,Integer> {
    Midwife findByEmail(String email);
}
