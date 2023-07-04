package com.example.travelbooking.entity;

import com.example.travelbooking.statics.Roles;
import lombok.*;
import lombok.experimental.FieldDefaults;

import javax.persistence.*;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "roles")
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Role extends BaseEntity {

    @Enumerated(EnumType.STRING)
    Roles name;

}
