package com.member1.pages.customer.headerfooter;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import com.member1.framework.common.Generics;
import com.member1.framework.drivermanager.BaseDriverManager;

public class HeaderFooter extends BaseDriverManager {

	WebDriver webDriver;
	Generics generics;

	public HeaderFooter(WebDriver webDriver) {
		this.webDriver = webDriver;
		generics = new Generics(webDriver);
	}

	// LP Header Footer
	By secureCardImage  = new By.ByXPath("//div[contains(@class,'offerbarexpire')][contains(.,'Paiement sécurisé')]/img");
	By paiementSécuriséText  = new By.ByXPath("//span[contains(.,'Paiement sécurisé')]");
	By serviceContactImage  = new By.ByXPath("//div[contains(@class,'offerbarexpire')][contains(.,'Service client à votre écoute')]/img");
	By serviceClientàVotreéCouteText = new By.ByXPath("//SPAN[normalize-space(text())=\"Service client à votre écoute\"]");
	
	// Mes-Prix HeaderFooter
	By shoppingCart = new By.ByXPath("//a[@title='View your shopping cart']");
	By contactUsLink = new By.ByXPath("//a[contains(.,'CONTACTEZ NOUS')]");
	By conditionGeneralesLink = new By.ByXPath("//a[text()='Conditions générales d’utilisation']");
	By donnesPersonnellesLink = new By.ByXPath("//a[text()='Données personnelles']");
	By mesPrixComLogo = new By.ByXPath("//a[@href='https://mes-prix.com/']|(//img[@alt='Mes-prix.com'])[1]");
	By becomeAPrivilegeMemberLink = new By.ByXPath("(//a[contains(.,'Devenez Membre Privilège')])[1]|(//a[contains(.,'Become a Privilege Member')])[1]|(//a[contains(.,'Devenez Membre') and contains(.,'Privilège')])[1]");
	By fAQetServiceClientLink = new By.ByXPath("//a[text()='FAQ et service client']|//a[text()='FAQ']");
	By monCompteLink = new By.ByXPath("//a[text()='Mon compte']");
	By quiSommesNousLink = new By.ByXPath("//a[text()='Qui sommes-nous ?']");
	By politiqueDeRetoursEtDeRemboursementsLink = new By.ByXPath("//a[text()='Politique de retours et de remboursements']");
	
	//mes marques HeaderFooter
	By mesMarquesLogo = new By.ByXPath("//a[@href='https://mes-marques.com']");
	
	//prixvip headerfooter
	By prixVipLogo = new By.ByXPath("//a[@href='https://prix-vip.com']");
	
	//tariffixe 
	By tarifFixeLogo = new By.ByXPath("//a[@href='https://tarif-fixe.com']|//img[@href='https://tarfi-fixe.com']");
	By viewCartButton = new By.ByXPath("//a[text()='View cart']");
	
	//sansfrais
	By sansFraisLogo = new By.ByXPath("//a[@href='https://sans-frais.com/']|//a[@href='https://sans-frais.com']");
	
	//prixgaranti
	By prixGarantiLogo = new By.ByXPath("//div[contains(@class,'header')]//a[@href='https://prix-garanti.com/']|//div[contains(@class,'header')]//a[@href='https://prix-garanti.com']");
	
	//pricecost
	By priceCostLogo = new By.ByXPath("//div[contains(@class,'header')]//a[@href='https://prix-coutant.com/']");
			 	
	public String getURL() {
		generics.waitForPageLoad(WEB_DRIVER_WAIT);
		return webDriver.getCurrentUrl();
	}
	
	public String getPaiementSécuriséImage() {
		return webDriver.findElement(secureCardImage).getAttribute("src");
	}
	
	public boolean isPaiementSécuriséTextDisplayed() {
		return generics.isElementPresent(paiementSécuriséText);
	}
	
	public String getServiceClientàVotreéCouteImage() {
		return webDriver.findElement(serviceContactImage).getAttribute("src");
	}
	
	public boolean isServiceClientàVotreéCouteTextDisplayed() {
		return generics.isElementPresent(serviceClientàVotreéCouteText);
	}
	
	public void clickOnShoppingCartButton() {
		generics.clickOn(shoppingCart);
		generics.waitForPageLoad("2");
	}	
	
	public boolean isContactUsLinkDisplayed() {
		return generics.isElementPresent(contactUsLink);
	}
	
	public void clickOnContactUsLink() {
		generics.scrollToElement(webDriver.findElement(contactUsLink));
		generics.clickOn(contactUsLink);
		generics.waitForPageLoad("2");
	}
	
	public boolean isDonnesPersonnellesLinkDisplayed() {
		generics.scrollToElement(webDriver.findElement(conditionGeneralesLink));
		return generics.isElementPresent(donnesPersonnellesLink);
	}
	
	public void clickOnDonnesPersonnellesLink() {
		generics.scrollToElement(webDriver.findElement(conditionGeneralesLink));
		generics.clickOn(donnesPersonnellesLink);
		generics.waitForPageLoad("2");
	}
	
	public boolean isConditionGeneralesLinkDisplayed() {
		generics.scrollToElement(webDriver.findElement(conditionGeneralesLink));
		return generics.isElementPresent(conditionGeneralesLink);
	}
	
	public void clickOnConditionGeneralesLink() {
		generics.scrollToElement(webDriver.findElement(conditionGeneralesLink));
		generics.clickOn(conditionGeneralesLink);
		generics.waitForPageLoad("2");
	}
	
