package com.example.techmaster_admin_code.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "course")
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    Integer id;

    @Column(name = "name", nullable = false)
    String name;

    @Column(name = "description")
    String description;

    @Column(name = "type", nullable = false)
    String type;

    @Column(name = "thubnail")
    String thumbnail;

    @ManyToOne
    @JoinColumn(name = "supporter_id")
    Supporter supporter;

    @ManyToMany
    @JoinTable(name = "course_topic",
            joinColumns = @JoinColumn(name = "course_id"),
            inverseJoinColumns = @JoinColumn(name = "topic_id")

    )
    Set<Topic> topics = new HashSet<>();
}
