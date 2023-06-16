package com.babydevelopingtrackingsystem.Service;

import com.babydevelopingtrackingsystem.Dto.UserDto;
import com.babydevelopingtrackingsystem.Model.User;
import com.babydevelopingtrackingsystem.Repository.UserRepository;
import com.babydevelopingtrackingsystem.Utill.VariableList;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class AdminUserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ModelMapper modelMapper;
    public String saveUser(UserDto userDto){
        if (userRepository.existsById(userDto.getId())){
            return VariableList.RSP_DUPLICATED;
        }else {

            userRepository.save(modelMapper.map(userDto, User.class));
            return VariableList.RSP_SUCCESS;

        }
    }

    public String updateUser(UserDto userDto) {
        if (userRepository.existsById(userDto.getId())) {
            userRepository.save(modelMapper.map(userDto,User.class));
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

