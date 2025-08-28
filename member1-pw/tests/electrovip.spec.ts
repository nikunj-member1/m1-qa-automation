import { test, expect } from '@playwright/test';
import { CommonMethods } from '../utils/CommonMethods';

test('TC_001: Verify Home page', async ({ page }) => {
  await page.goto('https://shop.electro-vip.com/');
  await page.waitForURL('https://shop.electro-vip.com/');
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

test('TC_002: Verify Petit electromenager Header menu', async ({ page }) => {
  await page.goto('https://shop.electro-vip.com/');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.getByRole('link', { name: 'Petit électroménager' }).click();
  await page.waitForURL('https://shop.electro-vip.com/petit-electromenager/');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('petitelectromenager-fullpage.png'); 
});

test('TC_003: Verify Linge de maison Header menu', async ({ page }) => {
  await page.goto('https://shop.electro-vip.com/');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.getByRole('link', { name: 'Linge de maison' }).click();
  await page.waitForURL('https://shop.electro-vip.com/linge-de-maison/');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('lingedemaison-fullpage.png'); 
});

test('TC_004: Verify Arts De La Table Header menu', async ({ page }) => {
  await page.goto('https://shop.electro-vip.com/');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.getByRole('link', { name: 'Arts de la Table' }).click();
  await page.waitForURL('https://shop.electro-vip.com/arts-de-la-table/');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('artsdelatable-fullpage.png'); 
});

test('TC_005: Verify Luminaires et Eclairage Header menu', async ({ page }) => {
  await page.goto('https://shop.electro-vip.com/');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.getByRole('link', { name: 'Luminaires et Eclairage' }).click();
  await page.waitForURL('https://shop.electro-vip.com/luminaires-eclairage/');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('luminaireseteclairage-fullpage.png'); 
});

test('TC_006: Verify Décoration Header menu', async ({ page }) => {
  await page.goto('https://shop.electro-vip.com/');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.getByRole('link', { name: 'Décoration' }).click();
  await page.waitForURL('https://shop.electro-vip.com/decoration/');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('decoration-fullpage.png'); 
});

test('TC_007: Verify Maison connectée Header menu', async ({ page }) => {
  await page.goto('https://shop.electro-vip.com/');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.getByRole('link', { name: 'Maison connectée' }).click();
  await page.waitForURL('https://shop.electro-vip.com/maison-connectee/');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('maisonconnectee-fullpage.png'); 
});

test('TC_008: Verify Sabonner Header menu', async ({ page }) => {
  await page.goto('https://shop.electro-vip.com/');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.getByRole('link', { name: 'S’abonner' }).click();
  await page.waitForURL('https://electro-vip.com/fr/su/s-abonner.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('sabonner-fullpage.png'); 
});

test('TC_009: Verify Connexion Header menu', async ({ page }) => {
  await page.goto('https://shop.electro-vip.com/');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.getByRole('link', { name: 'Connexion' }).click();
  await page.waitForURL('https://electro-vip.com/fr/li/login.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('connexion-fullpage.png'); 
});

test('TC_010: Verify Forgot Password page', async ({ page }) => {
  await page.goto('https://shop.electro-vip.com/');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.getByRole('link', { name: 'Connexion' }).click();
  await page.waitForURL('https://electro-vip.com/fr/li/login.html');
  await page.getByRole('link', { name: 'Mot de passe oublié ?' }).click();
  await page.goto('https://electro-vip.com/fr/li/login.html?recover');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('forgot-password-fullpage.png'); 
});

// SideBar 
test('TC_011: Verify Produits SideBar page', async ({ page }) => {
  await page.goto('https://shop.electro-vip.com/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.locator('.menu-toggle').click();
  await page.getByRole('link', { name: 'Produits', exact: true }).click();
  await page.waitForURL('https://shop.electro-vip.com/product/');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('produits-fullpage.png');
});

test('TC_012: Verify Livraison SideBar page', async ({ page }) => {
  await page.goto('https://shop.electro-vip.com/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.locator('.menu-toggle').click();
  await page.getByRole('link', { name: 'Livraison', exact: true }).click();
  await page.waitForURL('https://shop.electro-vip.com/shipping-delivery/');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('livraison-fullpage.png');
});

test('TC_013: Verify Retour SideBar page', async ({ page }) => {
  await page.goto('https://shop.electro-vip.com/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.locator('.menu-toggle').click();
  await page.getByRole('link', { name: 'Retour', exact: true }).click();
  await page.waitForURL('https://shop.electro-vip.com/refund-policy/');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('retour-fullpage.png');
});

test('TC_014: Verify A propos SideBar page', async ({ page }) => {
  await page.goto('https://shop.electro-vip.com/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.locator('.menu-toggle').click();
  await page.getByRole('link', { name: 'A propos', exact: true }).click();
  await page.waitForURL('https://shop.electro-vip.com/about-us/');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('apropos-fullpage.png');
});

test('TC_015: Verify Suivi SideBar page', async ({ page }) => {
  await page.goto('https://shop.electro-vip.com/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.locator('.menu-toggle').click();
  await page.getByRole('link', { name: 'Suivi', exact: true }).click();
  await page.waitForURL('https://shop.electro-vip.com/track-your-order/');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('suivi-fullpage.png');
});

test('TC_016: Verify Contact SideBar page', async ({ page }) => {
  await page.goto('https://shop.electro-vip.com/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.locator('.menu-toggle').click();
  await page.getByRole('link', { name: 'Contact', exact: true }).click();
  await page.waitForURL('https://www.electro-vip.com/fr/co/contact.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('contact-fullpage.png');
});

test('TC_017: Verify S’abonner SideBar page', async ({ page }) => {
  await page.goto('https://shop.electro-vip.com/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.locator('.menu-toggle').click();
  await page.getByRole('link', { name: 'S’abonner', exact: true }).click();
  await page.waitForURL('https://electro-vip.com/fr/su/s-abonner.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('sabonner-sidebar-fullpage.png');
});

test('TC_018: Verify Mon compte SideBar page', async ({ page }) => {
  await page.goto('https://shop.electro-vip.com/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.locator('.menu-toggle').click();
  await page.getByRole('link', { name: 'Mon compte', exact: true }).click();
  await page.waitForURL('https://electro-vip.com/fr/my/espace-membre.php');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('moncompte-fullpage.png');
});

// subscribe page >> sidebar
test('TC_019: Verify CGV SideBar page', async ({ page }) => {
  await page.goto('https://shop.electro-vip.com/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.locator('.menu-toggle').click();
  await page.getByRole('link', { name: 'Mon compte', exact: true }).click();
  await page.waitForURL('https://electro-vip.com/fr/my/espace-membre.php');
  await page.locator('.menu-toggle').click();
  await page.locator('#menu-item-1364').getByRole('link', { name: 'CGV' }).click();
  await page.waitForURL('https://electro-vip.com/fr/ts/cgv.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('cgv-fullpage.png');
});

test('TC_020: Verify Mentions Legales SideBar page', async ({ page }) => {
  await page.goto('https://shop.electro-vip.com/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('.menu-toggle').click();
  await page.getByRole('link', { name: 'Mon compte', exact: true }).click();
  await page.waitForURL('https://electro-vip.com/fr/my/espace-membre.php');
  await page.locator('.menu-toggle').click();
  await page.locator('#menu-item-1365').getByRole('link', { name: 'Mentions légales' }).click();
  await page.waitForURL('https://electro-vip.com/fr/lm/mention-legales.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('mention-legales-fullpage.png');
});

test('TC_021: Verify Expedition Livraison SideBar page', async ({ page }) => {
  await page.goto('https://shop.electro-vip.com/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('.menu-toggle').click();
  await page.getByRole('link', { name: 'Mon compte', exact: true }).click();
  await page.waitForURL('https://electro-vip.com/fr/my/espace-membre.php');
  await page.locator('.menu-toggle').click();
  await page.locator('#menu-item-2222').getByRole('link', { name: 'Expédition & Livraison' }).click();
  await page.waitForURL('https://electro-vip.com/fr/sd/expedition-et-livraison.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('expedition-livraison-fullpage.png');
});

test('TC_022: Verify Politique De Remboursementet SideBar page', async ({ page }) => {
  await page.goto('https://shop.electro-vip.com/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('.menu-toggle').click();
  await page.getByRole('link', { name: 'Mon compte', exact: true }).click();
  await page.waitForURL('https://electro-vip.com/fr/my/espace-membre.php');
  await page.locator('.menu-toggle').click();
  await page.locator('#menu-item-1366').getByRole('link', { name: 'Politique de remboursement et' }).click();
  await page.waitForURL('https://electro-vip.com/fr/rp/remboursement-et-retour.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('politiquederemboursementet-fullpage.png');
});

test('TC_023: Verify Politique De Confidentialité SideBar page', async ({ page }) => {
  await page.goto('https://shop.electro-vip.com/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('.menu-toggle').click();
  await page.getByRole('link', { name: 'Mon compte', exact: true }).click();
  await page.waitForURL('https://electro-vip.com/fr/my/espace-membre.php');
  await page.locator('.menu-toggle').click();
  await page.locator('#menu-item-1367').getByRole('link', { name: 'Politique de Confidentialité' }).click();
  await page.waitForURL('https://electro-vip.com/fr/pp/politique-de-protection-des-donnees-personnelles.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('politiquedeconfidentialite-fullpage.png');
});

test('TC_024: Verify FAQ SideBar page', async ({ page }) => {
  await page.goto('https://shop.electro-vip.com/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('.menu-toggle').click();
  await page.getByRole('link', { name: 'Mon compte', exact: true }).click();
  await page.waitForURL('https://electro-vip.com/fr/my/espace-membre.php');
  await page.locator('.menu-toggle').click();
  await page.locator('#menu-item-1368').getByRole('link', { name: 'FAQ' }).click();
  await page.waitForURL('https://electro-vip.com/fr/fq/foire-aux-questions.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('faq-fullpage.png');
});

test('TC_025: Verify FAQ > Description SideBar page', async ({ page }) => {
  await page.goto('https://shop.electro-vip.com/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.locator('.menu-toggle').click();
  await page.getByRole('link', { name: 'Mon compte', exact: true }).click(); 
  await page.waitForURL('https://electro-vip.com/fr/my/espace-membre.php');
  await page.locator('.menu-toggle').click();
  await page.locator('#menu-item-1368').getByRole('link', { name: 'FAQ' }).click();
  await page.waitForURL('https://electro-vip.com/fr/fq/foire-aux-questions.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('a').filter({ hasText: 'Comment fonctionne Electro-' }).click();
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

test('TC_026: Verify Contact SideBar page', async ({ page }) => {
  await page.goto('https://shop.electro-vip.com/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('.menu-toggle').click();
  await page.getByRole('link', { name: 'Mon compte', exact: true }).click();
  await page.waitForURL('https://electro-vip.com/fr/my/espace-membre.php');
  await page.locator('.menu-toggle').click();
  await page.locator('#menu-item-1369').getByRole('link', { name: 'Contact' }).click();
  await page.waitForURL('https://electro-vip.com/fr/co/contact.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('contact-fullpage.png');
});

test('TC_027: Verify NotreOffre SideBar page', async ({ page }) => {
  await page.goto('https://shop.electro-vip.com/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('.menu-toggle').click();
  await page.getByRole('link', { name: 'Mon compte', exact: true }).click();
  await page.waitForURL('https://electro-vip.com/fr/my/espace-membre.php');
  await page.locator('.menu-toggle').click();
  await page.locator('#menu-item-1370').getByRole('link', { name: 'Notre offre' }).click();
  await page.waitForURL('https://electro-vip.com/fr/hw/le-concept.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('notreoffre-fullpage.png');
});

test('TC_028: Verify Suivre Votre Commande SideBar page', async ({ page }) => {
  await page.goto('https://shop.electro-vip.com/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('.menu-toggle').click();
  await page.getByRole('link', { name: 'Mon compte', exact: true }).click();
  await page.waitForURL('https://electro-vip.com/fr/my/espace-membre.php');
  await page.locator('.menu-toggle').click();
  await page.locator('#menu-item-2223').getByRole('link', { name: 'Suivre votre commande' }).click();
  await page.waitForURL('https://electro-vip.com/fr/tr/suivre-votre-commande.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('suivrevotrecommande-fullpage.png');
});

test('TC_029: Verify Moyens De Paiement SideBar page', async ({ page }) => {
  await page.goto('https://shop.electro-vip.com/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('.menu-toggle').click();
  await page.getByRole('link', { name: 'Mon compte', exact: true }).click();
  await page.waitForURL('https://electro-vip.com/fr/my/espace-membre.php');
  await page.locator('.menu-toggle').click();
  await page.locator('#menu-item-2224').getByRole('link', { name: 'Moyens de paiement' }).click();
  await page.waitForURL('https://electro-vip.com/fr/pm/moyens-de-paiement.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('moyensdepaiement-fullpage.png');
});

//footer

test('TC_030: Verify CGV Footer page', async ({ page }) => {
  await page.goto('https://shop.electro-vip.com/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.locator('#menu-item-31').getByRole('link', { name: 'Cgv' }).click(); 
  await page.waitForURL('https://electro-vip.com/fr/ts/cgv.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('cgv-fullpage.png');
});

test('TC_031: Verify Mentions Legales Footer page', async ({ page }) => {
  await page.goto('https://shop.electro-vip.com/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('#menu-item-27').getByRole('link', { name: 'Mentions légales' }).click();
  await page.waitForURL('https://electro-vip.com/fr/lm/mention-legales.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('mention-legales-fullpage.png');
});

test('TC_032: Verify NewsLetter Footer page', async ({ page }) => {
  await page.goto('https://shop.electro-vip.com/');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.locator('#menu-item-28').getByRole('link', { name: 'Newsletter' }).click();
  await page.waitForURL('https://electro-vip.com/fr/nl/newsletter.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('newsletter-fullpage.png'); 
});

test('TC_033: Verify Desabonnement Footer page', async ({ page }) => {
  await page.goto('https://shop.electro-vip.com/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.getByRole('link', { name: 'Désabonnement' }).click();
  await page.waitForURL('https://electro-vip.com/fr/us/desabonnement.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('desabonnement-fullpage.png');
});

test('TC_034: Verify FAQ Footer page', async ({ page }) => {
  await page.goto('https://shop.electro-vip.com/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('#menu-item-1382').getByRole('link', { name: 'FAQ' }).click();
  await page.waitForURL('https://electro-vip.com/fr/fq/foire-aux-questions.html');
  await expect(page.getByText('FAQ : Foire aux questions')).toBeVisible();
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('faq-fullpage.png');
});

test('TC_035: Verify FAQ > Description Footer page', async ({ page }) => {
  await page.goto('https://shop.electro-vip.com/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('#menu-item-1382').getByRole('link', { name: 'FAQ' }).click();
  await page.waitForURL('https://electro-vip.com/fr/fq/foire-aux-questions.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('a').filter({ hasText: 'Comment fonctionne Electro-' }).click();
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

test('TC_036: Verify Expedition Livraison Footer page', async ({ page }) => {
  await page.goto('https://shop.electro-vip.com/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('#menu-item-2226').getByRole('link', { name: 'Expédition & Livraison' }).click();
  await page.waitForURL('https://electro-vip.com/fr/sd/expedition-et-livraison.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('expedition-livraison-fullpage.png');
});

test('TC_037: Verify Suivre Votre Commande Footer page', async ({ page }) => {
  await page.goto('https://shop.electro-vip.com/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('#menu-item-2227').getByRole('link', { name: 'Suivre votre commande' }).click();
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('suivrevotrecommande-fullpage.png');
});

test('TC_038: Verify Moyens De Paiement Footer page', async ({ page }) => {
  await page.goto('https://shop.electro-vip.com/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('#menu-item-2225').getByRole('link', { name: 'Moyens de paiement' }).click();
  await page.waitForURL('https://electro-vip.com/fr/pm/moyens-de-paiement.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('moyensdepaiement-fullpage.png');
});

test('TC_039: Verify Politique De Remboursementet Footer page', async ({ page }) => {
  await page.goto('https://shop.electro-vip.com/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('#menu-item-1383').getByRole('link', { name: 'Politique de remboursement et' }).click();
  await page.waitForURL('https://electro-vip.com/fr/rp/remboursement-et-retour.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('politiquederemboursementet-fullpage.png');
});

test('TC_040: Verify Politique De Confidentialite Footer page', async ({ page }) => {
  await page.goto('https://shop.electro-vip.com/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('#menu-item-1384').getByRole('link', { name: 'Politique de Confidentialité' }).click();
  await page.waitForURL('https://electro-vip.com/fr/pp/politique-de-protection-des-donnees-personnelles.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('politiquedeconfidentialite-fullpage.png');
});

test('TC_041: Verify Product Description page', async ({ page }) => {
  await page.goto('https://shop.electro-vip.com/');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.getByRole('link', { name: 'PRIX VIP −50% Diffuseur d’' }).click();
  await page.waitForURL('https://shop.electro-vip.com/wood-aroma-essential-oil-diffuser/');
  const common = new CommonMethods(page);
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true, mask: [
      page.locator('div[class="aship-box-products list-product related-products"]')
    ]})).toMatchSnapshot('product-description-fullpage.png'); 
});

