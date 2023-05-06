package entity;

import lombok.Data;

import java.util.Scanner;

@Data

public class Person implements InputInfo {
    protected String name;
    protected String address;
    protected String phone;

    public void inputInfo(){
        System.out.println("Họ và tên: ");
        this.setName(new Scanner(System.in).nextLine());
        System.out.println("Địa chỉ: ");
        this.setAddress(new Scanner(System.in).nextLine());
        System.out.println("Số điện thoại: ");
        this.setPhone(new Scanner(System.in).nextLine());
    }
}
