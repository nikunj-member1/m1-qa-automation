package com.member1.pages.customer.headerfooter;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import com.member1.framework.common.Generics;
import com.member1.framework.drivermanager.BaseDriverManager;

public class HeaderFooter extends BaseDriverManager {

	WebDriver webDriver;
	Generics generics;

	public HeaderFooter(WebDriver webDriver) {
		this.webDriver = webDriver;
		generics = new Generics(webDriver);
	}

	// Header Footer
	By secureCardImage  = new By.ByXPath("//div[contains(@class,'offerbarexpire')][contains(.,'Paiement sécurisé')]/img");
	By paiementSécuriséText  = new By.ByXPath("//span[contains(.,'Paiement sécurisé')]");
	By serviceContactImage  = new By.ByXPath("//div[contains(@class,'offerbarexpire')][contains(.,'Service client à votre écoute')]/img");
	By serviceClientàVotreéCouteText = new By.ByXPath("//SPAN[normalize-space(text())=\"Service client à votre écoute\"]");
	
	public void navigateToLP(String url) {
		webDriver.get(url);
	}
	
	public String getURL() {
		generics.WaitForPageLoad(WEB_DRIVER_WAIT);
		return webDriver.getCurrentUrl();
	}
	
	public String getPaiementSécuriséImage() {
		return webDriver.findElement(secureCardImage).getAttribute("src");
	}
	
	public boolean verifyPaiementSécuriséTextDisplayed() {
		return generics.isElementPresent(paiementSécuriséText);
	}
	
	public String getServiceClientàVotreéCouteImage() {
		return webDriver.findElement(serviceContactImage).getAttribute("src");
	}
	
	public boolean verifyServiceClientàVotreéCouteTextDisplayed() {
		return generics.isElementPresent(serviceClientàVotreéCouteText);
	}
		
}
