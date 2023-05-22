package com.example.librarymanagement.service;

import com.example.librarymanagement.entity.Book;
import com.example.librarymanagement.entity.Reader;
import com.example.librarymanagement.model.BookModel;
import com.example.librarymanagement.model.ReaderModel;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)

public class ReaderService {
    private final List<Reader> readers = new ArrayList<>();
    public static int AUTO_ID= 10000;

    ObjectMapper objectMapper;

    public List<ReaderModel> getAllReader() {
        List<ReaderModel> result = new ArrayList<>();
        for (int i = 0; i < readers.size(); i++) {
            Reader reader = readers.get(i);
            result.add(objectMapper.convertValue(reader, ReaderModel.class));
        }
        return result;
    }

    public void creatReader(ReaderModel readerModel) {
        readerModel.setId(AUTO_ID);
        AUTO_ID++;
        readers.add(objectMapper.convertValue(readerModel, Reader.class));
    }

    public ReaderModel findById(int id) {
        Optional<Reader> readerOptional = readers
                .stream()
                .filter(s-> s.getId() == id)
                .findFirst();
        if (readerOptional.isEmpty()) {
            return null;
        }

        Reader reader = readerOptional.get();
        return objectMapper.convertValue(reader, ReaderModel.class);
    }

    public Reader findReaderEntityByID(int id) {
        ReaderModel readerModel = findById(id);
        return objectMapper.convertValue(readerModel, Reader.class);
    }

    public void deleteReader(int id) {
        readers.removeIf(s -> s.getId() == id);
    }

    public void updateReader(ReaderModel readerModel) {
        readers.forEach(r->{
            if (r.getId() != readerModel.getId()) {
                return;
            }
            r.setName(readerModel.getName());
            r.setPhone(readerModel.getPhone());
            r.setAddress(readerModel.getAddress());
            r.setReaderType(readerModel.getReaderType());
        });

    }
}
