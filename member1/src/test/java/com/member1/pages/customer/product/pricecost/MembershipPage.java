package com.member1.pages.customer.product.pricecost;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import com.member1.framework.common.Generics;
import com.member1.framework.drivermanager.BaseDriverManager;

public class MembershipPage extends BaseDriverManager {

	WebDriver webDriver;
	Generics generics;

	public MembershipPage(WebDriver webDriver) {
		this.webDriver = webDriver;
		generics = new Generics(webDriver);
	}

	// Become Privilage Member page
	By devenirMembrePrivilegeTitleText = new By.ByXPath("//h2[contains(.,'Devenir Membre Privilège')]");
	By formTitleText = new By.ByXPath("//h3[contains(.,'DEVENIR MEMBRE')][contains(.,'PRIVILÈGE')]");
	By prenomTextbox = new By.ById("fname");
	By nomTextbox = new By.ById("lname");
	By emailTextbox = new By.ById("email");
	By addressTextbox = new By.ById("address");
	By codePostalTextbox = new By.ById("postcode");
	By villeTextbox = new By.ById("city");
	By telephoneTextbox = new By.ById("phone");
	By conditionCheckbox = new By.ByXPath("//input[@type='checkbox'][contains(@class,'accept_condition')]");
	By conditionText = new By.ByXPath("//label[contains(@for,'accept_terms')]");
	By jeDeviensMembrePrivilegeButton = new By.ByXPath("//button[@id='register-button']");
	By jeDeviensMembrePrivilegeButtonBelowPrixTitle = new By.ByXPath("//a[contains(@title,'Je deviens Membre Privilège')]");
	By jeDeviensMembrePrivilegeButtonBelowReadyToSaveTextButton = new By.ByXPath("(//a[contains(@class,'elementor-button-link')][contains(.,'Je deviens Membre Privilège ')])[1]");
	By lesConditionLink =new By.ByXPath("//a[contains(.,'les conditions')]|//a[contains(.,'conditions')]");	
	By devenezMembrePrivilegeTitle = new By.ByXPath("//h1[contains(.,'Devenez Membre Privilège')]");
	By suspendezTitle = new By.ByXPath("//h6[contains(.,'SUSPENDEZ VOTRE ABONNEMENT SANS FRAIS')]");
	
	//CGV Modal
	
	By cgvTitle = new By.ByXPath("//h1[contains(.,'CGV')]");
	By closeButton = new By.ByXPath("//button[@aria-label=\"Close\"]");	
	
