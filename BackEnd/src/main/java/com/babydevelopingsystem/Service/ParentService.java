package com.babydevelopingsystem.Service;
import com.babydevelopingsystem.Dto.ParentDto;
import com.babydevelopingsystem.Model.ParentModel;
import com.babydevelopingsystem.Repository.ParentRepo;
import com.babydevelopingsystem.Utill.VeriableList;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class ParentService {

    @Autowired
    private ParentRepo parentRepo;

    @Autowired
    private ModelMapper modelMapper;


    //-----------------------------------------To save the Doctor----------------------------------------
    public String saveParent(ParentDto parentDto){
        if (parentRepo.existsById(parentDto.getParentId())){
            return VeriableList.RSP_DUPLICATED;
        }else {
            parentRepo.save(modelMapper.map(parentDto, ParentModel.class));
            return VeriableList.RSP_SUCCESS;
        }
    }

    //-----------------------------------------To update the Doctor----------------------------------------

    public String updateParent(ParentDto parentDto){
        if (parentRepo.existsById(parentDto.getParentId())){
            parentRepo.save(modelMapper.map(parentDto,ParentModel.class));
            return VeriableList.RSP_SUCCESS;

        }else {
            return VeriableList.R$P_NO_DATA_FOUND;
        }
    }

    //-----------------------------------------To Delete the Doctor----------------------------------------

    public String deleteParent(int userId){
        if (parentRepo.existsById(userId)){
            parentRepo.deleteById(userId);
            return VeriableList.RSP_SUCCESS;
        }else {
            return VeriableList.R$P_NO_DATA_FOUND;
        }
    }
}
