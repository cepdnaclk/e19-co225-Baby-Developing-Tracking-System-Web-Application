package com.babydevelopingtrackingsystem.Service;
import com.babydevelopingtrackingsystem.Dto.babyDto;
import com.babydevelopingtrackingsystem.Model.babyModel;
import com.babydevelopingtrackingsystem.Repository.babyRepo;
import com.babydevelopingtrackingsystem.Utill.VariableList;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class babyService {

    @Autowired
    private babyRepo babyRepo;

    @Autowired
    private ModelMapper modelMapper;


    //-----------------------------------------To save the Baby----------------------------------------
    public String saveBaby(babyDto babyDto){
        if (babyRepo.existsById(babyDto.getId())){
            return VariableList.RSP_DUPLICATED;
        }else {
            babyRepo.save(modelMapper.map(babyDto, babyModel.class));
            return VariableList.RSP_SUCCESS;
        }
    }

    //-----------------------------------------To update the Baby----------------------------------------

    public String updateBaby(babyDto babyDto){
        if (babyRepo.existsById(babyDto.getId())){
            babyRepo.save(modelMapper.map(babyDto,babyModel.class));
            return VariableList.RSP_SUCCESS;

        }else {
            return VariableList.R$P_NO_DATA_FOUND;
        }
    }

    //-----------------------------------------To Delete the Baby----------------------------------------

    public String deleteBaby(int userId){
        if (babyRepo.existsById(userId)){
            babyRepo.deleteById(userId);
            return VariableList.RSP_SUCCESS;
        }else {
            return VariableList.R$P_NO_DATA_FOUND;
        }
    }



}
