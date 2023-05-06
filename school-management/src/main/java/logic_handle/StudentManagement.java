package logic_handle;

import entity.Student;

import java.util.ArrayList;
import java.util.InputMismatchException;
import java.util.List;
import java.util.Scanner;

public class StudentManagement {
    List<Student> students;
    public StudentManagement(){
        this.students = new ArrayList<>();
    }

    public void inputInfo() {
        System.out.println("Bạn muốn nhập cho bao nhiêu học sinh: ");
        int studentNumber;
        do {
            try {
                studentNumber = new Scanner(System.in).nextInt();
                if (studentNumber > 0) {
                    break;
                }
                System.out.println("Số lượng học sinh nhập vào phải lơn hơn 0, nhập lại: ");
            } catch (InputMismatchException ex) {
                System.out.println("Vui lòng nhập số: ");
            }
        } while (true);

        for (int i = 0; i < studentNumber; i++) {
            Student student = new Student();
            student.inputInfo();
            students.add(student);
        }
        showStudent();
    }

    public void showStudent() {
        students.forEach(System.out::println);
    }

    public Student findById(int id) {
        for (int i = 0; i < students.size(); i++) {
            if (students.get(i).getId() == id) {
                return students.get(i);
            }
        }
        return null;
    }
}
