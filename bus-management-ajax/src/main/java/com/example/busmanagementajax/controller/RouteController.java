package com.example.busmanagementajax.controller;

import com.example.busmanagementajax.entity.Route;
import com.example.busmanagementajax.model.request.RouteCreateRequest;
import com.example.busmanagementajax.model.request.RouteUpdateRequest;
import com.example.busmanagementajax.service.RouteService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@Controller
@AllArgsConstructor
@RequestMapping
public class RouteController {
    RouteService routeService;

    @GetMapping("/routes")
    public String getRoutes(Model model) {
        List<Route> routes = routeService.getAllRoutes();
        model.addAttribute("danhSachTuyenDuong", routes);

        model.addAttribute("tuyenDuongMuonTaoMoi", new RouteCreateRequest());
        return ("route-list");
    }

    @PostMapping("/routes")
    public String creatNewRoute(@ModelAttribute("tuyenDuongMuonTaoMoi") @Valid RouteCreateRequest routeCreateRequest) {
        routeService.saveRoute(routeCreateRequest);
        return ("redirect:/routes");
    }

    @GetMapping("/api/routes/{id}")
    public ResponseEntity<?> getRoute(@PathVariable int id) {
        return ResponseEntity.ok(routeService.findById(id));
    }

    @PutMapping("/api/routes/{id}")
    public ResponseEntity<?> updateRoute(@PathVariable int id, @RequestBody @Valid RouteUpdateRequest routeUpdateRequest) {
        routeUpdateRequest.setId(id);
        routeService.updateRoute(routeUpdateRequest);
        return ResponseEntity.ok(null);
    }
}
