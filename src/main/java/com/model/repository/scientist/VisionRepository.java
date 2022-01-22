package com.model.repository.scientist;

import com.model.entity.scientistEntities.SeerEntity;
import com.model.entity.scientistEntities.VisionEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VisionRepository extends JpaRepository<VisionEntity, Integer> {

    @Query(value = "select get_id_of_activated_seers()", nativeQuery = true)
    int[] get_id_of_activated_seers();

    @Query(value = "SELECT vision.id FROM vision ORDER BY ID DESC LIMIT get_num_of_activated_seers()", nativeQuery = true)
    List<Integer> getLastVisions();

    VisionEntity findTopByOrderByIdDesc();

    VisionEntity getVisionEntityById(Integer id);

}
