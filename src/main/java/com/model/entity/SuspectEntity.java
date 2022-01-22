package com.model.entity;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
@Table(name = "suspect")
public class SuspectEntity implements Serializable {
    private static final long serialVersionUID = -51235622496042L;

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "person_id", referencedColumnName = "id", nullable = false)
    private PersonEntity person_id;

    @Column(name = "mentally_disturbed", nullable = false)
    private Boolean mentally_disturbed;

    public static enum Murder_weapon {firearm, cold_steel, household_objects,
                                        accidental_weapon, poison, air_shutoff, temperature,
                                        electric_current, environment, vehicle, explosive};

    @Column(name = "weapon")
    String weapon;
}
