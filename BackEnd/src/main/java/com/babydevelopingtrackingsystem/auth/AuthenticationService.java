package com.babydevelopingtrackingsystem.auth;


import com.babydevelopingtrackingsystem.Model.*;
import com.babydevelopingtrackingsystem.Repository.*;
import com.babydevelopingtrackingsystem.Utill.Role;
import com.babydevelopingtrackingsystem.Utill.TokenType;
import com.babydevelopingtrackingsystem.config.JwtService;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
  private final UserRepository repository;
  private final ParentRepository parentRepository;
  private final DoctorRepository doctorRepository;
  private final MidwifeRepository midwifeRepository;
  private final TokenRepository tokenRepository;
  private final PasswordEncoder passwordEncoder;
  private final JwtService jwtService;
  private final AuthenticationManager authenticationManager;

  public AuthenticationResponse register(RegisterRequest request) {
    if(repository.existsUserByEmail(request.getEmail()))
      return new AuthenticationResponse();
    User user;


    Role role  = request.getRole();

    if(role.equals(Role.PARENT)){
      user = new Parent(
              request.getFirstname(),
              request.getLastname(),
              request.getEmail(),
              passwordEncoder.encode(request.getPassword()),
              request.getRole(),
              "Mother"
              );




    }
    else if(role.equals(Role.DOCTOR)){
      user = new Doctor(
              request.getFirstname(),
              request.getLastname(),
              request.getEmail(),
              passwordEncoder.encode(request.getPassword()),
              request.getRole(),
              null,
              null,
              null
      );




    }
    else if(role.equals(Role.MIDWIFE)){
      user = new Midwife(
              request.getFirstname(),
              request.getLastname(),
              request.getEmail(),
              passwordEncoder.encode(request.getPassword()),
              request.getRole(),
              null,
              null

      );




    }
    else{
      user = User.builder()
              .firstname(request.getFirstname())
              .lastname(request.getLastname())
              .email(request.getEmail())
              .password(passwordEncoder.encode(request.getPassword()))
              .role(request.getRole())
              .build();



    }




    var savedUser = repository.save(user);
    var jwtToken = jwtService.generateToken(user);
    var refreshToken = jwtService.generateRefreshToken(user);
    saveUserToken(savedUser, jwtToken);
    return AuthenticationResponse.builder()
        .accessToken(jwtToken)
            .refreshToken(refreshToken)
            .role(request.getRole())
        .build();
  }

  public AuthenticationResponse authenticate(AuthenticationRequest request) {
    authenticationManager.authenticate(
        new UsernamePasswordAuthenticationToken(
            request.getEmail(),
            request.getPassword()
        )
    );
    var user = repository.findByEmail(request.getEmail())
        .orElseThrow();
    var jwtToken = jwtService.generateToken(user);
    var refreshToken = jwtService.generateRefreshToken(user);
    revokeAllUserTokens(user);
    saveUserToken(user, jwtToken);
    return AuthenticationResponse.builder()
        .accessToken(jwtToken)
            .refreshToken(refreshToken)
                    .role(repository.findByEmail(request.getEmail()).get().getRole())
            
        .build();
  }

  private void saveUserToken(User user, String jwtToken) {
    var token = Token.builder()
        .user(user)
        .token(jwtToken)
        .tokenType(TokenType.BEARER)
        .expired(false)
        .revoked(false)
        .build();
    tokenRepository.save(token);
  }

  private void revokeAllUserTokens(User user) {
    var validUserTokens = tokenRepository.findAllValidTokenByUser(user.getId());
    if (validUserTokens.isEmpty())
      return;
    validUserTokens.forEach(token -> {
      token.setExpired(true);
      token.setRevoked(true);
    });
    tokenRepository.saveAll(validUserTokens);
  }

  public void refreshToken(
          HttpServletRequest request,
          HttpServletResponse response
  ) throws IOException {
    final String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
    final String refreshToken;
    final String userEmail;
    if (authHeader == null ||!authHeader.startsWith("Bearer ")) {
      return;
    }
    refreshToken = authHeader.substring(7);
    userEmail = jwtService.extractUsername(refreshToken);
    if (userEmail != null) {
      var user = this.repository.findByEmail(userEmail)
              .orElseThrow();
      if (jwtService.isTokenValid(refreshToken, user)) {
        var accessToken = jwtService.generateToken(user);
        revokeAllUserTokens(user);
        saveUserToken(user, accessToken);
        var authResponse = AuthenticationResponse.builder()
                .accessToken(accessToken)
                .refreshToken(refreshToken)
                .build();
        new ObjectMapper().writeValue(response.getOutputStream(), authResponse);
      }
    }
  }
}
