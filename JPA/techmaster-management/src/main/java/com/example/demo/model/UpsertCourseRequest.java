package com.example.demo.model;

import lombok.*;
import lombok.experimental.FieldDefaults;
import org.w3c.dom.stylesheets.LinkStyle;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.List;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@FieldDefaults(level = AccessLevel.PRIVATE)
public class UpsertCourseRequest {
    String name;

    String description;

    String type;

    List<Integer> topicIds;

    String thumbnail;

    Integer supporterId;
}
