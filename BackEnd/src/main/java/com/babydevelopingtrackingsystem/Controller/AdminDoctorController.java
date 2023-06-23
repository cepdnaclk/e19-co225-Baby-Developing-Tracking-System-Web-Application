package com.babydevelopingtrackingsystem.Controller;
import com.babydevelopingtrackingsystem.Dto.DoctorDto;
import com.babydevelopingtrackingsystem.Dto.ResponseDto;
import com.babydevelopingtrackingsystem.Service.AdminDoctorService;
import com.babydevelopingtrackingsystem.Utill.VariableList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "api/v1/admin/doctor")
public class AdminDoctorController {

    @Autowired
    private AdminDoctorService adminDoctorService;

    @Autowired
    private ResponseDto responseDto;

    @PostMapping(value = "/saveDoctor")
    public ResponseEntity saveDoctor(@RequestBody DoctorDto doctorDto) {

        try {
            String res = adminDoctorService.saveDoctor(doctorDto);
            if (res.equals("00")) {
                responseDto.setCode(VariableList.RSP_SUCCESS);
                responseDto.setMessage("Success");
                responseDto.setContent(doctorDto);
                return new ResponseEntity(responseDto, HttpStatus.ACCEPTED);
            } else if (res.equals("06 ")) {

                responseDto.setCode(VariableList.RSP_DUPLICATED);
                responseDto.setMessage("All ready added");
                responseDto.setContent(doctorDto);
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

    @PutMapping(value = "/updateDocotr")
    public ResponseEntity updateDoctor(@RequestBody DoctorDto doctorDto) {

        try {
            String res = adminDoctorService.updateDoctor(doctorDto);
            if (res.equals("00")) {
                responseDto.setCode(VariableList.RSP_SUCCESS);
                responseDto.setMessage("Success");
                responseDto.setContent(doctorDto);
                return new ResponseEntity(responseDto, HttpStatus.ACCEPTED);
            } else if (res.equals("06 ")) {

                responseDto.setCode(VariableList.RSP_DUPLICATED);
                responseDto.setMessage("Flight not funded");
                responseDto.setContent(doctorDto);
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

    @GetMapping("/getAllDoctor")
    public ResponseEntity getAllDoctor(){
        try {

            List<DoctorDto> userDtoList = adminDoctorService.getAllDoctor();
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

    @DeleteMapping(value = "/deleteDoctor/{UserId}")
    public ResponseEntity deleteDoctor(@PathVariable int UserId) {

        try {
            String res = adminDoctorService.deleteDoctor(UserId);
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
