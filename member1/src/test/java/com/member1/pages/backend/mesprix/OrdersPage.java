package com.member1.pages.backend.mesprix;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import com.member1.framework.common.Generics;
import com.member1.framework.drivermanager.BaseDriverManager;

public class OrdersPage extends BaseDriverManager {

	WebDriver webDriver;
	Generics generics;

	public OrdersPage(WebDriver webDriver) {
		this.webDriver = webDriver;
		generics = new Generics(webDriver);
	}
	
	By ordersTitle = By.xpath("//h1[contains(@class,'wp-heading')][contains(.,'Orders')]");
			
	public boolean isOrdersTitleDisplayed() {
		return generics.isElementPresent(ordersTitle);
	}
	
	public boolean verifyOrderStatusDetails(String firstName, String lastName,String status) {
		return generics.isElementPresent(By.xpath("//tr[1]//a[@class='order-view'][contains(.,'"+firstName+" "+lastName+"')]/following::td[@data-colname='Status'][1][contains(.,'"+status+"')]"));
	}
	
	public void selectProductOrder(String firstName, String lastName) {
		generics.clickOn(By.xpath("//tr[1]//a[@class='order-view'][contains(.,'"+firstName+" "+lastName+"')]"));
	}
	
	public void selectProductOrder() {
		generics.clickOn(By.xpath("//tr[1]//a[@class='order-view']"));
	}
	
}
