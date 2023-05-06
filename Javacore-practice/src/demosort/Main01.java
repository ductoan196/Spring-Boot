package demosort;

import java.util.Arrays;
import java.util.Scanner;

public class Main01 {
    public static void main(String[] args) {
        //nhập mảng
        System.out.println("Nhập vào số lượng phần tử của mảng");
        int n = new Scanner(System.in).nextInt();

        String[]arr = new String[n];
        for (int i = 0; i < n; i++) {
            System.out.println("Nhập phần tử thứ " + (i + 1) + ": ");
            arr[i] = new Scanner(System.in).nextLine();

        }
        System.out.println(Arrays.toString(arr));

        //Sắp xếp
//        for (int i = 0; i < n-1; i++) {
//            for (int j = i+1; j < n; j++) {
//                if(arr[i].compareTo(arr[j]) >0 ){
//                    String temp= arr[i];
//                    arr[i] = arr[j];
//                    arr[j]= temp;
//                }
//            }
//        }
        Arrays.sort(arr);
        System.out.println(Arrays.toString(arr));

    }
}
