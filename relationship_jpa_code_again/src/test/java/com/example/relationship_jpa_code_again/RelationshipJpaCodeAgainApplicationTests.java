package com.example.relationship_jpa_code_again;

import com.example.relationship_jpa_code_again.entity.IdentityCard;
import com.example.relationship_jpa_code_again.entity.User;
import com.example.relationship_jpa_code_again.repository.IdentityCardRepository;
import com.example.relationship_jpa_code_again.repository.ImageRepository;
import com.example.relationship_jpa_code_again.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class RelationshipJpaCodeAgainApplicationTests {

    @Autowired
    private IdentityCardRepository identityCardRepository;

    @Autowired
    private ImageRepository imageRepository;

    @Autowired
    private UserRepository userRepository;

    @Test
    @Rollback(value = false)
    void save_user() {
        User user = User.builder()
                .name("Nguyễn Văn B")
                .email("b@gmail.com")
                .password("222")
                .identityCard(
                        IdentityCard.builder()
                                .code("385835")
                                .build()
                )
                .build();
        userRepository.save(user);
    }

}
