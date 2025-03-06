package com.member1.pages.customer.product;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import com.member1.framework.common.Generics;
import com.member1.framework.drivermanager.BaseDriverManager;

public class MerciPage extends BaseDriverManager{

	WebDriver webDriver;
	Generics generics;

	public MerciPage(WebDriver webDriver) {
		this.webDriver = webDriver;
		generics = new Generics(webDriver);
	}

	// Merci page
	By merciText = new By.ByXPath("//h1[contains(.,'Merci !')]");
	By merciContentText = new By.ByXPath("//div[contains(@class,'subscribe_password')]");
	By merciHeaderText = new By.ByXPath("//div[contains(text(),'Merci pour votre confiance et votre achat ! Mes-Prix')]");
	By decoureznosproduitsButton = new By.ByXPath("//a[contains(text(),'Découvrez nos produits')]|//span[contains(text(),'Découvrez nos produits')]");
	 
	public Boolean isMerciTextDisplayed() {
		generics.waitForElementVisible(merciText);
		return generics.isElementPresent(merciText);
	}
	
	public String getMerciContentText() {
		return generics.getText(merciContentText);
	}
	
	public Boolean isMerciHeaderTextDisplayed() {
		generics.waitForElementVisible(merciHeaderText);
		return generics.isElementPresent(merciHeaderText);
	}
	
	public Boolean isDecoureznosproduitsButtonDisplayed() {
		return generics.isElementPresent(decoureznosproduitsButton);
	}	
	
}
