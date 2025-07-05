package com.member1.pages.customer.product.commonpages;

import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import com.member1.framework.common.Generics;
import com.member1.framework.drivermanager.BaseDriverManager;

public class GeneralConditionPage extends BaseDriverManager {
	
	WebDriver webDriver;
	Generics generics;

	public GeneralConditionPage(WebDriver webDriver) {
		this.webDriver = webDriver;
		generics = new Generics(webDriver);
	}

	// General Condition page
	
	By generalConditionsOfSaleTitle = new By.ByXPath("//h2[text()='CONDITIONS GÉNÉRALES DE VENTE']");
	By mesPrixComTitle = new By.ByXPath("//p[text()='Mes-prix.com']");
	By dateDeSubscriptionText = new By.ByXPath("//p[contains(.,'Date de souscription à l’abonnement :')]");
		
	public Boolean isGeneralConditionsOfSaleTitleDisplayed() {
		generics.waitForElementVisible(generalConditionsOfSaleTitle);
		return generics.isElementPresent(generalConditionsOfSaleTitle);
	}
		
	public Boolean isCorrectCompanyNameBelowMesPrixTitleDisplayed(String companyName) {
		return generics.isElementPresent(By.xpath("//p[text()='Mes-prix.com']/following::p[1][contains(.,'"+companyName+"')]"));
	}
	
	public Boolean isCorrectCompanyNameBelowFifthPointDisplayed(String companyName) {
		generics.scrollToElement(webDriver.findElement(dateDeSubscriptionText));
		return generics.isElementPresent(By.xpath("//p[contains(.,'Ce formulaire de rétractation devra être adressé :')]/following::li[1][contains(.,'"+companyName+"')]"));
	}
	
	public int getEmailCount(String email) {
		List<WebElement> email1 = webDriver.findElements(By.xpath("//a[contains(@href,'"+email+"')]"));
		List<WebElement> email2 = webDriver.findElements(By.xpath("//li[contains(.,'"+email+"')]"));
		List<WebElement> email3 = webDriver.findElements(By.xpath("//p[contains(.,'e-mail') and contains(.,'"+email+"')]"));	
		return email1.size()+email2.size()+email3.size();
	}
	
	public int getContactNumberCount(String phoneNumber) {
		List<WebElement> contactNumber1 = webDriver.findElements(By.xpath("//a[contains(@href,'"+phoneNumber+"')]"));
		List<WebElement> contactNumber2 = webDriver.findElements(By.xpath("//li[contains(.,'"+phoneNumber+"')]"));
		List<WebElement> contactNumber3 = webDriver.findElements(By.xpath("//p[contains(.,'téléphone au "+phoneNumber+".')]"));	
		return contactNumber1.size() + contactNumber2.size() +contactNumber3.size();
	}
	
	public int getCompanyNameAndAddressCount(String companyName,String companyAddress) {
		List<WebElement> addresses = webDriver.findElements(By.xpath("//p[contains(.,'"+companyName+"') and ('"+companyAddress+"')]"));
		return addresses.size();
	}
	
	public int getBothPriceCount(String price) {
		List<WebElement> prices = webDriver.findElements(By.xpath("//p[contains(.,'"+price+"')]"));
		return prices.size();
	}
	
	public int getMonthPriceCount(String price) {
		List<WebElement> prices = webDriver.findElements(By.xpath("//p[contains(.,'"+price+"')]"));
		return prices.size();
	}
	
	public int getEURMonthPriceCount(String price) {
		List<WebElement> prices = webDriver.findElements(By.xpath("//h4[contains(.,'"+price+"')]"));
		return prices.size();
	}
	
	public int getCompanyNameCount(String companyName) {
		List<WebElement> addresses = webDriver.findElements(By.xpath("//p[contains(.,'"+companyName+"')]"));
		return addresses.size();
	}
	
	public int getCompanyAddressCount(String companyAddress) {
		List<WebElement> addresses = webDriver.findElements(By.xpath("//p[contains(.,'"+companyAddress+"')]"));
		return addresses.size();
	}
	
	public int getCompanyNameWithAddressCount(String companyName,String companyAddress) {
		List<WebElement> addresses1 = webDriver.findElements(By.xpath("//li[contains(.,'"+companyName+ " " +companyAddress+"')]"));
		return addresses1.size();
	}
		
}
