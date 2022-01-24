package com.model.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@Table(name = "offender")
public class OffenderEntity {
    private static final long serialVersionUID = -212122496042L;

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "suspect_id", referencedColumnName = "id", nullable = false)
    private SuspectEntity suspect_id;

    public static enum Crime_type {deliberate, recklessly, temporary_insanity};

    @Column(name = "type_of_crime", nullable = false)
    String type_of_crime;

    @Column(name = "arrest_date")
    private Date arrest_date;

    @Column(name = "release_date")
    private Date release_date;
}
