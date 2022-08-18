package com.aglcropsystem.model;

//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="Cropdetails")
public class Crops {
	
	
	 @Transient
	    public static final String SEQUENCE_NAME = "user_sequence";

	
	@Id
	private int id;
	
	private String farmerId;
	
	
	@NotNull(message = "Crop name should not be empty")
	@Size(min = 2, message = "Crop name should not be less than 2 characters")
	private String cropName;
	
	@NotNull(message = "Crop type most  be select")
	private String cropType;
	
	@NotNull(message = "Crop quantity should not be empty")
	private double quantity;
	
	@NotNull(message = "Crop price should not be empty")
	private double price;
	
	
	private String address;
	
	public Crops() {
		super();
	}

	public Crops(int id, String farmerId, String cropName, String cropType, double quantity, double price,
			String address) {
		super();
		this.id = id;
		this.farmerId = farmerId;
		this.cropName = cropName;
		this.cropType = cropType;
		this.quantity = quantity;
		this.price = price;
		this.address = address;
	}
	
	@Override
	public String toString() {
		return "Crops [id=" + id + ", farmerId=" + farmerId + ", cropName=" + cropName + ", cropType=" + cropType
				+ ", quantity=" + quantity + ", price=" + price + ", address=" + address + "]";
	}

	public int getId() {
		return id;
	}
	public void setId(int i) {
		this.id = i;
	}
	public String getFarmerId() {
		return farmerId;
	}
	public void setFarmerId(String farmerId) {
		this.farmerId = farmerId;
	}
	public String getCropName() {
		return cropName;
	}
	public void setCropName(String cropName) {
		this.cropName = cropName;
	}
	public String getCropType() {
		return cropType;
	}
	public void setCropType(String cropType) {
		this.cropType = cropType;
	}
	public double getQuantity() {
		return quantity;
	}
	public void setQuantity(double quantity) {
		this.quantity = quantity;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}

	
	
	
		
}