package com.babydevelopingtrackingsystem.Repository;

import com.babydevelopingtrackingsystem.Model.Token;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TokenRepository extends JpaRepository<Token,Integer> {
}
