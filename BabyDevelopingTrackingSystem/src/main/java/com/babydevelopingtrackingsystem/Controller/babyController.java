package com.babydevelopingtrackingsystem.Controller;
import com.babydevelopingtrackingsystem.Dto.babyDto;
import com.babydevelopingtrackingsystem.Service.babyService;
import com.babydevelopingtrackingsystem.Dto.responseDto;
import com.babydevelopingtrackingsystem.Utill.VariableList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/baby")
public class babyController {

    @Autowired
    private responseDto responseDto;

    @Autowired
    private babyService babyService;

    //----------------------------------------Save the Baby----------------------------------------
    @PostMapping(value = "/saveBaby")
    public ResponseEntity saveBaby(@RequestBody babyDto babyDto){
        try {
            String res = babyService.saveBaby(babyDto);

            if (res.equals("00")){
                responseDto.setCode(VariableList.RSP_SUCCESS);
                responseDto.setMessage("Success");
                responseDto.setContent(babyDto);
                return new ResponseEntity(responseDto, HttpStatus.ACCEPTED);
            }else if (res.equals("06")){
                responseDto.setCode(VariableList.RSP_DUPLICATED);
                responseDto.setMessage("User saved");
                responseDto.setContent(babyDto);
                return new ResponseEntity(responseDto, HttpStatus.BAD_REQUEST);
            }else {

                responseDto.setCode(VariableList.RSP_ERROR);
                responseDto.setMessage("Error");
                responseDto.setContent(null);
                return new ResponseEntity(responseDto, HttpStatus.BAD_REQUEST);
            }
        }catch (Exception ex){

            responseDto.setCode(VariableList.RSP_ERROR);
            responseDto.setMessage(ex.getMessage());
            responseDto.setContent(null);
            return new ResponseEntity(responseDto, HttpStatus.BAD_REQUEST);

        }
    }



    //----------------------------------------Update the Baby----------------------------------------
    @PutMapping(value = "/updateBaby")
    public ResponseEntity updateBaby(@RequestBody babyDto babyDto){
        try {
            String res = babyService.updateBaby(babyDto);

            if (res.equals("00")){
                responseDto.setCode(VariableList.RSP_SUCCESS);
                responseDto.setMessage("Success");
                responseDto.setContent(babyDto);
                return new ResponseEntity(responseDto, HttpStatus.ACCEPTED);
            }else {
                responseDto.setCode(VariableList.RSP_ERROR);
                responseDto.setMessage("Error");
                responseDto.setContent(null);
                return new ResponseEntity(responseDto, HttpStatus.BAD_REQUEST);
            }
        }catch (Exception ex){

            responseDto.setCode(VariableList.RSP_ERROR);
            responseDto.setMessage(ex.getMessage());
            responseDto.setContent(null);
            return new ResponseEntity(responseDto, HttpStatus.BAD_REQUEST);

        }
    }


    //-----------------------------------------To Delete the Baby----------------------------------------

    @DeleteMapping(value = "/deleteBaby/{BabyId}")
    public ResponseEntity deleteBaby(@PathVariable int userId){
        try {
            String res = babyService.deleteBaby(userId);

            if (res.equals("00")){
                responseDto.setCode(VariableList.RSP_SUCCESS);
                responseDto.setMessage("Success");
                responseDto.setContent(null);
                return new ResponseEntity(responseDto, HttpStatus.ACCEPTED);
            }else {
                responseDto.setCode(VariableList.RSP_ERROR);
                responseDto.setMessage("Error");
                responseDto.setContent(null);
                return new ResponseEntity(responseDto, HttpStatus.BAD_REQUEST);
            }
        }catch (Exception ex){

            responseDto.setCode(VariableList.RSP_ERROR);
            responseDto.setMessage(ex.getMessage());
            responseDto.setContent(null);
            return new ResponseEntity(responseDto, HttpStatus.BAD_REQUEST);

        }
    }
}
