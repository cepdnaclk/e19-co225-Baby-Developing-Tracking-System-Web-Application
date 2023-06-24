package com.babydevelopingtrackingsystem.Repository;

import com.babydevelopingtrackingsystem.Model.Notification;
import com.babydevelopingtrackingsystem.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface NotificationRepository extends JpaRepository<Notification,Integer> {
    @Query("SELECT n FROM Notification n WHERE n.user = :user AND n.isRead = false")
    List<Notification> findAllUnreadNotificationsByUser(User user);

    List<Notification> findAllByUser(User user);
}
