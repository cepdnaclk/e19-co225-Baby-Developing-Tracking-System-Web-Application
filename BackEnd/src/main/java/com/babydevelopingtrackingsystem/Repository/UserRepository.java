package com.babydevelopingtrackingsystem.Repository;

import com.babydevelopingtrackingsystem.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Integer>{

}
