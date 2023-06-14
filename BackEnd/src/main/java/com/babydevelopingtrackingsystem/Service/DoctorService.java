package com.babydevelopingtrackingsystem.Service;

import com.babydevelopingtrackingsystem.Dto.DoctorBabyResponse;
import com.babydevelopingtrackingsystem.Model.Baby;
import com.babydevelopingtrackingsystem.Model.User;
import com.babydevelopingtrackingsystem.Repository.BabyRepository;
import com.babydevelopingtrackingsystem.Repository.UserRepository;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
public class DoctorService {
    private final BabyRepository babyRepository;
    private final UserRepository userRepository;

    public DoctorService(BabyRepository babyRepository, UserRepository userRepository) {
        this.babyRepository = babyRepository;
        this.userRepository = userRepository;
    }

    public List<DoctorBabyResponse> getAllAssignedBabies() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        String email = authentication.getName();
        User user = userRepository.findByEmail(email).get();
        List<DoctorBabyResponse> doctorBabyResponses = new ArrayList<>();
        List<Baby> babies =  babyRepository.findAllByDoctor(user.getId());
        for(Baby baby:babies){
            doctorBabyResponses.add(new DoctorBabyResponse(
                    baby.getName(),
                    baby.getParent().getFirstname(),
                    baby.getMidwife().getFirstname(),
                    baby.getGender()
            ));
        }
        return doctorBabyResponses;
    }
}
