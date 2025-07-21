package com.member1.pages.customer.product.commonpages;

import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import com.member1.framework.common.Generics;
import com.member1.framework.drivermanager.BaseDriverManager;

public class PaymentPage extends BaseDriverManager{

	WebDriver webDriver;
	Generics generics;

	public PaymentPage(WebDriver webDriver) {
		this.webDriver = webDriver;
		generics = new Generics(webDriver);
	}

	// Payment page
	By paymentTitle = new By.ByXPath("//div[contains(@class,'form-wrapper')]/*[@id='iwbdp']");
	By cardNumberIcon = new By.ByXPath("//div[@class='input-group']/input[@id='card_num1']/../span/i[@class='far fa-credit-card']");
	By cardNumberTextbox = new By.ById("card_num1");
	By ccvIcon = new By.ByXPath("//div[@class='input-group']/input[@id='ccv']/../span/i[@class='fas fa-lock']");
	By ccvTextbox = new By.ById("ccv");
	By cardYearTextbox = new By.ById("card-exp-year");
	By cardMonthTextbox = new By.ById("card-exp-month");
	By payerButton = new By.ById("buybtn");
	By paymentCardIcons = new By.ByXPath("//div[contains(@class,'secure-payment-cards')]/div/img");
	By cardHolderNameTextbox = new By.ById("card_hold");
	By productSuggestionList = new By.ByCssSelector("[name='productSelect']");
	By commanderButton = new By.ByXPath("//button[contains(.,'Commander')]");
	By visaCardIcon = new By.ByXPath("//img[contains(@src,'visalogo2')]");
	By masterCardIcon = new By.ByXPath("//img[contains(@src,'master-card')]");
	By cbIcon = new By.ByXPath("//img[contains(@src,'cb-card')]");
	
	// Mesprix page
	By paymentTitleText = new By.ByXPath("//h1[contains(.,'Paiement')]");
	By billingDetailsTitle = new By.ByXPath("//h3[contains(.,'Détails de la facturation')]|//h3[contains(.,'Détails de facturation')]");	
	By firstNameTextBox = new By.ById("billing_first_name");
	By lastNameTextBox = new By.ById("billing_last_name");
	By addressLine1Textbox = new By.ById("billing_address_1");
	By addressLine2Textbox = new By.ById("billing_address_2");
	By postCodeTextbox = new By.ById("billing_postcode");
	By cityTextbox = new By.ById("billing_city");
	By phoneTextbox = new By.ById("billing_phone");
	By emailTextbox = new By.ById("billing_email");
	By informationAdditionnelleText = new By.ByXPath("//h3[text()='Information additionnelle']");
	By orderNotesTextbox = new By.ById("order_comments");
	By cardHolderTextbox = new By.ById("emerchantpay_direct-card-holder");
	By billingCardNumberTextbox = new By.ById("emerchantpay_direct-card-number");
	By expiryDateTextbox = new By.ById("emerchantpay_direct-card-expiry");
	By cardCodeTextbox = new By.ById("emerchantpay_direct-card-cvc");
	By termsCheckbox = new By.ById("terms");
	By privacyCheckbox = new By.ByXPath("//div[@class='woocommerce-privacy-policy-text']/div/input");
	By placeOrderButton = new By.ById("place_order");
	By paymentByCreditCardTitle = new By.ByXPath("//label[@for='payment_method_emerchantpay_direct'][contains(.,'Paiement par carte bancaire')]");
	By yourOrderTitleText = new By.ByXPath("//h3[@id='order_review_heading'][contains(.,'Votre commande')]");
	By termsAndConditionLink = new By.ByXPath("//a[contains(@class,'terms-and-conditions-link')]");
	By privacyPolicyLink = new By.ByXPath("//a[contains(@class,'privacy-policy-link')]");
			
	public String getPaymentTitle() {
		generics.waitForElementVisible(paymentTitle);
		return generics.getText(paymentTitle);
	}
	
	public Boolean isCardNumberIconDisplayed() {
		return generics.isElementPresent(cardNumberIcon);
	}
	
	public Boolean isCardHolderNameTextboxDisplayed() {
		generics.scrollToElement(webDriver.findElement(cardHolderNameTextbox));
		return generics.isElementPresent(cardHolderNameTextbox);
	}
	
	public Boolean isVisaCardIconDisplayed() {
		return generics.isElementPresent(visaCardIcon);
	}
	
	public Boolean isMasterCardIconDisplayed() {
		return generics.isElementPresent(masterCardIcon);
	}
	
	public Boolean isCbIconDisplayed() {
		return generics.isElementPresent(cbIcon);
	}
	
