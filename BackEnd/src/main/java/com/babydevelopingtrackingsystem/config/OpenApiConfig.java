package com.babydevelopingtrackingsystem.config;



import io.swagger.v3.oas.annotations.OpenAPIDefinition;

import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;


import io.swagger.v3.oas.annotations.servers.Server;

@OpenAPIDefinition(
        info = @Info(
                contact = @Contact(
                        name = "Idea 2 - Web - Group 9 - 16",
                        email = "e19008@eng.pdn.ac.lk"

                ),
                description = "API Documentation for Baby Development Tracking System",
                title = "Baby Development Tracking System API",
                version = "1.0",

                termsOfService = "Terms of service"
        ),
        servers = {
                @Server(
                        description = "Local ENV",
                        url = "http://localhost:8080"
                ),

        }


)

public class OpenApiConfig {
}
