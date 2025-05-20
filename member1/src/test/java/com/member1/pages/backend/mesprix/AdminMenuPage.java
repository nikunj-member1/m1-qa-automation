package com.member1.pages.backend.mesprix;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import com.member1.framework.common.Generics;
import com.member1.framework.drivermanager.BaseDriverManager;

public class AdminMenuPage extends BaseDriverManager {

	WebDriver webDriver;
	Generics generics;

	public AdminMenuPage(WebDriver webDriver) {
		this.webDriver = webDriver;
		generics = new Generics(webDriver);
	}
	
	By wooCommerceMenu = By.xpath("//div[@class='wp-menu-name'][text()='WooCommerce']");
	By ordersSubMenu = By.xpath("//li/a[contains(@href,'shop_order')][contains(.,'Orders ')]");
		
	public boolean isWooCommerceMenuDisplayed() {
		return generics.isElementPresent(wooCommerceMenu);
	}
	
	public void clickOnWooCommerceMenu() {
		generics.clickOn(wooCommerceMenu);
	}
	
	public void clickOnOrdersMenu() {
		generics.scrollToElement(webDriver.findElement(ordersSubMenu));
		generics.clickOn(ordersSubMenu);
	}
	
}
