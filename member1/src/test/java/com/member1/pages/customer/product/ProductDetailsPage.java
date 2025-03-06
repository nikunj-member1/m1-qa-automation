package com.member1.pages.customer.product;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import com.member1.framework.common.Generics;
import com.member1.framework.drivermanager.BaseDriverManager;

public class ProductDetailsPage extends BaseDriverManager {

	WebDriver webDriver;
	Generics generics;

	public ProductDetailsPage(WebDriver webDriver) {
		this.webDriver = webDriver;
		generics = new Generics(webDriver);
	}

	// Product Details page
	
	By productTitle = new By.ByXPath("//h1[contains(@class,'product_title')]");
	By productImage = new By.ByXPath("//img[contains(@class,'product-')]");
	By addToCartButton = new By.ByXPath("//button[contains(.,'Add to cart')]");
	By priceRadioButton = new By.ByXPath("//p[contains(.,'9.18 €')]/input[@name='price_radio']");
	
	public void navigateURL(String url) {
		webDriver.navigate().to(url);
	}
	
	public Boolean isProductTitleDisplayed() {
		return generics.isElementPresent(productTitle);
	}
	
	public String getProductTitle() {
		return generics.getText(productTitle);
	}

	public Boolean isProductImageDisplayed() {
		return generics.isElementPresent(productImage);
	}
	
	public Boolean isAddToCartButton() {
		return generics.isElementPresent(addToCartButton);
	}
	
	public void clickOnAddToCartButton() {
		generics.clickOn(addToCartButton);
	}
	
	public Boolean isProductPriceRadioButtonDisplayed() {
		return generics.isElementPresent(priceRadioButton);
	}
	
	public Boolean isMiniCartProductTitleDisplayed(String miniCartProductTitle) {
		return generics.isElementPresent(By.xpath("//div/a[@class='mini_cart_title truncate'][contains(.,'"+miniCartProductTitle+"')]"));
	}
	
	
}
