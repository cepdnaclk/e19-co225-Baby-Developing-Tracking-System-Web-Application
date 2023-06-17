package com.babydevelopingtrackingsystem.Service;
import com.babydevelopingtrackingsystem.Dto.DoctorDto;
import com.babydevelopingtrackingsystem.Dto.ParentDto;
import com.babydevelopingtrackingsystem.Model.Parent;
import com.babydevelopingtrackingsystem.Repository.ParentRepository;
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
public class AddParentService {


    @Autowired
    private ParentRepository parentRepository;

    @Autowired
    private ModelMapper modelMapper;
    public String saveParent(ParentDto parentDto){
        if (parentRepository.existsById(parentDto.getId())){
            return VariableList.RSP_DUPLICATED;
        }else {

            parentRepository.save(modelMapper.map(parentDto, Parent.class));
            return VariableList.RSP_SUCCESS;

        }
    }

    public String updateParent(ParentDto parentDto) {
        if (parentRepository.existsById(parentDto.getId())) {
            parentRepository.save(modelMapper.map(parentDto,Parent.class));
            return VariableList.RSP_SUCCESS;
        } else {
            return VariableList.R$P_NO_DATA_FOUND;
        }

    }

    public List<ParentDto> getAllParent(){
        List<Parent> doctorList= parentRepository.findAll();
        return modelMapper.map(doctorList, new TypeToken<ArrayList<DoctorDto>>(){

        }.getType());
    }

    public String deleteParent(int userId){
        if (parentRepository.existsById(userId)){
            parentRepository.deleteById(userId);
            return VariableList.RSP_SUCCESS;
        }else {
            return VariableList.R$P_NO_DATA_FOUND;
        }
    }



}
