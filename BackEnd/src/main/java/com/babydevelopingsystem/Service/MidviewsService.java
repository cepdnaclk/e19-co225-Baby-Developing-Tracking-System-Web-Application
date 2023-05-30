package com.babydevelopingsystem.Service;
import com.babydevelopingsystem.Dto.MidwivesDto;
import com.babydevelopingsystem.Model.MidwivesModel;
import com.babydevelopingsystem.Repository.MidwivesRepo;
import com.babydevelopingsystem.Utill.VeriableList;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class MidviewsService {


    @Autowired
    private MidwivesRepo midwivesRepo;

    @Autowired
    private ModelMapper modelMapper;


    //-----------------------------------------To save the Midwives----------------------------------------
    public String saveMidwives(MidwivesDto midwivesDto){
        if (midwivesRepo.existsById(midwivesDto.getMidwivesId())){
            return VeriableList.RSP_DUPLICATED;
        }else {
            midwivesRepo.save(modelMapper.map(midwivesDto, MidwivesModel.class));
            return VeriableList.RSP_SUCCESS;
        }
    }

    //-----------------------------------------To update the Midwives----------------------------------------

    public String updateMidwives(MidwivesDto midwivesDto){
        if (midwivesRepo.existsById(midwivesDto.getMidwivesId())){
            midwivesRepo.save(modelMapper.map(midwivesDto, MidwivesModel.class));
            return VeriableList.RSP_SUCCESS;

        }else {
            return VeriableList.R$P_NO_DATA_FOUND;
        }
    }

    //-----------------------------------------To Delete the Midwives----------------------------------------

    public String deleteMidwives(int userId){
        if (midwivesRepo.existsById(userId)){
            midwivesRepo.deleteById(userId);
            return VeriableList.RSP_SUCCESS;
        }else {
            return VeriableList.R$P_NO_DATA_FOUND;
        }
    }

}
