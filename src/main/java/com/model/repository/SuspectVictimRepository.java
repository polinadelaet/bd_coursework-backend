package com.model.repository;

import com.model.entity.CaseEntity;
import com.model.entity.SuspectVictimEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SuspectVictimRepository extends JpaRepository<SuspectVictimEntity, Integer> {

}
