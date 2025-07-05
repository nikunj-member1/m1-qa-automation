package com.member1.pages.customer.maildrop;

import java.util.ArrayList;

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
	

	By messageText = new By.ByXPath("//div[contains(@class,'subhead')]");
	By companyEmailNameText  = new By.ByXPath("//div[contains(@class,'md:first:rounded')]//div[contains(.,'Natalie Lemieux <boutique@prix-garanti.com>')]");
	By votreCommandeEstMaintenantTermineeText = new By.ByXPath("//div[contains(@class,'truncate')][text()='Votre commande est maintenant terminée']");
	By totalAmountLabel = new By.ByXPath("//tr/th[text()='Total:']");
	By billingAddressLabel = new By.ByXPath("//h2[contains(.,'Billing address')]");
	By shippingAddressLabel = new By.ByXPath("//h2[contains(.,'Shipping address')]");
	By refreshMailboxButton = new By.ByXPath("//button[contains(.,'Refresh Mailbox')]");
	
	//membership confirmation email
	By orderNumberText = new By.ByXPath("//span[contains(.,'Numéro de commande :')]");
	By orderedCustomeNameText = new By.ByXPath("//span[contains(.,'Nom de facturation :')]");
	By customerPhoneNumberText = new By.ByXPath("//span[contains(.,'Numéro de téléphone :')]");
	By subscriptionPriceText = new By.ByXPath("//span[contains(.,'Tarif d’abonnement :')]");
	By websiteContactEmailText = new By.ByXPath("//span[contains(.,'Notre équipe support est là pour vous :')]/following::span[1][contains(.,'Email')]");
	By websiteContactNumberText = new By.ByXPath("//span[contains(.,'Téléphone : ')]");
	By websiteLegalAddressInformationText = new By.ByXPath("//p[contains(.,'est exploité par :')]");
	By websiteLegalEmailText = new By.ByXPath("//p[contains(.,'est exploité par :')]/following::span[contains(.,'Email')]");
			 	
	public void navigateToMailDrop(String name) {		
		generics.switchToNewTab();
		webDriver.get("https://maildrop.cc/inbox/?mailbox="+name);
		generics.waitForPageLoad("5");
	}
	
	public Boolean isCompanyEmailNameTextDisplayed() {
		Boolean headerText = generics.isElementPresent(messageText);
		int maxAttempts = 5;

        for (int i = 0; i < maxAttempts; i++) {
        	if(headerText.equals(false)) {
    			generics.clickOn(refreshMailboxButton);
    			System.out.println("refresh clicked");
    			headerText = generics.isElementPresent(messageText);
    		}else {
    			break;
    		}
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
	
	// confirmation email methods
	
	public boolean isEmailTitleDisplayed(String websiteName,String firstName,String lastName) {
		Boolean headerText = generics.isElementPresent(messageText);
		if(headerText.equals(false)) {
			generics.clickOn(refreshMailboxButton);
			System.out.println("Refresh clicked");
			
		}
		WebElement iFrame = webDriver.findElement(By.xpath("//iframe"));
		webDriver.switchTo().frame(iFrame);
		return generics.isElementPresent(By.xpath("//span[contains(.,'Bienvenue chez "+websiteName+" "+firstName+" "+lastName+"!')]"));
	}
	
	public String getCustomerName() {
		return generics.getText(orderedCustomeNameText).split(":")[1].trim();
	}
	
	public String getOrderNumber() {
		return generics.getText(orderNumberText).split(":")[1].trim();
	}
	
	public String getCustomerContactNumber() {
		return generics.getText(customerPhoneNumberText).split(":")[1].trim();
	}
	
	public String getSubscriptionPrice() {
		return generics.getText(subscriptionPriceText).split(":")[1].trim();
	}
	
	public String getWebsiteLegalAddressDetails() {
		return generics.getText(websiteLegalAddressInformationText).split(":")[1].trim();
	}
	
	public String getWebsiteHelpSectionEmail() {
		return generics.getText(websiteContactEmailText).split(":")[1].trim();
	}
	
	public String getWebsiteHelpSectionContactNumber() {
		return generics.getText(websiteContactNumberText).split(":")[1].trim();
	}
	
	public String getWebsiteLegalEmail() {
		return generics.getText(websiteLegalEmailText).split(":")[1].trim();
	}
	
		
}
