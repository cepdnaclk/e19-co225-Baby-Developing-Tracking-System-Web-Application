package com.babydevelopingtrackingsystem.Service;

import com.babydevelopingtrackingsystem.Dto.UserDto;
import com.babydevelopingtrackingsystem.Model.Doctor;
import com.babydevelopingtrackingsystem.Model.Midwife;
import com.babydevelopingtrackingsystem.Model.Parent;
import com.babydevelopingtrackingsystem.Model.User;
import com.babydevelopingtrackingsystem.Repository.UserRepository;
import com.babydevelopingtrackingsystem.Utill.Role;
import com.babydevelopingtrackingsystem.Utill.VariableList;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class AdminUserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ModelMapper modelMapper;

    private final PasswordEncoder passwordEncoder;

    public String saveUser(UserDto request){
        Role role  = request.getRole();
        User user;
        if (userRepository.existsUserByEmail(request.getEmail())){
            return VariableList.RSP_DUPLICATED;
        }else {


            if(role.equals(Role.PARENT)){
                user = new Parent(
                        request.getFirstname(),
                        request.getLastname(),
                        request.getEmail(),
                        passwordEncoder.encode(request.getPassword()),
                        request.getRole(),
                        null
                );




            }
            else if(role.equals(Role.DOCTOR)){
                user = new Doctor(
                        request.getFirstname(),
                        request.getLastname(),
                        request.getEmail(),
                        passwordEncoder.encode(request.getPassword()),
                        request.getRole(),
                        null,
                        null,
                        null
                );




            }
            else if(role.equals(Role.MIDWIFE)){
                user = new Midwife(
                        request.getFirstname(),
                        request.getLastname(),
                        request.getEmail(),
                        passwordEncoder.encode(request.getPassword()),
                        request.getRole(),
                        null,
                        null

                );




            }
            else{
                user = User.builder()
                        .firstname(request.getFirstname())
                        .lastname(request.getLastname())
                        .email(request.getEmail())
                        .password(passwordEncoder.encode(request.getPassword()))
                        .role(Role.USER)
                        .build();



            }
            userRepository.save(user);
            return VariableList.RSP_SUCCESS;

        }
    }

    public String updateUser(UserDto request) {
        User user;
        if (userRepository.existsById(request.getId())) {

            user = User.builder()
                    .id(request.getId())
                    .firstname(request.getFirstname())
                    .lastname(request.getLastname())
                    .email(request.getEmail())
                    .password(passwordEncoder.encode(request.getPassword()))
                    .role(Role.USER)
                    .build();
            userRepository.save(user);
            return VariableList.RSP_SUCCESS;
        } else {
            return VariableList.R$P_NO_DATA_FOUND;
        }

    }

    public List<UserDto> getAllUser(){
        List<User> flightList= userRepository.findAll();
        return modelMapper.map(flightList, new TypeToken<ArrayList<UserDto>>(){

        }.getType());
    }

    public String deleteUser(int userId){
        if (userRepository.existsById(userId)){
            userRepository.deleteById(userId);
            return VariableList.RSP_SUCCESS;
        }else {
            return VariableList.R$P_NO_DATA_FOUND;
        }
    }
}

