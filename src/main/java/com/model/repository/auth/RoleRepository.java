package com.model.repository.auth;

import com.model.entity.auth.RoleEntity;
import com.model.entity.auth.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<RoleEntity, Integer> {
}
