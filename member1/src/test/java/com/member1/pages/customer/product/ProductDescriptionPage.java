package com.member1.pages.customer.product;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import com.member1.framework.common.Generics;
import com.member1.framework.drivermanager.BaseDriverManager;

public class ProductDescriptionPage extends BaseDriverManager {

	WebDriver webDriver;
	Generics generics;

	public ProductDescriptionPage(WebDriver webDriver) {
		this.webDriver = webDriver;
		generics = new Generics(webDriver);
	}

	// Product Description page
	By productMenagerBreadcrumb = new By.ByXPath("//ol[@class='breadcrumb']");
	By productTitle = new By.ByXPath("//div[contains(@class,'top-content')]/h1");
	By productImage = new By.ByXPath("//img[contains(@class,'product-')]");
	By productPriceTag = new By.ByXPath("//img[@class='price-area priceol']");
	By formTitle = new By.ByXPath("//div[contains(@class,'form-wrapper')]/*[@id='iwbdp']");
	By prenomIcon = new By.ByXPath(
			"//div[@class='input-group']/input[@placeholder='Prénom']/../span/i[@class='fas fa-user']");
	By emailIcon = new By.ByXPath(
			"//div[@class='input-group']/input[@placeholder='Email']/../span/i[@class='far fa-envelope']");
	By addressIcon = new By.ByXPath(
			"//div[@class='input-group']/input[@placeholder='Adresse']/../span/i[@class='fas fa-map-marker-alt']");
	By codePostalIcon = new By.ByXPath(
			"//div[@class='input-group']/input[@placeholder='Code postal']/../span/i[@class='fas fa-mail-bulk']");
	By villeIcon = new By.ByXPath(
			"//div[@class='input-group']/input[@placeholder='Ville']/../span/i[@class='fas fa-map-marker-alt']");
	By prenomTextbox = new By.ById("fname");
	By nomTextbox = new By.ById("lname");
	By emailTextbox = new By.ById("email");
	By addressTextbox = new By.ById("address");
	By codePostalTextbox = new By.ById("postal_code");
	By villeTextbox = new By.ById("ville");
	By conditionCheckbox = new By.ById("is_adult");
	By conditionText = new By.ByCssSelector("[for='is_adult']");
	By jenProfiteButton = new By.ByXPath("//button[@type='submit']");
	By mcfeeImage = new By.ByXPath("//div[contains(@class,'form-row')]/div[1]/img");
	By trusteImage = new By.ByXPath("//div[contains(@class,'form-row')]/div[2]/img");
	By verisignImage = new By.ByXPath("//div[contains(@class,'form-row')]/div[3]/img");
	By timerText = new By.ByXPath("//span[@id='time']");
	By redRibbonText = new By.ByXPath("//div[contains(@class,'countdown')]/div/p/span[1]");
	By feature1Image = new By.ByXPath("(//div[@class='features-img-wrapper']/img)[1]");
	By feature1Text = new By.ByXPath("(//div[@class='features-text-wrapper'])[1]");
	By feature2Image = new By.ByXPath("(//div[@class='features-img-wrapper']/img)[2]");
	By feature2Text = new By.ByXPath("(//div[@class='features-text-wrapper'])[2]");
	By feature3Image = new By.ByXPath("(//div[@class='features-img-wrapper']/img)[3]");
	By feature3Text = new By.ByXPath("(//div[@class='features-text-wrapper'])[3]");
	By feature4Image = new By.ByXPath("(//div[@class='features-img-wrapper']/img)[4]");
	By feature4Text = new By.ByXPath("(//div[@class='features-text-wrapper'])[4]");
	By howItWorksText = new By.ByXPath("//div[@class='container']/div[contains(@class,'how-it-work')]/h1");
	By howItWorks1Text = new By.ByXPath("(//div[contains(@class,'how-it-work')]/div/div/img/following::p)[1]");
	By howItWorks2Text = new By.ByXPath("(//div[contains(@class,'how-it-work')]/div/div/img/following::p)[2]");
	By howItWorks3Text = new By.ByXPath("(//div[contains(@class,'how-it-work')]/div/div/img/following::p)[3]");
	By howItWorks4Text = new By.ByXPath("(//div[contains(@class,'how-it-work')]/div/div/img/following::p)[4]");
	By howItWorks1Image = new By.ByXPath("(//div[contains(@class,'how-it-work')]/div/div/img)[1]");
	By howItWorks2Image = new By.ByXPath("(//div[contains(@class,'how-it-work')]/div/div/img)[2]");
	By howItWorks3Image = new By.ByXPath("(//div[contains(@class,'how-it-work')]/div/div/img)[3]");
	By howItWorks4Image = new By.ByXPath("(//div[contains(@class,'how-it-work')]/div/div/img)[4]");
	By whatisitemText = new By.ByXPath("//div[@class='container-fluid']//h1");
	By whatisitem1Image = new By.ByXPath("//a[@href='#what-is-item1']//img");
	By whatisitemQuestion1Text = new By.ByXPath("//a[@href='#what-is-item1']//h3");
	By answer1Text = new By.ByXPath("//div[@id='what-is-item1']/div");
	By whatisitem2Image = new By.ByXPath("//a[@href='#what-is-item2']//img");
	By whatisitemQuestion2Text = new By.ByXPath("//a[@href='#what-is-item2']//h3");
	By answer2Text = new By.ByXPath("//div[@id='what-is-item2']/div");
	By whatisitem3Image = new By.ByXPath("//a[@href='#what-is-item3']//img");
	By whatisitemQuestion3Text = new By.ByXPath("//a[@href='#what-is-item3']//h3");
	By answer3Text = new By.ByXPath("//div[@id='what-is-item3']/div");
	By whatisitem4Image = new By.ByXPath("//a[@href='#what-is-item4']//img");
	By whatisitemQuestion4Text = new By.ByXPath("//a[@href='#what-is-item4']//h3");
	By answer4Text = new By.ByXPath("//div[@id='what-is-item4']/div");
	By whatisitem5Image = new By.ByXPath("//a[@href='#what-is-item5']//img");
	By whatisitemQuestion5Text = new By.ByXPath("//a[@href='#what-is-item5']//h3");
	By answer5Text = new By.ByXPath("//div[@id='what-is-item5']/div");
	By whatisitem6Image = new By.ByXPath("//a[@href='#what-is-item6']//img");
	By whatisitemQuestion6Text = new By.ByXPath("//a[@href='#what-is-item6']//h3");
	By answer6Text = new By.ByXPath("//div[@id='what-is-item6']/div");
	By footerContentText = new By.ByXPath(
			"//div[contains(@class,'footer-container')]/div[contains(@class,'footer-copyright')]");

