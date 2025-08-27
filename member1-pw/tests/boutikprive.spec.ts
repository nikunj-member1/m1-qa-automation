import { test, expect } from '@playwright/test';
import { CommonMethods } from '../utils/CommonMethods';

test('TC_001: Verify Home page', async ({ page }) => {
  await page.goto('https://shop.boutik-prive.fr/');
  await page.waitForURL('https://shop.boutik-prive.fr/');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await expect(page.getByRole('link', { name: '76 40 25 18' }).first()).toBeVisible();
  await page.locator('#newin').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await page.locator('#mostliked').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await page.locator('.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await page.locator('.header').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInBoutikPrive(); 
  expect(await page.screenshot({fullPage: true , mask: [
    page.locator('div.header_cont'),
    ]})).toMatchSnapshot('home-fullpage.png'); 
});

test('TC_002: Verify High-Tech Header menu', async ({ page }) => {
  await page.goto('https://shop.boutik-prive.fr/');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.getByRole('link', { name: 'High-Tech' }).click();
  await page.waitForURL('https://shop.boutik-prive.fr/high-tech/');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.click('body');   // clicks outside, removing focus
  await page.locator('.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await page.locator('.header').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInBoutikPrive();
  expect(await page.screenshot({fullPage: true , mask: [
    page.locator('div.header_cont'),
    ]})).toMatchSnapshot('hightech-fullpage.png'); 
});

test('TC_003: Verify High-Tech > Audio & Video Header menu', async ({ page }) => {
  await page.goto('https://shop.boutik-prive.fr/');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.getByRole('link', { name: 'High-Tech' }).hover();
  await page.getByRole('link', { name: 'Audio & Vidéo' }).click();
  await page.waitForURL('https://shop.boutik-prive.fr/audio-video/');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.click('body'); 
  await page.locator('.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await page.locator('.header').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInBoutikPrive();
  expect(await page.screenshot({fullPage: true , mask: [
    page.locator('div.header_cont'),
    ]})).toMatchSnapshot('high-tech-audio-video-fullpage.png'); 
});

test('TC_004: Verify Electromenager Header menu', async ({ page }) => {
  await page.goto('https://shop.boutik-prive.fr/');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.getByRole('link', { name: 'Électroménager' }).click();
  await page.waitForURL('https://shop.boutik-prive.fr/electro/');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.click('body');
  await page.locator('.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await page.locator('.header').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInBoutikPrive();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('electromenager-fullpage.png'); 
});

test('TC_005: Verify Beauté Header menu', async ({ page }) => {
  await page.goto('https://shop.boutik-prive.fr/');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.getByRole('link', { name: 'Beauté' }).click();
  await page.waitForURL('https://shop.boutik-prive.fr/beaute/');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.click('body');
  await page.locator('.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await page.locator('.header').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInBoutikPrive();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('beaute-fullpage.png'); 
});

test('TC_006: Verify Moins de 15€ Header menu', async ({ page }) => {
  await page.goto('https://shop.boutik-prive.fr/');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.getByRole('link', { name: 'Moins de 15€' }).click();
  await page.waitForURL('https://shop.boutik-prive.fr/moins-de-15e/');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.click('body');
  await page.locator('.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await page.locator('.header').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInBoutikPrive();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('moinsde15-fullpage.png'); 
});

test('TC_007: Verify Bricolage menu', async ({ page }) => {
  await page.goto('https://shop.boutik-prive.fr/');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.getByRole('link', { name: 'Bricolage' }).click();
  await page.waitForURL('https://shop.boutik-prive.fr/bricolage/');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.click('body');
  await page.locator('.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await page.locator('.header').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInBoutikPrive();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('bricolage-fullpage.png'); 
});

test('TC_008: Verify Bricolage > Decoration menu', async ({ page }) => {
  await page.goto('https://shop.boutik-prive.fr/');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.getByRole('link', { name: 'Bricolage' }).hover();
  await page.getByRole('link', { name: 'Décoration' }).click();
  await page.waitForURL('https://shop.boutik-prive.fr/decoration/');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.click('body');
  await page.locator('.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await page.locator('.header').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInBoutikPrive();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('bricolage-decoration-fullpage.png'); 
});

test('TC_009: Verify Animalerie menu', async ({ page }) => {
  await page.goto('https://shop.boutik-prive.fr/');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.getByRole('link', { name: 'Animalerie' }).click();
  await page.waitForURL('https://shop.boutik-prive.fr/animalerie/');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.click('body'); 
  await page.locator('.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await page.locator('.header').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInBoutikPrive();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('animalerie-fullpage.png'); 
});

test('TC_010: Verify Sabonner menu', async ({ page }) => {
  await page.goto('https://shop.boutik-prive.fr/');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.getByRole('link', { name: ' S\'abonner' }).click();
  await page.waitForURL('https://boutik-prive.fr/fr/su/s-abonner.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await common.hideElementsInBoutikPrive();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('sabonner-fullpage.png'); 
});

test('TC_011: Verify Connexion menu', async ({ page }) => {
  await page.goto('https://shop.boutik-prive.fr/');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.getByRole('link', { name: ' Connexion' }).click();
  await page.waitForURL('https://boutik-prive.fr/fr/li/login.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await common.hideElementsInBoutikPrive();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('connexion-fullpage.png'); 
});

test('TC_012: Verify Forgot password menu', async ({ page }) => {
  await page.goto('https://shop.boutik-prive.fr/');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.getByRole('link', { name: ' Connexion' }).click();
  await page.waitForURL('https://boutik-prive.fr/fr/li/login.html');
  await page.getByRole('link', { name: 'Mot de passe oublié ?' }).click();
  await page.goto('https://boutik-prive.fr/fr/li/login.html?recover');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await common.hideElementsInBoutikPrive();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('forgot-password-fullpage.png'); 
});

test('TC_013: Verify Electromenager on Home page', async ({ page }) => {
  await page.goto('https://shop.boutik-prive.fr/');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.locator('.item.swiper-slide.swiper-slide-active > a').click();
  await page.waitForURL('https://shop.boutik-prive.fr/electro/');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await page.locator('.header').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInBoutikPrive();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('electromenager-fullpage.png'); 
});

test('TC_014: Verify Audio & Video on Home page', async ({ page }) => {
  await page.goto('https://shop.boutik-prive.fr/');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.locator('.item.swiper-slide.swiper-slide-next > a').click();
  await page.waitForURL('https://shop.boutik-prive.fr/audio-video/');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await page.locator('.header').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInBoutikPrive();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('high-tech-audio-video-fullpage.png'); 
});

test('TC_015: Verify High-Tech on Home page', async ({ page }) => {
  await page.goto('https://shop.boutik-prive.fr/');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.locator('div:nth-child(6) > a').click();
  await page.waitForURL('https://shop.boutik-prive.fr/high-tech/');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await page.locator('.header').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInBoutikPrive();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('hightech-fullpage.png'); 
});

test('TC_016: Verify Product cart page', async ({ page }) => {
  await page.goto('https://shop.boutik-prive.fr/');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.getByRole('link', { name: '' }).click();
  await page.getByRole('link', { name: 'Commander' }).click();
  await page.waitForURL('https://shop.boutik-prive.fr/cart');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await common.hideElementsInBoutikPrive();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('cart-fullpage.png'); 
});

//footer

test('TC_017: Verify Formulaire de Contact Footer page', async ({ page }) => {
  await page.goto('https://shop.boutik-prive.fr/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.getByRole('link', { name: 'Formulaire de Contact', exact: true }).click();
  await page.waitForURL('https://boutik-prive.fr/fr/co/contact.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await common.hideElementsInBoutikPrive();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('formulaire-de-contact-fullpage.png');
});

test('TC_018: Verify CGV Footer page', async ({ page }) => {
  await page.goto('https://shop.boutik-prive.fr/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.getByRole('link', { name: 'Cgv', exact: true }).click();
  await page.waitForURL('https://boutik-prive.fr/fr/ts/cgv.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await common.hideElementsInBoutikPrive();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('cgv-fullpage.png');
});

test('TC_019: Verify Mentions Legales Footer page', async ({ page }) => {
  await page.goto('https://shop.boutik-prive.fr/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('#menu-item-27').getByRole('link', { name: 'Mentions légales' }).click();
  await page.waitForURL('https://boutik-prive.fr/fr/lm/mention-legales.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await common.hideElementsInBoutikPrive();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('mention-legales-fullpage.png');
});

test('TC_020: Verify NewsLetter Footer page', async ({ page }) => {
  await page.goto('https://shop.boutik-prive.fr/');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.getByRole('link', { name: 'Newsletter' }).click();
  await page.waitForURL('https://boutik-prive.fr/fr/nl/newsletter.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await common.hideElementsInBoutikPrive();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('newsletter-fullpage.png'); 
});

test('TC_021: Verify Desabonnement Footer page', async ({ page }) => {
  await page.goto('https://shop.boutik-prive.fr/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.getByRole('link', { name: 'Désabonnement' }).click();
  await page.waitForURL('https://boutik-prive.fr/fr/us/desabonnement.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await common.hideElementsInBoutikPrive();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('desabonnement-fullpage.png');
});

test('TC_022: Verify Foire aux questions Footer page', async ({ page }) => {
  await page.goto('https://shop.boutik-prive.fr/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('#menu-item-32').getByRole('link', { name: 'Foire aux questions' }).click();
  await page.waitForURL('https://boutik-prive.fr/fr/fq/foire-aux-questions.html');
  await expect(page.getByText('FAQ : Foire aux questions')).toBeVisible();
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await common.hideElementsInBoutikPrive();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('foire-aux-questions-fullpage.png');
});

test('TC_023: Verify FAQ > Description Footer page', async ({ page }) => {
  await page.goto('https://shop.boutik-prive.fr/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('#menu-item-32').getByRole('link', { name: 'Foire aux questions' }).click();
  await page.waitForURL('https://boutik-prive.fr/fr/fq/foire-aux-questions.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('a').filter({ hasText: 'Comment fonctionne Boutik' }).click();
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
  await common.waitForPageLoad();
  await common.hideElementsInBoutikPrive();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('faq-description-fullpage.png');
});

test('TC_024: Verify Moyens De Paiement Footer page', async ({ page }) => {
  await page.goto('https://shop.boutik-prive.fr/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('#menu-item-33').getByRole('link', { name: 'Moyens de paiement' }).click();
  await page.waitForURL('https://boutik-prive.fr/fr/pm/moyens-de-paiement.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await common.hideElementsInBoutikPrive();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('moyensdepaiement-fullpage.png');
});

test('TC_025: Verify Expedition & Livraison Footer page', async ({ page }) => {
  await page.goto('https://shop.boutik-prive.fr/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('#menu-item-34').getByRole('link', { name: 'Expédition & Livraison' }).click();
  await page.waitForURL('https://boutik-prive.fr/fr/sd/expedition-et-livraison.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await common.hideElementsInBoutikPrive();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('expedition-livraison-fullpage.png');
});

test('TC_026: Verify Politique de remboursement et de retour Footer page', async ({ page }) => {
  await page.goto('https://shop.boutik-prive.fr/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('#menu-item-35').getByRole('link', { name: 'Politique de remboursement et de retour' }).click();
  await page.waitForURL('https://boutik-prive.fr/fr/rp/remboursement-et-retour.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await common.hideElementsInBoutikPrive();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('politique-de-remboursement-et-de-retour-fullpage.png');
});

test('TC_027: Verify Suivre Votre Commande Footer page', async ({ page }) => {
  await page.goto('https://shop.boutik-prive.fr/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('#menu-item-36').getByRole('link', { name: 'Suivre Votre Commande' }).click();
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await common.hideElementsInBoutikPrive();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('suivrevotrecommande-fullpage.png');
});

test('TC_028: Verify Politique De Confidentialite Footer page', async ({ page }) => {
  await page.goto('https://shop.boutik-prive.fr/'); 
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible(); 
  await page.locator('#menu-item-915').getByRole('link', { name: 'Politique de Confidentialité' }).click();
  await page.waitForURL('https://boutik-prive.fr/fr/pp/politique-de-protection-des-donnees-personnelles.html');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await common.hideElementsInBoutikPrive();
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot('politiquedeconfidentialite-fullpage.png');
});

test('TC_029: Verify Product Description page', async ({ page }) => {
  await page.goto('https://shop.boutik-prive.fr/');
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.getByRole('link', { name: 'Blanchiment de la peau 3 en 1' }).click();
  await page.waitForURL('https://shop.boutik-prive.fr/blanchiment-de-la-peau-3-en-1-soins-pour-la-peau-co2-oxygene-therapie-faciale-ultrasons-rf-traitement-de-lacne/');
  const common = new CommonMethods(page);
  await common.waitForPageLoad();
  await page.locator('.footer').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await page.locator('.header').evaluate(el => el.scrollIntoView({ behavior: 'smooth' }));
  await common.waitForPageLoad();
  await common.hideElementsInBoutikPrive();
  expect(await page.screenshot({fullPage: true, mask: [
    page.locator('div.header_cont'),
    page.locator('div.recents_slider_cont'),
    page.locator('div.recs_slider_cont')
    ]})).toMatchSnapshot('product-description-fullpage.png'); 
});

