package com.aglcropsystem.repository;
import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.aglcropsystem.model.Crops;


@Repository
public interface CropsRepo extends MongoRepository<Crops , Integer> {
	
	List<Crops> findByFarmerId(String farmerId);

	boolean existsById(int cropId);


}