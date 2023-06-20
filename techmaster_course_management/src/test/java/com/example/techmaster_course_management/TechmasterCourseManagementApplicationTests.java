package com.example.techmaster_course_management;

import com.example.techmaster_course_management.entity.Course;
import com.example.techmaster_course_management.entity.Suppoter;
import com.example.techmaster_course_management.entity.Topic;
import com.example.techmaster_course_management.repository.CourseRepository;
import com.example.techmaster_course_management.repository.SuppoterRepository;
import com.example.techmaster_course_management.repository.TopicRepository;
import com.example.techmaster_course_management.statics.Type;
import com.github.javafaker.Faker;
import lombok.AllArgsConstructor;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;

import java.util.HashSet;
import java.util.Set;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class TechmasterCourseManagementApplicationTests {

    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private TopicRepository topicRepository;

    @Autowired
    private SuppoterRepository suppoterRepository;

//    private Faker faker;

    @Test
    @Rollback(value = false)
    void save_course() {

        Faker faker = new Faker();
        Set<Topic> topics = new HashSet<>();
        Topic topic = Topic.builder()
                .name("Frontend")
                .build();
            topics.add(topic);
        topicRepository.save(topic);

        Suppoter suppoter = Suppoter.builder()
                .name("Nguyen Van B")
                .email("b@gmail.com")
                .phone("0398233892")
                .avatar("path/to/avatar")
                .build();
        suppoterRepository.save(suppoter);

        Course course = Course.builder()
                .name("Java")
                .description("Java full stack")
                .type(Type.ONLINE)
                .thumbnail("/path/to/thumbnail")
                .suppoter(suppoter)
                .info(topics)
                .build();

        courseRepository.save(course);
    }

    @Test
    @Rollback(value = false)
    void save_topic() {
        Topic topic = Topic.builder()
                .name("Frontend")
                .build();
        topicRepository.save(topic);
    }

    @Test
    @Rollback(value = false)
    void save_suppoter() {
        Suppoter suppoter = Suppoter.builder()
                .name("Nguyen Van A")
                .phone("0355123353")
                .email("a@gmail.com")
                .avatar("/path/avatar")
                .build();

        suppoterRepository.save(suppoter);
    }
}
