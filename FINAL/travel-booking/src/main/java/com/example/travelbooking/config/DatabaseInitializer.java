package com.example.travelbooking.config;

import com.example.travelbooking.entity.Role;
import com.example.travelbooking.entity.User;
import com.example.travelbooking.repository.RoleRepository;
import com.example.travelbooking.repository.UserRepository;
import com.example.travelbooking.statics.Roles;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Component
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class DatabaseInitializer implements CommandLineRunner {

    UserRepository userRepository;

    RoleRepository roleRepository;

    PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
        Optional<Role> roleUserOptional = roleRepository.findByName(Roles.USER);
        if (roleUserOptional.isEmpty()) {
            Role userRole = Role.builder().name(Roles.USER).build();
            roleRepository.save(userRole);
        }
        Optional<Role> roleAdminOptional = roleRepository.findByName(Roles.ADMIN);
        if (roleAdminOptional.isEmpty()) {
            Role adminRole = Role.builder().name(Roles.ADMIN).build();
            roleRepository.save(adminRole);

            Optional<User> admin = userRepository.findByUsername("admin");
            if (admin.isEmpty()) {
                User user = new User();
                user.setUsername("admin");
                user.setPassword(passwordEncoder.encode("admin123")); // Encrypt the password
                Set<Role> roles = new HashSet<>();
                roles.add(adminRole);
                user.setRoles(roles);
                userRepository.save(user);
            }
        }



    }

}
