package com.babydevelopingtrackingsystem.Service;

import com.babydevelopingtrackingsystem.Dto.VaccinationDto;
import com.babydevelopingtrackingsystem.Model.Vaccination;
import com.babydevelopingtrackingsystem.Repository.VaccinationRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class VaccinationService {
    private final VaccinationRepository vaccinationRepository;
    private final VaccinationDtoMapper vaccinationDtoMapper;

    public VaccinationService(VaccinationRepository vaccinationRepository, VaccinationDtoMapper vaccinationDtoMapper) {
        this.vaccinationRepository = vaccinationRepository;
        this.vaccinationDtoMapper = vaccinationDtoMapper;
    }

    public List<VaccinationDto> getAllVaccinations() {
        return vaccinationRepository.findAll()
                .stream()
                .map(vaccinationDtoMapper)
                .collect(Collectors.toList());

    }

    public VaccinationDto getVaccinationById(int id) {
        return vaccinationRepository.findById(id)
                .map(vaccinationDtoMapper::apply)
                .get();
    }

    public VaccinationDto createVaccination(VaccinationDto vaccinationDto) {

        Vaccination vaccination = vaccinationRepository.save(vaccinationDtoMapper.reapply(vaccinationDto));
        return vaccinationDtoMapper.apply(vaccination);
    }

    public VaccinationDto updateVaccination(int id, VaccinationDto vaccinationDto) {
        boolean doesVaccinationExist = vaccinationRepository.existsById(id);
        if(doesVaccinationExist){
            Vaccination vaccination = vaccinationRepository.save(vaccinationDtoMapper.reapply(vaccinationDto));
            return vaccinationDtoMapper.apply(vaccination);
        }
        return null;
    }

    public boolean deleteVaccination(int id) {
        Vaccination existingVaccination = vaccinationRepository.findById(id).orElse(null);
        if (existingVaccination != null) {
            vaccinationRepository.delete(existingVaccination);
            return true;
        } else {
            return false;
        }

    }


    //TODO
    // Service methods for Controller
}
