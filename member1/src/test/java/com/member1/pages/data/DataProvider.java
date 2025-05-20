package com.member1.pages.data;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

import com.github.javafaker.Faker;

public class DataProvider {

	Faker faker = new Faker();

	public String getFirstName() {
		return "test";
	}

	public String getLastName() {
		return "test";
	}

	public String getMobileNumber() {
		return "9198256252";
	}
	
	public String getEmailDomain() {
		return "@maildrop.cc";
	}
	
	public String getEmail() {
		return "AT_" + faker.name().firstName()+"@maildrop.cc";
	}

	Faker fakerAddress = new Faker(new Locale("en-IND"));

	public String getPostalCode() {
		return fakerAddress.address().zipCode();
	}
	
	public String getAddressLine1() {
		return fakerAddress.address().fullAddress();
	}
	
	public String getAddressLine2() {
		return fakerAddress.address().secondaryAddress();
	}

	public String getCountryName() {
		return "India";
	}

	public String getStateName() {
		return "Gujarat";
	}

	public String getCityName() {
		return "AHMEDABAD";
	}

	public String getCardExpireMonth() {
		return "10";
	}

	public String getCardExpireYear() {
		return "27";
	}
	
	public String getCardNumber() {
		return "4785 5430 7712 8496";
	}
	
	public String getCvvNumber() {
		return "367";
	}
		
	public String getBirthDate() {
		Date date = faker.date().birthday(19, 50);
		DateFormat formatter = new SimpleDateFormat("dd/MM/YYYY");
		return formatter.format(date);
	}

	public String getCustomerRecruiterEmail() {
		return getFirstName() + getEmailDomain();
	}
	
	public String getCardHolderName() {
		return "hind hage";
	}	
	
	public String getMessageText() {
		return faker.book().genre();
	}
	
}
