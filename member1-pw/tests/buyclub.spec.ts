import { test, expect } from '@playwright/test';
import { FakerUtils } from '../utils/fakerUtils';
import { CommonMethods } from '../utils/CommonMethods';

const fakerUtils = new FakerUtils();

test('TC_001: Verify Home page', async ({ page }) => {
  await page.goto('https://shop.buy-club.net/');
  await page.waitForURL('https://shop.buy-club.net/');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('#best-deals').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await page.locator('#new-arrivals').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElements(); 
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('home-fullpage.png'); 
});

test('TC_002: Verify Sport Header menu', async ({ page }) => {
  await page.goto('https://shop.buy-club.net/');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.getByRole('link', { name: 'Sport' }).click();
  await page.waitForURL('https://shop.buy-club.net/sport/');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await common.hideElements();
  expect(await page.screenshot({ fullPage: true })).toMatchSnapshot('sport-fullpage.png');
});

test('TC_003: Verify Objets Connectes Header menu', async ({ page }) => {
  await page.goto('https://shop.buy-club.net/');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.getByRole('link', { name: 'Objets connectés' }).click();
  await page.waitForURL('https://shop.buy-club.net/objets-connectes/');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await common.hideElements();
  expect(await page.screenshot({ fullPage: true })).toMatchSnapshot('objets-connectes-fullpage.png');
});

test('TC_004: Verify Audio Header menu', async ({ page }) => {
  await page.goto('https://shop.buy-club.net/');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.getByRole('link', { name: 'Audio' }).click();
  await page.waitForURL('https://shop.buy-club.net/audio-video/');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await common.hideElements();
  expect(await page.screenshot({ fullPage: true })).toMatchSnapshot('audio-fullpage.png');
});

test('TC_005: Verify Cuisine Header menu', async ({ page }) => {
  await page.goto('https://shop.buy-club.net/');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.getByRole('link', { name: 'Cuisine', exact: true }).click();
  await page.waitForURL('https://shop.buy-club.net/cuisine/');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await common.hideElements();
  expect(await page.screenshot({ fullPage: true })).toMatchSnapshot('cuisine-fullpage.png');
});

test('TC_006: Verify Beaute Header menu', async ({ page }) => {
  await page.goto('https://shop.buy-club.net/');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.getByRole('link', { name: 'Beauté', exact: true }).click();
  await page.waitForURL('https://shop.buy-club.net/beaute/');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await common.hideElements();
  expect(await page.screenshot({ fullPage: true })).toMatchSnapshot('beaute-fullpage.png');
});

test('TC_007: Verify Informatique Header menu', async ({ page }) => {
  await page.goto('https://shop.buy-club.net/');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.getByRole('link', { name: 'Informatique' }).click();
  await page.waitForURL('https://shop.buy-club.net/informatique/');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await common.hideElements();
  expect(await page.screenshot({ fullPage: true })).toMatchSnapshot('informatique-fullpage.png');
});

test('TC_008: Verify Presse Header menu', async ({ page }) => {
  await page.goto('https://shop.buy-club.net/');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.locator('#menu-item-6027').getByRole('link', { name: 'Presse' }).click();
  await page.waitForURL('https://shop.buy-club.net/presse/');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await common.hideElements();
  expect(await page.screenshot({ fullPage: true })).toMatchSnapshot('presse-fullpage.png');
});

