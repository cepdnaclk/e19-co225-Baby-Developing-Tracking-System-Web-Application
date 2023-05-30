package com.babydevelopingsystem.Dto;

public class DoctorDto {

    private int doctorId;
    private String firstName;
    private String lastName;
    private String gender;
    private String specialization;
    private String Qualifications;
    private boolean availability;
    private int ConsultationFee;
    private String contactNum;



    public DoctorDto(){

    }

    public DoctorDto(int doctorId, String firstName, String lastName, String gender, String specialization, String qualifications, boolean availability, int consultationFee, String contactNum) {
        this.doctorId = doctorId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.specialization = specialization;
        Qualifications = qualifications;
        this.availability = availability;
        ConsultationFee = consultationFee;
        this.contactNum = contactNum;

    }

    public int getDoctorId() {
        return doctorId;
    }

    public void setDoctorId(int doctorId) {
        this.doctorId = doctorId;
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

    public String getSpecialization() {
        return specialization;
    }

    public void setSpecialization(String specialization) {
        this.specialization = specialization;
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

    public int getConsultationFee() {
        return ConsultationFee;
    }

    public void setConsultationFee(int consultationFee) {
        ConsultationFee = consultationFee;
    }

    public String getContactNum() {
        return contactNum;
    }

    public void setContactNum(String contactNum) {
        this.contactNum = contactNum;
    }


}
