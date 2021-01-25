package com.security;

import com.model.beans.UserDTO;
import com.model.entity.UserEntity;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface UserService extends UserDetailsService {
    UserEntity findBylogin(String login);

    UserEntity save(UserDTO userDTO);
}
