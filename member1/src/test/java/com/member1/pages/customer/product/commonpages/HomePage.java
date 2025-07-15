package com.member1.pages.customer.product.commonpages;

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

	By adherezEnTouteFlexibiliteTitle = new By.ByXPath("//h2[contains(.,'Adhérez en toute flexibilité')]");
	By jeDeviensMembrePrivilègeButtonFromHowItWorksSection = new By.ByXPath("(//span[@class='elementor-button-text'])[1]");
	By jeDeviensMembrePrivilègeButtonFromWhoAreWeSection = new By.ByXPath("(//span[@class='elementor-button-text'])[2]");
	By quiSommesNousTitle = new By.ByXPath("//h2[contains(text(),'Qui sommes-nous ?')]|//span[contains(text(),'QUI SOMMES-NOUS ?')]");	
	By francaisLanguage = new By.ByXPath("//a[contains(.,'Français')]");
	By bestSellingProductsTitle = new By.ByXPath("//div[contains(@data-attrs,'best_selling_products')]//div[@class='slick-track']//h3[contains(@class,'product-title')]/a");
	By nextButton = new By.ByXPath("//div[contains(@data-attrs,'best_selling_products')]//button[@aria-label='Next']");
		
	public void navigateURL(String url) {
		webDriver.navigate().to(url);
		generics.waitForPageLoad("3");
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
	//	generics.scrollToElement(webDriver.findElement(quiSommesNousTitle));
		return generics.isElementPresent(jeDeviensMembrePrivilègeButtonFromWhoAreWeSection);
	}
	
	public void clickJeDeviensMembrePrivilègeButtonFromWhoAreWeSection() {
		generics.clickOn(jeDeviensMembrePrivilègeButtonFromWhoAreWeSection);
	}	
		
	public int getMonthPriceCountOnContent(String price) {
		List<WebElement> prices = webDriver.findElements(By.xpath("//div[@class='entry-content']//p[contains(.,'"+price+"')]"));
		return prices.size();
	}
	
	public void selectFrancaisLanguageFromHeader() {
		generics.waitForElementVisible(francaisLanguage);
		generics.clickOn(francaisLanguage);
	}
	
	public void clickOnNextButton() {
		generics.clickOn(nextButton);
		Generics.pause(2);
	}
	
	public void selectProduct(String productName) {
		generics.scrollToElement(webDriver.findElement(jeDeviensMembrePrivilègeButtonFromHowItWorksSection));
		WebElement product = webDriver.findElement(By.xpath("(//div[contains(@data-attrs,'best_selling_products')]//div[@class='slick-track']//h3[contains(@class,'product-title')]/a[contains(.,'"+productName+"')])[1]"));
		
		if(product.isDisplayed()) {
			product.click();
		}else {
			clickOnNextButton();
			product.click();
		}
	}
	
	
}