test('TC_009: Verify Sabonner Header menu', async ({ page }) => {
  await page.goto('https://shop.buy-club.net/');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.getByRole('link', { name: 'S’abonner' }).click();
  await page.waitForURL('https://buy-club.net/fr/su/s-abonner.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await common.hideElements();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('sabonner-fullpage.png'); 
});

test('TC_010: Verify Connexion Header menu', async ({ page }) => {
  await page.goto('https://shop.buy-club.net/');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.getByRole('link', { name: 'Connexion' }).click();
  await page.waitForURL('https://buy-club.net/fr/li/login.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await common.hideElements();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('connexion-fullpage.png'); 
});

test('TC_011: Verify Forgot Password page', async ({ page }) => {
  await page.goto('https://shop.buy-club.net/');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.getByRole('link', { name: 'Connexion' }).click();
  await page.waitForURL('https://buy-club.net/fr/li/login.html');
  await page.getByRole('link', { name: 'Mot de passe oublié ?' }).click();
  await page.goto('https://buy-club.net/fr/li/login.html?recover');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await common.hideElements();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('forgot-password-fullpage.png'); 
});

// SideBar 
test('TC_012: Verify CGV SideBar page', async ({ page }) => {
  await page.goto('https://shop.buy-club.net/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.locator('.menu-toggle').click();
  await page.getByRole('link', { name: 'CGV', exact: true }).click();
  await page.waitForURL('https://buy-club.net/fr/ts/cgv.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await common.hideElements();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('cgv-fullpage.png');
});

test('TC_013: Verify Mentions Legales SideBar page', async ({ page }) => {
  await page.goto('https://shop.buy-club.net/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('.menu-toggle').click();
  await page.locator('#menu-item-1357').getByRole('link', { name: 'Mentions légales' }).click();  await page.waitForURL('https://buy-club.net/fr/lm/mention-legales.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await common.hideElements();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('mention-legales-fullpage.png');
});

test('TC_014: Verify Expedition Livraison SideBar page', async ({ page }) => {
  await page.goto('https://shop.buy-club.net/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('.menu-toggle').click();  
  await page.locator('#menu-item-2144').getByRole('link', { name: 'Expédition & Livraison' }).click();
  await page.waitForURL('https://buy-club.net/fr/sd/expedition-et-livraison.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await common.hideElements();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('expedition-livraison-fullpage.png');
});

test('TC_015: Verify Politique De Remboursementet SideBar page', async ({ page }) => {
  await page.goto('https://shop.buy-club.net/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('.menu-toggle').click(); 
  await page.locator('#menu-item-1358').getByRole('link', { name: 'Politique de remboursement et' }).click();
  await page.waitForURL('https://buy-club.net/fr/rp/remboursement-et-retour.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await common.hideElements();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('politiquederemboursementet-fullpage.png');
});

test('TC_016: Verify Politique De Confidentialité SideBar page', async ({ page }) => {
  await page.goto('https://shop.buy-club.net/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('.menu-toggle').click();  
  await page.locator('#menu-item-1359').getByRole('link', { name: 'Politique de Confidentialité' }).click();
  await page.waitForURL('https://buy-club.net/fr/pp/politique-de-protection-des-donnees-personnelles.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await common.hideElements();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('politiquedeconfidentialite-fullpage.png');
});

test('TC_017: Verify FAQ SideBar page', async ({ page }) => {
  await page.goto('https://shop.buy-club.net/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('.menu-toggle').click();
  await page.locator('#menu-item-1360').getByRole('link', { name: 'FAQ' }).click();
  await page.waitForURL('https://buy-club.net/fr/fq/foire-aux-questions.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await common.hideElements();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('faq-fullpage.png');
});

test('TC_018: Verify FAQ > Description SideBar page', async ({ page }) => {
  await page.goto('https://shop.buy-club.net/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('.menu-toggle').click();
  await page.locator('#menu-item-1360').getByRole('link', { name: 'FAQ' }).click();
  await page.waitForURL('https://buy-club.net/fr/fq/foire-aux-questions.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('a').filter({ hasText: 'Comment fonctionne Buy Club ?' }).click();
  await page.locator('a').filter({ hasText: 'Y-a-t-il des frais supplé' }).click();
  await page.locator('a').filter({ hasText: 'Je souhaite de désabonner,' }).click();
  await page.locator('a').filter({ hasText: 'Quand serais-je débité de mon' }).click();
  await page.locator('a').filter({ hasText: 'Comment puis-je vous' }).click();
  await page.locator('a').filter({ hasText: 'Qu\'est-ce que l\'Offre de' }).click();
  await page.locator('a').filter({ hasText: 'Mon paiement est-il sécurisé ?' }).click();
  await page.locator('a').filter({ hasText: 'Quand recevrai-je ma commande' }).click();
  await page.locator('a').filter({ hasText: 'Y a t-il une limite de' }).click();
  await page.locator('a').filter({ hasText: 'Le produit commandé est arriv' }).click();
  await page.locator('a').filter({ hasText: 'Est-ce possible de me faire' }).click();
  await page.locator('a').filter({ hasText: 'Quels produits puis-je' }).click();
  await page.locator('a').filter({ hasText: 'Est-ce que je peux modifier' }).click();
  await page.locator('a').filter({ hasText: 'Est-il possible de consulter' }).click();
  await common.hideElements();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('faq-description-fullpage.png');
});

test('TC_019: Verify Contact SideBar page', async ({ page }) => {
  await page.goto('https://shop.buy-club.net/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('.menu-toggle').click();
  await page.getByRole('link', { name: 'Contact', exact: true }).click(); 
  await page.waitForURL('https://buy-club.net/fr/co/contact.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await common.hideElements();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('contact-fullpage.png');
});

test('TC_020: Verify NotreOffre SideBar page', async ({ page }) => {
  await page.goto('https://shop.buy-club.net/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('.menu-toggle').click();
  await page.getByRole('link', { name: 'Notre offre' }).click();
  await page.waitForURL('https://buy-club.net/fr/hw/le-concept.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await common.hideElements();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('notreoffre-fullpage.png');
});

test('TC_021: Verify Suivre Votre Commande SideBar page', async ({ page }) => {
  await page.goto('https://shop.buy-club.net/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('.menu-toggle').click(); 
  await page.locator('#menu-item-2145').getByRole('link', { name: 'Suivre votre commande' }).click();
  await page.waitForURL('https://buy-club.net/fr/tr/suivre-votre-commande.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await common.hideElements();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('suivrevotrecommande-fullpage.png');
});

test('TC_022: Verify Moyens De Paiement SideBar page', async ({ page }) => {
  await page.goto('https://shop.buy-club.net/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('.menu-toggle').click();
  await page.locator('#menu-item-2146').getByRole('link', { name: 'Moyens de paiement' }).click();
  await page.waitForURL('https://buy-club.net/fr/pm/moyens-de-paiement.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await common.hideElements();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('moyensdepaiement-fullpage.png');
});

test('TC_023: Verify Sabonner SideBar page', async ({ page }) => {
  await page.goto('https://shop.buy-club.net/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('.menu-toggle').click();
  await page.getByRole('link', { name: 'S’abonner', exact: true }).click();
  await page.waitForURL('https://buy-club.net/fr/su/s-abonner.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await common.hideElements();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('sabonner-sidebar-fullpage.png');
});

test('TC_024: Verify Mon Compte SideBar page', async ({ page }) => {
  await page.goto('https://shop.buy-club.net/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('.menu-toggle').click();
  await page.getByRole('link', { name: 'Mon compte' }).click();
  await page.waitForURL('https://buy-club.net/fr/my/espace-membre.php');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await common.hideElements();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('moncompte-fullpage.png');
});

//footer

test('TC_025: Verify CGV Footer page', async ({ page }) => {
  await page.goto('https://shop.buy-club.net/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.getByRole('link', { name: 'Cgv', exact: true }).click();
  await page.waitForURL('https://buy-club.net/fr/ts/cgv.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await common.hideElements();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('cgv-fullpage.png');
});

test('TC_026: Verify Mentions Legales Footer page', async ({ page }) => {
  await page.goto('https://shop.buy-club.net/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('#menu-item-1252').getByRole('link', { name: 'Mentions légales' }).click();
  await page.waitForURL('https://buy-club.net/fr/lm/mention-legales.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await common.hideElements();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('mention-legales-fullpage.png');
});

test('TC_027: Verify NewsLetter Footer page', async ({ page }) => {
  await page.goto('https://shop.buy-club.net/');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.getByRole('link', { name: 'Newsletter' }).click();
  await page.waitForURL('https://buy-club.net/fr/nl/newsletter.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await common.hideElements();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('newsletter-fullpage.png'); 
});

test('TC_028: Verify Desabonnement Footer page', async ({ page }) => {
  await page.goto('https://shop.buy-club.net/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.getByRole('link', { name: 'Désabonnement' }).click();
  await page.waitForURL('https://buy-club.net/fr/us/desabonnement.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await common.hideElements();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('desabonnement-fullpage.png');
});

test('TC_029: Verify Presse Footer page', async ({ page }) => {
  await page.goto('https://shop.buy-club.net/');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.locator('#menu-item-6026').getByRole('link', { name: 'Presse' }).click();
  await page.waitForURL('https://shop.buy-club.net/presse/');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await common.hideElements();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('presse-fullpage.png'); 
});

test('TC_030: Verify FAQ Footer page', async ({ page }) => {
  await page.goto('https://shop.buy-club.net/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('#menu-item-1374').getByRole('link', { name: 'FAQ' }).click();
  await page.waitForURL('https://buy-club.net/fr/fq/foire-aux-questions.html');
  await expect(page.getByText('FAQ : Foire aux questions')).toBeVisible();
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await common.hideElements();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('faq-fullpage.png');
});

test('TC_031: Verify FAQ > Description Footer page', async ({ page }) => {
  await page.goto('https://shop.buy-club.net/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('#menu-item-1374').getByRole('link', { name: 'FAQ' }).click();
  await page.waitForURL('https://buy-club.net/fr/fq/foire-aux-questions.html');
  await expect(page.getByText('FAQ : Foire aux questions')).toBeVisible();
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('a').filter({ hasText: 'Comment fonctionne Buy Club ?' }).click();
  await page.locator('a').filter({ hasText: 'Y-a-t-il des frais supplé' }).click();
  await page.locator('a').filter({ hasText: 'Je souhaite de désabonner,' }).click();
  await page.locator('a').filter({ hasText: 'Quand serais-je débité de mon' }).click();
  await page.locator('a').filter({ hasText: 'Comment puis-je vous' }).click();
  await page.locator('a').filter({ hasText: 'Qu\'est-ce que l\'Offre de' }).click();
  await page.locator('a').filter({ hasText: 'Mon paiement est-il sécurisé ?' }).click();
  await page.locator('a').filter({ hasText: 'Quand recevrai-je ma commande' }).click();
  await page.locator('a').filter({ hasText: 'Y a t-il une limite de' }).click();
  await page.locator('a').filter({ hasText: 'Le produit commandé est arriv' }).click();
  await page.locator('a').filter({ hasText: 'Est-ce possible de me faire' }).click();
  await page.locator('a').filter({ hasText: 'Quels produits puis-je' }).click();
  await page.locator('a').filter({ hasText: 'Est-ce que je peux modifier' }).click();
  await page.locator('a').filter({ hasText: 'Est-il possible de consulter' }).click();
  await common.hideElements();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('faq-description-fullpage.png');
});

test('TC_032: Verify Expedition Livraison Footer page', async ({ page }) => {
  await page.goto('https://shop.buy-club.net/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('#menu-item-2148').getByRole('link', { name: 'Expédition & Livraison' }).click();
  await page.waitForURL('https://buy-club.net/fr/sd/expedition-et-livraison.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await common.hideElements();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('expedition-livraison-fullpage.png');
});

test('TC_033: Verify Suivre Votre Commande Footer page', async ({ page }) => {
  await page.goto('https://shop.buy-club.net/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('#menu-item-2149').getByRole('link', { name: 'Suivre votre commande' }).click();
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await common.hideElements();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('suivrevotrecommande-fullpage.png');
});

test('TC_034: Verify Moyens De Paiement Footer page', async ({ page }) => {
  await page.goto('https://shop.buy-club.net/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('#menu-item-2147').getByRole('link', { name: 'Moyens de paiement' }).click();
  await page.waitForURL('https://buy-club.net/fr/pm/moyens-de-paiement.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await common.hideElements();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('moyensdepaiement-fullpage.png');
});

test('TC_035: Verify Politique De Remboursementet Footer page', async ({ page }) => {
  await page.goto('https://shop.buy-club.net/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('#menu-item-1375').getByRole('link', { name: 'Politique de remboursement et' }).click();
  await page.waitForURL('https://buy-club.net/fr/rp/remboursement-et-retour.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await common.hideElements();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('politiquederemboursementet-fullpage.png');
});

test('TC_036: Verify Politique De Confidentialite Footer page', async ({ page }) => {
  await page.goto('https://shop.buy-club.net/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('#menu-item-1376').getByRole('link', { name: 'Politique de Confidentialité' }).click();
  await page.waitForURL('https://buy-club.net/fr/pp/politique-de-protection-des-donnees-personnelles.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await common.hideElements();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('politiquedeconfidentialite-fullpage.png');
});

test('TC_037: Verify Product Description page', async ({ page }) => {
  await page.goto('https://shop.buy-club.net/');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.getByRole('link', { name: 'PRIX VIP −50% Souris de jeu' }).click();
  await page.waitForURL('https://shop.buy-club.net/professional-wired-gaming-mouse/');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await common.hideElements();
  expect(await page.screenshot({fullPage: true, mask: [
      page.locator('div[class="aship-box-products list-product related-products"]')
    ]})).toMatchSnapshot('product-description-fullpage.png'); 
});

test.skip('TC_PSP_02_VerifyEmailAfterPurchaseMembership', async ({ page }) => {
  await page.goto('https://shop.buy-club.net/');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();  
  await page.getByRole('link', { name: 'S’abonner' }).click();
  await page.waitForTimeout(10000);
  await expect(page.getByText('S’abonner à buy-club.net')).toBeVisible();
  await expect(page.locator('h3')).toContainText('Pour vous inscrire et profiter de vos 3 jours d\'essai pour seulement 1€, remplissez le formulaire ci-dessous');
  await expect(page.locator('#su')).toContainText('Informations personnelles');
  await expect(page.locator('#subscriber-form')).toContainText('Attention, pour être sûr de recevoir correctement vos commandes, veillez à bien renseigner vos coordonnées pour le bon déroulement de la livraison.');
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
  await expect(page.getByText('S’abonner à buy-club.net')).toBeVisible();
  await expect(page.locator('[id="125"]')).toContainText('En cochant cette case, vous acceptez nos CGV et notre politique de confidentialité , et acceptez de commencer l\'abonnement mensuel de 29,90€/mois jusqu\'à ce que vous l\'annuliez. Si vous ne savez pas comment payer ou annuler votre abonnement, consultez nos conditions d\'utilisation et de service ou contactez l\'assistance sur contact@buy-club.net .');
  await expect(page.locator('#main')).toContainText('Paiement sécurisé, il apparaîtra sous la forme « buy-club.net »');
  await expect(page.getByRole('heading', { name: 'Paiement sécurisé, il apparaî' })).toBeVisible();
  await expect(page.getByText('N° de la carte')).toBeVisible();
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
  await expect(page.locator('#ccard-form').getByRole('paragraph').first()).toBeVisible();
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
  await page.waitForLoadState('networkidle');
  await page.waitForURL('https://buy-club.net/fr/sh/confirmation.html'); 
  await expect(page.getByRole('heading', { name: 'MERCI !' })).toBeVisible();
  //Implementation pending - card issue
});

test.skip('TC_PSP_05_TC_PSP_07_VerifyEmailAfterPurchaseProduct', async ({ page }) => {
  await page.goto('https://shop.buy-club.net/');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.getByRole('link', { name: 'PRIX VIP −50% Points noirs,' }).click();
  await expect(page.getByRole('heading', { name: 'Points noirs, Nettoyant nez é' })).toBeVisible();
  await expect(page.getByText('17.40 €')).toBeVisible();
  await page.getByRole('button', { name: 'Ajouter au panier' }).click();
  await expect(page.getByRole('heading', { name: 'Votre panier' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Points noirs, Nettoyant nez é' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Commander' })).toBeVisible();
  await page.getByRole('link', { name: 'Commander' }).click();
  await expect(page.locator('div').filter({ hasText: 'Paiement sécurisé' }).first()).toBeVisible();
  await expect(page.getByText('Votre panier Détails de la')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Infos de livraison' })).toBeVisible();
  await expect(page.getByText('E-mail Le champ est requis')).toBeVisible();
  await expect(page.getByText('Prénom Le champ est requis')).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Nom de famille' })).toBeVisible();
  await expect(page.getByText('Adresse Le champ est requis')).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Apt, suite, etc. (optional)' })).toBeVisible();
  await expect(page.getByText('France BelgiqueFranceMonacoSuisse BelgiqueFranceMonacoSuisse')).toBeVisible();
  await expect(page.getByText('Veuillez sélectionner Veuillez sélectionnerAinAisneAllierAlpes-MaritimesAlpes-')).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Code postal' })).toBeVisible();
  await expect(page.getByText('Mon adresse n\'a pas de code')).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Ville' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Téléphone (optionnel)' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Informations supplémentaires' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Votre commande' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Méthode de livraison' })).toBeVisible();
  await expect(page.locator('.box-shipping-cart')).toBeVisible();
  await expect(page.getByText('membre privilégiéDevenez un')).toBeVisible();
  await expect(page.locator('#take_adv_div_banner div').filter({ hasText: 'membre privilégiéDevenez un' }).first()).toBeVisible();
  await expect(page.locator('.paypal-img')).toBeVisible();
  await expect(page.getByText('Sous-Total9.70 €17.40 €')).toBeVisible();
  await expect(page.getByText('Expédition0.00 €6.99 €')).toBeVisible();
  await expect(page.getByText('Vous économisez14.69 €0.00 €')).toBeVisible();
  await expect(page.getByText('Total9.70 €24.39 €')).toBeVisible();
  await expect(page.locator('h4')).toContainText('Le moyen sûr, amusant et rapide d\'acheter vos produits préférés!');
  await expect(page.locator('#form_delivery')).toContainText('Nous partageons votre enthousiasme pour tout ce qui est bon, tout en offrant un service rapide et garantie, la livraison gratuite dans la plupart des pays et une expérience d\'achat sécurisée (mais amusante!). Pour obtenir de l\'aide, contactez notre service après vente.');
  await expect(page.locator('.trust-box > img')).toBeVisible();
  await expect(page.locator('#main-button-container div').nth(2)).toBeVisible();
  await expect(page.getByText('Vous serez redirigé vers')).toBeVisible();
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

test.skip('TC_PSP_09_VerifyEmailAfterFillingUpContact', async ({ page }) => {
  await page.goto('https://shop.buy-club.net/');
  await page.locator('.menu-toggle').click();
  await expect(page.getByRole('link', { name: 'Contact', exact: true })).toBeVisible();
  await page.getByRole('link', { name: 'Contact', exact: true }).click();
  await expect(page.getByText('AccueilContact')).toBeVisible(); 
  await expect(page.getByRole('heading', { name: 'VOUS SOUHAITEZ NOUS CONTACTER' })).toBeVisible();
  await expect(page.getByText('Avant d\'envoyer votre message')).toBeVisible();
  await expect(page.locator('#co').getByRole('link', { name: 'FAQ' })).toBeVisible();
  await expect(page.getByText('Avez-vous une question sur')).toBeVisible();
  await expect(page.locator('#co')).toContainText('Avez-vous une question sur notre service ou souhaitez-vous gérer votre abonnement ? Peu importe la raison, ce formulaire de contact a été mis en place pour vous permettre de nous joindre facilement et rapidement. Nous mettrons tout en œuvre pour vous répondre dans les meilleurs délais.');
  await expect(page.locator('#co')).toContainText('Vous pouvez également nous contacter par téléphone au 01 76 38 06 05 du lundi au vendredi (09h00 à 17h00)');
  await expect(page.locator('#co')).toContainText('Site édité par CASSIOPEIA DIGITAL LTD. Imatriculée sous le n° 12829698 et dont le siège social est situé au OFFICE 9, DALTON HOUSE 60 WINDSOR AVENUE - LONDON- UNITED KINGDOM - SW19 2RR')
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

test.skip('TC_VerifySabonnerFormulaireDeRétractationFunctionality', async ({ page }) => {
  await page.goto('https://shop.buy-club.net/');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await expect(page.getByRole('link', { name: 'S’abonner' })).toBeVisible();
  await page.getByRole('link', { name: 'S’abonner' }).click();
  await expect(page.getByText('S’abonner à buy-club.net')).toBeVisible();
  await expect(page.getByRole('link', { name: 'conditions générales de vente' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'formulaire de rétractation.' })).toBeVisible();
  await page.getByRole('link', { name: 'formulaire de rétractation.' }).click();
  await expect(page.getByText('Formulaire de rétractation', { exact: true })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Prénom *' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Nom *', exact: true })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Email *' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Sujet du message *' })).toBeVisible();
  await expect(page.getByText('En cochant cette case, je')).toBeVisible();
  await expect(page.getByText('* Champs obligatoires')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Envoyer' })).toBeVisible();
  const firstName = fakerUtils.getFirstName();
  await page.getByRole('textbox', { name: 'Prénom *' }).click();
  await page.getByRole('textbox', { name: 'Prénom *' }).fill(firstName);
  await page.getByRole('textbox', { name: 'Nom *', exact: true }).click();
  await page.getByRole('textbox', { name: 'Nom *', exact: true }).fill(fakerUtils.getLastName());
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill(fakerUtils.getEmail(firstName));
  await page.locator('#agree_retractation').check();
  await page.getByRole('button', { name: 'Envoyer' }).click();
  await expect(page.getByText('Votre "formulaire de rétractation" a été envoyé avec succès !')).toBeVisible();

});

