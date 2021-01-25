package com.security;

import com.model.beans.UserDTO;
import com.model.entity.UserEntity;
import com.model.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;


    @Override
    public UserEntity findBylogin(String login) {
        return userRepository.findByLogin(login);
    }

    @Override
    public UserEntity save(UserDTO userDTO) {
        UserEntity userEntity = new UserEntity();
        userEntity.setLogin(userDTO.getLogin());
        userEntity.setPassword(passwordEncoder.encode(userDTO.getPassword()));
        return userRepository.save(userEntity);
    }

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        UserEntity user = userRepository.findByLogin(s);


        if (user == null) {
            throw new UsernameNotFoundException("User not found"); //TODO: user not found
        }

        return new User(user.getLogin(), user.getPassword(),
                true, true,
                true, true,
                Collections.singletonList(new SimpleGrantedAuthority("USER")));
    }
}
