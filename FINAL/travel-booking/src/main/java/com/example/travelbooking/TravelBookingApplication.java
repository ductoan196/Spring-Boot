package com.example.travelbooking;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class TravelBookingApplication {

    public static void main(String[] args) {
        SpringApplication.run(TravelBookingApplication.class, args);
    }
}
