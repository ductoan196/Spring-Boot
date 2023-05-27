package com.example.hellojpa.repository;

import com.example.hellojpa.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

    //1. Tìm kiếm tất cả các employee thuộc 1 phòng ban được chỉ định
    List<Employee> findByDepartment(String department);

    @Query(nativeQuery = true, value = "select * from employee u where u.department =?1")
    List<Employee> findByDepartmentUsingNativeQuery(String department);

    //2. Tìm kiếm tất cả các employee có salary lớn hơn 1 giá trị được chỉ định
    List<Employee> findBySalaryGreaterThan(long salary);

    @Query(nativeQuery = true, value = "select * from employee u where u.salary >?1")
    List<Employee> findBySalaryGreaterThanUsingNativeQuery(long salary);

    //3. Tìm kiếm tất cả các employee có tên được chỉ định
    List<Employee> findByName(String name);

    @Query(nativeQuery = true, value = "select * from employee u where u.name =?1")
    List<Employee> findByNameUsingNativeQuery(String name);


    //4.Tìm kiếm tất cả các employee trong tên có chứa 1 keyword được chỉ định (không phân biệt hoa thường)
    List<Employee> findByNameContainingIgnoreCase(String keyword);

    @Query(nativeQuery = true, value = "select * from employee u where LOWER(u.name) like %?1%")
    List<Employee> findByNameContainingIgnoreCaseUsingNativeQuery(String keyword);


    //5. Tìm kiếm tất cả các employee có tên được bắt đầu với 1 chuỗi (prefix) được chỉ định
    List<Employee> findByNameStartingWith(String prefix);

    @Query(nativeQuery = true, value = "select * from employee u where u.name like ?1%")
    List<Employee> findByNameStartingWithUsingNativeQuery(String prefix);

    //6.Tìm kiếm tất cả các employee có salary nằm trong khoảng chỉ định
    List<Employee> findBySalaryBetween(long salary1, long salary2);

    //7.Đếm số lượng employee thuộc 1 phòng ban được chỉ định
    long countByDepartment(String department);

    //8.Tìm kiếm tất cả các employee trong tên có chứa 1 keyword được chỉ định và thuộc 1 phòng ban được chỉ định
    List<Employee> findByNameContainingAndDepartment(String keyword, String department);

    //9.Tìm kiếm tất cả các employee có tên được chỉ định hoặc thuộc 1 phòng ban được chỉ định
    List<Employee> findByNameOrDepartment(String name, String department);

    //10.Tìm kiếm tất cả các employee tham gia công ty sau 1 ngày được chỉ định
    List<Employee> findByJoiningDateAfter(LocalDate joiningDate);
}
