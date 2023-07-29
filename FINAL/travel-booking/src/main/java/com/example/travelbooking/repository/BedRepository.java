package com.example.travelbooking.repository;

import com.example.travelbooking.entity.Bed;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BedRepository extends JpaRepository<Bed, Long> {
    void deleteAllByRoomId(Long roomId);

    @Query("select b from Bed b where b.room.id = :roomId")
    List<Bed> findByRoom(Long roomId);
}
