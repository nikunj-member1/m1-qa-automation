package com.member1.framework.utilities;

import java.io.File;
import java.io.IOException;

import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.MediaEntityBuilder;
import com.aventstack.extentreports.Status;

public class Report {
	private static ThreadLocal extentTest = new ThreadLocal();

	public static ExtentTest getTest() {
		return (ExtentTest) extentTest.get();
	}

	public static void setTest(ExtentTest test) {
		extentTest.set(test);
	}

	public static void log(Status status, String message) {
		((ExtentTest) extentTest.get()).log(status, message);
	}

	public static void info(String message) {
		((ExtentTest) extentTest.get()).log(Status.INFO, message);
	}

	public static void pass(String message) {
		((ExtentTest) extentTest.get()).log(Status.PASS, message);
	}

	public static void pass(String message, String screenShotPath) throws IOException {
		String path = screenShotPath.split("Screenshots")[1];

		((ExtentTest) extentTest.get()).log(Status.PASS, message,
				MediaEntityBuilder.createScreenCaptureFromPath("Screenshots" + File.separator + path).build());
	}

	public static void fail(String message, String screenShotPath) throws IOException {
		String path = screenShotPath.split("Screenshots")[1];
		((ExtentTest) extentTest.get()).log(Status.FAIL, message,
				MediaEntityBuilder.createScreenCaptureFromPath("Screenshots" + File.separator + path).build());
	}
}
