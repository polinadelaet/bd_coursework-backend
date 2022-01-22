package com.model.repository;

import com.model.entity.PersonEntity;
import com.model.entity.VictimEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VictimRepository extends JpaRepository<VictimEntity, Integer> {

    VictimEntity getVictimEntityById(Integer id);

}
