package com.amusementPark.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.amusementPark.entity.Offers;
import com.amusementPark.repository.OffersRepository;
import com.amusementPark.services.OfferService;



@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/offers")
public class OffersController {

	@Autowired
	private OffersRepository offerRepository;

	@GetMapping("/getoffer")
	public List<Offers> getAllOffers(){
		return offerRepository.findAll();
	}

	@PutMapping("/update")
	public Offers updateOffers(@RequestBody Offers offer, @RequestParam int id)
	{
		return offerRepository.save(offer);
	}
	
	@PostMapping("/save")
	public Offers createNewOffers(@RequestBody Offers offer)
	{
		return offerRepository.save(offer);
	}
	
}