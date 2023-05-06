package statics;

public enum SubjectType {
    DAI_CUONG(1),
    CO_SO_NGANH(2),
    CHUYEN_NGANH(3);

    public int type;
    SubjectType(int type){
        this.type =type;
    }
}
