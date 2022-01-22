package com.model.entity.dto;

import lombok.Data;

@Data
public class SuspectDTO {

    Integer id;
    Integer person_id;
    Boolean mentally_disturbed;
    String weapon;
}
