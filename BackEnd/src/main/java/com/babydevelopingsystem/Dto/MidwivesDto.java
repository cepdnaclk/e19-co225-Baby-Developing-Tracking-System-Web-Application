package com.babydevelopingsystem.Dto;

public class MidwivesDto {

    private int midwivesId;
    private String firstName;
    private String lastName;
    private String gender;
    private String Qualifications;
    private boolean availability;
    private String contactNum;



    public MidwivesDto(){

    }

    public MidwivesDto(int midwivesId, String firstName, String lastName, String gender, String qualifications, boolean availability, String contactNum) {
        this.midwivesId = midwivesId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        Qualifications = qualifications;
        this.availability = availability;
        this.contactNum = contactNum;

    }

    public int getMidwivesId() {
        return midwivesId;
    }

    public void setMidwivesId(int midwivesId) {
        this.midwivesId = midwivesId;
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

    public String getQualifications() {
        return Qualifications;
    }

    public void setQualifications(String qualifications) {
        Qualifications = qualifications;
    }

    public boolean isAvailability() {
        return availability;
    }

    public void setAvailability(boolean availability) {
        this.availability = availability;
    }

    public String getContactNum() {
        return contactNum;
    }

    public void setContactNum(String contactNum) {
        this.contactNum = contactNum;
    }


}
