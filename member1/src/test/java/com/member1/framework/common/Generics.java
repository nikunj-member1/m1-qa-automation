package com.member1.framework.common;

import java.time.Duration;
import java.util.Iterator;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.ElementNotInteractableException;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.member1.framework.configurations.Configuration;

import io.appium.java_client.TouchAction;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.nativekey.AndroidKey;
import io.appium.java_client.android.nativekey.KeyEvent;
import io.appium.java_client.touch.WaitOptions;
import io.appium.java_client.touch.offset.PointOption;

public class Generics implements Configuration {

	private final WebDriver generalDriver;
	private final WebDriverWait wait;

	public Generics(WebDriver driver) {
		this.generalDriver = driver;
		wait = new WebDriverWait(generalDriver, Duration.ofSeconds(Integer.parseInt(WEB_DRIVER_WAIT)));
	}

	/**
	 * Pause for given seconds
	 *
	 * @param sec Time in Seconds
	 */
	public static void pause(int sec) {
		try {
			Thread.sleep(sec * 1000L);
		} catch (InterruptedException interruptedException) {
			System.out.println("Failure in Pause.");
		}
	}

	/**
	 * To clear and send the value to the text field
	 *
	 * @param webElement WebElement
	 * @param value      String Value
	 */
	public static void type(WebElement webElement, String value) {
		clear(webElement);
		webElement.sendKeys(value);
	}

	/**
	 * To clear the value from the text field
	 *
	 * @param webElement WebElement
	 */
	public static void clear(WebElement webElement) {
		webElement.clear();
	}

	/**
	 * To click on particular WebElement
	 *
	 * @param element WebElement
	 */
	public void clickOn(WebElement element) {
		wait.until(ExpectedConditions.elementToBeClickable(element));
		element.click();
	}

	/**
	 * To click on particular WebElement
	 *
	 * @param element WebElement
	 */
	public void clickOn(By by) {
		waitForElementVisible(by);
		WebElement element = generalDriver.findElement(by);
		wait.until(ExpectedConditions.elementToBeClickable(element));
		element.click();
	}

	/**
	 * To click on particular WebElement using Java Script
	 *
	 * @param element WebElement
	 */
	public void clickOnJS(WebElement element) {
		wait.ignoring(StaleElementReferenceException.class).ignoring(ElementNotInteractableException.class)
				.until(ExpectedConditions.elementToBeClickable(element));
		JavascriptExecutor executor = (JavascriptExecutor) generalDriver;
		executor.executeScript("arguments[0].click();", element);
		// .until(ExpectedCon.ditions.refreshed(ExpectedConditions.presenceOfElementLocated(by)));
	}
	
	/**
	 * To get text from the element
	 *
	 * @param element WebElement
	 * @return Text from the WebElement
	 */
	public static String getText(WebElement element) {
		return element.getText().trim();
	}
	
	/**
	 * To get text from the element
	 *
	 * @param by locator
	 * @return Text from the element
	 */
	public String getText(By by) {
		return generalDriver.findElement(by).getText();
	}

	/**
	 * To check if element is available in page or not
	 *
	 * @param by locator
	 * @return if web element display or not
	 */
	public boolean isElementPresent(By by) {
		try {
			waitForElementVisible(by);
			WebElement element = generalDriver.findElement(by);
			return element.isDisplayed();
		} catch (NoSuchElementException nse) {
			return false;
		}
	}

	/**
	 * To check if element is available in page or not
	 *
	 * @param element WebElement
	 * @return if web element display or not
	 */
	public static boolean isElementPresent(WebElement element) {
		try {
			return element.isDisplayed();
		} catch (NoSuchElementException nse) {
			return false;
		}
	}

	/**
	 * To select value from dropdown
	 *
	 * @param element WebElement
	 * @param text    String text to select
	 */
	public void selectValueFromDropDown(WebElement element, String text) {
		wait.until(ExpectedConditions.elementToBeClickable(element));
		Select select = new Select(element);
		select.selectByVisibleText(text);
	}

	/**
	 * To perform mouse hover over element
	 *
	 * @param element WebElement
	 */
	public void moveTo(WebElement element) {
		wait.until(ExpectedConditions.visibilityOfAllElements(element));
		Actions action = new Actions(generalDriver);
		action.moveToElement(element).build().perform();
	}

