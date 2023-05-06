package entity;

import lombok.Data;

import java.util.Scanner;

@Data
public class Student extends Person{
    private int id;
    private String className;
    public static int AUTO_ID = 10000;

    public Student() {
        this.id = AUTO_ID;
        AUTO_ID++;
    }

    @Override
    public String toString() {
        return "Student{" +
                "name='" + name + '\'' +
                ", address='" + address + '\'' +
                ", phone='" + phone + '\'' +
                ", className='" + className + '\'' +
                '}';
    }

    public void inputInfo(){
        super.inputInfo();
        System.out.println("Nhập tên lớp: ");
        this.setClassName(new Scanner(System.in).nextLine());
    }
}
