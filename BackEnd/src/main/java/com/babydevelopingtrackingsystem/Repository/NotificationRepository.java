package com.babydevelopingtrackingsystem.Repository;

import com.babydevelopingtrackingsystem.Model.Notification;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NotificationRepository extends JpaRepository<Notification,Integer> {
}
