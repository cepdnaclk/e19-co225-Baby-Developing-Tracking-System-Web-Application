package com.babydevelopingtrackingsystem.Service;
import com.babydevelopingtrackingsystem.Dto.DoctorDto;
import com.babydevelopingtrackingsystem.Model.Doctor;
import com.babydevelopingtrackingsystem.Repository.DoctorRepository;
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
public class AdminDoctorService {

    @Autowired
    private DoctorRepository doctorRepository;

    @Autowired
    private ModelMapper modelMapper;
    public String saveDoctor(DoctorDto doctorDto){
        if (doctorRepository.existsById(doctorDto.getId())){
            return VariableList.RSP_DUPLICATED;
        }else {

            doctorRepository.save(modelMapper.map(doctorDto, Doctor.class));
            return VariableList.RSP_SUCCESS;

        }
    }

    public String updateDoctor(DoctorDto doctorDto) {
        if (doctorRepository.existsById(doctorDto.getId())) {
            doctorRepository.save(modelMapper.map(doctorDto,Doctor.class));
            return VariableList.RSP_SUCCESS;
        } else {
            return VariableList.R$P_NO_DATA_FOUND;
        }

    }

    public List<DoctorDto> getAllDoctor(){
        List<Doctor> doctorList= doctorRepository.findAll();
        return modelMapper.map(doctorList, new TypeToken<ArrayList<DoctorDto>>(){

        }.getType());
    }

    public String deleteDoctor(int userId){
        if (doctorRepository.existsById(userId)){
            doctorRepository.deleteById(userId);
            return VariableList.RSP_SUCCESS;
        }else {
            return VariableList.R$P_NO_DATA_FOUND;
        }
    }
}

