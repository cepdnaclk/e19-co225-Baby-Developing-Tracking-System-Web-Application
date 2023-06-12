package com.babydevelopingtrackingsystem.Model;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.Collections;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import static com.babydevelopingtrackingsystem.Model.Permission.*;

@RequiredArgsConstructor
public enum Role {

    USER(Collections.emptySet()),
    ADMIN(
            Set.of(
                    ADMIN_READ,
                    ADMIN_UPDATE,
                    ADMIN_DELETE,
                    ADMIN_CREATE,
                    PARENT_READ,
                    PARENT_UPDATE,
                    PARENT_DELETE,
                    PARENT_CREATE,
                    DOCTOR_READ,
                    DOCTOR_UPDATE,
                    DOCTOR_DELETE,
                    DOCTOR_CREATE,
                    MIDWIFE_READ,
                    MIDWIFE_UPDATE,
                    MIDWIFE_DELETE,
                    MIDWIFE_CREATE
            )
    ),
    PARENT(
            Set.of(
                    PARENT_READ,
                    PARENT_UPDATE,
                    PARENT_DELETE,
                    PARENT_CREATE
            )
    ),
    DOCTOR(
            Set.of(
                    DOCTOR_READ,
                    DOCTOR_UPDATE,
                    DOCTOR_DELETE,
                    DOCTOR_CREATE
            )
    ),
    MIDWIFE(
            Set.of(
                    MIDWIFE_READ,
                    MIDWIFE_UPDATE,
                    MIDWIFE_DELETE,
                    MIDWIFE_CREATE
            )
    ),

    ;

    @Getter
    private final Set<Permission> permissions;

    public List<SimpleGrantedAuthority> getAuthorities() {
        var authorities = getPermissions()
                .stream()
                .map(permission -> new SimpleGrantedAuthority(permission.getPermission()))
                .collect(Collectors.toList());
        authorities.add(new SimpleGrantedAuthority("ROLE_" + this.name()));
        return authorities;
    }
}