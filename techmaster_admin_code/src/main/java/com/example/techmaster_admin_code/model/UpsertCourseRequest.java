package com.example.techmaster_admin_code.model;

import lombok.*;
import lombok.experimental.FieldDefaults;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.List;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class UpsertCourseRequest {

    @Id
    Integer id;

    String name;

    String description;

    String type;

    List<Integer> topicIds;

    String thumbnail;

    Integer supporterId;
}
