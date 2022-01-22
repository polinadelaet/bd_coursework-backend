package com.model.entity.scientistEntities;

import com.model.entity.PersonEntity;
import com.model.entity.auth.RoleEntity;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Data
@Entity
@Table(name = "seer")
public class SeerEntity implements Serializable {
    private static final long serialVersionUID = -5527566248042296042L;

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;

    @OneToOne(cascade = CascadeType.ALL)
    //@JoinColumn(name = "person_id", nullable = false)
    @JoinColumn(name = "person_id", referencedColumnName = "id", nullable = false)
    private PersonEntity person_id;

    @Column(name = "is_activated", nullable = false)
    private Boolean is_activated;

    @Column(name = "is_talented", nullable = false)
    private Boolean is_talented;

}
