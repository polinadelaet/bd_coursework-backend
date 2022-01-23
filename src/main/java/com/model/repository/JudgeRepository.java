package com.model.repository;

import com.model.entity.CaseEntity;
import com.model.entity.JudgeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JudgeRepository extends JpaRepository<JudgeEntity, Integer> {

    JudgeEntity getJudgeEntityById(Integer id);
}
