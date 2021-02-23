package com.controller;

import com.model.beans.PointDTO;
import com.model.entity.PointEntity;
import com.model.entity.UserEntity;
import com.model.repository.PointRepository;
import com.model.repository.UserRepository;
import com.security.userDoesNotExistException.UserDoesNotExistException;
import com.service.CheckHitPoint;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;

@RestController
@RequestMapping("/points")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder bCryptPasswordEncoder;

    @GetMapping()
    public ResponseEntity getResults(@RequestHeader(name = "LO") String login,
                                     @RequestHeader(name = "Pa") String password) throws UserDoesNotExistException, UnsupportedEncodingException {

        login =  URLDecoder.decode(login, "UTF-8");
        password = URLDecoder.decode(password, "UTF-8");
        UserEntity userEntity = userRepository.findByLogin(login);
        if (userEntity == null || !bCryptPasswordEncoder.matches(password, userEntity.getPassword())) {
            return (ResponseEntity) ResponseEntity.status(403);
        } else {
            return ResponseEntity.ok().body(userEntity.getResults());
        }
    }

    @PostMapping()
    public ResponseEntity addPoint(@RequestBody PointDTO pointDTO,
                                   @RequestHeader(name = "LO") String login,
                                   @RequestHeader(name = "Pa") String password) throws UnsupportedEncodingException {

        login =  URLDecoder.decode(login, "UTF-8");
        password = URLDecoder.decode(password, "UTF-8");
        UserEntity userEntity = userRepository.findByLogin(login);

        if (userEntity == null || !bCryptPasswordEncoder.matches(password, userEntity.getPassword())) {
            return (ResponseEntity) ResponseEntity.status(403);
        }

        boolean hit = CheckHitPoint.checkHit(pointDTO.getX(), pointDTO.getY(), pointDTO.getR());
        PointEntity pointEntity = new PointEntity();
        pointEntity.setX(pointDTO.getX());
        pointEntity.setY(pointDTO.getY());
        pointEntity.setR(pointDTO.getR());
        pointEntity.setHit(hit);
        userEntity.getResults().add(pointEntity);
        userRepository.save(userEntity);
        return ResponseEntity.ok().body("{\"result\":\""+hit+"\"}");
    }
}
