package com.model.repository;

import com.model.entity.PersonEntity;
import com.model.entity.scientistEntities.SeerEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonRepository extends JpaRepository<PersonEntity, Integer> {

    PersonEntity getPersonEntityById(Integer id);

}


