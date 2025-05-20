package com.member1.pages.customer.product;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import com.member1.framework.common.Generics;
import com.member1.framework.drivermanager.BaseDriverManager;

public class ProductCheckoutPage extends BaseDriverManager {

	WebDriver webDriver;
	Generics generics;

	public ProductCheckoutPage(WebDriver webDriver) {
		this.webDriver = webDriver;
		generics = new Generics(webDriver);
	}

	// Checkout page
	By panierTitle = new By.ByXPath("//h1[text()='Panier']");
	By totalAmountText = new By.ByXPath("//th[text()='Total']/following::span[1][@class=\"woocommerce-Price-amount amount\"]/bdi");
	By proceedToCheckoutButton = new By.ByXPath("//a[contains(.,'Proceed to checkout')]");
		
	public Boolean isPanierTitleDisplayed() {
		return generics.isElementPresent(panierTitle);
	}
	
	public void clickOnProceedToCheckoutButton() {
		generics.clickOn(proceedToCheckoutButton);
	}
	
	public String getTotalAmount() {
		return generics.getText(totalAmountText);
	}	
	
}
