package com.member1.pages.customer.product;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import com.member1.framework.common.Generics;
import com.member1.framework.drivermanager.BaseDriverManager;

public class MesPrixHomePage extends BaseDriverManager {

	WebDriver webDriver;
	Generics generics;

	public MesPrixHomePage(WebDriver webDriver) {
		this.webDriver = webDriver;
		generics = new Generics(webDriver);
	}

	// Home page
	By adherezEnTouteFlexibiliteTitle = new By.ByXPath("//h2[contains(.,'Adhérez en toute flexibilité')]");
	By jeDeviensMembrePrivilègeButton = new By.ByXPath("(//span[@class=\"elementor-button-text\"])[1]");
		
	public void navigateURL(String url) {
		webDriver.navigate().to(url);
	}
	
	public Boolean isJeDeviensMembrePrivilègeButtonDisplayed() {
		generics.waitForElementVisible(jeDeviensMembrePrivilègeButton);
		generics.scrollToElement(webDriver.findElement(adherezEnTouteFlexibiliteTitle));
		return generics.isElementPresent(jeDeviensMembrePrivilègeButton);
	}
	
	public void clickJeDeviensMembrePrivilègeButton() {
		generics.clickOn(jeDeviensMembrePrivilègeButton);
	}
	
	
	
	
	
}
