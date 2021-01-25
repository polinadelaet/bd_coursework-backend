package com.controller;

import com.model.beans.UserDTO;
import com.model.entity.UserEntity;
import com.model.repository.UserRepository;
import com.security.SecurityService;
import com.security.UserDetailsServiceImpl;
import com.security.userIsAlreadyExistException.UserIsAlreadyExistException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.Enumeration;


@RestController
@RequestMapping("/auth")
public class RegistrationController {

    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    @Autowired
    private SecurityService securityService;

    @Autowired
    UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;



    @PostMapping("/registration")
    public ResponseEntity registration(@RequestBody UserDTO userDTO, HttpServletRequest request) throws ServletException {

        try {
            userDetailsService.saveUser(userDTO);
        } catch (UserIsAlreadyExistException e) {
            ResponseEntity.badRequest().body(e.getMessage());
        }
        //securityService.autoLogin(userForm.getLogin(), userForm.getPassword());

        //request.login(userForm.getLogin(), userForm.getPassword());
        return ResponseEntity.ok().body("");

    }


    @PostMapping("/login")
    public ResponseEntity login(@RequestBody UserDTO userDTO, HttpServletRequest request) {

        UserDetails user = null;
        try {
            user = userDetailsService.loadUserByUsername(userDTO.getLogin());
        } catch (UsernameNotFoundException e) {
            return ResponseEntity.badRequest().body("");
        }
        if (user == null || !passwordEncoder.matches(userDTO.getPassword(), user.getPassword())) {
            return ResponseEntity.badRequest().body("");
        }
        //securityService.autoLogin(userDTO.getLogin(), userDTO.getPassword());

        return ResponseEntity.ok().body("{\"token\":\"14222\"}");
    }
}
