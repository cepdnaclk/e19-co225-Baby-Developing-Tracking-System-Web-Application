package com.babydevelopingtrackingsystem.config;

import jakarta.servlet.Filter;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.logout.LogoutHandler;


import static com.babydevelopingtrackingsystem.Utill.Permission.*;
import static com.babydevelopingtrackingsystem.Utill.Role.*;
import static org.springframework.http.HttpMethod.DELETE;
import static org.springframework.http.HttpMethod.GET;
import static org.springframework.http.HttpMethod.POST;
import static org.springframework.http.HttpMethod.PUT;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
@EnableMethodSecurity
public class SecurityConfiguration {

    private final JwtAuthenticationFilter jwtAuthFilter;
    private final AuthenticationProvider authenticationProvider;
    private final LogoutHandler logoutHandler;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .cors()
                .and()
                .csrf()
                .disable()
                .authorizeHttpRequests()
                .requestMatchers(
                        "/api/v1/auth/**",
                        "/api/v1/baby/**",
                       // "api/v1/adminUser/**",
                        //"api/v1/adminDoctor/**",
                        "/api/v1/user/**",//for development only
                        //"/api/v1/vaccine/**",//for development only
                        "/api/v1/add_vaccine/**",//for development only

                        "/v2/api-docs",
                        "/v3/api-docs",
                        "/v3/api-docs/**",
                        "/swagger-resources",
                        "/swagger-resources/**",
                        "/configuration/ui",
                        "/configuration/security",
                        "/swagger-ui/**",
                        "/webjars/**",
                        "/swagger-ui.html"
                )
                .permitAll()


                .requestMatchers("/api/v1/parent/**").hasAnyRole(ADMIN.name(), PARENT.name())

                .requestMatchers(GET, "/api/v1/parent/**").hasAnyAuthority(ADMIN_READ.name(), PARENT_READ.name())
                .requestMatchers(POST, "/api/v1/parent/**").hasAnyAuthority(ADMIN_CREATE.name(), PARENT_CREATE.name())
                .requestMatchers(PUT, "/api/v1/parent/**").hasAnyAuthority(ADMIN_UPDATE.name(), PARENT_UPDATE.name())
                .requestMatchers(DELETE, "/api/v1/parent/**").hasAnyAuthority(ADMIN_DELETE.name(), PARENT_DELETE.name())

                .requestMatchers("/api/v1/vaccine/**").hasAnyRole(ADMIN.name(), PARENT.name())
                .requestMatchers(GET, "/api/v1/vaccine/**").hasAnyAuthority(ADMIN_READ.name(), PARENT_READ.name())
                .requestMatchers("/api/v1/doctor/**").hasAnyRole(ADMIN.name(), DOCTOR.name())
                .requestMatchers(GET, "/api/v1/doctor/**").hasAnyAuthority(ADMIN_READ.name(), DOCTOR_READ.name())


                .requestMatchers("/api/v1/admin/**").hasRole(ADMIN.name())

                 .requestMatchers(GET, "/api/v1/admin/**").hasAuthority(ADMIN_READ.name())
                 .requestMatchers(POST, "/api/v1/admin/**").hasAuthority(ADMIN_CREATE.name())
                 .requestMatchers(PUT, "/api/v1/admin/**").hasAuthority(ADMIN_UPDATE.name())
                 .requestMatchers(DELETE, "/api/v1/admin/**").hasAuthority(ADMIN_DELETE.name())

//                .requestMatchers("/api/v1/add_vaccine/**").hasAnyRole(ADMIN.name(),DOCTOR.name())
//
//                .requestMatchers(GET, "/api/v1/add_vaccine/**").hasAnyAuthority(ADMIN_READ.name(),
//                                                                                        DOCTOR_READ.name())
//                .requestMatchers(POST, "/api/v1/add_vaccine/**").hasAnyAuthority(ADMIN_CREATE.name(),
//                                                                                        DOCTOR_CREATE.name())
//                .requestMatchers(PUT, "/api/v1/add_vaccine/**").hasAnyAuthority(ADMIN_UPDATE.name(),
//                                                                                        DOCTOR_UPDATE.name())
//                .requestMatchers(DELETE, "/api/v1/add_vaccine/**").hasAnyAuthority(ADMIN_DELETE.name(),
//                                                                                            DOCTOR_DELETE.name())


                .anyRequest()
                .authenticated()
                .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authenticationProvider(authenticationProvider)
                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)
                .logout()
                .logoutUrl("/api/v1/auth/logout")
                .addLogoutHandler(logoutHandler)
                .logoutSuccessHandler((request, response, authentication) -> SecurityContextHolder.clearContext())
        ;

        return http.build();
    }
}
