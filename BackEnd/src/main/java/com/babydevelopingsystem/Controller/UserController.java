package com.babydevelopingsystem.Controller;
import com.babydevelopingsystem.Dto.userDto;
import com.babydevelopingsystem.Dto.responseDto;
import com.babydevelopingsystem.Service.userService;
import com.babydevelopingsystem.Utill.VeriableList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/user")
public class UserController {


    @Autowired
    private responseDto responseDto;

    @Autowired
    private userService userService;

    //----------------------------------------Save the user----------------------------------------
    @PostMapping(value = "/saveUser")
    public ResponseEntity saveUser(@RequestBody userDto userDto){
        try {
            String res = userService.saveUser(userDto);

            if (res.equals("00")){
                responseDto.setCode(VeriableList.RSP_SUCCESS);
                responseDto.setMessage("Success");
                responseDto.setContent(userDto);
                return new ResponseEntity(responseDto, HttpStatus.ACCEPTED);
            }else if (res.equals("06")){
                responseDto.setCode(VeriableList.RSP_DUPLICATED);
                responseDto.setMessage("User saved");
                responseDto.setContent(userDto);
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



    //----------------------------------------Update the user----------------------------------------
    @PutMapping(value = "/updateUser")
    public ResponseEntity updateUser(@RequestBody userDto userDto){
        try {
            String res = userService.updateUser(userDto);

            if (res.equals("00")){
                responseDto.setCode(VeriableList.RSP_SUCCESS);
                responseDto.setMessage("Success");
                responseDto.setContent(userDto);
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


    //-----------------------------------------To Delete the user----------------------------------------

    @DeleteMapping(value = "/deleteUser/{userId}")
    public ResponseEntity deleteUser(@PathVariable String userId){
        try {
            String res = userService.deleteUser(userId);

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
