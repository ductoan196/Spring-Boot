package logic_handle;

import entity.ScoreTable;
import entity.ScoreTableDetail;
import entity.Student;
import entity.Subject;

import java.sql.Struct;
import java.util.ArrayList;
import java.util.InputMismatchException;
import java.util.List;
import java.util.Scanner;

public class ScoreTableManagement {
    private List<ScoreTable> scoreTables;
    private StudentManagement studentManagement;
    private SubjectManagement subjectManagement;

    public ScoreTableManagement(StudentManagement studentManagement, SubjectManagement subjectManagement) {
        this.studentManagement = studentManagement;
        this.subjectManagement = subjectManagement;
    }

    public void logScoreTable(){
        System.out.println("Muốn nhập điểm cho bao nhiêu sinh viên: ");
        int studentNumber;
        do {
            try {
                studentNumber = new Scanner(System.in).nextInt();
                if (studentNumber > 0) {
                    break;
                }
                System.out.println("Số lượng sinh viên nhập vào phải lơn hơn 0, nhập lại: ");
            } catch (InputMismatchException ex) {
                System.out.println("Vui lòng nhập số: ");
            }
        } while (true);

        for (int i = 0; i < studentNumber; i++) {
            System.out.println("Nhập ID của sinh viên thứ " + (i + 1) + " mà bạn muốn chấm công: ");
            int studentId;
            Student student;
            do {
                try {
                    studentId = new Scanner(System.in).nextInt();
                    student = studentManagement.findById(studentId);
                    if (student !=null){
                        break;
                    }
                    System.out.println("ID không tồn tại trong hệ thống, vui lòng nhập lại: ");
                } catch (InputMismatchException ex){
                    System.out.println("Vui lòng nhập số: ");
                }
            }while (true);

            System.out.println("Sinh viên đã học bao nhiêu môn trong kìa vừa rồi: ");
            int subjectNumber;
            do {
                try {
                    subjectNumber = new Scanner(System.in).nextInt();
                    if (subjectNumber > 0) {
                        break;
                    }
                    System.out.println("Số lượng môn học nhập vào phải lơn hơn 0, nhập lại: ");
                } catch (InputMismatchException ex) {
                    System.out.println("Vui lòng nhập số: ");
                }
            } while (true);

            List<ScoreTableDetail> scoreTableDetails = new ArrayList<>();
            for (int j = 0; j < subjectNumber; j++) {
                System.out.println("Nhập ID môn học thứ " + (j + 1) + " mà học sinh này đã tham gia trong kì vừa rồi: ");
                int subjectId;
                Subject subject;
                do {
                    try {
                        subjectId = new Scanner(System.in).nextInt();
                        subject = subjectManagement.findById(subjectId);
                        if (subject != null) {
                            break;
                        }
                        System.out.println("ID môn học không tồn tại trong hệ thống, vui lòng nhập lại: ");
                    } catch (InputMismatchException ex) {
                        System.out.println("Vui lòng nhập số: ");
                    }
                } while (true);

                System.out.println("Sinh viên đạt được bao nhiêu điểm môn vừa nhập: ");
                float score;
                do {
                    try {
                        score = new Scanner(System.in).nextFloat();
                        if (score >= 0) {
                            break;
                        }
                        System.out.println("Số ngày làm việc nhập vào phải lơn hơn hoặc bằng 0, nhập lại: ");
                    } catch (InputMismatchException ex) {
                        System.out.println("Vui lòng nhập số: ");
                    }
                } while (true);

                ScoreTableDetail scoreTableDetail = new ScoreTableDetail(subject,score);
                scoreTableDetails.add(scoreTableDetail);
            }

            ScoreTable scoreTable = new ScoreTable(student, scoreTableDetails);
            scoreTables.add(scoreTable);
        }

        showInfo();
    }

    private void showInfo() {
        scoreTables.forEach(System.out::println);
    }
}
