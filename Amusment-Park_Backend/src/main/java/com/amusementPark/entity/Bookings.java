package com.amusementPark.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "booking")
public class Bookings {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "booking_id")
	private int id;
	
	@Column(name = "fname")
	private String fname;
	
	@Column(name = "pan_number")
	private String pan_number;
	
	@Column(name = "offer")
	private String offer;
	
	@Column(name = "price")
	private String price;
	
	@Column(name="address")
	private String address;
	
	public Bookings() {};
	
	public Bookings(int id, String fname, String pan_number, String offer, String price, String address) {
		super();
		this.id = id;
		this.fname = fname;
		this.pan_number = pan_number;
		this.offer = offer;
		this.price = price;
		this.address = address;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getPan_number() {
		return pan_number;
	}

	public void setPan_number(String pan_number) {
		this.pan_number = pan_number;
	}

	public String getOffer() {
		return offer;
	}

	public void setOffer(String offer) {
		this.offer = offer;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}
	
}
