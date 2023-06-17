package com.babydevelopingtrackingsystem.Controller;
import com.babydevelopingtrackingsystem.Dto.ParentDto;
import com.babydevelopingtrackingsystem.Dto.ResponseDto;
import com.babydevelopingtrackingsystem.Service.AddParentService;
import com.babydevelopingtrackingsystem.Utill.VariableList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "api/v1/adminParent")
public class AdminParentController {

    @Autowired
    private AddParentService addParentService;

    @Autowired
    private ResponseDto responseDto;

    @PostMapping(value = "/saveParent")
    public ResponseEntity saveParent(@RequestBody ParentDto parentDto) {

        try {
            String res = addParentService.saveParent(parentDto);
            if (res.equals("00")) {
                responseDto.setCode(VariableList.RSP_SUCCESS);
                responseDto.setMessage("Success");
                responseDto.setContent(parentDto);
                return new ResponseEntity(responseDto, HttpStatus.ACCEPTED);
            } else if (res.equals("06 ")) {

                responseDto.setCode(VariableList.RSP_DUPLICATED);
                responseDto.setMessage("All ready added");
                responseDto.setContent(parentDto);
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

    @PutMapping(value = "/updatePArent")
    public ResponseEntity updateParent(@RequestBody ParentDto parentDto) {

        try {
            String res = addParentService.updateParent(parentDto);
            if (res.equals("00")) {
                responseDto.setCode(VariableList.RSP_SUCCESS);
                responseDto.setMessage("Success");
                responseDto.setContent(parentDto);
                return new ResponseEntity(responseDto, HttpStatus.ACCEPTED);
            } else if (res.equals("06 ")) {

                responseDto.setCode(VariableList.RSP_DUPLICATED);
                responseDto.setMessage("Flight not funded");
                responseDto.setContent(parentDto);
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

    @GetMapping("/getAllParent")
    public ResponseEntity getAllParent(){
        try {

            List<ParentDto> parentDtoList = addParentService.getAllParent();
            responseDto.setCode(VariableList.RSP_SUCCESS);
            responseDto.setMessage("Success");
            responseDto.setContent(parentDtoList);
            return new ResponseEntity(responseDto, HttpStatus.ACCEPTED);
        }catch (Exception ex){
            responseDto.setCode(VariableList.RSP_ERROR);
            responseDto.setMessage(ex.getMessage());
            responseDto.setContent(null);
            return new ResponseEntity(responseDto, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping(value = "/deleteParent/{UserId}")
    public ResponseEntity deleteParent(@PathVariable int UserId) {

        try {
            String res = addParentService.deleteParent(UserId);
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
