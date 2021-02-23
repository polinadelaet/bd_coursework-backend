package com.security;

import com.model.beans.UserDTO;
import com.model.entity.UserEntity;
import com.model.repository.UserRepository;
import com.security.userIsAlreadyExistException.UserIsAlreadyExistException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.LinkedList;
import java.util.List;

@Service("userDetailsServiceImpl")
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        UserEntity user = userRepository.findByLogin(s);

        if (user == null) {
            throw new UsernameNotFoundException("User not found");
        }

        return new User(user.getLogin(), user.getPassword(),
                true, true,
                true, true,
                Collections.singletonList(new SimpleGrantedAuthority("USER")));
    }


    public UserDTO saveUser(UserDTO user) throws UserIsAlreadyExistException {
        if (userRepository.findByLogin(user.getLogin()) != null) {
            throw new UserIsAlreadyExistException("User is already exists.");
        }
        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder(12);
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        UserEntity userDb = new UserEntity();
        userDb.setLogin(user.getLogin());
        userDb.setPassword(user.getPassword());
        userRepository.save(userDb);
        return user;
    }

}
