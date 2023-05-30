package com.babydevelopingsystem.Service;
import com.babydevelopingsystem.Dto.userDto;
import com.babydevelopingsystem.Model.userModel;
import com.babydevelopingsystem.Repository.userRepo;
import com.babydevelopingsystem.Utill.VeriableList;
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
            return VeriableList.RSP_DUPLICATED;
        }else {
            userRepo.save(modelMapper.map(userDto, userModel.class));
            return VeriableList.RSP_SUCCESS;
        }
    }

    //-----------------------------------------To update the user----------------------------------------

    public String updateUser(userDto userDto){
        if (userRepo.existsById(userDto.getEmail())){
            userRepo.save(modelMapper.map(userDto,userModel.class));
            return VeriableList.RSP_SUCCESS;

        }else {
            return VeriableList.R$P_NO_DATA_FOUND;
        }
    }

    //-----------------------------------------To Delete the user----------------------------------------

    public String deleteUser(String userId){
        if (userRepo.existsById(userId)){
            userRepo.deleteById(userId);
            return VeriableList.RSP_SUCCESS;
        }else {
            return VeriableList.R$P_NO_DATA_FOUND;
        }
    }

}
