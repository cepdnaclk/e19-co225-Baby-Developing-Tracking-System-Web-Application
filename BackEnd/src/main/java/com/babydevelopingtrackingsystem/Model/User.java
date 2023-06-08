package com.babydevelopingtrackingsystem.Model;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "user")
public class User {

    @Id
    private String email;


    private String firstname;
    private String lastName;
    private String password;
    private String userType;


    public User(){

    }
    public User(String email, String firstname, String lastName, String password, String userType) {
        this.email = email;
        this.firstname = firstname;
        this.lastName = lastName;
        this.password = password;
        this.userType = userType;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUserType() {
        return userType;
    }

    public void setUserType(String userType) {
        this.userType = userType;
    }
}