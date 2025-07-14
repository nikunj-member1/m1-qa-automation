package com.member1.pages.customer.product.commonpages;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import com.member1.framework.common.Generics;
import com.member1.framework.drivermanager.BaseDriverManager;

public class FaqEtServiceClientPage extends BaseDriverManager {
	
	WebDriver webDriver;
	Generics generics;

	public FaqEtServiceClientPage(WebDriver webDriver) {
		this.webDriver = webDriver;
		generics = new Generics(webDriver);
	}

	// FAQ et service client page
	
	By politiqueDeConfidentialiteTitle = new By.ByXPath("//h2[text()='Politique de confidentialité']");

	
	public int getEmailCount(String email) {
		List<WebElement> emails1 = webDriver.findElements(By.xpath("//div[@class='entry-content']//p[contains(.,'"+email+"')]"));
		List<WebElement> emails2 = webDriver.findElements(By.xpath("//div[@class='entry-content']//li[contains(.,'"+email+"')]"));
		return emails1.size()+emails2.size();
	}
	
	public int getContactNumberCount(String phoneNumber) {
		List<WebElement> contactNumber1 = webDriver.findElements(By.xpath("//div[@class='entry-content']//a[contains(.,'"+phoneNumber+"')]"));
		List<WebElement> contactNumber2 = webDriver.findElements(By.xpath("//div[@class='entry-content']//p[contains(.,'téléphone au "+phoneNumber+"')]"));	
		return contactNumber1.size() + contactNumber2.size();
	}
	
	public int getBothPriceCount(String price) {
		List<WebElement> prices = webDriver.findElements(By.xpath("//div[@class='entry-content']//p[contains(.,'"+price+"')]"));
		return prices.size();
	}
	
	public int getMonthPriceCount(String price) {
		List<WebElement> prices = webDriver.findElements(By.xpath("//div[@class='entry-content']//p[contains(.,'"+price+"')]"));
		System.out.println("month prices count: "+prices.size());
		return prices.size();
	}
	
	public int getEURMonthPriceCount(String price) {
		List<WebElement> prices = webDriver.findElements(By.xpath("//div[@class='entry-content']//p[contains(.,'"+price+"')]"));
		return prices.size();
	}
	
}
