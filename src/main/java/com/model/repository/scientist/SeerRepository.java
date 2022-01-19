package com.model.repository.scientist;

import com.model.entity.auth.UserEntity;
import com.model.entity.scientistEntities.SeerEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SeerRepository extends JpaRepository<SeerEntity, Integer> {



    SeerEntity getSeerEntityById(Integer id);

    List<SeerEntity> findAll();

    @Query(value = "select get_id_of_activated_seers()", nativeQuery = true)
    int[] get_id_of_activated_seers();
}
