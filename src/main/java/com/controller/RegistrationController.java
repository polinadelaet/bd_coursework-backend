package com.controller;

import com.model.entity.auth.UserDto;
import com.model.entity.auth.UserEntity;
import com.model.repository.auth.UserRepository;
import com.security.UserDetailsServiceImpl;
import com.security.userIsAlreadyExistException.UserIsAlreadyExistException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;


@RestController
@RequestMapping("/auth")
public class RegistrationController {

    @Autowired
    private UserDetailsServiceImpl userDetailsService;


    @Autowired
    UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @PostMapping("/registration")
    public ResponseEntity registration(@RequestBody UserDto userDTO, HttpServletRequest request) throws ServletException {
        try {
            userDetailsService.saveUser(userDTO);
        } catch (UserIsAlreadyExistException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
        return ResponseEntity.ok().body("");
    }


//    @PostMapping("/login")
//    public ResponseEntity login(@RequestBody UserDTO userDTO) {
//        UserDetails user = null;
//        try {
//            user = userDetailsService.loadUserByUsername(userDTO.getLogin());
//        } catch (UsernameNotFoundException e) {
//           return ResponseEntity.badRequest().body("");
//        }
//        if (user == null || !passwordEncoder.matches(userDTO.getPassword(), user.getPassword())) {
//            return ResponseEntity.badRequest().body("");
//        }
//        return ResponseEntity.ok().body("{\"token\":\"14222\"}");
//    }


    @PostMapping("/login")
    public ResponseEntity login(@RequestBody UserEntity userDTO) {
        UserDetails user = null;
        try {
            user = userDetailsService.loadUserByUsername(userDTO.getLogin());
        } catch (UsernameNotFoundException e) {
            return ResponseEntity.badRequest().body("");
        }
        if (user == null || !passwordEncoder.matches(userDTO.getPassword(), user.getPassword())) {
            return ResponseEntity.badRequest().body("");
        }
        //return ResponseEntity.ok().body("{\"token\":\"14222\"}");
        //return ResponseEntity.ok().body("{\"token\":\"1\"}");
        return ResponseEntity.ok().body("{\"token\":\""+userDetailsService.getUsersRole(userDTO.getLogin())+"\"}");
    }

    @GetMapping("/scientist")
    public String pageForScientist() {
        return "privet ucheny";
    }

    @GetMapping("/judge")
    public String pageForJudge() {
        return "privet judge";
    }
}
