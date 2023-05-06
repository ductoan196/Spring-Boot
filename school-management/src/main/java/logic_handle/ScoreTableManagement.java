package logic_handle;

import entity.ScoreTable;

import java.util.List;

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
    }
}
