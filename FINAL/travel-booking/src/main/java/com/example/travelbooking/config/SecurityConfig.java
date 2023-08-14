package com.example.travelbooking.config;

import com.example.travelbooking.security.AuthenticationEntryPointJwt;
import com.example.travelbooking.security.AuthTokenFilter;
import com.example.travelbooking.security.CustomUserDetailsService;
import com.example.travelbooking.statics.Roles;
import com.example.travelbooking.statics.UserStatus;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.security.web.access.AccessDeniedHandlerImpl;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    CustomUserDetailsService userDetailsService;

    AuthenticationEntryPointJwt unauthorizedHandler;

    @Bean
    public AccessDeniedHandler accessDeniedHandler() {
        return new AccessDeniedHandlerImpl();
    }

    @Bean
    public AuthTokenFilter authenticationJwtTokenFilter() {
        return new AuthTokenFilter();
    }

    @Override
    public void configure(AuthenticationManagerBuilder authenticationManagerBuilder) throws Exception {
        authenticationManagerBuilder.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.cors().and().csrf().disable()
                .exceptionHandling().authenticationEntryPoint(unauthorizedHandler).and()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
                .authorizeRequests()
                .antMatchers(HttpMethod.POST, "/api/v1/authentication/login", "/api/v1/authentication/signup").permitAll()
                .antMatchers(HttpMethod.POST, "/api/v1/authentication/refresh-token", "/api/v1/authentication/logout").authenticated()
                .antMatchers(HttpMethod.GET, "/api/v1/users", "/api/v1/users/{id}").hasAnyAuthority(Roles.USER.toString(), Roles.ADMIN.toString())
                .antMatchers(HttpMethod.POST, "/api/v1/users").hasAnyAuthority(Roles.ADMIN.toString())
                .antMatchers("/api/v1/partner/**", "/partner/**").hasAnyAuthority(Roles.PARTNER.toString(),Roles.ADMIN.toString())
                .antMatchers("/api/v1/admin/**", "/admin/**").hasAnyAuthority(Roles.ADMIN.toString())
                .anyRequest().permitAll()
                .and()
                .httpBasic()
                .and()
                .headers().frameOptions().sameOrigin();
        http.addFilterBefore(authenticationJwtTokenFilter(), UsernamePasswordAuthenticationFilter.class);
    }

}
