package com.member1.pages.customer.maildrop;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

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
	By totalAmountLabel = new By.ByXPath("//tr/th[text()='Total:']");
	By billingAddressLabel = new By.ByXPath("//h2[contains(.,'Billing address')]");
	By shippingAddressLabel = new By.ByXPath("//h2[contains(.,'Shipping address')]");
	By refreshMailboxButton = new By.ByXPath("//button[contains(.,\"Refresh Mailbox\")]");
		 	
	public void navigateToMailDrop(String name) {
		webDriver.get("https://maildrop.cc/inbox/?mailbox="+name);
		generics.waitForPageLoad("2");
	}
	
	public Boolean isCompanyEmailNameTextDisplayed() {
		Boolean headerText = generics.isElementPresent(messageText);
		if(headerText.equals(false)) {
			generics.clickOn(refreshMailboxButton);
			System.out.println("refresh clicked");
		}
		return generics.isElementPresent(companyEmailNameText);
	}
	
	public Boolean isVotreCommandeEstMaintenantTermineeTextDisplayed() {
		return generics.isElementPresent(votreCommandeEstMaintenantTermineeText);
	}
	
	public Boolean isPurchasedProductNameDisplayed(String productName) {
		WebElement iFrame = webDriver.findElement(By.xpath("//iframe"));
		webDriver.switchTo().frame(iFrame);
		return generics.isElementPresent(By.xpath("//tbody/tr[@class='order_item']/td[contains(.,'"+productName+"')]"));
	}
	
	public Boolean isTotalAmountDisplayed(String price) {
		generics.scrollToElement(webDriver.findElement(totalAmountLabel));
		return generics.isElementPresent(By.xpath("//tr/th[text()='Total:']/following::span[1][@class='woocommerce-Price-amount amount'][contains(.,'"+price+"')]"));
	}
	
	public Boolean isBillingAddressDisplayed(String firstName,String lastName,String addressline1,String addressline2,String postalCode,String city,String email) {
		generics.scrollToElement(webDriver.findElement(billingAddressLabel));
		return generics.isElementPresent(By.xpath("//h2[contains(.,'Billing address')]/following::address[1][contains(.,'"+firstName+" "+lastName+"') and contains(.,'"+addressline1+"') and contains(.,'"+addressline2+"') and contains(.,'"+postalCode+" "+city+"') and contains(.,'France') and contains(.,'"+email+"')]"));
	}
	
	public Boolean isShippingAddressDisplayed(String firstName,String lastName,String addressline1,String addressline2,String postalCode,String city) {
		generics.scrollToElement(webDriver.findElement(shippingAddressLabel));
		return generics.isElementPresent(By.xpath("//h2[contains(.,'Shipping address')]/following::address[1][contains(.,'"+firstName+" "+lastName+"') and contains(.,'"+addressline1+"') and contains(.,'"+addressline2+"') and contains(.,'"+postalCode+" "+city+"') and contains(.,'France')]"));
	}
		
}
