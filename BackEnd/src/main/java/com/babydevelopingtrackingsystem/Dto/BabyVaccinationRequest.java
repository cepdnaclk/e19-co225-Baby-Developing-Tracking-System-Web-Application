package com.babydevelopingtrackingsystem.Dto;

import java.time.LocalDate;

public record BabyVaccinationRequest(
    Integer babyId,
    Integer vaccineId,
    LocalDate date
    )
{

}