	/**
	 * To wait till visibility of all elements
	 *
	 * @param elements WebElements
	 */
	public void waitForElementVisible(WebElement... elements) {
		wait.until(ExpectedConditions.visibilityOfAllElements(elements));
	}

	/**
	 * To wait till visibility of all elements using By class.
	 *
	 * @param element WebElement
	 */
	public void waitForElementVisible(By element) {
		implicitWaitOf(0);
		wait.until(ExpectedConditions.visibilityOfElementLocated(element));
		implicitWaitOf(Integer.parseInt(APP_IMPLICIT_WAIT));
	}
		
	/***
	 * wait for page load
	 * 
	 * @param pauseTime
	 */
    public void WaitForPageLoad(String pauseTime)
    {
        pause(2);
        implicitWaitOf(0);
        WebDriverWait wait = new WebDriverWait(generalDriver, Duration.ofSeconds(Integer.parseInt(pauseTime)));
        wait.until(webDriver -> "complete".equals(((JavascriptExecutor) webDriver).executeScript("return document.readyState")));
        implicitWaitOf(10);
    }


	/**
	 * To scroll to particular element
	 *
	 * @param element WebElement
	 */
	public void scrollToElement(WebElement element) {
		((JavascriptExecutor) generalDriver).executeScript("arguments[0].scrollIntoView(true);", element);
		pause(2);
	}

	/**
	 * To switch on another window
	 *
	 */
	public void switchToWindow() {
		String mainWindowHandle = generalDriver.getWindowHandle();
		Set<String> allWindowHandles = generalDriver.getWindowHandles();
		Iterator<String> iterator = allWindowHandles.iterator();

		while (iterator.hasNext()) {
			String ChildWindow = iterator.next();
			if (!mainWindowHandle.equalsIgnoreCase(ChildWindow)) {
				generalDriver.switchTo().window(ChildWindow);
			}
		}
	}

	/**
	 * To close current browser window and switch
	 *
	 */
	public void closeCurrentWindow() {
		generalDriver.close();
		switchToWindow();
	}

	/**
	 * To until element is clickable
	 *
	 * @param element WebElement
	 */
	public void isClickable(WebElement element) {
		wait.until(ExpectedConditions.elementToBeClickable(element));
	}

	/**
	 * To swipe towards next screen
	 *
	 */
	public void swipeToNextScreen() {
		int locationXStart, locationXEnd;

		int locationX = generalDriver.manage().window().getSize().width;
		int locationY = generalDriver.manage().window().getSize().height / 2;

		locationXStart = (int) Math.round(locationX * 0.90);
		locationXEnd = (int) Math.round(locationX * 0.10);

		new TouchAction<>((AndroidDriver) generalDriver).press(PointOption.point(locationXStart, locationY))
				.waitAction(WaitOptions.waitOptions(Duration.ofSeconds(2)))
				.moveTo(PointOption.point(locationXEnd, locationY)).release().perform();
	}

	/**
	 * To swipe towards previous screen
	 *
	 */
	public void swipeToPreviousScreen() {
		int locationXStart, locationXEnd;

		int locationX = generalDriver.manage().window().getSize().width;
		int locationY = generalDriver.manage().window().getSize().height / 2;

		locationXStart = (int) Math.round(locationX * 0.10);
		locationXEnd = (int) Math.round(locationX * 0.90);

		new TouchAction<>((AndroidDriver) generalDriver).press(PointOption.point(locationXStart, locationY))
				.waitAction(WaitOptions.waitOptions(Duration.ofSeconds(2)))
				.moveTo(PointOption.point(locationXEnd, locationY)).release().perform();
	}

	/**
	 * To set implicit wait
	 *
	 * @param seconds Integer
	 */
	public void implicitWaitOf(int seconds) {
		generalDriver.manage().timeouts().implicitlyWait(seconds, TimeUnit.SECONDS);
	}

	/**
	 * Returns current android activity.
	 *
	 * @return String value of current android activity name.
	 */
	public String getCurrentActivity() {
		return ((AndroidDriver) generalDriver).currentActivity();
	}

