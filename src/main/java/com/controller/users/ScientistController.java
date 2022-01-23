package com.controller.users;

import com.model.entity.CaseEntity;
import com.model.entity.SuspectEntity;
import com.model.entity.SuspectVictimEntity;
import com.model.entity.VictimEntity;
import com.model.entity.auth.UserEntity;
import com.model.entity.dto.SuspectDTO;
import com.model.entity.dto.SuspectVictimDTO;
import com.model.entity.dto.VictimDTO;
import com.model.entity.scientistEntities.SeerEntity;
import com.model.entity.scientistEntities.VisionDTO;
import com.model.entity.scientistEntities.VisionEntity;
import com.model.repository.*;
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
import java.sql.Types;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collections;
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

    @Autowired
    PersonRepository personRepository;

    @Autowired
    VictimRepository victimRepository;

    @Autowired
    SuspectRepository suspectRepository;

    @Autowired
    SuspectVictimRepository suspectVictimRepository;


    @GetMapping()
    public ResponseEntity getSeers(@RequestHeader(name = "LO") String login,
                                     @RequestHeader(name = "Pa") String password) throws ServletException {

        return ResponseEntity.ok().body(seerRepository.findAll());
    }

    @GetMapping("/get_id_of_activated_seers")
    public ResponseEntity get_activated_seers() {
        int[] kek  = seerRepository.get_id_of_activated_seers();

        return ResponseEntity.ok().body(seerRepository.get_id_of_activated_seers());
    }



    @Transactional
    @PostMapping("/addVisions")
    public ResponseEntity addVisions(@RequestBody List<VisionDTO> list, HttpServletRequest request) throws ServletException {


        List<VisionEntity> visionEntities = new ArrayList<>();

        for (VisionDTO vision: list){
            VisionEntity visionEntity = new VisionEntity();
            visionEntity.setSeer_id(seerRepository.getSeerEntityById(vision.getSeer_id()));
            visionEntity.setCase_id(caseRepository.getCaseEntityById(vision.getCase_id()));
            visionEntity.setDate_of_vision(Date.valueOf(vision.getDate_of_vision()));
            visionEntity.setDescription(vision.getDescription());
            visionEntities.add(visionEntity);
            VisionEntity visionEntity1 = visionRepository.save(visionEntity);
            System.out.println(visionEntity1.getId());
        }
        //visionRepository.saveAll(visionEntities);

        Integer lastCase = caseRepository.createNewCase();

            caseRepository.setVisionCase(lastCase);

        return ResponseEntity.ok().body("ok");
    }

    @GetMapping("/getCurrentCaseId")
    public ResponseEntity getCurrentCaseId() {
        return ResponseEntity.ok().body(caseRepository.findTopByOrderByIdDesc().getId());
    }

    @GetMapping("/getPersons")
    public ResponseEntity getPersons() {
        return ResponseEntity.ok().body(personRepository.findAll());
    }


    @Transactional
    @PostMapping("/addVictims")
    public ResponseEntity addVictims(@RequestBody List<VictimDTO> list, HttpServletRequest request) throws ServletException {



        List<VictimEntity> victimEntities = new ArrayList<>();

        for (VictimDTO victim: list){
            VictimEntity victimEntity = new VictimEntity();
            victimEntity.setPerson_id(personRepository.getPersonEntityById(victim.getPerson_id()));
            victimEntities.add(victimEntity);
            //Integer id = victimRepository.save(victimEntity).;
        }
        victimRepository.saveAll(victimEntities);

        return ResponseEntity.ok().body("");
    }

    @Transactional
    @PostMapping("/addSuspects")
    public ResponseEntity addSuspects(@RequestBody List<SuspectDTO> list, HttpServletRequest request) throws ServletException {


        List<SuspectEntity> suspectEntities = new ArrayList<>();

        for (SuspectDTO suspect: list){
            SuspectEntity suspectEntity = new SuspectEntity();
            suspectEntity.setPerson_id(personRepository.getPersonEntityById(suspect.getPerson_id()));
            suspectEntity.setMentally_disturbed(suspect.getMentally_disturbed());
            suspectEntity.setWeapon(suspect.getWeapon());
            suspectEntities.add(suspectEntity);
        }
        suspectRepository.saveAll(suspectEntities);

        return ResponseEntity.ok().body("");
    }

    @GetMapping("/getLastVisions")
    public ResponseEntity getLastVisions() {
        List<Integer> res = visionRepository.getLastVisions();
        Collections.sort(res);
        return ResponseEntity.ok().body(res);
    }

    @GetMapping("/getNumOfLastVisions")
    public ResponseEntity getNumOfLastVisions() {

        int[] res = new int[seerRepository.get_id_of_activated_seers().length]; // сколько всего у нас видений
        res[res.length - 1] = visionRepository.findTopByOrderByIdDesc().getId(); // id последнего видения
        int kek = res[res.length - 1];
        for (int i = res.length -2; i > -1; i--) {
            res[i] = kek - 1;
        }
        return ResponseEntity.ok().body(res);
    }


    @Transactional
    @PostMapping("/addVictim")
    public ResponseEntity addVictim(@RequestBody VictimDTO victimDTO, HttpServletRequest request) throws ServletException {


            VictimEntity victimEntity = new VictimEntity();
            victimEntity.setPerson_id(personRepository.getPersonEntityById(victimDTO.getPerson_id()));
            Integer id = victimRepository.save(victimEntity).getId();

        return ResponseEntity.ok().body(id);
    }

    @Transactional
    @PostMapping("/addSuspect")
    public ResponseEntity addSuspect(@RequestBody SuspectDTO suspectDTO, HttpServletRequest request) throws ServletException {


        SuspectEntity suspectEntity = new SuspectEntity();
        suspectEntity.setPerson_id(personRepository.getPersonEntityById(suspectDTO.getPerson_id()));
        suspectEntity.setMentally_disturbed(suspectDTO.getMentally_disturbed());
        suspectEntity.setWeapon(suspectDTO.getWeapon());
        Integer id = suspectRepository.save(suspectEntity).getId();

        return ResponseEntity.ok().body(id);
    }

    @Transactional
    @PostMapping("/addSuspectVictim")
    public ResponseEntity addSuspectVictim(@RequestBody List<SuspectVictimDTO> list, HttpServletRequest request) throws ServletException {

    try {
        List<SuspectVictimEntity> suspectVictimEntities = new ArrayList<>();

        for (SuspectVictimDTO suspectVictimDTO : list) {


            SuspectVictimEntity suspectVictimEntity = new SuspectVictimEntity();
            suspectVictimEntity.setVision_id(visionRepository.getVisionEntityById(suspectVictimDTO.getVision_id()));
            suspectVictimEntity.setVictim_id(victimRepository.getVictimEntityById(suspectVictimDTO.getVictim_id()));
            suspectVictimEntity.setSuspect_id(suspectRepository.getSuspectEntityById(suspectVictimDTO.getSuspect_id()));
            suspectVictimEntities.add(suspectVictimEntity);
        }
        suspectVictimRepository.saveAll(suspectVictimEntities);
    } catch (Exception e) {
        e.getMessage();
    }


        return ResponseEntity.ok().body("okey lets gooo");
    }

}