	public Boolean isCommanderButtonDisplayed() {
		return generics.isElementPresent(commanderButton);
	}	
		 
	public String getCardNumberTextboxPlaceholder() {
		return webDriver.findElement(cardNumberTextbox).getAttribute("placeholder");
	}
	
	public Boolean isCcvIconDisplayed() {
		return generics.isElementPresent(ccvIcon);
	}
	
	public Boolean isCcvTextboxDisplayed() {
		return generics.isElementPresent(cardNumberTextbox);
	}
	
	public String getCcvTextboxPlaceholder() {
		return webDriver.findElement(ccvTextbox).getAttribute("placeholder");
	}
	
	public Boolean isCardYearTextboxDisplayed() {
		return generics.isElementPresent(cardYearTextbox);
	}
	
	public Boolean isCardMonthTextboxDisplayed() {
		return generics.isElementPresent(cardMonthTextbox);
	}
	
	public Boolean isPayerButtonDisplayed() {
		return generics.isElementPresent(payerButton);
	}
	
	public String getPaymentCardIconsImageSrc() {
		return webDriver.findElement(paymentCardIcons).getAttribute("src");
	}
	
	public String getPayerButtonText() {
		return Generics.getText(webDriver.findElement(payerButton));
	}
	
	public Boolean isPaymentCardIconsDisplayed() {
		return generics.isElementPresent(paymentCardIcons);
	}
		
	public void typeCardNumberTextbox(String cardNumber) {
	//	generics.scrollToElement(webDriver.findElement(paymentTitle));
		Generics.pause(2);
		Generics.type(webDriver.findElement(cardNumberTextbox),cardNumber);
		
	}
	
	public void typeCVVTextbox(String cvvNumber) {
		Generics.type(webDriver.findElement(ccvTextbox),cvvNumber);
	}
	
	public void selectMonth(String cardMonth) {
		generics.selectValueFromDropDown(webDriver.findElement(cardMonthTextbox),cardMonth);
	}
	
	public void selectYear(String cardYear) {
		generics.selectValueFromDropDown(webDriver.findElement(cardYearTextbox),cardYear);
	}
	
	public void clickPayerButton() {
		generics.clickOn(payerButton);
	}
	
	public void clickOnCommanderButton() {
		generics.clickOn(commanderButton);
	}
	
	public void selectSubscriberPlan(String text) {
		generics.selectValueFromDropDown(webDriver.findElement(productSuggestionList),text);
		Generics.pause(2);
	}
	
	public void fillUpCardDetails(String cardNumber,String cvvNumber,String cardMonth,String cardYear,boolean isPayer) {
		typeCardNumberTextbox(cardNumber);
		selectMonth(cardMonth);
		selectYear(cardYear);		
		typeCVVTextbox(cvvNumber);
		Generics.pause(2);
		if(isPayer) {
			clickPayerButton();	
			Generics.pause(2);
		}
	}	
	
	public void fillUpCardDetails(String cardNumber,String cvvNumber,String cardMonth,String cardYear,String subscriptionPlan,boolean isCommander) {
		typeCardNumberTextbox(cardNumber);
		selectMonth(cardMonth);
		selectYear(cardYear);		
		typeCVVTextbox(cvvNumber);
		Generics.pause(2);
		selectSubscriberPlan(subscriptionPlan);
		if(isCommander) {
			clickOnCommanderButton();	
			Generics.pause(2);
		}
	}	
	
	public Boolean isPaymentTitleDisplayed() {
		generics.waitForElementVisible(paymentTitleText);
		return generics.isElementPresent(paymentTitleText);
	}
	
	public Boolean isBillingDetailsTitleDisplayed() {
		return generics.isElementPresent(billingDetailsTitle);
	}
	
	public void typeFirstNameTextbox(String firstName) {
		generics.waitForElementVisible(firstNameTextBox);
		Generics.type(webDriver.findElement(firstNameTextBox),firstName);
	}
	
	public void typeLastNameTextbox(String lastName) {
		Generics.type(webDriver.findElement(lastNameTextBox),lastName);
	}
	
	public void typeAddressLine1Textbox(String addressline1) {
		Generics.type(webDriver.findElement(addressLine1Textbox),addressline1);
	}
	
	public void typeAddressLine2Textbox(String addressline2) {
		Generics.type(webDriver.findElement(addressLine2Textbox),addressline2);
	}
	
	public void typePostCodeTextbox(String postCode) {
		Generics.type(webDriver.findElement(postCodeTextbox),postCode);
	}
	
	public void typeCityTextbox(String city) {
		Generics.type(webDriver.findElement(cityTextbox),city);
	}
	
	public void typePhoneTextbox(String phoneNumber) {
		Generics.type(webDriver.findElement(phoneTextbox),phoneNumber);
	}
	
