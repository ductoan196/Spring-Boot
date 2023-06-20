package com.example.techmaster_course_management.entity;

import com.example.techmaster_course_management.statics.Type;
import lombok.*;
import lombok.experimental.FieldDefaults;

import javax.persistence.*;
import java.util.Set;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Entity
@Table(name = "course")
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    int id;

    @Column(name = "name")
    String name;

    @Column(name ="description" )
    String description;

    @Enumerated(EnumType.ORDINAL)
    Type type;

    @Column(name = "thubnail")
    String thumbnail;

    @ManyToOne
    @JoinColumn(name = "supporter_id")
    private Suppoter suppoter;

    @ManyToMany
    @JoinTable(
            name = "course_topic",          // Tên bảng liên kết giữa Course và Topic
            joinColumns = @JoinColumn(name = "course_id"),   // Khóa ngoại từ bảng course
            inverseJoinColumns = @JoinColumn(name = "topic_id")  // Khóa ngoại từ bảng topic
    )
    Set<Topic> info;
}
