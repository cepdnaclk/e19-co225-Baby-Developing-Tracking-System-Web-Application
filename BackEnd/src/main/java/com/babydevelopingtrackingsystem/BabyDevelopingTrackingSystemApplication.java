package com.babydevelopingtrackingsystem;

import com.babydevelopingtrackingsystem.Model.User;
import com.babydevelopingtrackingsystem.Model.Vaccination;
import com.babydevelopingtrackingsystem.Repository.UserRepository;
import com.babydevelopingtrackingsystem.Repository.VaccinationRepository;
import com.babydevelopingtrackingsystem.Utill.Role;
import org.modelmapper.ModelMapper;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.security.crypto.password.PasswordEncoder;
@EnableScheduling
@SpringBootApplication
public class BabyDevelopingTrackingSystemApplication {

    public static void main(String[] args) {
        SpringApplication.run(BabyDevelopingTrackingSystemApplication.class, args);
    }

    @Bean
    public ModelMapper modelMapper(){
        return new ModelMapper();
    }

    @Bean
    public CommandLineRunner commandLineRunner(VaccinationRepository vaccinationRepository, UserRepository userRepository,PasswordEncoder passwordEncoder){
        return args -> {


            addVaccinations(vaccinationRepository);
            userRepository.save(new User("ADMIN",
                                        "MAIN",
                                        "admin@sproutopia.com",
                    passwordEncoder.encode("password"),
                                        Role.ADMIN));






        };
    }

    private void addVaccinations(VaccinationRepository vaccinationRepository){
        vaccinationRepository.save(new Vaccination("BCG", 0, "Compulsory"));
        vaccinationRepository.save(new Vaccination("Hexaxim/Infanrix Hexa", 0, "Compulsory"));
        vaccinationRepository.save(new Vaccination("Pentavalent and Polio (1st dose)", 2, "Compulsory"));
        vaccinationRepository.save(new Vaccination("Rotarix/Rotateq (1st dose)", 2, "Additional"));
        vaccinationRepository.save(new Vaccination("Synflorix (1st dose)", 2, "Additional"));
        vaccinationRepository.save(new Vaccination("Rotarix/Rotateq (2nd dose)", 4, "Additional"));
        vaccinationRepository.save(new Vaccination("Synflorix (2nd dose)", 4, "Additional"));
        vaccinationRepository.save(new Vaccination("Hexaxim/Infanrix Hexa (2nd dose)", 4, "Compulsory"));
        vaccinationRepository.save(new Vaccination("Pentavalent and Polio (3rd dose)", 6, "Compulsory"));
        vaccinationRepository.save(new Vaccination("Rotarix/Rotateq (2nd dose)", 6, "Additional"));
        vaccinationRepository.save(new Vaccination("Synflorix (2nd dose)", 6, "Additional"));
        vaccinationRepository.save(new Vaccination("Hexaxim/Infanrix Hexa (3rd dose)", 6, "Compulsory"));
        vaccinationRepository.save(new Vaccination("Priorix/MMR (1st dose)", 9, "Compulsory"));
        vaccinationRepository.save(new Vaccination("Japanese Encephalitis (single dose)", 12, "Compulsory"));
        vaccinationRepository.save(new Vaccination("Hexaxim/Infanrix Hexa (4th dose)", 18, "Compulsory"));
        vaccinationRepository.save(new Vaccination("Pentavalent and Polio (4th dose)", 18, "Compulsory"));
        vaccinationRepository.save(new Vaccination("Synflorix (4th dose)", 18, "Additional"));
        vaccinationRepository.save(new Vaccination("Avaxim (PEDIATRIC) OR IM", 18, "Additional"));
        vaccinationRepository.save(new Vaccination("Havrix 720 (PEDIATRIC) (1st dose)", 12, "Additional"));
        vaccinationRepository.save(new Vaccination("Varilrix (1st dose)", 12, "Additional"));
        vaccinationRepository.save(new Vaccination("Varilrix (2nd dose)", 24, "Additional"));
        vaccinationRepository.save(new Vaccination("Typhim (Booster Doses every 3 years)", 36, "Additional"));
        vaccinationRepository.save(new Vaccination("Avaxim (PEDIATRIC) OR IM", 24, "Additional"));
        vaccinationRepository.save(new Vaccination("Havrix 720 (PEDIATRIC) (2nd dose)", 24, "Additional"));
        vaccinationRepository.save(new Vaccination("Priorix/MMR (2nd dose)", 36, "Compulsory"));
        vaccinationRepository.save(new Vaccination("Boostrix (1st dose)", 60, "Compulsory"));
        vaccinationRepository.save(new Vaccination("Polio Oral", 60, "Compulsory"));

    }

}