	public void navigateURL(String url) {
		webDriver.navigate().to(url);
		generics.waitForPageLoad("2");
	}
	
	public String getProductManagerBreadCrumb() {
		return generics.getText(productMenagerBreadcrumb);
	}

	public String getProductTitle() {
		return generics.getText(productTitle);
	}

	public Boolean isPrenomIconDisplayed() {
		return generics.isElementPresent(prenomIcon);
	}

	public Boolean isEmailIconDisplayed() {
		return generics.isElementPresent(emailIcon);
	}

	public Boolean isAddressIconDisplayed() {
		return generics.isElementPresent(addressIcon);
	}

	public Boolean isCodePostalIconDisplayed() {
		return generics.isElementPresent(codePostalIcon);
	}

	public Boolean isVilleIconDisplayed() {
		return generics.isElementPresent(villeIcon);
	}

	public Boolean isProductImageDisplayed() {
		return generics.isElementPresent(productImage);
	}

	public String getMCFeeImageSrc() {
		generics.scrollToElement(webDriver.findElement(mcfeeImage));
		return webDriver.findElement(mcfeeImage).getAttribute("src");
	}

	public String getTrusteImageSrc() {
		generics.scrollToElement(webDriver.findElement(trusteImage));
		return webDriver.findElement(trusteImage).getAttribute("src");
	}

	public String getVerisignImageSrc() {
		generics.scrollToElement(webDriver.findElement(verisignImage));
		return webDriver.findElement(verisignImage).getAttribute("src");
	}

	public Boolean isProductPriceTagDisplayed() {
		return generics.isElementPresent(productPriceTag);
	}

	public String getProductPriceTagImageSrc() {
		return webDriver.findElement(productPriceTag).getAttribute("src");
	}

	public String getFormTitle() {
		return generics.getText(formTitle);
	}

	public String getPrenomTextboxPlaceholder() {
		return webDriver.findElement(prenomTextbox).getAttribute("placeholder");
	}

