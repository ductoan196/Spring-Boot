package logic_handle;

import statics.SubjectType;

import java.util.InputMismatchException;
import java.util.Scanner;

public class MenuManagement {
    private StudentManagement studentManagement;
    private SubjectManagement subjectManagement;

    public MenuManagement(){
        this.studentManagement = new StudentManagement();
        this.subjectManagement = new SubjectManagement();
    }
    public void menu() {
        while (true){
            printMenu();
            int functionchoice = functionChoie();
            switch (functionchoice){
                case 1:{
                    studentManagement.inputInfo();

                    break;
                }
                case 2:
                    subjectManagement.inputInfo();
                    // TODO - factoryManagement
                    break;
                case 3:
                    break;
                case 4:
                    break;
                case 5:
                    break;
                case 6:
                    return;
            }
        }
    }

    private int functionChoie() {
        int choice;
        do {
            try {
                choice = new Scanner(System.in).nextInt();
                if (choice >= 1 && choice <= 6) {
                    break;
                }
                System.out.println("Lựa chọn không hợp lệ, vui lòng chọn lại: ");
            } catch (InputMismatchException ex) {
                System.out.println("Vui lòng nhập số từ 1 tới 6: ");
            }
        } while (true);
        return choice;
    }

    private void printMenu() {
        System.out.println("------------PHẦN MỀM QUẢN LÝ HỌC SINH--------------");
        System.out.println("1. Nhập danh sách sinh viên mới và in ra màn hình");
        System.out.println("2. Nhập danh sách môn học mới và in ra màn hình");
        System.out.println("3. Nhập điểm cho mỗi sinh viên và in ra màn hình");
        System.out.println("4. Sắp xếp danh sách Bảng điểm");
        System.out.println("5. Tính điểm tổng kết chung cho mỗi sinh viên");
        System.out.println("6. Thoát");
        System.out.println("Xin mời chọn chức năng: ");
    }
}
