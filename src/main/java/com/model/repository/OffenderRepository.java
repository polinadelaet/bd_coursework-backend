package com.model.repository;

import com.model.entity.CaseEntity;
import com.model.entity.OffenderEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OffenderRepository extends JpaRepository<OffenderEntity, Integer> {
    OffenderEntity findTopByOrderByIdDesc();

    @Query(value = "select * from offender where type_of_crime is null order by id desc limit 1;", nativeQuery = true)
    OffenderEntity getOffender();


    @Query(value = "select updateOffenderType(:str, :off_id);", nativeQuery = true)
    void update(@Param("str")String type,@Param("off_id") Integer id);

    @Query(value = "select count_release_date(:s_id)", nativeQuery = true)
    Integer setReleaseDate(@Param("s_id")Integer s_id);

}
