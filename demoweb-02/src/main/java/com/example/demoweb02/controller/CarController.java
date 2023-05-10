package com.example.demoweb02.controller;

import com.example.demoweb02.vehicle.Car;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("cars")
public class CarController {
    @GetMapping
    public String getCar(Model model){
        List<Car> cars = new ArrayList<>();
        for (int i = 0; i < 5; i++) {
            cars.add(new Car(i,"Name" +i, "Brand"+i,i ));
        }
        model.addAttribute("carList",cars);
        return "car-list";
    }
}
