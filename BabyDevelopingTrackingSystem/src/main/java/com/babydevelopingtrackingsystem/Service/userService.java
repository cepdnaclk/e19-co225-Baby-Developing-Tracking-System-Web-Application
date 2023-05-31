package com.babydevelopingtrackingsystem.Service;

import com.babydevelopingtrackingsystem.Dto.userDto;
import com.babydevelopingtrackingsystem.Model.userModel;
import com.babydevelopingtrackingsystem.Repository.userRepo;
import com.babydevelopingtrackingsystem.Utill.VariableList;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class userService {

    @Autowired
    private userRepo userRepo;

    @Autowired
    private ModelMapper modelMapper;


    //-----------------------------------------To save the user----------------------------------------
    public String saveUser(userDto userDto){
        if (userRepo.existsById(userDto.getEmail())){
            return VariableList.RSP_DUPLICATED;
        }else {
            userRepo.save(modelMapper.map(userDto, userModel.class));
            return VariableList.RSP_SUCCESS;
        }
    }

    //-----------------------------------------To update the user----------------------------------------

    public String updateUser(userDto userDto){
        if (userRepo.existsById(userDto.getEmail())){
            userRepo.save(modelMapper.map(userDto,userModel.class));
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