package com.aglcropsystem.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aglcropsystem.exceptions.PaymentNotFoundException;
import com.aglcropsystem.model.Payment;
import com.aglcropsystem.repository.PaymentRepository;


@Service
public class PaymentServiceImpl implements PaymentService {

	@Autowired
	private PaymentRepository paymentRepository;

	@Override
	public List<Payment> getAllPayments() {

		List<Payment> payments = paymentRepository.findAll();

		return payments;
	}

	@Override
	public Payment savePayment(Payment payment) {

		Payment savedPayment = paymentRepository.save(payment);

		return savedPayment;
	}

	@Override
	public Payment getPaymentById(String transactionId) {

		Optional<Payment> optionalPayment = paymentRepository.findById(transactionId);

		if (optionalPayment == null) {
			throw new PaymentNotFoundException("Payment not exising with id: " + transactionId);
		}

		Payment payment = optionalPayment.get();

		return payment;
	}

}