package com.babydevelopingtrackingsystem.Service;

import com.babydevelopingtrackingsystem.Dto.NotificationResponse;
import com.babydevelopingtrackingsystem.Model.Baby;
import com.babydevelopingtrackingsystem.Model.BabyVaccination;
import com.babydevelopingtrackingsystem.Model.Notification;
import com.babydevelopingtrackingsystem.Model.User;
import com.babydevelopingtrackingsystem.Repository.BabyRepository;
import com.babydevelopingtrackingsystem.Repository.BabyVaccinationRepository;
import com.babydevelopingtrackingsystem.Repository.NotificationRepository;
import com.babydevelopingtrackingsystem.Repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class NotificationService {
    Logger logger = LoggerFactory.getLogger(NotificationService.class);
    private final NotificationRepository notificationRepository;
    private final UserRepository userRepository;
    private final BabyRepository babyRepository;

    private final BabyVaccinationRepository babyVaccinationRepository;

    public NotificationService(NotificationRepository notificationRepository, UserRepository userRepository, BabyRepository babyRepository, BabyVaccinationRepository babyVaccinationRepository) {
        this.notificationRepository = notificationRepository;
        this.userRepository = userRepository;
        this.babyRepository = babyRepository;
        this.babyVaccinationRepository = babyVaccinationRepository;
    }

    public void createNotification(User user, String content) {
        Notification notification = new Notification();
        notification.setUser(user);
        notification.setContent(content);
        notification.setRead(false);
        notificationRepository.save(notification);
    }

    public void generateVaccineNotifications() {


        List<Baby> babies = babyRepository.findAll();
        //List<VaccineAlert> vaccineAlerts = new ArrayList<>();
        LocalDate today = LocalDate.now();
        LocalDate notificationDate = today.plusDays(3);


        for (Baby baby : babies) {
            List<BabyVaccination> babyVaccinationList =
                    babyVaccinationRepository.findUpcomingBabyVaccines(today, notificationDate);
            for (BabyVaccination babyVaccination : babyVaccinationList) {

                LocalDate dueDate = babyVaccination.getVaccinationDate();
                long daysDifference = ChronoUnit.DAYS.between(today, dueDate);
                String content = babyVaccination.getVaccination().getName() + " is due on " +
                        dueDate.toString() +
                        daysDifference;
                createNotification(baby.getParent(), content);
            }

        }

    }

    public List<NotificationResponse> getNotifications() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        String email = authentication.getName();
        Optional<User> user = userRepository.findByEmail(email);
        List<Notification> notifications;
        List<NotificationResponse> notificationResponses = new ArrayList<>();
        if (user.isPresent()) {
            notifications = notificationRepository.findAllByUser(user.get());
            logger.info(String.valueOf(notifications.size()));
            for (Notification notification : notifications) {
                if (!notification.isRead()) {
                    notificationResponses.add(new NotificationResponse(notification.getContent(), "Unread"));
                }

            }
            return notificationResponses;
        }

        return new ArrayList<>();

    }

    public void clearNotifications() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        String email = authentication.getName();
        Optional<User> user = userRepository.findByEmail(email);
        List<Notification> notifications;

        if (user.isPresent()) {
            notifications = notificationRepository.findAllByUser(user.get());
            for (Notification notification:notifications){
                notification.setRead(true);
                notificationRepository.save(notification);
            }

        }
    }
}
