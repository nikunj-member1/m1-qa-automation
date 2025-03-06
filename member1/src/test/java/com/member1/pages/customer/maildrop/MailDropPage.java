package com.member1.pages.customer.maildrop;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import com.member1.framework.common.Generics;

public class MailDropPage {
	
	WebDriver webDriver;
	Generics generics;

	public MailDropPage(WebDriver webDriver) {
		this.webDriver = webDriver;
		generics = new Generics(webDriver);
	}
	
	// LP Header Footer
	By messageText = new By.ByXPath("//div[contains(@class,'subhead')]");
	By companyEmailNameText  = new By.ByXPath("//div[contains(@class,'md:first:rounded')]//div[contains(.,'Natalie Lemieux <clients@mes-prix.com>')]");
	By votreCommandeEstMaintenantTermineeText = new By.ByXPath("//div[contains(@class,'truncate')][text()='Votre commande est maintenant terminée']");
		 	
	public void navigateToMailDrop(String name) {
		webDriver.get("https://maildrop.cc/inbox/?mailbox="+name);
	}
	
	public Boolean isCompanyEmailNameTextDisplayed() {
		generics.waitForElementVisible(messageText);
		return generics.isElementPresent(companyEmailNameText);
	}
	
	public Boolean isVotreCommandeEstMaintenantTermineeTextDisplayed() {
		generics.waitForElementVisible(messageText);
		return generics.isElementPresent(votreCommandeEstMaintenantTermineeText);
	}
	
	
	
}
