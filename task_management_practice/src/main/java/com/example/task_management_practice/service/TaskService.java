package com.example.task_management_practice.service;

import com.example.task_management_practice.entity.Task;
import com.example.task_management_practice.model.response.TaskDetailResponse;
import com.example.task_management_practice.model.response.TaskResponse;
import com.example.task_management_practice.repository.TaskRepository;
import com.example.task_management_practice.statics.Status;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class TaskService {

    TaskRepository taskRepository;

    ObjectMapper objectMapper;

    public List<TaskResponse> getAll() {
        List<Task> tasks = taskRepository.getAll();

        List<TaskDetailResponse> tempData = tasks.stream().map(t -> objectMapper.convertValue(t, TaskDetailResponse.class)).collect(Collectors.toList());

        List<Status> statuses = Arrays.asList(Status.values());
//
//        List<TaskResponse> result = new ArrayList<>();
//        for (int i = 0; i < statuses.size(); i++) {
//            Status status = statuses.get(i);
//            List<TaskDetailResponse> list = new ArrayList<>();
//
//            for (int j = 0; j < tempData.size(); j++) {
//                if (tempData.get(j).getStatus()==status){
//                    list.add(tempData.get(j));
//                }
//            }
//            TaskResponse taskResponse = new TaskResponse(status, list);
//            result.add(taskResponse);
//        }

        return statuses.stream().map(status -> {
            List<TaskDetailResponse> taskDetailResponse = tempData.stream().filter(t -> t.getStatus().equals(status)).collect(Collectors.toList());
            return new TaskResponse(status, taskDetailResponse);
        }).collect(Collectors.toList());

    }
}
