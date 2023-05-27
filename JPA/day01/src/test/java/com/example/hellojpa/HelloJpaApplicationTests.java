package com.example.hellojpa;

import com.example.hellojpa.entity.Employee;
import com.example.hellojpa.entity.User;
import com.example.hellojpa.repository.EmployeeRepository;
import com.example.hellojpa.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.sql.Date;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@SpringBootTest
class HelloJpaApplicationTests {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private EmployeeRepository employeeRepository;

//    @Test
//    void save_user() {
//        User user = new User(null, "Nguyen Van G", "g@gmail.com", "03551973232", "updatePass", Date.valueOf(LocalDate.now()));
//        userRepository.save(user);
//    }
//
//    @Test
//    void save_user_list() {
//
//        List<User> userList = List.of(
//                new User(null, "Nguyen Van B", "b@gmail.com", "03551973232", "ductoan123", Date.valueOf(LocalDate.now())),
//                new User(null, "Nguyen Van C", "c@gmail.com", "03551973232", "ductoan123", Date.valueOf(LocalDate.now()))
//        );
//        userRepository.saveAll(userList);
//    }

//    @Test
//    void find_user() {
//
//        //Tìm theo Id
//        Optional<User> userOptional = userRepository.findById(1);
//        if (userOptional.isPresent()) {
//            System.out.println(userOptional.get());
//        }
//
//        //Cập nhật
//        User user1 = userOptional.get();
//        user1.setName("Tên update");
//        userRepository.save(user1);
//
//        //Xóa
//        userRepository.deleteById(3);
//
////        //FindAll
////        List<User> userList = userRepository.findAll();
////        userList.forEach(System.out::println);
//    }
//
//    @Test
//    void test_findByEmail() {
//        Optional<User> user = userRepository.findByEmail("c@gmail.com");
//        System.out.println(user);
//    }
//
//    @Test
//    void save_user_list2() {
//
//        List<User> userList = List.of(
//                new User(null, "Nguyen Van E", "e@gmail.com", "03551973232", "ductoan123", Date.valueOf(LocalDate.now())),
//                new User(null, "Nguyen Van F", "f@gmail.com", "03551973232", "ductoan123", Date.valueOf(LocalDate.now()))
//        );
//        userRepository.saveAll(userList);
//    }
//
//    @Test
//    void test_findByName() {
//        Optional<User> user = userRepository.findByNameAndEmail("Nguyen Van E", "e@gmail.com");
//        System.out.println(user);
//    }
//
//    @Test
//    void test_exist() {
//        boolean rs = userRepository.existsByEmail("a@gmail.com");
//        System.out.println(rs);
//    }


//    @Test
//    void creat_employee() {
//        List<Employee> employees = List.of(
//                new Employee(null, "Bình Trọng", "Kinh doanh", 8000000L, LocalDate.of(2023, 12, 2)),
//                new Employee(null, "Xuân Anh", "Kế Toán", 7000000L, LocalDate.of(2023, 11, 2))
//        );
//        employeeRepository.saveAll(employees);
//
//    }
//
//
//    @Test
//    void find_department() {
//        List<Employee> employees = employeeRepository.findByDepartment("Kinh doanh");
//        employees.forEach(System.out::println);
//    }
//
//    @Test
//    void findBySalary() {
//        List<Employee> employees = employeeRepository.findBySalaryGreaterThan(8000000L);
//        employees.forEach(System.out::println);
//    }
//
//    @Test
//    void findByName() {
//        List<Employee> employees = employeeRepository.findByNameContainingIgnoreCase("toàn");
//        employees.forEach(System.out::println);
//    }
//
//    @Test
//    void findByNameStartingWith() {
//        List<Employee> employees = employeeRepository.findByNameStartingWith("Vă");
//        employees.forEach(System.out::println);
//    }
//
//    @Test
//    void findBySalaryBetween() {
//        List<Employee> employees = employeeRepository.findBySalaryBetween(9500000L, 11000000L);
//        employees.forEach(System.out::println);
//    }
//
//    @Test
//    void countByDepartment() {
//        long count = employeeRepository.countByDepartment("Kinh doanh");
//        System.out.println(count);
//    }
//
//    @Test
//    void findByNameContainAndDepartment() {
//        List<Employee> employees = employeeRepository.findByNameContainingAndDepartment("Bi","Kinh doanh");
//        employees.forEach(System.out::println);
//    }
//
//    @Test
//    void findByNameOrDepartment() {
//        List<Employee> employees = employeeRepository.findByNameOrDepartment("Đức Toàn","Kế Toán");
//        employees.forEach(System.out::println);
//    }
//
//    @Test
//    void findByJoiningDate() {
//        List<Employee> employees = employeeRepository.findByJoiningDateAfter(LocalDate.of(2022, 1, 1));
//        employees.forEach(System.out::println);
//    }

    @Test
    void example_test() {
        User user = userRepository.findByEmail("a@gmail.com").orElse(null);
        User user1 = userRepository.findByEmailUsingJPQL("a@gmail.com").orElse(null);
        User user2 = userRepository.findByEmailUsingNativeQuery("a@gmail.com").orElse(null);

        System.out.println(user);
        System.out.println(user1);
        System.out.println(user2);
    }
}
