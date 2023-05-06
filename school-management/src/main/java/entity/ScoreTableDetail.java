package entity;

import lombok.Data;

@Data

public class ScoreTableDetail {
    private Subject subject;
    private float score;

    public ScoreTableDetail(Subject subject, float score) {
        this.subject = subject;
        this.score = score;
    }

}
