package com.example.librarymanagement.service;

import com.example.librarymanagement.entity.Book;
import com.example.librarymanagement.entity.Borrow;
import com.example.librarymanagement.entity.Reader;
import com.example.librarymanagement.model.BookModel;
import com.example.librarymanagement.model.BorrowModel;
import com.example.librarymanagement.model.ReaderModel;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service

@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class BorrowService {
    BookService bookService;
    ReaderService readerService;
    private static int AUTO_ID = 1;

    List<Borrow> borrows = new ArrayList<>();

    public List<BorrowModel> getAllBorrow() {
        List<BorrowModel> borrowModels = new ArrayList<>();
        borrows.forEach(borrow -> {
            BorrowModel borrowModel = BorrowModel
                    .builder()
                    .id(borrow.getId())
                    .idBanDoc(borrow.getReader().getId())
                    .idSach(borrow.getBook().getId())
                    .quantity(borrow.getQuantity())
                    .ngayMuon(borrow.getNgayMuon())
                    .tenBanDoc(borrow.getReader().getName())
                    .tenSach(borrow.getBook().getTitle())
                    .build();

            borrowModels.add(borrowModel);
        });
        return borrowModels;
    }

    public void creatBorrow(BorrowModel borrowModel) {

        Book book = bookService.findBookEntityByID(borrowModel.getIdSach());
        Reader reader = readerService.findReaderEntityByID(borrowModel.getIdBanDoc());
        Borrow borrow = Borrow
                .builder()
                .book(book)
                .reader(reader)
                .ngayMuon(borrowModel.getNgayMuon())
                .quantity(borrowModel.getQuantity())
                .build();

        borrows.add(borrow);
        book.setId(AUTO_ID);
        AUTO_ID++;
    }
}

