package com.security;

import org.springframework.security.core.GrantedAuthority;

public enum ClientRole implements GrantedAuthority {
    USER;

    @Override
    public String getAuthority() {
        return this.name();
    }
}
