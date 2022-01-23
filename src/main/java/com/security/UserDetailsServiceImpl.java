package com.security;


import com.model.entity.auth.RoleEntity;
import com.model.entity.auth.UserDto;
import com.model.entity.auth.UserEntity;
import com.model.repository.auth.RoleRepository;
import com.model.repository.auth.UserRepository;
import com.security.userIsAlreadyExistException.UserIsAlreadyExistException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service("userDetailsServiceImpl")
//не юзаем
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

//    @Override
//    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
//        UserEntity user = userRepository.findByLogin(s);
//
//        if (user == null) {
//            throw new UsernameNotFoundException("User not found");
//        }
//
//        return new User(user.getLogin(), user.getPassword(),
//                true, true,
//                true, true,
//                Collections.singletonList(new SimpleGrantedAuthority("USER")));
//    }

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String login) throws UsernameNotFoundException {
        UserEntity user = userRepository.findByLogin(login);
        if (user == null) {
            throw new UsernameNotFoundException("User not found");
        }
        List<RoleEntity> list = new ArrayList<>();
        list.add(user.getRoleId());
        return new User(user.getLogin(), user.getPassword(),
                mapRolesToAuthorities(list));
    }

    public Integer getUsersRole(String login) {
        UserEntity user = userRepository.findByLogin(login);
        return user.getRoleId().getId();
    }

    private Collection<? extends GrantedAuthority> mapRolesToAuthorities(Collection<RoleEntity> roles) {
        return roles.stream().map(r -> new SimpleGrantedAuthority(r.getName())).collect(Collectors.toList());
    }


    public UserEntity saveUser(UserDto user) throws UserIsAlreadyExistException {
        if (userRepository.findByLogin(user.getLogin()) != null) {
            throw new UserIsAlreadyExistException("User is already exists.");
        }
        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder(12);
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        UserEntity userDb = new UserEntity();
        userDb.setLogin(user.getLogin());
        userDb.setPassword(user.getPassword());
        userDb.setP_id(user.getP_id());
        userDb.setRoleId(roleRepository.getRoleEntityById(user.getRoleId()));
        if (user.getP_id() != null) {
            userDb.setP_id(user.getP_id());
        }
        userRepository.save(userDb);
        return userDb;
    }

}
