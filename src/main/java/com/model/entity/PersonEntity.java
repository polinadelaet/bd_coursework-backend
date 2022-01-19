package com.model.entity;

import com.model.entity.auth.RoleEntity;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Data
@Entity
@Table(name = "person")
public class PersonEntity implements Serializable {
    private static final long serialVersionUID = -5523562248002296042L;

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "sex", nullable = false)
    private String sex;

    @Column(name = "dob", nullable = false)
    private String dob;

}
