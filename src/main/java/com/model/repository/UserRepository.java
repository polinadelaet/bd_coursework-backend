package com.model.repository;

import com.model.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;


@Repository
public interface UserRepository extends JpaRepository<UserEntity, Integer> {
    @Transactional
    UserEntity findByLogin(String login);
}
