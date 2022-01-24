package com.model.entity.dto;

import com.model.entity.SuspectEntity;
import lombok.Data;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import java.util.Date;

@Data
public class OffenderDTO {
    private Integer id;
    private Integer suspect_id;
    private String type_of_crime;
    private Date arrest_date;
    private Date release_date;
}
