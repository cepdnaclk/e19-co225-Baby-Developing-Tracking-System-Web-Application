package com.babydevelopingtrackingsystem.Model;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public enum Permission {

    ADMIN_READ("admin:read"),
    ADMIN_UPDATE("admin:update"),
    ADMIN_CREATE("admin:create"),
    ADMIN_DELETE("admin:delete"),
    PARENT_READ("parent:read"),
    PARENT_UPDATE("parent:update"),
    PARENT_CREATE("parent:create"),
    PARENT_DELETE("parent:delete"),
    DOCTOR_READ("doctor:read"),
    DOCTOR_UPDATE("doctor:update"),
    DOCTOR_CREATE("doctor:create"),
    DOCTOR_DELETE("doctor:delete"),
    MIDWIFE_READ("midwife:read"),
    MIDWIFE_UPDATE("midwife:update"),
    MIDWIFE_CREATE("midwife:create"),
    MIDWIFE_DELETE("midwife:delete")

    ;

    @Getter
    private final String permission;
}
