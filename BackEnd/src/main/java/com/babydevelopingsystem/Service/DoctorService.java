package com.babydevelopingsystem.Service;
import com.babydevelopingsystem.Dto.DoctorDto;
import com.babydevelopingsystem.Model.DoctorModel;
import com.babydevelopingsystem.Repository.DoctorRepo;
import com.babydevelopingsystem.Utill.VeriableList;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class DoctorService {

    @Autowired
    private DoctorRepo doctorRepo;

    @Autowired
    private ModelMapper modelMapper;


    //-----------------------------------------To save the Doctor----------------------------------------
    public String saveDoctor(DoctorDto doctorDto){
        if (doctorRepo.existsById(doctorDto.getDoctorId())){
            return VeriableList.RSP_DUPLICATED;
        }else {
            doctorRepo.save(modelMapper.map(doctorDto, DoctorModel.class));
            return VeriableList.RSP_SUCCESS;
        }
    }

    //-----------------------------------------To update the Doctor----------------------------------------

    public String updateDoctor(DoctorDto doctorDto){
        if (doctorRepo.existsById(doctorDto.getDoctorId())){
            doctorRepo.save(modelMapper.map(doctorDto,DoctorModel.class));
            return VeriableList.RSP_SUCCESS;

        }else {
            return VeriableList.R$P_NO_DATA_FOUND;
        }
    }

    //-----------------------------------------To Delete the Doctor----------------------------------------

    public String deleteDoctor(int userId){
        if (doctorRepo.existsById(userId)){
            doctorRepo.deleteById(userId);
            return VeriableList.RSP_SUCCESS;
        }else {
            return VeriableList.R$P_NO_DATA_FOUND;
        }
    }

}
