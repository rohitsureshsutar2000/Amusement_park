package com.amusementPark.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.amusementPark.entity.Bookings;
import com.amusementPark.entity.Feedback;
import com.amusementPark.repository.BookingRepository;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/bookings")
public class BookingController {
	
	@Autowired
	private BookingRepository bookingRepo;
	
	@GetMapping("/getbookings")
	public List<Bookings> getBookings(){
		return bookingRepo.findAll();
	}
	
	@PostMapping("/save")
	public Bookings createBooking(@RequestBody Bookings booking)
	{
		return bookingRepo.save(booking);
	}

}
