import { test, expect } from '@playwright/test';
import { FakerUtils } from '../utils/fakerUtils';

const fakerUtils = new FakerUtils();

//pass
test('TC_PSP_01_VerifySubscribePageNavigation', async ({ page }) => {
  await page.goto('https://shop.tech-vip.com/');
  await page.waitForLoadState('networkidle');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await expect(page.getByRole('link', { name: 'S’abonner' })).toBeVisible();
  await page.getByRole('link', { name: 'S’abonner' }).click();
  await expect(page.getByText('S’abonner à tech-vip.com')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Pour vous inscrire et' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Informations personnelles' })).toBeVisible();
  await expect(page.getByText('Attention, pour être sûr de')).toBeVisible();
});

// fail - card verification issue > confirmation page
test('TC_PSP_02_VerifyEmailAfterPurchaseMembership', async ({ page }) => {
  await page.goto('https://shop.tech-vip.com/');
  await page.waitForLoadState('networkidle');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await expect(page.getByRole('link', { name: 'S’abonner' })).toBeVisible();
  await page.getByRole('link', { name: 'S’abonner' }).click();
  await expect(page.getByText('S’abonner à tech-vip.com')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Pour vous inscrire et' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Informations personnelles' })).toBeVisible();
  await expect(page.getByText('Attention, pour être sûr de')).toBeVisible();
  await expect(page.locator('select[name="subscriber[civility]"]')).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Prénom*' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Nom*', exact: true })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Téléphone (portable)*' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Adresse*' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Ville*' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Code postal*' })).toBeVisible();
  await expect(page.locator('select[name="subscriber[send_address][country]"]')).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Email*' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Mot de passe*' })).toBeVisible();
  await expect(page.getByText('J\'ai plus de 18 ans et j\'')).toBeVisible();
  await expect(page.getByText('* Champs obligatoires')).toBeVisible();
  await expect(page.getByRole('button', { name: 'S’abonner' })).toBeVisible();
  await page.locator('select[name="subscriber[civility]"]').selectOption('1');
  const firstName = fakerUtils.getFirstName();
  await page.getByRole('textbox', { name: 'Prénom*' }).click();
  await page.getByRole('textbox', { name: 'Prénom*' }).fill(firstName);
  await page.getByRole('textbox', { name: 'Nom*', exact: true }).click();
  await page.getByRole('textbox', { name: 'Nom*', exact: true }).fill(fakerUtils.getLastName());
  await page.getByRole('textbox', { name: 'Téléphone (portable)*' }).click();
  await page.getByRole('textbox', { name: 'Téléphone (portable)*' }).fill(fakerUtils.getPhoneNumber());
  await page.getByRole('textbox', { name: 'Adresse*' }).click();
  await page.getByRole('textbox', { name: 'Adresse*' }).fill('France');
  await page.getByRole('textbox', { name: 'Ville*' }).click();
  await page.getByRole('textbox', { name: 'Ville*' }).fill('France');
  await page.getByRole('textbox', { name: 'Code postal*' }).click();
  await page.getByRole('textbox', { name: 'Code postal*' }).fill(fakerUtils.getPostalCode());
  await page.getByRole('textbox', { name: 'Email*' }).click();
  await page.getByRole('textbox', { name: 'Email*' }).fill(fakerUtils.getEmail(firstName));
  await page.getByRole('textbox', { name: 'Mot de passe*' }).click();
  await page.getByRole('textbox', { name: 'Mot de passe*' }).fill(fakerUtils.getPassword());
  await page.locator('#is_adult').check();
  await page.getByRole('button', { name: 'S’abonner' }).click();
  await expect(page.getByText('S’abonner à tech-vip.com')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'En cochant cette case, vous' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Paiement sécurisé, il apparaî' })).toBeVisible();
  await expect(page.locator('#ccard-form div').filter({ hasText: 'N° de la carte' })).toBeVisible();
  await expect(page.locator('#paiement_cc1')).toBeVisible();
  await expect(page.locator('#paiement_cc2')).toBeVisible();
  await expect(page.locator('#paiement_cc3')).toBeVisible();
  await expect(page.locator('#paiement_cc4')).toBeVisible();
  await expect(page.getByText('Date de validité')).toBeVisible();
  await expect(page.locator('select[name="payment[exp_month]"]')).toBeVisible();
  await expect(page.locator('select[name="payment[exp_year]"]')).toBeVisible();
  await expect(page.locator('#ccard-form').getByText('Cryptogramme')).toBeVisible();
  await expect(page.locator('input[name="payment[csc]"]')).toBeVisible();
  await expect(page.getByText('En savoir plus')).toBeVisible();
  await expect(page.getByText('Type d\'abonnement')).toBeVisible();
  await expect(page.locator('#typeabo')).toBeVisible();
  await expect(page.getByRole('button', { name: 'S’abonner' })).toBeVisible();
  await expect(page.locator('#ccard-form').getByRole('img').first()).toBeVisible();
  await expect(page.locator('#ccard-form').getByRole('img').nth(2)).toBeVisible();
  await expect(page.locator('#ccard-form').getByRole('paragraph').nth(1)).toBeVisible();
  await page.locator('#paiement_cc1').click();
  await page.locator('#paiement_cc1').fill('4785');
  await page.locator('#paiement_cc2').fill('5430');
  await page.locator('#paiement_cc3').fill('7712');
  await page.locator('#paiement_cc4').fill('8496');
  await page.locator('select[name="payment[exp_month]"]').selectOption('10');
  await page.locator('select[name="payment[exp_year]"]').selectOption('27');
  await page.locator('input[name="payment[csc]"]').click();
  await page.locator('input[name="payment[csc]"]').fill('367');
  await page.getByRole('button', { name: 'S’abonner' }).click();
  // merci page > details confirmation1
  await page.waitForLoadState('networkidle');
  await page.waitForURL('https://tech-vip.com/fr/sh/confirmation.html'); 
  await expect(page.getByRole('heading', { name: 'MERCI !' })).toBeVisible();
  await expect(page.locator('h2')).toContainText('Vous pouvez maintenant profiter des offres tech-vip.com !');
  await expect(page.locator('h5')).toContainText('Attention, pour être sûr de recevoir correctement vos commandes, veillez à bien renseigner vos coordonnées pour le bon déroulement de la livraison.');
  await expect(page.getByRole('textbox', { name: 'Email*' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Mot de passe*', exact: true })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Confirmez votre mot de passe*' })).toBeVisible();
  await expect(page.locator('select[name="subscriber[civility]"]')).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Prénom*' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Nom*', exact: true })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Téléphone (portable)' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Adresse*' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Code postal*' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Ville*' })).toBeVisible();
  await expect(page.locator('select[name="subscriber[send_address][country]"]')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Confirmer' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Mot de passe*', exact: true }).click();
  await page.getByRole('textbox', { name: 'Mot de passe*', exact: true }).fill(fakerUtils.getPassword());
  await page.getByRole('textbox', { name: 'Confirmez votre mot de passe*' }).click();
  await page.getByRole('textbox', { name: 'Confirmez votre mot de passe*' }).fill(fakerUtils.getPassword());
  await page.locator('select[name="subscriber[civility]"]').selectOption('1');
  await page.getByRole('textbox', { name: 'Ville*' }).click();
  await page.getByRole('textbox', { name: 'Ville*' }).fill('Paris');
  await page.getByRole('button', { name: 'Confirmer' }).click();
  // merci page confirmation 2
  await expect(page.locator('a').first()).toBeVisible();
  await expect(page.getByRole('heading', { name: 'MERCI !' })).toBeVisible();
  await expect(page.getByText('Vous faites maintenant partie')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Découvrez nos produits' })).toBeVisible();
  await page.goto('https://maildrop.cc/');
  await page.locator('#navbar').getByRole('textbox', { name: 'view-this-mailbox' }).click();
  await page.locator('#navbar').getByRole('textbox', { name: 'view-this-mailbox' }).fill(firstName);
  await page.locator('#navbar').getByRole('button', { name: 'View Mailbox' }).click();
  // Code for email company details
  await expect(page.getByText('Tech Vip <clients@tech-vip.').first()).toBeVisible();
  await expect(page.getByText('Tech Vip <clients@tech-vip.').nth(2)).toBeVisible();
  await expect(page.getByText('Bienvenue sur tech-vip.com !').nth(1)).toBeVisible();
  await expect(page.locator('iframe').contentFrame().getByRole('link', { name: 'logo' })).toBeVisible();
  await page.locator('iframe').contentFrame().getByText('Bonjour,').click();
  await expect(page.locator('iframe').contentFrame().getByText('L���équipe de tech-vip.com')).toBeVisible();
  await page.locator('iframe').contentFrame().getByText('Plus qu’une seule étape afin').click();
  await expect(page.locator('iframe').contentFrame().getByRole('link', { name: 'JE FINALISE MON INSCRIPTION' })).toBeVisible();
  await page.locator('iframe').contentFrame().getByText('Comment profiter de l\'offre').click();
  await expect(page.locator('iframe').contentFrame().getByText('1) Passez une commande auprès')).toBeVisible();
  await page.locator('iframe').contentFrame().getByText('2) Envoyez la facture à l\'').click();
  await expect(page.locator('iframe').contentFrame().getByText('3) Recevez un remboursement')).toBeVisible();
  await page.locator('iframe').contentFrame().getByText('Tech-vip.com vous propose,').click();
  await expect(page.locator('iframe').contentFrame().getByText('Site édité par CASSIOPEIA')).toBeVisible();
  await page.locator('iframe').contentFrame().getByText('Notre Service Client :').click();
  await expect(page.locator('iframe').contentFrame().getByText('Email : contact@tech-vip.com')).toBeVisible();
  await page.locator('iframe').contentFrame().getByText('Téléphone au 01 76 44 03').click();
  // Code for email verification > taking 30-40m for email appeareance
});

