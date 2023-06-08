package com.babydevelopingtrackingsystem.Service;

import com.babydevelopingtrackingsystem.Dto.VaccinationDto;
import com.babydevelopingtrackingsystem.Model.Vaccination;
import org.springframework.stereotype.Service;

import java.util.function.Function;
@Service
public class VaccinationDtoMapper implements Function<Vaccination, VaccinationDto> {
    public VaccinationDto apply(Vaccination vaccination){
        return new VaccinationDto(
                vaccination.getId(),
                vaccination.getName(),
                vaccination.getDose(),
                vaccination.getAge());

    }

}
