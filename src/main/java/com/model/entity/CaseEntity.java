package com.model.entity;

import com.model.entity.scientistEntities.SeerEntity;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
@Table(name = "court_case")
public class CaseEntity implements Serializable {
    private static final long serialVersionUID = -51235622496042L;

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "policeman_id", referencedColumnName = "id", nullable = false)
    private PolicemanEntity policeman_id;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "judge_id", referencedColumnName = "id")
    private PolicemanEntity judge_id;

    public static enum Case_status {closed, closed_temp_arrested, open};

    @Column(name = "status", nullable = false)
    @Enumerated(EnumType.STRING)
    Case_status status;

    @Column(name = "date_of_crime")
    private String date_of_crime;

    @Column(name = "coordinates")
    private String coordinates;

    @Column(name = "opening_date", nullable = false)
    private String opening_date;

    @Column(name = "closing_date")
    private String closing_date;

}
