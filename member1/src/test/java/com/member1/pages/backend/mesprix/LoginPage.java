package com.member1.pages.backend.mesprix;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import com.member1.framework.common.Generics;
import com.member1.framework.drivermanager.BaseDriverManager;

public class LoginPage extends BaseDriverManager {

	WebDriver webDriver;
	Generics generics;

	public LoginPage(WebDriver webDriver) {
		this.webDriver = webDriver;
		generics = new Generics(webDriver);
	}
	
	By mesPrixLogo = By.xpath("//h1[@class='wp-login-logo']/a[text()='mes-prix.com']");
	By emailTextbox = By.xpath("//label[text()='Identifiant ou adresse e-mail']/following::input[@id='user_login']");
	By passwordTextbox =By.xpath("//label[contains(@for,'user_pass')]/following::input[@id='user_pass']");
	By seconnectorButton = By.id("wp-submit");
	
	public void navigateToMesPrixBackEnd(String mespricBackendURL) {
		webDriver.get(mespricBackendURL);
		generics.waitForPageLoad("2");
	}
	
	public boolean isMesPrixLogoDisplayed() {
		generics.waitForElementVisible(mesPrixLogo);
		return generics.isElementPresent(mesPrixLogo);
	}
	
	public boolean isEmailTextBox() {
		return generics.isElementPresent(emailTextbox);
	}
	
	public boolean isPasswordTextboxTextBox() {
		return generics.isElementPresent(passwordTextbox);
	}
	
	public boolean isSeConnectorButton() {
		return generics.isElementPresent(seconnectorButton);
	}
	
	public void typeEmail(String email) {
		generics.waitForElementVisible(emailTextbox);
		Generics.type(webDriver.findElement(emailTextbox), email);
	}
	
	public void typePassword(String password) {
		Generics.type(webDriver.findElement(passwordTextbox), password);
	}
	
	public void clickOnSeConnector() {
		generics.clickOn(seconnectorButton);
	}
	
	public void login(String email,String password) {
		typeEmail(email);
		typePassword(password);
		clickOnSeConnector();
	}	
	
}
