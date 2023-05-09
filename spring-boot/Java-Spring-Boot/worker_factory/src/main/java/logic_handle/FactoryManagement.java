package logic_handle;

import entity.Factory;
import entity.Worker;

import java.util.ArrayList;
import java.util.InputMismatchException;
import java.util.List;
import java.util.Scanner;

public class FactoryManagement {
    private List<Factory> factories;

    public FactoryManagement() {
        this.factories = new ArrayList<>();
    }

    public void  inputInfo(){
        System.out.println("Bạn muốn nhập cho bao nhiêu xưởng: ");

        int factoryNumber;
        do {
            try {
                factoryNumber = new Scanner(System.in).nextInt();
                if (factoryNumber>0){
                    break;
                }
                System.out.println("Số lượng xưởng nhập vào phải lớn hơn 0");
            } catch (InputMismatchException ex){
                System.out.println("Vui lòng nhập số");
            }
        } while (true);

        for (int i = 0; i < factoryNumber; i++) {
            Factory factory = new Factory();
            factory.inputInfo();
            factories.add(factory);
        }
    }

    public void showWorker(){
        factories.forEach(System.out::println);
    }

    public Factory findByID(int id){
        for (int i = 0; i < factories.size(); i++) {
            if (factories.get(i).getId()==id){
                return factories.get(i);
            }
        }
        return null;
    }
}
