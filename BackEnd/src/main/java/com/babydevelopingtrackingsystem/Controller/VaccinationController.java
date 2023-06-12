package com.babydevelopingtrackingsystem.Controller;

import com.babydevelopingtrackingsystem.Dto.VaccinationDto;
import com.babydevelopingtrackingsystem.Service.VaccinationService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/vaccine")
public class VaccinationController {
    private final VaccinationService vaccinationService;


    public VaccinationController(VaccinationService vaccinationService) {
        this.vaccinationService = vaccinationService;
    }

    @GetMapping
    public ResponseEntity<List<VaccinationDto>> getAllVaccinations(){
        return ResponseEntity.ok(vaccinationService.getAllVaccinations());

    }

    @GetMapping("{id}")
    public ResponseEntity<VaccinationDto> getVaccinationById(@PathVariable int id){
        return ResponseEntity.ok(vaccinationService.getVaccinationById(id));
    }
    @PostMapping
    public ResponseEntity<VaccinationDto> createVaccination(@RequestBody VaccinationDto vaccinationDto){
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(vaccinationService.createVaccination(vaccinationDto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<VaccinationDto> updateVaccination(@PathVariable int id, @RequestBody VaccinationDto vaccinationDto) {
        VaccinationDto updatedVaccinationDto = vaccinationService.updateVaccination(id, vaccinationDto);
        if (updatedVaccinationDto != null) {
            return ResponseEntity.ok(updatedVaccinationDto);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteVaccination(@PathVariable int id) {
        boolean deleted = vaccinationService.deleteVaccination(id);
        if (deleted) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
