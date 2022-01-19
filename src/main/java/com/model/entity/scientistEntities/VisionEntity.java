package com.model.entity.scientistEntities;

import com.model.entity.CaseEntity;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;
import java.text.SimpleDateFormat;

@Data
@Entity
@Table(name = "vision")
public class VisionEntity implements Serializable {
    private static final long serialVersionUID = -55235622496042L;


    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "seer_id", referencedColumnName = "id", nullable = false)
    private SeerEntity seer_id;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "case_id", referencedColumnName = "id")
    private CaseEntity case_id;

    @Column(name = "date_of_vision", nullable = false)
    private Date date_of_vision;

    @Column(name = "description")
    private String description;
}
