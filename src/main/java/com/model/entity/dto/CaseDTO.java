package com.model.entity.dto;

import lombok.Data;
import org.springframework.data.geo.Point;

@Data
public class CaseDTO {
    private Integer id;
    private Integer policeman_id;
    private Integer judge_id;
    private String status;
    private String date_of_crime;
    private String coordinates;
    private String opening_date;
    private String closing_date;
}
