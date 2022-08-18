package com.aglcropsystem.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.aglcropsystem.model.Payment;


@Repository
public interface PaymentRepository extends MongoRepository<Payment, String> {

}