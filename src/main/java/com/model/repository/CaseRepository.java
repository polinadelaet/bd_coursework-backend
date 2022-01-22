package com.model.repository;

import com.model.entity.CaseEntity;
import com.model.entity.scientistEntities.VisionEntity;
import org.springframework.data.geo.Point;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

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
}