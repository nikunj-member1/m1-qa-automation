import { test, expect } from '@playwright/test';
import { CommonMethods } from '../utils/CommonMethods';

test('TC_001: Verify Home page', async ({ page }) => {
  await page.goto('https://shop.tech-vip.com');
  await page.waitForURL('https://shop.tech-vip.com');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('#best-deals').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await page.locator('#new-arrivals').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();2
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('home-fullpage.png'); 
});

test('TC_002: Verify HighTech Header menu', async ({ page }) => {
  await page.goto('https://shop.tech-vip.com');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.getByRole('link', { name: 'High Tech' }).click();
  await page.waitForURL('https://shop.tech-vip.com/high-tech/');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('hightech-fullpage.png'); 
});

test('TC_003: Verify Beaute Header menu', async ({ page }) => {
  await page.goto('https://shop.tech-vip.com');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.getByRole('link', { name: 'Beauté' }).click();
  await page.waitForURL('https://shop.tech-vip.com/beaute/');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('beaute-fullpage.png'); 
});

test('TC_004: Verify Maison Header menu', async ({ page }) => {
  await page.goto('https://shop.tech-vip.com');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.getByRole('link', { name: 'Maison' }).click();
  await page.waitForURL('https://shop.tech-vip.com/maison/');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('maison-fullpage.png'); 
});

test('TC_005: Verify Maison > Bricolage Header menu', async ({ page }) => {
  await page.goto('https://shop.tech-vip.com');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.getByRole('link', { name: 'Maison' }).hover();
  await page.getByRole('link', { name: 'Bricolage' }).click();
  await page.waitForURL('https://shop.tech-vip.com/bricolage/');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('maison-bricolage-fullpage.png'); 
});

test('TC_006: Verify Maison > Decoration Header menu', async ({ page }) => {
  await page.goto('https://shop.tech-vip.com');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.getByRole('link', { name: 'Maison' }).hover();
  await page.getByRole('link', { name: 'Décoration' }).click();
  await page.waitForURL('https://shop.tech-vip.com/decoration/');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('maison-decoration-fullpage.png'); 
});

test('TC_007: Verify Maison > Nettoyage Header menu', async ({ page }) => {
  await page.goto('https://shop.tech-vip.com');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.getByRole('link', { name: 'Maison' }).hover();
  await page.getByRole('link', { name: 'Nettoyage' }).click();
  await page.waitForURL('https://shop.tech-vip.com/nettoyage/');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('maison-nettoyage-fullpage.png'); 
});

test('TC_008: Verify Electromenager Header menu', async ({ page }) => {
  await page.goto('https://shop.tech-vip.com');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.getByRole('link', { name: 'Électroménager' }).click();
  await page.waitForURL('https://shop.tech-vip.com/electro/');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('electromenager-fullpage.png'); 
});

test('TC_009: Verify Animalerie Header menu', async ({ page }) => {
  await page.goto('https://shop.tech-vip.com');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.getByRole('link', { name: 'Animalerie' }).click();
  await page.waitForURL('https://shop.tech-vip.com/animalerie/');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('animalerie-fullpage.png'); 
});

test('TC_010: Verify Sport Header menu', async ({ page }) => {
  await page.goto('https://shop.tech-vip.com');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.getByRole('link', { name: 'Sport' }).click();
  await page.waitForURL('https://shop.tech-vip.com/sport/');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({ fullPage: true })).toMatchSnapshot('sport-fullpage.png');
});

test('TC_011: Verify Presse Header menu', async ({ page }) => {
  await page.goto('https://shop.tech-vip.com');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.locator('#menu-item-79157').getByRole('link', { name: 'Presse' }).click();
  await page.waitForURL('https://shop.tech-vip.com/presse/');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('presse-fullpage.png'); 
});

