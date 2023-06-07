package com.babydevelopingtrackingsystem.Repository;

import com.babydevelopingtrackingsystem.Model.babyModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface babyRepo extends JpaRepository<babyModel,Integer> {
}
