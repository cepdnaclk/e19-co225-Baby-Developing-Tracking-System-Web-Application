package com.babydevelopingtrackingsystem.Service;

import com.babydevelopingtrackingsystem.Dto.AppointmentResponse;
import com.babydevelopingtrackingsystem.Model.Appointment;
import com.babydevelopingtrackingsystem.Model.Parent;
import com.babydevelopingtrackingsystem.Model.User;
import com.babydevelopingtrackingsystem.Repository.AppointmentRepository;
import com.babydevelopingtrackingsystem.Repository.BabyRepository;
import com.babydevelopingtrackingsystem.Repository.ParentRepository;
import com.babydevelopingtrackingsystem.Repository.UserRepository;
import com.babydevelopingtrackingsystem.Utill.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class AppointmentService {

    private final AppointmentRepository appointmentRepository;
private final UserRepository userRepository;
    private final ParentRepository parentRepository;
    private final BabyRepository babyRepository;

    @Autowired
    public AppointmentService(AppointmentRepository appointmentRepository, UserRepository userRepository, ParentRepository parentRepository, BabyRepository babyRepository) {
        this.appointmentRepository = appointmentRepository;
        this.userRepository = userRepository;
        this.parentRepository = parentRepository;
        this.babyRepository = babyRepository;
    }

    public List<Appointment> getAllAppointments() {
        return appointmentRepository.findAll();
    }

    public Appointment getAppointmentById(int id) {
        return appointmentRepository.findById(id).orElse(null);
    }

    public Appointment createAppointment(Appointment appointment) {
        return appointmentRepository.save(appointment);
    }

    public Appointment updateAppointment(int id, Appointment appointment) {
        if (appointmentRepository.existsById(id)) {
            appointment.setId(id);
            return appointmentRepository.save(appointment);
        }
        return null;
    }

    public boolean deleteAppointment(int id) {
        if (appointmentRepository.existsById(id)) {
            appointmentRepository.deleteById(id);
            return true;
        }
        return false;
    }
    public void acceptAppointment(int id) {
        Optional<Appointment> appointment = appointmentRepository.findById(id);
        if (appointment.isPresent()){
            appointment.get().setAppointmentStatus("Accepted");
            appointmentRepository.save(appointment.get());
        }
    }

    public List<AppointmentResponse> findByUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        String email = authentication.getName();
        Optional<User> user = userRepository.findByEmail(email);
        List<Appointment> appointments;
        List<AppointmentResponse> appointmentResponses  = new ArrayList<>();
        if(user.isPresent()){
            appointments = appointmentRepository.findByAcceptorUserOrRequestorUser(user.get(),user.get());

            //How a Parent Get there list of appointments
            if (user.get().getRole().equals(Role.PARENT)){
                for(Appointment appointment:appointments){
                    AppointmentResponse appointmentResponse = new AppointmentResponse();
                    appointmentResponse.setParentName(user.get().getFirstname()+" "+ user.get().getLastname());
                    appointmentResponse.setId(appointment.getId());
                    appointmentResponse.setScheduledTime(appointment.getScheduledDateTime());
                    if(appointment.getAcceptorUser().getRole().equals(Role.MIDWIFE)){
                        appointmentResponse.setRole(Role.MIDWIFE);
                        appointmentResponse.setMidwifeName(
                                appointment.getAcceptorUser().getFirstname() + " "
                                +appointment.getRequestorUser().getLastname());
                    }
                    else if(appointment.getAcceptorUser().getRole().equals(Role.DOCTOR)){
                        appointmentResponse.setRole(Role.DOCTOR);
                        appointmentResponse.setDoctorName(
                                appointment.getAcceptorUser().getFirstname() + " "
                                        + appointment.getRequestorUser().getLastname());
                    }
                    else if(appointment.getRequestorUser().getRole().equals(Role.MIDWIFE)){
                        appointmentResponse.setRole(Role.MIDWIFE);
                        appointmentResponse.setMidwifeName(
                                appointment.getRequestorUser().getFirstname() + " "
                                        +appointment.getRequestorUser().getLastname());
                    }
                    else if(appointment.getRequestorUser().getRole().equals(Role.DOCTOR)){
                        appointmentResponse.setRole(Role.DOCTOR);
                        appointmentResponse.setDoctorName(
                                appointment.getRequestorUser().getFirstname() + " "
                                        + appointment.getRequestorUser().getLastname());
                    }
                    appointmentResponses.add(appointmentResponse);
                }

            }
            //How a Doctor Get there list of appointments
            else if (user.get().getRole().equals(Role.DOCTOR)){
                for(Appointment appointment:appointments){
                    AppointmentResponse appointmentResponse = new AppointmentResponse();
                    appointmentResponse.setDoctorName(user.get().getFirstname()+" "+ user.get().getLastname());
                    appointmentResponse.setId(appointment.getId());
                    appointmentResponse.setScheduledTime(appointment.getScheduledDateTime());
                    if(appointment.getAcceptorUser().getRole().equals(Role.PARENT)){
                        Optional<Parent> parent = parentRepository.findById(appointment.getAcceptorUser().getId());
                        if(parent.isPresent())
                            appointmentResponse.setBabyName(babyRepository.findBabyByParent(parent.get()).getName());
                        appointmentResponse.setMidwifeName(babyRepository.
                                findBabyByParent(
                                        parent.get()).getMidwife().getFirstname());
                        appointmentResponse.setParentName(
                                appointment.getAcceptorUser().getFirstname() + " "
                                        +appointment.getAcceptorUser().getLastname());
                    }
                    else{
                        Optional<Parent> parent = parentRepository.findById(appointment.getRequestorUser().getId());
                        if(parent.isPresent())
                            appointmentResponse.setBabyName(babyRepository.findBabyByParent(parent.get()).getName());
                        appointmentResponse.setMidwifeName(babyRepository.
                                findBabyByParent(
                                        parent.get()).getMidwife().getFirstname());
                        appointmentResponse.setParentName(
                                appointment.getAcceptorUser().getFirstname() + " "
                                        + appointment.getRequestorUser().getLastname());
                    }

                    appointmentResponses.add(appointmentResponse);
                }

            }
            //How a Midwife Get there list of appointments
            else if (user.get().getRole().equals(Role.MIDWIFE)){
                for(Appointment appointment:appointments){
                    AppointmentResponse appointmentResponse = new AppointmentResponse();
                    appointmentResponse.setMidwifeName(user.get().getFirstname()+" "+ user.get().getLastname());
                    appointmentResponse.setId(appointment.getId());
                    appointmentResponse.setScheduledTime(appointment.getScheduledDateTime());
                    if(appointment.getAcceptorUser().getRole().equals(Role.PARENT)){
                        Optional<Parent> parent = parentRepository.findById(appointment.getAcceptorUser().getId());
                        if(parent.isPresent())
                            appointmentResponse.setBabyName(babyRepository.findBabyByParent(parent.get()).getName());
                        appointmentResponse.setDoctorName(babyRepository.
                                findBabyByParent(
                                        parent.get()).getDoctor().getFirstname());
                        appointmentResponse.setParentName(
                                appointment.getAcceptorUser().getFirstname() + " "
                                +appointment.getAcceptorUser().getLastname());
                    }
                    else{
                        Optional<Parent> parent = parentRepository.findById(appointment.getRequestorUser().getId());
                        if(parent.isPresent())
                            appointmentResponse.setBabyName(babyRepository.findBabyByParent(parent.get()).getName());
                        appointmentResponse.setDoctorName(babyRepository.
                                findBabyByParent(
                                        parent.get()).getDoctor().getFirstname());
                        appointmentResponse.setParentName(
                                appointment.getAcceptorUser().getFirstname() + " "
                                        + appointment.getRequestorUser().getLastname());
                    }

                    appointmentResponses.add(appointmentResponse);
                }

            }


        }
        return appointmentResponses;

    }
}