	public void clickOnMesPrixLogo() {
		generics.scrollToElement(webDriver.findElement(mesPrixComLogo));
		generics.clickOn(mesPrixComLogo);
		generics.waitForPageLoad("2");
	}
	
	public void clickOnMesMarquesLogo() {
		generics.scrollToElement(webDriver.findElement(mesMarquesLogo));
		generics.clickOn(mesMarquesLogo);
		generics.waitForPageLoad("2");
	}
	
	public void clickOnPrixVipLogo() {
		generics.scrollToElement(webDriver.findElement(prixVipLogo));
		generics.clickOn(prixVipLogo);
		generics.waitForPageLoad("2");
	}
	
	public void clickOnTarifFixeLogo() {
		generics.scrollToElement(webDriver.findElement(tarifFixeLogo));
		generics.clickOn(tarifFixeLogo);
		generics.waitForPageLoad("2");
	}
	
	public void clickOnSansFraisLogo() {
		generics.scrollToElement(webDriver.findElement(sansFraisLogo));
		generics.clickOn(sansFraisLogo);
		generics.waitForPageLoad("2");
	}
	
	public void clickOnPrixGarantiLogo() {
		generics.scrollToElement(webDriver.findElement(prixGarantiLogo));
		generics.clickOn(prixGarantiLogo);
		generics.waitForPageLoad("2");
	}
	
	public void clickOnPriceCostLogo() {
		generics.scrollToElement(webDriver.findElement(priceCostLogo));
		generics.clickOn(priceCostLogo);
		generics.waitForPageLoad("2");
	}
	
	public void clickOnViewCartButton() {
		generics.clickOn(viewCartButton);
		generics.waitForPageLoad("2");
	}
	
	public boolean isBecomeAPrivilegeMemberLinkDisplayed() {
		generics.scrollToElement(webDriver.findElement(becomeAPrivilegeMemberLink));
		return generics.isElementPresent(becomeAPrivilegeMemberLink);
	}
	
	public void clickOnBecomeAPrivilegeMemberLink() {
		generics.clickOn(becomeAPrivilegeMemberLink);
		generics.waitForPageLoad("2");
	}
	
	public boolean isFAQetServiceClientLinkDisplayed() {
		generics.scrollToElement(webDriver.findElement(fAQetServiceClientLink));
		return generics.isElementPresent(fAQetServiceClientLink);
	}
	
	public void clickOnFAQetServiceClientLink() {
		generics.scrollToElement(webDriver.findElement(fAQetServiceClientLink));
		generics.clickOn(fAQetServiceClientLink);
		generics.waitForPageLoad("2");
	}
	
	public int getEmailCountOnHeader(String email) {
		//List<WebElement> emails1 = webDriver.findElements(By.xpath("//div[@class='header-text']/a[contains(.,'"+email+"')]"));
		List<WebElement> emails2 = webDriver.findElements(By.xpath("//div[contains(@class,'header')]//a[contains(.,'"+email+"')]"));
		return emails2.size();
	}
	
	public int getContactNumberCountOnHeader(String phoneNumber) {
		//List<WebElement> contactNumber1 = webDriver.findElements(By.xpath("//div[@class='header-text']/a[contains(.,'"+phoneNumber+"')]"));
		List<WebElement> contactNumber2 = webDriver.findElements(By.xpath("//div[contains(@class,'header')]//a[contains(.,'"+phoneNumber+"')]"));
		return contactNumber2.size();
	}
	
	public int getEmailCountOnFooter(String email) {
		generics.scrollToElement(webDriver.findElement(becomeAPrivilegeMemberLink));
		List<WebElement> emails = webDriver.findElements(By.xpath("(//div[@class='footer-contact'])[1]//a[contains(.,'"+email+"')]"));
		return emails.size();
	}
	
	public int getContactNumberCountOnFooter(String phoneNumber) {
		generics.scrollToElement(webDriver.findElement(becomeAPrivilegeMemberLink));
		List<WebElement> contactNumber = webDriver.findElements(By.xpath("(//div[@class='footer-contact'])[1]//a[contains(.,'"+phoneNumber+"')]"));
		return contactNumber.size();
	}
	
	public int getCompanyFullAddressCountOnFooter(String companyName,String companyAddress) {
		generics.scrollToElement(webDriver.findElement(becomeAPrivilegeMemberLink));
		List<WebElement> addresses = webDriver.findElements(By.xpath("(//div[@class='footer-contact'])[1]//span[contains(.,'"+companyName+"') and ('"+companyAddress+"')]"));
		return addresses.size();
	}
	
	public int getBothPriceCountFooter(String price) {
		generics.scrollToElement(webDriver.findElement(becomeAPrivilegeMemberLink));
		List<WebElement> prices = webDriver.findElements(By.xpath("(//div[@class='footer-contact'])[1]/following::p[contains(.,'"+price+"')]"));
		return prices.size();
	}
	
	public void clickOnMonCompteLink() {
		generics.scrollToElement(webDriver.findElement(conditionGeneralesLink));
		generics.clickOn(monCompteLink);
		generics.waitForPageLoad("2");
	}
	
	public void clickOnQuiSommesNousLink() {
		generics.scrollToElement(webDriver.findElement(conditionGeneralesLink));
		generics.clickOn(quiSommesNousLink);
		generics.waitForPageLoad("2");
	}
	
	public void clickOnPolitiqueDeRetoursEtDeRemboursementsLink() {
		generics.scrollToElement(webDriver.findElement(conditionGeneralesLink));
		generics.clickOn(politiqueDeRetoursEtDeRemboursementsLink);
		generics.waitForPageLoad("2");
	}
	
	
}
