package com.member1.pages.customer.product.commonpages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import com.member1.framework.common.Generics;
import com.member1.framework.drivermanager.BaseDriverManager;

public class OrderConfirmationPage extends BaseDriverManager{

	WebDriver webDriver;
	Generics generics;

	public OrderConfirmationPage(WebDriver webDriver) {
		this.webDriver = webDriver;
		generics = new Generics(webDriver);
	}

	// Order Confirmation page
	By orderNumberText = new By.ByXPath("//div[contains(text(),'Order')]");
	By merciText = new By.ByXPath("//span[contains(text(),'merci')]");
	By contactInformationText = new By.ByXPath("//b[contains(.,'Informations sur le contact')]/following::div[contains(.,'AT_Hiroko@maildrop.cc')]");
	By decoureznosproduitsButton = new By.ByXPath("//a[contains(text(),'DÉCOUVREZ NOS PRODUITS')]");
	 
	public Boolean isMerciTextDisplayed() {
		generics.waitForElementVisible(merciText);
		return generics.isElementPresent(merciText);
	}
	
	public Boolean isContactEmailDisplayed(String email) {
		return generics.isElementPresent(By.xpath("//b[contains(.,'Informations sur le contact')]/following::div[contains(.,'"+email+"')]"));
	}
	
	public Boolean isDecoureznosproduitsButtonDisplayed() {
		return generics.isElementPresent(decoureznosproduitsButton);
	}
	
	public String getOrderNumberText() {
		generics.waitForElementVisible(orderNumberText);
		return generics.getText(orderNumberText).split(" ")[1].trim();
	}
	
	
}
