package com.model.repository;

import com.model.entity.CaseEntity;
import com.model.entity.scientistEntities.VisionEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CaseRepository extends JpaRepository<CaseEntity, Integer> {
    CaseEntity getCaseEntityById(Integer id);
    CaseEntity findTopByOrderByIdDesc();
    @Query(value = "select create_new_case()", nativeQuery = true)
    Integer createNewCase();
}