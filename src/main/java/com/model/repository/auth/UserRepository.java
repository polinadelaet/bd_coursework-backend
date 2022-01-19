package com.model.repository.auth;

import com.model.entity.auth.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;


@Repository
public interface UserRepository extends JpaRepository<UserEntity, Integer> {
    @Transactional
    UserEntity findByLogin(String login);
}
