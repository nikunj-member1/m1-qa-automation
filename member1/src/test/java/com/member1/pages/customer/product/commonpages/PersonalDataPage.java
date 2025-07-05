package com.member1.pages.customer.product.commonpages;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import com.member1.framework.common.Generics;
import com.member1.framework.drivermanager.BaseDriverManager;

public class PersonalDataPage extends BaseDriverManager {
	
	WebDriver webDriver;
	Generics generics;

	public PersonalDataPage(WebDriver webDriver) {
		this.webDriver = webDriver;
		generics = new Generics(webDriver);
	}

	// Personal Data page
	
	By politiqueDeConfidentialiteTitle = new By.ByXPath("//h2[text()='Politique de confidentialité']");
	By mesPrixComTitle = new By.ByXPath("//p[text()='Mes-prix.com']");
	By dateDeSubscriptionText = new By.ByXPath("//p[contains(.,'Date de souscription à l’abonnement :')]");
	By companyAddressUnderTitleText = new By.ByXPath("//p[contains(.,'Le site Mes-prix.com accessible via le lien suivant Mes-prix.com est édité par la société DIRECTORS BOOK Ltd., domiciliée au Flat 14 Gooch House, 13 Malthouse Road, London, United Kingdom, SW11 7AU et immatriculée au registre des sociétés de l’Angleterre et du Pays de Galles sous le n° 9400828.')]");
	By companyAddressUnderPresentationTitleText	= new By.ByXPath("//p[contains(.,'DIRECTORS BOOK Ltd., est une société internationale évoluant dans le domaine du e-commerce et spécialisée dans la fourniture de services par abonnement.')]");
	
	public Boolean isPolitiqueDeConfidentialiteTitleDisplayed() {
		generics.waitForElementVisible(politiqueDeConfidentialiteTitle);
		return generics.isElementPresent(politiqueDeConfidentialiteTitle);
	} 
		
	public Boolean isCorrectCompanyNameBelowMesPrixTitleDisplayed(String companyName) {
		return generics.isElementPresent(By.xpath("//p[text()='Mes-prix.com']/following::p[1][contains(.,'"+companyName+"')]"));
	}
	
	public Boolean isCorrectCompanyNameBelowFifthPointDisplayed(String companyName) {
		generics.scrollToElement(webDriver.findElement(dateDeSubscriptionText));
		return generics.isElementPresent(By.xpath("//p[contains(.,'Ce formulaire de rétractation devra être adressé :')]/following::li[1][contains(.,'"+companyName+"')]"));
	}
	
	public Boolean isCompanyAddressUnderTitleDisplayed() {
		return generics.isElementPresent(companyAddressUnderTitleText);
	} 
	
	public Boolean isCompanyAddressUnderPresentationTitleDisplayed() {
		return generics.isElementPresent(companyAddressUnderPresentationTitleText);
	} 
	
	public int getEmailCount(String email) {
		List<WebElement> emails = webDriver.findElements(By.xpath("//div[@class='entry-content']//p[contains(.,'"+email+"')]"));
		return emails.size();
	}
	
	public int getContactNumberCount(String phoneNumber) {
		List<WebElement> contactNumber = webDriver.findElements(By.xpath("//div[@class='entry-content']//p[contains(.,'"+phoneNumber+"')]"));
		return contactNumber.size();
	}
	
	public int getCompanyNameWithAddressCount(String companyName,String companyAddress) {
		List<WebElement> companyNameWithAddresses = webDriver.findElements(By.xpath("//div[@class='entry-content']//p[contains(.,'"+companyName+ " " +companyAddress+"')]"));
		return companyNameWithAddresses.size();
	}
	
	public int getCompanyAddressCount(String companyAddress) {
		List<WebElement> companyAddresses = webDriver.findElements(By.xpath("//div[@class='entry-content']//p[contains(.,'"+companyAddress+"')]"));
		return companyAddresses.size();
	}
	
	public int getBothPriceCount(String price) {
		List<WebElement> bothPrices = webDriver.findElements(By.xpath("//div[@class='entry-content']//p[contains(.,'"+price+"')]"));
		return bothPrices.size();
	}
	
	public int getMonthPriceCount(String price) {
		List<WebElement> monthPrices = webDriver.findElements(By.xpath("//div[@class='entry-content']//p[contains(.,'"+price+"')]"));
		return monthPrices.size();
	}
	
	public int getEURMonthPriceCount(String price) {
		List<WebElement> eurMonthPrices = webDriver.findElements(By.xpath("//div[@class='entry-content']//h4[contains(.,'"+price+"')]"));
		return eurMonthPrices.size();
	}
	
	public int getCompanyNameCount(String companyName) {
		List<WebElement> companyNames1 = webDriver.findElements(By.xpath("//div[@class='entry-content']//p[contains(.,'"+companyName+"')]"));
		List<WebElement> companyNames2 = webDriver.findElements(By.xpath("//div[@class='entry-content']//li[contains(.,'"+companyName+"')]"));
		return companyNames1.size()+companyNames2.size();
	}
		
}
