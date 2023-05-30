package com.babydevelopingsystem.Model;


import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "Parent")
public class ParentModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int parentId;

    private String firstName;
    private String lastName;
    private String gender;
    private String address;
    private String contactNum;

    public ParentModel(){

    }
    public ParentModel(int parentId, String firstName, String lastName, String gender, String address, String contactNum) {
        this.parentId = parentId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.address = address;
        this.contactNum = contactNum;
    }

    public int getParentId() {
        return parentId;
    }

    public void setParentId(int parentId) {
        this.parentId = parentId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getContactNum() {
        return contactNum;
    }

    public void setContactNum(String contactNum) {
        this.contactNum = contactNum;
    }
}
