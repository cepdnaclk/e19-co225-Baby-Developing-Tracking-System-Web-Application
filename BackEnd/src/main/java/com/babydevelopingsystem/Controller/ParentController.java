package com.babydevelopingsystem.Controller;
import com.babydevelopingsystem.Dto.ParentDto;
import com.babydevelopingsystem.Dto.responseDto;
import com.babydevelopingsystem.Service.ParentService;
import com.babydevelopingsystem.Utill.VeriableList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/parent")
public class ParentController {


    @Autowired
    private responseDto responseDto;

    @Autowired
    private ParentService parentService;

    //----------------------------------------Save the Parent----------------------------------------
    @PostMapping(value = "/saveParent")
    public ResponseEntity saveParent(@RequestBody ParentDto parentDto){
        try {
            String res = parentService.saveParent(parentDto);

            if (res.equals("00")){
                responseDto.setCode(VeriableList.RSP_SUCCESS);
                responseDto.setMessage("Success");
                responseDto.setContent(parentDto);
                return new ResponseEntity(responseDto, HttpStatus.ACCEPTED);
            }else if (res.equals("06")){
                responseDto.setCode(VeriableList.RSP_DUPLICATED);
                responseDto.setMessage("User saved");
                responseDto.setContent(parentDto);
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
    @PutMapping(value = "/updateParent")
    public ResponseEntity updateParent(@RequestBody ParentDto parentDto){
        try {
            String res = parentService.updateParent(parentDto);

            if (res.equals("00")){
                responseDto.setCode(VeriableList.RSP_SUCCESS);
                responseDto.setMessage("Success");
                responseDto.setContent(parentDto);
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


    //-----------------------------------------To Delete the Parent----------------------------------------

    @DeleteMapping(value = "/deleteParent/{userId}")
    public ResponseEntity deletePArent(@PathVariable int userId){
        try {
            String res = parentService.deleteParent(userId);

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
