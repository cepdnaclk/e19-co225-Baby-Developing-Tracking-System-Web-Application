package com.babydevelopingtrackingsystem;

//import com.babydevelopingtrackingsystem.Model.User;
//import com.babydevelopingtrackingsystem.Repository.UserRepository;
//import org.junit.jupiter.api.Test;
//import org.junit.Before;
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.mockito.InjectMocks;
//import org.mockito.Mock;
//import org.mockito.Mockito;
//import org.mockito.junit.MockitoJUnitRunner;
//import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
//import java.util.Optional;
//import static org.junit.Assert.*;
//import static org.mockito.ArgumentMatchers.anyString;

import com.babydevelopingtrackingsystem.Model.User;
import com.babydevelopingtrackingsystem.Repository.UserRepository;

import com.babydevelopingtrackingsystem.Utill.Role;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;

import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.Optional;

import static org.junit.Assert.*;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)
@DataJpaTest
public class UserRepositoryTests {

    @Mock
    private UserRepository userRepository;

    private User testUser;

    @Before
    public void setUp() {
        testUser = User.builder()
                .id(1)
                .email("test@example.com")
                .firstname("John")
                .lastname("Doe")
                .password("password")
                .role(Role.USER)
                .build();
    }

    @After
    public void tearDown() {
        testUser = null;
    }


//    @Test
//    public void itShouldRegisterIfEmailDoesNotExist() {
//        // Arrange
//        when(userRepository.existsUserByEmail(Mockito.anyString())).thenReturn(false);
//
//        // Act
//        boolean result = userRepository.existsUserByEmail(testUser.getEmail());
//
//        // Assert
//        assertTrue(result);
//    }
//
//    @Test
//    public void itShouldNotRegisterIfEmailExist() {
//        // Arrange
//        when(userRepository.existsUserByEmail(Mockito.anyString())).thenReturn(true);
//
//        // Act
//        boolean result = userRepository.existsUserByEmail(testUser.getEmail());
//
//        // Assert
//        assertFalse(result);
//    }


    @Test
    public void itShouldProvideAutoIncrementedUserIdEvenIdProvided() {
        // Arrange
        when(userRepository.save(testUser)).thenReturn(testUser);

        // Act
        User savedUser = userRepository.save(testUser);

        // Assert
        assertNotNull(savedUser);
        assertNotEquals((Long) 1L, savedUser.getId());

    }

    @Test
    public void itShouldReturnUserIfEmailExist() {
        // Arrange
        when(userRepository.findByEmail(testUser.getEmail())).thenReturn(Optional.of(testUser));

        // Act
        Optional<User> result = userRepository.findByEmail(testUser.getEmail());

        // Assert
        assertTrue(result.isPresent());
        assertEquals(testUser.getEmail(), result.get().getEmail());
    }

    @Test
    public void itShouldNotReturnUserIfEmailDoesNotExist() {
        // Arrange
        when(userRepository.findByEmail(anyString())).thenReturn(Optional.empty());

        // Act
        Optional<User> result = userRepository.findByEmail(testUser.getEmail());

        // Assert
        assertFalse(result.isPresent());
    }
}
