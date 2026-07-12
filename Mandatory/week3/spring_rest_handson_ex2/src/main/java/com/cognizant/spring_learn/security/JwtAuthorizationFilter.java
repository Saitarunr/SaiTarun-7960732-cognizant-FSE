package com.cognizant.spring_learn.security;

import java.io.IOException;
import java.util.ArrayList;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import io.jsonwebtoken.Jwts;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import com.cognizant.spring_learn.controller.AuthenticationController;
@org.springframework.stereotype.Component
public class JwtAuthorizationFilter extends OncePerRequestFilter {
    // ... leave the rest of the code exactly the same ...
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
            throws ServletException, IOException {
        
        String header = request.getHeader("Authorization");

        if (header == null || !header.startsWith("Bearer ")) {
            chain.doFilter(request, response);
            return;
        }

        UsernamePasswordAuthenticationToken authentication = getAuthentication(request);

        if (authentication != null) {
            SecurityContextHolder.getContext().setAuthentication(authentication);
        }
        
        chain.doFilter(request, response);
    }

    private UsernamePasswordAuthenticationToken getAuthentication(HttpServletRequest request) {
        String headerValue = request.getHeader("Authorization");
        if (headerValue == null) return null;

        String token = headerValue.replace("Bearer ", "").trim();
        if (token.startsWith("\"") && token.endsWith("\"")) {
            token = token.substring(1, token.length() - 1);
        }
        if (token.endsWith("\"")) {
            token = token.substring(0, token.length() - 1);
        }

     try {
            String user = Jwts.parserBuilder()
                    .setSigningKey(AuthenticationController.SECRET_KEY)
                    .setAllowedClockSkewSeconds(180) 
                    .build()
                    .parseClaimsJws(token)
                    .getBody()
                    .getSubject();

            if (user != null) {
                // Create the authority list with the required default role
                java.util.List<org.springframework.security.core.GrantedAuthority> authorities = 
                    org.springframework.security.core.authority.AuthorityUtils.createAuthorityList("ROLE_USER");
                
                // Pass the authorities list instead of the empty ArrayList
                return new UsernamePasswordAuthenticationToken(user, null, authorities);
            }
            return null;
        } catch (Exception e) {
            System.out.println("JWT Validation Error: " + e.getMessage());
            return null;
        }
    }
}