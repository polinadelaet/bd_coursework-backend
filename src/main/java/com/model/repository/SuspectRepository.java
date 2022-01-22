package com.model.repository;

import com.model.entity.PersonEntity;
import com.model.entity.SuspectEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SuspectRepository extends JpaRepository<SuspectEntity, Integer> {
    SuspectEntity getSuspectEntityById(Integer id);
}
