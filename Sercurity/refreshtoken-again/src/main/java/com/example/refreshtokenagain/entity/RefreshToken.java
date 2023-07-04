package com.example.refreshtokenagain.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "refresh_token")
public class RefreshToken extends BaseEntity{

    @JoinColumn(name = "user_id")
    @ManyToOne(targetEntity = User.class)
    User user;

    @Column(name = "refresh_token")
    String refreshToken;

    @Column(columnDefinition = "boolean default false")
    boolean inactivated;
}
