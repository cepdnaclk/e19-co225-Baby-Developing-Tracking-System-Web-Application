package com.babydevelopingsystem.Controller;
import com.babydevelopingsystem.Dto.DoctorDto;
import com.babydevelopingsystem.Dto.responseDto;
import com.babydevelopingsystem.Service.DoctorService;
import com.babydevelopingsystem.Utill.VeriableList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/doctor")
public class doctorControll {


    @Autowired
    private responseDto responseDto;

    @Autowired
    private DoctorService doctorService;

    //----------------------------------------Save the doctor----------------------------------------
    @PostMapping(value = "/saveDoctor")
    public ResponseEntity saveDoctor(@RequestBody DoctorDto doctorDto){
        try {
            String res = doctorService.saveDoctor(doctorDto);

            if (res.equals("00")){
                responseDto.setCode(VeriableList.RSP_SUCCESS);
                responseDto.setMessage("Success");
                responseDto.setContent(doctorDto);
                return new ResponseEntity(responseDto, HttpStatus.ACCEPTED);
            }else if (res.equals("06")){
                responseDto.setCode(VeriableList.RSP_DUPLICATED);
                responseDto.setMessage("User saved");
                responseDto.setContent(doctorDto);
                return new ResponseEntity(responseDto, HttpStatus.BAD_REQUEST);
            }else {

                responseDto.setCode(VeriableList.RSP_ERROR);
                responseDto.setMessage("Error");
                responseDto.setContent(null);
                return new ResponseEntity(responseDto, HttpStatus.BAD_REQUEST);
            }
        }catch (Exception ex){

            responseDto.setCode(VeriableList.RSP_ERROR);
            responseDto.setMessage(ex.getMessage());
            responseDto.setContent(null);
            return new ResponseEntity(responseDto, HttpStatus.BAD_REQUEST);

        }
    }



    //----------------------------------------Update the Doctor----------------------------------------
    @PutMapping(value = "/updateDoctor")
    public ResponseEntity updateDoctor(@RequestBody DoctorDto doctorDto){
        try {
            String res = doctorService.updateDoctor(doctorDto);

            if (res.equals("00")){
                responseDto.setCode(VeriableList.RSP_SUCCESS);
                responseDto.setMessage("Success");
                responseDto.setContent(doctorDto);
                return new ResponseEntity(responseDto, HttpStatus.ACCEPTED);
            }else {
                responseDto.setCode(VeriableList.RSP_ERROR);
                responseDto.setMessage("Error");
                responseDto.setContent(null);
                return new ResponseEntity(responseDto, HttpStatus.BAD_REQUEST);
            }
        }catch (Exception ex){

            responseDto.setCode(VeriableList.RSP_ERROR);
            responseDto.setMessage(ex.getMessage());
            responseDto.setContent(null);
            return new ResponseEntity(responseDto, HttpStatus.BAD_REQUEST);

        }
    }


    //-----------------------------------------To Delete the Doctor----------------------------------------

    @DeleteMapping(value = "/deleteDoctor/{userId}")
    public ResponseEntity deleteDoctor(@PathVariable int userId){
        try {
            String res = doctorService.deleteDoctor(userId);

            if (res.equals("00")){
                responseDto.setCode(VeriableList.RSP_SUCCESS);
                responseDto.setMessage("Success");
                responseDto.setContent(null);
                return new ResponseEntity(responseDto, HttpStatus.ACCEPTED);
            }else {
                responseDto.setCode(VeriableList.RSP_ERROR);
                responseDto.setMessage("Error");
                responseDto.setContent(null);
                return new ResponseEntity(responseDto, HttpStatus.BAD_REQUEST);
            }
        }catch (Exception ex){

            responseDto.setCode(VeriableList.RSP_ERROR);
            responseDto.setMessage(ex.getMessage());
            responseDto.setContent(null);
            return new ResponseEntity(responseDto, HttpStatus.BAD_REQUEST);

        }
    }


}
