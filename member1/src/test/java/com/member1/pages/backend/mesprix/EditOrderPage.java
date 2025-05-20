package com.member1.pages.backend.mesprix;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import com.member1.framework.common.Generics;
import com.member1.framework.drivermanager.BaseDriverManager;

public class EditOrderPage extends BaseDriverManager {

	WebDriver webDriver;
	Generics generics;

	public EditOrderPage(WebDriver webDriver) {
		this.webDriver = webDriver;
		generics = new Generics(webDriver);
	}
	
	By editOrdersTitle = By.xpath("//h1[contains(@class,'wp-heading')][contains(.,'Edit order')]");
	By refundButton = By.xpath("//button[text()='Refund']");
	By statusDropDown = By.id("select2-order_status-container");
	By refundEURManuallyButton = By.xpath("//button[contains(@class,'do-manual-refund')][contains(.,'Refund')][contains(.,'EUR')][contains(.,'manually')]");
	By freeShippingTotalTextBox = By.xpath("(//div[@class='refund']/input[contains(@name,'refund_line_total')])[3]");
	By orderTotalTextBox = By.xpath("//td[contains(.,'Order Total:')]/following::td[@class='total'][1]/span[@class='woocommerce-Price-amount amount']/bdi");
	By reasonOfRefundTextBox = By.id("refund_reason");
	
	public boolean isEditOrderTitleDisplayed() {
		return generics.isElementPresent(editOrdersTitle);
	}
	
	public boolean isRefundButtonDisplayed() {
		generics.scrollToElement(webDriver.findElement(orderTotalTextBox));
		return generics.isElementPresent(refundButton);
	}
	
	public void clickOnRefund() {
		generics.clickOn(refundButton);
	}
	
	public String getOrderStatus() {
		generics.scrollToElement(webDriver.findElement(editOrdersTitle));
		return generics.getText(statusDropDown);
	}
	
	public boolean isRefundEURManuallyButtonDisplayed() {
		generics.scrollToElement(webDriver.findElement(reasonOfRefundTextBox));
		return generics.isElementPresent(refundEURManuallyButton);
	}
	
	public boolean isFreeShippingTotalTextBoxDisplayed() {
		return generics.isElementPresent(freeShippingTotalTextBox);
	}
	
	public void typeFreeShippingTotal(String productShippingTotal) {
		Generics.type(webDriver.findElement(freeShippingTotalTextBox), productShippingTotal);		
	}		
	
	public String getOrderTotal() {
		return generics.getText(orderTotalTextBox).split(" ")[0];
	}
	
	public void clickOnReasonOfRefund() {
		generics.clickOn(reasonOfRefundTextBox);
	}
	
	public void refundOrderAmount(String productShippingTotal) {
		typeFreeShippingTotal(productShippingTotal);
		clickOnReasonOfRefund();
		clickOnRefundEURManually();
	}
	
	public String getAlertTextAndAcceptText() {
		String alertText = webDriver.switchTo().alert().getText();	
		acceptAlert();
		return alertText;
	}
	
	public void acceptAlert() {
		webDriver.switchTo().alert().accept();
	}
		
	public void clickOnRefundEURManually() {
		generics.scrollToElement(webDriver.findElement(reasonOfRefundTextBox));
		generics.clickOn(refundEURManuallyButton);
	}
	
	public boolean isRefundedLabelAmountDisplayed(String refundAmount) {
		return generics.isElementPresent(By.xpath("//td[@class=\"label refunded-total\"][text()='Refunded:']/following::td[contains(@class,'refunded-total')][contains(.,'"+refundAmount+"')]")); 
	}
	
	public boolean isOrderNotesWithRefundedDisplayed(String previousStatus,String updatedStatus) {
		generics.scrollToElement(webDriver.findElement(By.xpath("//h2[contains(.,'Order notes')]")));
		return generics.isElementPresent(By.xpath("//ul[@class='order_notes']/li[1][contains(.,'Order status changed from "+previousStatus+" to "+updatedStatus+".')]"));
	}
	
}