	public void typePrenomTextbox(String prenom) {
		generics.scrollToElement(webDriver.findElement(productTitle));
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

	public void checkConditionCheckbox() {
		generics.scrollToElement(webDriver.findElement(conditionCheckbox));
		generics.clickOn(conditionCheckbox);
		generics.scrollToElement(webDriver.findElement(prenomTextbox));
	}

	public String getConditionTextDisplayed() {
		return generics.getText(conditionText);
	}

	public Boolean isJenProfiteButtonDisplayed() {
		return generics.isElementPresent(jenProfiteButton);
	}

	public void clickJenProfiteButton() {
		generics.scrollToElement(webDriver.findElement(conditionCheckbox));
		generics.clickOn(jenProfiteButton);
	}

	public String getProductImageSrc() {
		return webDriver.findElement(productImage).getAttribute("src");
	}

	public String getTimerText() {
		Generics.pause(1);
		return generics.getText(timerText);
	}

	public Boolean isRedRibbonLabelDisplayed() {
		return generics.isElementPresent(redRibbonText);
	}

	public String getRedRibbonText() {
	//	generics.scrollToElement(webDriver.findElement(mcfeeImage));
		return generics.getText(redRibbonText);
	}

	public String getFeature1ImageSrc() {
		return webDriver.findElement(feature1Image).getAttribute("src");
	}

	public Boolean isFeature1ImageDisplayed() {
		generics.scrollToElement(webDriver.findElement(feature1Image));
		return generics.isElementPresent(feature1Image);
	}

	public String getFeature1Text() {
		return generics.getText(feature1Text);
	}

	public String getFeature2ImageSrc() {
		return webDriver.findElement(feature2Image).getAttribute("src");
	}

	public Boolean isFeature2ImageDisplayed() {
		return generics.isElementPresent(feature2Image);
	}

	public String getFeature2Text() {
		return generics.getText(feature2Text);
	}

	public String getFeature3ImageSrc() {
		return webDriver.findElement(feature3Image).getAttribute("src");
	}

	public Boolean isFeature3ImageDisplayed() {
		generics.scrollToElement(webDriver.findElement(feature3Image));
		return generics.isElementPresent(feature3Image);
	}

	public String getFeature3Text() {
		return generics.getText(feature3Text);
	}

	public String getFeature4ImageSrc() {
		return webDriver.findElement(feature4Image).getAttribute("src");
	}

	public Boolean isFeature4ImageDisplayed() {
		generics.scrollToElement(webDriver.findElement(feature4Image));
		return generics.isElementPresent(feature4Image);
	}

	public String getFeature4Text() {
		return generics.getText(feature4Text);
	}

	public String getHowItWorksText() {
		generics.scrollToElement(webDriver.findElement(howItWorksText));
		return generics.getText(howItWorksText);
	}

	public String getHowItWorks1ImageSrc() {
		generics.scrollToElement(webDriver.findElement(howItWorks1Image));
		return webDriver.findElement(howItWorks1Image).getAttribute("src");
	}

	public String getHowItWorks1Text() {
		return generics.getText(howItWorks1Text);
	}

	public String getHowItWorks2ImageSrc() {
		generics.scrollToElement(webDriver.findElement(howItWorks2Image));
		return webDriver.findElement(howItWorks2Image).getAttribute("src");
	}

	public String getHowItWorks2Text() {
		return generics.getText(howItWorks2Text);
	}

	public String getHowItWorks3ImageSrc() {
		generics.scrollToElement(webDriver.findElement(howItWorks3Image));
		return webDriver.findElement(howItWorks3Image).getAttribute("src");
	}

	public String getHowItWorks3Text() {
		return generics.getText(howItWorks3Text);
	}

	public String getHowItWorks4ImageSrc() {
		generics.scrollToElement(webDriver.findElement(howItWorks4Image));
		return webDriver.findElement(howItWorks4Image).getAttribute("src");
	}

	public String getHowItWorks4Text() {
		return generics.getText(howItWorks4Text);
	}

	public String getWhatIsItemQuestionText() {
		generics.scrollToElement(webDriver.findElement(whatisitemText));
		return generics.getText(whatisitemText);
	}

	public Boolean isWhatIsItem1ImageDisplayed() {
		generics.scrollToElement(webDriver.findElement(whatisitemText));
		return generics.isElementPresent(whatisitem1Image);
	}

	public String getWhatIsItem1ImageSrc() {
		generics.scrollToElement(webDriver.findElement(whatisitemText));
		return webDriver.findElement(whatisitem1Image).getAttribute("src");
	}

	public String getWhatIsItemQuestion1Text() {
		return generics.getText(whatisitemQuestion1Text);
	}

	public String getAnswer1Text() {
		return generics.getText(answer1Text);
	}

	public Boolean isWhatIsItem2ImageDisplayed() {
		return generics.isElementPresent(whatisitem2Image);
	}

	public String getWhatIsItem2ImageSrc() {
		return webDriver.findElement(whatisitem2Image).getAttribute("src");
	}

	public String getWhatIsItemQuestion2Text() {
		return generics.getText(whatisitemQuestion2Text);
	}

	public String getAnswer2Text() {
		return generics.getText(answer2Text);
	}

	public Boolean isWhatIsItem3ImageDisplayed() {
		generics.scrollToElement(webDriver.findElement(whatisitem3Image));
		return generics.isElementPresent(whatisitem3Image);
	}

	public String getWhatIsItem3ImageSrc() {
		generics.scrollToElement(webDriver.findElement(whatisitem3Image));
		return webDriver.findElement(whatisitem3Image).getAttribute("src");
	}

	public String getWhatIsItemQuestion3Text() {
		generics.scrollToElement(webDriver.findElement(whatisitemQuestion3Text));
		return generics.getText(whatisitemQuestion3Text);
	}

	public String getAnswer3Text() {
		return generics.getText(answer3Text);
	}

	public Boolean isWhatIsItem4ImageDisplayed() {
		generics.scrollToElement(webDriver.findElement(whatisitem4Image));
		return generics.isElementPresent(whatisitem4Image);
	}

	public String getWhatIsItem4ImageSrc() {
		generics.scrollToElement(webDriver.findElement(whatisitem4Image));
		return webDriver.findElement(whatisitem4Image).getAttribute("src");
	}

	public String getWhatIsItemQuestion4Text() {
		generics.scrollToElement(webDriver.findElement(whatisitemQuestion4Text));
		return generics.getText(whatisitemQuestion4Text);
	}

	public String getAnswer4Text() {
		return generics.getText(answer4Text);
	}

	public Boolean isWhatIsItem5ImageDisplayed() {
		generics.scrollToElement(webDriver.findElement(whatisitem5Image));
		return generics.isElementPresent(whatisitem5Image);
	}

	public String getWhatIsItem5ImageSrc() {
		generics.scrollToElement(webDriver.findElement(whatisitem5Image));
		return webDriver.findElement(whatisitem5Image).getAttribute("src");
	}

	public String getWhatIsItemQuestion5Text() {
		generics.scrollToElement(webDriver.findElement(whatisitemQuestion5Text));
		return generics.getText(whatisitemQuestion5Text);
	}

	public String getAnswer5Text() {
		return generics.getText(answer5Text);
	}

	public Boolean isWhatIsItem6ImageDisplayed() {
		generics.scrollToElement(webDriver.findElement(whatisitem6Image));
		return generics.isElementPresent(whatisitem6Image);
	}

	public String getWhatIsItem6ImageSrc() {
		generics.scrollToElement(webDriver.findElement(whatisitem6Image));
		return webDriver.findElement(whatisitem6Image).getAttribute("src");
	}

	public String getWhatIsItemQuestion6Text() {
		generics.scrollToElement(webDriver.findElement(whatisitemQuestion6Text));
		return generics.getText(whatisitemQuestion6Text);
	}

	public String getAnswer6Text() {
		return generics.getText(answer6Text);
	}

	public String getFooterContentText() {
		generics.scrollToElement(webDriver.findElement(footerContentText));
		return generics.getText(footerContentText);
	}

	public void fillUpForm(String prenom, String nom, String email, String address, String codePostal, String ville,
			boolean isSubmit) {
		typePrenomTextbox(prenom);
		typeNomTextbox(nom);
		typeEmailTextbox(email);
		typeAddressTextbox(address);
		typeCodePostalTextbox(codePostal);
		typeVilleTextbox(ville);
		checkConditionCheckbox();
		Generics.pause(2);
		if (isSubmit) {
			clickJenProfiteButton();
			Generics.pause(2);
		}
	}

}