	/**
	 * Wait until element is invisible on screen.
	 *
	 * @param element element which needs to be invisible.
	 */
	public void waitForInvisibilityOfElement(By element) {
		implicitWaitOf(0);
		wait.ignoring(NoSuchElementException.class).until(ExpectedConditions.invisibilityOfElementLocated(element));
		implicitWaitOf(Integer.parseInt(APP_IMPLICIT_WAIT));
	}

	/**
	 * Press back button of android phone.
	 */
	public void pressBack() {
		((AndroidDriver) generalDriver).pressKey(new KeyEvent().withKey(AndroidKey.BACK));
	}

	/**
	 * To perform scroll Down
	 *
	 */
	public void scrollDown() {

		int locationXStart = generalDriver.manage().window().getSize().width / 2;
		int locationYStart = (int) (generalDriver.manage().window().getSize().height * 0.80);
		int locationYEnd = (int) (generalDriver.manage().window().getSize().height * 0.20);

		new TouchAction<>((AndroidDriver) generalDriver).press(PointOption.point(locationXStart, locationYStart))
				.waitAction(WaitOptions.waitOptions(Duration.ofSeconds(1)))
				.moveTo(PointOption.point(locationXStart, locationYEnd)).release().perform();
	}

	/**
	 * To perform drag and drop using JS
	 * 
	 * @param driver
	 * @param Source
	 * @param destination
	 */
	public void dragAndDrop(WebDriver driver, WebElement source, WebElement destination) {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("function createEvent(typeOfEvent) {\n" + "var event =document.createEvent(\"CustomEvent\");\n"
				+ "event.initCustomEvent(typeOfEvent,true, true, null);\n" + "event.dataTransfer = {\n" + "data: {},\n"
				+ "setData: function (key, value) {\n" + "this.data[key] = value;\n" + "},\n"
				+ "getData: function (key) {\n" + "return this.data[key];\n" + "}\n" + "};\n" + "return event;\n"
				+ "}\n" + "\n" + "function dispatchEvent(element, event,transferData) {\n"
				+ "if (transferData !== undefined) {\n" + "event.dataTransfer = transferData;\n" + "}\n"
				+ "if (element.dispatchEvent) {\n" + "element.dispatchEvent(event);\n"
				+ "} else if (element.fireEvent) {\n" + "element.fireEvent(\"on\" + event.type, event);\n" + "}\n"
				+ "}\n" + "\n" + "function simulateHTML5DragAndDrop(element, destination) {\n"
				+ "var dragStartEvent =createEvent('dragstart');\n" + "dispatchEvent(element, dragStartEvent);\n"
				+ "var dropEvent = createEvent('drop');\n"
				+ "dispatchEvent(destination, dropEvent,dragStartEvent.dataTransfer);\n"
				+ "var dragEndEvent = createEvent('dragend');\n"
				+ "dispatchEvent(element, dragEndEvent,dropEvent.dataTransfer);\n" + "}\n" + "\n"
				+ "var source = arguments[0];\n" + "var destination = arguments[1];\n"
				+ "simulateHTML5DragAndDrop(source,destination);", source, destination);
	}

	/**
	 * To check if element is selected or not
	 *
	 * @param element WebElement
	 * @return if web element selected or not
	 */
	public static boolean isElementSelected(WebElement element) {
		try {
			return element.isSelected();
		} catch (NoSuchElementException nse) {
			return false;
		}
	}

	/**
	 * To check if element is enabled or not
	 *
	 * @param element WebElement
	 * @return if web element enabled or not
	 */
	public static boolean isElementEnabled(WebElement element) {
		try {
			return element.isEnabled();
		} catch (NoSuchElementException nse) {
			return false;
		}
	}
	
	/**
	 * To double click on element by action
	 * 
	 * @param by element locator
	 */
	public void doubleClickByAction(By by) {
		implicitWaitOf(1);
		Actions action = new Actions(generalDriver); 
		WebElement element = generalDriver.findElement(by);
		action.doubleClick(element).build().perform();
		implicitWaitOf(Integer.parseInt(WEB_IMPLICIT_WAIT));
	}
}
