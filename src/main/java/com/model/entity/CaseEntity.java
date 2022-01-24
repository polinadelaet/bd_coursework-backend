package com.model.entity;

import com.model.entity.scientistEntities.SeerEntity;
import lombok.Data;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Data
@Entity
@Table(name = "court_case")
public class CaseEntity implements Serializable {
    private static final long serialVersionUID = -51235622496042L;

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "policeman_id", referencedColumnName = "id", nullable = false)
    private PolicemanEntity policeman_id;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "judge_id", referencedColumnName = "id")
    private JudgeEntity judge_id;

    public static enum Case_status {closed, closed_temp_arrested, open};

    @Column(name = "status", nullable = false)
    //@Enumerated(EnumType.STRING)
    String status;

    @Column(name = "date_of_crime")
    private Date date_of_crime;

    @Column(name = "coordinates")
    private String coordinates;

    @Column(name = "opening_date", nullable = false)
    private Date opening_date;

    @Column(name = "closing_date")
    private Date closing_date;

}
