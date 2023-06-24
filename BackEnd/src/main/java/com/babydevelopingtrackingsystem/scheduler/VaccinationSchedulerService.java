package com.babydevelopingtrackingsystem.scheduler;

import com.babydevelopingtrackingsystem.Dto.VaccineAlert;
import com.babydevelopingtrackingsystem.Model.Baby;
import com.babydevelopingtrackingsystem.Model.BabyVaccination;
import com.babydevelopingtrackingsystem.Model.Notification;
import com.babydevelopingtrackingsystem.Repository.BabyRepository;
import com.babydevelopingtrackingsystem.Repository.BabyVaccinationRepository;
import com.babydevelopingtrackingsystem.Service.NotificationService;
import com.babydevelopingtrackingsystem.Service.VaccinationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.List;

@Service
public class VaccinationSchedulerService {

    private final VaccinationService vaccinationService;
    private final NotificationService notificationService;
    private final BabyRepository babyRepository;
    private final BabyVaccinationRepository babyVaccinationRepository;

    @Autowired
    public VaccinationSchedulerService(VaccinationService vaccinationService, NotificationService notificationService, BabyRepository babyRepository, BabyVaccinationRepository babyVaccinationRepository) {
        this.vaccinationService = vaccinationService;
        this.notificationService = notificationService;
        this.babyRepository = babyRepository;
        this.babyVaccinationRepository = babyVaccinationRepository;
    }

    @Scheduled(cron = "52 23 0 * * *") // Run at midnight every day
    public void checkUpcomingVaccinations() {
        List<Baby> babies = babyRepository.findAll();
        //List<VaccineAlert> vaccineAlerts = new ArrayList<>();
        LocalDate today = LocalDate.now();
        LocalDate notificationDate = today.plusDays(3);



        for(Baby baby:babies){
            List<BabyVaccination> babyVaccinationList =
                    babyVaccinationRepository.findUpcomingBabyVaccines(today,notificationDate);
            for(BabyVaccination babyVaccination:babyVaccinationList){

                LocalDate dueDate = babyVaccination.getVaccinationDate();
                long daysDifference = ChronoUnit.DAYS.between(today, dueDate);
                String content = babyVaccination.getVaccination().getName() + " is due on " +
                                    dueDate.toString() +
                        daysDifference;
                notificationService.createNotification(baby.getParent(),content);
            }



        }
    }
}
