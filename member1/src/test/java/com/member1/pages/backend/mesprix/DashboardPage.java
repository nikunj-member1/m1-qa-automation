package com.member1.pages.backend.mesprix;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import com.member1.framework.common.Generics;
import com.member1.framework.drivermanager.BaseDriverManager;

public class DashboardPage extends BaseDriverManager {

	WebDriver webDriver;
	Generics generics;

	public DashboardPage(WebDriver webDriver) {
		this.webDriver = webDriver;
		generics = new Generics(webDriver);
	}
	
	By dashboardTitle = By.xpath("//h1[text()='Tableau de bord']");	
	By welcomeText = By.xpath("//h1[contains(@class,'header__title')][text()='Bienvenue sur Mes-prix.com']");
	
	public boolean isDashboardTitleDisplayed() {
		generics.waitForElementVisible(dashboardTitle);
		return generics.isElementPresent(dashboardTitle);
	}

	public boolean isWelcomeTextDisplayed() {
		generics.waitForElementVisible(welcomeText);
		return generics.isElementPresent(welcomeText); 
	}
	
}
