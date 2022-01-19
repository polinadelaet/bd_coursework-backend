package com.model.entity.scientistEntities;

import com.model.entity.CaseEntity;
import lombok.Data;

import javax.persistence.*;
import java.sql.Timestamp;

@Data
public class VisionDTO {

    private Integer seer_id;

    private Integer case_id;

    private String date_of_vision;

    private String description;
}
