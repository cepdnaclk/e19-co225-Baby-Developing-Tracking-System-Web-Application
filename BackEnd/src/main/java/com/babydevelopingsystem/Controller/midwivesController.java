package com.babydevelopingsystem.Controller;
import com.babydevelopingsystem.Dto.*;
import com.babydevelopingsystem.Service.MidviewsService;
import com.babydevelopingsystem.Utill.VeriableList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/midwives")

public class midwivesController {


    @Autowired
    private responseDto responseDto;

    @Autowired
    private MidviewsService midviewsService;

    //----------------------------------------Save the Midwives----------------------------------------
    @PostMapping(value = "/saveMidwives")
    public ResponseEntity saveMidwives(@RequestBody MidwivesDto midwivesDto){
        try {
            String res = midviewsService.saveMidwives(midwivesDto);

            if (res.equals("00")){
                responseDto.setCode(VeriableList.RSP_SUCCESS);
                responseDto.setMessage("Success");
                responseDto.setContent(midwivesDto);
                return new ResponseEntity(responseDto, HttpStatus.ACCEPTED);
            }else if (res.equals("06")){
                responseDto.setCode(VeriableList.RSP_DUPLICATED);
                responseDto.setMessage("User saved");
                responseDto.setContent(midwivesDto);
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



    //----------------------------------------Update the Midwives----------------------------------------
    @PutMapping(value = "/updateMidwives")
    public ResponseEntity updateMidwives(@RequestBody MidwivesDto midwivesDto){
        try {
            String res = midviewsService.updateMidwives(midwivesDto);

            if (res.equals("00")){
                responseDto.setCode(VeriableList.RSP_SUCCESS);
                responseDto.setMessage("Success");
                responseDto.setContent(midwivesDto);
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


    //-----------------------------------------To Delete the Midwives----------------------------------------

    @DeleteMapping(value = "/deleteMidwives/{userId}")
    public ResponseEntity deleteMidwives(@PathVariable int userId){
        try {
            String res = midviewsService.deleteMidwives(userId);

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
