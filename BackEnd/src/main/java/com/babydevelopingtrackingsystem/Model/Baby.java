package com.babydevelopingtrackingsystem.Model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@Table(name = "baby")
@AllArgsConstructor
public class Baby {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String Name;
    private String DateofBirth;
    private String Gender;
    private String BloodType;
    private int BirthWeight;
    private int BirthLength;
    private String EyeColor;
    private String HairColor;
    private String SkinColor;
    private String Nationality;
    private String BirthPlace;
    private String BirthHospital;
    private String ParentInformation;
    private String ContactInformation;
    private String MedicalConditions;
    private String Allergies;
    private String ImmunizationRecords;
    private String GrowthRecords;
    private String DevelopmentalMilestones;



    @OneToMany(mappedBy = "baby")
    private List<BabyVaccination> babyVaccinations;

    @ManyToOne
    @JoinColumn(name="parent_id")
    private Parent parent;

    @ManyToOne
    @JoinColumn(name="doctor_id")
    private Doctor doctor;

    @ManyToOne
    @JoinColumn(name="midwife_id")
    private Midwife midwife;




    public Baby(int id, String name, String dateofBirth, String gender, String bloodType, int birthWeight, int birthLength, String eyeColor, String hairColor, String skinColor, String nationality, String birthPlace, String birthHospital, String parentInformation, String contactInformation, String medicalConditions, String allergies, String immunizationRecords, String growthRecords, String developmentalMilestones) {
        this.id = id;
        Name = name;
        DateofBirth = dateofBirth;
        Gender = gender;
        BloodType = bloodType;
        BirthWeight = birthWeight;
        BirthLength = birthLength;
        EyeColor = eyeColor;
        HairColor = hairColor;
        SkinColor = skinColor;
        Nationality = nationality;
        BirthPlace = birthPlace;
        BirthHospital = birthHospital;
        ParentInformation = parentInformation;
        ContactInformation = contactInformation;
        MedicalConditions = medicalConditions;
        Allergies = allergies;
        ImmunizationRecords = immunizationRecords;
        GrowthRecords = growthRecords;
        DevelopmentalMilestones = developmentalMilestones;
    }

    public Baby(){

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public String getDateofBirth() {
        return DateofBirth;
    }

    public void setDateofBirth(String dateofBirth) {
        DateofBirth = dateofBirth;
    }

    public String getGender() {
        return Gender;
    }

    public void setGender(String gender) {
        Gender = gender;
    }

    public String getBloodType() {
        return BloodType;
    }

    public void setBloodType(String bloodType) {
        BloodType = bloodType;
    }

    public int getBirthWeight() {
        return BirthWeight;
    }

    public void setBirthWeight(int birthWeight) {
        BirthWeight = birthWeight;
    }

    public int getBirthLength() {
        return BirthLength;
    }

    public void setBirthLength(int birthLength) {
        BirthLength = birthLength;
    }

    public String getEyeColor() {
        return EyeColor;
    }

    public void setEyeColor(String eyeColor) {
        EyeColor = eyeColor;
    }

    public String getHairColor() {
        return HairColor;
    }

    public void setHairColor(String hairColor) {
        HairColor = hairColor;
    }

    public String getSkinColor() {
        return SkinColor;
    }

    public void setSkinColor(String skinColor) {
        SkinColor = skinColor;
    }

    public String getNationality() {
        return Nationality;
    }

    public void setNationality(String nationality) {
        Nationality = nationality;
    }

    public String getBirthPlace() {
        return BirthPlace;
    }

    public void setBirthPlace(String birthPlace) {
        BirthPlace = birthPlace;
    }

    public String getBirthHospital() {
        return BirthHospital;
    }

    public void setBirthHospital(String birthHospital) {
        BirthHospital = birthHospital;
    }

    public String getParentInformation() {
        return ParentInformation;
    }

    public void setParentInformation(String parentInformation) {
        ParentInformation = parentInformation;
    }

    public String getContactInformation() {
        return ContactInformation;
    }

    public void setContactInformation(String contactInformation) {
        ContactInformation = contactInformation;
    }

    public String getMedicalConditions() {
        return MedicalConditions;
    }

    public void setMedicalConditions(String medicalConditions) {
        MedicalConditions = medicalConditions;
    }

    public String getAllergies() {
        return Allergies;
    }

    public void setAllergies(String allergies) {
        Allergies = allergies;
    }

    public String getImmunizationRecords() {
        return ImmunizationRecords;
    }

    public void setImmunizationRecords(String immunizationRecords) {
        ImmunizationRecords = immunizationRecords;
    }

    public String getGrowthRecords() {
        return GrowthRecords;
    }

    public void setGrowthRecords(String growthRecords) {
        GrowthRecords = growthRecords;
    }

    public String getDevelopmentalMilestones() {
        return DevelopmentalMilestones;
    }

    public void setDevelopmentalMilestones(String developmentalMilestones) {
        DevelopmentalMilestones = developmentalMilestones;
    }

    public List<BabyVaccination> getBabyVaccinations() {
        return babyVaccinations;
    }

    public void setBabyVaccinations(List<BabyVaccination> babyVaccinations) {
        this.babyVaccinations = babyVaccinations;
    }
}