	public Boolean isDevenirMembrePrivilegeTitleDisplayed() {
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
	
	public Boolean isJeDeviensMembrePrivilegeButtonBelowPrixTitleDisplayed() {
		return generics.isElementPresent(jeDeviensMembrePrivilegeButtonBelowPrixTitle);
	}
	
	public void clickJeDeviensMembrePrivilegeButtonBelowPrixTitle() {	
		generics.scrollToElement(webDriver.findElement(devenezMembrePrivilegeTitle));
		generics.clickOn(jeDeviensMembrePrivilegeButtonBelowPrixTitle);
	}
	
	public Boolean isJeDeviensMembrePrivilegeButtonBelowReadyToSaveDisplayed() {
		return generics.isElementPresent(jeDeviensMembrePrivilegeButtonBelowReadyToSaveTextButton);
	}
	
	public void clickJeDeviensMembrePrivilegeButtonBelowReadyToSave() {
		generics.scrollToElement(webDriver.findElement(suspendezTitle));
		generics.clickOn(jeDeviensMembrePrivilegeButtonBelowReadyToSaveTextButton);
	}
	
	public void pressBack() {
		generics.pressBackOnBrowser();
	}
	
	public void clickLesConditionLink() {
		generics.scrollToElement(webDriver.findElement(codePostalTextbox));
		generics.clickOn(lesConditionLink);
	}
	
	public void clickCloseButton() {
		generics.clickOn(closeButton);
	}
	
	public int getEURMonthPriceCount(String price) {
		List<WebElement> prices = webDriver.findElements(By.xpath("//h4[contains(.,'"+price+"')]"));
		return prices.size();
	}
	
	public int getBothPriceCount(String price) {
		List<WebElement> prices1 = webDriver.findElements(By.xpath("//span[contains(.,'"+price+"')]"));
		List<WebElement> prices2 = webDriver.findElements(By.xpath("//p[contains(.,'"+price+"')]"));
		return prices1.size()+prices2.size();
	}
	
	public Boolean isCGVTitleDisplayed() {
		return generics.isElementPresent(cgvTitle);
	}
	
	public int getCompanyNameAndAddressCount(String companyName,String companyAddress) {
		List<WebElement> addresses = webDriver.findElements(By.xpath("//p[contains(.,'"+companyName+"') and ('"+companyAddress+"')]"));
		return addresses.size();
	}
	
	public int getMonthPriceCount(String price) {
		List<WebElement> prices = webDriver.findElements(By.xpath("//p[contains(.,'"+price+"')]"));
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
		List<WebElement> companyNameAddressList = webDriver.findElements(By.xpath("//li[contains(.,'"+companyName+ " " +companyAddress+"')]"));
		return companyNameAddressList.size();
	}

	public int getEmailCount(String email) {
		List<WebElement> email1 = webDriver.findElements(By.xpath("//a[contains(@href,'"+email+"')]"));
		List<WebElement> email2 = webDriver.findElements(By.xpath("//li[contains(.,'"+email+"')]"));
		List<WebElement> email3 = webDriver.findElements(By.xpath("//p[contains(.,'e-mail') and contains(.,'"+email+"')]"));	
		return email1.size()+email2.size()+email3.size();
	}
	
	public int getContactNumberCount(String contactNumber) {
		List<WebElement> contactNumber1 = webDriver.findElements(By.xpath("//a[contains(@href,'"+contactNumber+"')]"));
		List<WebElement> contactNumber2 = webDriver.findElements(By.xpath("//li[contains(.,'"+contactNumber+"')]"));
		List<WebElement> contactNumber3 = webDriver.findElements(By.xpath("//p[contains(.,'téléphone au "+contactNumber+".')]"));	
		return contactNumber1.size() + contactNumber2.size() +contactNumber3.size();
	}
	
	public int getCompanyAddressCountOnModal(String companyAddress) {
		List<WebElement> companyAddressList = webDriver.findElements(By.xpath("//div[@class='modal-content']//p[contains(.,'"+companyAddress+"')]"));
		return companyAddressList.size();
	}
	
	public int getCompanyNameWithAddressCountOnModal(String companyName,String companyAddress) {
		List<WebElement> companyNameAddressList = webDriver.findElements(By.xpath("//div[@class='modal-content']//li[contains(.,'"+companyName+ " " +companyAddress+"')]"));
		return companyNameAddressList.size();
	}
	
	public int getContactNumberCountOnModal(String contactNumber) {
		List<WebElement> contactNumberList1 = webDriver.findElements(By.xpath("//div[@class='modal-content']//li[contains(.,'"+contactNumber+"')]"));
		List<WebElement> contactNumberList2 = webDriver.findElements(By.xpath("//div[@class='modal-content']//p[contains(.,'"+contactNumber+"')]"));	
		return contactNumberList1.size() + contactNumberList2.size();
	}
	
	public int getEmailCountOnModal(String email) {
		List<WebElement> emailList1 = webDriver.findElements(By.xpath("//div[@class='modal-content']//li[contains(.,'"+email+"')]"));
		List<WebElement> emailList2 = webDriver.findElements(By.xpath("//div[@class='modal-content']//p[contains(.,'"+email+"')]"));	
		return emailList1.size()+emailList2.size();
	}
	
	public int getBothPriceCountOnModal(String price) {
		List<WebElement> pricesList = webDriver.findElements(By.xpath("//div[@class='modal-content']//p[contains(.,'"+price+"')]"));
		return pricesList.size();
	}
	
}
