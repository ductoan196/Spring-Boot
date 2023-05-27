package com.example.hellojpa.repository;

import com.example.hellojpa.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
    List<Employee> findByDepartment(String department);

    List<Employee> findBySalaryGreaterThan(long salary);

    List<Employee> findByName(String name);

    List<Employee> findByNameContainingIgnoreCase(String keyword);

    List<Employee> findByNameStartingWith(String prefix);

    List<Employee> findBySalaryBetween(long salary1, long salary2);

    long countByDepartment(String department);

    List<Employee> findByNameContainingAndDepartment(String keyword, String department);

    List<Employee> findByNameOrDepartment(String name, String department);

    List<Employee> findByJoiningDateAfter(LocalDate joiningDate);
}
