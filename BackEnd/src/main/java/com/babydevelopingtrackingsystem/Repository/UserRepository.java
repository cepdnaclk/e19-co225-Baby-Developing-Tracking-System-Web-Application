package com.babydevelopingtrackingsystem.Repository;

import com.babydevelopingtrackingsystem.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Integer>{

    Optional<Object> findByEmail(String email);
}
