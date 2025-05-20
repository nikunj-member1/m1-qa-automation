package com.member1.pages.customer.product;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import com.member1.framework.common.Generics;
import com.member1.framework.drivermanager.BaseDriverManager;

public class HomePage extends BaseDriverManager {

	WebDriver webDriver;
	Generics generics;

	public HomePage(WebDriver webDriver) {
		this.webDriver = webDriver;
		generics = new Generics(webDriver);
	}

	// Mes Prix Home page
	By adherezEnTouteFlexibiliteTitle = new By.ByXPath("//h2[contains(.,'Adhérez en toute flexibilité')]");
	By jeDeviensMembrePrivilègeButtonFromHowItWorksSection = new By.ByXPath("(//span[@class='elementor-button-text'])[1]");
	By jeDeviensMembrePrivilègeButtonFromWhoAreWeSection = new By.ByXPath("(//span[@class='elementor-button-text'])[2]");
	By nousSommesUnClubentrepotTitle = new By.ByXPath("//h2[text()='Nous sommes un Club-entrepôt ! ']");
		
	public void navigateURL(String url) {
		webDriver.navigate().to(url);
		generics.waitForPageLoad("2");
	}
	
	public Boolean isJeDeviensMembrePrivilègeButtonFromHowItWorksSectionDisplayed() {
		generics.waitForElementVisible(jeDeviensMembrePrivilègeButtonFromHowItWorksSection);
		generics.scrollToElement(webDriver.findElement(adherezEnTouteFlexibiliteTitle));
		return generics.isElementPresent(jeDeviensMembrePrivilègeButtonFromHowItWorksSection);
	}
	
	public void clickJeDeviensMembrePrivilègeButtonFromHowItWorksSection() {
		generics.clickOn(jeDeviensMembrePrivilègeButtonFromHowItWorksSection);
	}
	
	public Boolean isJeDeviensMembrePrivilègeButtonFromWhoAreWeSectionDisplayed() {
		generics.waitForElementVisible(jeDeviensMembrePrivilègeButtonFromWhoAreWeSection);
		generics.scrollToElement(webDriver.findElement(nousSommesUnClubentrepotTitle));
		return generics.isElementPresent(jeDeviensMembrePrivilègeButtonFromWhoAreWeSection);
	}
	
	public void clickJeDeviensMembrePrivilègeButtonFromWhoAreWeSection() {
		generics.clickOn(jeDeviensMembrePrivilègeButtonFromWhoAreWeSection);
	}	
		
	public int getMonthPriceCountOnContent(String price) {
		List<WebElement> prices = webDriver.findElements(By.xpath("//div[@class='entry-content']//p[contains(.,'"+price+"')]"));
		return prices.size();
	}
	
}
