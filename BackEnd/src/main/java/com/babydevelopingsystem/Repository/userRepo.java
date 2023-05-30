package com.babydevelopingsystem.Repository;

import com.babydevelopingsystem.Model.userModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface userRepo extends JpaRepository<userModel,String> {
}
