package com.example.hellojpa.repository;

import com.example.hellojpa.entity.Student;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface StudentRepository extends JpaRepository<Student, Integer> {

//    //1. Tìm kiếm theo tên và phân trang
//    Page<Student> findByName(String name, Pageable pageable);
//
//    Page<Student> findByNameContainingIgnoreCase(String keyword, Pageable pageable);
//
//    //Sử dụng native query
//    @Query (nativeQuery = true, value = "select  * from student", countQuery = "select count(id) from student ")
//    Page<Student> getAllStudent(Pageable pageable);
//
//    @Query (nativeQuery = true,
//            value = "select  * from student u where (u.name) LIKE (%?1%)",
//            countQuery = "select count(id) from student u where (u.name) LIKE (%?1%)")
//    Page<Student> getAllStudentIgnoeCaseByNativeQuery(String keyword, Pageable pageable);
//
//    List<Student> findByOrderByNameDesc(String name);  //Cách nhanh nhất
//    List<Student> findByName(String name, Sort sort); //Áp dụng cho nhiều trường hợp
//
//    @Query(nativeQuery = true, value = "select * from student where name = ?1 order by name desc ")
//    List<Student> findByNameSort(String name, Sort sort);

}
