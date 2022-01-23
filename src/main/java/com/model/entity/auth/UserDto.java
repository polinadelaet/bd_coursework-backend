package com.model.entity.auth;

import lombok.Data;

import javax.persistence.*;

@Data
public class UserDto {

    private String login;
    private String password;
    private Integer roleId;
    private Integer p_id;
}
