package com.model.entity.dto;

import com.model.entity.JudgeEntity;
import com.model.entity.PolicemanEntity;
import lombok.Data;
import org.springframework.data.geo.Point;

import javax.persistence.*;

@Data
public class CourtCaseDto {

    private Integer id;
    private Integer policeman_id;
    private Integer judge_id;
    private String status;
    private String date_of_crime;
    private String coordinates;
    private String opening_date;
    private String closing_date;
}
