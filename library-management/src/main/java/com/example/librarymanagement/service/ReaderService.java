package com.example.librarymanagement.service;

import com.example.librarymanagement.model.Reader;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ReaderService {
    private final List<Reader> readers = new ArrayList<>();
    public static int AUTO_ID= 10000;


    public List<Reader> getAllReader() {
        return readers;
    }
    public void creatReader(Reader reader) {
        reader.setId(AUTO_ID);
        readers.add(reader);
        AUTO_ID++;
    }

    public Reader findById(int id){
       return readers.stream().filter(s -> s.getId() == id).findFirst().get();
    }

    public void deleteReader(int id) {
        Reader reader = findById(id);
        readers.remove(reader);
    }

    public void updateReader(Reader reader) {
        Reader reader1 = findById(reader.getId());
        reader1.setName(reader.getName());
        reader1.setAddress(reader.getAddress());
        reader1.setPhone(reader.getPhone());
        reader1.setReaderType(reader.getReaderType());
    }
}
