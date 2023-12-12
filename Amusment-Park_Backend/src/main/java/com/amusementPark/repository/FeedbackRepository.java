package com.amusementPark.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.amusementPark.entity.Feedback;

public interface FeedbackRepository extends JpaRepository<Feedback,Integer> {

}
