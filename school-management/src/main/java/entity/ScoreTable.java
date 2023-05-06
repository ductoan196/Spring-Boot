package entity;

import lombok.Data;

import java.util.List;
@Data

public class ScoreTable {
    private Student student;
    private List<ScoreTableDetail> scoreTableDetails;

    public ScoreTable(Student student, List<ScoreTableDetail> scoreTableDetails) {
        this.student = student;
        this.scoreTableDetails = scoreTableDetails;
    }
}
