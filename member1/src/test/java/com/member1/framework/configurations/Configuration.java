package com.member1.framework.configurations;

import java.io.File;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Properties;

import com.member1.framework.utilities.Path;
import com.member1.framework.utilities.PropertiesFile;

public interface Configuration {

	String PROJECT_DIR = Path.getProjectDir();
	Properties genericsConfig = PropertiesFile
			.read(PROJECT_DIR + File.separator + "configuration" + File.separator + "config.properties");

	String DEVICE_ID = genericsConfig.getProperty("deviceID");
	String APP_NAME = genericsConfig.getProperty("app.name");
	String APP_PACKAGE = genericsConfig.getProperty("app.package");
	String APP_ACTIVITY = genericsConfig.getProperty("app.activity");
	String APPIUM_HUB = genericsConfig.getProperty("appium.hub");
	String APPIUM_PORT = genericsConfig.getProperty("appium.port");

	String TEST_APK = PROJECT_DIR + File.separator + "resources" + File.separator + "apks" + File.separator + ".apk";

	String PRODUCT_URL = genericsConfig.getProperty("productUrl");
	String BROWSER_NAME = genericsConfig.getProperty("browser");
	String VIEWPORT = genericsConfig.getProperty("viewPort");
	String BROWSER_HEIGHT = genericsConfig.getProperty("browser_height");
	String BROWSER_WIDTH = genericsConfig.getProperty("browser_width");
	String MOBILE_HEIGHT = genericsConfig.getProperty("mobile_height");
	String MOBILE_WIDTH = genericsConfig.getProperty("mobile_width");
	String WEB_IMPLICIT_WAIT = genericsConfig.getProperty("default_wait");
	String APP_IMPLICIT_WAIT = genericsConfig.getProperty("default_wait");
	String WEB_DRIVER_WAIT = genericsConfig.getProperty("webdriver_wait");
	String PRODUCT_DETAILS_EXCEL = "productDetails.xlsx";
	String PRODUCT_DETAILS_SHEET = "Sheet1";
	String PRODUCT_NAME_COLUMN_NAME = "ProductName";
	String PRODUCT_BREAD_CRUMB = "ProductBreadCrumb";
	String PRODUCT_TITLE_COLUMN_NAME = "ProductTitle";
	String FORM_TITLE_COLUMN_NAME = "FormTitle";
	String CONDITION_LABEL = "ConditionLabel";
	String CLIENT_SECRET_JSON = PROJECT_DIR + File.separator + "resources" + File.separator + "testdata"
			+ File.separator + "client_secret.json";
	String SHEET_RANGE = "Sheet1!A:AK";

	static URL getRemoteGridURL() {
		URL REMOTE_GRID_URL = null;
		try {
			REMOTE_GRID_URL = new URL("http://" + APPIUM_HUB + ":" + APPIUM_PORT + "/wd/hub");
		} catch (MalformedURLException ex) {
			System.out.println("Error occurred in Remote Grid URL.");
		}
		return REMOTE_GRID_URL;
	}

	static String getBrowser() {

		String BROWSER = "";

		String TEST_BROWSER = System.getenv("TEST_BROWSER");

//		if(!TEST_BROWSER.trim().equalsIgnoreCase("")) {
//			BROWSER = TEST_BROWSER;
//		}else {
		BROWSER = BROWSER_NAME;
//		}

		return BROWSER;
	}

}