	public void typeEmailTextbox(String email) {
		Generics.type(webDriver.findElement(emailTextbox),email);
	}
	
	public Boolean isInformationAdditionnelleTextDisplayed() {
		return generics.isElementPresent(informationAdditionnelleText);
	}
	
	public void typeOrderNotesTextbox(String orderNotes) {
		Generics.type(webDriver.findElement(orderNotesTextbox),orderNotes);
	}	
	
	public void typeCardHolderTextbox(String cardHolderName) {
		generics.scrollToElement(webDriver.findElement(paymentByCreditCardTitle));
		Generics.pause(2);
		Generics.type(webDriver.findElement(cardHolderTextbox),cardHolderName);
	}
	
	public void typeBillingCardNumberTextbox(String cardNumber) {
		
		List<String> cardNumberlist = new ArrayList<String>();
		
		cardNumberlist.add(cardNumber.split(" ")[0]);
		cardNumberlist.add(cardNumber.split(" ")[1]);
		cardNumberlist.add(cardNumber.split(" ")[2]);
		cardNumberlist.add(cardNumber.split(" ")[3]);
		
		for(int i=0; i<cardNumberlist.size(); i++) {
			webDriver.findElement(billingCardNumberTextbox).sendKeys(cardNumberlist.get(i));
		}
	}
	
	public void typeExpiryDateTextbox(String expiryDate) {	
	List<String> expiryDatelist = new ArrayList<String>();
		
	expiryDatelist.add(expiryDate.split("/")[0]);
	expiryDatelist.add(expiryDate.split("/")[1]);
		for(int i=0; i<expiryDatelist.size(); i++) {
			webDriver.findElement(expiryDateTextbox).sendKeys(expiryDatelist.get(i));
		}
	}
	
	public void typeCCVTextbox(String cvv) {
		generics.scrollToElement(webDriver.findElement(cardHolderTextbox));
		Generics.type(webDriver.findElement(cardCodeTextbox),cvv);
	}
	
	public void clickOnTermsCheckbox() {
		generics.clickOn(termsCheckbox);
	}
	
	public void clickOnPrivacyCheckbox() {
		generics.scrollToElement(webDriver.findElement(cardCodeTextbox));
		generics.waitForElementToBeClickable(webDriver.findElement(privacyCheckbox));
		generics.clickOn(privacyCheckbox);
	}
	
	public void clickOnPlaceOrderButton() {
		generics.clickOn(placeOrderButton);
	}
	
	public Boolean isPaymentByCreditCardTitleDisplayed() {
		return generics.isElementPresent(paymentByCreditCardTitle);
	}
	
	public Boolean isYourOrderTitleTextDisplayed() {
		return generics.isElementPresent(yourOrderTitleText);
	}	
	
	public void fillUpBillingForm(String firstName,String lastName,String addressLine1,String addressLine2,
			String postCode,String city,String email) {
		typeFirstNameTextbox(firstName);
		typeLastNameTextbox(lastName);
		typeAddressLine1Textbox(addressLine1);
		typeAddressLine2Textbox(addressLine2);
		typePostCodeTextbox(postCode);
		typeCityTextbox(city);
		typeEmailTextbox(email);		
	}
	
	public void fillUpCreditCardDetails(String cardHolderName, String cardNumber,String cardExpiryDate, String CardCVC) {
		typeCardHolderTextbox(cardHolderName);
		Generics.pause(2);
		typeBillingCardNumberTextbox(cardNumber);
		Generics.pause(2);
		typeExpiryDateTextbox(cardExpiryDate);
		Generics.pause(2);		
		typeCCVTextbox(CardCVC);
		Generics.pause(2);
	}
	
	public void checkPrivacyTermsAndCondition() {
		clickOnPrivacyCheckbox();
		clickOnTermsCheckbox();
	}
	
	public void clickOnTermsAndConditionLink() {
		generics.scrollToElement(webDriver.findElement(cardCodeTextbox));
		generics.clickOn(termsAndConditionLink);
	}
	
	public void clickOnPrivacyPolicyLink() {
		generics.scrollToElement(webDriver.findElement(cardCodeTextbox));
		generics.clickOn(privacyPolicyLink);
		generics.switchToWindow();
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
		List<WebElement> addresses1 = webDriver.findElements(By.xpath("//li[contains(.,'"+companyName+ " " +companyAddress+"')]"));
		return addresses1.size();
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
	
	public int getBothPriceCount(String price) {
		List<WebElement> prices = webDriver.findElements(By.xpath("//p[contains(.,'"+price+"')]"));
		return prices.size();
	}
	
}
