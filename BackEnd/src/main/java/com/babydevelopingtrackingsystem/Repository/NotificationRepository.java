package com.babydevelopingtrackingsystem.Repository;

import com.babydevelopingtrackingsystem.Model.Notification;
import com.babydevelopingtrackingsystem.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface NotificationRepository extends JpaRepository<Notification,Integer> {
    List<Notification> findAllByUser(User user);
}
