package com.babydevelopingtrackingsystem.Service;

import com.babydevelopingtrackingsystem.Dto.BabyVaccinationRequest;
import com.babydevelopingtrackingsystem.Model.Baby;
import com.babydevelopingtrackingsystem.Model.BabyVaccination;
import com.babydevelopingtrackingsystem.Model.Vaccination;
import com.babydevelopingtrackingsystem.Model.VaccineAlert;
import com.babydevelopingtrackingsystem.Repository.BabyRepository;
import com.babydevelopingtrackingsystem.Repository.BabyVaccinationRepository;
import com.babydevelopingtrackingsystem.Repository.VaccinationRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class BabyVaccinationService {
    Logger logger = LoggerFactory.getLogger(BabyVaccinationService.class);
    private final BabyRepository babyRepository;
    private final VaccinationRepository vaccinationRepository;
    private final BabyVaccinationRepository babyVaccinationRepository;

    public BabyVaccinationService(BabyRepository babyRepository,
                                  VaccinationRepository vaccinationRepository,
                                  BabyVaccinationRepository babyVaccinationRepository) {
        this.babyRepository = babyRepository;
        this.vaccinationRepository = vaccinationRepository;
        this.babyVaccinationRepository = babyVaccinationRepository;
    }

    public List<VaccineAlert> getAlerts(int babyId) {
        Optional<Baby> baby = babyRepository.findById(babyId);
        List<VaccineAlert> vaccineAlerts = new ArrayList<>();
        LocalDate today = LocalDate.now();
        LocalDate notificationDate = today.plusDays(3);


        if (baby.isPresent()){
            List<BabyVaccination> babyVaccinationList =
                    babyVaccinationRepository.findUpcomingVaccineAlerts(today,notificationDate);
            for(BabyVaccination babyVaccination:babyVaccinationList){
                vaccineAlerts.add(new VaccineAlert(
                        babyVaccination.getBaby().getName(),
                        babyVaccination.getVaccinationDate(),
                        babyVaccination.getVaccination().getName()));
            }



        }
            return vaccineAlerts;
    }


    public BabyVaccination addVaccineToBaby(BabyVaccinationRequest request) {
        Optional<Baby> baby = babyRepository.findById(request.babyId());
        Optional<Vaccination> vaccine = vaccinationRepository.findById(request.vaccineId());


        if(baby.isPresent() && vaccine.isPresent()){
            logger.info(baby.get().getName());
            logger.info(vaccine.get().getName());
            boolean isAlreadyAssigned = babyVaccinationRepository
                    .existsBabyVaccinationByBabyAndVaccination(baby.get(),
                                                                vaccine.get());
            if(!isAlreadyAssigned)
            babyVaccinationRepository.save(new BabyVaccination(
                    request.date(),
                    "Pending",
                    baby.get(),
                    vaccine.get()));




        }
        return null;
    }
}
