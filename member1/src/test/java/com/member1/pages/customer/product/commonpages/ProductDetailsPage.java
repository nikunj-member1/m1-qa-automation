package com.member1.pages.customer.product.commonpages;

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
	By addToCartButton = new By.ByXPath("//button[contains(.,'Add to cart')]|//button[contains(.,'Ajouter au panier')]");
	By priceRadioButton = new By.ByXPath("//p[contains(.,'9.18 €')]/input[@name='price_radio']");
	By miniCartTruncate = new By.ByXPath("//div/a[@class='mini_cart_title truncate']");
	By countAddToCartText = new By.ByXPath("//a[@title='View your shopping cart']/span[contains(@class,'count')][contains(.,'2')]");
	By contactUsLink = new By.ByXPath("//a[contains(.,'CONTACTEZ NOUS')]");
		
	public String getProductTitle() {
		generics.waitForElementVisible(productTitle);
		return generics.getText(productTitle);
	}

	public Boolean isProductImageDisplayed() {
		generics.waitForElementVisible(productImage);
		return generics.isElementPresent(productImage);
	}
	
	public Boolean isAddToCartButton() {
		return generics.isElementPresent(addToCartButton);
	}
	
	public void clickOnAddToCartButton() {
		generics.scrollToElement(webDriver.findElement(contactUsLink));
		generics.clickOn(addToCartButton);
		generics.waitForPageLoad("2");
		generics.waitForElementVisible(countAddToCartText);
	}
	
	public Boolean isProductPriceRadioButtonDisplayed(String price) {
		return generics.isElementPresent(By.xpath("//p[contains(.,'"+price+" €')]/input[@name='price_radio']"));
	}
	
	public Boolean isMiniCartProductTitleDisplayed(String miniCartProductTitle) {
		generics.waitForElementVisible(miniCartTruncate);
		return generics.isElementPresent(By.xpath("//div/a[@class='mini_cart_title truncate'][contains(.,'"+miniCartProductTitle+"')]"));
	}
	
}