//failed due to captcha dialog box issue
test('TC_PSP_05_TC_PSP_07_VerifyEmailAfterPurchaseProduct', async ({ page }) => {
  await page.goto('https://shop.tech-vip.com/');
  await page.waitForLoadState('networkidle');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await expect(page.getByRole('link', { name: 'PRIX VIP −50% Crochets adhé' })).toBeVisible();
  await page.getByRole('link', { name: 'PRIX VIP −50% Crochets adhé' }).click();
  await expect(page.getByRole('heading', { name: 'Crochets adhésifs multi-' })).toBeVisible();
  await expect(page.getByText('(Prix VIP 3.00 €)')).toBeVisible();
  await expect(page.locator('.makezoom')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Ajouter au panier' })).toBeVisible();
  await page.getByRole('button', { name: 'Ajouter au panier' }).click();
  await expect(page.getByRole('heading', { name: 'Votre panier' })).toBeVisible();
  await expect(page.locator('#cart-sidebar').getByRole('heading', { name: 'Crochets adhésifs multi-' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Commander' })).toBeVisible();
  await page.getByRole('link', { name: 'Commander' }).click();
  await expect(page.getByText('Votre panier Détails de la')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Infos de livraison' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'E-mail' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Prénom' })).toBeVisible();
  await expect(page.getByText('Nom de famille Le champ est')).toBeVisible();
  await expect(page.getByText('Adresse Le champ est requis')).toBeVisible();
  await expect(page.locator('.field.flex-1')).toBeVisible();
  await expect(page.getByText('France BelgiqueFranceMonacoSuisse BelgiqueFranceMonacoSuisse Pays Le champ est')).toBeVisible();
  await expect(page.locator('.field.filed-1.is-empty').first()).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Code postal' })).toBeVisible();
  await expect(page.getByText('Ville Le champ est requis')).toBeVisible();
  await expect(page.getByText('Téléphone (optionnel) Le')).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Informations supplémentaires' })).toBeVisible();
  await expect(page.getByText('membre privilégiéDevenez un')).toBeVisible();
  await expect(page.locator('div').filter({ hasText: /^S'abonner$/ })).toBeVisible();
  await expect(page.getByText('1Crochets adhésifs multi-usages, support mural de serpillièresWHITE3.00 €6.00 €')).toBeVisible();
  await expect(page.locator('.box-shipping-cart')).toBeVisible();
  await expect(page.getByText('Sous-Total4.00 €6.00 €Expé')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Moyen de paiement' })).toBeVisible();
  await expect(page.locator('.payment-item-radio')).toBeVisible();
  await expect(page.locator('.payment-fields')).toBeVisible();
  await expect(page.locator('#main-button-container div').nth(2)).toBeVisible();
  await expect(page.locator('.trust-box > img')).toBeVisible();
  await expect(page.getByText('Nous partageons votre')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Le moyen sûr, amusant et' })).toBeVisible();
  const firstName = fakerUtils.getFirstName();
  await page.getByRole('textbox', { name: 'E-mail' }).click();
  await page.getByRole('textbox', { name: 'E-mail' }).fill(fakerUtils.getEmail(firstName));
  await page.getByRole('textbox', { name: 'Prénom' }).click();
  await page.getByRole('textbox', { name: 'Prénom' }).fill(firstName);
  await page.getByRole('textbox', { name: 'Nom de famille' }).click();
  await page.getByRole('textbox', { name: 'Nom de famille' }).fill(fakerUtils.getLastName());
  await page.getByRole('textbox', { name: 'Adresse' }).click();
  await page.getByRole('textbox', { name: 'Adresse' }).fill('France');
  await page.getByRole('button', { name: 'Veuillez sélectionner' }).click();
  await page.getByRole('textbox', { name: 'Search' }).fill('Paris');
  await page.getByRole('option', { name: 'Paris ' }).click();
  await page.getByRole('textbox', { name: 'Code postal' }).click();
  await page.getByRole('textbox', { name: 'Code postal' }).fill(fakerUtils.getPostalCode());
  await page.getByRole('textbox', { name: 'Ville' }).click();
  await page.getByRole('textbox', { name: 'Ville' }).fill('france');
  await page.locator('#main-button-container div').nth(2).click();
  await expect(page.getByText('Vous avez déjà un compte PayPal ? Connectez-vous')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Payer par carte bancaire' })).toBeVisible();
  await expect(page.getByTestId('countrySelector')).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Email' })).toBeVisible();
  await expect(page.getByTestId('phoneType')).toBeVisible();
  await expect(page.getByTestId('phone')).toBeVisible();
  await expect(page.getByTestId('phoneconfirmation')).toBeVisible();
  await expect(page.getByTestId('card-type-selector')).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Numéro de carte' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Date d’expiration' })).toBeVisible();
  await expect(page.getByTestId('weasley-form-container').locator('div').filter({ hasText: 'Crypto.Il s\'agit des 3' }).nth(2)).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Adresse de facturation' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Prénom' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Nom', exact: true })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Ligne d\'adresse 1' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Ligne d\'adresse 2 (facultatif)' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Code postal' })).toBeVisible();  
  await expect(page.getByRole('textbox', { name: 'Ville' })).toBeVisible();
  await expect(page.locator('span').filter({ hasText: 'Adresse de livraison' }).nth(1)).toBeVisible();
  await expect(page.locator('label').filter({ hasText: 'Adresse de livraison' }).getByRole('img')).toBeVisible();
  await expect(page.getByText('Ouvrez un compte et profitez')).toBeVisible();
  await expect(page.getByTestId('spotsicon-SHIELD_LOCK')).toBeVisible();
  await expect(page.getByTestId('spotsicon-BAG_HANDLE')).toBeVisible();
  await expect(page.getByTestId('spotsicon-STAMP_PERCENT')).toBeVisible();
  await expect(page.getByTestId('lazy-password-input')).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Date de naissance' })).toBeVisible();
  await expect(page.getByLabel('Nationalité')).toBeVisible();
  await expect(page.getByTestId('streamline-signup-terms-password')).toBeVisible();
  await expect(page.getByText('Vous acceptez de recevoir des')).toBeVisible();
  await expect(page.getByTestId('overcapture-disclaimer')).toBeVisible();
  await expect(page.getByTestId('submit-button')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Annuler et retourner sur le' })).toBeVisible();
  await expect(page.getByText('Annuler et retourner sur le site du marchandEnglishSélecteur de pays,')).toBeVisible();
  await expect(page.getByText('Bouclier de protection des paiements sécuriséPayPal, votre réflexe sécurité')).toBeVisible();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill(fakerUtils.getEmail(firstName));
  await page.getByTestId('phone').click();
  await page.getByTestId('phone').fill(fakerUtils.getPhoneNumber());
  await page.getByTestId('card-type-selector').selectOption('VISA');  
  await page.locator('body').selectOption('VISA');
  // Pending code for paypal payment
});

//failed due to captcha dialog box issue
test('TC_PSP_06_VerifyProductOrderOnBackend', async ({ page }) => {
  await page.goto('https://shop.tech-vip.com/');
  await page.waitForLoadState('networkidle');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await expect(page.getByRole('link', { name: 'PRIX VIP −50% Crochets adhé' })).toBeVisible();
  await page.getByRole('link', { name: 'PRIX VIP −50% Crochets adhé' }).click();
  await expect(page.getByRole('heading', { name: 'Crochets adhésifs multi-' })).toBeVisible();
  await expect(page.getByText('(Prix VIP 3.00 €)')).toBeVisible();
  await expect(page.locator('.makezoom')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Ajouter au panier' })).toBeVisible();
  await page.getByRole('button', { name: 'Ajouter au panier' }).click();
  await expect(page.getByRole('heading', { name: 'Votre panier' })).toBeVisible();
  await expect(page.locator('#cart-sidebar').getByRole('heading', { name: 'Crochets adhésifs multi-' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Commander' })).toBeVisible();
  await page.getByRole('link', { name: 'Commander' }).click();
  await expect(page.getByText('Votre panier Détails de la')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Infos de livraison' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'E-mail' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Prénom' })).toBeVisible();
  await expect(page.getByText('Nom de famille Le champ est')).toBeVisible();
  await expect(page.getByText('Adresse Le champ est requis')).toBeVisible();
  await expect(page.locator('.field.flex-1')).toBeVisible();
  await expect(page.getByText('France BelgiqueFranceMonacoSuisse BelgiqueFranceMonacoSuisse Pays Le champ est')).toBeVisible();
  await expect(page.locator('.field.filed-1.is-empty').first()).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Code postal' })).toBeVisible();
  await expect(page.getByText('Ville Le champ est requis')).toBeVisible();
  await expect(page.getByText('Téléphone (optionnel) Le')).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Informations supplémentaires' })).toBeVisible();
  await expect(page.getByText('membre privilégiéDevenez un')).toBeVisible();
  await expect(page.locator('div').filter({ hasText: /^S'abonner$/ })).toBeVisible();
  await expect(page.getByText('1Crochets adhésifs multi-usages, support mural de serpillièresWHITE3.00 €6.00 €')).toBeVisible();
  await expect(page.locator('.box-shipping-cart')).toBeVisible();
  await expect(page.getByText('Sous-Total4.00 €6.00 €Expé')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Moyen de paiement' })).toBeVisible();
  await expect(page.locator('.payment-item-radio')).toBeVisible();
  await expect(page.locator('.payment-fields')).toBeVisible();
  await expect(page.locator('#main-button-container div').nth(2)).toBeVisible();
  await expect(page.locator('.trust-box > img')).toBeVisible();
  await expect(page.getByText('Nous partageons votre')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Le moyen sûr, amusant et' })).toBeVisible();
  const firstName = fakerUtils.getFirstName();
  await page.getByRole('textbox', { name: 'E-mail' }).click();
  await page.getByRole('textbox', { name: 'E-mail' }).fill(fakerUtils.getEmail(firstName));
  await page.getByRole('textbox', { name: 'Prénom' }).click();
  await page.getByRole('textbox', { name: 'Prénom' }).fill(firstName);
  await page.getByRole('textbox', { name: 'Nom de famille' }).click();
  await page.getByRole('textbox', { name: 'Nom de famille' }).fill(fakerUtils.getLastName());
  await page.getByRole('textbox', { name: 'Adresse' }).click();
  await page.getByRole('textbox', { name: 'Adresse' }).fill('France');
  await page.getByRole('button', { name: 'Veuillez sélectionner' }).click();
  await page.getByRole('textbox', { name: 'Search' }).fill('Paris');
  await page.getByRole('option', { name: 'Paris ' }).click();
  await page.getByRole('textbox', { name: 'Code postal' }).click();
  await page.getByRole('textbox', { name: 'Code postal' }).fill(fakerUtils.getPostalCode());
  await page.getByRole('textbox', { name: 'Ville' }).click();
  await page.getByRole('textbox', { name: 'Ville' }).fill('france');
  await page.locator('#main-button-container div').nth(2).click();
  await expect(page.getByText('Vous avez déjà un compte PayPal ? Connectez-vous')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Payer par carte bancaire' })).toBeVisible();
  await expect(page.getByText('Nous ne communiquons pas vos')).toBeVisible();
  await expect(page.getByTestId('countrySelector')).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Email' })).toBeVisible();
  await expect(page.getByTestId('phoneType')).toBeVisible();
  await expect(page.getByTestId('phone')).toBeVisible();
  await expect(page.getByTestId('phoneconfirmation')).toBeVisible();
  await expect(page.getByTestId('card-type-selector')).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Numéro de carte' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Date d’expiration' })).toBeVisible();
  await expect(page.getByTestId('weasley-form-container').locator('div').filter({ hasText: 'Crypto.Il s\'agit des 3' }).nth(2)).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Adresse de facturation' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Prénom' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Nom', exact: true })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Ligne d\'adresse 1' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Ligne d\'adresse 2 (facultatif)' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Code postal' })).toBeVisible();  
  await expect(page.getByRole('textbox', { name: 'Ville' })).toBeVisible();
  await expect(page.locator('span').filter({ hasText: 'Adresse de livraison' }).nth(1)).toBeVisible();
  await expect(page.locator('label').filter({ hasText: 'Adresse de livraison' }).getByRole('img')).toBeVisible();
  await expect(page.getByText('Ouvrez un compte et profitez')).toBeVisible();
  await expect(page.getByTestId('spotsicon-SHIELD_LOCK')).toBeVisible();
  await expect(page.getByTestId('spotsicon-BAG_HANDLE')).toBeVisible();
  await expect(page.getByTestId('spotsicon-STAMP_PERCENT')).toBeVisible();
  await expect(page.getByTestId('lazy-password-input')).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Date de naissance' })).toBeVisible();
  await expect(page.getByLabel('Nationalité')).toBeVisible();
  await expect(page.getByTestId('streamline-signup-terms-password')).toBeVisible();
  await expect(page.getByText('Vous acceptez de recevoir des')).toBeVisible();
  await expect(page.getByTestId('overcapture-disclaimer')).toBeVisible();
  await expect(page.getByTestId('submit-button')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Annuler et retourner sur le' })).toBeVisible();
  await expect(page.getByText('Annuler et retourner sur le site du marchandEnglishSélecteur de pays,')).toBeVisible();
  await expect(page.getByText('Bouclier de protection des paiements sécuriséPayPal, votre réflexe sécurité')).toBeVisible();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill(fakerUtils.getEmail(firstName));
  await page.getByTestId('phone').click();
  await page.getByTestId('phone').fill(fakerUtils.getPhoneNumber());
  await page.getByTestId('card-type-selector').selectOption('VISA');  
  await page.locator('body').selectOption('VISA');
  // Pending code for paypal payment  
});

// pass // Not getting any message or validation 
test('TC_PSP_09_VerifyEmailAfterFillingUpContact', async ({ page }) => {
  await page.goto('https://shop.tech-vip.com/');
  await page.waitForLoadState('networkidle');
  await page.locator('.menu-toggle').click();
  await expect(page.getByRole('link', { name: 'Contact', exact: true })).toBeVisible();
  await page.getByRole('link', { name: 'Contact', exact: true }).click();
  await expect(page.getByText('AccueilContact')).toBeVisible();
  await expect(page.getByText('Contacter Tech Vip')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'VOUS SOUHAITEZ NOUS CONTACTER' })).toBeVisible();
  await expect(page.getByText('Avant d\'envoyer votre message')).toBeVisible();
  await expect(page.locator('#co').getByRole('link', { name: 'FAQ' })).toBeVisible();
  await expect(page.getByText('Avez-vous une question sur')).toBeVisible();
  await expect(page.locator('#co')).toContainText('Avez-vous une question sur notre service ou souhaitez-vous gérer votre abonnement ? Peu importe la raison, ce formulaire de contact a été mis en place pour vous permettre de nous joindre facilement et rapidement. Nous mettrons tout en œuvre pour vous répondre dans les meilleurs délais.');
  await expect(page.locator('#co')).toContainText('Vous pouvez également nous contacter par téléphone au 01 76 44 03 44 du lundi au vendredi (09h00 à 18h00)');
  await expect(page.locator('#co')).toContainText('Site édité par CASSIOPEIA DIGITAL LTD. Immatriculée sous le n° 12829698 et dont le siège social est situé au OFFICE 9, DALTON HOUSE 60 WINDSOR AVENUE- LONDON - UNITED KINGDOM- SW19 2RR');
  await expect(page.getByRole('combobox')).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Prénom *' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Nom *', exact: true })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Email *' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Sujet du message *' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Envoyer' })).toBeVisible();
  await expect(page.getByText('* Champs obligatoires')).toBeVisible();
  const firstName = fakerUtils.getFirstName();
  await page.getByRole('combobox').selectOption('Inscription');
  await page.getByRole('textbox', { name: 'Prénom *' }).click();
  await page.getByRole('textbox', { name: 'Prénom *' }).fill(fakerUtils.getFirstName());
  await page.getByRole('textbox', { name: 'Nom *', exact: true }).click();
  await page.getByRole('textbox', { name: 'Nom *', exact: true }).fill(fakerUtils.getLastName());
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill(fakerUtils.getEmail(firstName));
  await page.getByRole('textbox', { name: 'Sujet du message *' }).click();
  await page.getByRole('textbox', { name: 'Sujet du message *' }).fill(fakerUtils.getDescription());
  await page.getByRole('button', { name: 'Envoyer' }).click();
  // Not getting any message or validation 
});

//failed due to captcha dialog box issue
test('TC_PSP_13_VerifyProductOrderRefundOnBackend', async ({ page }) => {
  await page.goto('https://shop.tech-vip.com/');
  await page.waitForLoadState('networkidle');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await expect(page.getByRole('link', { name: 'PRIX VIP −50% Crochets adhé' })).toBeVisible();
  await page.getByRole('link', { name: 'PRIX VIP −50% Crochets adhé' }).click();
  await expect(page.getByRole('heading', { name: 'Crochets adhésifs multi-' })).toBeVisible();
  await expect(page.getByText('(Prix VIP 3.00 €)')).toBeVisible();
  await expect(page.locator('.makezoom')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Ajouter au panier' })).toBeVisible();
  await page.getByRole('button', { name: 'Ajouter au panier' }).click();
  await expect(page.getByRole('heading', { name: 'Votre panier' })).toBeVisible();
  await expect(page.locator('#cart-sidebar').getByRole('heading', { name: 'Crochets adhésifs multi-' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Commander' })).toBeVisible();
  await page.getByRole('link', { name: 'Commander' }).click();
  await expect(page.getByText('Votre panier Détails de la')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Infos de livraison' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'E-mail' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Prénom' })).toBeVisible();
  await expect(page.getByText('Nom de famille Le champ est')).toBeVisible();
  await expect(page.getByText('Adresse Le champ est requis')).toBeVisible();
  await expect(page.locator('.field.flex-1')).toBeVisible();
  await expect(page.getByText('France BelgiqueFranceMonacoSuisse BelgiqueFranceMonacoSuisse Pays Le champ est')).toBeVisible();
  await expect(page.locator('.field.filed-1.is-empty').first()).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Code postal' })).toBeVisible();
  await expect(page.getByText('Ville Le champ est requis')).toBeVisible();
  await expect(page.getByText('Téléphone (optionnel) Le')).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Informations supplémentaires' })).toBeVisible();
  await expect(page.getByText('membre privilégiéDevenez un')).toBeVisible();
  await expect(page.locator('div').filter({ hasText: /^S'abonner$/ })).toBeVisible();
  await expect(page.getByText('1Crochets adhésifs multi-usages, support mural de serpillièresWHITE3.00 €6.00 €')).toBeVisible();
  await expect(page.locator('.box-shipping-cart')).toBeVisible();
  await expect(page.getByText('Sous-Total4.00 €6.00 €Expé')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Moyen de paiement' })).toBeVisible();
  await expect(page.locator('.payment-item-radio')).toBeVisible();
  await expect(page.locator('.payment-fields')).toBeVisible();
  await expect(page.locator('#main-button-container div').nth(2)).toBeVisible();
  await expect(page.locator('.trust-box > img')).toBeVisible();
  await expect(page.getByText('Nous partageons votre')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Le moyen sûr, amusant et' })).toBeVisible();
  const firstName = fakerUtils.getFirstName();
  await page.getByRole('textbox', { name: 'E-mail' }).click();
  await page.getByRole('textbox', { name: 'E-mail' }).fill(fakerUtils.getEmail(firstName));
  await page.getByRole('textbox', { name: 'Prénom' }).click();
  await page.getByRole('textbox', { name: 'Prénom' }).fill(firstName);
  await page.getByRole('textbox', { name: 'Nom de famille' }).click();
  await page.getByRole('textbox', { name: 'Nom de famille' }).fill(fakerUtils.getLastName());
  await page.getByRole('textbox', { name: 'Adresse' }).click();
  await page.getByRole('textbox', { name: 'Adresse' }).fill('France');
  await page.getByRole('button', { name: 'Veuillez sélectionner' }).click();
  await page.getByRole('textbox', { name: 'Search' }).fill('Paris');
  await page.getByRole('option', { name: 'Paris ' }).click();
  await page.getByRole('textbox', { name: 'Code postal' }).click();
  await page.getByRole('textbox', { name: 'Code postal' }).fill(fakerUtils.getPostalCode());
  await page.getByRole('textbox', { name: 'Ville' }).click();
  await page.getByRole('textbox', { name: 'Ville' }).fill('france');
  await page.locator('#main-button-container div').nth(2).click();
  await expect(page.getByText('Vous avez déjà un compte PayPal ? Connectez-vous')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Payer par carte bancaire' })).toBeVisible();
  await expect(page.getByText('Nous ne communiquons pas vos')).toBeVisible();
  await expect(page.getByTestId('countrySelector')).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Email' })).toBeVisible();
  await expect(page.getByTestId('phoneType')).toBeVisible();
  await expect(page.getByTestId('phone')).toBeVisible();
  await expect(page.getByTestId('phoneconfirmation')).toBeVisible();
  await expect(page.getByTestId('card-type-selector')).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Numéro de carte' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Date d’expiration' })).toBeVisible();
  await expect(page.getByTestId('weasley-form-container').locator('div').filter({ hasText: 'Crypto.Il s\'agit des 3' }).nth(2)).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Adresse de facturation' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Prénom' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Nom', exact: true })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Ligne d\'adresse 1' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Ligne d\'adresse 2 (facultatif)' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Code postal' })).toBeVisible();  
  await expect(page.getByRole('textbox', { name: 'Ville' })).toBeVisible();
  await expect(page.locator('span').filter({ hasText: 'Adresse de livraison' }).nth(1)).toBeVisible();
  await expect(page.locator('label').filter({ hasText: 'Adresse de livraison' }).getByRole('img')).toBeVisible();
  await expect(page.getByText('Ouvrez un compte et profitez')).toBeVisible();
  await expect(page.getByTestId('spotsicon-SHIELD_LOCK')).toBeVisible();
  await expect(page.getByTestId('spotsicon-BAG_HANDLE')).toBeVisible();
  await expect(page.getByTestId('spotsicon-STAMP_PERCENT')).toBeVisible();
  await expect(page.getByTestId('lazy-password-input')).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Date de naissance' })).toBeVisible();
  await expect(page.getByLabel('Nationalité')).toBeVisible();
  await expect(page.getByTestId('streamline-signup-terms-password')).toBeVisible();
  await expect(page.getByText('Vous acceptez de recevoir des')).toBeVisible();
  await expect(page.getByTestId('overcapture-disclaimer')).toBeVisible();
  await expect(page.getByTestId('submit-button')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Annuler et retourner sur le' })).toBeVisible();
  await expect(page.getByText('Annuler et retourner sur le site du marchandEnglishSélecteur de pays,')).toBeVisible();
  await expect(page.getByText('Bouclier de protection des paiements sécuriséPayPal, votre réflexe sécurité')).toBeVisible();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill(fakerUtils.getEmail(firstName));
  await page.getByTestId('phone').click();
  await page.getByTestId('phone').fill(fakerUtils.getPhoneNumber());
  await page.getByTestId('card-type-selector').selectOption('VISA');  
  await page.locator('body').selectOption('VISA');
  // Pending code for paypal payment
});

//pass
test('TC_PSP_15_VerifyCompanyNameOnLegalTerms', async ({ page }) => {
  await page.goto('https://shop.tech-vip.com/');
  await page.waitForLoadState('networkidle');
  await expect(page.locator('body')).toContainText('01 76 44 03 44');
  await expect(page.locator('body')).toContainText('contact@tech-vip.com');
  await page.getByRole('contentinfo').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await expect(page.getByRole('contentinfo')).toContainText('01 76 44 03 44');
  await expect(page.getByRole('contentinfo')).toContainText('Le site tech-vip.com, propose un service par abonnement mensuel de (29,90€/mois ou 75€/trimestre) à reconduction tacite sans engagement de durée.');
  await expect(page.locator('h4')).toContainText('tech-vip.com');
  await expect(page.locator('#copyright')).toContainText("Site édité par CASSIOPEIA DIGITAL LTD. Imatriculée au registre des sociétés de l'Angleterre et du Pays de Galles sous le n° 12829698 et dont le siège social est situé au OFFICE 9, DALTON HOUSE 60 WINDSOR AVENUE- LONDON - UNITED KINGDOM- SW19 2RR");
  await page.getByRole('link', { name: 'High Tech' }).click();
  await expect(page.locator('body')).toContainText('01 76 44 03 44');
  await expect(page.locator('body')).toContainText('contact@tech-vip.com');
  await page.getByRole('contentinfo').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await expect(page.getByRole('contentinfo')).toContainText('01 76 44 03 44');
  await expect(page.getByRole('contentinfo')).toContainText('Le site tech-vip.com, propose un service par abonnement mensuel de (29,90€/mois ou 75€/trimestre) à reconduction tacite sans engagement de durée.');
  await expect(page.locator('#copyright')).toContainText('Site édité par CASSIOPEIA DIGITAL LTD. Imatriculée au registre des sociétés de l\'Angleterre et du Pays de Galles sous le n° 12829698 et dont le siège social est situé au OFFICE 9, DALTON HOUSE 60 WINDSOR AVENUE- LONDON - UNITED KINGDOM- SW19 2RR');
  await page.getByRole('link', { name: 'Beauté' }).click();
  await expect(page.locator('body')).toContainText('01 76 44 03 44');
  await expect(page.locator('body')).toContainText('contact@tech-vip.com');
  await page.getByRole('contentinfo').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await expect(page.getByRole('contentinfo')).toContainText('01 76 44 03 44');
  await expect(page.getByRole('contentinfo')).toContainText('Le site tech-vip.com, propose un service par abonnement mensuel de (29,90€/mois ou 75€/trimestre) à reconduction tacite sans engagement de durée.');
  await expect(page.locator('#copyright')).toContainText('Site édité par CASSIOPEIA DIGITAL LTD. Imatriculée au registre des sociétés de l\'Angleterre et du Pays de Galles sous le n° 12829698 et dont le siège social est situé au OFFICE 9, DALTON HOUSE 60 WINDSOR AVENUE- LONDON - UNITED KINGDOM- SW19 2RR');
  await page.getByRole('link', { name: 'Maison' }).click();
  await expect(page.locator('body')).toContainText('01 76 44 03 44');
  await expect(page.locator('body')).toContainText('contact@tech-vip.com');
  await page.getByRole('contentinfo').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await expect(page.getByRole('contentinfo')).toContainText('01 76 44 03 44');
  await expect(page.locator('h4')).toContainText('tech-vip.com');
  await expect(page.getByText('Le site tech-vip.com, propose')).toBeVisible();
  await expect(page.getByRole('contentinfo')).toContainText('Le site tech-vip.com, propose un service par abonnement mensuel de (29,90€/mois ou 75€/trimestre) à reconduction tacite sans engagement de durée.');
  await expect(page.locator('#copyright')).toContainText('Site édité par CASSIOPEIA DIGITAL LTD. Imatriculée au registre des sociétés de l\'Angleterre et du Pays de Galles sous le n° 12829698 et dont le siège social est situé au OFFICE 9, DALTON HOUSE 60 WINDSOR AVENUE- LONDON - UNITED KINGDOM- SW19 2RR');
  await page.getByRole('link', { name: 'Électroménager' }).click();
  await expect(page.locator('body')).toContainText('01 76 44 03 44');
  await expect(page.locator('body')).toContainText('contact@tech-vip.com');
  await page.getByRole('contentinfo').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await expect(page.getByRole('contentinfo')).toContainText('01 76 44 03 44');
  await expect(page.locator('h4')).toContainText('tech-vip.com');
  await expect(page.getByRole('contentinfo')).toContainText('Le site tech-vip.com, propose un service par abonnement mensuel de (29,90€/mois ou 75€/trimestre) à reconduction tacite sans engagement de durée.');
  await expect(page.locator('#copyright')).toContainText('Site édité par CASSIOPEIA DIGITAL LTD. Imatriculée au registre des sociétés de l\'Angleterre et du Pays de Galles sous le n° 12829698 et dont le siège social est situé au OFFICE 9, DALTON HOUSE 60 WINDSOR AVENUE- LONDON - UNITED KINGDOM- SW19 2RR');
  await page.getByRole('link', { name: 'Animalerie' }).click();
  await expect(page.locator('body')).toContainText('01 76 44 03 44');
  await expect(page.locator('body')).toContainText('contact@tech-vip.com');
  await page.getByRole('contentinfo').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await expect(page.getByRole('contentinfo')).toContainText('01 76 44 03 44');
  await expect(page.locator('h4')).toContainText('tech-vip.com');
  await expect(page.getByRole('contentinfo')).toContainText('Le site tech-vip.com, propose un service par abonnement mensuel de (29,90€/mois ou 75€/trimestre) à reconduction tacite sans engagement de durée.');
  await expect(page.locator('#copyright')).toContainText('Site édité par CASSIOPEIA DIGITAL LTD. Imatriculée au registre des sociétés de l\'Angleterre et du Pays de Galles sous le n° 12829698 et dont le siège social est situé au OFFICE 9, DALTON HOUSE 60 WINDSOR AVENUE- LONDON - UNITED KINGDOM- SW19 2RR');
  await page.getByRole('link', { name: 'Sport' }).click();
  await expect(page.locator('body')).toContainText('01 76 44 03 44');
  await expect(page.locator('body')).toContainText('contact@tech-vip.com');
  await expect(page.locator('div').filter({ hasText: 'AccueilSport' }).nth(1)).toBeVisible();
  await page.getByRole('contentinfo').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await expect(page.getByRole('contentinfo')).toContainText('01 76 44 03 44');
  await expect(page.locator('h4')).toContainText('tech-vip.com');
  await expect(page.getByRole('contentinfo')).toContainText('Le site tech-vip.com, propose un service par abonnement mensuel de (29,90€/mois ou 75€/trimestre) à reconduction tacite sans engagement de durée.');
  await expect(page.locator('#copyright')).toContainText('Site édité par CASSIOPEIA DIGITAL LTD. Imatriculée au registre des sociétés de l\'Angleterre et du Pays de Galles sous le n° 12829698 et dont le siège social est situé au OFFICE 9, DALTON HOUSE 60 WINDSOR AVENUE- LONDON - UNITED KINGDOM- SW19 2RR');
  await page.locator('#menu-item-79157').getByRole('link', { name: 'Presse' }).click();
  await expect(page.locator('body')).toContainText('01 76 44 03 44');
  await expect(page.locator('body')).toContainText('contact@tech-vip.com');
  await expect(page.getByText('AccueilPresse')).toBeVisible();
  await page.getByRole('contentinfo').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await expect(page.getByRole('contentinfo')).toContainText('01 76 44 03 44');
  await expect(page.locator('h4')).toContainText('tech-vip.com');
  await expect(page.getByRole('contentinfo')).toContainText('Le site tech-vip.com, propose un service par abonnement mensuel de (29,90€/mois ou 75€/trimestre) à reconduction tacite sans engagement de durée.');
  await expect(page.locator('#copyright')).toContainText('Site édité par CASSIOPEIA DIGITAL LTD. Imatriculée au registre des sociétés de l\'Angleterre et du Pays de Galles sous le n° 12829698 et dont le siège social est situé au OFFICE 9, DALTON HOUSE 60 WINDSOR AVENUE- LONDON - UNITED KINGDOM- SW19 2RR');
  await page.getByRole('link', { name: 'Connexion' }).click();
  await page.goto('https://tech-vip.com/fr/li/login.html');
  await page.waitForLoadState('networkidle');
  await expect(page.locator('#main')).toContainText('01 76 44 03 44');
  await expect(page.locator('#main')).toContainText('contact@tech-vip.com');
  await expect(page.getByText('AccueilLogin')).toBeVisible();
  await page.getByRole('contentinfo').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await expect(page.getByRole('contentinfo')).toContainText('01 76 44 03 44');
  await expect(page.locator('h4')).toContainText('tech-vip.com');
  await expect(page.getByRole('contentinfo')).toContainText('Le site tech-vip.com, propose un service par abonnement mensuel de (29,90€/mois ou 75€/trimestre) à reconduction tacite sans engagement de durée.');
  await expect(page.getByRole('contentinfo')).toContainText('Le service proposé par tech-vip.com est facturé sous forme d’abonnement mensuel de 29,90€/mois ou 75€/trimestre avec reconduction tacite et sans engagement de durée');
  await expect(page.getByRole('contentinfo')).toContainText('Site édité par CASSIOPEIA DIGITAL LTD.Imatriculée sous le n° 12829698 et dont le siège social est situé au OFFICE 9, DALTON HOUSE 60 WINDSOR AVENUE- LONDON - UNITED KINGDOM- SW19 2RR');
  await expect(page.getByRole('contentinfo')).toContainText('Les entreprises et produits cités sont des marques de commerce™ ou des marques déposées® appartenant à leurs propriétaires respectifs. L\'utilisation de ces marques ne suggère aucun lien ou approbation de leur part. Les spécifications peuvent changer sans préavis. Les marques tierces, y compris les logos et les icônes, restent la propriété de leurs détenteurs. En l\'absence d\'indications contraires, l\'utilisation de ces marques n\'implique aucune relation, parrainage ou approbation de la part des propriétaires. Les références à des marques tierces visent simplement à identifier les produits et services de manière équitable, en respectant le droit des marques. Cette offre privée est gérée par une société indépendante non liée au propriétaire initial des marques/produits mentionnés ici.');
  await page.getByRole('link', { name: 'Mot de passe oublié ?' }).click();
  await page.goto('https://tech-vip.com/fr/li/login.html?recover');
  await page.waitForLoadState('networkidle');
  await expect(page.locator('#main')).toContainText('01 76 44 03 44');
  await expect(page.locator('#main')).toContainText('contact@tech-vip.com');
  await expect(page.getByText('AccueilLogin')).toBeVisible();
  await expect(page.getByText('Espace Membre')).toBeVisible();
  await page.getByRole('contentinfo').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await expect(page.getByRole('contentinfo')).toContainText('01 76 44 03 44');
  await expect(page.locator('h4')).toContainText('tech-vip.com');
  await expect(page.getByRole('contentinfo')).toContainText('Le site tech-vip.com, propose un service par abonnement mensuel de (29,90€/mois ou 75€/trimestre) à reconduction tacite sans engagement de durée.');
  await expect(page.getByText('Le service proposé par tech-')).toBeVisible();
  await expect(page.getByRole('contentinfo')).toContainText('Le service proposé par tech-vip.com est facturé sous forme d’abonnement mensuel de 29,90€/mois ou 75€/trimestre avec reconduction tacite et sans engagement de durée');
  await expect(page.getByRole('contentinfo')).toContainText('Site édité par CASSIOPEIA DIGITAL LTD.Imatriculée sous le n° 12829698 et dont le siège social est situé au OFFICE 9, DALTON HOUSE 60 WINDSOR AVENUE- LONDON - UNITED KINGDOM- SW19 2RR');
  await expect(page.getByRole('contentinfo')).toContainText('Les entreprises et produits cités sont des marques de commerce™ ou des marques déposées® appartenant à leurs propriétaires respectifs. L\'utilisation de ces marques ne suggère aucun lien ou approbation de leur part. Les spécifications peuvent changer sans préavis. Les marques tierces, y compris les logos et les icônes, restent la propriété de leurs détenteurs. En l\'absence d\'indications contraires, l\'utilisation de ces marques n\'implique aucune relation, parrainage ou approbation de la part des propriétaires. Les références à des marques tierces visent simplement à identifier les produits et services de manière équitable, en respectant le droit des marques. Cette offre privée est gérée par une société indépendante non liée au propriétaire initial des marques/produits mentionnés ici.');
  await page.getByRole('link', { name: 'S’abonner' }).click();
  await expect(page.getByText('AccueilS abonner')).toBeVisible();
  await expect(page.locator('#main')).toContainText('01 76 44 03 44');
  await expect(page.locator('#main')).toContainText('contact@tech-vip.com');  
  await expect(page.locator('#subscriber-form')).toContainText('J\'ai plus de 18 ans et j\'accepte les conditions générales de vente et le fait d’être débité de 29,90€/mois ou 75€/trimestre sans engagement de durée à l\'issu de ma période d\'essai de 72h.');
  await expect(page.locator('#su')).toContainText('Soit par email : contact@tech-vip.com');
  await expect(page.locator('#su')).toContainText('Soit par téléphone au 01 76 40 25 18 du lundi au vendredi (09h00 à 18h00)');
  await expect(page.locator('#su')).toContainText('Notre club fonctionne avec un abonnement mensuel de (29,90€/mois ou 75€/trimestre), tacitement reconductible et sans engagement de durée.');
  await expect(page.locator('#su')).toContainText('Lorsque vous souscrivez à un abonnement tech-vip.com, vous bénéficiez automatiquement d’une période découverte de 72h qui ne vous est facturée que 1€ ainsi qu\'une offre de bienvenue pour un remboursement de 80€. Pour profiter de cette offre vous devez acheter le produit indiqué sur l\'offre promotionnelle, envoyer la facture à contact@tech-vip.com et vous recevrez le remboursement sous 30 jours sur le compte paypal associé à votre email.');
  await expect(page.locator('#su')).toContainText('A l’issu de cette période de 72h, et si vous ne nous avez pas fait part de votre souhait de vous désabonner, votre abonnement sera confirmé et vous serez prélevé de 29,90€ si vous choisissez l\'abonnement mensuel ou 75€ si vous choisissez l\'abonnement trimestriel.');
  await expect(page.getByText('Toutes les transactions')).toBeVisible();
  await expect(page.locator('#su')).toContainText('Le site tech-vip.com est édité par la société CASSIOPEIA DIGITAL LTD. Imatriculée au registre des sociétés de l\'Angleterre et du Pays de Galles sous le n° 12829698 et dont le siège social est situé au OFFICE 9, DALTON HOUSE 60 WINDSOR AVENUE LONDON - UNITED KINGDOM - SW19 2RR');
  await page.getByRole('contentinfo').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await expect(page.getByRole('contentinfo')).toContainText('01 76 44 03 44');
  await expect(page.getByRole('heading', { name: 'tech-vip.com', exact: true }).locator('b')).toBeVisible();
  await expect(page.getByRole('contentinfo')).toContainText('Le site tech-vip.com, propose un service par abonnement mensuel de (29,90€/mois ou 75€/trimestre) à reconduction tacite sans engagement de durée.');
  await expect(page.getByRole('contentinfo')).toContainText('Le service proposé par tech-vip.com est facturé sous forme d’abonnement mensuel de 29,90€/mois ou 75€/trimestre avec reconduction tacite et sans engagement de durée');
  await expect(page.getByRole('contentinfo')).toContainText('Site édité par CASSIOPEIA DIGITAL LTD.Imatriculée sous le n° 12829698 et dont le siège social est situé au OFFICE 9, DALTON HOUSE 60 WINDSOR AVENUE- LONDON - UNITED KINGDOM- SW19 2RR');
  await expect(page.getByRole('contentinfo')).toContainText('Les entreprises et produits cités sont des marques de commerce™ ou des marques déposées® appartenant à leurs propriétaires respectifs. L\'utilisation de ces marques ne suggère aucun lien ou approbation de leur part. Les spécifications peuvent changer sans préavis. Les marques tierces, y compris les logos et les icônes, restent la propriété de leurs détenteurs. En l\'absence d\'indications contraires, l\'utilisation de ces marques n\'implique aucune relation, parrainage ou approbation de la part des propriétaires. Les références à des marques tierces visent simplement à identifier les produits et services de manière équitable, en respectant le droit des marques. Cette offre privée est gérée par une société indépendante non liée au propriétaire initial des marques/produits mentionnés ici.');
  await page.locator('//a[contains(@href,"contact")][text()="formulaire"]').click();
  await expect(page.locator('#main')).toContainText('01 76 44 03 44');
  await expect(page.locator('#main')).toContainText('contact@tech-vip.com');
  await expect(page.locator('#main')).toContainText('AccueilContact');
  await expect(page.locator('#co')).toContainText('Vous pouvez également nous contacter par téléphone au 01 76 44 03 44 du lundi au vendredi (09h00 à 18h00)');
  await expect(page.locator('#co')).toContainText('Site édité par CASSIOPEIA DIGITAL LTD. Immatriculée sous le n° 12829698 et dont le siège social est situé au OFFICE 9, DALTON HOUSE 60 WINDSOR AVENUE- LONDON - UNITED KINGDOM- SW19 2RR');
  await page.getByRole('contentinfo').evaluate(el => el.scrollIntoView({ behavior: 'smooth' })); 
  await expect(page.getByRole('contentinfo')).toContainText('01 76 44 03 44');
  await expect(page.locator('h4')).toContainText('tech-vip.com');
  await expect(page.getByRole('contentinfo')).toContainText('Le site tech-vip.com, propose un service par abonnement mensuel de (29,90€/mois ou 75€/trimestre) à reconduction tacite sans engagement de durée.');
  await expect(page.getByRole('contentinfo')).toContainText('Le service proposé par tech-vip.com est facturé sous forme d’abonnement mensuel de 29,90€/mois ou 75€/trimestre avec reconduction tacite et sans engagement de durée');
  await expect(page.getByRole('contentinfo')).toContainText('Site édité par CASSIOPEIA DIGITAL LTD.Imatriculée sous le n° 12829698 et dont le siège social est situé au OFFICE 9, DALTON HOUSE 60 WINDSOR AVENUE- LONDON - UNITED KINGDOM- SW19 2RR');
  await expect(page.getByRole('contentinfo')).toContainText('Les entreprises et produits cités sont des marques de commerce™ ou des marques déposées® appartenant à leurs propriétaires respectifs. L\'utilisation de ces marques ne suggère aucun lien ou approbation de leur part. Les spécifications peuvent changer sans préavis. Les marques tierces, y compris les logos et les icônes, restent la propriété de leurs détenteurs. En l\'absence d\'indications contraires, l\'utilisation de ces marques n\'implique aucune relation, parrainage ou approbation de la part des propriétaires. Les références à des marques tierces visent simplement à identifier les produits et services de manière équitable, en respectant le droit des marques. Cette offre privée est gérée par une société indépendante non liée au propriétaire initial des marques/produits mentionnés ici.');
  await page.locator('#co').getByRole('link', { name: 'FAQ' }).click();
  await page.waitForLoadState('networkidle');
  await expect(page.getByRole('link', { name: ' 01 76 44 03' })).toBeVisible();
  await expect(page.getByRole('link', { name: ' contact@tech-vip.com' })).toBeVisible();
  await page.locator('a').filter({ hasText: 'Comment fonctionne Tech-Vip ?' }).click();
  await expect(page.locator('#fq')).toContainText('Le principe est simple, les personnes qui font partie du club bénéficient toute l’année de réductions immédiates sur leurs achats au sein de notre site. Pour faire partie du club il vous suffit de vous abonner pour seulement 29,90€/mois ou 75€/trimestre.');
  await page.locator('a').filter({ hasText: 'Y-a-t-il des frais supplé' }).click();
  await expect(page.locator('#fq')).toContainText('L\'abonnement à Tech-Vip.com est de 29,90€ par mois ou 75€ par trimestre, ce montant vous permet de bénéficier toute l’année de réductions immédiates sur tous vos achats au sein de notre site et les frais de livraison sont OFFERTS.');
  await page.locator('a').filter({ hasText: 'Je souhaite de désabonner,' }).click();
  await expect(page.locator('#fq')).toContainText('L’abonnement n’a aucun engagement de durée, vous pouvez vous désabonner quand vous le souhaitez depuis notre site, votre espace membre ou en nous contactant par mail au : contact@tech-vip.com');
  await page.locator('a').filter({ hasText: 'Quand serais-je débité de mon' }).click();
  await page.locator('a').filter({ hasText: 'Comment puis-je vous' }).click();
  await expect(page.locator('#fq')).toContainText('Par mail via l\'adresse contact@tech-vip.com');
  await expect(page.locator('#fq')).toContainText('Par téléphone au 01 76 44 03 44 du lundi au vendredi (09h à 18h)');
  await page.locator('a').filter({ hasText: 'Qu\'est-ce que l\'Offre de' }).click();
  await expect(page.locator('#fq')).toContainText('Si vous souscrivez à notre offre vous serez débité de 29.90€ le premier mois pour un abonnement mensuel ou 75€ pour un abonnement trimestriel.');
  await page.locator('a').filter({ hasText: 'Mon paiement est-il sécurisé ?' }).click();
  await page.locator('a').filter({ hasText: 'Quand recevrai-je ma commande' }).click();
  await page.locator('a').filter({ hasText: 'Y a t-il une limite de' }).click();
  await page.locator('a').filter({ hasText: 'Le produit commandé est arriv' }).click();
  await expect(page.locator('#fq')).toContainText('Veuillez nous envoyer un mail accompagné d’une photo à contact@tech-vip.com et nous trouverons une solution ensemble');
  await page.locator('a').filter({ hasText: 'Est-ce possible de me faire' }).click();
  await page.locator('a').filter({ hasText: 'Quels produits puis-je' }).click();
  await expect(page.locator('#fq')).toContainText('Notre objectif est de vous offrir une sélection de produits de grande consommation avec des réductions très intéressantes réservées aux membres du club Tech-Vip');
  await page.locator('a').filter({ hasText: 'Est-ce que je peux modifier' }).click();
  await page.locator('a').filter({ hasText: 'Est-il possible de consulter' }).click();
  await page.getByRole('link', { name: 'Ecrivez-nous' }).click();
  await page.waitForLoadState('networkidle');
  await expect(page.locator('#main')).toContainText('01 76 44 03 44');
  await expect(page.locator('#main')).toContainText('contact@tech-vip.com');
  await expect(page.locator('#main')).toContainText('AccueilContact');
  await expect(page.getByText('Vous pouvez également nous')).toBeVisible();
  await expect(page.locator('#co')).toContainText('Vous pouvez également nous contacter par téléphone au 01 76 44 03 44 du lundi au vendredi (09h00 à 18h00)');
  await expect(page.locator('#co')).toContainText('Site édité par CASSIOPEIA DIGITAL LTD. Immatriculée sous le n° 12829698 et dont le siège social est situé au OFFICE 9, DALTON HOUSE 60 WINDSOR AVENUE- LONDON - UNITED KINGDOM- SW19 2RR');
  await page.getByRole('contentinfo').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await expect(page.getByRole('contentinfo')).toContainText('01 76 44 03 44');
  await expect(page.locator('h4')).toContainText('tech-vip.com');
  await expect(page.getByRole('contentinfo')).toContainText('Le site tech-vip.com, propose un service par abonnement mensuel de (29,90€/mois ou 75€/trimestre) à reconduction tacite sans engagement de durée.');
  await expect(page.getByRole('contentinfo')).toContainText('Le service proposé par tech-vip.com est facturé sous forme d’abonnement mensuel de 29,90€/mois ou 75€/trimestre avec reconduction tacite et sans engagement de durée');
  await expect(page.getByRole('contentinfo')).toContainText('Site édité par CASSIOPEIA DIGITAL LTD.Imatriculée sous le n° 12829698 et dont le siège social est situé au OFFICE 9, DALTON HOUSE 60 WINDSOR AVENUE- LONDON - UNITED KINGDOM- SW19 2RR');
  await expect(page.getByRole('contentinfo')).toContainText('Les entreprises et produits cités sont des marques de commerce™ ou des marques déposées® appartenant à leurs propriétaires respectifs. L\'utilisation de ces marques ne suggère aucun lien ou approbation de leur part. Les spécifications peuvent changer sans préavis. Les marques tierces, y compris les logos et les icônes, restent la propriété de leurs détenteurs. En l\'absence d\'indications contraires, l\'utilisation de ces marques n\'implique aucune relation, parrainage ou approbation de la part des propriétaires. Les références à des marques tierces visent simplement à identifier les produits et services de manière équitable, en respectant le droit des marques. Cette offre privée est gérée par une société indépendante non liée au propriétaire initial des marques/produits mentionnés ici.');
  await page.goto('https://tech-vip.com/fr/su/s-abonner.html');
  await page.getByRole('link', { name: 'formulaire de rétractation.' }).click();
  await page.waitForLoadState('networkidle');
  await expect(page.locator('#main')).toContainText('01 76 44 03 44');
  await expect(page.locator('#main')).toContainText('contact@tech-vip.com');
  await expect(page.getByText('AccueilRetractation')).toBeVisible();
  await page.getByRole('contentinfo').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await expect(page.getByRole('contentinfo')).toContainText('01 76 44 03 44');
  await expect(page.locator('h4')).toContainText('tech-vip.com');
  await expect(page.getByRole('contentinfo')).toContainText('Le site tech-vip.com, propose un service par abonnement mensuel de (29,90€/mois ou 75€/trimestre) à reconduction tacite sans engagement de durée.');
  await expect(page.getByRole('contentinfo')).toContainText('Le service proposé par tech-vip.com est facturé sous forme d’abonnement mensuel de 29,90€/mois ou 75€/trimestre avec reconduction tacite et sans engagement de durée');
  await expect(page.getByRole('contentinfo')).toContainText('Site édité par CASSIOPEIA DIGITAL LTD.Imatriculée sous le n° 12829698 et dont le siège social est situé au OFFICE 9, DALTON HOUSE 60 WINDSOR AVENUE- LONDON - UNITED KINGDOM- SW19 2RR');
  await expect(page.getByRole('contentinfo')).toContainText('Les entreprises et produits cités sont des marques de commerce™ ou des marques déposées® appartenant à leurs propriétaires respectifs. L\'utilisation de ces marques ne suggère aucun lien ou approbation de leur part. Les spécifications peuvent changer sans préavis. Les marques tierces, y compris les logos et les icônes, restent la propriété de leurs détenteurs. En l\'absence d\'indications contraires, l\'utilisation de ces marques n\'implique aucune relation, parrainage ou approbation de la part des propriétaires. Les références à des marques tierces visent simplement à identifier les produits et services de manière équitable, en respectant le droit des marques. Cette offre privée est gérée par une société indépendante non liée au propriétaire initial des marques/produits mentionnés ici.');
  await page.goto('https://tech-vip.com/fr/su/s-abonner.html');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'conditions générales de vente' }).click();
  const page1 = await page1Promise;
  await expect(page1.getByRole('link', { name: ' 01 76 44 03' })).toBeVisible();
  await expect(page1.locator('#main')).toContainText('01 76 44 03 44');
  await expect(page1.locator('#main')).toContainText('contact@tech-vip.com');
  await expect(page1.getByText('AccueilCgv')).toBeVisible();
  await expect(page1.locator('#ts')).toContainText('Les Présentes Conditions Générales de Vente (ci-après « Conditions Générales » ou « CGV ») ont pour objet de préciser les droits et obligations des parties entre CASSIOPEIA Digital Ltd, immatriculée au registre des sociétés d’Angleterre et du Pays de galles sous le n° 12829698, dont le siège social se situe OFFICE 9, DALTON HOUSE 60 WINDSOR AVENUE- LONDON - UNITED KINGDOM- SW19 2RR (ci-après la « Société » ou « Nous ») et toute personne ayant choisi de s’abonner au service (Ci-après l’« Abonné »).');
  await expect(page1.locator('#ts')).toContainText('Adresse courriel du service clients : contact@tech-vip.com');
  await expect(page1.locator('#ts')).toContainText('Numéro de téléphone du service clients : 01 76 44 03 44 (Du lundi au vendredi 09h à 18h00)');
  await expect(page1.locator('#ts')).toContainText('Le Site internet est hébergé chez Anyfes Digital Almogàvers, 29-31, Les Roquetes, Sant Père de Ribes 08812 Barcelone, Espagne');
  await expect(page1.getByText('d’une part d’un contre')).toBeVisible();
  await expect(page1.locator('#ts')).toContainText('A l’issue de cette période de 72h, en l’absence de résiliation par l’Abonné, l’Abonnement de 29,90€ (ou 75€ par trimestre) prendra alors effet automatiquement et se poursuivra selon les modalités fixées à l’article 5 des CGV.');
  await expect(page1.locator('#ts')).toContainText('- Dans un troisième temps, dans les 30 jours suivant la souscription à l’Abonnement, l’Abonné devra adresser la facture d’achat du Produit Promotionnel à l’adresse suivante : contact@tech-vip.com');
  await expect(page1.locator('#ts')).toContainText('- soit par un e-mail envoyé au Service Client de tech-vip.com à l’adresse courriel suivante : contact@tech-vip.com');
  await expect(page1.locator('#ts')).toContainText('Le coût de l’abonnement au Service s’élève à la somme de 29,90€ TTC par mois, ou 75€ par trimestre, selon la formule d’abonnement choisie par l’Abonné au moment de la souscription.');
  await expect(page1.locator('#ts')).toContainText('Le paiement du montant de l’Abonnement s’effectue exclusivement par carte bancaire. La carte bancaire sera débitée de 29,90€ chaque mois (ou de 75€ par trimestre) et cela jusqu’à ce que l’Abonné souhaite mettre fin à son Abonnement dans les conditions énoncées à l’article 5. a) des CGV.');
  await expect(page1.locator('#ts')).toContainText('Par courrier postal à CASSIOPEIA Digital Ltd, OFFICE 9, DALTON HOUSE 60 WINDSOR AVENUE- LONDON - UNITED KINGDOM- SW19 2RR, ou');
  await expect(page1.locator('#ts')).toContainText('- par email à contact@tech-vip.com');
  await expect(page1.locator('#ts')).toContainText('Dans le cas où l’Abonné ne reçoit pas le Produit commandé dans ce délai, il peut contacter la Société par e-mail : contact@tech-vip.com ou par téléphone au 01 76 44 03 44.');
  await expect(page1.locator('#ts')).toContainText('Conformément aux dispositions de la loi n°78-17 dite loi Informatique et libertés, du 6 janvier 1978 et au règlement de l’UE 2016/679 applicable depuis le 25 mai 2018, l’Abonné dispose d\'un droit d’obtention, d’effacement, d’opposition, d\'accès, de rectification et de suppression de toutes données personnelles le concernant obtenues par la Société lors de l\'utilisation du Service. Tout Abonné peut exercer ce droit en envoyant un e-mail à l\'adresse');
  await expect(page1.locator('#ts')).toContainText('- en envoyant un email à l\'adresse suivante : contact@tech-vip.com , ou');
  await expect(page1.locator('#ts')).toContainText('- en contactant le support téléphonique au numéro suivant : 01 76 44 03 44.');
  await page.getByRole('contentinfo').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await expect(page1.getByRole('contentinfo')).toContainText('01 76 44 03 44');
  await expect(page1.getByRole('heading', { name: 'tech-vip.com' })).toBeVisible();
  await expect(page1.getByRole('contentinfo')).toContainText('Le site tech-vip.com, propose un service par abonnement mensuel de (29,90€/mois ou 75€/trimestre) à reconduction tacite sans engagement de durée.');
  await expect(page1.getByRole('contentinfo')).toContainText('Le service proposé par tech-vip.com est facturé sous forme d’abonnement mensuel de 29,90€/mois ou 75€/trimestre avec reconduction tacite et sans engagement de durée');
  await expect(page1.getByRole('contentinfo')).toContainText('Site édité par CASSIOPEIA DIGITAL LTD.Imatriculée sous le n° 12829698 et dont le siège social est situé au OFFICE 9, DALTON HOUSE 60 WINDSOR AVENUE- LONDON - UNITED KINGDOM- SW19 2RR');
  await expect(page1.getByRole('contentinfo')).toContainText('Les entreprises et produits cités sont des marques de commerce™ ou des marques déposées® appartenant à leurs propriétaires respectifs. L\'utilisation de ces marques ne suggère aucun lien ou approbation de leur part. Les spécifications peuvent changer sans préavis. Les marques tierces, y compris les logos et les icônes, restent la propriété de leurs détenteurs. En l\'absence d\'indications contraires, l\'utilisation de ces marques n\'implique aucune relation, parrainage ou approbation de la part des propriétaires. Les références à des marques tierces visent simplement à identifier les produits et services de manière équitable, en respectant le droit des marques. Cette offre privée est gérée par une société indépendante non liée au propriétaire initial des marques/produits mentionnés ici.');
  await page1.close();
  await page.getByRole('link', { name: '' }).click();
  await page.getByRole('link', { name: ' Retour sur le site' }).click();
  await page.waitForLoadState('networkidle');
  await page.locator('.menu-toggle').click();
  await page.getByRole('link', { name: 'CGV', exact: true }).click();
  await expect(page.locator('#main')).toContainText('01 76 44 03 44');
  await expect(page.locator('#main')).toContainText('contact@tech-vip.com');
  await expect(page.locator('#main')).toContainText('AccueilCgv');
  await expect(page.locator('#ts')).toContainText('www.tech-vip.com');
  await expect(page.locator('#ts')).toContainText('Les Présentes Conditions Générales de Vente (ci-après « Conditions Générales » ou « CGV ») ont pour objet de préciser les droits et obligations des parties entre CASSIOPEIA Digital Ltd, immatriculée au registre des sociétés d’Angleterre et du Pays de galles sous le n° 12829698, dont le siège social se situe OFFICE 9, DALTON HOUSE 60 WINDSOR AVENUE- LONDON - UNITED KINGDOM- SW19 2RR (ci-après la « Société » ou « Nous ») et toute personne ayant choisi de s’abonner au service (Ci-après l’« Abonné »).');
  await expect(page.locator('#ts')).toContainText('Adresse courriel du service clients : contact@tech-vip.com');
  await expect(page.locator('#ts')).toContainText('Numéro de téléphone du service clients : 01 76 44 03 44 (Du lundi au vendredi 09h à 18h00)');
  await expect(page.locator('#ts')).toContainText('Le Site internet est hébergé chez Anyfes Digital Almogàvers, 29-31, Les Roquetes, Sant Père de Ribes 08812 Barcelone, Espagne');
  await expect(page.locator('#ts')).toContainText('A l’issue de cette période de 72h, en l’absence de résiliation par l’Abonné, l’Abonnement de 29,90€ (ou 75€ par trimestre) prendra alors effet automatiquement et se poursuivra selon les modalités fixées à l’article 5 des CGV.');
  await expect(page.locator('#ts')).toContainText('- Dans un troisième temps, dans les 30 jours suivant la souscription à l’Abonnement, l’Abonné devra adresser la facture d’achat du Produit Promotionnel à l’adresse suivante : contact@tech-vip.com');
  await expect(page.locator('#ts')).toContainText('- soit par un e-mail envoyé au Service Client de tech-vip.com à l’adresse courriel suivante : contact@tech-vip.com');
  await expect(page.locator('#ts')).toContainText('Le coût de l’abonnement au Service s’élève à la somme de 29,90€ TTC par mois, ou 75€ par trimestre, selon la formule d’abonnement choisie par l’Abonné au moment de la souscription.');
  await expect(page.locator('#ts')).toContainText('Le paiement du montant de l’Abonnement s’effectue exclusivement par carte bancaire. La carte bancaire sera débitée de 29,90€ chaque mois (ou de 75€ par trimestre) et cela jusqu’à ce que l’Abonné souhaite mettre fin à son Abonnement dans les conditions énoncées à l’article 5. a) des CGV.');
  await expect(page.locator('#ts')).toContainText('Par courrier postal à CASSIOPEIA Digital Ltd, OFFICE 9, DALTON HOUSE 60 WINDSOR AVENUE- LONDON - UNITED KINGDOM- SW19 2RR, ou');
  await expect(page.locator('#ts')).toContainText('- par email à contact@tech-vip.com');
  await expect(page.locator('#ts')).toContainText('Dans le cas où l’Abonné ne reçoit pas le Produit commandé dans ce délai, il peut contacter la Société par e-mail : contact@tech-vip.com ou par téléphone au 01 76 44 03 44.');
  await expect(page.locator('#ts')).toContainText('Conformément aux dispositions de la loi n°78-17 dite loi Informatique et libertés, du 6 janvier 1978 et au règlement de l’UE 2016/679 applicable depuis le 25 mai 2018, l’Abonné dispose d\'un droit d’obtention, d’effacement, d’opposition, d\'accès, de rectification et de suppression de toutes données personnelles le concernant obtenues par la Société lors de l\'utilisation du Service. Tout Abonné peut exercer ce droit en envoyant un e-mail à l\'adresse');
  await expect(page.locator('#ts')).toContainText('- en envoyant un email à l\'adresse suivante : contact@tech-vip.com , ou');
  await expect(page.locator('#ts')).toContainText('- en contactant le support téléphonique au numéro suivant : 01 76 44 03 44.');
  await expect(page.getByRole('contentinfo')).toContainText('01 76 44 03 44');
  await expect(page.getByText('tech-vip.com', { exact: true })).toBeVisible();
  await expect(page.getByRole('contentinfo')).toContainText('Le site tech-vip.com, propose un service par abonnement mensuel de (29,90€/mois ou 75€/trimestre) à reconduction tacite sans engagement de durée.');
  await expect(page.getByRole('contentinfo')).toContainText('Le service proposé par tech-vip.com est facturé sous forme d’abonnement mensuel de 29,90€/mois ou 75€/trimestre avec reconduction tacite et sans engagement de durée');
  await expect(page.getByRole('contentinfo')).toContainText('Site édité par CASSIOPEIA DIGITAL LTD.Imatriculée sous le n° 12829698 et dont le siège social est situé au OFFICE 9, DALTON HOUSE 60 WINDSOR AVENUE- LONDON - UNITED KINGDOM- SW19 2RR');
  await expect(page.getByRole('contentinfo')).toContainText('Les entreprises et produits cités sont des marques de commerce™ ou des marques déposées® appartenant à leurs propriétaires respectifs. L\'utilisation de ces marques ne suggère aucun lien ou approbation de leur part. Les spécifications peuvent changer sans préavis. Les marques tierces, y compris les logos et les icônes, restent la propriété de leurs détenteurs. En l\'absence d\'indications contraires, l\'utilisation de ces marques n\'implique aucune relation, parrainage ou approbation de la part des propriétaires. Les références à des marques tierces visent simplement à identifier les produits et services de manière équitable, en respectant le droit des marques. Cette offre privée est gérée par une société indépendante non liée au propriétaire initial des marques/produits mentionnés ici.');
  await page.locator('.menu-toggle').click();
  await page.locator('#menu-item-1819').getByRole('link', { name: 'Mentions légales' }).click();
  await expect(page.locator('#main')).toContainText('01 76 44 03 44');
  await expect(page.locator('#main')).toContainText('contact@tech-vip.com');
  await expect(page.getByText('AccueilMention legales')).toBeVisible();
  await expect(page.locator('#lm')).toContainText('Imatriculéesous le n° 12829698 et dont le siège social est situé au OFFICE 9, DALTON HOUSE 60 WINDSOR AVENUE - LONDON - UNITED KINGDOM SW19 2RR');
  await expect(page.locator('#lm')).toContainText('Mentions Légales');
  await expect(page.locator('h3')).toContainText('Site édité par CASSIOPEIA DIGITAL LTD.');
  await expect(page.locator('#lm')).toContainText('Email : contact@tech-vip.com');
  await expect(page.locator('#lm')).toContainText('Téléphone au 01 76 44 03 44 du lundi au vendredi (09h00 à 18h00)');
  await page.getByRole('contentinfo').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await expect(page.getByRole('contentinfo')).toContainText('01 76 44 03 44');
  await expect(page.getByRole('contentinfo')).toContainText('Le site tech-vip.com, propose un service par abonnement mensuel de (29,90€/mois ou 75€/trimestre) à reconduction tacite sans engagement de durée.');
  await expect(page.locator('h4')).toContainText('tech-vip.com');
  await expect(page.getByRole('contentinfo')).toContainText('Le service proposé par tech-vip.com est facturé sous forme d’abonnement mensuel de 29,90€/mois ou 75€/trimestre avec reconduction tacite et sans engagement de durée');
  await expect(page.getByRole('contentinfo')).toContainText('Site édité par CASSIOPEIA DIGITAL LTD.Imatriculée sous le n° 12829698 et dont le siège social est situé au OFFICE 9, DALTON HOUSE 60 WINDSOR AVENUE- LONDON - UNITED KINGDOM- SW19 2RR');
  await expect(page.getByRole('contentinfo')).toContainText('Les entreprises et produits cités sont des marques de commerce™ ou des marques déposées® appartenant à leurs propriétaires respectifs. L\'utilisation de ces marques ne suggère aucun lien ou approbation de leur part. Les spécifications peuvent changer sans préavis. Les marques tierces, y compris les logos et les icônes, restent la propriété de leurs détenteurs. En l\'absence d\'indications contraires, l\'utilisation de ces marques n\'implique aucune relation, parrainage ou approbation de la part des propriétaires. Les références à des marques tierces visent simplement à identifier les produits et services de manière équitable, en respectant le droit des marques. Cette offre privée est gérée par une société indépendante non liée au propriétaire initial des marques/produits mentionnés ici.');
  await page.locator('.menu-toggle').click();
  await page.getByRole('link', { name: 'Expédition & Livraision' }).click();
  await expect(page.locator('#main')).toContainText('01 76 44 03 44');
  await expect(page.locator('#main')).toContainText('contact@tech-vip.com');
  await expect(page.getByText('AccueilMenu.view_sd')).toBeVisible();
  await expect(page.locator('#sd')).toContainText('Votre commande n\'est pas arrivée en raison de circonstances exceptionnelles hors de notre contrôle tech-vip.com (ex : non dédouané par les douanes, retardé par une catastrophe naturelle).');
  await expect(page.locator('#sd')).toContainText('D\'autres circonstances exceptionnelles hors de notre contrôle https://shop.tech-vip.com');
  await page.getByRole('contentinfo').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await expect(page.getByRole('contentinfo')).toContainText('01 76 44 03 44');
  await expect(page.getByRole('heading', { name: 'tech-vip.com' }).locator('b')).toBeVisible();
  await expect(page.getByRole('contentinfo')).toContainText('Le site tech-vip.com, propose un service par abonnement mensuel de (29,90€/mois ou 75€/trimestre) à reconduction tacite sans engagement de durée.');
  await expect(page.getByRole('contentinfo')).toContainText('Le service proposé par tech-vip.com est facturé sous forme d’abonnement mensuel de 29,90€/mois ou 75€/trimestre avec reconduction tacite et sans engagement de durée');
  await expect(page.getByRole('contentinfo')).toContainText('Site édité par CASSIOPEIA DIGITAL LTD.Imatriculée sous le n° 12829698 et dont le siège social est situé au OFFICE 9, DALTON HOUSE 60 WINDSOR AVENUE- LONDON - UNITED KINGDOM- SW19 2RR');
  await expect(page.getByRole('contentinfo')).toContainText('Les entreprises et produits cités sont des marques de commerce™ ou des marques déposées® appartenant à leurs propriétaires respectifs. L\'utilisation de ces marques ne suggère aucun lien ou approbation de leur part. Les spécifications peuvent changer sans préavis. Les marques tierces, y compris les logos et les icônes, restent la propriété de leurs détenteurs. En l\'absence d\'indications contraires, l\'utilisation de ces marques n\'implique aucune relation, parrainage ou approbation de la part des propriétaires. Les références à des marques tierces visent simplement à identifier les produits et services de manière équitable, en respectant le droit des marques. Cette offre privée est gérée par une société indépendante non liée au propriétaire initial des marques/produits mentionnés ici.');
  await page.locator('.menu-toggle').click();
  await page.locator('#menu-item-1821').getByRole('link', { name: 'Politique de remboursement et' }).click();
  await expect(page.locator('#main')).toContainText('01 76 44 03 44');
  await expect(page.locator('#main')).toContainText('contact@tech-vip.com');
  await expect(page.getByText('AccueilMenu.view_rp')).toBeVisible();
  await expect(page.locator('#rp')).toContainText('Tous nos produits bénéficient d’une garantie de remboursement de 60 jours. Envoyez-nous simplement un message sur la page Contactez-nous ou contactez-nous sur contact@tech-vip.com et nous vous rembourserons le prix d’achat.');
  await page.getByRole('contentinfo').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await expect(page.getByRole('contentinfo')).toContainText('01 76 44 03 44');
  await expect(page.locator('h4')).toContainText('tech-vip.com'); 
  await expect(page.getByRole('contentinfo')).toContainText('Le site tech-vip.com, propose un service par abonnement mensuel de (29,90€/mois ou 75€/trimestre) à reconduction tacite sans engagement de durée.');
  await expect(page.getByRole('contentinfo')).toContainText('Le service proposé par tech-vip.com est facturé sous forme d’abonnement mensuel de 29,90€/mois ou 75€/trimestre avec reconduction tacite et sans engagement de durée');
  await expect(page.getByRole('contentinfo')).toContainText('Site édité par CASSIOPEIA DIGITAL LTD.Imatriculée sous le n° 12829698 et dont le siège social est situé au OFFICE 9, DALTON HOUSE 60 WINDSOR AVENUE- LONDON - UNITED KINGDOM- SW19 2RR');
  await expect(page.getByRole('contentinfo')).toContainText('Les entreprises et produits cités sont des marques de commerce™ ou des marques déposées® appartenant à leurs propriétaires respectifs. L\'utilisation de ces marques ne suggère aucun lien ou approbation de leur part. Les spécifications peuvent changer sans préavis. Les marques tierces, y compris les logos et les icônes, restent la propriété de leurs détenteurs. En l\'absence d\'indications contraires, l\'utilisation de ces marques n\'implique aucune relation, parrainage ou approbation de la part des propriétaires. Les références à des marques tierces visent simplement à identifier les produits et services de manière équitable, en respectant le droit des marques. Cette offre privée est gérée par une société indépendante non liée au propriétaire initial des marques/produits mentionnés ici.');
  await page.locator('.menu-toggle').click();
  await page.locator('#menu-item-1822').getByRole('link', { name: 'Politique de Confidentialité' }).click();
  await expect(page.locator('#main')).toContainText('01 76 44 03 44');
  await expect(page.locator('#main')).toContainText('contact@tech-vip.com');
  await expect(page.getByText('AccueilMenu.view_pp')).toBeVisible();
  await expect(page.locator('#pp')).toContainText('Le site tech-vip.com accessible via le lien suivant tech-vip.com est édité par la société CASSIOPEIA DIGITAL LTD., immatriculée au OFFICE 9, DALTON HOUSE 60 WINDSOR AVENUE - LONDON - UNITED KINGDOM SW19 2RR , enregistrée sous le numéro 998459. La présente Politique de Protection des données à caractère personnel vous informe de manière transparente sur notre politique en matière de sécurité, de protection et de confidentialité des traitements effectués sur les données à caractère personnel que vous nous confiez lorsque vous naviguez sur le site.');
  await expect(page.getByText('CASSIOPEIA DIGITAL LTD., est')).toBeVisible();
  await expect(page.locator('#pp')).toContainText('Adresse postale : au OFFICE 9, DALTON HOUSE 60 WINDSOR AVENUE - LONDON - UNITED KINGDOM SW19 2RRCourriel : contact@tech-vip.comTéléphone : 01 76 44 03 44Section du site web : https://tech-vip.com/');
  await expect(page.locator('#pp')).toContainText('Siège social : C/ ALMOGÀVERS, 29-31, 08812 LES ROQUETES, Espagne');
  await expect(page.locator('#pp')).toContainText('Des données à caractère personnel peuvent être collectées et/ou traitées par la société CASSIOPEIA DIGITAL LTD. lorsque vous vous inscrivez au site tech-vip.com ou que vous passez une commande sur une de pages du site tech-vip.com.');
  await expect(page.locator('#pp')).toContainText('Pour vous faire parvenir les commandes passées sur le site https://tech-vip.com ;');
  await page.getByRole('contentinfo').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await expect(page.getByRole('contentinfo')).toContainText('01 76 44 03 44');
  await expect(page.getByRole('heading', { name: 'tech-vip.com' }).locator('b')).toBeVisible();
  await expect(page.getByRole('contentinfo')).toContainText('Le site tech-vip.com, propose un service par abonnement mensuel de (29,90€/mois ou 75€/trimestre) à reconduction tacite sans engagement de durée.');
  await expect(page.getByRole('contentinfo')).toContainText('Le service proposé par tech-vip.com est facturé sous forme d’abonnement mensuel de 29,90€/mois ou 75€/trimestre avec reconduction tacite et sans engagement de durée');
  await expect(page.getByRole('contentinfo')).toContainText('Site édité par CASSIOPEIA DIGITAL LTD.Imatriculée sous le n° 12829698 et dont le siège social est situé au OFFICE 9, DALTON HOUSE 60 WINDSOR AVENUE- LONDON - UNITED KINGDOM- SW19 2RR');
  await expect(page.getByRole('contentinfo')).toContainText('Les entreprises et produits cités sont des marques de commerce™ ou des marques déposées® appartenant à leurs propriétaires respectifs. L\'utilisation de ces marques ne suggère aucun lien ou approbation de leur part. Les spécifications peuvent changer sans préavis. Les marques tierces, y compris les logos et les icônes, restent la propriété de leurs détenteurs. En l\'absence d\'indications contraires, l\'utilisation de ces marques n\'implique aucune relation, parrainage ou approbation de la part des propriétaires. Les références à des marques tierces visent simplement à identifier les produits et services de manière équitable, en respectant le droit des marques. Cette offre privée est gérée par une société indépendante non liée au propriétaire initial des marques/produits mentionnés ici.');
  await page.locator('.menu-toggle').click();
  await page.locator('#menu-item-1823').getByRole('link', { name: 'FAQ' }).click();
  await expect(page.locator('#main')).toContainText('01 76 44 03 44');
  await expect(page.locator('#main')).toContainText('contact@tech-vip.com');
  await expect(page.locator('div').filter({ hasText: 'AccueilFaqs' }).nth(2)).toBeVisible();
  await page.locator('a').filter({ hasText: 'Comment fonctionne Tech-Vip ?' }).click();
  await expect(page.locator('#fq')).toContainText('Le principe est simple, les personnes qui font partie du club bénéficient toute l’année de réductions immédiates sur leurs achats au sein de notre site. Pour faire partie du club il vous suffit de vous abonner pour seulement 29,90€/mois ou 75€/trimestre.');
  await page.locator('a').filter({ hasText: 'Y-a-t-il des frais supplé' }).click();
  await expect(page.locator('#fq')).toContainText('L\'abonnement à Tech-Vip.com est de 29,90€ par mois ou 75€ par trimestre, ce montant vous permet de bénéficier toute l’année de réductions immédiates sur tous vos achats au sein de notre site et les frais de livraison sont OFFERTS.');
  await page.locator('a').filter({ hasText: 'Je souhaite de désabonner,' }).click();
  await expect(page.locator('#fq')).toContainText('L’abonnement n’a aucun engagement de durée, vous pouvez vous désabonner quand vous le souhaitez depuis notre site, votre espace membre ou en nous contactant par mail au : contact@tech-vip.com');
  await page.locator('a').filter({ hasText: 'Quand serais-je débité de mon' }).click();
  await page.locator('a').filter({ hasText: 'Comment puis-je vous' }).click();
  await expect(page.locator('#fq')).toContainText('Par mail via l\'adresse contact@tech-vip.com');
  await expect(page.locator('#fq')).toContainText('Par téléphone au 01 76 44 03 44 du lundi au vendredi (09h à 18h)');
  await page.locator('a').filter({ hasText: 'Qu\'est-ce que l\'Offre de' }).click();
  await expect(page.locator('#fq')).toContainText('Si vous souscrivez à notre offre vous serez débité de 29.90€ le premier mois pour un abonnement mensuel ou 75€ pour un abonnement trimestriel.');
  await page.locator('a').filter({ hasText: 'Mon paiement est-il sécurisé ?' }).click();
  await page.locator('a').filter({ hasText: 'Quand recevrai-je ma commande' }).click();
  await page.locator('a').filter({ hasText: 'Y a t-il une limite de' }).click();
  await page.locator('a').filter({ hasText: 'Le produit commandé est arriv' }).click();
  await expect(page.locator('#fq')).toContainText('Veuillez nous envoyer un mail accompagné d’une photo à contact@tech-vip.com et nous trouverons une solution ensemble');
  await page.locator('a').filter({ hasText: 'Est-ce possible de me faire' }).click();
  await page.locator('a').filter({ hasText: 'Quels produits puis-je' }).click();
  await page.locator('a').filter({ hasText: 'Est-ce que je peux modifier' }).click();
  await page.locator('a').filter({ hasText: 'Est-il possible de consulter' }).click();
  await page.locator('.menu-toggle').click();
  await page.getByRole('link', { name: 'Contact', exact: true }).click();
  await expect(page.locator('#main')).toContainText('01 76 44 03 44');
  await expect(page.locator('#main')).toContainText('contact@tech-vip.com');
  await expect(page.getByText('AccueilContact')).toBeVisible();
  await expect(page.locator('#co')).toContainText('Vous pouvez également nous contacter par téléphone au 01 76 44 03 44 du lundi au vendredi (09h00 à 18h00)');
  await expect(page.locator('#co')).toContainText('Site édité par CASSIOPEIA DIGITAL LTD. Immatriculée sous le n° 12829698 et dont le siège social est situé au OFFICE 9, DALTON HOUSE 60 WINDSOR AVENUE- LONDON - UNITED KINGDOM- SW19 2RR');
  await page.getByRole('contentinfo').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await expect(page.getByRole('contentinfo')).toContainText('01 76 44 03 44');
  await expect(page.locator('h4')).toContainText('tech-vip.com');
  await expect(page.getByRole('contentinfo')).toContainText('Le site tech-vip.com, propose un service par abonnement mensuel de (29,90€/mois ou 75€/trimestre) à reconduction tacite sans engagement de durée.');
  await expect(page.getByRole('contentinfo')).toContainText('Le service proposé par tech-vip.com est facturé sous forme d’abonnement mensuel de 29,90€/mois ou 75€/trimestre avec reconduction tacite et sans engagement de durée');
  await expect(page.getByRole('contentinfo')).toContainText('Site édité par CASSIOPEIA DIGITAL LTD.Imatriculée sous le n° 12829698 et dont le siège social est situé au OFFICE 9, DALTON HOUSE 60 WINDSOR AVENUE- LONDON - UNITED KINGDOM- SW19 2RR');
  await expect(page.getByRole('contentinfo')).toContainText('Les entreprises et produits cités sont des marques de commerce™ ou des marques déposées® appartenant à leurs propriétaires respectifs. L\'utilisation de ces marques ne suggère aucun lien ou approbation de leur part. Les spécifications peuvent changer sans préavis. Les marques tierces, y compris les logos et les icônes, restent la propriété de leurs détenteurs. En l\'absence d\'indications contraires, l\'utilisation de ces marques n\'implique aucune relation, parrainage ou approbation de la part des propriétaires. Les références à des marques tierces visent simplement à identifier les produits et services de manière équitable, en respectant le droit des marques. Cette offre privée est gérée par une société indépendante non liée au propriétaire initial des marques/produits mentionnés ici.');
  await page.locator('.menu-toggle').click();
  await page.getByRole('link', { name: 'Notre offre' }).click();
  await expect(page.locator('#main')).toContainText('01 76 44 03 44');
  await expect(page.locator('#main')).toContainText('contact@tech-vip.com');
  await expect(page.getByText('AccueilLe concept')).toBeVisible();
  await page.getByRole('contentinfo').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await expect(page.getByRole('contentinfo')).toContainText('01 76 44 03 44');
  await expect(page.getByRole('heading', { name: 'tech-vip.com' })).toBeVisible();
  await expect(page.getByRole('contentinfo')).toContainText('Le site tech-vip.com, propose un service par abonnement mensuel de (29,90€/mois ou 75€/trimestre) à reconduction tacite sans engagement de durée.');
  await expect(page.getByRole('contentinfo')).toContainText('Le service proposé par tech-vip.com est facturé sous forme d’abonnement mensuel de 29,90€/mois ou 75€/trimestre avec reconduction tacite et sans engagement de durée');
  await expect(page.getByRole('contentinfo')).toContainText('Site édité par CASSIOPEIA DIGITAL LTD.Imatriculée sous le n° 12829698 et dont le siège social est situé au OFFICE 9, DALTON HOUSE 60 WINDSOR AVENUE- LONDON - UNITED KINGDOM- SW19 2RR');
  await expect(page.getByRole('contentinfo')).toContainText('Les entreprises et produits cités sont des marques de commerce™ ou des marques déposées® appartenant à leurs propriétaires respectifs. L\'utilisation de ces marques ne suggère aucun lien ou approbation de leur part. Les spécifications peuvent changer sans préavis. Les marques tierces, y compris les logos et les icônes, restent la propriété de leurs détenteurs. En l\'absence d\'indications contraires, l\'utilisation de ces marques n\'implique aucune relation, parrainage ou approbation de la part des propriétaires. Les références à des marques tierces visent simplement à identifier les produits et services de manière équitable, en respectant le droit des marques. Cette offre privée est gérée par une société indépendante non liée au propriétaire initial des marques/produits mentionnés ici.');
  await page.locator('.menu-toggle').click();
  await page.locator('#menu-item-1826').getByRole('link', { name: 'Suivre votre commande' }).click();
  await page.waitForLoadState('networkidle');
  await expect(page.locator('#main')).toContainText('01 76 44 03 44 contact@tech-vip.com');
  await expect(page.getByText('AccueilMenu.view_tr')).toBeVisible();
  await page.getByRole('contentinfo').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await expect(page.getByRole('contentinfo')).toContainText('01 76 44 03 44');
  await expect(page.getByRole('contentinfo')).toContainText('Le site tech-vip.com, propose un service par abonnement mensuel de (29,90€/mois ou 75€/trimestre) à reconduction tacite sans engagement de durée.');
  await expect(page.locator('h4')).toContainText('tech-vip.com');
  await expect(page.getByRole('contentinfo')).toContainText('Le service proposé par tech-vip.com est facturé sous forme d’abonnement mensuel de 29,90€/mois ou 75€/trimestre avec reconduction tacite et sans engagement de durée Site édité par CASSIOPEIA DIGITAL LTD.Imatriculée sous le n° 12829698 et dont le siège social est situé au OFFICE 9, DALTON HOUSE 60 WINDSOR AVENUE- LONDON - UNITED KINGDOM- SW19 2RR Les entreprises et produits cités sont des marques de commerce™ ou des marques déposées® appartenant à leurs propriétaires respectifs. L\'utilisation de ces marques ne suggère aucun lien ou approbation de leur part. Les spécifications peuvent changer sans préavis. Les marques tierces, y compris les logos et les icônes, restent la propriété de leurs détenteurs. En l\'absence d\'indications contraires, l\'utilisation de ces marques n\'implique aucune relation, parrainage ou approbation de la part des propriétaires. Les références à des marques tierces visent simplement à identifier les produits et services de manière équitable, en respectant le droit des marques. Cette offre privée est gérée par une société indépendante non liée au propriétaire initial des marques/produits mentionnés ici.');
  await page.locator('.menu-toggle').click();
  await page.locator('#menu-item-1827').getByRole('link', { name: 'Moyens de paiement' }).click();
  await expect(page.locator('#main')).toContainText('01 76 44 03 44 contact@tech-vip.com');
  await expect(page.getByText('AccueilMenu.view_pm')).toBeVisible();
  await page.getByRole('contentinfo').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await expect(page.getByRole('contentinfo')).toContainText('01 76 44 03 44');
  await expect(page.locator('h4')).toContainText('tech-vip.com');
  await expect(page.getByRole('contentinfo')).toContainText('Le site tech-vip.com, propose un service par abonnement mensuel de (29,90€/mois ou 75€/trimestre) à reconduction tacite sans engagement de durée.');
  await expect(page.getByRole('contentinfo')).toContainText('Le service proposé par tech-vip.com est facturé sous forme d’abonnement mensuel de 29,90€/mois ou 75€/trimestre avec reconduction tacite et sans engagement de durée Site édité par CASSIOPEIA DIGITAL LTD.Imatriculée sous le n° 12829698 et dont le siège social est situé au OFFICE 9, DALTON HOUSE 60 WINDSOR AVENUE- LONDON - UNITED KINGDOM- SW19 2RR Les entreprises et produits cités sont des marques de commerce™ ou des marques déposées® appartenant à leurs propriétaires respectifs. L\'utilisation de ces marques ne suggère aucun lien ou approbation de leur part. Les spécifications peuvent changer sans préavis. Les marques tierces, y compris les logos et les icônes, restent la propriété de leurs détenteurs. En l\'absence d\'indications contraires, l\'utilisation de ces marques n\'implique aucune relation, parrainage ou approbation de la part des propriétaires. Les références à des marques tierces visent simplement à identifier les produits et services de manière équitable, en respectant le droit des marques. Cette offre privée est gérée par une société indépendante non liée au propriétaire initial des marques/produits mentionnés ici.');
  await page.getByRole('link', { name: 'Cgv', exact: true }).click();
  await expect(page.locator('#main')).toContainText('01 76 44 03 44 contact@tech-vip.com');
  await expect(page.getByText('AccueilCgv')).toBeVisible();
  await expect(page.getByRole('paragraph').filter({ hasText: /^www\.tech-vip\.com$/ })).toBeVisible();
  await expect(page.locator('#ts')).toContainText('Les Présentes Conditions Générales de Vente (ci-après « Conditions Générales » ou « CGV ») ont pour objet de préciser les droits et obligations des parties entre CASSIOPEIA Digital Ltd, immatriculée au registre des sociétés d’Angleterre et du Pays de galles sous le n° 12829698, dont le siège social se situe OFFICE 9, DALTON HOUSE 60 WINDSOR AVENUE- LONDON - UNITED KINGDOM- SW19 2RR (ci-après la « Société » ou « Nous ») et toute personne ayant choisi de s’abonner au service (Ci-après l’« Abonné »).');
  await expect(page.locator('#ts')).toContainText('CONDITIONS GÉNÉRALES DE VENTE www.tech-vip.com Les Présentes Conditions Générales de Vente (ci-après « Conditions Générales » ou « CGV ») ont pour objet de préciser les droits et obligations des parties entre CASSIOPEIA Digital Ltd, immatriculée au registre des sociétés d’Angleterre et du Pays de galles sous le n° 12829698, dont le siège social se situe OFFICE 9, DALTON HOUSE 60 WINDSOR AVENUE- LONDON - UNITED KINGDOM- SW19 2RR (ci-après la « Société » ou « Nous ») et toute personne ayant choisi de s’abonner au service (Ci-après l’« Abonné »). Les présentes Conditions Générales de vente (ci-après « CGV ») ont pour objet de définir les relations contractuelles entre la Société et l’Abonné. Tout abonnement contracté auprès de la Société implique l’acceptation expresse, préalable, pleine et entière des présentes Conditions générales de vente par l’Abonné, ainsi que de la Charte de Données personnelles. Les CGV ainsi que l’ensemble des informations contractuelles mentionnées sur le Site sont rédigées en langue française. L’acceptation en ligne des présentes CGV est matérialisée par une case à cocher obligatoire lors du processus d’abonnement décrit à l’Article 4 des CGV. Adresse courriel du service clients : contact@tech-vip.com Numéro de téléphone du service clients : 01 76 44 03 44 (Du lundi au vendredi 09h à 18h00) Présentation Nous proposons à nos Abonnés, via notre site internet www.tech-vip.com (ci-après « le Site ») des réductions exclusives sur une sélection de produits (ci-après « le Service»). L’accès au Site L’Abonné est seul responsable des moyens technologiques nécessaires pour accéder au Site, et doit notamment disposer d’un accès à Internet et d’une adresse e-mail. Il conserve à sa charge les frais de télécommunication et d’accès à Internet pour l’utilisation du Site. L’accès au Site est possible 24h/24, 7j/7, sauf en cas de force majeure ou d’un événement hors du contrôle de la Société et sous réserve des éventuelles pannes et interventions de maintenance nécessaires au bon fonctionnement de celui-ci. La Société ne peut être tenue responsable de l’incapacité de l’Abonné à se connecter à Internet ou au Site, ou à accéder à son compte d’Abonné sur le Site. Le Site internet est hébergé chez Anyfes Digital Almogàvers, 29-31, Les Roquetes, Sant Père de Ribes 08812 Barcelone, Espagne Le Site internet est édité par la « Société » Directeur de la publication : Richard TURNER Abonnement au Service Il est possible de s’abonner au Service : - En se rendant directement sur le Site, ou - au moyen du formulaire d’abonnement proposant une offre de bienvenue réservée aux nouveaux Abonnés. Afin de souscrire un abonnement, l’Abonné garantit : - être une personne physique et ne pas contracter dans le cadre d’une activité professionnelle ; - être majeur et responsable selon la loi en vigueur en France, et pouvoir légalement conclure un contrat qui l’engage ; - Résider en France métropolitaine ; - Ne pas avoir déjà souscrit un abonnement au Service dont il se serait rétracté, Pour s’abonner au Service, l’Abonné doit remplir l’ensemble des champs du formulaire mis à sa disposition. En cas de communication de données erronées, la Société ne pourra voir sa responsabilité engagée. L’Abonné garantit que toutes les informations qu’il donne dans le formulaire sont exactes, à jour et sincères et ne sont entachées d’aucun caractère trompeur. Il s’engage à informer la Société (à l’adresse mentionnée en préambule des présentes CGV) en cas de modifications de ses coordonnées, notamment bancaires et/ou postales. L’Abonné est informé et accepte que les informations saisies aux fins de création ou de mise à jour de son Compte valent preuve de son identité. Les informations saisies l’engagent dès leur validation, étant précisé que la Société se réserve le droit de vérifier l’exactitude des données fournies. A l’issue de son inscription, et après paiement du prix du Service conformément à l’article 5 des présentes, l’Abonné reçoit un email de confirmation de son abonnement, qui reprendra le détail de sa commande, les conditions et modalités d’exercice de son droit de rétractation. Présentation du Service Offre de bienvenue La Société propose régulièrement des « Offres de Bienvenue » dans le cadre de sa politique commerciale. Ces offres réservées aux nouveaux Abonnés, permettent de s\'abonner au Service en profitant : - d’une part d’un contre remboursement de 80€ maximum pour seulement 1€ sur le produit indiqué dans l’offre de bienvenue (le « Produit Promotionnel »), et - d’autre part d’un accès découverte au Site d’une durée de 72h. A l’issue de cette période de 72h, en l’absence de résiliation par l’Abonné, l’Abonnement de 29,90€ (ou 75€ par trimestre) prendra alors effet automatiquement et se poursuivra selon les modalités fixées à l’article 5 des CGV. Pour pouvoir bénéficier de l’Offre de bienvenue et du contre remboursement de 80€, le nouvel Abonné devra : - Dans un premier temps, souscrire à l’abonnement et verser la somme de 1€. - Dans un deuxième temps, faire l’acquisition du Produit Promotionnel. Cette acquisition pourra se faire auprès de n’importe quel commerçant, que ce soit en ligne ou en magasin. - Dans un troisième temps, dans les 30 jours suivant la souscription à l’Abonnement, l’Abonné devra adresser la facture d’achat du Produit Promotionnel à l’adresse suivante : contact@tech-vip.com La Société versera alors le remboursement de 80€ sur le compte Paypal associé à l’email fourni par l’Abonné. Si l’Abonné n’a pas de compte Paypal, il recevra un email de la part de Paypal pour ouvrir un compte et percevoir son remboursement. A défaut d’avoir adressé la facture d’achat du Produit Promotionnel dans ce délai de 30 jours, la Société ne versera pas le somme de 80€. Fonctionnement du Service La Société propose chaque mois à ses Abonnés une large sélection de produits (High-Tech, Bricolage, Jeux Vidéo, Audio&Vidéo…) sur lesquels sont appliqués des réductions exclusives (ci-après « les Produits »). Les frais de livraison s’affichent au moment de la validation du panier pour les non-membres. Chaque mois, l’Abonné est invité à consulter dans son espace Abonné sur le Site le catalogue des Produits -avec des réductions exclusives- proposés à l’achat. ATTENTION : TOUS LES ABONNÉS SONT FACTURÉS DE LA COTISATION TOUS LES MOIS (OU TOUS LES 3 MOIS), QU’ILS AIENT PROFITÉ OU NON DE LEUR ABONNEMENT EN PASSANT UNE OU PLUSIEURS COMMANDES. L’accès au catalogue des Produits est ILLIMITÉ, et l\'Abonné peut passer autant de commandes qu\'il le souhaite pendant toute la durée de son abonnement. L’Abonné peut profiter du Service sous réserve du bon encaissement du prix du Service conformément à l’article 5. Les produits proposés peuvent varier d’un mois sur l’autre. Les équipes s’efforcent de proposer aux abonnés une offre la plus large possible pour satisfaire le plus grand nombre. Les photographies des Produits figurant sur le Site ne sont pas contractuelles. Caractéristiques du Service a. Durée et Résiliation L’abonnement entre en vigueur au jour de l’adhésion, soit 72h après la date de souscription. L’abonnement au Service est un abonnement mensuel ou trimestriel (selon le choix fait par l’Abonné lors de la souscription), sans engagement de durée, et à reconduction tacite. Cela signifie que l’abonnement sera reconduit et l’Abonné prélevé tous les mois -ou tous les trois mois- à chaque date d’anniversaire de la souscription. A titre d’illustration, si l’abonnement a été souscrit le 1er juillet, il entrera en vigueur à l’expiration de la période de 72h, soit le 4 juillet, et l’Abonné sera prélevé de sa première mensualité le 4 juillet. La résiliation peut être notifiée par l’Abonné à tout moment par courriel sans préavis et sans motif. La résiliation devra être notifiée par l’Abonné : - soit en remplissant le formulaire de résiliation en cliquant ici. - soit par un e-mail envoyé au Service Client de tech-vip.com à l’adresse courriel suivante : contact@tech-vip.com La résiliation prendra effet à la fin de la période d’abonnement en cours (mensuelle ou trimestrielle selon l’offre choisie par le client), de sorte que l’Abonné qui résilie son Contrat et qui aura payé pour la période en cours aura le droit d’utiliser le Site et l’application pour le reste de la période en cours. A la fin de la période en cours l’Abonné n’aura plus accès au Service et ne sera plus prélevé par la Société. La Société se réserve par ailleurs le droit de résilier le Service à tout moment en cas de non-respect par l’Abonné des présentes Conditions Générales, ou d’invalidité du moyen de paiement fourni par l’Abonné. Elle se réserve également le droit d’arrêter de proposer le Service. L’arrêt du Service fera l’objet d’une information de l’Abonné par tout moyen approprié. b. Prix et Paiement Le coût de l’abonnement au Service s’élève à la somme de 29,90€ TTC par mois, ou 75€ par trimestre, selon la formule d’abonnement choisie par l’Abonné au moment de la souscription. Chaque mois (ou chaque trimestre), l’Abonné pourra retrouver la facture correspondante à la période au sein de son espace Abonné sur le Site. L’Abonné autorise la Société à prélever automatiquement le montant de son abonnement au moyen des coordonnées bancaires qu’il aura fournies. Le paiement du montant de l’Abonnement s’effectue exclusivement par carte bancaire. La carte bancaire sera débitée de 29,90€ chaque mois (ou de 75€ par trimestre) et cela jusqu’à ce que l’Abonné souhaite mettre fin à son Abonnement dans les conditions énoncées à l’article 5. a) des CGV. En cas d’échec de paiement, et/ou en cas de fraude ou de tentative fraude de l’Abonné dont la Société aurait connaissance, celle-ci se réserve le droit de résilier l’abonnement et l’accès au Service correspondant. c. Période d’essai - Droit de Rétractation Conformément à l\'article L 221-18 du Code de la consommation, l’Abonné dispose d\'un délai légal de rétractation de 14 jours calendaires à compter de la date d\'abonnement au Site En se rétractant, l’Abonné résilie automatiquement son abonnement, et il reçoit le remboursement total des frais d\'abonnement déjà payés. Ce remboursement a lieu au plus tard dans les 14 jours à compter de la date à laquelle La Société a reçu sa demande de rétractation. A la suite de sa demande de rétractation, un email sera envoyé à l’Abonné, précisant que sa demande a été prise en considération. L’Abonné pourra exercer son droit légal de rétractation en utilisant le formulaire présent sur le site internet dans la rubrique « Rétractation » ou en recopiant le formulaire ci-dessous sur papier libre : Je vous notifie par la présente, ma rétractation du contrat pour la prestation de services ci-dessous Date de souscription à l\'abonnement : Nom & Prénom : Adresse email utilisée : Date & Signature (en cas de notification du présent formulaire sur papier): L\'exercice du droit de rétractation entraîne la résiliation du contrat". Ce formulaire de rétractation devra être adressé : - Par courrier postal à CASSIOPEIA Digital Ltd, OFFICE 9, DALTON HOUSE 60 WINDSOR AVENUE- LONDON - UNITED KINGDOM- SW19 2RR, ou - par email à contact@tech-vip.com Livraison Les livraisons de Produits sont effectuées à l’adresse de livraison indiquée par l’Abonné lors de la souscription de son abonnement. Les livraisons sont effectuées par envoi postal, dans le délai maximum de 30 jours suivant la validation de la commande par l’Abonné dans les conditions prévues à l’article 4. Dans le cas où l’Abonné ne reçoit pas le Produit commandé dans ce délai, il peut contacter la Société par e-mail : contact@tech-vip.com ou par téléphone au 01 76 44 03 44. La Société prendra toute mesure appropriée pour rechercher le Produit perdu et dès confirmation de cette perte, réadressera le Produit à l’Abonné, dans les meilleurs délais ou se verra proposer un remboursement intégral. En l’absence de livraison dans un délai de 30 jours à la suite de la notification par l’Abonné du retard de livraison, celui-ci peut également demander, par email ou par téléphone, l’annulation et / ou le remboursement intégral de sa commande. Données personnelles et Bancaires La Société respecte le droit à la vie privée. Elle est amenée, lors de l’inscription de l’Abonné au Site, à collecter des données à caractère personnel (adresse email, nom, prénom, numéro de téléphone…), aux fins de gestion de sa commande et des relations commerciales avec la Société. Les conditions de traitement des données personnelles par la Société sont énoncées dans la Politique de protection des données personnelles du Site. Conformément aux dispositions de la loi n°78-17 dite loi Informatique et libertés, du 6 janvier 1978 et au règlement de l’UE 2016/679 applicable depuis le 25 mai 2018, l’Abonné dispose d\'un droit d’obtention, d’effacement, d’opposition, d\'accès, de rectification et de suppression de toutes données personnelles le concernant obtenues par la Société lors de l\'utilisation du Service. Tout Abonné peut exercer ce droit en envoyant un e-mail à l\'adresse contact@tech-vip.com. Dans le cas où l’Abonné prendrait finalement la décision de ne pas finaliser son abonnement, la Société collecte uniquement l’adresse email. Cette adresse email pourra être utilisée ultérieurement par la Société, afin de relancer le prospect qui n’aurait pas finalisé sa commande. Les autres informations ne sont conservées que pour les Abonnés qui finalisent vraiment leur abonnement au Service. La Société est particulièrement sensible à la sécurité de son site internet et aux informations que ses Abonnés pourraient lui confier. C’est pour cela que nous avons contracté avec les meilleurs prestataires de paiements. Les prélèvements des mensualités sont effectués via ces prestataires et de manière totalement sécurisée. Ces derniers sont les seuls à avoir accès à vos informations bancaires. Droit applicable et compétence Les présentes Conditions Générales sont régies par la loi française. En cas de contestation relative à l\'interprétation, la validité et/ou l\'exécution des présentes CGV, l’Abonné pourra saisir selon son choix : - l\'une des juridictions territorialement compétentes en vertu du code de procédure civile, ou - la juridiction du lieu où il demeurait au moment de la conclusion du contrat ou de la survenance du fait dommageable. Si tout ou partie d’une clause des présentes s’avérait illicite, non écrite, nulle ou inapplicable, cette clause sera abandonnée, en tout ou partie, sans que la validité des autres clauses en soit affectée, le reste du présent accord conservant son plein effet. Dispositions générales Les textes en vigueur exigent que certaines informations ou communications soient transmises par écrit. En utilisant ce Site, l’Abonné accepte que ces communications se fassent principalement par voie électronique. Pour des raisons contractuelles, l’Abonné accepte ce moyen de communication électronique et reconnaît que tous les contrats, avis, informations et autres communications que le Site fournira par voie électronique sont conformes aux obligations légales prévoyant que lesdites communications soient faites par écrit. La Société se réserve le droit de mettre à jour les présentes CGV à tout moment et pour quelque motif que ce soit. Dans une telle hypothèse, la Société avertira l’Abonné de ces modifications et lui communiquera les dernières CGV au moins trente (30) jours avant sa mise en œuvre, en l’informant qu’il peut choisir de résilier son abonnement par courriel adressé avant l’expiration de ce délai de 30 jours. En l’absence de résiliation intervenue dans ce délai, l’Abonné sera réputé avoir accepté les nouvelles CGV auxquelles il sera désormais lié dans le cadre de son abonnement. Réclamations et médiation Pour tous litiges entre la Société et l’Abonné, ce dernier est invité à tenter de le résoudre à l’amiable avant de saisir les juridictions judiciaires, en prenant le plus rapidement possible contact avec le service client de la Société selon les modalités suivantes : - en envoyant un email à l\'adresse suivante : contact@tech-vip.com , ou - en utilisant le formulaire en ligne accessible ici , ou - en contactant le support téléphonique au numéro suivant : 01 76 44 03 44. A défaut d’accord amiable ou en l’absence de réponse de la Société dans un délai d’un mois, l’Abonné pourra recourir à une médiation conventionnelle ou à tout autre mode alternatif de règlement des différends. L’Abonné pourra notamment saisir gratuitement, conformément aux articles L.612-1 et suivants du Code de la consommation, la plateforme de règlement en ligne des litiges de la Commission Européenne. Cette plateforme est accessible ici. Cette plateforme de Médiation permet aux consommateurs de déposer en ligne une demande de médiation accompagnée des documents justificatifs. L’Abonné demeure libre d’accepter ou de refuser le recours à la médiation et, en cas de recours à la médiation, d’accepter ou de refuser la solution proposée par le Médiateur.');
  await page.getByRole('contentinfo').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await expect(page.getByRole('contentinfo')).toContainText('01 76 44 03 44');
  await expect(page.locator('h4')).toContainText('tech-vip.com');
  await expect(page.getByRole('contentinfo')).toContainText('Le site tech-vip.com, propose un service par abonnement mensuel de (29,90€/mois ou 75€/trimestre) à reconduction tacite sans engagement de durée.');
  await expect(page.getByRole('contentinfo')).toContainText('Le service proposé par tech-vip.com est facturé sous forme d’abonnement mensuel de 29,90€/mois ou 75€/trimestre avec reconduction tacite et sans engagement de durée Site édité par CASSIOPEIA DIGITAL LTD.Imatriculée sous le n° 12829698 et dont le siège social est situé au OFFICE 9, DALTON HOUSE 60 WINDSOR AVENUE- LONDON - UNITED KINGDOM- SW19 2RR Les entreprises et produits cités sont des marques de commerce™ ou des marques déposées® appartenant à leurs propriétaires respectifs. L\'utilisation de ces marques ne suggère aucun lien ou approbation de leur part. Les spécifications peuvent changer sans préavis. Les marques tierces, y compris les logos et les icônes, restent la propriété de leurs détenteurs. En l\'absence d\'indications contraires, l\'utilisation de ces marques n\'implique aucune relation, parrainage ou approbation de la part des propriétaires. Les références à des marques tierces visent simplement à identifier les produits et services de manière équitable, en respectant le droit des marques. Cette offre privée est gérée par une société indépendante non liée au propriétaire initial des marques/produits mentionnés ici.');
  await page.locator('#menu-item-27').getByRole('link', { name: 'Mentions légales' }).click();
  await expect(page.locator('#main')).toContainText('01 76 44 03 44 contact@tech-vip.com');
  await expect(page.getByText('AccueilMention legales')).toBeVisible();
  await expect(page.locator('#lm')).toContainText('Site édité par CASSIOPEIA DIGITAL LTD. Imatriculéesous le n° 12829698 et dont le siège social est situé au OFFICE 9, DALTON HOUSE 60 WINDSOR AVENUE - LONDON - UNITED KINGDOM SW19 2RR Notre Service Client : Email : contact@tech-vip.com Téléphone au 01 76 44 03 44 du lundi au vendredi (09h00 à 18h00)');
  await page.getByRole('contentinfo').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await expect(page.getByRole('contentinfo')).toContainText('01 76 44 03 44');
  await expect(page.getByRole('heading', { name: 'tech-vip.com' })).toBeVisible();
  await expect(page.getByRole('contentinfo')).toContainText('Le site tech-vip.com, propose un service par abonnement mensuel de (29,90€/mois ou 75€/trimestre) à reconduction tacite sans engagement de durée.');
  await expect(page.getByRole('contentinfo')).toContainText('Le service proposé par tech-vip.com est facturé sous forme d’abonnement mensuel de 29,90€/mois ou 75€/trimestre avec reconduction tacite et sans engagement de durée Site édité par CASSIOPEIA DIGITAL LTD.Imatriculée sous le n° 12829698 et dont le siège social est situé au OFFICE 9, DALTON HOUSE 60 WINDSOR AVENUE- LONDON - UNITED KINGDOM- SW19 2RR Les entreprises et produits cités sont des marques de commerce™ ou des marques déposées® appartenant à leurs propriétaires respectifs. L\'utilisation de ces marques ne suggère aucun lien ou approbation de leur part. Les spécifications peuvent changer sans préavis. Les marques tierces, y compris les logos et les icônes, restent la propriété de leurs détenteurs. En l\'absence d\'indications contraires, l\'utilisation de ces marques n\'implique aucune relation, parrainage ou approbation de la part des propriétaires. Les références à des marques tierces visent simplement à identifier les produits et services de manière équitable, en respectant le droit des marques. Cette offre privée est gérée par une société indépendante non liée au propriétaire initial des marques/produits mentionnés ici.');
  await page.getByRole('link', { name: 'Newsletter' }).click();
  await expect(page.locator('#main')).toContainText('01 76 44 03 44 contact@tech-vip.com');
  await expect(page.getByText('AccueilNewsletter')).toBeVisible();
  await page.getByRole('contentinfo').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await expect(page.getByRole('contentinfo')).toContainText('Nous contacter ? du lundi au vendredi (09h00 à 18h00) 01 76 44 03 44 tech-vip.com Le site tech-vip.com, propose un service par abonnement mensuel de (29,90€/mois ou 75€/trimestre) à reconduction tacite sans engagement de durée.');
  await expect(page.getByRole('contentinfo')).toContainText('Le service proposé par tech-vip.com est facturé sous forme d’abonnement mensuel de 29,90€/mois ou 75€/trimestre avec reconduction tacite et sans engagement de durée Site édité par CASSIOPEIA DIGITAL LTD.Imatriculée sous le n° 12829698 et dont le siège social est situé au OFFICE 9, DALTON HOUSE 60 WINDSOR AVENUE- LONDON - UNITED KINGDOM- SW19 2RR Les entreprises et produits cités sont des marques de commerce™ ou des marques déposées® appartenant à leurs propriétaires respectifs. L\'utilisation de ces marques ne suggère aucun lien ou approbation de leur part. Les spécifications peuvent changer sans préavis. Les marques tierces, y compris les logos et les icônes, restent la propriété de leurs détenteurs. En l\'absence d\'indications contraires, l\'utilisation de ces marques n\'implique aucune relation, parrainage ou approbation de la part des propriétaires. Les références à des marques tierces visent simplement à identifier les produits et services de manière équitable, en respectant le droit des marques. Cette offre privée est gérée par une société indépendante non liée au propriétaire initial des marques/produits mentionnés ici.');
  await page.getByRole('link', { name: 'Désabonnement' }).click();
  await expect(page.locator('#main')).toContainText('01 76 44 03 44 contact@tech-vip.com');
  await expect(page.getByText('AccueilDesabonnement')).toBeVisible();
  await page.getByRole('contentinfo').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await expect(page.getByRole('contentinfo')).toContainText('Nous contacter ? du lundi au vendredi (09h00 à 18h00) 01 76 44 03 44 tech-vip.com Le site tech-vip.com, propose un service par abonnement mensuel de (29,90€/mois ou 75€/trimestre) à reconduction tacite sans engagement de durée.');
  await expect(page.getByRole('contentinfo')).toContainText('Le service proposé par tech-vip.com est facturé sous forme d’abonnement mensuel de 29,90€/mois ou 75€/trimestre avec reconduction tacite et sans engagement de durée Site édité par CASSIOPEIA DIGITAL LTD.Imatriculée sous le n° 12829698 et dont le siège social est situé au OFFICE 9, DALTON HOUSE 60 WINDSOR AVENUE- LONDON - UNITED KINGDOM- SW19 2RR Les entreprises et produits cités sont des marques de commerce™ ou des marques déposées® appartenant à leurs propriétaires respectifs. L\'utilisation de ces marques ne suggère aucun lien ou approbation de leur part. Les spécifications peuvent changer sans préavis. Les marques tierces, y compris les logos et les icônes, restent la propriété de leurs détenteurs. En l\'absence d\'indications contraires, l\'utilisation de ces marques n\'implique aucune relation, parrainage ou approbation de la part des propriétaires. Les références à des marques tierces visent simplement à identifier les produits et services de manière équitable, en respectant le droit des marques. Cette offre privée est gérée par une société indépendante non liée au propriétaire initial des marques/produits mentionnés ici.');
  await page.locator('#menu-item-1828').getByRole('link', { name: 'FAQ' }).click();
  await expect(page.locator('#main')).toContainText('01 76 44 03 44 contact@tech-vip.com');
  await expect(page.getByText('AccueilFaqs')).toBeVisible();
  await page.locator('a').filter({ hasText: 'Comment fonctionne Tech-Vip ?' }).click();
  await expect(page.locator('#fq')).toContainText('Le principe est simple, les personnes qui font partie du club bénéficient toute l’année de réductions immédiates sur leurs achats au sein de notre site. Pour faire partie du club il vous suffit de vous abonner pour seulement 29,90€/mois ou 75€/trimestre.');
  await page.locator('dl').filter({ hasText: 'Comment fonctionne Tech-Vip' }).click();
  await page.locator('a').filter({ hasText: 'Y-a-t-il des frais supplé' }).click();
  await expect(page.locator('#fq')).toContainText('L\'abonnement à Tech-Vip.com est de 29,90€ par mois ou 75€ par trimestre, ce montant vous permet de bénéficier toute l’année de réductions immédiates sur tous vos achats au sein de notre site et les frais de livraison sont OFFERTS.');
  await page.locator('a').filter({ hasText: 'Je souhaite de désabonner,' }).click();
  await expect(page.locator('#fq')).toContainText('L’abonnement n’a aucun engagement de durée, vous pouvez vous désabonner quand vous le souhaitez depuis notre site, votre espace membre ou en nous contactant par mail au : contact@tech-vip.com');
  await page.locator('a').filter({ hasText: 'Quand serais-je débité de mon' }).click();
  await page.locator('a').filter({ hasText: 'Comment puis-je vous' }).click();
  await expect(page.locator('#fq')).toContainText('VOUS POUVEZ NOUS CONTACTER Par mail via l\'adresse contact@tech-vip.com Par notre formulaire directement sur le site, dans la rubrique "CONTACT" Par téléphone au 01 76 44 03 44 du lundi au vendredi (09h à 18h) Nous nous efforçons de vous répondre dans les 24h !');
  await page.locator('a').filter({ hasText: 'Qu\'est-ce que l\'Offre de' }).click();
  await expect(page.locator('#fq')).toContainText('Si vous souscrivez à notre offre vous serez débité de 29.90€ le premier mois pour un abonnement mensuel ou 75€ pour un abonnement trimestriel.');
  await page.locator('a').filter({ hasText: 'Mon paiement est-il sécurisé ?' }).click();
  await page.locator('a').filter({ hasText: 'Quand recevrai-je ma commande' }).click();
  await page.locator('a').filter({ hasText: 'Y a t-il une limite de' }).click();
  await page.locator('a').filter({ hasText: 'Le produit commandé est arriv' }).click();
  await expect(page.locator('#fq')).toContainText('Veuillez nous envoyer un mail accompagné d’une photo à contact@tech-vip.com et nous trouverons une solution ensemble');
  await page.locator('a').filter({ hasText: 'Est-ce possible de me faire' }).click();
  await page.locator('a').filter({ hasText: 'Quels produits puis-je' }).click();
  await page.locator('a').filter({ hasText: 'Est-ce que je peux modifier' }).click();
  await page.locator('a').filter({ hasText: 'Est-il possible de consulter' }).click();
  await page.getByRole('link', { name: 'Expédition & Livraison' }).click();
  await expect(page.locator('#main')).toContainText('01 76 44 03 44 contact@tech-vip.com');
  await expect(page.getByText('AccueilMenu.view_sd')).toBeVisible();
  await expect(page.locator('#sd')).toContainText('Votre commande n\'est pas arrivée en raison de circonstances exceptionnelles hors de notre contrôle tech-vip.com (ex : non dédouané par les douanes, retardé par une catastrophe naturelle).');
  await expect(page.locator('#sd')).toContainText('https://shop.tech-vip.com');
  await page.locator('#menu-item-1830').getByRole('link', { name: 'Suivre votre commande' }).click();
  await expect(page.locator('#main')).toContainText('01 76 44 03 44 contact@tech-vip.com');
  await expect(page.getByText('AccueilMenu.view_tr')).toBeVisible()
  await page.getByRole('contentinfo').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));;
  await expect(page.getByRole('contentinfo')).toContainText('Nous contacter ? du lundi au vendredi (09h00 à 18h00) 01 76 44 03 44 tech-vip.com Le site tech-vip.com, propose un service par abonnement mensuel de (29,90€/mois ou 75€/trimestre) à reconduction tacite sans engagement de durée.');
  await expect(page.getByRole('contentinfo')).toContainText('Le service proposé par tech-vip.com est facturé sous forme d’abonnement mensuel de 29,90€/mois ou 75€/trimestre avec reconduction tacite et sans engagement de durée Site édité par CASSIOPEIA DIGITAL LTD.Imatriculée sous le n° 12829698 et dont le siège social est situé au OFFICE 9, DALTON HOUSE 60 WINDSOR AVENUE- LONDON - UNITED KINGDOM- SW19 2RR Les entreprises et produits cités sont des marques de commerce™ ou des marques déposées® appartenant à leurs propriétaires respectifs. L\'utilisation de ces marques ne suggère aucun lien ou approbation de leur part. Les spécifications peuvent changer sans préavis. Les marques tierces, y compris les logos et les icônes, restent la propriété de leurs détenteurs. En l\'absence d\'indications contraires, l\'utilisation de ces marques n\'implique aucune relation, parrainage ou approbation de la part des propriétaires. Les références à des marques tierces visent simplement à identifier les produits et services de manière équitable, en respectant le droit des marques. Cette offre privée est gérée par une société indépendante non liée au propriétaire initial des marques/produits mentionnés ici.');
  await page.locator('#menu-item-201').getByRole('link', { name: 'Presse' }).click();
  await expect(page.locator('#main')).toContainText('01 76 44 03 44 contact@tech-vip.com');
  await expect(page.getByText('AccueilPresse')).toBeVisible();
  await page.getByRole('contentinfo').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await expect(page.getByRole('contentinfo')).toContainText('Nous contacter ? du lundi au vendredi (09h00 à 18h00) 01 76 44 03 44 tech-vip.com Le site tech-vip.com, propose un service par abonnement mensuel de (29,90€/mois ou 75€/trimestre) à reconduction tacite sans engagement de durée.');
  await expect(page.getByRole('contentinfo')).toContainText('Le service proposé par tech-vip.com est facturé sous forme d’abonnement mensuel de 29,90€/mois ou 75€/trimestre avec reconduction tacite et sans engagement de durée Site édité par CASSIOPEIA DIGITAL LTD.Imatriculée sous le n° 12829698 et dont le siège social est situé au OFFICE 9, DALTON HOUSE 60 WINDSOR AVENUE- LONDON - UNITED KINGDOM- SW19 2RR Les entreprises et produits cités sont des marques de commerce™ ou des marques déposées® appartenant à leurs propriétaires respectifs. L\'utilisation de ces marques ne suggère aucun lien ou approbation de leur part. Les spécifications peuvent changer sans préavis. Les marques tierces, y compris les logos et les icônes, restent la propriété de leurs détenteurs. En l\'absence d\'indications contraires, l\'utilisation de ces marques n\'implique aucune relation, parrainage ou approbation de la part des propriétaires. Les références à des marques tierces visent simplement à identifier les produits et services de manière équitable, en respectant le droit des marques. Cette offre privée est gérée par une société indépendante non liée au propriétaire initial des marques/produits mentionnés ici.');
  await page.locator('#menu-item-1831').getByRole('link', { name: 'Moyens de paiement' }).click();
  await expect(page.locator('#main')).toContainText('01 76 44 03 44 contact@tech-vip.com');
  await expect(page.getByText('AccueilMenu.view_pm')).toBeVisible();
  await page.getByRole('contentinfo').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await expect(page.getByRole('contentinfo')).toContainText('Nous contacter ? du lundi au vendredi (09h00 à 18h00) 01 76 44 03 44 tech-vip.com Le site tech-vip.com, propose un service par abonnement mensuel de (29,90€/mois ou 75€/trimestre) à reconduction tacite sans engagement de durée.');
  await expect(page.getByRole('contentinfo')).toContainText('Le service proposé par tech-vip.com est facturé sous forme d’abonnement mensuel de 29,90€/mois ou 75€/trimestre avec reconduction tacite et sans engagement de durée Site édité par CASSIOPEIA DIGITAL LTD.Imatriculée sous le n° 12829698 et dont le siège social est situé au OFFICE 9, DALTON HOUSE 60 WINDSOR AVENUE- LONDON - UNITED KINGDOM- SW19 2RR Les entreprises et produits cités sont des marques de commerce™ ou des marques déposées® appartenant à leurs propriétaires respectifs. L\'utilisation de ces marques ne suggère aucun lien ou approbation de leur part. Les spécifications peuvent changer sans préavis. Les marques tierces, y compris les logos et les icônes, restent la propriété de leurs détenteurs. En l\'absence d\'indications contraires, l\'utilisation de ces marques n\'implique aucune relation, parrainage ou approbation de la part des propriétaires. Les références à des marques tierces visent simplement à identifier les produits et services de manière équitable, en respectant le droit des marques. Cette offre privée est gérée par une société indépendante non liée au propriétaire initial des marques/produits mentionnés ici.');
  await page.locator('#menu-item-1832').getByRole('link', { name: 'Politique de remboursement et' }).click();
  await expect(page.locator('#main')).toContainText('01 76 44 03 44 contact@tech-vip.com');
  await expect(page.getByText('AccueilMenu.view_rp')).toBeVisible();
  await expect(page.locator('#rp')).toContainText('Tous nos produits bénéficient d’une garantie de remboursement de 60 jours. Envoyez-nous simplement un message sur la page Contactez-nous ou contactez-nous sur contact@tech-vip.com et nous vous rembourserons le prix d’achat.');
  await page.getByRole('contentinfo').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await expect(page.getByRole('contentinfo')).toContainText('Nous contacter ? du lundi au vendredi (09h00 à 18h00) 01 76 44 03 44 tech-vip.com Le site tech-vip.com, propose un service par abonnement mensuel de (29,90€/mois ou 75€/trimestre) à reconduction tacite sans engagement de durée.');
  await expect(page.getByRole('contentinfo')).toContainText('Le service proposé par tech-vip.com est facturé sous forme d’abonnement mensuel de 29,90€/mois ou 75€/trimestre avec reconduction tacite et sans engagement de durée Site édité par CASSIOPEIA DIGITAL LTD.Imatriculée sous le n° 12829698 et dont le siège social est situé au OFFICE 9, DALTON HOUSE 60 WINDSOR AVENUE- LONDON - UNITED KINGDOM- SW19 2RR Les entreprises et produits cités sont des marques de commerce™ ou des marques déposées® appartenant à leurs propriétaires respectifs. L\'utilisation de ces marques ne suggère aucun lien ou approbation de leur part. Les spécifications peuvent changer sans préavis. Les marques tierces, y compris les logos et les icônes, restent la propriété de leurs détenteurs. En l\'absence d\'indications contraires, l\'utilisation de ces marques n\'implique aucune relation, parrainage ou approbation de la part des propriétaires. Les références à des marques tierces visent simplement à identifier les produits et services de manière équitable, en respectant le droit des marques. Cette offre privée est gérée par une société indépendante non liée au propriétaire initial des marques/produits mentionnés ici.');
  await page.locator('#menu-item-1833').getByRole('link', { name: 'Politique de Confidentialité' }).click();
  await expect(page.locator('#main')).toContainText('01 76 44 03 44 contact@tech-vip.com');
  await expect(page.getByText('AccueilMenu.view_pp')).toBeVisible();
  await expect(page.locator('#pp')).toContainText('Le site tech-vip.com accessible via le lien suivant tech-vip.com est édité par la société CASSIOPEIA DIGITAL LTD., immatriculée au OFFICE 9, DALTON HOUSE 60 WINDSOR AVENUE - LONDON - UNITED KINGDOM SW19 2RR , enregistrée sous le numéro 998459. La présente Politique de Protection des données à caractère personnel vous informe de manière transparente sur notre politique en matière de sécurité, de protection et de confidentialité des traitements effectués sur les données à caractère personnel que vous nous confiez lorsque vous naviguez sur le site.');
  await expect(page.locator('#pp')).toContainText('En accédant à l’un de sites édités par la société CASSIOPEIA DIGITAL LTD., et en utilisant les services proposés, l’Utilisateur reconnaît avoir lu et compris la présente Politique générale relative à la protection des données personnelles, ainsi que les pratiques de recueil de consentement, de collecte et de traitement des informations décrites dans ce document.');
  await expect(page.locator('#pp')).toContainText('Adresse postale : au OFFICE 9, DALTON HOUSE 60 WINDSOR AVENUE - LONDON - UNITED KINGDOM SW19 2RRCourriel : contact@tech-vip.comTéléphone : 01 76 44 03 44Section du site web : https://tech-vip.com/');
  await expect(page.getByText('Pour vous faire parvenir les')).toBeVisible();
  await page.getByRole('contentinfo').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await expect(page.getByRole('contentinfo')).toContainText('Nous contacter ? du lundi au vendredi (09h00 à 18h00) 01 76 44 03 44 tech-vip.com Le site tech-vip.com, propose un service par abonnement mensuel de (29,90€/mois ou 75€/trimestre) à reconduction tacite sans engagement de durée.');
  await expect(page.getByRole('contentinfo')).toContainText('Le service proposé par tech-vip.com est facturé sous forme d’abonnement mensuel de 29,90€/mois ou 75€/trimestre avec reconduction tacite et sans engagement de durée Site édité par CASSIOPEIA DIGITAL LTD.Imatriculée sous le n° 12829698 et dont le siège social est situé au OFFICE 9, DALTON HOUSE 60 WINDSOR AVENUE- LONDON - UNITED KINGDOM- SW19 2RR Les entreprises et produits cités sont des marques de commerce™ ou des marques déposées® appartenant à leurs propriétaires respectifs. L\'utilisation de ces marques ne suggère aucun lien ou approbation de leur part. Les spécifications peuvent changer sans préavis. Les marques tierces, y compris les logos et les icônes, restent la propriété de leurs détenteurs. En l\'absence d\'indications contraires, l\'utilisation de ces marques n\'implique aucune relation, parrainage ou approbation de la part des propriétaires. Les références à des marques tierces visent simplement à identifier les produits et services de manière équitable, en respectant le droit des marques. Cette offre privée est gérée par une société indépendante non liée au propriétaire initial des marques/produits mentionnés ici.');
  await page.getByRole('link').filter({ hasText: /^$/ }).first().click();
  await page.getByRole('link', { name: 'PRIX VIP −50% Crochets adhé' }).click();
  await expect(page.locator('body')).toContainText('01 76 44 03 44 contact@tech-vip.com');
  await page.getByRole('contentinfo').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await expect(page.getByRole('contentinfo')).toContainText('Nous contacter ? du lundi au vendredi (09h00 à 18h00) 01 76 44 03 44 tech-vip.com Le site tech-vip.com, propose un service par abonnement mensuel de (29,90€/mois ou 75€/trimestre) à reconduction tacite sans engagement de durée.');
  await expect(page.locator('#copyright')).toContainText('Site édité par CASSIOPEIA DIGITAL LTD. Imatriculée au registre des sociétés de l\'Angleterre et du Pays de Galles sous le n° 12829698 et dont le siège social est situé au OFFICE 9, DALTON HOUSE 60 WINDSOR AVENUE- LONDON - UNITED KINGDOM- SW19 2RR');
  await page.getByRole('button', { name: 'Ajouter au panier' }).click();
  await page.getByRole('link', { name: 'Commander' }).click();
  await expect(page.locator('#form_delivery')).toContainText('Le service proposé par tech-vip.com est facturé mensuellement ou trimestriellement (29,90€/mois ou 75€/trimestre) à reconduction tacite sans engagement de durée. Site édité par Cassiopeia Digital LTD Immatriculée au registre des sociétés de l\'Angleterre et du Pays de Galles sous le n° 12829698 et dont le siège social est situé au immatriculée Office 9, Dalton House, 60 Windsor Avenue, London, United Kingdom, SW19 2RR tech-vip.com © Copyright 2025. All Rights Reserved');
  await page.getByRole('banner').getByRole('link').click();
  await page.getByRole('link', { name: 'S’abonner' }).click();
  const firstName = fakerUtils.getFirstName();
  await page.locator('select[name="subscriber[civility]"]').selectOption('1');
  await page.getByRole('textbox', { name: 'Adresse*' }).click();
  await page.getByRole('textbox', { name: 'Adresse*' }).fill('paris');
  await page.getByRole('textbox', { name: 'Ville*' }).click();
  await page.getByRole('textbox', { name: 'Ville*' }).fill('france');
  await page.getByRole('textbox', { name: 'Prénom*' }).click();
  await page.getByRole('textbox', { name: 'Prénom*' }).fill(firstName);
  await page.getByRole('textbox', { name: 'Nom*', exact: true }).click();
  await page.getByRole('textbox', { name: 'Nom*', exact: true }).fill(fakerUtils.getLastName());
  await page.getByRole('textbox', { name: 'Téléphone (portable)*' }).click();
  await page.getByRole('textbox', { name: 'Téléphone (portable)*' }).fill(fakerUtils.getPhoneNumber());
  await page.getByRole('textbox', { name: 'Code postal*' }).click();
  await page.getByRole('textbox', { name: 'Code postal*' }).fill(fakerUtils.getPostalCode());
  await page.getByRole('textbox', { name: 'Email*' }).click();
  await page.getByRole('textbox', { name: 'Email*' }).fill(fakerUtils.getEmail(firstName));
  await page.getByRole('textbox', { name: 'Mot de passe*' }).click();
  await page.getByRole('textbox', { name: 'Mot de passe*' }).fill(fakerUtils.getPassword());
  await page.locator('#is_adult').check();
  await page.getByRole('button', { name: 'S’abonner' }).click();
  await expect(page.locator('#main')).toContainText('01 76 44 03 44 contact@tech-vip.com');
  await expect(page.getByText('AccueilS abonner')).toBeVisible();
  await expect(page.locator('[id="125"]')).toContainText('En cochant cette case, vous acceptez nos CGV et notre politique de confidentialité , et acceptez de commencer l\'abonnement mensuel de 29,90€/mois jusqu\'à ce que vous l\'annuliez. Si vous ne savez pas comment payer ou annuler votre abonnement, consultez nos conditions d\'utilisation et de service ou contactez l\'assistance sur contact@tech-vip.com .');
  await expect(page.locator('#main')).toContainText('J\'ai une question comment puisse-je contacter l’équipe Tech-vip ? Nous sommes toujours à l’écoute de nos clients et nous nous efforçons de vous répondre le plus rapidement possible. Vous pouvez nous contacter de 2 manières différentes. Soit par email : contact@tech-vip.com Soit par téléphone au 01 76 40 25 18 du lundi au vendredi (09h00 à 18h00) Soit en remplissant ce formulaire');
  await expect(page.locator('#main')).toContainText('Notre club fonctionne avec un abonnement mensuel de (29,90€/mois ou 75€/trimestre), tacitement reconductible et sans engagement de durée.');
  await expect(page.locator('#main')).toContainText('Lorsque vous souscrivez à un abonnement tech-vip.com, vous bénéficiez automatiquement d’une période découverte de 72h qui ne vous est facturée que 1€ ainsi qu\'une offre de bienvenue pour un remboursement de 80€. Pour profiter de cette offre vous devez acheter le produit indiqué sur l\'offre promotionnelle, envoyer la facture à contact@tech-vip.com et vous recevrez le remboursement sous 30 jours sur le compte paypal associé à votre email.');
  await expect(page.locator('#main')).toContainText('A l’issu de cette période de 72h, et si vous ne nous avez pas fait part de votre souhait de vous désabonner, votre abonnement sera confirmé et vous serez prélevé de 29,90€ si vous choisissez l\'abonnement mensuel ou 75€ si vous choisissez l\'abonnement trimestriel.');
  await expect(page.locator('#main')).toContainText('Le site tech-vip.com est édité par la société CASSIOPEIA DIGITAL LTD. Imatriculée au registre des sociétés de l\'Angleterre et du Pays de Galles sous le n° 12829698 et dont le siège social est situé au OFFICE 9, DALTON HOUSE 60 WINDSOR AVENUE LONDON - UNITED KINGDOM - SW19 2RR');
  await page.getByRole('contentinfo').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await expect(page.getByRole('contentinfo')).toContainText('Nous contacter ? du lundi au vendredi (09h00 à 18h00) 01 76 44 03 44 tech-vip.com Le site tech-vip.com, propose un service par abonnement mensuel de (29,90€/mois ou 75€/trimestre) à reconduction tacite sans engagement de durée.');
  await expect(page.getByRole('contentinfo')).toContainText('Le service proposé par tech-vip.com est facturé sous forme d’abonnement mensuel de 29,90€/mois ou 75€/trimestre avec reconduction tacite et sans engagement de durée Site édité par CASSIOPEIA DIGITAL LTD.Imatriculée sous le n° 12829698 et dont le siège social est situé au OFFICE 9, DALTON HOUSE 60 WINDSOR AVENUE- LONDON - UNITED KINGDOM- SW19 2RR Les entreprises et produits cités sont des marques de commerce™ ou des marques déposées® appartenant à leurs propriétaires respectifs. L\'utilisation de ces marques ne suggère aucun lien ou approbation de leur part. Les spécifications peuvent changer sans préavis. Les marques tierces, y compris les logos et les icônes, restent la propriété de leurs détenteurs. En l\'absence d\'indications contraires, l\'utilisation de ces marques n\'implique aucune relation, parrainage ou approbation de la part des propriétaires. Les références à des marques tierces visent simplement à identifier les produits et services de manière équitable, en respectant le droit des marques. Cette offre privée est gérée par une société indépendante non liée au propriétaire initial des marques/produits mentionnés ici.');
});

test('TC_VerifyHomePageContent', async ({ page }) => {
  await page.goto('https://shop.tech-vip.com');

  await page.waitForTimeout(20000);

  const headerTop = await page.locator('//div[@class="header-top"]');
  expect(await headerTop.screenshot()).toMatchSnapshot('headerTop.png');

  const headerDescription = await page.locator('//header[@class="header-desc"]');
  expect(await headerDescription.screenshot()).toMatchSnapshot('headerDescription.png');

  const homeSlider = await page.locator('//div[contains(@class,"home-slider")]');
  expect(await homeSlider.screenshot()).toMatchSnapshot('homeSlider.png');

  const topSellingProduct = await page.locator('#top-selling-product > .container');
  expect(await topSellingProduct.screenshot()).toMatchSnapshot('topSellingProduct.png');

  await page.locator('#best-deals').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await page.waitForTimeout(2000);
  const bestDeals = await page.locator('#best-deals');
  expect(await bestDeals.screenshot()).toMatchSnapshot('bestDeals.png');

  await page.locator('#new-arrivals').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await page.waitForTimeout(2000);
  const newArrivals = await page.locator('#new-arrivals');
  expect(await newArrivals.screenshot()).toMatchSnapshot('newArrivals.png');

  const featuresContainer = await page.locator('//div[@id="new-arrivals"]/following::div[1][@class="container"]');
  expect(await featuresContainer.screenshot()).toMatchSnapshot('featuresContainer.png');

  const footerHome1 = await page.locator('//footer[@class="footer"]/div[1][@class="container"]');
  expect(await footerHome1.screenshot()).toMatchSnapshot('footerHome1.png');

  const footerHome2 = await page.locator('(//footer[@class="footer"]//div[@class="container"])[2]');
  expect(await footerHome2.screenshot()).toMatchSnapshot('footerHome2.png');

});

test('TC_VerifyCGVSnapshotTesting', async ({ page }) => {
  await page.goto('https://shop.tech-vip.com');

  await page.waitForTimeout(20000);

  await page.getByRole('link', { name: 'Cgv', exact: true }).click();
  await expect(page.locator('#ts')).toMatchAriaSnapshot(`
    - paragraph:
      - strong: CONDITIONS
      - strong: GÉNÉRALES DE VENTE
    - paragraph:
      - link "www.tech-vip.com":
        - /url: http://www.tech-vip.com
        - strong: www.tech-vip.com
    - paragraph:
      - strong
    - paragraph:
      - text: Les Présentes Conditions Générales de Vente (ci-après «
      - strong: Conditions Générales
      - text: » ou «
      - strong: CGV
      - text: ») ont pour objet de préciser les droits et obligations des parties entre
      - strong: CASSIOPEIA Digital Ltd,
      - text: immatriculée au registre des sociétés d’Angleterre et du Pays de galles sous le n°
      - strong: /\\d+/
      - text: ", dont le siège social se situe"
      - strong: /OFFICE 9, DALTON HOUSE \\d+ WINDSOR AVENUE- LONDON - UNITED KINGDOM- SW19 2RR/
      - text: (ci-après la «
      - strong: Société
      - text: » ou «
      - strong: Nous
      - text: ») et toute personne ayant choisi de s’abonner au service (Ci-après l’«
      - strong: Abonné
      - text: »).
    - paragraph:
      - text: Les présentes Conditions Générales de vente (ci-après «
      - strong: CGV
      - text: ») ont pour objet de définir les relations contractuelles entre la Société et l’Abonné.
    - paragraph:
      - text: Tout abonnement contracté auprès de la Société implique l’acceptation expresse, préalable, pleine et entière des présentes Conditions générales de vente par l’Abonné, ainsi que de la
      - link "Charte de Données personnelles":
        - /url: https://tech-vip.com/fr/pp/politique-de-protection-des-donnees-personnelles.html
      - text: .
    - paragraph:
      - text: Les
      - strong: CGV
      - text: ainsi que l’ensemble des informations contractuelles mentionnées sur le
      - strong: Site
      - text: sont rédigées en langue française. L’acceptation en ligne des présentes
      - strong: CGV
      - text: est matérialisée par une case à cocher obligatoire lors du processus d’abonnement décrit à l’Article 4 des CGV.
    - paragraph:
      - text: "Adresse courriel du service clients :"
      - link "contact@tech-vip.com":
        - /url: mailto:contact@tech-vip.com
    - paragraph:
      - text: "Numéro de téléphone du service clients :"
      - strong: /\\d+ \\d+ \\d+ \\d+ \\d+/
      - text: /\\(Du lundi au vendredi \\d+[hmsp]+ à 18h00\\)/
    - paragraph
    - list:
      - listitem:
        - strong: Présentation
    - paragraph:
      - text: Nous proposons à nos Abonnés, via notre site internet
      - strong: www.tech-vip.com
      - text: (ci-après «
      - strong: le Site
      - text: ») des réductions exclusives sur une sélection de produits (ci-après «
      - strong: le Service
      - text: »).
    - paragraph
    - list:
      - listitem:
        - strong: L’accès au Site
    - paragraph: L’Abonné est seul responsable des moyens technologiques nécessaires pour accéder au Site, et doit notamment disposer d’un accès à Internet et d’une adresse e-mail.
    - paragraph: Il conserve à sa charge les frais de télécommunication et d’accès à Internet pour l’utilisation du Site.
    - paragraph: /L’accès au Site est possible \\d+[hmsp]+\\/\\d+, 7j\\/7, sauf en cas de force majeure ou d’un événement hors du contrôle de la Société et sous réserve des éventuelles pannes et interventions de maintenance nécessaires au bon fonctionnement de celui-ci\\./
    - paragraph: La Société ne peut être tenue responsable de l’incapacité de l’Abonné à se connecter à Internet ou au Site, ou à accéder à son compte d’Abonné sur le Site.
    - paragraph: /Le Site internet est hébergé chez Anyfes Digital Almogàvers, \\d+-\\d+, Les Roquetes, Sant Père de Ribes \\d+ Barcelone, Espagne/
    - paragraph:
      - text: Le Site internet est édité par la «
      - strong: Société
      - text: »
    - paragraph: "Directeur de la publication : Richard TURNER"
    - paragraph
    - list:
      - listitem:
        - strong: Abonnement au Service
    - paragraph: "Il est possible de s’abonner au Service :"
    - paragraph: "- En se rendant directement sur le Site, ou"
    - paragraph: "- au moyen du formulaire d’abonnement proposant une offre de bienvenue réservée aux nouveaux Abonnés."
    - paragraph: "Afin de souscrire un abonnement, l’Abonné garantit :"
    - paragraph: "- être une personne physique et ne pas contracter dans le cadre d’une activité professionnelle ;"
    - paragraph: "- être majeur et responsable selon la loi en vigueur en France, et pouvoir légalement conclure un contrat qui l’engage ;"
    - paragraph: "- Résider en France métropolitaine ;"
    - paragraph: "- Ne pas avoir déjà souscrit un abonnement au Service dont il se serait rétracté,"
    - paragraph: Pour s’abonner au Service, l’Abonné doit remplir l’ensemble des champs du formulaire mis à sa disposition. En cas de communication de données erronées, la Société ne pourra voir sa responsabilité engagée.
    - paragraph: L’Abonné garantit que toutes les informations qu’il donne dans le formulaire sont exactes, à jour et sincères et ne sont entachées d’aucun caractère trompeur. Il s’engage à informer la Société (à l’adresse mentionnée en préambule des présentes CGV) en cas de modifications de ses coordonnées, notamment bancaires et/ou postales.
    - paragraph: L’Abonné est informé et accepte que les informations saisies aux fins de création ou de mise à jour de son Compte valent preuve de son identité. Les informations saisies l’engagent dès leur validation, étant précisé que la Société se réserve le droit de vérifier l’exactitude des données fournies.
    - paragraph: A l’issue de son inscription, et après paiement du prix du Service conformément à l’article 5 des présentes, l’Abonné reçoit un email de confirmation de son abonnement, qui reprendra le détail de sa commande, les conditions et modalités d’exercice de son droit de rétractation.
    - paragraph
    - list:
      - listitem:
        - strong: Présentation du Service
    - paragraph:
      - strong
    - list:
      - list:
        - listitem:
          - strong: Offre de bienvenue
    - paragraph:
      - text: La Société propose régulièrement des «
      - strong: Offres de Bienvenue
      - text: » dans le cadre de sa politique commerciale.
    - paragraph: "Ces offres réservées aux nouveaux Abonnés, permettent de s'abonner au Service en profitant :"
    - paragraph:
      - text: /- d’une part d’un contre remboursement de \\d+€ maximum pour seulement 1€ sur le produit indiqué dans l’offre de bienvenue \\(le «/
      - strong: Produit Promotionnel
      - text: »), et
    - paragraph
    - paragraph: /- d’autre part d’un accès découverte au Site d’une durée de \\d+[hmsp]+\\./
    - paragraph: /A l’issue de cette période de \\d+[hmsp]+, en l’absence de résiliation par l’Abonné, l’Abonnement de \\d+,\\d+€ \\(ou \\d+€ par trimestre\\) prendra alors effet automatiquement et se poursuivra selon les modalités fixées à l’article 5 des CGV\\./
    - paragraph: /Pour pouvoir bénéficier de l’Offre de bienvenue et du contre remboursement de \\d+€, le nouvel Abonné devra :/
    - paragraph: "- Dans un premier temps, souscrire à l’abonnement et verser la somme de 1€."
    - paragraph
    - paragraph: "- Dans un deuxième temps, faire l’acquisition du Produit Promotionnel."
    - paragraph: Cette acquisition pourra se faire auprès de n’importe quel commerçant, que ce soit en ligne ou en magasin.
    - paragraph:
      - text: /- Dans un troisième temps, dans les \\d+ jours suivant la souscription à l’Abonnement, l’Abonné devra adresser la facture d’achat du Produit Promotionnel à l’adresse suivante :/
      - link "contact@tech-vip.com":
        - /url: mailto:contact@tech-vip.com
    - paragraph: /La Société versera alors le remboursement de \\d+€ sur le compte Paypal associé à l’email fourni par l’Abonné\\. Si l’Abonné n’a pas de compte Paypal, il recevra un email de la part de Paypal pour ouvrir un compte et percevoir son remboursement\\./
    - paragraph: /A défaut d’avoir adressé la facture d’achat du Produit Promotionnel dans ce délai de \\d+ jours, la Société ne versera pas le somme de \\d+€\\./
    - paragraph
    - paragraph
    - list:
      - list:
        - listitem:
          - strong: Fonctionnement du Service
    - paragraph:
      - text: La Société propose chaque mois à ses Abonnés une large sélection de produits (High-Tech, Bricolage, Jeux Vidéo, Audio&Vidéo…) sur lesquels sont appliqués des réductions exclusives (ci-après «
      - strong: les Produits
      - text: »).
    - paragraph: Les frais de livraison s’affichent au moment de la validation du panier pour les non-membres.
    - paragraph: Chaque mois, l’Abonné est invité à consulter dans son espace Abonné sur le Site le catalogue des Produits -avec des réductions exclusives- proposés à l’achat.
    - paragraph:
      - strong: "ATTENTION : TOUS LES"
      - strong: ABONNÉS SONT FACTURÉS DE LA COTISATION TOUS LES MOIS (OU TOUS LES 3 MOIS), QU’ILS AIENT PROFITÉ OU NON DE LEUR ABONNEMENT EN PASSANT UNE OU PLUSIEURS COMMANDES.
    - paragraph: L’accès au catalogue des Produits est ILLIMITÉ, et l'Abonné peut passer autant de commandes qu'il le souhaite pendant toute la durée de son abonnement.
    - paragraph: L’Abonné peut profiter du Service sous réserve du bon encaissement du prix du Service conformément à l’article 5.
    - paragraph: Les produits proposés peuvent varier d’un mois sur l’autre. Les équipes s’efforcent de proposer aux abonnés une offre la plus large possible pour satisfaire le plus grand nombre.
    - paragraph: Les photographies des Produits figurant sur le Site ne sont pas contractuelles.
    - paragraph
    - paragraph
    - list:
      - listitem:
        - strong: Caractéristiques du Service
    - paragraph
    - paragraph:
      - strong: a. Durée et Résiliation
    - paragraph: /L’abonnement entre en vigueur au jour de l’adhésion, soit \\d+[hmsp]+ après la date de souscription\\./
    - paragraph: L’abonnement au Service est un abonnement mensuel ou trimestriel (selon le choix fait par l’Abonné lors de la souscription), sans engagement de durée, et à reconduction tacite.
    - paragraph: Cela signifie que l’abonnement sera reconduit et l’Abonné prélevé tous les mois -ou tous les trois mois- à chaque date d’anniversaire de la souscription.
    - paragraph:
      - text: A titre d’illustration, si l’abonnement a été souscrit le 1
      - superscript: er
      - text: /juillet, il entrera en vigueur à l’expiration de la période de \\d+[hmsp]+, soit le 4 juillet, et l’Abonné sera prélevé de sa première mensualité le 4 juillet\\./
    - paragraph: La résiliation peut être notifiée par l’Abonné à tout moment par courriel sans préavis et sans motif.
    - paragraph: "La résiliation devra être notifiée par l’Abonné :"
    - paragraph:
      - text: "- soit en remplissant le formulaire de résiliation en cliquant"
      - link "ici.":
        - /url: https://www.tech-vip.com/fr/rt/retractation.html
    - paragraph:
      - text: "- soit par un e-mail envoyé au Service Client de tech-vip.com à l’adresse courriel suivante :"
      - link "contact@tech-vip.com":
        - /url: mailto:contact@tech-vip.com
    - paragraph: La résiliation prendra effet à la fin de la période d’abonnement en cours (mensuelle ou trimestrielle selon l’offre choisie par le client), de sorte que l’Abonné qui résilie son Contrat et qui aura payé pour la période en cours aura le droit d’utiliser le Site et l’application pour le reste de la période en cours.
    - paragraph: A la fin de la période en cours l’Abonné n’aura plus accès au Service et ne sera plus prélevé par la Société.
    - paragraph: La Société se réserve par ailleurs le droit de résilier le Service à tout moment en cas de non-respect par l’Abonné des présentes Conditions Générales, ou d’invalidité du moyen de paiement fourni par l’Abonné.
    - paragraph: Elle se réserve également le droit d’arrêter de proposer le Service. L’arrêt du Service fera l’objet d’une information de l’Abonné par tout moyen approprié.
    - paragraph
    - paragraph:
      - strong: b. Prix et Paiement
    - paragraph: /Le coût de l’abonnement au Service s’élève à la somme de \\d+,\\d+€ TTC par mois, ou \\d+€ par trimestre, selon la formule d’abonnement choisie par l’Abonné au moment de la souscription\\./
    - paragraph: Chaque mois (ou chaque trimestre), l’Abonné pourra retrouver la facture correspondante à la période au sein de son espace Abonné sur le Site.
    - paragraph: L’Abonné autorise la Société à prélever automatiquement le montant de son abonnement au moyen des coordonnées bancaires qu’il aura fournies.
    - paragraph: /Le paiement du montant de l’Abonnement s’effectue exclusivement par carte bancaire\\. La carte bancaire sera débitée de \\d+,\\d+€ chaque mois \\(ou de \\d+€ par trimestre\\) et cela jusqu’à ce que l’Abonné souhaite mettre fin à son Abonnement dans les conditions énoncées à l’article 5\\. a\\) des CGV\\./
    - paragraph: En cas d’échec de paiement, et/ou en cas de fraude ou de tentative fraude de l’Abonné dont la Société aurait connaissance, celle-ci se réserve le droit de résilier l’abonnement et l’accès au Service correspondant.
    - paragraph:
      - strong: c. Période d’essai - Droit de Rétractation
    - paragraph: /Conformément à l'article L \\d+-\\d+ du Code de la consommation, l’Abonné dispose d'un délai légal de rétractation de \\d+ jours calendaires à compter de la date d'abonnement au Site/
    - paragraph: En se rétractant, l’Abonné résilie automatiquement son abonnement, et il reçoit le remboursement total des frais d'abonnement déjà payés.
    - paragraph: /Ce remboursement a lieu au plus tard dans les \\d+ jours à compter de la date à laquelle La Société a reçu sa demande de rétractation\\. A la suite de sa demande de rétractation, un email sera envoyé à l’Abonné, précisant que sa demande a été prise en considération\\./
    - paragraph: "L’Abonné pourra exercer son droit légal de rétractation en utilisant le formulaire présent sur le site internet dans la rubrique « Rétractation » ou en recopiant le formulaire ci-dessous sur papier libre :"
    - paragraph:
      - emphasis: Je vous notifie par la présente, ma rétractation du contrat pour la prestation de services ci-dessous
    - paragraph:
      - emphasis: "Date de souscription à l'abonnement :"
    - paragraph:
      - emphasis: "Nom & Prénom :"
    - paragraph:
      - emphasis: "Adresse email utilisée :"
    - paragraph:
      - emphasis: "Date & Signature (en cas de notification du présent formulaire sur papier):"
    - paragraph:
      - emphasis: L'exercice du droit de rétractation entraîne la résiliation du contrat".
    - paragraph
    - paragraph: "Ce formulaire de rétractation devra être adressé :"
    - paragraph: /- Par courrier postal à CASSIOPEIA Digital Ltd, OFFICE 9, DALTON HOUSE \\d+ WINDSOR AVENUE- LONDON - UNITED KINGDOM- SW19 2RR, ou/
    - paragraph:
      - text: "- par email à"
      - link "contact@tech-vip.com":
        - /url: mailto:contact@tech-vip.com
        - strong: contact@tech-vip.com
    - paragraph
    - list:
      - listitem:
        - strong: Livraison
    - paragraph: Les livraisons de Produits sont effectuées à l’adresse de livraison indiquée par l’Abonné lors de la souscription de son abonnement.
    - paragraph: /Les livraisons sont effectuées par envoi postal, dans le délai maximum de \\d+ jours suivant la validation de la commande par l’Abonné dans les conditions prévues à l’article 4\\./
    - paragraph:
      - text: "Dans le cas où l’Abonné ne reçoit pas le Produit commandé dans ce délai, il peut contacter la Société par e-mail :"
      - link "contact@tech-vip.com":
        - /url: about:blank
      - text: /ou par téléphone au \\d+ \\d+ \\d+ \\d+ \\d+\\./
    - paragraph: La Société prendra toute mesure appropriée pour rechercher le Produit perdu et dès confirmation de cette perte, réadressera le Produit à l’Abonné, dans les meilleurs délais ou se verra proposer un remboursement intégral.
    - paragraph: /En l’absence de livraison dans un délai de \\d+ jours à la suite de la notification par l’Abonné du retard de livraison, celui-ci peut également demander, par email ou par téléphone, l’annulation et \\/ ou le remboursement intégral de sa commande\\./
    - paragraph:
      - strong
    - list:
      - listitem:
        - strong: Données personnelles et Bancaires
    - paragraph: La Société respecte le droit à la vie privée. Elle est amenée, lors de l’inscription de l’Abonné au Site, à collecter des données à caractère personnel (adresse email, nom, prénom, numéro de téléphone…), aux fins de gestion de sa commande et des relations commerciales avec la Société.
    - paragraph:
      - text: Les conditions de traitement des données personnelles par la Société sont énoncées dans la
      - link "Politique de protection des données personnelles du Site":
        - /url: https://tech-vip.com/fr/pp/politique-de-protection-des-donnees-personnelles.html
      - text: .
    - paragraph:
      - text: /Conformément aux dispositions de la loi n°\\d+-\\d+ dite loi Informatique et libertés, du 6 janvier \\d+ et au règlement de l’UE \\d+\\/\\d+ applicable depuis le \\d+ mai \\d+, l’Abonné dispose d'un droit d’obtention, d’effacement, d’opposition, d'accès, de rectification et de suppression de toutes données personnelles le concernant obtenues par la Société lors de l'utilisation du Service\\. Tout Abonné peut exercer ce droit en envoyant un e-mail à l'adresse/
      - link "contact@tech-vip.com.":
        - /url: about:blank
    - paragraph: Dans le cas où l’Abonné prendrait finalement la décision de ne pas finaliser son abonnement, la Société collecte uniquement l’adresse email. Cette adresse email pourra être utilisée ultérieurement par la Société, afin de relancer le prospect qui n’aurait pas finalisé sa commande. Les autres informations ne sont conservées que pour les Abonnés qui finalisent vraiment leur abonnement au Service.
    - paragraph: La Société est particulièrement sensible à la sécurité de son site internet et aux informations que ses Abonnés pourraient lui confier. C’est pour cela que nous avons contracté avec les meilleurs prestataires de paiements. Les prélèvements des mensualités sont effectués via ces prestataires et de manière totalement sécurisée. Ces derniers sont les seuls à avoir accès à vos informations bancaires.
    - paragraph
    - list:
      - listitem:
        - strong: Droit applicable et compétence
    - paragraph: Les présentes Conditions Générales sont régies par la loi française.
    - paragraph: "En cas de contestation relative à l'interprétation, la validité et/ou l'exécution des présentes CGV, l’Abonné pourra saisir selon son choix :"
    - paragraph: "- l'une des juridictions territorialement compétentes en vertu du code de procédure civile, ou"
    - paragraph: "- la juridiction du lieu où il demeurait au moment de la conclusion du contrat ou de la survenance du fait dommageable."
    - paragraph: Si tout ou partie d’une clause des présentes s’avérait illicite, non écrite, nulle ou inapplicable, cette clause sera abandonnée, en tout ou partie, sans que la validité des autres clauses en soit affectée, le reste du présent accord conservant son plein effet.
    - paragraph
    - list:
      - listitem:
        - strong: Dispositions générales
    - paragraph: Les textes en vigueur exigent que certaines informations ou communications soient transmises par écrit. En utilisant ce Site, l’Abonné accepte que ces communications se fassent principalement par voie électronique.
    - paragraph: Pour des raisons contractuelles, l’Abonné accepte ce moyen de communication électronique et reconnaît que tous les contrats, avis, informations et autres communications que le Site fournira par voie électronique sont conformes aux obligations légales prévoyant que lesdites communications soient faites par écrit.
    - paragraph: /La Société se réserve le droit de mettre à jour les présentes CGV à tout moment et pour quelque motif que ce soit\\. Dans une telle hypothèse, la Société avertira l’Abonné de ces modifications et lui communiquera les dernières CGV au moins trente \\(\\d+\\) jours avant sa mise en œuvre, en l’informant qu’il peut choisir de résilier son abonnement par courriel adressé avant l’expiration de ce délai de \\d+ jours\\./
    - paragraph: En l’absence de résiliation intervenue dans ce délai, l’Abonné sera réputé avoir accepté les nouvelles CGV auxquelles il sera désormais lié dans le cadre de son abonnement.
    - paragraph
    - list:
      - listitem:
        - strong: Réclamations et médiation
    - paragraph: "Pour tous litiges entre la Société et l’Abonné, ce dernier est invité à tenter de le résoudre à l’amiable avant de saisir les juridictions judiciaires, en prenant le plus rapidement possible contact avec le service client de la Société selon les modalités suivantes :"
    - paragraph:
      - text: "- en envoyant un email à l'adresse suivante :"
      - link "contact@tech-vip.com":
        - /url: mailto:contact@tech-vip.com
      - text: ", ou"
    - paragraph:
      - text: "- en utilisant le formulaire en ligne accessible"
      - link "ici":
        - /url: https://www.tech-vip.com/fr/co/contact.html
      - text: ", ou"
    - paragraph: "/- en contactant le support téléphonique au numéro suivant : \\\\d+ \\\\d+ \\\\d+ \\\\d+ \\\\d+\\\\./"
    - paragraph: A défaut d’accord amiable ou en l’absence de réponse de la Société dans un délai d’un mois, l’Abonné pourra recourir à une médiation conventionnelle ou à tout autre mode alternatif de règlement des différends.
    - paragraph: /L’Abonné pourra notamment saisir gratuitement, conformément aux articles L\\.\\d+-1 et suivants du Code de la consommation, la plateforme de règlement en ligne des litiges de la Commission Européenne\\./
    - paragraph:
      - text: Cette plateforme est accessible
      - link "ici":
        - /url: https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home.howitworks#heading-6
      - text: .
    - paragraph: Cette plateforme de Médiation permet aux consommateurs de déposer en ligne une demande de médiation accompagnée des documents justificatifs.
    - paragraph: L’Abonné demeure libre d’accepter ou de refuser le recours à la médiation et, en cas de recours à la médiation, d’accepter ou de refuser la solution proposée par le Médiateur.
    `);
  await expect(page.locator('#ts')).toContainText('CONDITIONS GÉNÉRALES DE VENTE - TECH-VIP.COM');

});




