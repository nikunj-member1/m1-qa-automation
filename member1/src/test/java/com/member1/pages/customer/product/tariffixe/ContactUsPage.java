package com.member1.pages.customer.product.tariffixe;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import com.member1.framework.common.Generics;
import com.member1.framework.drivermanager.BaseDriverManager;

public class ContactUsPage extends BaseDriverManager {

	WebDriver webDriver;
	Generics generics;

	public ContactUsPage(WebDriver webDriver) {
		this.webDriver = webDriver;
		generics = new Generics(webDriver);
	}

	// Contact us page
	By basoinDaideContactUsTitle = new By.ByXPath("//h1[@itemprop='headline'][text()='Besoin d’aide ?']/following::p[text()='Contactez-nous']");
	By ecrivezNousTitleText = new By.ByXPath("//h3[text()='ECRIVEZ-NOUS']");
	By nomTextbox = new By.ByCssSelector("[placeholder='Nom']");
	By emailTextbox = new By.ByCssSelector("[placeholder='Adresse mail']");
	By yourMessageTextbox = new By.ByCssSelector("[placeholder='Votre message']");
	By envoyerButton = new By.ByCssSelector("[value='ENVOYER']");
	By responseText = new By.ByXPath("//div[contains(@class,'response-output')][contains(.,\"L’envoi a été détecté comme indésirable.\")]");
	By puisJeResilierMonAbonnementText = new By.ByXPath("//a[@class='elementor-accordion-title'][text()='Puis-je résilier mon abonnement dans les 3 premiers jours ?']");
	By commentResilierMonAbonnementText = new By.ByXPath("//a[@class='elementor-accordion-title'][text()='Comment résilier mon abonnement ?']");
	
	public Boolean isBasoinDaideContactUsTitleDisplayed() {
		return generics.isElementPresent(basoinDaideContactUsTitle);
	}
	
	public Boolean isEcrivezNousTitleDisplayed() {
		return generics.isElementPresent(ecrivezNousTitleText);
	}
	
	public Boolean isNomTextboxDisplayed() {
		return generics.isElementPresent(nomTextbox);
	}
	
	public Boolean isEmailTextboxDisplayed() {
		return generics.isElementPresent(emailTextbox);
	}
	
	public Boolean isYourMessageTextboxDisplayed() {
		generics.scrollToElement(webDriver.findElement(emailTextbox));
		return generics.isElementPresent(yourMessageTextbox);
	}
	
	public Boolean isEnvoyerButtonDisplayed() {
		return generics.isElementPresent(envoyerButton);
	}
	
	public void typeNomTextbox(String nom) {
		generics.type(webDriver.findElement(nomTextbox), nom);
	}
	
	public void typeEmailTextbox(String email) {
		generics.type(webDriver.findElement(emailTextbox), email);
	}
	
	public void typeYourMessageTextbox(String message) {
		generics.type(webDriver.findElement(yourMessageTextbox), message);
	}
	
	public void clickOnEnvoyerButton() {
		generics.scrollToElement(webDriver.findElement(yourMessageTextbox));
		generics.clickOn(envoyerButton);
	}
	
	public void addContactUsFormDetails(String nom,String email,String message) {
		typeNomTextbox(nom);
		typeEmailTextbox(email);
		typeYourMessageTextbox(message);
	}	
	
	public Boolean isResponseTextDisplayed() {
		return generics.isElementPresent(responseText);
	}
	
	public void expandCommentResilierMonAbonnementSection() {
		generics.scrollToElement(webDriver.findElement(puisJeResilierMonAbonnementText));
		generics.clickOn(commentResilierMonAbonnementText);
		Generics.pause(2);
	}
	
	public int getEmailCount(String email) {		
		List<WebElement> emails = webDriver.findElements(By.xpath("//div[@class='entry-content']//li[contains(.,'"+email+"')]"));
		return emails.size();
	}
	
	public int getContactNumberCount(String contactNumber) {
		List<WebElement> contactNumberList = webDriver.findElements(By.xpath("//div[@class='entry-content']//li[contains(.,'"+contactNumber+"')]"));
		return contactNumberList.size();
	}
	
	public int getBothPriceCount(String price) {
		List<WebElement> prices = webDriver.findElements(By.xpath("//div[@class='entry-content']//p[contains(.,'"+price+"')]"));
		return prices.size();
	}
	
	public int getEmailCountOnFAQ(String email) {		
		List<WebElement> emails = webDriver.findElements(By.xpath("//div[@class='entry-content']//p[contains(.,'"+email+"')]"));
		return emails.size();
	}
		
}
