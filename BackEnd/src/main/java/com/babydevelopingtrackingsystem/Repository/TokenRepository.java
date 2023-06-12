package com.babydevelopingtrackingsystem.Repository;

import com.babydevelopingtrackingsystem.Model.Token;
import io.micrometer.observation.ObservationFilter;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TokenRepository extends JpaRepository<Token,Integer> {
    Optional<Token> findByToken(String jwt);
}
