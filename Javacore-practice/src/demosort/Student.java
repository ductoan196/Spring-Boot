package demosort;

public class Student {
    private  int id;
    private String name;
    private Float gpa;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Float getGpa() {
        return gpa;
    }

    public void setGpa(Float gpa) {
        this.gpa = gpa;
    }

    public Student(int id, String name, Float gpa) {
        this.id = id;
        this.name = name;
        this.gpa = gpa;
    }
}
