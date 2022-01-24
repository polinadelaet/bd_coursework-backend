package com.controller.users;

import com.model.entity.CaseEntity;
import com.model.entity.dto.CaseDTO;
import com.model.entity.dto.CourtCaseDto;
import com.model.entity.scientistEntities.VisionDTO;
import com.model.repository.CaseRepository;
import com.model.repository.JudgeRepository;
import com.model.repository.auth.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.geo.Point;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.sql.Date;
import java.util.List;

@RestController
@RequestMapping("/users/policeman")
public class PolicemanController {

    @Autowired
    CaseRepository caseRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    JudgeRepository judgeRepository;

    @Transactional
    @PostMapping("/getCasesByPolicemanId")
    public ResponseEntity getCases(@RequestBody Integer policeman_id, HttpServletRequest request) {
        System.out.println(policeman_id);
        return ResponseEntity.ok().body(caseRepository.getOpenCasesByPolicemanId(policeman_id));
    }

    @Transactional
    @PostMapping("/getPID")
    public ResponseEntity getPID(@RequestBody String log, HttpServletRequest request) {
        System.out.println(log);
        System.out.println(userRepository.findByLogin(log).getP_id());
        return ResponseEntity.ok().body(userRepository.findByLogin(log).getP_id());
    }

    @PostMapping("/getCaseForUpdate")
    public ResponseEntity getCaseForUpdate(@RequestBody Integer pid) {
        CaseEntity caseEntity = caseRepository.getLastOpenCaseByPolicemanId(pid);
        if (caseEntity == null) {
            return ResponseEntity.ok().body(null);
        }
        System.out.println("id == " + caseEntity.getId());
        CourtCaseDto courtCaseDto = new CourtCaseDto();
        courtCaseDto.setId(caseEntity.getId());
        courtCaseDto.setPoliceman_id(caseEntity.getPoliceman_id().getId());
        courtCaseDto.setJudge_id(null);
        courtCaseDto.setStatus(caseEntity.getStatus());
        courtCaseDto.setDate_of_crime(null);
        courtCaseDto.setCoordinates(null);
        courtCaseDto.setOpening_date(caseEntity.getOpening_date().toString());
        courtCaseDto.setClosing_date(null);


        return ResponseEntity.ok().body(courtCaseDto);
    }



    @PostMapping("/updateCase")
    public ResponseEntity updateCase(@RequestBody CaseDTO caseDto) {
        CaseEntity caseEntity = caseRepository.getOne(caseDto.getId());
        caseEntity.setJudge_id(judgeRepository.getJudgeEntityById(caseDto.getJudge_id()));
        caseEntity.setDate_of_crime(Date.valueOf(caseDto.getDate_of_crime()));
        caseEntity.setCoordinates(caseDto.getCoordinates());

        caseRepository.save(caseEntity);

        caseRepository.chooseNewSuspectStatus();
        caseRepository.closeCase(caseDto.getId());
        return ResponseEntity.ok().body("good");
    }

}
