package com.aglcropsystem.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aglcropsystem.exceptions.CropsNotFoundException;

import com.aglcropsystem.model.Crops;
import com.aglcropsystem.repository.CropsRepo;

@Service
public class CropsServiceImpl implements CropsService {

	@Autowired
	private CropsRepo cropsRepo;

	@Override
	public Crops addCrop(Crops crop) {
		return cropsRepo.save(crop);
	}

	@Override
	public List<Crops> getAllCrop() {
		List<Crops> crop = cropsRepo.findAll();
		return crop;
	}

	@Override
	public String  deleteCropById(int cropId) {
		 if(cropsRepo.existsById(cropId)) {
			 cropsRepo.deleteById(cropId);
			return " Crop  deleted successfully with Id"+cropId;
		 }
		 
		 throw new CropsNotFoundException("Crop   not exising with id: " + cropId);
		 
	}

	@Override
	public Crops updateCrop(Crops crop) {
		Optional<Crops> optionalCrops = cropsRepo.findById(crop.getId());

		if (optionalCrops == null) {
			throw new CropsNotFoundException("Crops not exising with id: " + crop.getId());
		}

		Crops updatedCrops = cropsRepo.save(crop);

		return updatedCrops;
	}

	@Override
	public Crops getCropsById(int id) {
		Optional<Crops> optionalCrops = cropsRepo.findById(id);

		if (optionalCrops == null) {
			throw new CropsNotFoundException("Crops not exising with id: " + id);
		}

		Crops crops = optionalCrops.get();

		return crops;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	

//	@Override
//	public void deleteCrop(String cropId) {
//		Optional<Crops> optionalCrops = cropsRepo.findById(cropId);
//
//		if (optionalCrops == null) {
//			throw new CropsNotFoundException("Crops not exising with id: " + cropId);
//		}
//
//		Crops crops = optionalCrops.get();
//
//		cropsRepo.delete(crops);
//
//	}


}
