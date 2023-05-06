package entity;

import lombok.Data;
import statics.SubjectType;

import java.util.InputMismatchException;
import java.util.Scanner;

@Data
public class Subject {
    private int id;
    private String name;
    private int unitNums;
    private SubjectType subjectType;

    public static int AUTO_ID = 100;

    public Subject() {
        this.id = AUTO_ID;
        AUTO_ID++;
    }

    @Override
    public String toString() {
        return "Subject{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", unitNums=" + unitNums +
                ", subjectType=" + subjectType +
                '}';
    }

    public void inputInfo(){
        System.out.println("Nhập vào tên môn học: ");
        this.setName(new Scanner(System.in).nextLine());
        System.out.println("Nhập vào số lượng học phần: ");
        this.setUnitNums(new Scanner(System.in).nextInt());
        System.out.println("Nhập loại môn học: ");
        System.out.println("1. Đại cương");
        System.out.println("2. Cơ sở ngành");
        System.out.println("3. Chuyên ngành");

        int choice;
        do {
            try {
                choice = new Scanner(System.in).nextInt();
                if (choice >= 1 && choice <= 3) {
                    break;
                }
                System.out.println("Lựa chọn không hợp lệ, vui lòng chọn lại: ");
            } catch (InputMismatchException ex) {
                System.out.println("Vui lòng nhập số từ 1 tới 3: ");
            }
        } while (true);
        switch (choice) {
            case 1:
                this.setSubjectType(SubjectType.DAI_CUONG);
                break;
            case 2:
                this.setSubjectType(SubjectType.CO_SO_NGANH);
                break;
            case 3:
                this.setSubjectType(SubjectType.CHUYEN_NGANH);
                break;
        }
    }
}
