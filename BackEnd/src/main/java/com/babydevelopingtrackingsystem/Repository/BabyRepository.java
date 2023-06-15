package com.babydevelopingtrackingsystem.Repository;

import com.babydevelopingtrackingsystem.Model.Baby;
import com.babydevelopingtrackingsystem.Model.Parent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BabyRepository extends JpaRepository<Baby,Integer> {
    @Query("SELECT b FROM Baby b WHERE b.doctor.id = :id")
    List<Baby> findAllByDoctor(@Param("id") Integer id);

    boolean existsByParent(Parent parent);
}
