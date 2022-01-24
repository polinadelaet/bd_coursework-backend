package com.model.repository;

import com.model.entity.CaseEntity;
import com.model.entity.scientistEntities.VisionEntity;
import org.springframework.data.geo.Point;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CaseRepository extends JpaRepository<CaseEntity, Integer> {
    CaseEntity getCaseEntityById(Integer id);
    CaseEntity findTopByOrderByIdDesc();
    @Query(value = "select create_new_case()", nativeQuery = true)
    Integer createNewCase();

    @Query(value = "SELECT * FROM Court_case WHERE status = 'open' and policeman_id = ?1", nativeQuery = true)
    List<CaseEntity> getOpenCasesByPolicemanId(Integer p_id);

    @Query(value = "select * from Court_case where status = 'open' and judge_id is null and policeman_id = ?1 order by id desc limit 1", nativeQuery = true)
    CaseEntity getLastOpenCaseByPolicemanId(Integer p_id);

    CaseEntity getOne(Integer id);

    @Query(value = "select set_vision_case_id(:c_id)", nativeQuery = true)
    Integer setVisionCase(@Param("c_id") Integer c_id);

    @Query(value = "select choose_new_suspect_status()", nativeQuery = true)
    Integer chooseNewSuspectStatus();

    @Query(value = "select close_case(:c_id)", nativeQuery = true)
    Boolean closeCase(@Param("c_id") Integer c_id);
}