package com.babydevelopingtrackingsystem.Service;

import com.babydevelopingtrackingsystem.Model.Baby;
import com.babydevelopingtrackingsystem.Model.BabyVaccination;
import com.babydevelopingtrackingsystem.Model.Notification;
import com.babydevelopingtrackingsystem.Model.User;
import com.babydevelopingtrackingsystem.Repository.BabyRepository;
import com.babydevelopingtrackingsystem.Repository.BabyVaccinationRepository;
import com.babydevelopingtrackingsystem.Repository.NotificationRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.List;

@Service
public class NotificationService {
    private final NotificationRepository notificationRepository;
    private final BabyRepository babyRepository;

    private final BabyVaccinationRepository babyVaccinationRepository;

    public NotificationService(NotificationRepository notificationRepository, BabyRepository babyRepository, BabyVaccinationRepository babyVaccinationRepository) {
        this.notificationRepository = notificationRepository;
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
    public void generateVaccineNotifications(){


    List<Baby> babies = babyRepository.findAll();
    //List<VaccineAlert> vaccineAlerts = new ArrayList<>();
    LocalDate today = LocalDate.now();
    LocalDate notificationDate = today.plusDays(3);



        for(Baby baby:babies) {
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
}
