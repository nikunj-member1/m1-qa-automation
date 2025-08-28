import { test, expect } from '@playwright/test';
import { CommonMethods } from '../utils/CommonMethods';

test('TC_001: Verify Home page', async ({ page }) => {
  await page.goto('https://shop.top-reduc.net/');
  await page.waitForURL('https://shop.top-reduc.net/');
  const common = new CommonMethods(page);
  await common.waitForPageLoad(7000);
  await page.locator('#best-deals').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad(10000);
  await page.locator('#new-arrivals').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('home-fullpage.png'); 
});

test('TC_002: Verify Ordinateurs Header menu', async ({ page }) => {
  await page.goto('https://shop.top-reduc.net/');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.getByRole('link', { name: 'Ordinateurs' }).click();
  await page.waitForURL('https://shop.top-reduc.net/ordinateurs/');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('ordinateurs-fullpage.png'); 
});

test('TC_003: Verify Tablettes Header menu', async ({ page }) => {
  await page.goto('https://shop.top-reduc.net/');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.getByRole('link', { name: 'Tablettes' }).click();
  await page.waitForURL('https://shop.top-reduc.net/tablettes/');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('tablettes-fullpage.png'); 
});

test('TC_004: Verify Stockage Header menu', async ({ page }) => {
  await page.goto('https://shop.top-reduc.net/');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.getByRole('link', { name: 'Stockage' }).click();
  await page.waitForURL('https://shop.top-reduc.net/stockage/');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('stockage-fullpage.png'); 
});

test('TC_005: Verify Accessoires Informatique Header menu', async ({ page }) => {
  await page.goto('https://shop.top-reduc.net/');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.getByRole('link', { name: 'Accessoires Informatique' }).click();
  await page.waitForURL('https://shop.top-reduc.net/accessoires-informatique/');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('accessoiresinformatique-fullpage.png'); 
});

test('TC_006: Verify Fournitures de bureau Header menu', async ({ page }) => {
  await page.goto('https://shop.top-reduc.net/');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.getByRole('link', { name: 'Fournitures de bureau' }).click();
  await page.waitForURL('https://shop.top-reduc.net/fournitures-de-bureau/');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('fournituresdebureau-fullpage.png'); 
});

test('TC_007: Verify Téléphones Header menu', async ({ page }) => {
  await page.goto('https://shop.top-reduc.net/');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.getByRole('link', { name: 'Téléphones' }).click();
  await page.waitForURL('https://shop.top-reduc.net/telephones/');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('telephones-fullpage.png'); 
});

