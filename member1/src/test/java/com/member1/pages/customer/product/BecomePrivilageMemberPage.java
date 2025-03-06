package com.member1.pages.customer.product;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import com.member1.framework.common.Generics;
import com.member1.framework.drivermanager.BaseDriverManager;

public class BecomePrivilageMemberPage extends BaseDriverManager {

	WebDriver webDriver;
	Generics generics;

	public BecomePrivilageMemberPage(WebDriver webDriver) {
		this.webDriver = webDriver;
		generics = new Generics(webDriver);
	}

	// Become Privilage Member page
	By devenirMembrePrivilegeTitleText = new By.ByXPath("//h2[contains(.,'Devenir Membre Privilège')]");
	By formTitleText = new By.ByXPath("//form/div/h3[contains(.,'DEVENIR MEMBRE PRIVILÈGE')]");
	By prenomTextbox = new By.ById("fname");
	By nomTextbox = new By.ById("lname");
	By emailTextbox = new By.ById("email");
	By addressTextbox = new By.ById("address");
	By codePostalTextbox = new By.ById("postal_code");
	By villeTextbox = new By.ById("ville");
	By telephoneTextbox = new By.ById("phone");
	By conditionCheckbox = new By.ById("is_adult");
	By conditionText = new By.ByCssSelector("[for='is_adult']");
	By jeDeviensMembrePrivilegeButton = new By.ByXPath("//button[@data-text-value=\"JE DEVIENS MEMBRE PRIVILÈGE\"]");
		
	public void navigateURL(String url) {
		webDriver.navigate().to(url);
	}
	
	public Boolean isDevenirMembrePrivilegeTitleTextDisplayed() {
		generics.scrollToElement(webDriver.findElement(devenirMembrePrivilegeTitleText));
		return generics.isElementPresent(devenirMembrePrivilegeTitleText);
	}
	
	public Boolean isFormTitleTextDisplayed() {
		generics.scrollToElement(webDriver.findElement(formTitleText));
		return generics.isElementPresent(formTitleText);
	}
	
	public Boolean isPrenomDisplayed() {
		generics.scrollToElement(webDriver.findElement(prenomTextbox));
		return generics.isElementPresent(prenomTextbox);
	}
	
	public Boolean isNomDisplayed() {
		return generics.isElementPresent(nomTextbox);
	}

	public Boolean isEmailDisplayed() {
		return generics.isElementPresent(emailTextbox);
	}

	public Boolean isAddressDisplayed() {
		return generics.isElementPresent(addressTextbox);
	}

	public Boolean isCodePostalDisplayed() {
		return generics.isElementPresent(codePostalTextbox);
	}
	
	public Boolean isVilleDisplayed() {
		return generics.isElementPresent(villeTextbox);
	}
	
	public Boolean isTelephoneDisplayed() {
		return generics.isElementPresent(telephoneTextbox);
	}

	public Boolean isConditionCheckboxDisplayed() {
		return generics.isElementPresent(conditionCheckbox);
	}
	
	public Boolean isConditionTextDisplayed() {
		return generics.isElementPresent(conditionText);
	}
	
	public Boolean isJeDeviensMembrePrivilegeButtonDisplayed() {
		return generics.isElementPresent(jeDeviensMembrePrivilegeButton);
	}
	
	public void clickJeDeviensMembrePrivilegeButton() {
		generics.clickOn(jeDeviensMembrePrivilegeButton);
	}
	
	public void typePrenomTextbox(String prenom) {
		generics.scrollToElement(webDriver.findElement(formTitleText));
		Generics.type(webDriver.findElement(prenomTextbox), prenom);
	}

	public String getNomTextboxPlaceholder() {
		return webDriver.findElement(nomTextbox).getAttribute("placeholder");
	}

	public void typeNomTextbox(String nom) {
		Generics.type(webDriver.findElement(nomTextbox), nom);
	}

	public String getEmailTextboxPlaceholder() {
		return webDriver.findElement(emailTextbox).getAttribute("placeholder");
	}

	public void typeEmailTextbox(String email) {
		Generics.type(webDriver.findElement(emailTextbox), email);
	}

	public String getAddressTextboxPlaceholder() {
		return webDriver.findElement(addressTextbox).getAttribute("placeholder");
	}

	public void typeAddressTextbox(String address) {
		Generics.type(webDriver.findElement(addressTextbox), address);
	}

	public String getCodePostalTextboxPlaceholder() {
		return webDriver.findElement(codePostalTextbox).getAttribute("placeholder");
	}

	public void typeCodePostalTextbox(String codePostal) {
		Generics.type(webDriver.findElement(codePostalTextbox), codePostal);
	}

	public String getVilleTextboxPlaceholder() {
		return webDriver.findElement(villeTextbox).getAttribute("placeholder");
	}

	public void typeVilleTextbox(String ville) {
		Generics.type(webDriver.findElement(villeTextbox), ville);
	}
	
	public String getTelephoneTextboxPlaceholder() {
		return webDriver.findElement(telephoneTextbox).getAttribute("placeholder");
	}

	public void typeTelephoneTextbox(String telephone) {
		Generics.type(webDriver.findElement(telephoneTextbox), telephone);
	}

	public void checkConditionCheckbox() {
		generics.scrollToElement(webDriver.findElement(conditionCheckbox));
		generics.clickOn(conditionCheckbox);
		generics.scrollToElement(webDriver.findElement(prenomTextbox));
	}

	public String getConditionTextDisplayed() {
		return generics.getText(conditionText);
	}

	public void fillUpForm(String prenom, String nom, String email, String address, String codePostal, String ville,String  telephone,
			boolean isSubmit) {
		typePrenomTextbox(prenom);
		typeNomTextbox(nom);
		typeEmailTextbox(email);
		typeAddressTextbox(address);
		typeCodePostalTextbox(codePostal);
		typeVilleTextbox(ville);
		typeTelephoneTextbox(telephone);
		checkConditionCheckbox();
		Generics.pause(2);
		if (isSubmit) {
			clickJeDeviensMembrePrivilegeButton();
			Generics.pause(2);
		}
	}

}
