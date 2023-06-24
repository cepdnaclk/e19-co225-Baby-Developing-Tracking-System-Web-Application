package com.babydevelopingtrackingsystem.Controller;

import com.babydevelopingtrackingsystem.Dto.NotificationResponse;
import com.babydevelopingtrackingsystem.Model.Notification;
import com.babydevelopingtrackingsystem.Service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1/notifications")
public class NotificationController {

    private final NotificationService notificationService;

    @Autowired
    public NotificationController(NotificationService notificationService) {
        this.notificationService = notificationService;
    }

    @GetMapping("/get")
    public List<NotificationResponse> getAllNotifications() {

        notificationService.generateVaccineNotifications();
        return notificationService.getNotifications();



    }
}
