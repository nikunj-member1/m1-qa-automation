package com.member1.pages.customer.product;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import com.member1.framework.common.Generics;
import com.member1.framework.drivermanager.BaseDriverManager;

public class PaymentPage extends BaseDriverManager{

	WebDriver webDriver;
	Generics generics;

	public PaymentPage(WebDriver webDriver) {
		this.webDriver = webDriver;
		generics = new Generics(webDriver);
	}

	// Payment page
	By paymentTitle = new By.ByXPath("//div[contains(@class,'form-wrapper')]/*[@id='iwbdp']");
	By cardNumberIcon = new By.ByXPath("//div[@class='input-group']/input[@id='card_num1']/../span/i[@class='far fa-credit-card']");
	By cardNumberTextbox = new By.ById("card_num1");
	By ccvIcon = new By.ByXPath("//div[@class='input-group']/input[@id='ccv']/../span/i[@class='fas fa-lock']");
	By ccvTextbox = new By.ById("ccv");
	By cardYearTextbox = new By.ById("card-exp-year");
	By cardMonthTextbox = new By.ById("card-exp-month");
	By payerButton = new By.ById("buybtn");
	By paymentCardIcons = new By.ByXPath("//div[contains(@class,'secure-payment-cards')]/div/img");
		
	public String getPaymentTitle() {
		generics.waitForElementVisible(paymentTitle);
		return generics.getText(paymentTitle);
	}
	
	public Boolean isCardNumberIconDisplayed() {
		return generics.isElementPresent(cardNumberIcon);
	}
		 
	public String getCardNumberTextboxPlaceholder() {
		return webDriver.findElement(cardNumberTextbox).getAttribute("placeholder");
	}
	
	public Boolean isCcvIconDisplayed() {
		return generics.isElementPresent(ccvIcon);
	}
	
	public String getCcvTextboxPlaceholder() {
		return webDriver.findElement(ccvTextbox).getAttribute("placeholder");
	}
	
	public Boolean isCardYearTextboxDisplayed() {
		return generics.isElementPresent(cardYearTextbox);
	}
	
	public Boolean isCardMonthTextboxDisplayed() {
		return generics.isElementPresent(cardMonthTextbox);
	}
	
	public Boolean isPayerButtonDisplayed() {
		return generics.isElementPresent(payerButton);
	}
	
	public String getPaymentCardIconsImageSrc() {
		return webDriver.findElement(paymentCardIcons).getAttribute("src");
	}
	
	public String getPayerButtonText() {
		return Generics.getText(webDriver.findElement(payerButton));
	}
	
	public Boolean isPaymentCardIconsDisplayed() {
		return generics.isElementPresent(paymentCardIcons);
	}
		
	public void typeCardNumberTextbox(String cardNumber) {
	//	generics.scrollToElement(webDriver.findElement(paymentTitle));
		Generics.pause(2);
		Generics.type(webDriver.findElement(cardNumberTextbox),cardNumber);
	}
	
	public void typeCVVTextbox(String cvvNumber) {
		Generics.type(webDriver.findElement(ccvTextbox),cvvNumber);
	}
	
	public void selectMonth(String cardMonth) {
		generics.selectValueFromDropDown(webDriver.findElement(cardMonthTextbox),cardMonth);
	}
	
	public void selectYear(String cardYear) {
		generics.selectValueFromDropDown(webDriver.findElement(cardYearTextbox),cardYear);
	}
	
	public void clickPayerButton() {
		generics.clickOn(payerButton);
	}
	
	public void fillUpCardDetails(String cardNumber,String cvvNumber,String cardMonth,String cardYear,boolean isPayer) {
		typeCardNumberTextbox(cardNumber);
		selectMonth(cardMonth);
		selectYear(cardYear);		
		typeCVVTextbox(cvvNumber);
		Generics.pause(2);
		if(isPayer) {
			clickPayerButton();	
			Generics.pause(2);
		}
	}
}
