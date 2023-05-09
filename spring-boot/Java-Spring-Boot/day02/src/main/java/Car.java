public class Car {
    public  static int id = 1000;
    public  static String MESSAGE = "Hello";
    private  int mId = id++;



    public static int getId() {
        return id;
    }

    public static void setId(int id) {
        Car.id = id;
    }

    public static String getMESSAGE() {
        return MESSAGE;
    }

    public static void setMESSAGE(String MESSAGE) {
        Car.MESSAGE = MESSAGE;
    }

    public int getmId() {
        return mId;
    }

    public void setmId(int mId) {
        this.mId = mId;
    }

    public static void main(String[] args) {
        Car car1 = new Car();
        Car car2 = new Car();
        Car car3 = new Car();

        System.out.println("Id của Car 1 là " + car1.getmId());
        System.out.println("Id của Car 2 là " + car2.getmId());
        System.out.println("Id của Car 3 là " + car3.getmId());

    }
}
