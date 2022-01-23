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

    default void createPoint() {
        int min = 1;
        int max = 1000;

        System.out.println("Random value in int from "+min+" to "+max+ ":");
        int random_int1 = (int)Math.floor(Math.random()*(max-min+1)+min);
        int random_int2 = (int)Math.floor(Math.random()*(max-min+1)+min);
        System.out.println(random_int1 + " "+ random_int2);

    }

    @Query(value = "select get_random_point()", nativeQuery = true)
    Point getRandomPoint();

    @Query(value = "select get_open_cases()", nativeQuery = true)
    List<CaseEntity> getOpenCases();

    @Query(value = "SELECT * FROM Court_case WHERE status = 'open' and policeman_id = ?1", nativeQuery = true)
    List<CaseEntity> getOpenCasesByPolicemanId(Integer p_id);

    @Query(value = "select * from Court_case where status = 'open' and judge_id is null and policeman_id = ?1 order by id desc limit 1", nativeQuery = true)
    CaseEntity getLastOpenCaseByPolicemanId(Integer p_id);

    CaseEntity getOne(Integer id);

    @Query(value = "select set_vision_case_id(:c_id)", nativeQuery = true)
    Integer setVisionCase(@Param("c_id") Integer c_id);

    @Query(value = "select choose_new_suspect_status()", nativeQuery = true)
    Integer chooseNewSuspectStatus();
}