test('TC_012: Verify Presse > On parle de nous Header menu', async ({ page }) => {
  await page.goto('https://shop.tech-vip.com');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.locator('#menu-item-79157').getByRole('link', { name: 'Presse' }).hover();
  await page.getByRole('link', { name: 'On parle de nous' }).click();
  await page.waitForURL('https://tech-vip.com/fr/pr/presse.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('presse-onparledenous-fullpage.png'); 
});

test('TC_013: Verify Sabonner Header menu', async ({ page }) => {
  await page.goto('https://shop.tech-vip.com');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.getByRole('link', { name: 'S’abonner' }).click();
  await page.waitForURL('https://tech-vip.com/fr/su/s-abonner.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('sabonner-fullpage.png'); 
});

test('TC_014: Verify Connexion Header menu', async ({ page }) => {
  await page.goto('https://shop.tech-vip.com');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.getByRole('link', { name: 'Connexion' }).click();
  await page.waitForURL('https://tech-vip.com/fr/li/login.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('connexion-fullpage.png'); 
});

test('TC_015: Verify Forgot Password page', async ({ page }) => {
  await page.goto('https://shop.tech-vip.com');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.getByRole('link', { name: 'Connexion' }).click();
  await page.waitForURL('https://tech-vip.com/fr/li/login.html');
  await page.getByRole('link', { name: 'Mot de passe oublié ?' }).click();
  await page.goto('https://tech-vip.com/fr/li/login.html?recover');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('forgot-password-fullpage.png'); 
});

// SideBar 
test('TC_016: Verify CGV SideBar page', async ({ page }) => {
  await page.goto('https://shop.tech-vip.com'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.locator('.menu-toggle').click();
  await page.getByRole('link', { name: 'CGV', exact: true }).click();
  await page.waitForURL('https://tech-vip.com/fr/ts/cgv.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('cgv-fullpage.png');
});

test('TC_017: Verify Mentions Legales SideBar page', async ({ page }) => {
  await page.goto('https://shop.tech-vip.com'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('.menu-toggle').click();
  await page.locator('#menu-item-1819').getByRole('link', { name: 'Mentions légales' }).click();
  await page.waitForURL('https://tech-vip.com/fr/lm/mention-legales.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('mention-legales-fullpage.png');
});

test('TC_018: Verify Expedition Livraison SideBar page', async ({ page }) => {
  await page.goto('https://shop.tech-vip.com'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('.menu-toggle').click();
  await page.getByRole('link', { name: 'Expédition & Livraision' }).click();
  await page.waitForURL('https://tech-vip.com/fr/sd/expedition-et-livraison.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('expedition-livraison-fullpage.png');
});

test('TC_019: Verify Politique De Remboursementet SideBar page', async ({ page }) => {
  await page.goto('https://shop.tech-vip.com'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('.menu-toggle').click();
  await page.locator('#menu-item-1821').getByRole('link', { name: 'Politique de remboursement et' }).click();
  await page.waitForURL('https://tech-vip.com/fr/rp/remboursement-et-retour.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('politiquederemboursementet-fullpage.png');
});

test('TC_020: Verify Politique De Confidentialité SideBar page', async ({ page }) => {
  await page.goto('https://shop.tech-vip.com'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('.menu-toggle').click();
  await page.locator('#menu-item-1822').getByRole('link', { name: 'Politique de Confidentialité' }).click();
  await page.waitForURL('https://tech-vip.com/fr/pp/politique-de-protection-des-donnees-personnelles.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('politiquedeconfidentialite-fullpage.png');
});

test('TC_021: Verify FAQ SideBar page', async ({ page }) => {
  await page.goto('https://shop.tech-vip.com'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('.menu-toggle').click();
  await page.locator('#menu-item-1823').getByRole('link', { name: 'FAQ' }).click();
  await page.waitForURL('https://tech-vip.com/fr/fq/foire-aux-questions.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('faq-fullpage.png');
});

test('TC_022: Verify FAQ > Description SideBar page', async ({ page }) => {
  await page.goto('https://shop.tech-vip.com'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('.menu-toggle').click();
  await page.locator('#menu-item-1823').getByRole('link', { name: 'FAQ' }).click();
  await page.waitForURL('https://tech-vip.com/fr/fq/foire-aux-questions.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('a').filter({ hasText: 'Comment fonctionne Tech-Vip ?' }).click();
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

test('TC_023: Verify Contact SideBar page', async ({ page }) => {
  await page.goto('https://shop.tech-vip.com'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('.menu-toggle').click();
  await page.getByRole('link', { name: 'Contact', exact: true }).click();
  await page.waitForURL('https://tech-vip.com/fr/co/contact.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('contact-fullpage.png');
});

test('TC_024: Verify NotreOffre SideBar page', async ({ page }) => {
  await page.goto('https://shop.tech-vip.com'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('.menu-toggle').click();
  await page.getByRole('link', { name: 'Notre offre' }).click();
  await page.waitForURL('https://tech-vip.com/fr/hw/notre-offre.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('notreoffre-fullpage.png');
});

test('TC_025: Verify Suivre Votre Commande SideBar page', async ({ page }) => {
  await page.goto('https://shop.tech-vip.com'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('.menu-toggle').click();
  await page.locator('#menu-item-1826').getByRole('link', { name: 'Suivre votre commande' }).click();
  await page.waitForURL('https://tech-vip.com/fr/tr/suivre-votre-commande.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('suivrevotrecommande-fullpage.png');
});

test('TC_026: Verify Moyens De Paiement SideBar page', async ({ page }) => {
  await page.goto('https://shop.tech-vip.com'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('.menu-toggle').click();
  await page.getByRole('link', { name: 'Moyens de paiment' }).click();
  await page.waitForURL('https://tech-vip.com/fr/pm/moyens-de-paiement.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('moyensdepaiement-fullpage.png');
});

test('TC_027: Verify Sabonner SideBar page', async ({ page }) => {
  await page.goto('https://shop.tech-vip.com'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('.menu-toggle').click();
  await page.getByRole('link', { name: 'S’abonner', exact: true }).click();
  await page.waitForURL('https://tech-vip.com/fr/su/s-abonner.html');
  await page.locator('//footer[@class="footer"]/div[1][@class="container"]').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('sabonner-sidebar-fullpage.png');
});

test('TC_028: Verify Mon Compte SideBar page', async ({ page }) => {
  await page.goto('https://shop.tech-vip.com'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('.menu-toggle').click();
  await page.getByRole('link', { name: 'Mon compte' }).click();
  await page.waitForURL('https://tech-vip.com/fr/my/espace-membre.php');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('moncompte-fullpage.png');
});

//footer

test('TC_029: Verify CGV Footer page', async ({ page }) => {
  await page.goto('https://shop.tech-vip.com'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.getByRole('link', { name: 'Cgv', exact: true }).click();
  await page.waitForURL('https://tech-vip.com/fr/ts/cgv.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('cgv-fullpage.png');
});

test('TC_030: Verify Politique De Confidentialite Footer page', async ({ page }) => {
  await page.goto('https://shop.tech-vip.com'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('#menu-item-81629').getByRole('link', { name: 'Politique de Confidentialité' }).click();
  await page.waitForURL('https://tech-vip.com/fr/pp/politique-de-protection-des-donnees-personnelles.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('politiquedeconfidentialite-fullpage.png');
});

test('TC_031: Verify Mentions Legales Footer page', async ({ page }) => {
  await page.goto('https://shop.tech-vip.com'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('#menu-item-27').getByRole('link', { name: 'Mentions légales' }).click();
  await page.waitForURL('https://tech-vip.com/fr/lm/mention-legales.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('mention-legales-fullpage.png');
});

test('TC_032: Verify Politique De Remboursementet Footer page', async ({ page }) => {
  await page.goto('https://shop.tech-vip.com'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('#menu-item-81630').getByRole('link', { name: 'Politique de remboursement et' }).click();
  await page.waitForURL('https://tech-vip.com/fr/rp/remboursement-et-retour.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('politiquederemboursementet-fullpage.png');
});

test('TC_033: Verify FAQ Footer page', async ({ page }) => {
  await page.goto('https://shop.tech-vip.com'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('#menu-item-1828').getByRole('link', { name: 'FAQ' }).click();
  await page.waitForURL('https://tech-vip.com/fr/fq/foire-aux-questions.html');
  await expect(page.getByText('FAQ : Foire aux questions')).toBeVisible();
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('faq-fullpage.png');
});

test('TC_034: Verify FAQ > Description Footer page', async ({ page }) => {
  await page.goto('https://shop.tech-vip.com'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('#menu-item-1828').getByRole('link', { name: 'FAQ' }).click();
  await page.waitForURL('https://tech-vip.com/fr/fq/foire-aux-questions.html');
  await expect(page.getByText('FAQ : Foire aux questions')).toBeVisible();
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('a').filter({ hasText: 'Comment fonctionne Tech-Vip ?' }).click();
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

test('TC_035: Verify Expedition Livraison Footer page', async ({ page }) => {
  await page.goto('https://shop.tech-vip.com'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.getByRole('link', { name: 'Expédition & Livraison' }).click();
  await page.waitForURL('https://tech-vip.com/fr/sd/expedition-et-livraison.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('expedition-livraison-fullpage.png');
});

test('TC_036: Verify Desabonnement Footer page', async ({ page }) => {
  await page.goto('https://shop.tech-vip.com'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.getByRole('link', { name: 'Désabonnement' }).click();
  await page.waitForURL('https://tech-vip.com/fr/us/desabonnement.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('desabonnement-fullpage.png');
});

test('TC_037: Verify Moyens De Paiement Footer page', async ({ page }) => {
  await page.goto('https://shop.tech-vip.com'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.getByRole('link', { name: 'Moyens de paiement' }).click();
  await page.waitForURL('https://tech-vip.com/fr/pm/moyens-de-paiement.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('moyensdepaiement-fullpage.png');
});

test('TC_038: Verify Suivre Votre Commande Footer page', async ({ page }) => {
  await page.goto('https://shop.tech-vip.com'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('#menu-item-1830').getByRole('link', { name: 'Suivre votre commande' }).click();  await page.waitForURL('https://tech-vip.com/fr/tr/suivre-votre-commande.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('suivrevotrecommande-fullpage.png');
});

test('TC_039: Verify Presse Footer page', async ({ page }) => {
  await page.goto('https://shop.tech-vip.com');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.locator('#menu-item-81632').getByRole('link', { name: 'Presse' }).click();
  await page.waitForURL('https://tech-vip.com/fr/pr/presse.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('presse-fullpage.png'); 
});

test('TC_040: Verify NewsLetter Footer page', async ({ page }) => {
  await page.goto('https://shop.tech-vip.com');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.getByRole('link', { name: 'Newsletter' }).click();
  await page.waitForURL('https://tech-vip.com/fr/nl/newsletter.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('newsletter-fullpage.png'); 
});

test('TC_041: Verify Product Description page', async ({ page }) => {
  await page.goto('https://shop.tech-vip.com');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.getByRole('link', { name: 'PRIX VIP −50% Crochets adhé' }).click();
  await page.waitForURL('https://shop.tech-vip.com/guanyao-crochets-adhesifs-multi-usages-support-mural-de-serpillieres-organisateur-pour-balais-et-autres-accessoires-a-manche-crochet-de-cintre-pour-cuisine-salle-de-bains/');
  const common = new CommonMethods(page);
  await page.locator('//footer[@class="footer"]/div[1][@class="container"]').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await page.locator('footer.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInTechVip();
  expect(await page.screenshot({fullPage: true, mask: [
      page.locator('div[class="aship-box-products list-product related-products"]')
    ]})).toMatchSnapshot('product-description-fullpage.png'); 
});

