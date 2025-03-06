package com.member1.pages.customer.product;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import com.member1.framework.common.Generics;
import com.member1.framework.drivermanager.BaseDriverManager;

public class BasketPage extends BaseDriverManager {
	
	WebDriver webDriver;
	Generics generics;

	public BasketPage(WebDriver webDriver) {
		this.webDriver = webDriver;
		generics = new Generics(webDriver);
	}

	// Basket page
	
	By basketTitle = new By.ByXPath("//h1[text()='Panier']");
	By proceedToCheckoutButton = new By.ByXPath("//div[@class=\"wc-proceed-to-checkout\"]/a");
	By totalAmountText = new By.ByXPath("//td[@data-title='Total']//bdi");
		
	public Boolean isBasketTitleDisplayed() {
		return generics.isElementPresent(basketTitle);
	}
	
	public Boolean isProceedToCheckoutDisplayed() {
	//	generics.scrollToElement(webDriver.findElement(totalAmountText));
		Generics.pause(2);
		return generics.isElementPresent(proceedToCheckoutButton);
	}
	
	public void clickOnProceedToCheckout() {		
	//	generics.scrollToElement(webDriver.findElement(totalAmountText));
		Generics.pause(2);
		generics.clickOn(proceedToCheckoutButton);
	}
	
	public Boolean isTotalAmountTextDisplayed() {
		return generics.isElementPresent(totalAmountText);
	}
		
}
