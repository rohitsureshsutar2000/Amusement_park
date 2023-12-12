package com.amusementPark.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.amusementPark.entity.Bookings;

public interface BookingRepository extends JpaRepository<Bookings, Integer> {

}
