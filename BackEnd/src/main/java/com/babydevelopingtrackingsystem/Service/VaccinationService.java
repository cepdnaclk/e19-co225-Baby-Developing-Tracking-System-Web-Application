package com.babydevelopingtrackingsystem.Service;

import com.babydevelopingtrackingsystem.Dto.VaccinationDto;
import com.babydevelopingtrackingsystem.Repository.VaccinationRepository;
import org.springframework.stereotype.Service;

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
                .map(vaccine -> vaccinationDtoMapper.apply(vaccine))
                .collect(Collectors.toList());

    }

    //TODO
    // Service methods for Controller
}
