package com.babydevelopingtrackingsystem.Repository;

import com.babydevelopingtrackingsystem.Model.userModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface userRepo extends JpaRepository<userModel,String>{
}
