package com.controller.users;

import com.model.entity.CaseEntity;
import com.model.entity.auth.UserEntity;
import com.model.entity.scientistEntities.SeerEntity;
import com.model.entity.scientistEntities.VisionDTO;
import com.model.entity.scientistEntities.VisionEntity;
import com.model.repository.CaseRepository;
import com.model.repository.scientist.SeerRepository;
import com.model.repository.scientist.VisionRepository;
import com.security.userIsAlreadyExistException.UserIsAlreadyExistException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import java.sql.Date;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/users/scientist")
public class ScientistController {

    @Autowired
    SeerRepository seerRepository;

    @Autowired
    CaseRepository caseRepository;

    @Autowired
    VisionRepository visionRepository;

    @GetMapping()
    public ResponseEntity getSeers(@RequestHeader(name = "LO") String login,
                                     @RequestHeader(name = "Pa") String password) throws ServletException {
        //List<SeerEntity> kek = seerRepository.findAll();
        System.out.println(seerRepository.findAll().get(1).getId() + "\n\n");
        System.out.println("здесь");
        return ResponseEntity.ok().body(seerRepository.findAll());
    }

    @GetMapping("/get_id_of_activated_seers")
    public ResponseEntity get_activated_seers() {
        int[] kek  = seerRepository.get_id_of_activated_seers();
        for (int i = 0; i < kek.length; i++) {
            System.out.println("i = " + kek[i]);
        }
        return ResponseEntity.ok().body(seerRepository.get_id_of_activated_seers());
    }


    @Transactional
    @PostMapping("/addVisions")
    public ResponseEntity addVisions(@RequestBody List<VisionDTO> list, HttpServletRequest request) throws ServletException {


        List<VisionEntity> visionEntities = new ArrayList<>();

        for (VisionDTO vision: list){
            System.out.println(vision.getDescription() + "\n");
            VisionEntity visionEntity = new VisionEntity();
            visionEntity.setSeer_id(seerRepository.getSeerEntityById(vision.getSeer_id()));
            visionEntity.setCase_id(caseRepository.getCaseEntityById(vision.getCase_id()));
            visionEntity.setDate_of_vision(Date.valueOf(vision.getDate_of_vision()));
            visionEntity.setDescription(vision.getDescription());
            visionEntities.add(visionEntity);
        }
        visionRepository.saveAll(visionEntities);
        caseRepository.createNewCase();

        return ResponseEntity.ok().body("");
    }

    @GetMapping("/getCurrentCaseId")
    public ResponseEntity getCurrentCaseId() {
        System.out.println(caseRepository.findTopByOrderByIdDesc().getId());
        return ResponseEntity.ok().body(caseRepository.findTopByOrderByIdDesc().getId());
    }

    @Transactional
    @PostMapping("/addSuspects")
    public ResponseEntity addSuspects(@RequestBody List<VisionDTO> list, HttpServletRequest request) throws ServletException {


        return ResponseEntity.ok().body("");
    }
}
