package com.model.entity;

import com.model.entity.scientistEntities.VisionEntity;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
@Table(name = "suspect_victim")
public class SuspectVictimEntity implements Serializable {
    private static final long serialVersionUID = -31235622196042L;

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "vision_id", referencedColumnName = "id", nullable = false)
    private VisionEntity vision_id;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "victim_id", referencedColumnName = "id", nullable = false)
    private VictimEntity victim_id;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "suspect_id", referencedColumnName = "id", nullable = false)
    private SuspectEntity suspect_id;
}
