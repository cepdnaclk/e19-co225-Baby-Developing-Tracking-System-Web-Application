package com.babydevelopingtrackingsystem.Controller;

import com.babydevelopingtrackingsystem.Service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/notifications")
public class NotificationController {

    private final NotificationService notificationService;

    @Autowired
    public NotificationController(NotificationService notificationService) {
        this.notificationService = notificationService;
    }

    @GetMapping("/generate")
    public String generateNotifications() {
        // Logic to generate notifications
        notificationService.generateVaccineNotifications();

        return "Notifications generated successfully";
    }
}
