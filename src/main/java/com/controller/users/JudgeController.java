package com.controller.users;

import com.model.entity.CaseEntity;
import com.model.entity.OffenderEntity;
import com.model.entity.dto.CaseDTO;
import com.model.entity.dto.OffenderDTO;
import com.model.repository.OffenderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;

@RestController
@RequestMapping("/users/judge")
public class JudgeController {
    @Autowired
    OffenderRepository offenderRepository;

    @GetMapping("/getOffender")
    public ResponseEntity getOffender() {
        OffenderEntity offenderEntity = offenderRepository.getOffender();
        if (offenderEntity == null) {
            return ResponseEntity.ok().body("nooo");
        }
        OffenderDTO offenderDTO = new OffenderDTO();
        offenderDTO.setId(offenderEntity.getId());
        offenderDTO.setSuspect_id(offenderEntity.getSuspect_id().getId());
        offenderDTO.setType_of_crime(offenderEntity.getType_of_crime());
        offenderDTO.setArrest_date(offenderEntity.getArrest_date());
        offenderDTO.setRelease_date(offenderEntity.getRelease_date());
        return ResponseEntity.ok().body(offenderDTO);
    }

    @PostMapping("/updateOffender")
    public ResponseEntity updateOffender(@RequestBody OffenderDTO offenderDTO) {
        offenderRepository.update(offenderDTO.getType_of_crime(), offenderDTO.getId());
        System.out.println("suspect id =" + offenderDTO.getSuspect_id());
        offenderRepository.setReleaseDate(offenderDTO.getSuspect_id());
        return ResponseEntity.ok().body("good");
    }
}
