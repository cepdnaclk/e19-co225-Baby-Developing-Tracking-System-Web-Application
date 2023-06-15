package com.babydevelopingtrackingsystem.Repository;

import com.babydevelopingtrackingsystem.Model.Parent;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ParentRepository extends JpaRepository<Parent,Integer> {
    Parent findByEmail(String email);
}