test('TC_008: Verify Sabonner Header menu', async ({ page }) => {
  await page.goto('https://shop.top-reduc.net/');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.getByRole('link', { name: 'S’abonner' }).click();
  await page.waitForURL('https://top-reduc.net/fr/su/s-abonner.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('sabonner-fullpage.png'); 
});

test('TC_009: Verify Connexion Header menu', async ({ page }) => {
  await page.goto('https://shop.top-reduc.net/');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.getByRole('link', { name: 'Connexion' }).click();
  await page.waitForURL('https://top-reduc.net/fr/li/login.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('connexion-fullpage.png'); 
});

test('TC_010: Verify Forgot Password page', async ({ page }) => {
  await page.goto('https://shop.top-reduc.net/');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.getByRole('link', { name: 'Connexion' }).click();
  await page.waitForURL('https://top-reduc.net/fr/li/login.html');
  await page.getByRole('link', { name: 'Mot de passe oublié ?' }).click();
  await page.goto('https://top-reduc.net/fr/li/login.html?recover');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('forgot-password-fullpage.png'); 
});

// SideBar 
test('TC_011: Verify CGV SideBar page', async ({ page }) => {
  await page.goto('https://shop.top-reduc.net/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.locator('.menu-toggle').click();
  await page.locator('#menu-item-1355').getByRole('link', { name: 'CGV' }).click();
  await page.waitForURL('https://top-reduc.net/fr/ts/cgv.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('cgv-fullpage.png');
});

test('TC_012: Verify Mentions Legales SideBar page', async ({ page }) => {
  await page.goto('https://shop.top-reduc.net/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('.menu-toggle').click();
  await page.locator('#menu-item-1356').getByRole('link', { name: 'Mentions légales' }).click();
  await page.waitForURL('https://top-reduc.net/fr/lm/mention-legales.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('mention-legales-fullpage.png');
});

test('TC_013: Verify Expedition Livraison SideBar page', async ({ page }) => {
  await page.goto('https://shop.top-reduc.net/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('.menu-toggle').click();
  await page.locator('#menu-item-2052').getByRole('link', { name: 'Expédition & Livraison' }).click();
  await page.waitForURL('https://top-reduc.net/fr/sd/expedition-et-livraison.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('expedition-livraison-fullpage.png');
});

test('TC_014: Verify Politique De Remboursementet SideBar page', async ({ page }) => {
  await page.goto('https://shop.top-reduc.net/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('.menu-toggle').click();
  await page.locator('#menu-item-1357').getByRole('link', { name: 'Politique de remboursement et' }).click();
  await page.waitForURL('https://top-reduc.net/fr/rp/remboursement-et-retour.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('politiquederemboursementet-fullpage.png');
});

test('TC_015: Verify Politique De Confidentialité SideBar page', async ({ page }) => {
  await page.goto('https://shop.top-reduc.net/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('.menu-toggle').click();
  await page.locator('#menu-item-1358').getByRole('link', { name: 'Politique de Confidentialité' }).click();
  await page.waitForURL('https://top-reduc.net/fr/pp/politique-de-protection-des-donnees-personnelles.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('politiquedeconfidentialite-fullpage.png');
});

test('TC_016: Verify FAQ SideBar page', async ({ page }) => {
  await page.goto('https://shop.top-reduc.net/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('.menu-toggle').click();
  await page.locator('#menu-item-1359').getByRole('link', { name: 'FAQ' }).click();
  await page.waitForURL('https://top-reduc.net/fr/fq/foire-aux-questions.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('faq-fullpage.png');
});

test('TC_017: Verify FAQ > Description SideBar page', async ({ page }) => {
  await page.goto('https://shop.top-reduc.net/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('.menu-toggle').click();
  await page.locator('#menu-item-1359').getByRole('link', { name: 'FAQ' }).click();
  await page.waitForURL('https://top-reduc.net/fr/fq/foire-aux-questions.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('a').filter({ hasText: 'Comment fonctionne Top Reduc ?' }).click();
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
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('faq-description-fullpage.png');
});

test('TC_018: Verify Contact SideBar page', async ({ page }) => {
  await page.goto('https://shop.top-reduc.net/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('.menu-toggle').click();
  await page.getByRole('link', { name: 'Contact', exact: true }).click();
  await page.waitForURL('https://top-reduc.net/fr/co/contact.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('contact-fullpage.png');
});

test('TC_019: Verify NotreOffre SideBar page', async ({ page }) => {
  await page.goto('https://shop.top-reduc.net/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('.menu-toggle').click();
  await page.getByRole('link', { name: 'Notre offre' }).click();
  await page.waitForURL('https://top-reduc.net/fr/hw/le-concept.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('notreoffre-fullpage.png');
});

test('TC_020: Verify Suivre Votre Commande SideBar page', async ({ page }) => {
  await page.goto('https://shop.top-reduc.net/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('.menu-toggle').click();
  await page.locator('#menu-item-2053').getByRole('link', { name: 'Suivre votre commande' }).click();
  await page.waitForURL('https://top-reduc.net/fr/tr/suivre-votre-commande.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('suivrevotrecommande-fullpage.png');
});

test('TC_021: Verify Moyens De Paiement SideBar page', async ({ page }) => {
  await page.goto('https://shop.top-reduc.net/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('.menu-toggle').click();
  await page.locator('#menu-item-2054').getByRole('link', { name: 'Moyens de paiement' }).click();
  await page.waitForURL('https://top-reduc.net/fr/pm/moyens-de-paiement.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('moyensdepaiement-fullpage.png');
});

test('TC_022: Verify Sabonner SideBar page', async ({ page }) => {
  await page.goto('https://shop.top-reduc.net/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('.menu-toggle').click();
  await page.getByRole('link', { name: 'S’abonner', exact: true }).click();
  await page.waitForURL('https://top-reduc.net/fr/su/s-abonner.html');
  await page.locator('//footer[@class="footer"]/div[1][@class="container"]').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('sabonner-sidebar-fullpage.png');
});

test('TC_023: Verify Mon Compte SideBar page', async ({ page }) => {
  await page.goto('https://shop.top-reduc.net/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('.menu-toggle').click();
  await page.getByRole('link', { name: 'Mon compte' }).click();
  await page.waitForURL('https://top-reduc.net/fr/my/espace-membre.php');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('moncompte-fullpage.png');
});

//footer

test('TC_024: Verify CGV Footer page', async ({ page }) => {
  await page.goto('https://shop.top-reduc.net/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('#menu-item-1294').getByRole('link', { name: 'Cgv' }).click(); 
  await page.waitForURL('https://top-reduc.net/fr/ts/cgv.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('cgv-fullpage.png');
});

test('TC_025: Verify Mentions Legales Footer page', async ({ page }) => {
  await page.goto('https://shop.top-reduc.net/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('#menu-item-1252').getByRole('link', { name: 'Mentions légales' }).click();
  await page.waitForURL('https://top-reduc.net/fr/lm/mention-legales.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('mention-legales-fullpage.png');
});

test('TC_026: Verify NewsLetter Footer page', async ({ page }) => {
  await page.goto('https://shop.top-reduc.net/');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.getByRole('link', { name: 'Newsletter' }).click();
  await page.waitForURL('https://top-reduc.net/fr/nl/newsletter.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('newsletter-fullpage.png'); 
});

test('TC_027: Verify Desabonnement Footer page', async ({ page }) => {
  await page.goto('https://shop.top-reduc.net/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.getByRole('link', { name: 'Désabonnement' }).click();
  await page.waitForURL('https://top-reduc.net/fr/us/desabonnement.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('desabonnement-fullpage.png');
});

test('TC_028: Verify FAQ Footer page', async ({ page }) => {
  await page.goto('https://shop.top-reduc.net/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('#menu-item-1374').getByRole('link', { name: 'FAQ' }).click();
  await page.waitForURL('https://top-reduc.net/fr/fq/foire-aux-questions.html');
  await expect(page.getByText('FAQ : Foire aux questions')).toBeVisible();
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('faq-fullpage.png');
});

test('TC_029: Verify FAQ > Description Footer page', async ({ page }) => {
  await page.goto('https://shop.top-reduc.net/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('#menu-item-1374').getByRole('link', { name: 'FAQ' }).click();
  await page.waitForURL('https://top-reduc.net/fr/fq/foire-aux-questions.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('a').filter({ hasText: 'Comment fonctionne Top Reduc ?' }).click();
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
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('faq-description-fullpage.png');
});

test('TC_030: Verify Expedition Livraison Footer page', async ({ page }) => {
  await page.goto('https://shop.top-reduc.net/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('#menu-item-2056').getByRole('link', { name: 'Expédition & Livraison' }).click();
  await page.waitForURL('https://top-reduc.net/fr/sd/expedition-et-livraison.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('expedition-livraison-fullpage.png');
});

test('TC_031: Verify Suivre Votre Commande Footer page', async ({ page }) => {
  await page.goto('https://shop.top-reduc.net/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('#menu-item-2057').getByRole('link', { name: 'Suivre votre commande' }).click();
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('suivrevotrecommande-fullpage.png');
});

test('TC_032: Verify Moyens De Paiement Footer page', async ({ page }) => {
  await page.goto('https://shop.top-reduc.net/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('#menu-item-2055').getByRole('link', { name: 'Moyens de paiement' }).click();
  await page.waitForURL('https://top-reduc.net/fr/pm/moyens-de-paiement.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('moyensdepaiement-fullpage.png');
});

test('TC_033: Verify Politique De Remboursementet Footer page', async ({ page }) => {
  await page.goto('https://shop.top-reduc.net/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('#menu-item-1375').getByRole('link', { name: 'Politique de remboursement et' }).click();
  await page.waitForURL('https://top-reduc.net/fr/rp/remboursement-et-retour.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('politiquederemboursementet-fullpage.png');
});

test('TC_034: Verify Politique De Confidentialite Footer page', async ({ page }) => {
  await page.goto('https://shop.top-reduc.net/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('#menu-item-1376').getByRole('link', { name: 'Politique de Confidentialité' }).click();
  await page.waitForURL('https://top-reduc.net/fr/pp/politique-de-protection-des-donnees-personnelles.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('politiquedeconfidentialite-fullpage.png');
});

test('TC_035: Verify Product Description page', async ({ page }) => {
  await page.goto('https://shop.top-reduc.net/');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.getByRole('link', { name: 'PRIX VIP −50% Répéteur WiFi' }).click();
  await page.waitForURL('https://shop.top-reduc.net/compact-home-wifi-repeater/');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true, mask: [
      page.locator('div[class="aship-box-products list-product related-products"]')
    ]})).toMatchSnapshot('product-description-fullpage.png'); 
});

