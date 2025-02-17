package com.member1.tests.lp;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.openqa.selenium.TimeoutException;
import org.testng.Assert;
import org.testng.annotations.Test;

import com.member1.framework.common.Generics;
import com.member1.framework.drivermanager.BaseDriverManager;
import com.member1.framework.utilities.ExcelReader;
import com.member1.framework.utilities.GetSheetData;
import com.member1.framework.utilities.Report;
import com.member1.pages.customer.headerfooter.HeaderFooter;
import com.member1.pages.customer.product.MerciPage;
import com.member1.pages.customer.product.PaymentPage;
import com.member1.pages.customer.product.ProductDescriptionPage;
import com.member1.pages.data.DataProvider;

public class TemplateTest extends BaseDriverManager {

// LP Name : Boutik-prive > Product Manager - French
//	String ProductName = "ProductManager";

	@Test
	public void FullScreenProductFormTemplate1() {

		try {

//			HashMap<String, String> lpDetails = ExcelReader.getRow(PRODUCT_DETAILS_EXCEL, PRODUCT_DETAILS_SHEET,
//					"ProductName='" + ProductName + "'");
//			String ProductBreadCrumb = lpDetails.get("ProductBreadCrumb");
//			String ProductTitle = lpDetails.get("ProductTitle");
//			String FormTitle = lpDetails.get("FormTitle");
//			String ConditionText = lpDetails.get("ConditionLabel");
//			String RedribbonText = lpDetails.get("RedribbonText");
//			String Feature1Text = lpDetails.get("Feature1Description");
//			String Feature2Text = lpDetails.get("Feature2Description");
//			String Feature3Text = lpDetails.get("Feature3Description");
//			String Feature4Text = lpDetails.get("Feature4Description");
//			String HowItWorksText = lpDetails.get("HowItWorksLabel");
//			String HowItWorks1Text = lpDetails.get("HowItWorks1Label");
//			String HowItWorks2Text = lpDetails.get("HowItWorks2Label");
//			String HowItWorks3Text = lpDetails.get("HowItWorks3Label");
//			String HowItWorks4Text = lpDetails.get("HowItWorks4Label");
//			String WhatIsItemQuestionText = lpDetails.get("WhatIsItemTitle");
//			String WhatIsItemQuestion1Text = lpDetails.get("WhatIsItem1QuestionTitle");
//			String Answer1Text = lpDetails.get("Question1Content");
//			String WhatIsItemQuestion2Text = lpDetails.get("WhatIsItem2QuestionTitle");
//			String Answer2Text = lpDetails.get("Question2Content");
//			String WhatIsItemQuestion3Text = lpDetails.get("WhatIsItem3QuestionTitle");
//			String Answer3Text = lpDetails.get("Question3Content");
//			String WhatIsItemQuestion4Text = lpDetails.get("WhatIsItem4QuestionTitle");
//			String Answer4Text = lpDetails.get("Question4Content");
//			String WhatIsItemQuestion5Text = lpDetails.get("WhatIsItem5QuestionTitle");
//			String Answer5Text = lpDetails.get("Question5Content");
//			String WhatIsItemQuestion6Text = lpDetails.get("WhatIsItem6QuestionTitle");
//			String Answer6Text = lpDetails.get("Question6Content");
//			String FooterContentText = lpDetails.get("FooterContent");
//			String PaymentTitle = lpDetails.get("PaymentTitle");
//			String MerciContent = lpDetails.get("MerciContent");

			List<List<Object>> excelProductDetails = GetSheetData.getData(SHEET_RANGE);
			List<Object> productDescription = excelProductDetails.get(1);
			List<Object> list1 = new ArrayList<Object>();
			list1.add("Done");
			System.out.println("size: " + excelProductDetails.size());

			for (int i = 1; i <= excelProductDetails.size(); i++) {
				System.out.println("test for loop");
				if (excelProductDetails.get(i-1).contains("Pending")) {
					System.out.println("Lp test pending");
					System.out.println("list1: " + list1);
					List<Object> productDescription1 = excelProductDetails.get(i-1);

//			System.out.println("ProductURL: " + productDescription.get(1).toString());
//			System.out.println("ProductBreadCrumb: " + productDescription.get(2).toString());
//			System.out.println("ProductTitle: " + productDescription.get(3).toString());
//			System.out.println("ProductImageSrc: " + productDescription.get(4).toString());
//			System.out.println("ProductPriceTagSrc: " + productDescription.get(5).toString());
//			System.out.println("FormTitle: " + productDescription.get(6).toString());
//			System.out.println("ConditionText: " + productDescription.get(7).toString());
//			System.out.println("RedribbonText: " + productDescription.get(8).toString());
//			System.out.println("Feature1Text: " + productDescription.get(9).toString());
//			System.out.println("Feature2Text: " + productDescription.get(10).toString());
//			System.out.println("Feature3Text: " + productDescription.get(11).toString());
//			System.out.println("Feature4Text: " + productDescription.get(12).toString());
//			System.out.println("HowItWorksText: " + productDescription.get(13).toString());
//			System.out.println("HowItWorks1Text: " + productDescription.get(14).toString());
//			System.out.println("HowItWorks2Text: " + productDescription.get(15).toString());
//			System.out.println("HowItWorks3Text: " + productDescription.get(16).toString());
//			System.out.println("HowItWorks4Text: " + productDescription.get(17).toString());
//			System.out.println("WhatIsItemQuestionText: " + productDescription.get(18).toString());
//			System.out.println("WhatIsItemQuestion1Text: " + productDescription.get(19).toString());
//			System.out.println("Answer1Text: " + productDescription.get(20).toString());
//			System.out.println("WhatIsItemQuestion2Text: " + productDescription.get(21).toString());
//			System.out.println("Answer2Text: " + productDescription.get(22).toString());
//			System.out.println("WhatIsItemQuestion3Text: " + productDescription.get(23).toString());
//			System.out.println("Answer3Text: " + productDescription.get(24).toString());
//			System.out.println("WhatIsItemQuestion4Text: " + productDescription.get(25).toString());
//			System.out.println("Answer4Text: " + productDescription.get(26).toString());
//			System.out.println("WhatIsItemQuestion5Text: " + productDescription.get(27).toString());
//			System.out.println("Answer5Text: " + productDescription.get(28).toString());
//			System.out.println("WhatIsItemQuestion6Text: " + productDescription.get(29).toString());
//			System.out.println("Answer6Text: " + productDescription.get(30).toString());
//			System.out.println("FooterContentText: " + productDescription.get(31).toString());
//			System.out.println("PaymentTitle: " + productDescription.get(32).toString());
//			System.out.println("MerciContent: " + productDescription.get(33).toString());			

//		  String productURL = productDescription.get(1).toString(); 
//		  String expectedProductBreadCrumb = productDescription.get(2).toString(); 
//		  String expectedProductTitle = productDescription.get(3).toString(); 
//		  String expectedProductImageSrc = productDescription.get(4).toString(); 
//		  String expectedProductPriceTagImageSrc = productDescription.get(5).toString();
//		  String expectedFormTitle = productDescription.get(6).toString(); 
//		  String expectedConditionText = productDescription.get(7).toString(); 
//		  String expectedRedribbonText = productDescription.get(8).toString(); 
//		  String expectedFeature1Text = productDescription.get(9).toString(); 
//		  String expectedFeature2Text = productDescription.get(10).toString(); 
//		  String expectedFeature3Text = productDescription.get(11).toString(); 
//		  String expectedFeature4Text = productDescription.get(12).toString();
//		  String expectedHowItWorksText = productDescription.get(13).toString(); 
//		  String expectedHowItWorks1Text = productDescription.get(14).toString(); 
//		  String expectedHowItWorks2Text = productDescription.get(15).toString(); 
//		  String expectedHowItWorks3Text = productDescription.get(16).toString(); 
//		  String expectedHowItWorks4Text = productDescription.get(17).toString(); 
//		  String expectedWhatIsItemQuestionText = productDescription.get(18).toString();
//		  String expectedWhatIsItemQuestion1Text = productDescription.get(19).toString(); 
//		  String expectedAnswer1Text = productDescription.get(20).toString(); 
//		  String expectedWhatIsItemQuestion2Text = productDescription.get(21).toString(); 
//		  String expectedAnswer2Text = productDescription.get(22).toString(); 
//		  String expectedWhatIsItemQuestion3Text = productDescription.get(23).toString(); 
//		  String expectedAnswer3Text = productDescription.get(24).toString(); 
//		  String expectedWhatIsItemQuestion4Text = productDescription.get(25).toString(); 
//		  String expectedAnswer4Text = productDescription.get(26).toString(); 
//		  String expectedWhatIsItemQuestion5Text = productDescription.get(27).toString(); 
//		  String expectedAnswer5Text = productDescription.get(28).toString(); 
//		  String expectedWhatIsItemQuestion6Text = productDescription.get(29).toString(); 
//		  String expectedAnswer6Text = productDescription.get(30).toString(); 
//		  String expectedFooterContentText = productDescription.get(31).toString(); 
//		  String expectedPaymentTitle = productDescription.get(32).toString(); 
//		  String expectedMerciContent = productDescription.get(33).toString();

			String productURL = productDescription1.get(2).toString();
			
			System.out.println("NQA" +productURL);
			
			String expectedProductBreadCrumb = productDescription1.get(3).toString();
			String expectedProductTitle = productDescription1.get(4).toString();
			String expectedProductImageSrc = productDescription1.get(5).toString();
			String expectedProductPriceTagImageSrc = productDescription1.get(6).toString();
			String expectedFormTitle = productDescription1.get(7).toString();
			String expectedConditionText = productDescription1.get(8).toString();
			String expectedRedribbonText = productDescription1.get(9).toString();
			String expectedFeature1Text = productDescription1.get(10).toString();
			String expectedFeature2Text = productDescription1.get(11).toString();
			String expectedFeature3Text = productDescription1.get(12).toString();
			String expectedFeature4Text = productDescription1.get(13).toString();
			String expectedHowItWorksText = productDescription1.get(14).toString();
			String expectedHowItWorks1Text = productDescription1.get(15).toString();
			String expectedHowItWorks2Text = productDescription1.get(16).toString();
			String expectedHowItWorks3Text = productDescription1.get(17).toString();
			String expectedHowItWorks4Text = productDescription1.get(18).toString();
			String expectedWhatIsItemQuestionText = productDescription1.get(19).toString();
			String expectedWhatIsItemQuestion1Text = productDescription1.get(20).toString();
			String expectedAnswer1Text = productDescription1.get(21).toString();
			String expectedWhatIsItemQuestion2Text = productDescription1.get(22).toString();
			String expectedAnswer2Text = productDescription1.get(23).toString();
			String expectedWhatIsItemQuestion3Text = productDescription1.get(24).toString();
			String expectedAnswer3Text = productDescription1.get(25).toString();
			String expectedWhatIsItemQuestion4Text = productDescription1.get(26).toString();
			String expectedAnswer4Text = productDescription1.get(27).toString();
			String expectedWhatIsItemQuestion5Text = productDescription1.get(28).toString();
			String expectedAnswer5Text = productDescription1.get(29).toString();
			String expectedWhatIsItemQuestion6Text = productDescription1.get(30).toString();
			String expectedAnswer6Text = productDescription1.get(31).toString();
			String expectedFooterContentText = productDescription1.get(32).toString();
			String expectedPaymentTitle = productDescription1.get(33).toString();
			String expectedMerciContent1 = productDescription1.get(34).toString();
			String expectedPasswordRegexPattern = productDescription1.get(35).toString();
			String expectedMerciContent2 = productDescription1.get(36).toString();			
							
			ProductDescriptionPage productDescriptionPage = new ProductDescriptionPage(getDriver());
	
			Report.setTest(extent.createTest(
					"Full Screen Product Form Template LP Test - Verify user is able to purchase product successfully."));
	
			Report.info("Open " + productURL + " in " + BROWSER_NAME + " browser.");
	
			HeaderFooter headerFooter = new HeaderFooter(getDriver());
				
			productDescriptionPage.navigateURL(productURL);
			
			// STEP 1 - Product Description
			
			String actualCurrentURL = headerFooter.getURL();
	
			if (actualCurrentURL.equals(productURL)) {
				Report.pass("'" + productURL + "' url on Product Description Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail("Expected <b>'" + productURL + "'</b> but found <b>'" + actualCurrentURL
						+ "'</b> url on Product Description Page.", getScreenshot(getDriver()));
			}
	
			String expectedSecureCardImageSrc = "https://boutik-prive.fr/assets/boutik-prive.fr/img/offers/bucket/391/fr_17137694361.png";
			String actualSecureCardImageSrc = headerFooter.getPaiementSécuriséImage();
	
			if (actualSecureCardImageSrc.equals(expectedSecureCardImageSrc)) {
				Report.pass("'" + expectedSecureCardImageSrc + "' image on Header Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail(
						"Expected <b>'" + expectedSecureCardImageSrc + "'</b> but found <b>'"
								+ actualSecureCardImageSrc + "'</b> image on Header Page.",
						getScreenshot(getDriver()));
			}
	
			if (headerFooter.verifyPaiementSécuriséTextDisplayed()) {
				Report.pass("'Paiement sécurisé' text on header on Product Description Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail("'Paiement sécurisé' text on header on Product Description Page.",
						getScreenshot(getDriver()));
			}
	
			String expectedServiceClientImageSrc = "https://boutik-prive.fr/assets/boutik-prive.fr/img/offers/bucket/391/fr_1713769436.png";
			String actualServiceClientImageSrc = headerFooter.getServiceClientàVotreéCouteImage();
	
			if (actualServiceClientImageSrc.equals(expectedServiceClientImageSrc)) {
				Report.pass("'" + expectedServiceClientImageSrc + "' image on Header Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail(
						"Expected <b>'" + expectedServiceClientImageSrc + "'</b> but found <b>'"
								+ actualServiceClientImageSrc + "'</b> image on Header Page.",
						getScreenshot(getDriver()));
			}
	
			if (headerFooter.verifyServiceClientàVotreéCouteTextDisplayed()) {
				Report.pass("'Service client à votre écoute' text on header on Product Description Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail("'Service client à votre écoute' text on header on Product Description Page.",
						getScreenshot(getDriver()));
			}
	
			// String actualProductBreadCrumb = productDescriptionPage.getProductManagerBreadCrumb();
	
			// if(actualProductBreadCrumb.equals(expectedProductBreadCrumb)) {
			// Report.pass("'" + expectedProductBreadCrumb + "' text on Product Description
			// Page.", getScreenshot(getDriver()));}
			// else {
			// Report.fail("Expected <b>'" + expectedProductBreadCrumb + "'</b> but found
			// <b>'" + actualProductBreadCrumb +"'</b> text on Product Description Page.",
			// // getScreenshot(getDriver())); //
			// }
	
			String actualProductTitle = productDescriptionPage.getProductTitle();
	
			if (actualProductTitle.equalsIgnoreCase(expectedProductTitle)) {
				Report.pass("'" + expectedProductTitle + "' text on Product Description Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail("Expected <b>'" + expectedProductTitle + "'</b> but found <b>'" + actualProductTitle
						+ "'</b> text on Product Description Page.", getScreenshot(getDriver()));
			}
	
			// locator
			if (productDescriptionPage.isProductImageDisplayed()) {
				Report.pass("'Product image' on Product Description Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("'Product image' on Product Description Page.", getScreenshot(getDriver()));
			}
	
			String actualProductImageSrc = productDescriptionPage.getProductImageSrc();
	
			if (actualProductImageSrc.equals(expectedProductImageSrc)) {
				Report.pass("'" + expectedProductImageSrc + "' image on Product Description Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail(
						"Expected <b>'" + expectedProductImageSrc + "'</b> but found <b>'"
								+ actualProductImageSrc + "'</b> image on Product Description Page.",
						getScreenshot(getDriver()));
			}
	
			if (productDescriptionPage.isProductPriceTagDisplayed()) {
				Report.pass("'Product price tag' on Product Description Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("'Product price tag' on Product Description Page.", getScreenshot(getDriver()));
			}
	
			String actualProductPriceTagImageSrc = productDescriptionPage.getProductPriceTagImageSrc();
	
			if (actualProductPriceTagImageSrc.equals(expectedProductPriceTagImageSrc)) {
				Report.pass("'" + expectedProductPriceTagImageSrc + "' image on Product Description Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail(
						"Expected <b>'" + expectedProductPriceTagImageSrc + "'</b> but found <b>'"
								+ actualProductPriceTagImageSrc + "'</b> image on Product Description Page.",
						getScreenshot(getDriver()));
			}
	
			// locator
	
			String actualFormTitle = productDescriptionPage.getFormTitle();
	
			if (actualFormTitle.equals(expectedFormTitle)) {
				Report.pass("'" + expectedFormTitle + "' text on Product Description Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail("Expected <b>'" + expectedFormTitle + "'</b> but found <b>'" + actualFormTitle
						+ "'</b> text on Product Description Page.", getScreenshot(getDriver()));
			}
	
			String expectedPrenomPlaceholder = "Prénom";
			String expectedNomPlaceholder = "Nom";
			String expectedEmailPlaceholder = "Email";
			String expectedAdressePlaceholder = "Adresse";
			String expectedCodePostalPlaceholder = "Code postal";
			String expectedVillePlaceholder = "Ville";
	
			if (productDescriptionPage.isPrenomIconDisplayed()) {
				Report.pass("'Prenom' icon on Product Description Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("'Prenom' icon on Product Description Page.", getScreenshot(getDriver()));
			}
	
			String actualPrenomPlaceholder = productDescriptionPage.getPrenomTextboxPlaceholder();
	
			if (actualPrenomPlaceholder.equals(expectedPrenomPlaceholder)) {
				Report.pass("'" + expectedPrenomPlaceholder + "' textbox on Product Description Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail(
						"Expected <b>'" + expectedPrenomPlaceholder + "'</b> but found <b>'"
								+ actualPrenomPlaceholder + "'</b> textbox on Product Description Page.",
						getScreenshot(getDriver()));
			}
	
			String actualNomPlaceholder = productDescriptionPage.getNomTextboxPlaceholder();
	
			if (actualNomPlaceholder.equals(expectedNomPlaceholder)) {
				Report.pass("'" + expectedNomPlaceholder + "' textbox on Product Description Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail("Expected <b>'" + expectedNomPlaceholder + "'</b> but found <b>'"
						+ actualNomPlaceholder + "'</b> textbox on Product Description Page.",
						getScreenshot(getDriver()));
			}
	
			if (productDescriptionPage.isEmailIconDisplayed()) {
				Report.pass("'Email' icon on Product Description Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("'Email' icon on Product Description Page.", getScreenshot(getDriver()));
			}
	
			String actualEmailPlaceholder = productDescriptionPage.getEmailTextboxPlaceholder();
	
			if (actualEmailPlaceholder.equals(expectedEmailPlaceholder)) {
				Report.pass("'" + expectedEmailPlaceholder + "' textbox on Product Description Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail(
						"Expected <b>'" + expectedEmailPlaceholder + "'</b> but found <b>'"
								+ actualEmailPlaceholder + "'</b> textbox on Product Description Page.",
						getScreenshot(getDriver()));
			}
	
			if (productDescriptionPage.isAddressIconDisplayed()) {
				Report.pass("'Address' icon on Product Description Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("'Address' icon on Product Description Page.", getScreenshot(getDriver()));
			}
	
			String actualAddressPlaceholder = productDescriptionPage.getAddressTextboxPlaceholder();
	
			if (actualAddressPlaceholder.equals(expectedAdressePlaceholder)) {
				Report.pass("'" + expectedAdressePlaceholder + "' textbox on Product Description Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail(
						"Expected <b>'" + expectedAdressePlaceholder + "'</b> but found <b>'"
								+ actualAddressPlaceholder + "'</b> textbox on Product Description Page.",
						getScreenshot(getDriver()));
			}
	
			if (productDescriptionPage.isCodePostalIconDisplayed()) {
				Report.pass("'Code Postal' icon on Product Description Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("'Code Postal' icon on Product Description Page.", getScreenshot(getDriver()));
			}
	
			String actualCodePostalPlaceholder = productDescriptionPage.getCodePostalTextboxPlaceholder();
	
			if (actualCodePostalPlaceholder.equals(expectedCodePostalPlaceholder)) {
				Report.pass("'" + expectedCodePostalPlaceholder + "' textbox on Product Description Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail(
						"Expected <b>'" + expectedCodePostalPlaceholder + "'</b> but found <b>'"
								+ actualCodePostalPlaceholder + "'</b> textbox on Product Description Page.",
						getScreenshot(getDriver()));
			}
	
			if (productDescriptionPage.isVilleIconDisplayed()) {
				Report.pass("'Ville' icon on Product Description Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("'Ville' icon on Product Description Page.", getScreenshot(getDriver()));
			}
	
			String actualVillePlaceholder = productDescriptionPage.getVilleTextboxPlaceholder();
	
			if (actualVillePlaceholder.equals(expectedVillePlaceholder)) {
				Report.pass("'" + expectedVillePlaceholder + "' textbox on Product Description Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail(
						"Expected <b>'" + expectedVillePlaceholder + "'</b> but found <b>'"
								+ actualVillePlaceholder + "'</b> textbox on Product Description Page.",
						getScreenshot(getDriver()));
			}
	
			String actualConditionText = productDescriptionPage.getConditionTextDisplayed();
	
			if (actualConditionText.equals(expectedConditionText)) {
				Report.pass("'" + expectedConditionText + "' condition text on Product Description Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail(
						"Expected <b>'" + expectedConditionText + "'</b> but found <b>'" + actualConditionText
								+ "'</b> condition text on Product Description Page.",
						getScreenshot(getDriver()));
			}
	
			if (productDescriptionPage.isJenProfiteButtonDisplayed()) {
				Report.pass("'Jen Profite' button on Product Description Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("'Jen Profite' button on Product Description Page.", getScreenshot(getDriver()));
			}
	
			// String expectedMcafreeImage = "https://boutik-prive.fr/assets/l120/img/payment/mcafee.png";
			// String actualMcafreeImage = productDescriptionPage.getMCFeeImageSrc();
			// String expectedTrusteImage = "https://boutik-prive.fr/assets/l120/img/payment/TRUSTe.png";
			// String actualTrusteImage = productDescriptionPage.getTrusteImageSrc();
			// String expectedVerisignImage = "https://boutik-prive.fr/assets/l120/img/payment/verisign.png";
			// String actualVerisignImage = productDescriptionPage.getVerisignImageSrc();
	
			// if (actualMcafreeImage.equals(expectedMcafreeImage)) {
			// Report.pass("'" + expectedMcafreeImage + "' image on Product Description Page.", getScreenshot(getDriver()));
			// } else {
			// Report.fail("Expected <b>'" + expectedMcafreeImage + "'</b> but found <b>'" +
			// actualMcafreeImage + "'</b> image on Product Description Page.", getScreenshot(getDriver()));
			// }
	
			// if (actualTrusteImage.equals(expectedTrusteImage)) {
			// Report.pass("'" + expectedTrusteImage + "' image on Product Description Page.", getScreenshot(getDriver()));
			// } else {
			// Report.fail("Expected <b>'" + expectedTrusteImage + "'</b> but found <b>'" +
			// actualTrusteImage + "'</b> image on Product Description Page.", getScreenshot(getDriver()));
			// }
	
			// if (actualVerisignImage.equals(expectedVerisignImage)) {
			// Report.pass("'" + expectedVerisignImage + "' image on Product Description
			// Page.", getScreenshot(getDriver()));
			// } else {
			// Report.fail("Expected <b>'" + expectedVerisignImage + "'</b> but found <b>'"
			// + actualVerisignImage + "'</b> image on Product Description Page.", getScreenshot(getDriver()));
			// }
	
			String actualRedRibbonText = productDescriptionPage.getRedRibbonText();
	
			if (actualRedRibbonText.equals(expectedRedribbonText)) {
				Report.pass("'" + expectedRedribbonText + "' red ribbon text on Product Description Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail(
						"Expected <b>'" + expectedRedribbonText + "'</b> but found <b>'" + actualRedRibbonText
								+ "'</b> red ribbon text on Product Description Page.",
						getScreenshot(getDriver()));
			}
	
			// String expectedBeforeTimerText = productDescriptionPage.getTimerText();
			// String actualAfterTimerText = productDescriptionPage.getTimerText();
	
			// if (!actualAfterTimerText.equals(expectedBeforeTimerText)) {
			// Report.pass("'Timer' is working on Product Description Page.",
			// getScreenshot(getDriver()));
			// } else {
			// Report.fail("Expected <b>'" + expectedBeforeTimerText + "'</b> but found
			// <b>'" + actualAfterTimerText + "'</b> Timer text on Product Description
			// Page.", getScreenshot(getDriver()));
			// }
	
			if (productDescriptionPage.isFeature1ImageDisplayed()) {
				Report.pass("'Feature 1' image on Product Description Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("'Feature 1' image on Product Description Page.", getScreenshot(getDriver()));
			}
	
			String expectedShippingImage = "https://boutik-prive.fr/assets/img/r_shipping.png";
			String actualShippingImage = productDescriptionPage.getFeature1ImageSrc();
	
			if (actualShippingImage.equals(expectedShippingImage)) {
				Report.pass("'" + expectedShippingImage + "' image on Product Description Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail("Expected <b>'" + expectedShippingImage + "'</b> but found <b>'"
						+ actualShippingImage + "'</b> image on Product Description Page.",
						getScreenshot(getDriver()));
			}
	
			String actualFeature1Text = productDescriptionPage.getFeature1Text();
	
			if (actualFeature1Text.equals(expectedFeature1Text)) {
				Report.pass("'" + expectedFeature1Text + "' feature 1 text on Product Description Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail(
						"Expected <b>'" + expectedFeature1Text + "'</b> but found <b>'" + actualFeature1Text
								+ "'</b> feature 1 text on Product Description Page.",
						getScreenshot(getDriver()));
			}
	
			if (productDescriptionPage.isFeature2ImageDisplayed()) {
				Report.pass("'Feature 2' image on Product Description Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("'Feature 2' image on Product Description Page.", getScreenshot(getDriver()));
			}
	
			String expectedReturnImage = "https://boutik-prive.fr/assets/img/r_returns.png";
			String actualReturnImage = productDescriptionPage.getFeature2ImageSrc();
	
			if (actualReturnImage.equals(expectedReturnImage)) {
				Report.pass("'" + expectedReturnImage + "' image on Product Description Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail("Expected <b>'" + expectedReturnImage + "'</b> but found <b>'" + actualReturnImage
						+ "'</b> image on Product Description Page.", getScreenshot(getDriver()));
			}
	
			String actualFeature2Text = productDescriptionPage.getFeature2Text();
	
			if (actualFeature2Text.equals(expectedFeature2Text)) {
				Report.pass("'" + expectedFeature2Text + "' feature 2 text on Product Description Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail(
						"Expected <b>'" + expectedFeature2Text + "'</b> but found <b>'" + actualFeature2Text
								+ "'</b> feature 2 text on Product Description Page.",
						getScreenshot(getDriver()));
			}
	
			if (productDescriptionPage.isFeature3ImageDisplayed()) {
				Report.pass("'Feature 3' image on Product Description Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("'Feature 3' image on Product Description Page.", getScreenshot(getDriver()));
			}
	
			String expectedHelpImage = "https://boutik-prive.fr/assets/img/r_help.png";
			String actualHelpImage = productDescriptionPage.getFeature3ImageSrc();
	
			if (actualHelpImage.equals(expectedHelpImage)) {
				Report.pass("'" + expectedHelpImage + "' image on Product Description Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail("Expected <b>'" + expectedHelpImage + "'</b> but found <b>'" + actualHelpImage
						+ "'</b> image on Product Description Page.", getScreenshot(getDriver()));
			}
	
			String actualFeature3Text = productDescriptionPage.getFeature3Text();
	
			if (actualFeature3Text.equals(expectedFeature3Text)) {
				Report.pass("'" + expectedFeature3Text + "' feature 3 text on Product Description Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail(
						"Expected <b>'" + expectedFeature3Text + "'</b> but found <b>'" + actualFeature3Text
								+ "'</b> feature 3 text on Product Description Page.",
						getScreenshot(getDriver()));
			}
	
			if (productDescriptionPage.isFeature4ImageDisplayed()) {
				Report.pass("'Feature 4' image on Product Description Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("'Feature 4' image on Product Description Page.", getScreenshot(getDriver()));
			}
	
			String expectedReductionImage = "https://boutik-prive.fr/assets/img/r_reductions.png";
			String actualReductionImage = productDescriptionPage.getFeature4ImageSrc();
	
			if (actualReductionImage.equals(expectedReductionImage)) {
				Report.pass("'" + expectedReductionImage + "' image on Product Description Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail("Expected <b>'" + expectedReductionImage + "'</b> but found <b>'"
						+ actualReductionImage + "'</b> image on Product Description Page.",
						getScreenshot(getDriver()));
			}
	
			String actualFeature4Text = productDescriptionPage.getFeature4Text();
	
			if (actualFeature4Text.equals(expectedFeature4Text)) {
				Report.pass("'" + expectedFeature4Text + "' feature 4 text on Product Description Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail(
						"Expected <b>'" + expectedFeature4Text + "'</b> but found <b>'" + actualFeature4Text
								+ "'</b> feature 4 text on Product Description Page.",
						getScreenshot(getDriver()));
			}
	
			String actualHowItWorksText = productDescriptionPage.getHowItWorksText();
	
			if (actualHowItWorksText.equals(expectedHowItWorksText)) {
				Report.pass("'" + expectedHowItWorksText + "' How it works text on Product Description Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail(
						"Expected <b>'" + expectedHowItWorksText + "'</b> but found <b>'" + actualHowItWorksText
								+ "'</b> How it works text on Product Description Page.",
						getScreenshot(getDriver()));
			}
	
			String expectedHowItWorks1Image = "https://boutik-prive.fr/assets/boutik-prive.fr/img/Group_500.png";
			String actualHowItWorks1Image = productDescriptionPage.getHowItWorks1ImageSrc();
	
			if (actualHowItWorks1Image.equals(expectedHowItWorks1Image)) {
				Report.pass("'" + expectedHowItWorks1Image + "' image on Product Description Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail(
						"Expected <b>'" + expectedHowItWorks1Image + "'</b> but found <b>'"
								+ actualHowItWorks1Image + "'</b> image on Product Description Page.",
						getScreenshot(getDriver()));
			}
	
			String actualHowItWorks1Text = productDescriptionPage.getHowItWorks1Text();
	
			if (actualHowItWorks1Text.equals(expectedHowItWorks1Text)) {
				Report.pass(
						"'" + expectedHowItWorks1Text + "' How it works 1 text on Product Description Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail("Expected <b>'" + expectedHowItWorks1Text + "'</b> but found <b>'"
						+ actualHowItWorks1Text + "'</b> How it works 1 text on Product Description Page.",
						getScreenshot(getDriver()));
			}
	
			String expectedHowItWorks2Image = "https://boutik-prive.fr/assets/boutik-prive.fr/img/Group_499.png";
			String actualHowItWorks2Image = productDescriptionPage.getHowItWorks2ImageSrc();
	
			if (actualHowItWorks2Image.equals(expectedHowItWorks2Image)) {
				Report.pass("'" + expectedHowItWorks2Image + "' image on Product Description Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail(
						"Expected <b>'" + expectedHowItWorks2Image + "'</b> but found <b>'"
								+ actualHowItWorks2Image + "'</b> image on Product Description Page.",
						getScreenshot(getDriver()));
			}
	
			String actualHowItWorks2Text = productDescriptionPage.getHowItWorks2Text();
	
			if (actualHowItWorks2Text.equals(expectedHowItWorks2Text)) {
				Report.pass("'" + expectedHowItWorks2Text + "' How it works 2 text Product Description Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail("Expected <b>'" + expectedHowItWorks2Text + "'</b> but found <b>'"
						+ actualHowItWorks2Text + "'</b> How it works 2 text on Product Description Page.",
						getScreenshot(getDriver()));
			}
	
			String expectedHowItWorks3Image = "https://boutik-prive.fr/assets/boutik-prive.fr/img/Group_501_1.png";
			String actualHowItWorks3Image = productDescriptionPage.getHowItWorks3ImageSrc();
	
			if (actualHowItWorks3Image.equals(expectedHowItWorks3Image)) {
				Report.pass("'" + expectedHowItWorks3Image + "' image on Product Description Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail(
						"Expected <b>'" + expectedHowItWorks3Image + "'</b> but found <b>'"
								+ actualHowItWorks3Image + "'</b> image on Product Description Page.",
						getScreenshot(getDriver()));
			}
	
			String actualHowItWorks3Text = productDescriptionPage.getHowItWorks3Text();
	
			if (actualHowItWorks3Text.equals(expectedHowItWorks3Text)) {
				Report.pass(
						"'" + expectedHowItWorks3Text + "' How it works 3 text on Product Description Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail("Expected <b>'" + expectedHowItWorks3Text + "'</b> but found <b>'"
						+ actualHowItWorks3Text + "'</b> How it works 3 text on Product Description Page.",
						getScreenshot(getDriver()));
			}
	
			String expectedHowItWorks4Image = "https://boutik-prive.fr/assets/boutik-prive.fr/img/Group_498.png";
			String actualHowItWorks4Image = productDescriptionPage.getHowItWorks4ImageSrc();
	
			if (actualHowItWorks4Image.equals(expectedHowItWorks4Image)) {
				Report.pass("'" + expectedHowItWorks4Image + "' image on Product Description Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail(
						"Expected <b>'" + expectedHowItWorks4Image + "'</b> but found <b>'"
								+ actualHowItWorks4Image + "'</b> image on Product Description Page.",
						getScreenshot(getDriver()));
			}
	
			String actualHowItWorks4Text = productDescriptionPage.getHowItWorks4Text();
	
			if (actualHowItWorks4Text.equals(expectedHowItWorks4Text)) {
				Report.pass(
						"'" + expectedHowItWorks4Text + "' How it works 4 text on Product Description Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail("Expected <b>'" + expectedHowItWorks4Text + "'</b> but found <b>'"
						+ actualHowItWorks4Text + "'</b> How it works 4 text on Product Description Page.",
						getScreenshot(getDriver()));
			}
	
			String actualWhatIsItemQuestionText = productDescriptionPage.getWhatIsItemQuestionText();
	
			if (actualWhatIsItemQuestionText.equals(expectedWhatIsItemQuestionText)) {
				Report.pass(
						"'" + expectedWhatIsItemQuestionText
								+ "' What is item question text on Product Description Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail(
						"Expected <b>'" + expectedWhatIsItemQuestionText + "'</b> but found <b>'"
								+ actualWhatIsItemQuestionText
								+ "'</b> What is item question text on Product Description Page.",
						getScreenshot(getDriver()));
			}
	
			String expectedHowItWorksImage = "https://shop.boutik-prive.fr/wp-content/themes/el-greco/images/single/m1.png";
			String actualHowItWorksImage = productDescriptionPage.getWhatIsItem1ImageSrc();
	
			if (actualHowItWorksImage.equals(expectedHowItWorksImage)) {
				Report.pass("'" + expectedHowItWorksImage + "' image on Product Description Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail(
						"Expected <b>'" + expectedHowItWorksImage + "'</b> but found <b>'"
								+ actualHowItWorksImage + "'</b> image on Product Description Page.",
						getScreenshot(getDriver()));
			}
	
			if (productDescriptionPage.isWhatIsItem1ImageDisplayed()) {
				Report.pass("'What is item 1' image on Product Description Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("'What is item 1' image on Product Description Page.", getScreenshot(getDriver()));
			}
	
			String actualWhatIsItemQuestion1Text = productDescriptionPage.getWhatIsItemQuestion1Text();
	
			if (actualWhatIsItemQuestion1Text.equals(expectedWhatIsItemQuestion1Text)) {
				Report.pass("'" + expectedWhatIsItemQuestion1Text
						+ "' Question 1 text on Product Description Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("Expected <b>'" + expectedWhatIsItemQuestion1Text + "'</b> but found <b>'"
						+ actualWhatIsItemQuestion1Text + "'</b> Question 1 text on Product Description Page.",
						getScreenshot(getDriver()));
			}
	
			String actualAnswer1Text = productDescriptionPage.getAnswer1Text();
	
			if (actualAnswer1Text.equals(expectedAnswer1Text)) {
				Report.pass("'" + expectedAnswer1Text + "' Answer 1 text on Product Description Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail(
						"Expected <b>'" + expectedAnswer1Text + "'</b> but found <b>'" + actualAnswer1Text
								+ "'</b> Answer 1 text on Product Description Page.",
						getScreenshot(getDriver()));
			}
	
			if (productDescriptionPage.isWhatIsItem2ImageDisplayed()) {
				Report.pass("'What is item 2' image on Product Description Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("'What is item 2' image on Product Description Page.", getScreenshot(getDriver()));
			}
	
			String actualWhatIsItem2Image = productDescriptionPage.getWhatIsItem2ImageSrc();
	
			if (actualWhatIsItem2Image.equals(expectedHowItWorksImage)) {
				Report.pass("'" + expectedHowItWorksImage + "' image on Product Description Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail(
						"Expected <b>'" + expectedHowItWorksImage + "'</b> but found <b>'"
								+ actualWhatIsItem2Image + "'</b> image on Product Description Page.",
						getScreenshot(getDriver()));
			}
	
			String actualWhatIsItemQuestion2Text = productDescriptionPage.getWhatIsItemQuestion2Text();
	
			if (actualWhatIsItemQuestion2Text.equals(expectedWhatIsItemQuestion2Text)) {
				Report.pass("'" + expectedWhatIsItemQuestion2Text
						+ "' Question 2 text on Product Description Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("Expected <b>'" + expectedWhatIsItemQuestion2Text + "'</b> but found <b>'"
						+ actualWhatIsItemQuestion2Text + "'</b> Question 2 text on Product Description Page.",
						getScreenshot(getDriver()));
			}
	
			String actualAnswer2Text = productDescriptionPage.getAnswer2Text();
	
			if (actualAnswer2Text.equals(expectedAnswer2Text)) {
				Report.pass("'" + expectedAnswer2Text + "' Answer 2 text on Product Description Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail(
						"Expected <b>'" + expectedAnswer2Text + "'</b> but found <b>'" + actualAnswer2Text
								+ "'</b> Answer 2 text on Product Description Page.",
						getScreenshot(getDriver()));
			}
	
			if (productDescriptionPage.isWhatIsItem3ImageDisplayed()) {
				Report.pass("'What is item 3' image on Product Description Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("'What is item 3' image on Product Description Page.", getScreenshot(getDriver()));
			}
	
			String actualWhatIsItem3Image = productDescriptionPage.getWhatIsItem3ImageSrc();
	
			if (actualWhatIsItem3Image.equals(expectedHowItWorksImage)) {
				Report.pass("'" + expectedHowItWorksImage + "' image on Product Description Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail(
						"Expected <b>'" + expectedHowItWorksImage + "'</b> but found <b>'"
								+ actualWhatIsItem3Image + "'</b> image on Product Description Page.",
						getScreenshot(getDriver()));
			}
	
			String actualWhatIsItemQuestion3Text = productDescriptionPage.getWhatIsItemQuestion3Text();
	
			if (actualWhatIsItemQuestion3Text.equals(expectedWhatIsItemQuestion3Text)) {
				Report.pass("'" + expectedWhatIsItemQuestion3Text
						+ "' Question 3 text on Product Description Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("Expected <b>'" + expectedWhatIsItemQuestion3Text + "'</b> but found <b>'"
						+ actualWhatIsItemQuestion3Text + "'</b> Question 3 text on Product Description Page.",
						getScreenshot(getDriver()));
			}
	
			String actualAnswer3Text = productDescriptionPage.getAnswer3Text();
	
			if (actualAnswer3Text.equals(expectedAnswer3Text)) {
				Report.pass("'" + expectedAnswer3Text + "' Answer 3 text on Product Description Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail(
						"Expected <b>'" + expectedAnswer3Text + "'</b> but found <b>'" + actualAnswer3Text
								+ "'</b> Answer 3 text on Product Description Page.",
						getScreenshot(getDriver()));
			}
	
			if (productDescriptionPage.isWhatIsItem4ImageDisplayed()) {
				Report.pass("'What is item 4' image on Product Description Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("'What is item 4' image on Product Description Page.", getScreenshot(getDriver()));
			}
	
			String actualWhatIsItem4Image = productDescriptionPage.getWhatIsItem4ImageSrc();
	
			if (actualWhatIsItem4Image.equals(expectedHowItWorksImage)) {
				Report.pass("'" + expectedHowItWorksImage + "' image on Product Description Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail(
						"Expected <b>'" + expectedHowItWorksImage + "'</b> but found <b>'"
								+ actualWhatIsItem4Image + "'</b> image on Product Description Page.",
						getScreenshot(getDriver()));
			}
	
			String actualWhatIsItemQuestion4Text = productDescriptionPage.getWhatIsItemQuestion4Text();
	
			if (actualWhatIsItemQuestion4Text.equals(expectedWhatIsItemQuestion4Text)) {
				Report.pass("'" + expectedWhatIsItemQuestion4Text
						+ "' Question 4 text on Product Description Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("Expected <b>'" + expectedWhatIsItemQuestion4Text + "'</b> but found <b>'"
						+ actualWhatIsItemQuestion4Text + "'</b> Question 4 text on Product Description Page.",
						getScreenshot(getDriver()));
			}
	
			String actualAnswer4Text = productDescriptionPage.getAnswer4Text();
	
			if (actualAnswer4Text.equals(expectedAnswer4Text)) {
				Report.pass("'" + expectedAnswer4Text + "' Answer 4 text on Product Description Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail(
						"Expected <b>'" + expectedAnswer4Text + "'</b> but found <b>'" + actualAnswer4Text
								+ "'</b> Answer 4 text on Product Description Page.",
						getScreenshot(getDriver()));
			}
	
			if (productDescriptionPage.isWhatIsItem5ImageDisplayed()) {
				Report.pass("'What is item 5' image on Product Description Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("'What is item 5' image on Product Description Page.", getScreenshot(getDriver()));
			}
	
			String actualWhatIsItem5Image = productDescriptionPage.getWhatIsItem5ImageSrc();
	
			if (actualWhatIsItem5Image.equals(expectedHowItWorksImage)) {
				Report.pass("'" + expectedHowItWorksImage + "' image on Product Description Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail(
						"Expected <b>'" + expectedHowItWorksImage + "'</b> but found <b>'"
								+ actualWhatIsItem5Image + "'</b> image on Product Description Page.",
						getScreenshot(getDriver()));
			}
	
			String actualWhatIsItemQuestion5Text = productDescriptionPage.getWhatIsItemQuestion5Text();
	
			if (actualWhatIsItemQuestion5Text.equals(expectedWhatIsItemQuestion5Text)) {
				Report.pass("'" + expectedWhatIsItemQuestion5Text
						+ "' Question 5 text on Product Description Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("Expected <b>'" + expectedWhatIsItemQuestion5Text + "'</b> but found <b>'"
						+ actualWhatIsItemQuestion5Text + "'</b> Question 5 text on Product Description Page.",
						getScreenshot(getDriver()));
			}
	
			String actualAnswer5Text = productDescriptionPage.getAnswer5Text();
	
			if (actualAnswer5Text.equals(expectedAnswer5Text)) {
				Report.pass("'" + expectedAnswer5Text + "' Answer 5 text on Product Description Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail(
						"Expected <b>'" + expectedAnswer5Text + "'</b> but found <b>'" + actualAnswer5Text
								+ "'</b> Answer 5 text on Product Description Page.",
						getScreenshot(getDriver()));
			}
	
			if (productDescriptionPage.isWhatIsItem6ImageDisplayed()) {
				Report.pass("'What is item 6' image on Product Description Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("'What is item 6' image on Product Description Page.", getScreenshot(getDriver()));
			}
	
			String actualWhatIsItem6Image = productDescriptionPage.getWhatIsItem6ImageSrc();
	
			if (actualWhatIsItem6Image.equals(expectedHowItWorksImage)) {
				Report.pass("'" + expectedHowItWorksImage + "' image on Product Description Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail(
						"Expected <b>'" + expectedHowItWorksImage + "'</b> but found <b>'"
								+ actualWhatIsItem6Image + "'</b> image on Product Description Page.",
						getScreenshot(getDriver()));
			}
	
			String actualWhatIsItemQuestion6Text = productDescriptionPage.getWhatIsItemQuestion6Text();
	
			if (actualWhatIsItemQuestion6Text.equals(expectedWhatIsItemQuestion6Text)) {
				Report.pass("'" + expectedWhatIsItemQuestion6Text
						+ "' Question 6 text on Product Description Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("Expected <b>'" + expectedWhatIsItemQuestion6Text + "'</b> but found <b>'"
						+ actualWhatIsItemQuestion6Text + "'</b> Question 6 text on Product Description Page.",
						getScreenshot(getDriver()));
			}
	
			String actualAnswer6Text = productDescriptionPage.getAnswer6Text();
	
			if (actualAnswer6Text.equals(expectedAnswer6Text)) {
				Report.pass("'" + expectedAnswer6Text + "' Answer 6 text on Product Description Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail(
						"Expected <b>'" + expectedAnswer6Text + "'</b> but found <b>'" + actualAnswer6Text
								+ "'</b> Answer 6 text on Product Description Page.",
						getScreenshot(getDriver()));
			}
	
			String actualFooterContentText = productDescriptionPage.getFooterContentText();
	
			if (actualFooterContentText.equals(expectedFooterContentText)) {
				Report.pass("'" + expectedFooterContentText + "' Footer text on Product Description Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail(
						"Expected <b>'" + expectedFooterContentText + "'</b> but found <b>'"
								+ actualFooterContentText + "'</b> Footer text on Product Description Page.",
						getScreenshot(getDriver()));
			}
	
			Report.info("Fill up the form and click on Submit button on Product Description Page.");
	
			DataProvider customer = new DataProvider();
			String customerFirstName = customer.getFirstName();
			String customerLastName = customer.getLastName();
			String customerEmail = customer.getEmail();
			String customerAddress = customer.getCountryName();
			String customerCodePostal = customer.getPostalCode();
			String customerVille = customer.getCityName();
	
			productDescriptionPage.fillUpForm(customerFirstName, customerLastName, customerEmail,
					customerAddress, customerCodePostal, customerVille, false);
	
			Report.pass("<b><u>Data Entered: </u></b>", getScreenshot(getDriver()));
			Report.pass("<b>Customer prenom : </b>" + customerFirstName);
			Report.pass("<b>Customer nom : </b>" + customerLastName);
			Report.pass("<b>Customer email : </b>" + customerEmail);
			Report.pass("<b>Customer address : </b>" + customerAddress);
			Report.pass("<b>Customer code postal : </b>" + customerCodePostal);
			Report.pass("<b>Customer ville : </b>" + customerVille);
	
			Report.info("Click on Submit button on Product Description Page.");
			productDescriptionPage.clickJenProfiteButton();
	
			// STEP 2 - Product Payment
	
			PaymentPage paymentPage = new PaymentPage(getDriver());
	
			String expectedPaymentPageURL = "https://boutik-prive.fr/fr/bi/paiement-securise";
			actualCurrentURL = headerFooter.getURL();
	
			if (actualCurrentURL.contains(expectedPaymentPageURL)) {
				Report.pass("'" + expectedPaymentPageURL + "' url on Payment Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail("Expected <b>'" + expectedPaymentPageURL + "'</b> but found <b>'" + actualCurrentURL
						+ "'</b> url on Payment Page.", getScreenshot(getDriver()));
			}
	
			String actualPaiementSécuriséImage = headerFooter.getPaiementSécuriséImage();
	
			if (actualPaiementSécuriséImage.equals(expectedSecureCardImageSrc)) {
				Report.pass("'" + expectedSecureCardImageSrc + "' image on Header Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail(
						"Expected <b>'" + expectedSecureCardImageSrc + "'</b> but found <b>'"
								+ actualPaiementSécuriséImage + "'</b> image on Header Page.",
						getScreenshot(getDriver()));
			}
	
			if (headerFooter.verifyPaiementSécuriséTextDisplayed()) {
				Report.pass("'Paiement sécurisé' text on header on Payment Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("'Paiement sécurisé' text on header on Payment Page.", getScreenshot(getDriver()));
			}
	
			String actualServiceClientàVotreéCouteImage = headerFooter.getServiceClientàVotreéCouteImage();
	
			if (actualServiceClientàVotreéCouteImage.equals(expectedServiceClientImageSrc)) {
				Report.pass("'" + expectedServiceClientImageSrc + "' image on Header Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail(
						"Expected <b>'" + expectedServiceClientImageSrc + "'</b> but found <b>'"
								+ actualServiceClientàVotreéCouteImage + "'</b> image on Header Page.",
						getScreenshot(getDriver()));
			}
	
			if (headerFooter.verifyServiceClientàVotreéCouteTextDisplayed()) {
				Report.pass("'Service client à votre écoute' text on header on Payment Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail("'Service client à votre écoute' text on header on Payment Page.",
						getScreenshot(getDriver()));
			}
	
			// if (actualProductBreadCrumb.equals(expectedProductBreadCrumb)) {
			// Report.pass("'" + expectedProductBreadCrumb + "' text on Payment
			// Page.",getScreenshot(getDriver()));
			// } else {
			// Report.fail("Expected <b>'" + expectedProductBreadCrumb + "'</b> but found
			// <b>'" + actualProductBreadCrumb + "'</b> text on Payment Page.",
			// getScreenshot(getDriver()));
			// }
	
			if (actualProductTitle.equalsIgnoreCase(expectedProductTitle)) {
				Report.pass("'" + expectedProductTitle + "' text on Payment Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("Expected <b>'" + expectedProductTitle + "'</b> but found <b>'" + actualProductTitle
						+ "'</b> text on Payment Page.", getScreenshot(getDriver()));
			}
	
			if (productDescriptionPage.isProductImageDisplayed()) {
				Report.pass("'Product image' on Payment Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("'Product image' on Payment Page.", getScreenshot(getDriver()));
			}
	
			if (actualProductImageSrc.equals(expectedProductImageSrc)) {
				Report.pass("'" + expectedProductImageSrc + "' image on Payment Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail(
						"Expected <b>'" + expectedProductImageSrc + "'</b> but found <b>'"
								+ actualProductImageSrc + "'</b> image on Payment Page.",
						getScreenshot(getDriver()));
			}
	
			if (productDescriptionPage.isProductPriceTagDisplayed()) {
				Report.pass("'Product price tag' image on Payment Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("'Product price tag' image on Payment Page.", getScreenshot(getDriver()));
			}
	
			if (actualProductPriceTagImageSrc.equals(expectedProductPriceTagImageSrc)) {
				Report.pass("'" + expectedProductPriceTagImageSrc + "' image on Payment Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail(
						"Expected <b>'" + expectedProductPriceTagImageSrc + "'</b> but found <b>'"
								+ actualProductPriceTagImageSrc + "'</b> image on Payment Page.",
						getScreenshot(getDriver()));
			}
	
			String actualPaymentTitle = paymentPage.getPaymentTitle();
	
			if (actualPaymentTitle.equals(expectedPaymentTitle)) {
				Report.pass("'" + expectedPaymentTitle + "' text on Payment Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("Expected <b>'" + expectedPaymentTitle + "'</b> but found <b>'" + actualPaymentTitle
						+ "'</b> text on Payment Page.", getScreenshot(getDriver()));
			}
	
			String expectedCardNumberPlaceholder = "N° de la carte";
			String expectedCCVPlaceholder = "Cryptogramme";
			String expectedPayerButtonText = "Payer";
	
			if (paymentPage.isCardNumberIconDisplayed()) {
				Report.pass("'Card Number' icon on Payment Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("'Card Number' icon on Payment Page.", getScreenshot(getDriver()));
			}
	
			String actualCardNumberPlaceholder = paymentPage.getCardNumberTextboxPlaceholder();
	
			if (actualCardNumberPlaceholder.equals(expectedCardNumberPlaceholder)) {
				Report.pass("'" + expectedCardNumberPlaceholder + "' textbox on Payment Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail(
						"Expected <b>'" + expectedCardNumberPlaceholder + "'</b> but found <b>'"
								+ actualCardNumberPlaceholder + "'</b> textbox on Payment Page.",
						getScreenshot(getDriver()));
			}
	
			if (paymentPage.isCardMonthTextboxDisplayed()) {
				Report.pass("'Month' dropdown on Payment Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("'Month' dropdown on Payment Page.", getScreenshot(getDriver()));
			}
	
			if (paymentPage.isCardYearTextboxDisplayed()) {
				Report.pass("'Year' dropdown on Payment Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("'Year' dropdown on Payment Page.", getScreenshot(getDriver()));
			}
	
			if (paymentPage.isCcvIconDisplayed()) {
				Report.pass("'CCV' icon on Payment Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("'CCV' icon on Payment Page.", getScreenshot(getDriver()));
			}
	
			String actualCcvTextboxPlaceholder = paymentPage.getCcvTextboxPlaceholder();
	
			if (actualCcvTextboxPlaceholder.equals(expectedCCVPlaceholder)) {
				Report.pass("'" + expectedCCVPlaceholder + "' textbox on Payment Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail(
						"Expected <b>'" + expectedCCVPlaceholder + "'</b> but found <b>'"
								+ actualCcvTextboxPlaceholder + "'</b> textbox on Payment Page.",
						getScreenshot(getDriver()));
			}
	
			if (paymentPage.isPayerButtonDisplayed()) {
				Report.pass("'Payer' button on Payment Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("'Payer' button on Payment Page.", getScreenshot(getDriver()));
			}
	
			String actualPayerButtonText = paymentPage.getPayerButtonText();
	
			if (actualPayerButtonText.contains(expectedPayerButtonText)) {
				Report.pass("'" + expectedPayerButtonText + "' button on Payment Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail(
						"Expected <b>'" + expectedPayerButtonText + "'</b> but found <b>'"
								+ actualPayerButtonText + "'</b> button on Payment Page.",
						getScreenshot(getDriver()));
			}
	
			// if (paymentPage.isPaymentCardIconsDisplayed()) {
			// Report.pass("'Payment Card' icons on Payment Page.",
			// getScreenshot(getDriver()));
			// } else {
			// Report.fail("'Payment Card' icons on Payment Page.",
			// getScreenshot(getDriver()));
			// }
	
			// // String expectPaymentCardIconsImageSrc =
			// "https://boutik-prive.fr/assets/boutik-prive.fr/img/offers/bucket/485/fr_1729847807.png";
			// String actualPaymentCardIconsImageSrc =
			// paymentPage.getPaymentCardIconsImageSrc();
			// // if (actualPaymentCardIconsImageSrc.equals(expectPaymentCardIconsImageSrc))
			// {
			// Report.pass("'" + expectPaymentCardIconsImageSrc + "' image on Payment
			// Page.", getScreenshot(getDriver()));
			// } else {
			// Report.fail( // "Expected <b>'" + expectPaymentCardIconsImageSrc + "'</b> but
			// found <b>'" + actualPaymentCardIconsImageSrc +"'</b> image on Payment Page.",
			// getScreenshot(getDriver()));
			// }
	
			if (actualRedRibbonText.equals(expectedRedribbonText)) {
				Report.pass("'" + expectedRedribbonText + "' red ribbon text on Payment Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail("Expected <b>'" + expectedRedribbonText + "'</b> but found <b>'"
						+ actualRedRibbonText + "'</b> red ribbon text on Payment Page.",
						getScreenshot(getDriver()));
			}
	
			// String expectedBeforeTimerTextOnPayment =
			// productDescriptionPage.getTimerText();
			// String actualAfterTimerTextOnPayment = productDescriptionPage.getTimerText();
			// // if
			// (!actualAfterTimerTextOnPayment.equals(expectedBeforeTimerTextOnPayment)) {
			// Report.pass("'Timer' is working on Payment Page.",
			// getScreenshot(getDriver()));
			// } else {
			// Report.fail( // "Expected <b>'" + expectedBeforeTimerTextOnPayment + "'</b>
			// but found <b>'" + actualAfterTimerTextOnPayment + "'</b> Timer text on
			// Payment Page.", getScreenshot(getDriver()));
			// }
	
			if (productDescriptionPage.isFeature1ImageDisplayed()) {
				Report.pass("'Feature 1' image on Payment Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("'Feature 1' image on Payment Page.", getScreenshot(getDriver()));
			}
	
			if (actualShippingImage.equals(expectedShippingImage)) {
				Report.pass("'" + expectedShippingImage + "' image on Payment Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail("Expected <b>'" + expectedShippingImage + "'</b> but found <b>'"
						+ actualShippingImage + "'</b> image on Payment Page.", getScreenshot(getDriver()));
			}
	
			if (actualFeature1Text.equals(expectedFeature1Text)) {
				Report.pass("'" + expectedFeature1Text + "' feature 1 text on Payment Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail("Expected <b>'" + expectedFeature1Text + "'</b> but found <b>'" + actualFeature1Text
						+ "'</b> feature 1 text on Payment Page.", getScreenshot(getDriver()));
			}
	
			if (productDescriptionPage.isFeature2ImageDisplayed()) {
				Report.pass("'Feature 2' image on Payment Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("'Feature 2' image on Payment Page.", getScreenshot(getDriver()));
			}
	
			if (actualReturnImage.equals(expectedReturnImage)) {
				Report.pass("'" + expectedReturnImage + "' image on Payment Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("Expected <b>'" + expectedReturnImage + "'</b> but found <b>'" + actualReturnImage
						+ "'</b> image on Payment Page.", getScreenshot(getDriver()));
			}
	
			if (actualFeature2Text.equals(expectedFeature2Text)) {
				Report.pass("'" + expectedFeature2Text + "' feature 2 text on Payment Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail("Expected <b>'" + expectedFeature2Text + "'</b> but found <b>'" + actualFeature2Text
						+ "'</b> feature 2 text on Payment Page.", getScreenshot(getDriver()));
			}
	
			if (productDescriptionPage.isFeature3ImageDisplayed()) {
				Report.pass("'Feature 3' image on Payment Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("'Feature 3' image on Payment Page.", getScreenshot(getDriver()));
			}
	
			if (actualHelpImage.equals(expectedHelpImage)) {
				Report.pass("'" + expectedHelpImage + "' image on Payment Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("Expected <b>'" + expectedHelpImage + "'</b> but found <b>'" + actualHelpImage
						+ "'</b> image on Payment Page.", getScreenshot(getDriver()));
			}
	
			if (actualFeature3Text.equals(expectedFeature3Text)) {
				Report.pass("'" + expectedFeature3Text + "' feature 3 text on Payment Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail("Expected <b>'" + expectedFeature3Text + "'</b> but found <b>'" + actualFeature3Text
						+ "'</b> feature 3 text on Payment Page.", getScreenshot(getDriver()));
			}
	
			if (productDescriptionPage.isFeature4ImageDisplayed()) {
				Report.pass("'Feature 4' image on Payment Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("'Feature 4' image on Payment Page.", getScreenshot(getDriver()));
			}
	
			if (actualReductionImage.equals(expectedReductionImage)) {
				Report.pass("'" + expectedReductionImage + "' image on Payment Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail("Expected <b>'" + expectedReductionImage + "'</b> but found <b>'"
						+ actualReductionImage + "'</b> image on Payment Page.", getScreenshot(getDriver()));
			}
	
			if (actualFeature4Text.equals(expectedFeature4Text)) {
				Report.pass("'" + expectedFeature4Text + "' feature 4 text on Payment Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail("Expected <b>'" + expectedFeature4Text + "'</b> but found <b>'" + actualFeature4Text
						+ "'</b> feature 4 text on Payment Page.", getScreenshot(getDriver()));
			}
	
			if (actualHowItWorksText.equals(expectedHowItWorksText)) {
				Report.pass("'" + expectedHowItWorksText + "' How it works text on Payment Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail("Expected <b>'" + expectedHowItWorksText + "'</b> but found <b>'"
						+ actualHowItWorksText + "'</b> How it works text on Payment Page.",
						getScreenshot(getDriver()));
			}
	
			if (actualHowItWorks1Image.equals(expectedHowItWorks1Image)) {
				Report.pass("'" + expectedHowItWorks1Image + "' image on Payment Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail(
						"Expected <b>'" + expectedHowItWorks1Image + "'</b> but found <b>'"
								+ actualHowItWorks1Image + "'</b> image on Payment Page.",
						getScreenshot(getDriver()));
			}
	
			if (actualHowItWorks1Text.equals(expectedHowItWorks1Text)) {
				Report.pass("'" + expectedHowItWorks1Text + "' How it works 1 text on Payment Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail(
						"Expected <b>'" + expectedHowItWorks1Text + "'</b> but found <b>'"
								+ actualHowItWorks1Text + "'</b> How it works 1 text on Payment Page.",
						getScreenshot(getDriver()));
			}
	
			if (actualHowItWorks2Image.equals(expectedHowItWorks2Image)) {
				Report.pass("'" + expectedHowItWorks2Image + "' image on Payment Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail(
						"Expected <b>'" + expectedHowItWorks2Image + "'</b> but found <b>'"
								+ actualHowItWorks2Image + "'</b> image on Payment Page.",
						getScreenshot(getDriver()));
			}
	
			if (actualHowItWorks2Text.equals(expectedHowItWorks2Text)) {
				Report.pass("'" + expectedHowItWorks2Text + "' How it works 2 text Payment Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail(
						"Expected <b>'" + expectedHowItWorks2Text + "'</b> but found <b>'"
								+ actualHowItWorks2Text + "'</b> How it works 2 text on Payment Page.",getScreenshot(getDriver()));
			}
	
			if (actualHowItWorks3Image.equals(expectedHowItWorks3Image)) {
				Report.pass("'" + expectedHowItWorks3Image + "' image on Payment Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail(
						"Expected <b>'" + expectedHowItWorks3Image + "'</b> but found <b>'"
								+ actualHowItWorks3Image + "'</b> image on Payment Page.",
						getScreenshot(getDriver()));
			}
	
			if (actualHowItWorks3Text.equals(expectedHowItWorks3Text)) {
				Report.pass("'" + expectedHowItWorks3Text + "' How it works 3 text on Payment Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail(
						"Expected <b>'" + expectedHowItWorks3Text + "'</b> but found <b>'"
								+ actualHowItWorks3Text + "'</b> How it works 3 text on Payment Page.",
						getScreenshot(getDriver()));
			}
	
			if (actualHowItWorks4Image.equals(expectedHowItWorks4Image)) {
				Report.pass("'" + expectedHowItWorks4Image + "' image on Payment Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail(
						"Expected <b>'" + expectedHowItWorks4Image + "'</b> but found <b>'"
								+ actualHowItWorks4Image + "'</b> image on Payment Page.",
						getScreenshot(getDriver()));
			}
	
			if (actualHowItWorks4Text.equals(expectedHowItWorks4Text)) {
				Report.pass("'" + expectedHowItWorks4Text + "' How it works 4 text on Payment Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail(
						"Expected <b>'" + expectedHowItWorks4Text + "'</b> but found <b>'"
								+ actualHowItWorks4Text + "'</b> How it works 4 text on Payment Page.",
						getScreenshot(getDriver()));
			}
	
			if (actualWhatIsItemQuestionText.equals(expectedWhatIsItemQuestionText)) {
				Report.pass(
						"'" + expectedWhatIsItemQuestionText + "' What is item question text on Payment Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail("Expected <b>'" + expectedWhatIsItemQuestionText + "'</b> but found <b>'"
						+ actualWhatIsItemQuestionText + "'</b> What is item question text on Payment Page.",
						getScreenshot(getDriver()));
			}
	
			if (actualHowItWorksImage.equals(expectedHowItWorksImage)) {
				Report.pass("'" + expectedHowItWorksImage + "' image on Payment Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail(
						"Expected <b>'" + expectedHowItWorksImage + "'</b> but found <b>'"
								+ actualHowItWorksImage + "'</b> image on Payment Page.",
						getScreenshot(getDriver()));
			}
	
			if (productDescriptionPage.isWhatIsItem1ImageDisplayed()) {
				Report.pass("'What is item 1' image on Payment Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("'What is item 1' image on Payment Page.", getScreenshot(getDriver()));
			}
	
			if (actualWhatIsItemQuestion1Text.equals(expectedWhatIsItemQuestion1Text)) {
				Report.pass("'" + expectedWhatIsItemQuestion1Text + "' Question 1 text on Payment Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail(
						"Expected <b>'" + expectedWhatIsItemQuestion1Text + "'</b> but found <b>'"
								+ actualWhatIsItemQuestion1Text + "'</b> Question 1 text on Payment Page.",
						getScreenshot(getDriver()));
			}
	
			if (actualAnswer1Text.equals(expectedAnswer1Text)) {
				Report.pass("'" + expectedAnswer1Text + "' Answer 1 text on Payment Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail("Expected <b>'" + expectedAnswer1Text + "'</b> but found <b>'" + actualAnswer1Text
						+ "'</b> Answer 1 text on Payment Page.", getScreenshot(getDriver()));
			}
	
			if (productDescriptionPage.isWhatIsItem2ImageDisplayed()) {
				Report.pass("'What is item 2' image on Payment Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("'What is item 2' image on Payment Page.", getScreenshot(getDriver()));
			}
	
			if (actualWhatIsItem2Image.equals(expectedHowItWorksImage)) {
				Report.pass("'" + expectedHowItWorksImage + "' image on Payment Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail(
						"Expected <b>'" + expectedHowItWorksImage + "'</b> but found <b>'"
								+ actualWhatIsItem2Image + "'</b> image on Payment Page.",
						getScreenshot(getDriver()));
			}
	
			if (actualWhatIsItemQuestion2Text.equals(expectedWhatIsItemQuestion2Text)) {
				Report.pass("'" + expectedWhatIsItemQuestion2Text + "' Question 2 text on Payment Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail(
						"Expected <b>'" + expectedWhatIsItemQuestion2Text + "'</b> but found <b>'"
								+ actualWhatIsItemQuestion2Text + "'</b> Question 2 text on Payment Page.",
						getScreenshot(getDriver()));
			}
	
			if (actualAnswer2Text.equals(expectedAnswer2Text)) {
				Report.pass("'" + expectedAnswer2Text + "' Answer 2 text on Payment Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail("Expected <b>'" + expectedAnswer2Text + "'</b> but found <b>'" + actualAnswer2Text
						+ "'</b> Answer 2 text on Payment Page.", getScreenshot(getDriver()));
			}
	
			if (productDescriptionPage.isWhatIsItem3ImageDisplayed()) {
				Report.pass("'What is item 3' image on Payment Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("'What is item 3' image on Payment Page.", getScreenshot(getDriver()));
			}
	
			if (actualWhatIsItem3Image.equals(expectedHowItWorksImage)) {
				Report.pass("'" + expectedHowItWorksImage + "' image on Payment Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail(
						"Expected <b>'" + expectedHowItWorksImage + "'</b> but found <b>'"
								+ actualWhatIsItem3Image + "'</b> image on Payment Page.",
						getScreenshot(getDriver()));
			}
	
			if (actualWhatIsItemQuestion3Text.equals(expectedWhatIsItemQuestion3Text)) {
				Report.pass("'" + expectedWhatIsItemQuestion3Text + "' Question 3 text on Payment Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail(
						"Expected <b>'" + expectedWhatIsItemQuestion3Text + "'</b> but found <b>'"
								+ actualWhatIsItemQuestion3Text + "'</b> Question 3 text on Payment Page.",
						getScreenshot(getDriver()));
			}
	
			if (actualAnswer3Text.equals(expectedAnswer3Text)) {
				Report.pass("'" + expectedAnswer3Text + "' Answer 3 text on Payment Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail("Expected <b>'" + expectedAnswer3Text + "'</b> but found <b>'" + actualAnswer3Text
						+ "'</b> Answer 3 text on Payment Page.", getScreenshot(getDriver()));
			}
	
			if (productDescriptionPage.isWhatIsItem4ImageDisplayed()) {
				Report.pass("'What is item 4' image on Payment Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("'What is item 4' image on Payment Page.", getScreenshot(getDriver()));
			}
	
			if (actualWhatIsItem4Image.equals(expectedHowItWorksImage)) {
				Report.pass("'" + expectedHowItWorksImage + "' image on Payment Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail(
						"Expected <b>'" + expectedHowItWorksImage + "'</b> but found <b>'"
								+ actualWhatIsItem4Image + "'</b> image on Payment Page.",
						getScreenshot(getDriver()));
			}
	
			if (actualWhatIsItemQuestion4Text.equals(expectedWhatIsItemQuestion4Text)) {
				Report.pass("'" + expectedWhatIsItemQuestion4Text + "' Question 4 text on Payment Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail(
						"Expected <b>'" + expectedWhatIsItemQuestion4Text + "'</b> but found <b>'"
								+ actualWhatIsItemQuestion4Text + "'</b> Question 4 text on Payment Page.",
						getScreenshot(getDriver()));
			}
	
			if (actualAnswer4Text.equals(expectedAnswer4Text)) {
				Report.pass("'" + expectedAnswer4Text + "' Answer 4 text on Payment Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail("Expected <b>'" + expectedAnswer4Text + "'</b> but found <b>'" + actualAnswer4Text
						+ "'</b> Answer 4 text on Payment Page.", getScreenshot(getDriver()));
			}
	
			if (productDescriptionPage.isWhatIsItem5ImageDisplayed()) {
				Report.pass("'What is item 5' image on Payment Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("'What is item 5' image on Payment Page.", getScreenshot(getDriver()));
			}
	
			if (actualWhatIsItem5Image.equals(expectedHowItWorksImage)) {
				Report.pass("'" + expectedHowItWorksImage + "' image on Payment Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail(
						"Expected <b>'" + expectedHowItWorksImage + "'</b> but found <b>'"
								+ actualWhatIsItem5Image + "'</b> image on Payment Page.",
						getScreenshot(getDriver()));
			}
	
			if (actualWhatIsItemQuestion5Text.equals(expectedWhatIsItemQuestion5Text)) {
				Report.pass("'" + expectedWhatIsItemQuestion5Text + "' Question 5 text on Payment Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail(
						"Expected <b>'" + expectedWhatIsItemQuestion5Text + "'</b> but found <b>'"
								+ actualWhatIsItemQuestion5Text + "'</b> Question 5 text on Payment Page.",
						getScreenshot(getDriver()));
			}
	
			if (actualAnswer5Text.equals(expectedAnswer5Text)) {
				Report.pass("'" + expectedAnswer5Text + "' Answer 5 text on Payment Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail("Expected <b>'" + expectedAnswer5Text + "'</b> but found <b>'" + actualAnswer5Text
						+ "'</b> Answer 5 text on Payment Page.", getScreenshot(getDriver()));
			}
	
			if (productDescriptionPage.isWhatIsItem6ImageDisplayed()) {
				Report.pass("'What is item 6' image on Payment Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("'What is item 6' image on Payment Page.", getScreenshot(getDriver()));
			}
	
			if (actualWhatIsItem6Image.equals(expectedHowItWorksImage)) {
				Report.pass("'" + expectedHowItWorksImage + "' image on Payment Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail(
						"Expected <b>'" + expectedHowItWorksImage + "'</b> but found <b>'"
								+ actualWhatIsItem6Image + "'</b> image on Payment Page.",
						getScreenshot(getDriver()));
			}
	
			if (actualWhatIsItemQuestion6Text.equals(expectedWhatIsItemQuestion6Text)) {
				Report.pass("'" + expectedWhatIsItemQuestion6Text + "' Question 6 text on Payment Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail(
						"Expected <b>'" + expectedWhatIsItemQuestion6Text + "'</b> but found <b>'"
								+ actualWhatIsItemQuestion6Text + "'</b> Question 6 text on Payment Page.",
						getScreenshot(getDriver()));
			}
	
			if (actualAnswer6Text.equals(expectedAnswer6Text)) {
				Report.pass("'" + expectedAnswer6Text + "' Answer 6 text on Payment Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail("Expected <b>'" + expectedAnswer6Text + "'</b> but found <b>'" + actualAnswer6Text
						+ "'</b> Answer 6 text on Payment Page.", getScreenshot(getDriver()));
			}
	
			if (actualFooterContentText.equals(expectedFooterContentText)) {
				Report.pass("'" + expectedFooterContentText + "' Footer text on Payment Page.",
						getScreenshot(getDriver()));
			} else {
				Report.fail(
						"Expected <b>'" + expectedFooterContentText + "'</b> but found <b>'"
								+ actualFooterContentText + "'</b> Footer text on Payment Page.",
						getScreenshot(getDriver()));
			}
	
			String cardNumber = customer.getCardNumber();
			String cvvNumber = customer.getCvvNumber();
			String cardExpireMonth = customer.getCardExpireMonth();
			String cardExpireYear = customer.getCardExpireYear();
	
			Report.info("Fill valid card details and click on payer button on Payment page.");
	
			paymentPage.fillUpCardDetails(cardNumber, cvvNumber, cardExpireMonth, cardExpireYear, false);
	
			Report.pass("<b><u>Data Entered: </u></b>", getScreenshot(getDriver()));
			Report.pass("<b>Customer Card Number : </b>" + cardNumber);
			Report.pass("<b>Customer Cvv Number : </b>" + cvvNumber);
			Report.pass("<b>Customer Card Expire Month : </b>" + cardExpireMonth);
			Report.pass("<b>Customer Card Expire Year : </b>" + cardExpireYear);
	
			Report.info("Click on Payer button on Payment Page.");
			paymentPage.clickPayerButton();
	
			// Step 3 : Merci Page
	
			MerciPage merciPage = new MerciPage(getDriver());
	
			String expectedMerciPageURL = "https://boutik-prive.fr/fr/ss/confirmation-des-donnees.html";
			// "https://boutik-prive.fr/fr/sh/confirmation";
			actualCurrentURL = headerFooter.getURL();
	
			if (actualCurrentURL.contains(expectedMerciPageURL)) {
				Report.pass("'" + actualCurrentURL + "' url on Merci Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("Expected <b>'" + expectedMerciPageURL + "'</b> but found <b>'" + actualCurrentURL
						+ "'</b> url on Merci Page.", getScreenshot(getDriver()));
			}
	
			if (merciPage.isMerciTextDisplayed()) {
				Report.pass("'Merci !' text on Merci Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("'Merci !' text on Merci Page.", getScreenshot(getDriver()));
			}
			
			String actualMerciContentText = merciPage.getMerciContentText();
			
			String merciContent0 = actualMerciContentText.split("passe ")[0].toString() + "passe ";
			String merciContent1 = actualMerciContentText.split("passe ")[1].toString();
			String passwordText = merciContent1.split("\r\n")[0].toString();
				
			System.out.println("splitregex 0 : " +merciContent0 + "passe ");
			System.out.println("splitregex 1 : " +merciContent1);
			
			System.out.println("merciContent1 1 : " +merciContent1);
			System.out.println("passwordText 11 : " +passwordText);
			
			if (merciContent0.equals(expectedMerciContent1)) {
				Report.pass("'" + expectedMerciContent1 + "' text on Merci Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("Expected <b>'" + expectedMerciContent1 + "'</b> but found <b>'"
						+ merciContent0 + "'</b> text on Merci Page.", getScreenshot(getDriver()));
			}
			
			if(passwordText.matches(expectedPasswordRegexPattern)) {
				System.out.println("regex Matched");
				Report.pass("'" + passwordText + "' text on Merci Page.", getScreenshot(getDriver()));
			} else {
				System.out.println("regex Not Matches");
				Report.fail("Expected <b>'" + passwordText + "'</b> but found <b>'"
						+ expectedPasswordRegexPattern + "'</b> text on Merci Page.", getScreenshot(getDriver()));
			}
			
			if (merciContent1.equals(expectedMerciContent2)) {
				Report.pass("'" + expectedMerciContent2 + "' text on Merci Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("Expected <b>'" + expectedMerciContent2 + "'</b> but found <b>'"
						+ merciContent1 + "'</b> text on Merci Page.", getScreenshot(getDriver()));
			}
			
//			String actualMerciContentText = merciPage.getMerciContentText();
//	
//			if (actualMerciContentText.equals(expectedMerciContent)) {
//				Report.pass("'" + expectedMerciContent + "' text on Merci Page.", getScreenshot(getDriver()));
//			} else {
//				Report.fail("Expected <b>'" + expectedMerciContent + "'</b> but found <b>'"
//						+ actualMerciContentText + "'</b> text on Merci Page.", getScreenshot(getDriver()));
//			}
			
			int range = i;
			System.out.println("range: " + range);
			System.out.println("range1: " + "A" + range);
			GetSheetData.updateCellValue(list1, "A" + range);			
			Generics.pause(15);
		
		} else {
			System.out.println("LP Test Completed");
		}
	}
	} catch (Exception ex) {
		try {
			ex.printStackTrace();
			System.out.println(ex.toString());
			System.out.println(ex.getMessage());
			Report.fail(ex.toString(), getScreenshot(getDriver()));
			Assert.fail(ex.toString());

		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (TimeoutException t) {
			t.printStackTrace();
		}
	}
}

}
