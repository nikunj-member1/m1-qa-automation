package com.member1.tests.lp;

import java.io.IOException;

import org.openqa.selenium.TimeoutException;
import org.testng.Assert;
import org.testng.annotations.Test;

import com.member1.framework.common.Generics;
import com.member1.framework.drivermanager.BaseDriverManager;
import com.member1.framework.utilities.Report;
import com.member1.pages.customer.headerfooter.HeaderFooter;
import com.member1.pages.customer.maildrop.MailDropPage;
import com.member1.pages.customer.product.BasketPage;
import com.member1.pages.customer.product.BecomePrivilageMemberPage;
import com.member1.pages.customer.product.MerciPage;
import com.member1.pages.customer.product.MesPrixHomePage;
import com.member1.pages.customer.product.PaymentPage;
import com.member1.pages.customer.product.ProductDetailsPage;
import com.member1.pages.data.DataProvider;

public class ChecklistMesPrixTest extends BaseDriverManager {

//	@Test
	public void VerifyEmailAfterPurchaseMembership() {

		try {

			Report.setTest(extent.createTest("TC_PSP_01 - Subcribe from the Home page & TC_PSP_02 - Check if you receive email after subscription"));

			Report.info("Open " + PRODUCT_URL + " in " + BROWSER_NAME + " browser.");

			MesPrixHomePage mesPrixHomePage = new MesPrixHomePage(getDriver());

			mesPrixHomePage.navigateURL(PRODUCT_URL);

			if (mesPrixHomePage.isJeDeviensMembrePrivilègeButtonDisplayed()) {
				Report.pass("'Je Deviens Membre Privilège' button on Home Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("'Je Deviens Membre Privilège' button on Home Page.", getScreenshot(getDriver()));
			}

			mesPrixHomePage.clickJeDeviensMembrePrivilègeButton();
			Report.pass("Click on 'Je Deviens Membre Privilège' button on Home Page.", getScreenshot(getDriver()));

			BecomePrivilageMemberPage becomePrivilageMemberPage = new BecomePrivilageMemberPage(getDriver());

			if (becomePrivilageMemberPage.isDevenirMembrePrivilegeTitleTextDisplayed()) {
				Report.pass("'Devenir Membre Privilege' title on Member Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("'Devenir Membre Privilege' title on Member Page.", getScreenshot(getDriver()));
			}

			if (becomePrivilageMemberPage.isFormTitleTextDisplayed()) {
				Report.pass("'Devenir Membre Privilege' Form title on Member Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("'Devenir Membre Privilege' Form title on Member Page.", getScreenshot(getDriver()));
			}

			if (becomePrivilageMemberPage.isPrenomDisplayed()) {
				Report.pass("'Prenom' textbox on Member Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("'Prenom' textbox on Member Page.", getScreenshot(getDriver()));
			}

			if (becomePrivilageMemberPage.isNomDisplayed()) {
				Report.pass("'Nom' textbox on Member Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("'Nom' textbox on Member Page.", getScreenshot(getDriver()));
			}

			if (becomePrivilageMemberPage.isEmailDisplayed()) {
				Report.pass("'Email' textbox on Member Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("'Email' textbox on Member Page.", getScreenshot(getDriver()));
			}

			if (becomePrivilageMemberPage.isAddressDisplayed()) {
				Report.pass("'Address' textbox on Member Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("'Address' textbox on Member Page.", getScreenshot(getDriver()));
			}

			if (becomePrivilageMemberPage.isCodePostalDisplayed()) {
				Report.pass("'Code Postal' textbox on Member Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("'Code Postal' textbox on Member Page.", getScreenshot(getDriver()));
			}

			if (becomePrivilageMemberPage.isVilleDisplayed()) {
				Report.pass("'Ville' textbox on Member Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("'Ville' textbox on Member Page.", getScreenshot(getDriver()));
			}

			if (becomePrivilageMemberPage.isTelephoneDisplayed()) {
				Report.pass("'Telephone' textbox on Member Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("'Telephone' textbox on Member Page.", getScreenshot(getDriver()));
			}

			if (becomePrivilageMemberPage.isConditionCheckboxDisplayed()) {
				Report.pass("'Condition' checkbox on Member Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("'Condition' checkbox on Member Page.", getScreenshot(getDriver()));
			}

			if (becomePrivilageMemberPage.isConditionTextDisplayed()) {
				Report.pass("'Condition' text on Member Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("'Condition' text on Member Page.", getScreenshot(getDriver()));
			}

			if (becomePrivilageMemberPage.isJeDeviensMembrePrivilegeButtonDisplayed()) {
				Report.pass("'Je Deviens Membre Privilege' button on Member Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("'Je Deviens Membre Privilege' button on Member Page.", getScreenshot(getDriver()));
			}

			Report.info("Fill up the form and click on Submit button on Member Page.");

			DataProvider customer = new DataProvider();
			String customerFirstName = customer.getFirstName();
			String customerLastName = customer.getLastName();
			String customerEmail = customer.getEmail();
			String customerAddress = customer.getCountryName();
			String customerCodePostal = customer.getPostalCode();
			String customerVille = customer.getCityName();
			String customerTelephone = customer.getMobileNumber();

			becomePrivilageMemberPage.fillUpForm(customerFirstName, customerLastName, customerEmail, customerAddress,
					customerCodePostal, customerVille, customerTelephone, false);

			Report.pass("<b><u>Data Entered: </u></b>", getScreenshot(getDriver()));
			Report.pass("<b>Customer prenom : </b>" + customerFirstName);
			Report.pass("<b>Customer nom : </b>" + customerLastName);
			Report.pass("<b>Customer email : </b>" + customerEmail);
			Report.pass("<b>Customer address : </b>" + customerAddress);
			Report.pass("<b>Customer code postal : </b>" + customerCodePostal);
			Report.pass("<b>Customer ville : </b>" + customerVille);
			Report.pass("<b>Customer telephone : </b>" + customerTelephone);

			Report.info("Click on Submit button on Member Page.");
			becomePrivilageMemberPage.clickJeDeviensMembrePrivilegeButton();

			PaymentPage paymentPage = new PaymentPage(getDriver());

			if (becomePrivilageMemberPage.isDevenirMembrePrivilegeTitleTextDisplayed()) {
				Report.pass("'Devenir Membre Privilege' title on Member Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("'Devenir Membre Privilege' title on Member Page.", getScreenshot(getDriver()));
			}

			if (becomePrivilageMemberPage.isFormTitleTextDisplayed()) {
				Report.pass("'Devenir Membre Privilege' Form title on Member Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("'Devenir Membre Privilege' Form title on Member Page.", getScreenshot(getDriver()));
			}

			if (paymentPage.isCardHolderNameTextboxDisplayed()) {
				Report.pass("'Card Holder Name' textbox on Payment Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("'Card Holder Name' textbox on Payment Page.", getScreenshot(getDriver()));
			}

			if (paymentPage.isVisaCardIconDisplayed()) {
				Report.pass("'Visa' icon on Payment Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("'Visa' icon on Payment Page.", getScreenshot(getDriver()));
			}

			if (paymentPage.isMasterCardIconDisplayed()) {
				Report.pass("'Master' icon on Payment Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("'Master' icon on Payment Page.", getScreenshot(getDriver()));
			}

			if (paymentPage.isCbIconDisplayed()) {
				Report.pass("'CB' icon on Payment Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("'CB' icon on Payment Page.", getScreenshot(getDriver()));
			}
	
			String actualCardNumberPlaceholder = paymentPage.getCardNumberTextboxPlaceholder();
			String expectedCardNumberPlaceholder = "N° de la carte";	

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

			String actualCcvTextboxPlaceholder = paymentPage.getCcvTextboxPlaceholder();
			String expectedCCVPlaceholder = "Cryptogramme";

			if (actualCcvTextboxPlaceholder.equals(expectedCCVPlaceholder)) {
				Report.pass("'" + expectedCCVPlaceholder + "' textbox on Payment Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("Expected <b>'" + expectedCCVPlaceholder + "'</b> but found <b>'"
						+ actualCcvTextboxPlaceholder + "'</b> textbox on Payment Page.", getScreenshot(getDriver()));
			}

			if (paymentPage.isCommanderButtonDisplayed()) {
				Report.pass("'Commander' button on Payment Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("'Commander' button on Payment Page.", getScreenshot(getDriver()));
			}

			String cardNumber = customer.getCardNumber();
			String cvvNumber = customer.getCvvNumber();
			String cardExpireMonth = customer.getCardExpireMonth();
			String cardExpireYear = "2027";
			String subscriptionPlanName = "S’abonner mensuellement pour 29,90€/mois";

			Report.info("Fill valid card details and click on payer button on Payment page.");

			paymentPage.fillUpCardDetails(cardNumber, cvvNumber, cardExpireMonth, cardExpireYear, subscriptionPlanName,
					false);

			Report.pass("<b><u>Data Entered: </u></b>", getScreenshot(getDriver()));
			Report.pass("<b>Customer Card Number : </b>" + cardNumber);
			Report.pass("<b>Customer Cvv Number : </b>" + cvvNumber);
			Report.pass("<b>Customer Card Expire Month : </b>" + cardExpireMonth);
			Report.pass("<b>Customer Card Expire Year : </b>" + cardExpireYear);
			Report.pass("<b>Customer Subscription Plan : </b>" + subscriptionPlanName);

			Report.info("Click on Commander button on Payment Page.");
			paymentPage.clickOnCommanderButton();

			MerciPage merciPage = new MerciPage(getDriver());

			if (merciPage.isMerciHeaderTextDisplayed()) {
				Report.pass("'Merci pour votre confiance et votre achat ! Mes-Prix' text on Merci Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("'Merci pour votre confiance et votre achat ! Mes-Prix' text on Merci Page.", getScreenshot(getDriver()));
			}

			if (merciPage.isDecoureznosproduitsButtonDisplayed()) {
				Report.pass("'Decourez nos produits' button on Merci Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("'Decourez nos produits' button on Merci Page.", getScreenshot(getDriver()));
			}	
			
			MailDropPage maildrop = new MailDropPage(getDriver());
			
			Report.info("Open 'https://maildrop.cc/inbox/?mailbox=" + customerEmail +"' in " + BROWSER_NAME + " browser.");
			maildrop.navigateToMailDrop(customerEmail);
						
			Generics.pause(5);		
			
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

	
	@Test
	public void VerifyEmailAfterPurchaseProduct() {
		try {

			Report.setTest(extent.createTest("TC_PSP_07 - Test if on the user side you have received an email of confirmation order"));

			Report.info("Open 'https://mes-prix.com/product/ampoule-led-portable-avec-cordon-bulby-innovagoods/' in " + BROWSER_NAME + " browser.");

			MesPrixHomePage mesPrixHomePage = new MesPrixHomePage(getDriver());

			mesPrixHomePage.navigateURL("https://mes-prix.com/product/ampoule-led-portable-avec-cordon-bulby-innovagoods/");
				
			ProductDetailsPage productDetailsPage = new ProductDetailsPage(getDriver());
			
			String actualProductTitle = "Ampoule LED Portable avec Cordon Bulby InnovaGoods";
			String expectedProductTitle = productDetailsPage.getProductTitle();
			
			if (actualProductTitle.equals(expectedProductTitle)) {
				Report.pass("'"+actualProductTitle+"' title on Product Details Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("Expected <b>'" + expectedProductTitle + "'</b> but found <b>'"+ actualProductTitle +"'</b>  title on Product Details Page.", getScreenshot(getDriver()));
			}
			
			if (productDetailsPage.isProductTitleDisplayed()) {
				Report.pass("'Ampoule LED Portable avec Cordon Bulby InnovaGoods' title on Product Details Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("'Ampoule LED Portable avec Cordon Bulby InnovaGoods' title on Product Details Page.", getScreenshot(getDriver()));
			}
			
			if (productDetailsPage.isProductImageDisplayed()) {
				Report.pass("'Product' image on Product Details Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("'Product' image on Product Details Page.", getScreenshot(getDriver()));
			}
			
			if (productDetailsPage.isProductPriceRadioButtonDisplayed()) {
				Report.pass("'9.20 E' product price on Product Details Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("'9.20 E' product price on Product Details Page.", getScreenshot(getDriver()));
			}
			
			Report.info("Click on Add to cart button on Product Details Page.");
			productDetailsPage.clickOnAddToCartButton();
				
			if (productDetailsPage.isMiniCartProductTitleDisplayed(actualProductTitle)) {
				Report.pass("'"+actualProductTitle+"' title on Product Details Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("'"+actualProductTitle+"' title on Product Details Page.", getScreenshot(getDriver()));
			}
			
			HeaderFooter headerFooter = new HeaderFooter(getDriver());
			
			Report.info("Click on shopping cart button on Product Details Page.");
			headerFooter.clickOnShoppingCartButton();
					
			BasketPage basketPage = new BasketPage(getDriver());
			
			if (basketPage.isBasketTitleDisplayed()) {
				Report.pass("'Panier' title on Basket Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("'Panier' title on Basket Page.", getScreenshot(getDriver()));
			}
			
			if (basketPage.isTotalAmountTextDisplayed()) {
				Report.pass("Total amount text on Basket Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("Total amount text on Basket Page.", getScreenshot(getDriver()));
			}
			
			if (basketPage.isProceedToCheckoutDisplayed()) {
				Report.pass("'Proceed to Checkout' button on Basket Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("'Proceed to Checkout' button on Basket Page.", getScreenshot(getDriver()));
			}
			
			Report.info("Click on Proceed to checkout button on Basket Page.");
			basketPage.clickOnProceedToCheckout();
			
			PaymentPage paymentPage = new PaymentPage(getDriver());
			
			if (paymentPage.isPaymentTitleDisplayed()) {
				Report.pass("'Paiement' title on Payment Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("'Paiement' title on Payment Page.", getScreenshot(getDriver()));
			}
			 
			if (paymentPage.isBillingDetailsTitleDisplayed()) {
				Report.pass("'Détails de la facturation' title on Payment Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("'Détails de la facturation' title on Payment Page.", getScreenshot(getDriver()));
			}
			
			if (paymentPage.isYourOrderTitleTextDisplayed()) {
				Report.pass("'Votre commande' title on Payment Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("'Votre commande' title on Payment Page.", getScreenshot(getDriver()));
			}		
			
			DataProvider customer = new DataProvider();
			String customerFirstName = customer.getFirstName();
			String customerLastName = customer.getLastName();
			String customerEmail = customer.getEmail();
			String customerAddress1 = customer.getAddressLine1();
			String customerAddress2 = customer.getAddressLine2();
			String customerCodePostal = "25142";
			String customerVille = customer.getCityName();
			
			Report.info("Fill up valid billing form details on Payment page.");
			
			paymentPage.fillUpBillingForm(customerFirstName, customerLastName, customerAddress1, customerAddress2, customerCodePostal, customerVille, customerEmail);
			Report.pass("<b><u>Data Entered: </u></b>", getScreenshot(getDriver()));
			Report.pass("<b>Customer prenom : </b>" + customerFirstName);
			Report.pass("<b>Customer nom : </b>" + customerLastName);
			Report.pass("<b>Customer email : </b>" + customerEmail);
			Report.pass("<b>Customer address1 : </b>" + customerAddress1);
			Report.pass("<b>Customer address2 : </b>" + customerAddress2);
			Report.pass("<b>Customer code postal : </b>" + customerCodePostal);
			Report.pass("<b>Customer ville : </b>" + customerVille);

			String cardHolderName = customer.getCardHolderName();
			String cardNumber = customer.getCardNumber();
			String cvvNumber = customer.getCvvNumber();
			String cardExpire = "10/2027";

			Report.info("Fill up valid credit card details on Payment page.");

			paymentPage.fillUpCreditCardDetails(cardHolderName, cardNumber , cardExpire, cvvNumber);

			Report.pass("<b><u>Data Entered: </u></b>", getScreenshot(getDriver()));
			Report.pass("<b>Customer Card Holder Name : </b>" + cardHolderName);
			Report.pass("<b>Customer Card Number : </b>" + cardNumber);
			Report.pass("<b>Customer Cvv Number : </b>" + cvvNumber);
			Report.pass("<b>Customer Card Expire : </b>" + cardExpire);
			
			Report.info("Check privacy and terms on Payment page.");
			paymentPage.checkPrivacyTermsAndCondition();
			
			Report.pass("Checked privacy and terms conditions on Payment page", getScreenshot(getDriver()));
		
			Report.info("Click on Place Order button on Payment page.");
			paymentPage.clickOnPlaceOrderButton();
			
			MerciPage merciPage = new MerciPage(getDriver());

			if (merciPage.isMerciTextDisplayed()) {
				Report.pass("'Merci !' text on Merci Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("'Merci !' text on Merci Page.", getScreenshot(getDriver()));
			}
			
			if (merciPage.isDecoureznosproduitsButtonDisplayed()) {
				Report.pass("'Decourez nos produits' button on Merci Page.", getScreenshot(getDriver()));
			} else {
				Report.fail("'Decourez nos produits' button on Merci Page.", getScreenshot(getDriver()));
			}	
			
			MailDropPage maildrop = new MailDropPage(getDriver());
			
			Report.info("Open 'https://maildrop.cc/inbox/?mailbox=" + customerEmail +"' in " + BROWSER_NAME + " browser.");
			maildrop.navigateToMailDrop(customerEmail);
						
			Generics.pause(5);	
			
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
