package com.member1.framework.drivermanager;

import java.io.File;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.ITestContext;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.BeforeSuite;
import org.testng.annotations.BeforeTest;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.reporter.ExtentSparkReporter;
import com.aventstack.extentreports.reporter.configuration.Theme;
import com.member1.framework.common.Generics;
import com.member1.framework.configurations.Configuration;
import com.member1.framework.utilities.DateTime;

import io.github.bonigarcia.wdm.WebDriverManager;

public class BaseDriverManager implements Configuration {

	protected static ExtentReports extent;
	protected static ThreadLocal<WebDriver> threadLocalDriver = new ThreadLocal<>();
	protected static String timeStamp;
	
	/**
	 * To perform set of actions before suite start executing.
	 *
	 * @param context To set context for TestNG Listeners.
	 */
	@BeforeSuite(alwaysRun = true)
	public void beforeSuite(ITestContext context) {

		String reportName = "Report";
		timeStamp = DateTime.getCurrentDateTime("ddMMyyyyhhmm").toString().replace("/", "_").replace(":", "_")
				.replace(",", "_").replace(" ", "").replace("am", "").replace("pm", "").replace("AM", "")
				.replace("PM", "");
		String reportPath = PROJECT_DIR + File.separator + "logs" + File.separator + timeStamp + File.separator
				+ reportName + ".html";

		ExtentSparkReporter htmlReporter = new ExtentSparkReporter((reportPath));
		htmlReporter.config().setDocumentTitle("Member1 - Test Automation Report");
		htmlReporter.config().setTheme(Theme.STANDARD);
		htmlReporter.config().setEncoding("utf-8");
		htmlReporter.config().setReportName(System.getProperty("os.name"));
		htmlReporter.config().setTimeStampFormat("EEEE, MMMM dd, yyyy, hh:mm a '('zzz')'");

		extent = new ExtentReports();
		extent.attachReporter(htmlReporter);
		extent.setSystemInfo("OS Name", System.getProperty("os.name"));
		extent.setSystemInfo("OS Version", System.getProperty("os.version"));
		extent.setSystemInfo("OS Architecture", System.getProperty("os.arch"));
		extent.setSystemInfo("Test Environment", System.getenv("TEST_ENVIRONMENT"));
		extent.setSystemInfo("Test Browser", System.getenv("TEST_BROWSER"));
		extent.setSystemInfo("Test Runner", System.getProperty("user.name"));
//		extent.setSystemInfo("Browser Width", BROWSER_WIDTH);
//		extent.setSystemInfo("Browser Height", BROWSER_HEIGHT);
	}

	/**
	 * To initialize the driver before executing the test cases
	 *
	 * @param context TestNG listener context
	 */
	@BeforeMethod(alwaysRun = true)
	public void setUp(ITestContext context) {

		WebDriver driver = initializeWebDriver(BROWSER_NAME);
		threadLocalDriver.set(driver);
		System.out.println("Before Test Thread ID: " + Thread.currentThread().getId());
		//getDriver().get(PRODUCT_URL);
		if (VIEWPORT.equals("web")) {
			if (BROWSER_HEIGHT.isBlank() || BROWSER_WIDTH.isBlank()) {
				getDriver().manage().window().maximize();
			} else {
				Dimension dimension = new Dimension(Integer.parseInt(BROWSER_WIDTH), Integer.parseInt(BROWSER_HEIGHT));
				driver.manage().window().setSize(dimension);
			}
		}
	}

	/**
	 * Setup browser as per configurations.
	 *
	 * @param browserName chrome, firefox, edge or headless.
	 * @return WebDriver instance of created browser.
	 */
	public static WebDriver initializeWebDriver(String browserName) {

		WebDriver webDriver = null;

		switch (Configuration.getBrowser().toLowerCase()) {
		case "firefox":
			WebDriverManager.firefoxdriver().setup();
			webDriver = new FirefoxDriver();
			break;
		case "edge":
			WebDriverManager.edgedriver().setup();
			webDriver = new EdgeDriver();
			break;
		case "chrome":
			WebDriverManager.chromedriver().setup();
			ChromeOptions chromeOptions = new ChromeOptions();
			chromeOptions.addArguments("--enable-javascript");
			if (VIEWPORT.equals("mobile")) {
				Map<String, Object> deviceMetrics = new HashMap<>();
				deviceMetrics.put("width", Integer.parseInt(MOBILE_WIDTH));
				deviceMetrics.put("height", Integer.parseInt(MOBILE_HEIGHT));
				Map<String, Object> mobileEmulation = new HashMap<>();
				mobileEmulation.put("deviceMetrics", deviceMetrics);
				Map<String, Object> clientHints = new HashMap<>();
				clientHints.put("platform", "Android");
				clientHints.put("mobile", true);
				mobileEmulation.put("clientHints", clientHints);
				chromeOptions.setExperimentalOption("mobileEmulation", mobileEmulation);
				chromeOptions.addArguments("--window-size=450,800");
			}
			webDriver = new ChromeDriver(chromeOptions);
			break;
		case "headless":
			WebDriverManager.chromedriver().setup();
			ChromeOptions options = new ChromeOptions();
			options.addArguments("--headless");
			options.addArguments("--window-size=1920,1080");
			webDriver = new ChromeDriver(options);
			break;
		}

		new Generics(webDriver).implicitWaitOf(Integer.parseInt(WEB_IMPLICIT_WAIT));
		return webDriver;
	}

	/**
	 * Return the current instance of browser.
	 *
	 * @return WebDriver instance.
	 */
	public static WebDriver getDriver() {
		return threadLocalDriver.get();
	}

	/**
	 * To close the resources once the test execution is completed
	 */
	@AfterMethod(alwaysRun = true)
	public void tearDown() {
	//	getDriver().quit();
		System.out.println("After Test Thread ID: " + Thread.currentThread().getId());
		threadLocalDriver.remove();
	}

	/**
	 * To generate the report once the all test execution is completed
	 */
	@AfterSuite(alwaysRun = true)
	public void afterSuite() {
		extent.flush();
	}

	/**
	 * Creating a method to capture Screenshot
	 *
	 * @param driver
	 * @param screenshotName
	 * @return
	 * @throws Exception
	 */
	public static String getScreenshot(WebDriver driver) {
		try {
			TakesScreenshot ts = (TakesScreenshot) driver;
			File source = ts.getScreenshotAs(OutputType.FILE);
			String destination = PROJECT_DIR + File.separator + "logs" + File.separator + timeStamp + File.separator
					+ "Screenshots" + File.separator + UUID.randomUUID().toString() + ".png";
			File finalDestination = new File(destination);
			FileUtils.copyFile(source, finalDestination);
			return destination;
		} catch (Exception ex) {
			System.out.println(ex);
			return null;
		}
	}

}
