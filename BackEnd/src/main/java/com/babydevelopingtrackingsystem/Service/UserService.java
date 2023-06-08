package com.babydevelopingtrackingsystem.Service;

import com.babydevelopingtrackingsystem.Dto.UserDto;
import com.babydevelopingtrackingsystem.Model.User;
import com.babydevelopingtrackingsystem.Repository.UserRepository;
import com.babydevelopingtrackingsystem.Utill.VariableList;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class UserService {

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private ModelMapper modelMapper;


    //-----------------------------------------To save the user----------------------------------------
    public String saveUser(UserDto userDto){
        if (userRepo.existsById(userDto.getEmail())){
            return VariableList.RSP_DUPLICATED;
        }else {
            userRepo.save(modelMapper.map(userDto, User.class));
            return VariableList.RSP_SUCCESS;
        }
    }

    //-----------------------------------------To update the user----------------------------------------

    public String updateUser(UserDto userDto){
        if (userRepo.existsById(userDto.getEmail())){
            userRepo.save(modelMapper.map(userDto, User.class));
            return VariableList.RSP_SUCCESS;

        }else {
            return VariableList.R$P_NO_DATA_FOUND;
        }
    }

    //-----------------------------------------To Delete the user----------------------------------------

    public String deleteUser(String userId){
        if (userRepo.existsById(userId)){
            userRepo.deleteById(userId);
            return VariableList.RSP_SUCCESS;
        }else {
            return VariableList.R$P_NO_DATA_FOUND;
        }
    }

}