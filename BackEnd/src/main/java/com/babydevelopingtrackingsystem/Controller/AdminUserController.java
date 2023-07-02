package com.babydevelopingtrackingsystem.Controller;
import com.babydevelopingtrackingsystem.Dto.ResponseDto;

import com.babydevelopingtrackingsystem.Dto.UserDto;
import com.babydevelopingtrackingsystem.Service.AdminUserService;
import com.babydevelopingtrackingsystem.Utill.VariableList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "api/v1/admin/user")
public class AdminUserController{

    @Autowired
    private AdminUserService adminUserService;

    @Autowired
    private ResponseDto responseDto;

    @PostMapping(value = "/saveUser")
    public ResponseEntity saveUser(@RequestBody UserDto userDto) {

        try {
            String res = adminUserService.saveUser(userDto);
            if (res.equals("00")) {
                responseDto.setCode(VariableList.RSP_SUCCESS);
                responseDto.setMessage("Success");
                responseDto.setContent(userDto);
                return new ResponseEntity(responseDto, HttpStatus.ACCEPTED);
            } else if (res.equals("06 ")) {

                responseDto.setCode(VariableList.RSP_DUPLICATED);
                responseDto.setMessage("All ready added");
                responseDto.setContent(userDto);
                return new ResponseEntity(responseDto, HttpStatus.BAD_REQUEST);

            } else {

                responseDto.setCode(VariableList.RSP_FAIL);
                responseDto.setMessage("Error");
                responseDto.setContent(null);
                return new ResponseEntity(responseDto, HttpStatus.BAD_REQUEST);

            }
        } catch (Exception ex) {

            responseDto.setCode(VariableList.RSP_ERROR);
            responseDto.setMessage(ex.getMessage());
            responseDto.setContent(null);
            return new ResponseEntity(responseDto, HttpStatus.INTERNAL_SERVER_ERROR);

        }

    }

    @PutMapping(value = "/updateUser")
    public ResponseEntity updateUser(@RequestBody UserDto userDto) {

        try {
            String res = adminUserService.updateUser(userDto);
            if (res.equals("00")) {
                responseDto.setCode(VariableList.RSP_SUCCESS);
                responseDto.setMessage("Success");
                responseDto.setContent(userDto);
                return new ResponseEntity(responseDto, HttpStatus.ACCEPTED);
            } else if (res.equals("06 ")) {

                responseDto.setCode(VariableList.RSP_DUPLICATED);
                responseDto.setMessage("Flight not funded");
                responseDto.setContent(userDto);
                return new ResponseEntity(responseDto, HttpStatus.BAD_REQUEST);

            } else {

                responseDto.setCode(VariableList.RSP_FAIL);
                responseDto.setMessage("Error");
                responseDto.setContent(null);
                return new ResponseEntity(responseDto, HttpStatus.BAD_REQUEST);

            }
        } catch (Exception ex) {

            responseDto.setCode(VariableList.RSP_ERROR);
            responseDto.setMessage(ex.getMessage());
            responseDto.setContent(null);
            return new ResponseEntity(responseDto, HttpStatus.INTERNAL_SERVER_ERROR);

        }

    }

    @GetMapping("/getAllUser")
    public ResponseEntity getAllUser(){
        try {

            List<UserDto> userDtoList = adminUserService.getAllUser();
            responseDto.setCode(VariableList.RSP_SUCCESS);
            responseDto.setMessage("Success");
            responseDto.setContent(userDtoList);
            return new ResponseEntity(responseDto, HttpStatus.ACCEPTED);
        }catch (Exception ex){
            responseDto.setCode(VariableList.RSP_ERROR);
            responseDto.setMessage(ex.getMessage());
            responseDto.setContent(null);
            return new ResponseEntity(responseDto, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping(value = "/deleteUser/{UserId}")
    public ResponseEntity deleteUser(@PathVariable int UserId) {

        try {
            String res = adminUserService.deleteUser(UserId);
            if (res.equals("00")) {
                responseDto.setCode(VariableList.RSP_SUCCESS);
                responseDto.setMessage("Success");
                responseDto.setContent(null);
                return new ResponseEntity(responseDto, HttpStatus.ACCEPTED);
            } else {

                responseDto.setCode(VariableList.RSP_FAIL);
                responseDto.setMessage("No Flight");
                responseDto.setContent(null);
                return new ResponseEntity(responseDto, HttpStatus.BAD_REQUEST);

            }
        } catch (Exception ex) {

            responseDto.setCode(VariableList.RSP_ERROR);
            responseDto.setMessage(ex.getMessage());
            responseDto.setContent(null);
            return new ResponseEntity(responseDto, HttpStatus.INTERNAL_SERVER_ERROR);

        }

    }



}

