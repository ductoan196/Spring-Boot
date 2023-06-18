package com.example.demojpa;

import com.example.demojpa.dto.EmployeeDto;
import com.example.demojpa.entity.Employee;
import com.example.demojpa.mapper.EmployeeMapper;
import com.example.demojpa.repository.EmployeeRepository;
import com.github.javafaker.Faker;
import lombok.AccessLevel;
import lombok.experimental.FieldDefaults;
import org.junit.jupiter.api.Test;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;
import java.util.stream.Collectors;

@SpringBootTest
@FieldDefaults(level = AccessLevel.PRIVATE)
public class EmployeeTest {
    @Autowired
    EmployeeRepository employeeRepository;

    @Autowired
    Faker faker;

    @Test
    void save_employee() {
        for (int i = 0; i < 10; i++) {
            Employee employee = new Employee(
                    null,
                    faker.name().fullName(),
                    faker.internet().emailAddress(),
                    faker.internet().password()
            );
            employeeRepository.save(employee);
        }
    }

    @Test
    void query_dto_mapper() {
        ModelMapper mapper = new ModelMapper();

        List<Employee> employeeList = employeeRepository.findAll();
        List<EmployeeDto> employeeDtoList = employeeList.stream()
                .map(employee -> mapper.map(employee, EmployeeDto.class))
                .collect(Collectors.toList());

        employeeDtoList.forEach(System.out::println);
    }

    @Test
    void query_dto_jpql() {

        EmployeeDto employeeDto = employeeRepository.getEmployeeDtoByEmail("johnnie.larson@hotmail.com");

        System.out.println(employeeDto);
    }

    @Test
    void query_dto_nativeQuery() {

        EmployeeDto employeeDto = employeeRepository.getEmployeeDtoUsingNativeQuery("johnnie.larson@hotmail.com");

        System.out.println(employeeDto);
    }
}
