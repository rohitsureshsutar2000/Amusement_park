package com.amusementPark.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.amusementPark.entity.Feedback;
import com.amusementPark.entity.Offers;
import com.amusementPark.repository.FeedbackRepository;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/feedback")
public class FeedbackController {

	@Autowired
	FeedbackRepository feedbackRepo;
	
	@GetMapping("/getfeedback")
	public List<Feedback> getAllFeedbacks() {
		return feedbackRepo.findAll();
	}
	
	@PostMapping("/save")
	public Feedback createFeedback(@RequestBody Feedback feedback)
	{
		return feedbackRepo.save(feedback);
	}
}
