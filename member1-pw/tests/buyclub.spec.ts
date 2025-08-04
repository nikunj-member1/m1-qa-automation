import { test, expect } from '@playwright/test';
import { FakerUtils } from '../utils/fakerUtils';

const fakerUtils = new FakerUtils();

test('TC_VerifyHomePageContent', async ({ page }) => {
  await page.goto('https://shop.buy-club.net/',{waitUntil: "networkidle"});

  await page.waitForTimeout(10000);

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

test('TC_VerifyHomePageHeaderNavigation', async ({ page }) => {
  await page.goto('https://shop.buy-club.net/',{waitUntil: "domcontentloaded"});

  await page.waitForTimeout(10000);

  const headerTop = await page.locator('//div[@class="header-top"]');
  expect(await headerTop.screenshot()).toMatchSnapshot('headerTop.png');

  const headerDescription = await page.locator('//header[@class="header-desc"]');
  expect(await headerDescription.screenshot()).toMatchSnapshot('headerDescription.png');

  await page.getByRole('link', { name: 'Sport' }).click();
  await page.waitForTimeout(10000);
  expect(await page.screenshot()).toMatchSnapshot('headerSports.png');

  await page.getByRole('link', { name: 'Objets connectés' }).click();
  await page.waitForTimeout(10000);
  expect(await page.screenshot()).toMatchSnapshot('headerObjetsConnectes.png');

  await page.getByRole('link', { name: 'Audio' }).click();
  await page.waitForTimeout(10000);
  expect(await page.screenshot()).toMatchSnapshot('headerAudio.png');

  await page.getByRole('link', { name: 'Cuisine' }).click();
  await page.waitForTimeout(10000);
  expect(await page.screenshot()).toMatchSnapshot('headerCuisine.png');

  await page.getByRole('link', { name: 'Beauté' }).click();
  await page.waitForTimeout(10000);
  expect(await page.screenshot()).toMatchSnapshot('headerBeaute.png');

  await page.getByRole('link', { name: 'Informatique' }).click();
  await page.waitForTimeout(10000);
  expect(await page.screenshot()).toMatchSnapshot('headerInformatique.png');

  await page.locator('#menu-item-6027').getByRole('link', { name: 'Presse' }).click();
   await page.waitForTimeout(10000);
  expect(await page.screenshot()).toMatchSnapshot('headerPresse.png');

  await page.getByRole('link', { name: 'S’abonner' }).click();
  await page.waitForTimeout(10000);
  expect(await page.screenshot()).toMatchSnapshot('headerSabonner.png');
  expect(await headerTop.screenshot()).toMatchSnapshot('headerTop.png');
  expect(await headerDescription.screenshot()).toMatchSnapshot('headerDescription.png');

  await page.getByRole('link', { name: 'Connexion' }).click();
  await page.waitForTimeout(10000);
  expect(await page.screenshot()).toMatchSnapshot('headerConnexion.png');
  expect(await headerTop.screenshot()).toMatchSnapshot('headerTop.png');
  expect(await headerDescription.screenshot()).toMatchSnapshot('headerDescription.png');

  await page.getByRole('link', { name: 'Mot de passe oublié ?' }).click();
  await page.waitForTimeout(10000);
  expect(await page.screenshot()).toMatchSnapshot('forgotPassword.png');
  expect(await headerTop.screenshot()).toMatchSnapshot('headerTop.png');
  expect(await headerDescription.screenshot()).toMatchSnapshot('headerDescription.png');

  await page.getByRole('link').filter({ hasText: /^$/ }).first().click();
  await page.waitForTimeout(10000);
  expect(await page.screenshot()).toMatchSnapshot('headerHome.png');

});

test('TC_VerifyHomePageSideBarNavigation', async ({ page }) => {
  await page.goto('https://shop.buy-club.net/',{waitUntil: "domcontentloaded"});
  await page.waitForTimeout(10000);
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.locator('.menu-toggle').click();
  await page.getByRole('link', { name: 'CGV', exact: true }).click();
  await page.waitForTimeout(10000);
  await expect(page.getByText('AccueilCgv')).toBeVisible();
  expect(await page.screenshot()).toMatchSnapshot('cgvSideBar.png');

  await page.locator('.menu-toggle').click();
  await page.locator('#menu-item-1357').getByRole('link', { name: 'Mentions légales' }).click();
  await page.waitForTimeout(10000);
  await expect(page.getByText('AccueilMention legales')).toBeVisible();
  expect(await page.screenshot()).toMatchSnapshot('mentionLegalesSideBar.png');

  await page.locator('.menu-toggle').click();
  await page.locator('#menu-item-2144').getByRole('link', { name: 'Expédition & Livraison' }).click();
  await page.waitForTimeout(10000);
  await expect(page.getByText('AccueilMenu.view_sd')).toBeVisible();
  expect(await page.screenshot()).toMatchSnapshot('expeditionLivraisonSideBar.png');

  await page.locator('.menu-toggle').click();
  await page.locator('#menu-item-1358').getByRole('link', { name: 'Politique de remboursement et' }).click();
  await page.waitForTimeout(10000);
  await expect(page.locator('#rp').getByText('Politique de remboursement et')).toBeVisible();
  expect(await page.screenshot()).toMatchSnapshot('politiqueDeRemboursementetSideBar.png');

  await page.locator('.menu-toggle').click();
  await page.locator('#menu-item-1359').getByRole('link', { name: 'Politique de Confidentialité' }).click();
  await page.waitForTimeout(10000);
  await expect(page.getByText('Politique de protection des données personnelles')).toBeVisible();
  expect(await page.screenshot()).toMatchSnapshot('politiquedeConfidentialitéSideBar.png');

  await page.locator('.menu-toggle').click();
  await page.locator('#menu-item-1360').getByRole('link', { name: 'FAQ' }).click();
  await page.waitForTimeout(10000);
  await expect(page.getByText('FAQ : Foire aux questions')).toBeVisible();
  expect(await page.screenshot()).toMatchSnapshot('faqSideBar.png');

  await page.locator('.menu-toggle').click();
  await page.getByRole('link', { name: 'Contact', exact: true }).click();
  await page.waitForTimeout(10000);
  await expect(page.getByText('Contacter Buy Club')).toBeVisible();
  expect(await page.screenshot()).toMatchSnapshot('contactSideBar.png');

  await page.locator('.menu-toggle').click();
  await page.getByRole('link', { name: 'Notre offre' }).click();
  await page.waitForTimeout(10000);
  await expect(page.getByRole('heading', { name: 'Notre Offre' })).toBeVisible();
  expect(await page.screenshot()).toMatchSnapshot('notreOffreSideBar.png');

  await page.locator('.menu-toggle').click();
  await page.locator('#menu-item-2145').getByRole('link', { name: 'Suivre votre commande' }).click();
  await page.waitForTimeout(10000);
  await expect(page.locator('#tr').getByText('Suivre votre commande')).toBeVisible();
  expect(await page.screenshot()).toMatchSnapshot('suivreVotreCommandeSideBar.png');

  await page.locator('.menu-toggle').click();
  await page.locator('#menu-item-2146').getByRole('link', { name: 'Moyens de paiement' }).click();
  await page.waitForTimeout(10000);
  await expect(page.locator('#pm').getByText('Moyens de paiement')).toBeVisible();
  expect(await page.screenshot()).toMatchSnapshot('moyensDePaiementSideBar.png');
 
});

test('TC_VerifyHomePageFooterNavigation', async ({ page }) => {
  await page.goto('https://shop.buy-club.net/', {waitUntil: "domcontentloaded"});
  await page.waitForTimeout(15000);
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();

  await page.getByRole('link', { name: 'Cgv', exact: true }).click();
  await page.waitForTimeout(15000);
  await expect(page.getByText('CONDITIONS GÉNÉRALES DE VENTE - BUY-CLUB.NET')).toBeVisible();
  expect(await page.screenshot()).toMatchSnapshot('cgvFooter.png');

  await page.locator('#menu-item-1252').getByRole('link', { name: 'Mentions légales' }).click();
  await page.waitForTimeout(15000);
  await expect(page.getByText('Mentions Légales', { exact: true })).toBeVisible();
  expect(await page.screenshot()).toMatchSnapshot('mentionsLegalesFooter.png');

  await page.getByRole('link', { name: 'Newsletter' }).click();
  await page.waitForTimeout(15000);
  await expect(page.getByText('NEWSLETTER BUY-CLUB.NET')).toBeVisible();
  expect(await page.screenshot()).toMatchSnapshot('newsletterFooter.png');

  await page.getByRole('link', { name: 'Désabonnement' }).click();
  await page.waitForTimeout(15000);
  await expect(page.getByText('DESABONNEMENT', { exact: true })).toBeVisible();
  expect(await page.screenshot()).toMatchSnapshot('desabonnementFooter.png');

  await page.locator('#menu-item-1374').getByRole('link', { name: 'FAQ' }).click();
  await page.waitForTimeout(15000);
  await expect(page.getByText('FAQ : Foire aux questions')).toBeVisible();
  expect(await page.screenshot()).toMatchSnapshot('faqFooter.png');

  await page.locator('#menu-item-2148').getByRole('link', { name: 'Expédition & Livraison' }).click();
  await page.waitForTimeout(15000);
  await expect(page.getByRole('heading', { name: 'EXPEDITION ET LIVRAISON' })).toBeVisible();
  expect(await page.screenshot()).toMatchSnapshot('expeditionEtLivraisonFooter.png');

  await page.locator('#menu-item-2149').getByRole('link', { name: 'Suivre votre commande' }).click();
  await page.waitForTimeout(15000);
  await expect(page.locator('#tr').getByText('Suivre votre commande')).toBeVisible();
  expect(await page.screenshot()).toMatchSnapshot('suiveVotreCommandeFooter.png');

  await page.locator('#menu-item-2147').getByRole('link', { name: 'Moyens de paiement' }).click();
  await page.waitForTimeout(15000);
  await expect(page.locator('#pm').getByText('Moyens de paiement')).toBeVisible();
  expect(await page.screenshot()).toMatchSnapshot('moyensDePaiementFooter.png');

  await page.locator('#menu-item-1375').getByRole('link', { name: 'Politique de remboursement et' }).click();
  await page.waitForTimeout(15000);
  await expect(page.locator('#rp').getByText('Politique de remboursement et')).toBeVisible();
  expect(await page.screenshot()).toMatchSnapshot('politiqueDeRemboursementEtFooter.png');

  await page.locator('#menu-item-1376').getByRole('link', { name: 'Politique de Confidentialité' }).click();
  await page.waitForTimeout(15000);
  await expect(page.getByText('Politique de protection des données personnelles')).toBeVisible();
  expect(await page.screenshot()).toMatchSnapshot('politiqueDeConfidentialitéFooter.png');

});

test('TC_VerifySideBarCGVContent', async ({ page }) => {
  await page.goto('https://shop.buy-club.net/', {waitUntil: "domcontentloaded"});
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.locator('.menu-toggle').click();
  await page.getByRole('link', { name: 'Cgv', exact: true }).click();
  await expect(page.getByText('CONDITIONS GÉNÉRALES DE VENTE - BUY-CLUB.NET')).toBeVisible();
  await expect(page.locator('#ts')).toMatchAriaSnapshot(`
    - paragraph:
      - strong: CONDITIONS GENERALES DE VENTE
    - paragraph:
      - strong: www.top-reduc.net
    - paragraph
    - paragraph:
      - strong: 1. Présentation
    - paragraph:
      - text: Les Présentes Conditions Générales de Vente (ci-après «
      - strong: Conditions Générales
      - text: » ou «
      - strong: CGV
      - text: ») ont pour objet de préciser les droits et obligations des parties entre
      - strong: CASSIOPEIA Digital Ltd
      - text: (ci-après la «
      - strong: Société
      - text: » ou «
      - strong: top-reduc.net
      - text: ») et toute personne ayant choisi de s’abonner au service (Ci-après l’«
      - strong: Utilisateur
      - text: »).
    - paragraph:
      - text: Tout abonnement contracté auprès de
      - strong: top-reduc.net
      - text: implique l’adhésion préalable aux présentes CGV.
    - paragraph:
      - text: "Adresse mail du service clients :"
      - link "contact@top-reduc.net":
        - /url: mailto:contact@top-reduc.net
    - paragraph:
      - text: "Numéro de téléphone du service clients :"
      - strong: /\\d+ \\d+ \\d+ \\d+ \\d+/
      - text: /\\(Du L au V de \\d+[hmsp]+ à 18h00\\)/
    - paragraph:
      - text: Adresse de
      - strong: CASSIOPEIA Digital Ltd
      - text: ":"
      - strong: /OFFICE 9, DALTON HOUSE \\d+ WINDSOR AVENUE-/
      - strong: LONDON -
      - strong: UNITED KINGDOM-
      - strong: SW19 2RR
    - paragraph:
      - text: La compagnie est immatriculée au registre des sociétés d’Angleterre et du Pays de galles sous le n°
      - strong: /\\d+/
    - paragraph:
      - text: Notre Service consiste à offrir à nos abonnés, via notre site internet
      - strong: www.top-reduc.net
      - text: "des réductions exclusives sur une sélection de produits (ci-après : «"
      - strong: le Service
      - text: »). Il est facturé mensuellement ou trimestriellement suivant le choix de l’utilisateur.
    - paragraph:
      - text: "L’abonné (ci-après : «"
      - strong: l’Abonné
      - text: ») peut commander sur notre boutique de manière illimitée. Les frais de livraison sont offerts. Chaque mois l’abonné est invité par email, à profiter des produits proposés sur le Site. En se connectant à son espace membre, l’Abonné aura accès au catalogue de produits avec des réductions exclusives réservées aux Abonnés.
    - paragraph:
      - text: L’utilisation du Site ou de toute fonctionnalité de celui-ci implique l’acceptation expresse, préalable, pleine et entière des présentes
      - strong: CGV
      - text: par l’
      - strong: Abonné
      - text: .
    - paragraph:
      - text: Les présentes
      - strong: CGV
      - text: s’appliquent à tout Abonnement réalisé sur le Site. Les
      - strong: CGV
      - text: sont exclusivement applicables aux consommateurs établis en France métropolitaine. Les
      - strong: CGV
      - text: ainsi que l’ensemble des informations contractuelles mentionnées sur le
      - strong: Site
      - text: sont rédigées, en langue française. L’acceptation en ligne des présentes
      - strong: CGV
      - text: est matérialisée par une case à cocher obligatoire.
    - paragraph
    - paragraph:
      - strong: 2. L’accès au site
    - paragraph: Pour pouvoir accéder au site, l’utilisateur est seul responsable des moyens technologiques nécessaires. Il conserve à sa charge les frais de télécommunication et d’accès à internet pour l’utilisation du Site.
    - paragraph: /L’accès au Site est possible \\d+[hmsp]+\\/\\d+, 7j\\/7, sauf en cas de force majeure ou d’un événement hors du contrôle de la Société et sous réserve des éventuelles pannes et interventions de maintenance nécessaire au bon fonctionnement de celui-ci\\./
    - paragraph: /Le Site internet est hébergé chez Anyfes Digital Almogàvers, \\d+-\\d+, Les Roquetes, Sant Père de Ribes \\d+ Barcelone, Espagne/
    - paragraph:
      - text: Le site internet est édité par la «
      - strong: Société
      - text: »
    - paragraph: "Directeur de la publication : Richard TURNER"
    - paragraph
    - paragraph:
      - strong: 3. Présentation de l’offre
    - paragraph: top-reduc.net est un club réservé à ses abonnés. Il propose une large sélection de produits (High-Tech, Bricolage, Jeux Vidéo, Audio&Vidéo…) à l’ensemble de ses Abonnés. Les réductions exclusives proposées aux membres sont toujours avec les frais de port offerts.
    - paragraph: Plusieurs fois par mois, nous envoyons notre sélection du moment par email à nos membres.
    - paragraph:
      - strong: "ATTENTION : TOUS LES ABONNES SONT FACTURES DE LA MENSUALITE TOUS LES MOIS (OU TOUS LES 3 MOIS). QU’ILS AIENT PROFITE OU NON DE LEUR ABONNEMENT EN PASSANT UNE OU PLUSIEURS COMMANDES."
    - paragraph: L'Abonné peut passer autant de commandes qu'il le souhaite pendant toute la durée de son abonnement. L’accès est ILLIMITÉ.
    - paragraph:
      - text: "Le Service consiste à mettre à disposition des réductions exclusives sur une sélection de produis à forte demande (ci-après : «"
      - strong: le Service
      - text: »), ce service est facturé par un
      - strong: Abonnement
      - text: "prélevé de façon mensuelle ou trimestrielle. L’abonné (ci-après : « l’"
      - strong: Abonné
      - text: »), en se connectant à son espace membre, aura accès au catalogue de produits avec des réductions exclusives qui lui sont réservées.
    - paragraph: Les produits proposés peuvent varier d’un mois sur l’autre. Les équipes s’efforcent de proposer aux abonnés une offre la plus large possible pour satisfaire le plus grand nombre.
    - paragraph: Les photographies et descriptions des Produits figurant sur le Site ne sont pas contractuelles.
    - paragraph
    - paragraph:
      - strong: 4. Abonnement au service
    - paragraph:
      - strong: a. L’abonnement
    - paragraph:
      - text: Les personnes qui souhaitent s’abonner à
      - strong: top-reduc.net
      - text: "devront se rendre sur le site internet : www.top-reduc.net ou sur l’une des pages proposant une offre de bienvenue réservée aux nouveaux Utilisateurs."
    - paragraph: Afin de souscrire un abonnement, l’Utilisateur garantit résider en France et pouvoir légalement conclure un contrat qui l’engage.
    - paragraph: Il doit également être majeur et responsable selon la loi en vigueur en France, ou bien avoir l’autorisation de ses parents.
    - paragraph: Pour s’abonner au Service, l’Utilisateur doit remplir le formulaire prévu à cet effet sur le Site en y complétant l’ensemble des champs. En cas de communication de données erronées, la Société ne pourra voir sa responsabilité engagée.
    - paragraph: "L’Utilisateur garantit que toutes les informations qu’il donne dans le formulaire sont exactes, à jour et sincères et ne sont entachées d’aucun caractère trompeur. Il s’engage à informer la Société à l’adresse mentionnée à l’article 1 en cas de modifications de ses coordonnées (notamment : changement d’adresse)."
    - paragraph: L’Utilisateur est informé et accepte que les informations saisies aux fins de création ou de mise à jour de son Compte valent preuve de son identité. Les informations saisies l’engagent dès leur validation, étant précisé que la Société se réserve le droit de vérifier l’exactitude des données fournies.
    - paragraph: A l’issue de son inscription, et après paiement du prix du Service conformément à l’article 5 des présentes, l’Utilisateur reçoit un email de confirmation de son Abonnement.
    - paragraph:
      - strong: b. Les « Offres de bienvenue »
    - paragraph:
      - strong: La Société
      - text: /propose régulièrement des « Offres de Bienvenue » dans le cadre de sa politique commerciale\\. Ces offres réservées aux nouveaux membres, permettent de s'abonner au Service en profitant d’une part d’un contre remboursement de \\d+€ pour seulement 1€ et d’autre part d’un accès découverte au site internet d’une durée de \\d+[hmsp]+, à l’issue duquel, et en l’absence de résiliation par l’Abonné, l’Abonnement de \\d+,\\d+€ \\(ou \\d+€ par trimestre\\) prendra effet automatiquement\\./
    - paragraph: Comment fonctionne l'offre de bienvenue top-reduc ?
    - paragraph: /Lorsque vous souscrivez à un abonnement top-reduc, vous bénéficiez automatiquement d’une période découverte de \\d+[hmsp]+ qui ne vous est facturée que 1€ ainsi qu'une offre de bienvenue pour un remboursement de \\d+€\\. Pour profiter de cette offre vous devez acheter le produit indiqué sur l'offre promotionnelle, envoyer la facture à contact@top-reduc\\.net et vous recevrez le remboursement sous \\d+ jours sur le compte paypal associé à votre email\\./
    - paragraph:
      - strong: "/Offre limitée : vous avez \\\\d+ jours pour envoyer la preuve d’achat et profiter de votre remboursement de \\\\d+€/"
    - paragraph: /A l’issu de cette période de \\d+[hmsp]+, et si vous ne nous avez pas fait part de votre souhait de vous désabonner, votre abonnement sera confirmé et vous serez prélevé \\(\\d+,\\d+€\\/mois ou \\d+€\\/trimestre\\)/
    - paragraph: /Les conditions de l’Abonnement sont stipulées dans l'article 7 précisant le prix et les modalités de paiement\\. Dans le cadre de cette offre, le Service débute \\d+[hmsp]+ suivant la confirmation d’Abonnement\\./
    - paragraph: /Les conditions de l’Abonnement sont stipulées dans l'article 5 précisant le prix et les modalités de paiement\\. Dans le cadre de cette offre, le Service débute \\d+[hmsp]+ suivant la confirmation d’Abonnement\\./
    - paragraph
    - paragraph:
      - strong: 5. Caractéristiques du Service
    - paragraph:
      - strong: a. Durée et Résiliation
    - paragraph: L’abonnement au service top-reduc.net est un abonnement mensuel ou trimestriel, sans engagement de durée, et à reconduction tacite.
    - paragraph: La résiliation peut être notifiée par l’Utilisateur à tout moment par courriel sans préavis et sans motif.
    - paragraph: "La résiliation devra être notifiée par l’Utilisateur :"
    - paragraph:
      - text: "- soit en remplissant le formulaire de résiliation en cliquant"
      - link "ici.":
        - /url: https://www.top-reduc.net/fr/rt/retractation.html
    - paragraph:
      - text: "- soit par un e-mail envoyé au Service Client de top-reduc.net à l’adresse courriel suivante :"
      - link "contact@top-reduc.net":
        - /url: mailto:contact@top-reduc.net
    - paragraph: La résiliation prendra effet à la fin de la période mensuelle en cours (mensuelle ou trimestrielle selon l’offre choisie par le client), de sorte que l’Utilisateur qui résilie son Contrat et qui aura payé pour la période en cours aura le droit d’utiliser le Site et l’application pour le reste de la période en cours. A la fin de la période en cours l’Utilisateur n’aura plus accès au Service et ne sera plus prélevé par top-reduc.net.
    - paragraph: top-reduc.net se réserve le droit de résilier le Service à tout moment en cas de non-respect par l’Abonné des présentes Conditions Générales.
    - paragraph: Elle se réserve également le droit d’arrêter de proposer le Service. L’arrêt du Service fera l’objet d’une information de l’Abonné par tout moyen approprié.
    - paragraph:
      - strong: b. Prix et Paiement
    - paragraph:
      - text: Les personnes qui souhaitent s’abonner à
      - strong: top-reduc.net
      - text: /et profiter de tous les produits et services proposés devront s’acquitter du montant de \\d+,\\d+€ TTC par mois \\(ou \\d+€ par trimestre\\)\\. Chaque mois \\(ou chaque trimestre\\), ils pourront retrouver la facture correspondante à la période au sein de leur compte client, une fois logué sur le site www\\.top-reduc\\.net/
    - paragraph: /Le paiement du montant de l’Abonnement s’effectue exclusivement par carte bancaire\\. La carte bancaire sera débitée de \\d+\\.\\d+€ chaque mois \\(ou de \\d+€ par trimestre\\) et cela jusqu’à ce que l’Utilisateur souhaite mettre fin à son Abonnement\\./
    - paragraph: En s’abonnant, l’Utilisateur garantit à la Société qu’il dispose des autorisations nécessaires pour régler le prix du service en respectant les modalités précisées dans le présent document. Il s’engage également à prendre les dispositions nécessaires afin que le prélèvement du prix par la Société puisse être effectué sans problème.
    - paragraph: Dans le cas où cela ne serait pas le cas, et/ou que la Société prenne connaissance d’un cas de fraude, ou de tentative de fraude, elle se réserve le droit de mettre fin à la relation commerciale et de résilier l’abonnement, et donc l’accès au service.
    - paragraph:
      - strong: c. Droit de Rétractation
    - paragraph: /Le souscripteur dispose d'un délai légal de rétractation de \\d+ jours calendaires, conformément à l'article L \\d+-\\d+ du Code de la consommation\\. Le délai de rétractation court à compter de la date d'abonnement au Site et expire \\d+ jours après\\. En se rétractant, l’Utilisateur résilie automatiquement son abonnement, et il reçoit le remboursement total des frais d'abonnement déjà payés\\. Ce remboursement a lieu au plus tard dans les \\d+ jours à compter de la date à laquelle La Société a reçu sa demande de rétractation\\. A la suite de sa demande de rétractation, un email sera envoyé à l’Utilisateur, précisant que sa demande a été prise en considération\\./
    - paragraph
    - paragraph
    - paragraph
    - paragraph: Cette rétractation peut être faite en utilisant le formulaire présent sur le site internet dans la rubrique « Rétractation », ou en recopiant le formulaire ci-dessous sur papier libre
    - paragraph:
      - emphasis:
        - text: Je vous notifie par la présente, ma rétractation du contrat pour la prestation de
        - strong: services top-reduc.net
    - paragraph:
      - emphasis: "Date de souscription à l'abonnement :"
    - paragraph:
      - emphasis: "Nom & Prénom :"
    - paragraph:
      - emphasis: "Adresse email utilisée:"
    - paragraph:
      - emphasis: "Date & Signature :"
    - paragraph:
      - emphasis: L'exercice du droit de rétractation entraîne la résiliation du contrat".
    - paragraph:
      - strong:
        - text: Ce formulaire de rétractation doit être adressé par email à
        - link "contact@top-reduc.net":
          - /url: mailto:contact@top-reduc.net
    - paragraph:
      - strong
    - paragraph:
      - strong:
        - strong: 6. Livraison
    - paragraph: Les livraisons de Produits sont effectuées à l’adresse de livraison indiquée par l’Abonné lors de la souscription de son abonnement.
    - paragraph: /Les livraisons sont effectuées par envoi postal, dans le délai maximum de \\d+ jours suivant la validation de la commande par l’Abonnée dans les conditions prévues à l’article 3\\./
    - paragraph:
      - text: "Dans le cas où l’Abonné ne reçoit pas le Produit commandé dans ce délai, il peut contacter top-reduc.net, par mail :"
      - link "contact@top-reduc.net.":
        - /url: mailto:contact@top-reduc.net.
      - text: /ou par téléphone au \\d+ \\d+ \\d+ \\d+ \\d+/
    - paragraph: La Société prendra toute mesure appropriée pour rechercher le Produit perdu et dès confirmation de cette perte, réadressera le Produit à l’Abonné, dans les meilleurs délais.
    - paragraph: En l’absence de livraison dans un délai raisonnable à la suite de la notification par l’Abonné du retard de livraison, celui-ci peut également demander, par email ou par téléphone, la résiliation du contrat.
    - paragraph: L’Abonné sera alors intégralement remboursé du dernier paiement en cours.
    - paragraph:
      - strong
    - paragraph:
      - strong:
        - strong: 7. Données personnelles et Bancaires
    - paragraph: La Société respecte le droit à la vie privée. Elle est amenée, lors de l’inscription de l’Utilisateur au site top-reduc.net, à collecter des données à caractère personnel (adresse email, nom, prénom, numéro de téléphone…).
    - paragraph: Dans le cas où l’Utilisateur prendrait finalement la décision de ne pas finaliser son abonnement, la Société collecte uniquement l’adresse email. Cette adresse email pourra être utilisée ultérieurement par la Société, afin de relancer le prospect qui n’aurait pas finalisé sa commande. Les autres informations ne sont conservées que pour les clients qui finalisent vraiment leur abonnement au service.
    - paragraph: En utilisant le Service, vous acceptez nos Conditions Générales et la collecte des informations, y compris le transfert des données vers un pays de l’Union européenne et/ou de l’espace économique européen.
    - paragraph: Sachez que vous pourrez revenir à tout moment sur votre consentement au partage de vos données.
    - paragraph: En souscrivant à l’Abonnement, l’Utilisateur accepte alors le traitement de ses données personnelles à des fins de gestion des Abonnements et de fourniture des Services du Site.
    - paragraph:
      - text: /Conformément aux dispositions de la loi n°\\d+-\\d+ dite loi Informatique et libertés, du 6 janvier \\d+ et au règlement de l’UE \\d+\\/\\d+ applicable depuis le \\d+ mai \\d+, l’Utilisateur dispose d'un droit d’obtention, d’effacement, d’opposition, d'accès, de rectification et de suppression de toutes données personnelles le concernant obtenues par la Société lors de l'utilisation du Service\\. Tout Abonné peut exercer ce droit en envoyant un e-mail à l'adresse/
      - link "contact@top-reduc.net.":
        - /url: mailto:contact@top-reduc.net.
    - paragraph: La Société avertit l’Utilisateur que ses données personnelles pourront être utilisées par la Société CASSIOPEIA Digital Ltd.
    - paragraph: La Société est particulièrement sensible à la sécurité de son site internet et aux informations que ses membres pourraient lui confier. C’est pour cela que nous avons contracté avec les meilleurs prestataires de paiements. Les prélèvements des mensualités sont effectués via ces prestataires et de manière totalement sécurisée. Ces derniers sont les seuls à avoir accès à vos informations bancaires.
    - paragraph:
      - strong
    - paragraph:
      - strong:
        - strong: 8. Droit applicable et compétence
    - paragraph: Les textes en vigueur exigent que certaines informations ou communications soient transmises par écrit. En utilisant ce Site, l’Utilisateur accepte que ces communications se fassent principalement par voie électronique. Pour des raisons contractuelles, l’Utilisateur accepte ce moyen de communication électronique et reconnaît que tous les contrats, avis, informations et autres communications que le Site fournira par voie électronique sont conformes aux obligations légales prévoyant que lesdites communications soient faites par écrit.
    - paragraph: La Société se réserve le droit de mettre à jour les présentes C.G.V à tout moment et pour quelque motif que ce soit. Dans une telle hypothèse, la Société vous avertira de ces modifications et vous communiquera les dernières C.G.V. En ne résiliant pas votre contrat après que nous vous aurons averti d’une modification, vous manifesterez votre acceptation d’être désormais lié par les Conditions Générales modifiées.
    - paragraph: Les présentes Conditions Générales sont régies par la loi française. En cas de contestation relative à l'interprétation, la validité et/ou l'exécution des présentes, l'Utilisateur pourra saisir à son choix, outre l'une des juridictions territorialement compétentes en vertu du code de procédure civile, la juridiction du lieu où il demeurait au moment de la conclusion du contrat ou de la survenance du fait dommageable. Si tout ou partie d’une clause des présentes s’avérait illicite, non écrite, nulle ou inapplicable, cette clause sera abandonnée, en tout ou partie, sans que la validité des autres clauses en soit affectée, le reste du présent accord conservant son plein effet.
    - paragraph: En ce qui concerne les litiges entre la Société et l’Utilisateur concernant l’Abonnement, l’Utilisateur est invité à tenter de résoudre le litige à l’amiable avant de saisir les juridictions judiciaires, en prenant le plus rapidement possible contact avec le service client de la Société.
    - paragraph:
      - text: "- en envoyant un email à l'adresse suivante :"
      - link "contact@top-reduc.net":
        - /url: mailto:contact@top-reduc.net
    - paragraph:
      - text: "- en utilisant le formulaire en ligne accessible"
      - link "ici":
        - /url: https://www.top-reduc.net/fr/co/contact.html
    - paragraph: /- en contactant le support téléphonique au numéro suivant \\d+ \\d+ \\d+ \\d+ \\d+/
    - paragraph:
      - text: /A défaut d’accord amiable, il pourra recourir à une médiation conventionnelle ou à tout autre mode alternatif de règlement des différends\\. Le Client pourra notamment saisir gratuitement, conformément aux articles L\\.\\d+-1 et suivants du Code de la consommation, la plateforme de règlement en ligne des litiges de la Commission Européenne\\. Cette plateforme est accessible/
      - link "ici":
        - /url: https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home.howitworks#heading-6
      - text: .
    - paragraph: Cette plateforme de Médiation permet aux consommateurs de déposer en ligne une demande de médiation accompagnée des documents justificatifs.
    `);
});

test('TC_VerifySideBarExpeditionLivraisonContent', async ({ page }) => {
  await page.goto('https://shop.buy-club.net/', {waitUntil: "domcontentloaded"});
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();

  await page.locator('.menu-toggle').click();
  await page.locator('#menu-item-2144').getByRole('link', { name: 'Expédition & Livraison' }).click();
  await expect(page.getByRole('heading', { name: 'EXPEDITION ET LIVRAISON' })).toBeVisible();
  await expect(page.locator('#sd')).toMatchAriaSnapshot(`
    - heading "EXPEDITION ET LIVRAISON" [level=2]
    - paragraph: Nous sommes fiers d'offrir des services d'expédition qui livrent sous 7 jours ouvrables maximum après la réception du paiement. Rien n'est plus important pour nous que d'offrir à nos clients un service irréprochable. Nous continuerons à nous perfectionner pour répondre aux besoins de tous nos clients, en fournissant un service au-delà de toutes les attentes partout dans le monde.
    - heading "Comment transportez-vous les paquets?" [level=3]
    - paragraph: Les colis de notre entrepôt en Chine seront expédiés par ePacket ou EMS en fonction du poids et de la taille du produit. Les colis expédiés de notre entrepôt américain sont expédiés par USPS.
    - heading "Est-ce que vous offrez la livraison gratuite?" [level=3]
    - paragraph: Oui. Nous offrons une livraison gratuite à tous non membres VIP.
    - heading "Qu'en est-il des douanes?" [level=3]
    - paragraph: Nous ne sommes pas responsables des frais de douane une fois que les articles ont été expédiés. En achetant nos produits, vous consentez qu'un ou plusieurs paquets peuvent vous être expédiés et que vous receviez des frais supplémentaires lorsqu'ils arrivent dans votre pays.
    - heading "Combien de temps prend la livraison?" [level=3]
    - text: "Le temps de livraison varie selon l'emplacement. Ce sont nos estimations: Délai de livraison maximum – 7 jours ouvrables. *Cela n'inclut pas notre temps de traitement de 2 à 5 jours."
    - heading "Fournissez-vous des informations de suivi?" [level=3]
    - paragraph: Oui, vous recevrez un courrier électronique une fois que votre commande sera expédiée contenant vos informations de suivi. Si vous n'avez pas reçu d'informations de suivi dans les 5 jours, contactez-nous.
    - heading "Mon suivi indique \\"aucune information disponible pour le moment\\"." [level=3]
    - paragraph: Pour certaines entreprises de transport, il faut 2 à 5 jours ouvrables pour que les informations de suivi soient mises à jour sur le système. Si votre commande a été placée il y a plus de 5 jours ouvrables et qu'il n'y a toujours pas d'information sur votre numéro de suivi, contactez-nous.
    - heading "Mes articles seront-ils envoyés dans un seul paquet?" [level=3]
    - paragraph: Pour des raisons logistiques, les éléments du même achat seront parfois envoyés dans des paquets distincts, même si vous avez spécifié une livraison combinée.
    - paragraph: Si vous avez d'autres questions, contactez-nous et nous ferons de notre mieux pour vous aider.
    - heading "POLITIQUE DE REMBOURSEMENTS ET RETOURS" [level=2]
    - heading "Annulation de commande" [level=3]
    - paragraph: /Toutes les commandes peuvent être annulées avant leur expédition\\. Si votre commande a été payée et que vous devez apporter un changement ou annuler une commande, vous devez nous contacter dans les \\d+ heures\\. Une fois le processus d'emballage et d'expédition commencé, elles ne peuvent plus être annulé\\./
    - heading "Remboursements" [level=3]
    - paragraph: "Votre satisfaction est notre priorité n°1. Par conséquent, vous pouvez demander un remboursement ou une réexpédition pour les produits commandés si :"
    - list:
      - listitem: /Si vous avez ne pas Recevoir le produit dans le délai de garanti \\(\\d+ jours hors délai de traitement compris entre 2 et 5 jours\\), vous pouvez demander un remboursement ou un renvoi\\./
      - listitem: Si vous avez reçu un mauvais article, vous pouvez demander un remboursement ou un renvoi.
      - listitem: Si vous ne voulez pas du produit que vous avez reçu, vous pouvez demander un remboursement mais vous devez retourner l'objet à vos frais et l'article doit être inutilisé.
    - paragraph: "Nous faisons ne pas procéder au remboursement si :"
    - list:
      - listitem: "Votre commande n'est pas arrivée en raison d'une erreur de votre part (ex : mauvaise adresse d'expédition)"
      - listitem:
        - text: Votre commande n'est pas arrivée en raison de circonstances exceptionnelles hors de notre contrôle
        - link "buy-club.net":
          - /url: /
        - text: "(ex : non dédouané par les douanes, retardé par une catastrophe naturelle)."
      - listitem: D'autres circonstances exceptionnelles hors de notre contrôle https://shop.buy-club.net
    - paragraph:
      - text: /\\*Vous pouvez soumettre des demandes de remboursement dans les \\d+ jours suivant la fin de la période de livraison garantie \\(\\d+ jours\\)\\. Vous pouvez le faire en envoyant un message sur/
      - link "Contactez-nous":
        - /url: https://shop.buy-club.net/contact-us/
      - text: page
    - paragraph: /Si le remboursement est approuvé, vous serez alors crédité automatiquement sur votre carte de crédit ou via le mode de paiement que vous avez choisi dans un délai de \\d+ jours\\./
    - heading "Echanges" [level=3]
    - paragraph: Si, pour une raison quelconque, vous souhaitez échanger votre produit, vous devez nous contacter en premier lieu et nous vous guiderons dans les étapes à suivre.
    - paragraph: Ne pas nous renvoyer votre achat si nous ne vous autorisons pas à le faire.
    `);

});

test('TC_VerifySideBarPolitiqueDeRemboursementEtContent', async ({ page }) => {
  await page.goto('https://shop.buy-club.net/', {waitUntil: "domcontentloaded"});
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();

  await page.locator('.menu-toggle').click();
  await page.locator('#menu-item-1358').getByRole('link', { name: 'Politique de remboursement et' }).click();
  await expect(page.locator('#rp').getByText('Politique de remboursement et')).toBeVisible();
  await expect(page.locator('#rp')).toMatchAriaSnapshot(`
    - heading "Annulation de commande" [level=3]
    - paragraph: /Toutes les commandes peuvent être annulées jusqu’à leur expédition\\. Si votre commande a été payée et que vous devez la modifier ou l’annuler, veuillez nous contacter dans les \\d+ heures\\./
    - heading "Remboursements" [level=3]
    - paragraph: Votre satisfaction est notre priorité n ° 1. Nous voulons que vous achetiez en toute confiance. C’est pourquoi nous offrons fièrement une garantie de satisfaction absolue qui garantit que vous recevrez votre article à temps et comme décrit.
    - paragraph: "Notre priorité absolue est de vous faire plaisir, afin que tous ceux qui achètent sur buy-club.net bénéficient des garanties suivantes:"
    - list:
      - listitem: remboursement total si vous ne recevez pas votre commande;
      - listitem: /remboursement total si votre commande n’arrive pas dans le délai garanti \\(\\d+ jours ouvrables hors traitement 2-5 jours ouvrables\\)/
      - listitem: remboursement total ou partiel si l’article n’est pas tel que décrit
    - paragraph: "Les remboursements complets ne sont pas disponibles dans les circonstances suivantes:"
    - list:
      - listitem: votre commande n’arrive pas en raison de facteurs sous votre contrôle (par exemple, fournir la mauvaise adresse de livraison)
      - listitem: votre commande n’arrive pas en raison de circonstances exceptionnelles hors de notre contrôle (par exemple non dédouanées, retardées par une catastrophe naturelle).
    - paragraph:
      - text: /Tous nos produits bénéficient d’une garantie de remboursement de \\d+ jours\\. Envoyez-nous simplement un message sur la page Contactez-nous ou/
      - link "contactez-nous":
        - /url: https://buy-club.net/fr/co/contact.html
      - text: sur contact@buy-club.net et nous vous rembourserons le prix d’achatt.
    - heading "Retours faciles" [level=3]
    - paragraph: /Tous nos produits bénéficient d’une garantie de remboursement de \\d+ jours\\. Contactez-nous et nous vous rembourserons le prix d’achat\\./
    - paragraph: Nous sommes fiers de tout ce que nous vendons. Si vous n’êtes pas satisfait de votre achat, vous pouvez le retourner pour un remplacement ou un remboursement. Aucune question posée! Vous devez par contre le retourner à vos frais.
    - paragraph: Veuillez nous contacter d’abord et nous vous guiderons à travers les étapes. Nous sommes toujours prêts à vous offrir les meilleures solutions!
    - paragraph: Veuillez ne pas nous renvoyer votre achat à moins que nous ne vous y autorisons.
    `);
});

test('TC_VerifySideBarPolitiqueDeConfidentialiteContent', async ({ page }) => {
  await page.goto('https://shop.buy-club.net/', {waitUntil: "domcontentloaded"});
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.locator('.menu-toggle').click();
  await page.locator('#menu-item-1359').getByRole('link', { name: 'Politique de Confidentialité' }).click();
  await expect(page.getByText('Politique de protection des données personnelles')).toBeVisible();
  await expect(page.locator('#pp')).toMatchAriaSnapshot(`
    - paragraph:
      - strong: Politique de Protection des Données à Caractère Personnel
    - paragraph:
      - text: Le site buy-club.net accessible via le lien suivant
      - link "buy-club.net":
        - /url: buy-club.net
      - text: est édité par la société CASSIOPEIA DIGITAL LTD, immatriculée au
      - strong: /OFFICE 9, DALTON HOUSE \\d+ WINDSOR AVENUE -/
      - strong: LONDON-
      - strong: UNITED KINGDOM -
      - strong: SW19 2RR
      - text: /, enregistrée sous le numéro \\d+\\. La présente Politique de Protection des données à caractère personne vous informe de manière transparente sur notre politique en matière de sécurité, de protection et de confidentialité des traitements effectués sur les données à caractère personnel que vous nous confiez lorsque vous naviguez sur le site\\./
    - paragraph:
      - strong: Présentation
    - paragraph: CASSIOPEIA DIGITAL LTD, est une société internationale évoluant dans le domaine du e-commerce et spécialisée dans la fourniture de services par abonnement.
    - paragraph: En accédant à l’un de sites édités par la société CASSIOPEIA DIGITAL LTD, et en utilisant les services proposés, l’Utilisateur reconnaît avoir lu et compris la présente Politique générale relative à la protection des données personnelles, ainsi que les pratiques de recueil de consentement, de collecte et de traitement des informations décrites dans ce document.
    - paragraph: La société CASSIOPEIA DIGITAL LTD s’est engagée à respecter toutes les obligations légales en matière de protection des données à caractère personnel, notamment en s’engageant dans la conformité au Règlement Général pour la Protection des Données et à la Loi Informatique et Libertés.
    - paragraph: /Règlement \\(UE\\) \\d+\\/\\d+, dit Règlement Général pour la Protection des Données \\(« RGPD »\\) et à la Loi n° \\d+-\\d+ du 6 janvier \\d+ relative à l’informatique, aux fichiers et aux libertés, modifiée par la loi \\d+-\\d+ du \\d+ juin \\d+ \\(« Loi Informatique et Libertés »\\)\\./
    - paragraph: "Conformément à la Loi Informatique et Libertés, et le Règlement Général pour la Protection des Données la société CASSIOPEIA DIGITAL LTD s’engage à :"
    - list:
      - listitem: ne traiter que des données loyalement et licitement collectées
      - listitem: ne traiter les données ainsi collectées que dans le cadre des finalités déterminées, explicites et légitimes
      - listitem: ne traiter que les données adéquates et pertinentes et non excessives au regard de la finalité de ses traitements
      - listitem: prendre toutes précautions utiles afin de préserver la sécurité des données, afin notamment d’empêcher qu’elles ne soient déformées, altérées, endommagées
      - listitem: ne pas communiquer ces données à des tiers en dehors de l’entreprise sans en informer les personnes.
    - paragraph:
      - strong: Coordonnées du responsable de traitements
    - paragraph:
      - text: "Adresse postale :"
      - strong: /OFFICE 9, DALTON HOUSE \\d+ WINDSOR AVENUE -/
      - strong: LONDON-
      - strong: UNITED KINGDOM -
      - strong: SW19 2RR
      - text: "/Courriel : contact@buy-club\\\\.net Téléphone : \\\\d+ \\\\d+ \\\\d+ \\\\d+ \\\\d+ Section du site web :/"
      - link "https://buy-club.net/":
        - /url: ../../../
    - paragraph:
      - strong: Sous-traitant hébergeur du site et des données
    - paragraph: "Société : ANYFES,"
    - paragraph: Type :LLC
    - paragraph: "/Siège social : C\\\\/ ALMOGÀVERS, \\\\d+-\\\\d+, \\\\d+ LES ROQUETES, Espagne/"
    - paragraph:
      - strong: Collecte et Utilisation des données collectées
    - paragraph: Des données à caractère personnel peuvent être collectées et/ou traitées par la société CASSIOPEIA DIGITAL LTD lorsque vous vous inscrivez au site buy-club.net ou que vous passez une commande sur une de pages du site buy-club.net.
    - paragraph:
      - strong: Base légale de nos traitements de données
    - paragraph: "Nous ne sommes en droit de traiter vos données qu’à partir du moment :"
    - paragraph: – où vous nous en donnez explicitement l’autorisation en validant la case « J’accepte… » (ou tout autre mention similaire) présente sur le formulaire d’inscription.
    - paragraph: – puis par la suite, si nous avons une relation contractuelle, le traitement sera légitime et nécessaire dans le cadre du suivi de celle-ci, dans la mesure où vous serez partie ou associée à l’exécution des mesures précontractuelles ou contractuelles engagées avec nous.
    - paragraph:
      - strong: Finalité de la collecte
    - paragraph: "La société CASSIOPEIA DIGITAL LTD utilise les données à caractère personnel qui lui sont confiées directement par les Utilisateurs ou indirectement par ses partenaires exclusivement :"
    - list:
      - listitem:
        - text: Pour vous faire parvenir les commandes passées sur le site
        - link "https://buy-club.net":
          - /url: ../../../
        - text: ;
      - listitem: Pour le traitement des demandes d’informations adressées via le site web
      - listitem: Pour prendre contact par téléphone ou par voie dématérialisée (courriel) avec les personnes l’ayant contacté
      - listitem: Pour que la société CASSIOPEIA DIGITAL LTD et/ou ses partenaires vous adresse des lettres d’information (Newsletters) auxquelles vous vous êtes abonnés
      - listitem: Pour répondre à nos obligations découlant du RGPD et relatives au stockage et à la suppression des données collectées et traitées.
    - paragraph:
      - strong: Catégories de données collectées
    - paragraph: Nous nous abstenons, s’agissant des informations nominatives que vous nous confiez de toute utilisation détournée, et plus généralement, de tout acte susceptible de porter atteinte à votre vie privée ou à votre réputation. La société CASSIOPEIA DIGITAL LTD peut néanmoins être amenée à collecter indirectement des informations à votre égard via ses partenaires. Dans ce cas, la société CASSIOPEIA DIGITAL LTD s’assure auprès de ses partenaires que vous avez consentis à ce qu’une telle collecte soit opérée.
    - paragraph: La société CASSIOPEIA DIGITAL LTD veille également à ne collecter que des données strictement nécessaires à la finalité déclarée des différents traitements mis en œuvre par la société.
    - paragraph: "Dans le cadre de ses activités d’ordre commercial les données suivantes sont notamment collectées auprès des Utilisateurs :"
    - list:
      - listitem: Nom Prénom Civilité
      - listitem: Adresse courriel
      - listitem: Adresse postale
      - listitem: Adresse IP, qui est un numéro d’identification d’un appareil connecté à un réseau utilisant le protocole Internet
      - listitem: TimeStamp (horodatage), qui permet d’associer une date/heure à une donnée/action informatique;
      - listitem: Le numéro de téléphone.
    - paragraph:
      - strong: Informations relatives aux enfants
    - paragraph: Les sites édités par la société CASSIOPEIA DIGITAL LTD sont destinés à un public majeur. Aussi, la société CASSIOPEIA DIGITAL LTD n’a pas vocation à collecter des données d’enfant. Dans le cas où un enfant enverrait des données personnelles à CASSIOPEIA DIGITAL LTD via les sites qu’elle édite, la société CASSIOPEIA DIGITAL LTD mettra tout en œuvre pour assurer la suppression et/ou la destruction des données transmises.
    - paragraph:
      - strong: Destinataires de vos données
    - paragraph: Vos données à caractère personnel ne seront pas transmises à des tiers, sauf pour les seuls besoins des finalités que vous aurez acceptées lors du recueil de votre consentement.
    - paragraph: "La société CASSIOPEIA DIGITAL LTD peut par ailleurs être amenée à divulguer ou transférer vos données personnelles à des tiers dans les circonstances particulières suivantes:"
    - list:
      - listitem: du fait de la loi, dans le cadre d’une procédure en justice, d’un litige et/ou d’une requête des autorités publiques de votre pays de résidence ou autre
      - listitem: si la divulgation est nécessaire à des fins de sécurité nationale, d’application de la loi ou autre sujet d’intérêt public
      - listitem: pour l’envoi de commandes auprès des sous-traitants logistique.
    - paragraph:
      - strong: Durée de conservation de vos informations
    - paragraph: La société CASSIOPEIA DIGITAL LTD, dans le respect de la législation en vigueur, ne conservera les Données à Caractère Personnel de ses prospects que pour la durée nécessaire au bon déroulement de l’engagement contractuel, et une année au plus au-delà.
    - paragraph: Les données à caractère personnel des clients seront conservées en base active cinq ans au plus, après la fin de la relation contractuelle.
    - paragraph: Les données collectées auprès des personnes concernées via leurs inscriptions aux newsletters de CASSIOPEIA DIGITAL LTD seront conservées jusqu’à la demande de désabonnement des personnes concernées.
    - paragraph:
      - strong: Exercice des droits
    - paragraph: /Conformément à la « Loi Informatique et Libertés » du 6 janvier \\d+ modifiée, en justifiant de votre identité, vous bénéficiez d’un droit d’accès et de rectification ou de suppression des informations vous concernant\\. Vous pouvez également, pour des motifs légitimes, vous opposer au traitement de ces données ou en demander la portabilité\\./
    - paragraph: "Pour exercer vos différents droits définis par la loi, vous devrez justifier de votre identité et optionnellement :"
    - list:
      - listitem: nous indiquer les raisons pour lesquelles vous souhaitez les exercer
      - listitem: définir précisément le périmètre des données dont vous souhaitez la copie
      - listitem: nous préciser le format de données que vous souhaitez en retour
    - paragraph: Vous contacterez à cet effet le correspondant de la CNIL responsable du suivi de notre conformité.
    - paragraph: L’opposition partielle (ou demande simple de désinscription) est un droit que vous pourrez exercer au travers d’un lien présent sur chaque courriel que vous recevrez de notre part.
    - paragraph:
      - strong: Information exhaustive de tous vos droits
    - paragraph:
      - text: "Pour plus d’informations sur vos droits, connectez-vous sur le site de la CNIL à l’adresse :"
      - link "https://www.cnil.fr":
        - /url: https://www.cnil.fr
    - paragraph: Vous avez également le droit de saisir directement la Commission si vous estimez que vos droits ont été violés, ou que notre société ne respecte pas ses engagements en matière de protection des données.
    - paragraph:
      - strong: Loi applicable et attribution de juridiction
    - paragraph: Notre site web et notre activité sont régis par le droit français. En cas de litige résultant de votre utilisation de nos sites web ou de son activité, les tribunaux français seront exclusivement compétents.
    - paragraph:
      - strong: Modification de la présente politique de Protection des Données
    - paragraph: La société CASSIOPEIA DIGITAL LTD se réserve la possibilité de modifier à tout moment la présente politique de Protection des Données, par exemple pour tenir compte des nouvelles données récoltées, de modifications de nos traitements ou de nos finalités, mais aussi pour nous mettre en conformité en cas de changement des certaines dispositions législatives et réglementaires, notamment vis-à-vis de la Loi Informatique et Libertés, ou du RGPD.
    - paragraph: Nous vous encourageons à consulter régulièrement ce document pour vous tenir informé des modifications éventuelles. Toutefois, en cas de modification substantielle de notre politique de confidentialité des données, vous en serez averti par e-mail ou lors de votre connexion sur le site.
    `);
});

test('TC_VerifySideBarFAQContent', async ({ page }) => {
  await page.goto('https://shop.buy-club.net/', {waitUntil: "domcontentloaded"});
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.locator('.menu-toggle').click();
  await page.locator('#menu-item-1360').getByRole('link', { name: 'FAQ' }).click();
  await expect(page.getByText('FAQ : Foire aux questions')).toBeVisible();
  await expect(page.locator('#fq')).toMatchAriaSnapshot(`
    - heading "PRÉSENTATION DU SITE" [level=3]
    - definition:
      - heading "Comment fonctionne Buy Club ?" [level=3]
    - definition:
      - heading "Y-a-t-il des frais supplémentaires en plus de l'abonnement ?" [level=3]
    - definition:
      - heading "Je souhaite de désabonner, comment faire ?" [level=3]
    - definition:
      - heading "Quand serais-je débité de mon abonnement ?" [level=3]
    - definition:
      - heading "Comment puis-je vous contacter ?" [level=3]
    - definition:
      - heading "Qu'est-ce que l'Offre de Bienvenue?" [level=3]
    - heading "LE PAIEMENT" [level=3]
    - definition:
      - heading "Mon paiement est-il sécurisé ?" [level=3]
    - heading "LA LIVRAISON DES COMMANDES" [level=3]
    - definition:
      - heading "Quand recevrai-je ma commande Buy Club ?" [level=3]
    - definition:
      - heading "Y a t-il une limite de commmandes par mois?" [level=3]
    - definition:
      - heading "Le produit commandé est arrivée en mauvais état, que puis-je faire ?" [level=3]
    - definition:
      - heading "Est-ce possible de me faire livrer à l'étranger ou dans les DOM-TOM ?" [level=3]
    - heading "LE CONTENU DE LE SHOP" [level=3]
    - definition:
      - heading "Quels produits puis-je commander sur Buy Club ?" [level=3]
    - heading "MON COMPTE" [level=3]
    - definition:
      - heading "Est-ce que je peux modifier mes informations personnelles ?" [level=3]
    - definition:
      - heading "Est-il possible de consulter l'historique de mes commandes et paiements ?" [level=3]
    - heading "UNE QUESTION ?" [level=3]
    - paragraph: Si vous n’avez pas trouvé votre réponse...
    - link "Ecrivez-nous":
      - /url: https://buy-club.net/fr/co/contact.html
    `);
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
  await expect(page.locator('#fq')).toMatchAriaSnapshot(`
    - heading "PRÉSENTATION DU SITE" [level=3]
    - definition:
      - heading "Comment fonctionne Buy Club ?" [level=3]
      - paragraph: Grace à Buy-Club, Profitez toute l’année de réductions incroyables sur vos produits préférés !
      - paragraph: HighTech, Petit électroménager, aide culinaire, Hi-Fi…
      - paragraph: /Le principe est simple, les personnes qui font partie du club bénéficient toute l’année de réductions immédiates sur leurs achats au sein de notre site\\. Pour faire partie du club il vous suffit de vous abonner pour seulement \\d+,\\d+€\\/mois ou \\d+€\\/trimestre\\./
    - definition:
      - heading "Y-a-t-il des frais supplémentaires en plus de l'abonnement ?" [level=3]
      - paragraph: /L'abonnement à Buy-Club\\.net est de \\d+,\\d+€ par mois ou \\d+€ par trimestre, ce montant vous permet de bénéficienr toute l’année de réductions immédiates sur tous vos achats au sein de notre site et les frais de livraison sont OFFERTS\\./
      - paragraph
    - definition:
      - heading "Je souhaite de désabonner, comment faire ?" [level=3]
      - paragraph: "L’abonnement n’a aucun engagement de durée, vous pouvez vous désabonner quand vous le souhaitez depuis notre site, votre espace membre ou en nous contactant par mail au : contact@buy-club.net"
    - definition:
      - heading "Quand serais-je débité de mon abonnement ?" [level=3]
      - paragraph: Vous serez débité(e) tous les mois à la date de votre premier prélèvement.
      - paragraph: "/Exemple pour un abonnement mensuel : je suis prélevé le \\\\d+ Avril, puis le \\\\d+ de chaque mois suivant jusqu’à la résiliation de mon abonnement\\\\./"
      - paragraph: "/Exemple pour un abonnement trimestriel : je suis prélevé le \\\\d+ Avril, puis le \\\\d+ du mois tous les 3 mois suivant jusqu’à la résiliation de mon abonnement\\\\./"
    - definition:
      - heading "Comment puis-je vous contacter ?" [level=3]
      - paragraph: VOUS POUVEZ NOUS CONTACTER
      - list:
        - listitem:
          - strong: Par mail
          - text: via l'adresse contact@buy-club.net
        - listitem:
          - strong: Par notre formulaire
          - text: directement sur le site, dans la rubrique "CONTACT"
        - listitem:
          - strong: Par téléphone
          - text: /au \\d+ \\d+ \\d+ \\d+ \\d+ du lundi au vendredi \\(\\d+[hmsp]+ à \\d+[hmsp]+\\)/
      - paragraph: /Nous nous efforçons de vous répondre dans les \\d+[hmsp]+ !/
    - definition:
      - heading "Qu'est-ce que l'Offre de Bienvenue?" [level=3]
      - paragraph: /L'offre de bienvenue consiste en un bon de contre-remboursement de \\d+€ pour seulement 1€! Afin d'en profiter, vous devez acheter le produit proposé dans l'offre de bienvenue dans la boutique physique ou en ligne de votre choix\\. Ensuite vous devez nous envoyer la facture dans les \\d+ jours qui suivent votre abonnement\\. Nous procéderons au remboursement dans la limite de \\d+€ sur votre compte Paypal/
      - paragraph: /Si vous souscrivez à notre offre vous serez débité de \\d+\\.\\d+€ le premier mois pour un abonnement mensuel ou \\d+€ pour un abonnement trimestriel\\./
      - paragraph: N'hésitez pas à en profiter!
    - heading "LE PAIEMENT" [level=3]
    - definition:
      - heading "Mon paiement est-il sécurisé ?" [level=3]
      - paragraph: Toutes les transactions effectuées sur Buy-club.net sont sécurisées par le système de paiement d'un des leaders des paiements en ligne. Toutes les informations bancaires sont cryptées grâce au protocole SSL, respectant ainsi les différentes réglementations européennes. Ces données ne sont pas accessibles ni modifiables.
      - paragraph: Lorsque vous vous trouvez sur notre page de paiement, le petit cadenas en bas à droite de votre navigateur, prouve que la page est bien sécurisée selon les protocoles de sécurité en vigueur.
    - heading "LA LIVRAISON DES COMMANDES" [level=3]
    - definition:
      - heading "Quand recevrai-je ma commande Buy Club ?" [level=3]
      - paragraph: Si vous avez commandé l'offre de bienvenue, vous devez acheter le produit en question et nous envoyer la preuve d'achat afin de recevoir votre remboursement. Attention, nous n'envoyons pas les produits annoncés dans nos offres de bienvenue, il s'agit d'une offre de contre remboursement
      - paragraph: Si vous avez commandé un produit de notre boutique, vous recevrez votre commande dans un délai de 7 jours maximum !
      - paragraph: Vous pouvez suivre l’état de préparation de votre colis depuis votre Espace Membre.
      - paragraph: Si vous rencontrez une anomalie pensez à vérifier vos coordonnées postales et à contacter le service client pour plus d'informations.
    - definition:
      - heading "Y a t-il une limite de commmandes par mois?" [level=3]
      - paragraph: Non, chaque mois vous pouvez passer autant de commandes que vous le souhaitez.
    - definition:
      - heading "Le produit commandé est arrivée en mauvais état, que puis-je faire ?" [level=3]
      - paragraph:
        - text: Veuillez nous envoyer un mail accompagné d’une photo à
        - link "contact@buy-club.net":
          - /url: mailto:contact@buy-club.net
        - text: et nous trouverons une solution ensemble
    - definition:
      - heading "Est-ce possible de me faire livrer à l'étranger ou dans les DOM-TOM ?" [level=3]
      - paragraph: Malheureusement non, Buy Club livre uniquement en France Métropolitaine et corse
    - heading "LE CONTENU DE LE SHOP" [level=3]
    - definition:
      - heading "Quels produits puis-je commander sur Buy Club ?" [level=3]
      - paragraph: Notre objectif est de vous offrir une sélection de produits de grande consommation avec des réductions très intéressantes réservées aux membres du club Buy-club
    - heading "MON COMPTE" [level=3]
    - definition:
      - heading "Est-ce que je peux modifier mes informations personnelles ?" [level=3]
      - paragraph: Oui, il suffit de vous connecter à votre Espace Membre, rubrique « Modifier mes Informations personnelles ».
    - definition:
      - heading "Est-il possible de consulter l'historique de mes commandes et paiements ?" [level=3]
      - paragraph: Oui, vous trouverez ces informations dans votre Espace Membre.
    - heading "UNE QUESTION ?" [level=3]
    - paragraph: Si vous n’avez pas trouvé votre réponse...
    - link "Ecrivez-nous":
      - /url: https://buy-club.net/fr/co/contact.html
    `);
});

test('TC_VerifySideBarNotreOffreContent', async ({ page }) => {
  await page.goto('https://shop.buy-club.net/', {waitUntil: "domcontentloaded"});
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.locator('.menu-toggle').click();
  await page.getByRole('link', { name: 'Notre offre' }).click();
  await expect(page.getByRole('heading', { name: 'Notre Offre' })).toBeVisible();
  await expect(page.locator('#hw')).toMatchAriaSnapshot(`
    - heading "Notre Offre" [level=2]
    - paragraph: Envie de faire des économies et de profiter de la livraison gratuite en illimité ? Venez découvrir chaque mois nos réductions exclusives. Nous vous enverrons plusieurs mails par mois avec les produits du moment afin que vous n’oubliiez pas de profiter de celles-ci !
    - img
    - paragraph: Pour profiter de notre service rien de plus simple. Vous devez avoir un abonnement à jour, vous connecter à votre espace membre et choisir le produit qui vous intéresse sur notre boutique. Si vous ne passez pas commande, vous ne pourrez pas bénéficier de nos réductions mais vous serez tout de même prélevé de la mensualité. Buy-club.net propose un service réservé aux clients abonnés. Si vous n’êtes pas déjà abonné, n’attendez plus !
    `);
});

test('TC_VerifyFooterCGVContent', async ({ page }) => {
  await page.goto('https://shop.buy-club.net/', {waitUntil: "domcontentloaded"});
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.getByRole('link', { name: 'Cgv', exact: true }).click();
  await expect(page.getByText('CONDITIONS GÉNÉRALES DE VENTE - BUY-CLUB.NET')).toBeVisible();
  await expect(page.locator('#ts')).toMatchAriaSnapshot(`
    - paragraph:
      - strong: CONDITIONS GENERALES DE VENTE
    - paragraph:
      - strong: www.top-reduc.net
    - paragraph
    - paragraph:
      - strong: 1. Présentation
    - paragraph:
      - text: Les Présentes Conditions Générales de Vente (ci-après «
      - strong: Conditions Générales
      - text: » ou «
      - strong: CGV
      - text: ») ont pour objet de préciser les droits et obligations des parties entre
      - strong: CASSIOPEIA Digital Ltd
      - text: (ci-après la «
      - strong: Société
      - text: » ou «
      - strong: top-reduc.net
      - text: ») et toute personne ayant choisi de s’abonner au service (Ci-après l’«
      - strong: Utilisateur
      - text: »).
    - paragraph:
      - text: Tout abonnement contracté auprès de
      - strong: top-reduc.net
      - text: implique l’adhésion préalable aux présentes CGV.
    - paragraph:
      - text: "Adresse mail du service clients :"
      - link "contact@top-reduc.net":
        - /url: mailto:contact@top-reduc.net
    - paragraph:
      - text: "Numéro de téléphone du service clients :"
      - strong: /\\d+ \\d+ \\d+ \\d+ \\d+/
      - text: /\\(Du L au V de \\d+[hmsp]+ à 18h00\\)/
    - paragraph:
      - text: Adresse de
      - strong: CASSIOPEIA Digital Ltd
      - text: ":"
      - strong: /OFFICE 9, DALTON HOUSE \\d+ WINDSOR AVENUE-/
      - strong: LONDON -
      - strong: UNITED KINGDOM-
      - strong: SW19 2RR
    - paragraph:
      - text: La compagnie est immatriculée au registre des sociétés d’Angleterre et du Pays de galles sous le n°
      - strong: /\\d+/
    - paragraph:
      - text: Notre Service consiste à offrir à nos abonnés, via notre site internet
      - strong: www.top-reduc.net
      - text: "des réductions exclusives sur une sélection de produits (ci-après : «"
      - strong: le Service
      - text: »). Il est facturé mensuellement ou trimestriellement suivant le choix de l’utilisateur.
    - paragraph:
      - text: "L’abonné (ci-après : «"
      - strong: l’Abonné
      - text: ») peut commander sur notre boutique de manière illimitée. Les frais de livraison sont offerts. Chaque mois l’abonné est invité par email, à profiter des produits proposés sur le Site. En se connectant à son espace membre, l’Abonné aura accès au catalogue de produits avec des réductions exclusives réservées aux Abonnés.
    - paragraph:
      - text: L’utilisation du Site ou de toute fonctionnalité de celui-ci implique l’acceptation expresse, préalable, pleine et entière des présentes
      - strong: CGV
      - text: par l’
      - strong: Abonné
      - text: .
    - paragraph:
      - text: Les présentes
      - strong: CGV
      - text: s’appliquent à tout Abonnement réalisé sur le Site. Les
      - strong: CGV
      - text: sont exclusivement applicables aux consommateurs établis en France métropolitaine. Les
      - strong: CGV
      - text: ainsi que l’ensemble des informations contractuelles mentionnées sur le
      - strong: Site
      - text: sont rédigées, en langue française. L’acceptation en ligne des présentes
      - strong: CGV
      - text: est matérialisée par une case à cocher obligatoire.
    - paragraph
    - paragraph:
      - strong: 2. L’accès au site
    - paragraph: Pour pouvoir accéder au site, l’utilisateur est seul responsable des moyens technologiques nécessaires. Il conserve à sa charge les frais de télécommunication et d’accès à internet pour l’utilisation du Site.
    - paragraph: /L’accès au Site est possible \\d+[hmsp]+\\/\\d+, 7j\\/7, sauf en cas de force majeure ou d’un événement hors du contrôle de la Société et sous réserve des éventuelles pannes et interventions de maintenance nécessaire au bon fonctionnement de celui-ci\\./
    - paragraph: /Le Site internet est hébergé chez Anyfes Digital Almogàvers, \\d+-\\d+, Les Roquetes, Sant Père de Ribes \\d+ Barcelone, Espagne/
    - paragraph:
      - text: Le site internet est édité par la «
      - strong: Société
      - text: »
    - paragraph: "Directeur de la publication : Richard TURNER"
    - paragraph
    - paragraph:
      - strong: 3. Présentation de l’offre
    - paragraph: top-reduc.net est un club réservé à ses abonnés. Il propose une large sélection de produits (High-Tech, Bricolage, Jeux Vidéo, Audio&Vidéo…) à l’ensemble de ses Abonnés. Les réductions exclusives proposées aux membres sont toujours avec les frais de port offerts.
    - paragraph: Plusieurs fois par mois, nous envoyons notre sélection du moment par email à nos membres.
    - paragraph:
      - strong: "ATTENTION : TOUS LES ABONNES SONT FACTURES DE LA MENSUALITE TOUS LES MOIS (OU TOUS LES 3 MOIS). QU’ILS AIENT PROFITE OU NON DE LEUR ABONNEMENT EN PASSANT UNE OU PLUSIEURS COMMANDES."
    - paragraph: L'Abonné peut passer autant de commandes qu'il le souhaite pendant toute la durée de son abonnement. L’accès est ILLIMITÉ.
    - paragraph:
      - text: "Le Service consiste à mettre à disposition des réductions exclusives sur une sélection de produis à forte demande (ci-après : «"
      - strong: le Service
      - text: »), ce service est facturé par un
      - strong: Abonnement
      - text: "prélevé de façon mensuelle ou trimestrielle. L’abonné (ci-après : « l’"
      - strong: Abonné
      - text: »), en se connectant à son espace membre, aura accès au catalogue de produits avec des réductions exclusives qui lui sont réservées.
    - paragraph: Les produits proposés peuvent varier d’un mois sur l’autre. Les équipes s’efforcent de proposer aux abonnés une offre la plus large possible pour satisfaire le plus grand nombre.
    - paragraph: Les photographies et descriptions des Produits figurant sur le Site ne sont pas contractuelles.
    - paragraph
    - paragraph:
      - strong: 4. Abonnement au service
    - paragraph:
      - strong: a. L’abonnement
    - paragraph:
      - text: Les personnes qui souhaitent s’abonner à
      - strong: top-reduc.net
      - text: "devront se rendre sur le site internet : www.top-reduc.net ou sur l’une des pages proposant une offre de bienvenue réservée aux nouveaux Utilisateurs."
    - paragraph: Afin de souscrire un abonnement, l’Utilisateur garantit résider en France et pouvoir légalement conclure un contrat qui l’engage.
    - paragraph: Il doit également être majeur et responsable selon la loi en vigueur en France, ou bien avoir l’autorisation de ses parents.
    - paragraph: Pour s’abonner au Service, l’Utilisateur doit remplir le formulaire prévu à cet effet sur le Site en y complétant l’ensemble des champs. En cas de communication de données erronées, la Société ne pourra voir sa responsabilité engagée.
    - paragraph: "L’Utilisateur garantit que toutes les informations qu’il donne dans le formulaire sont exactes, à jour et sincères et ne sont entachées d’aucun caractère trompeur. Il s’engage à informer la Société à l’adresse mentionnée à l’article 1 en cas de modifications de ses coordonnées (notamment : changement d’adresse)."
    - paragraph: L’Utilisateur est informé et accepte que les informations saisies aux fins de création ou de mise à jour de son Compte valent preuve de son identité. Les informations saisies l’engagent dès leur validation, étant précisé que la Société se réserve le droit de vérifier l’exactitude des données fournies.
    - paragraph: A l’issue de son inscription, et après paiement du prix du Service conformément à l’article 5 des présentes, l’Utilisateur reçoit un email de confirmation de son Abonnement.
    - paragraph:
      - strong: b. Les « Offres de bienvenue »
    - paragraph:
      - strong: La Société
      - text: /propose régulièrement des « Offres de Bienvenue » dans le cadre de sa politique commerciale\\. Ces offres réservées aux nouveaux membres, permettent de s'abonner au Service en profitant d’une part d’un contre remboursement de \\d+€ pour seulement 1€ et d’autre part d’un accès découverte au site internet d’une durée de \\d+[hmsp]+, à l’issue duquel, et en l’absence de résiliation par l’Abonné, l’Abonnement de \\d+,\\d+€ \\(ou \\d+€ par trimestre\\) prendra effet automatiquement\\./
    - paragraph: Comment fonctionne l'offre de bienvenue top-reduc ?
    - paragraph: /Lorsque vous souscrivez à un abonnement top-reduc, vous bénéficiez automatiquement d’une période découverte de \\d+[hmsp]+ qui ne vous est facturée que 1€ ainsi qu'une offre de bienvenue pour un remboursement de \\d+€\\. Pour profiter de cette offre vous devez acheter le produit indiqué sur l'offre promotionnelle, envoyer la facture à contact@top-reduc\\.net et vous recevrez le remboursement sous \\d+ jours sur le compte paypal associé à votre email\\./
    - paragraph:
      - strong: "/Offre limitée : vous avez \\\\d+ jours pour envoyer la preuve d’achat et profiter de votre remboursement de \\\\d+€/"
    - paragraph: /A l’issu de cette période de \\d+[hmsp]+, et si vous ne nous avez pas fait part de votre souhait de vous désabonner, votre abonnement sera confirmé et vous serez prélevé \\(\\d+,\\d+€\\/mois ou \\d+€\\/trimestre\\)/
    - paragraph: /Les conditions de l’Abonnement sont stipulées dans l'article 7 précisant le prix et les modalités de paiement\\. Dans le cadre de cette offre, le Service débute \\d+[hmsp]+ suivant la confirmation d’Abonnement\\./
    - paragraph: /Les conditions de l’Abonnement sont stipulées dans l'article 5 précisant le prix et les modalités de paiement\\. Dans le cadre de cette offre, le Service débute \\d+[hmsp]+ suivant la confirmation d’Abonnement\\./
    - paragraph
    - paragraph:
      - strong: 5. Caractéristiques du Service
    - paragraph:
      - strong: a. Durée et Résiliation
    - paragraph: L’abonnement au service top-reduc.net est un abonnement mensuel ou trimestriel, sans engagement de durée, et à reconduction tacite.
    - paragraph: La résiliation peut être notifiée par l’Utilisateur à tout moment par courriel sans préavis et sans motif.
    - paragraph: "La résiliation devra être notifiée par l’Utilisateur :"
    - paragraph:
      - text: "- soit en remplissant le formulaire de résiliation en cliquant"
      - link "ici.":
        - /url: https://www.top-reduc.net/fr/rt/retractation.html
    - paragraph:
      - text: "- soit par un e-mail envoyé au Service Client de top-reduc.net à l’adresse courriel suivante :"
      - link "contact@top-reduc.net":
        - /url: mailto:contact@top-reduc.net
    - paragraph: La résiliation prendra effet à la fin de la période mensuelle en cours (mensuelle ou trimestrielle selon l’offre choisie par le client), de sorte que l’Utilisateur qui résilie son Contrat et qui aura payé pour la période en cours aura le droit d’utiliser le Site et l’application pour le reste de la période en cours. A la fin de la période en cours l’Utilisateur n’aura plus accès au Service et ne sera plus prélevé par top-reduc.net.
    - paragraph: top-reduc.net se réserve le droit de résilier le Service à tout moment en cas de non-respect par l’Abonné des présentes Conditions Générales.
    - paragraph: Elle se réserve également le droit d’arrêter de proposer le Service. L’arrêt du Service fera l’objet d’une information de l’Abonné par tout moyen approprié.
    - paragraph:
      - strong: b. Prix et Paiement
    - paragraph:
      - text: Les personnes qui souhaitent s’abonner à
      - strong: top-reduc.net
      - text: /et profiter de tous les produits et services proposés devront s’acquitter du montant de \\d+,\\d+€ TTC par mois \\(ou \\d+€ par trimestre\\)\\. Chaque mois \\(ou chaque trimestre\\), ils pourront retrouver la facture correspondante à la période au sein de leur compte client, une fois logué sur le site www\\.top-reduc\\.net/
    - paragraph: /Le paiement du montant de l’Abonnement s’effectue exclusivement par carte bancaire\\. La carte bancaire sera débitée de \\d+\\.\\d+€ chaque mois \\(ou de \\d+€ par trimestre\\) et cela jusqu’à ce que l’Utilisateur souhaite mettre fin à son Abonnement\\./
    - paragraph: En s’abonnant, l’Utilisateur garantit à la Société qu’il dispose des autorisations nécessaires pour régler le prix du service en respectant les modalités précisées dans le présent document. Il s’engage également à prendre les dispositions nécessaires afin que le prélèvement du prix par la Société puisse être effectué sans problème.
    - paragraph: Dans le cas où cela ne serait pas le cas, et/ou que la Société prenne connaissance d’un cas de fraude, ou de tentative de fraude, elle se réserve le droit de mettre fin à la relation commerciale et de résilier l’abonnement, et donc l’accès au service.
    - paragraph:
      - strong: c. Droit de Rétractation
    - paragraph: /Le souscripteur dispose d'un délai légal de rétractation de \\d+ jours calendaires, conformément à l'article L \\d+-\\d+ du Code de la consommation\\. Le délai de rétractation court à compter de la date d'abonnement au Site et expire \\d+ jours après\\. En se rétractant, l’Utilisateur résilie automatiquement son abonnement, et il reçoit le remboursement total des frais d'abonnement déjà payés\\. Ce remboursement a lieu au plus tard dans les \\d+ jours à compter de la date à laquelle La Société a reçu sa demande de rétractation\\. A la suite de sa demande de rétractation, un email sera envoyé à l’Utilisateur, précisant que sa demande a été prise en considération\\./
    - paragraph
    - paragraph
    - paragraph
    - paragraph: Cette rétractation peut être faite en utilisant le formulaire présent sur le site internet dans la rubrique « Rétractation », ou en recopiant le formulaire ci-dessous sur papier libre
    - paragraph:
      - emphasis:
        - text: Je vous notifie par la présente, ma rétractation du contrat pour la prestation de
        - strong: services top-reduc.net
    - paragraph:
      - emphasis: "Date de souscription à l'abonnement :"
    - paragraph:
      - emphasis: "Nom & Prénom :"
    - paragraph:
      - emphasis: "Adresse email utilisée:"
    - paragraph:
      - emphasis: "Date & Signature :"
    - paragraph:
      - emphasis: L'exercice du droit de rétractation entraîne la résiliation du contrat".
    - paragraph:
      - strong:
        - text: Ce formulaire de rétractation doit être adressé par email à
        - link "contact@top-reduc.net":
          - /url: mailto:contact@top-reduc.net
    - paragraph:
      - strong
    - paragraph:
      - strong:
        - strong: 6. Livraison
    - paragraph: Les livraisons de Produits sont effectuées à l’adresse de livraison indiquée par l’Abonné lors de la souscription de son abonnement.
    - paragraph: /Les livraisons sont effectuées par envoi postal, dans le délai maximum de \\d+ jours suivant la validation de la commande par l’Abonnée dans les conditions prévues à l’article 3\\./
    - paragraph:
      - text: "Dans le cas où l’Abonné ne reçoit pas le Produit commandé dans ce délai, il peut contacter top-reduc.net, par mail :"
      - link "contact@top-reduc.net.":
        - /url: mailto:contact@top-reduc.net.
      - text: /ou par téléphone au \\d+ \\d+ \\d+ \\d+ \\d+/
    - paragraph: La Société prendra toute mesure appropriée pour rechercher le Produit perdu et dès confirmation de cette perte, réadressera le Produit à l’Abonné, dans les meilleurs délais.
    - paragraph: En l’absence de livraison dans un délai raisonnable à la suite de la notification par l’Abonné du retard de livraison, celui-ci peut également demander, par email ou par téléphone, la résiliation du contrat.
    - paragraph: L’Abonné sera alors intégralement remboursé du dernier paiement en cours.
    - paragraph:
      - strong
    - paragraph:
      - strong:
        - strong: 7. Données personnelles et Bancaires
    - paragraph: La Société respecte le droit à la vie privée. Elle est amenée, lors de l’inscription de l’Utilisateur au site top-reduc.net, à collecter des données à caractère personnel (adresse email, nom, prénom, numéro de téléphone…).
    - paragraph: Dans le cas où l’Utilisateur prendrait finalement la décision de ne pas finaliser son abonnement, la Société collecte uniquement l’adresse email. Cette adresse email pourra être utilisée ultérieurement par la Société, afin de relancer le prospect qui n’aurait pas finalisé sa commande. Les autres informations ne sont conservées que pour les clients qui finalisent vraiment leur abonnement au service.
    - paragraph: En utilisant le Service, vous acceptez nos Conditions Générales et la collecte des informations, y compris le transfert des données vers un pays de l’Union européenne et/ou de l’espace économique européen.
    - paragraph: Sachez que vous pourrez revenir à tout moment sur votre consentement au partage de vos données.
    - paragraph: En souscrivant à l’Abonnement, l’Utilisateur accepte alors le traitement de ses données personnelles à des fins de gestion des Abonnements et de fourniture des Services du Site.
    - paragraph:
      - text: /Conformément aux dispositions de la loi n°\\d+-\\d+ dite loi Informatique et libertés, du 6 janvier \\d+ et au règlement de l’UE \\d+\\/\\d+ applicable depuis le \\d+ mai \\d+, l’Utilisateur dispose d'un droit d’obtention, d’effacement, d’opposition, d'accès, de rectification et de suppression de toutes données personnelles le concernant obtenues par la Société lors de l'utilisation du Service\\. Tout Abonné peut exercer ce droit en envoyant un e-mail à l'adresse/
      - link "contact@top-reduc.net.":
        - /url: mailto:contact@top-reduc.net.
    - paragraph: La Société avertit l’Utilisateur que ses données personnelles pourront être utilisées par la Société CASSIOPEIA Digital Ltd.
    - paragraph: La Société est particulièrement sensible à la sécurité de son site internet et aux informations que ses membres pourraient lui confier. C’est pour cela que nous avons contracté avec les meilleurs prestataires de paiements. Les prélèvements des mensualités sont effectués via ces prestataires et de manière totalement sécurisée. Ces derniers sont les seuls à avoir accès à vos informations bancaires.
    - paragraph:
      - strong
    - paragraph:
      - strong:
        - strong: 8. Droit applicable et compétence
    - paragraph: Les textes en vigueur exigent que certaines informations ou communications soient transmises par écrit. En utilisant ce Site, l’Utilisateur accepte que ces communications se fassent principalement par voie électronique. Pour des raisons contractuelles, l’Utilisateur accepte ce moyen de communication électronique et reconnaît que tous les contrats, avis, informations et autres communications que le Site fournira par voie électronique sont conformes aux obligations légales prévoyant que lesdites communications soient faites par écrit.
    - paragraph: La Société se réserve le droit de mettre à jour les présentes C.G.V à tout moment et pour quelque motif que ce soit. Dans une telle hypothèse, la Société vous avertira de ces modifications et vous communiquera les dernières C.G.V. En ne résiliant pas votre contrat après que nous vous aurons averti d’une modification, vous manifesterez votre acceptation d’être désormais lié par les Conditions Générales modifiées.
    - paragraph: Les présentes Conditions Générales sont régies par la loi française. En cas de contestation relative à l'interprétation, la validité et/ou l'exécution des présentes, l'Utilisateur pourra saisir à son choix, outre l'une des juridictions territorialement compétentes en vertu du code de procédure civile, la juridiction du lieu où il demeurait au moment de la conclusion du contrat ou de la survenance du fait dommageable. Si tout ou partie d’une clause des présentes s’avérait illicite, non écrite, nulle ou inapplicable, cette clause sera abandonnée, en tout ou partie, sans que la validité des autres clauses en soit affectée, le reste du présent accord conservant son plein effet.
    - paragraph: En ce qui concerne les litiges entre la Société et l’Utilisateur concernant l’Abonnement, l’Utilisateur est invité à tenter de résoudre le litige à l’amiable avant de saisir les juridictions judiciaires, en prenant le plus rapidement possible contact avec le service client de la Société.
    - paragraph:
      - text: "- en envoyant un email à l'adresse suivante :"
      - link "contact@top-reduc.net":
        - /url: mailto:contact@top-reduc.net
    - paragraph:
      - text: "- en utilisant le formulaire en ligne accessible"
      - link "ici":
        - /url: https://www.top-reduc.net/fr/co/contact.html
    - paragraph: /- en contactant le support téléphonique au numéro suivant \\d+ \\d+ \\d+ \\d+ \\d+/
    - paragraph:
      - text: /A défaut d’accord amiable, il pourra recourir à une médiation conventionnelle ou à tout autre mode alternatif de règlement des différends\\. Le Client pourra notamment saisir gratuitement, conformément aux articles L\\.\\d+-1 et suivants du Code de la consommation, la plateforme de règlement en ligne des litiges de la Commission Européenne\\. Cette plateforme est accessible/
      - link "ici":
        - /url: https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home.howitworks#heading-6
      - text: .
    - paragraph: Cette plateforme de Médiation permet aux consommateurs de déposer en ligne une demande de médiation accompagnée des documents justificatifs.
    `);  
});

test('TC_VerifyFooterFAQContent', async ({ page }) => {
  await page.goto('https://shop.buy-club.net/', {waitUntil: "domcontentloaded"});
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.locator('#menu-item-1374').getByRole('link', { name: 'FAQ' }).click();
  await expect(page.getByText('FAQ : Foire aux questions')).toBeVisible();
  await expect(page.locator('#fq')).toMatchAriaSnapshot(`
    - heading "PRÉSENTATION DU SITE" [level=3]
    - definition:
      - heading "Comment fonctionne Buy Club ?" [level=3]
    - definition:
      - heading "Y-a-t-il des frais supplémentaires en plus de l'abonnement ?" [level=3]
    - definition:
      - heading "Je souhaite de désabonner, comment faire ?" [level=3]
    - definition:
      - heading "Quand serais-je débité de mon abonnement ?" [level=3]
    - definition:
      - heading "Comment puis-je vous contacter ?" [level=3]
    - definition:
      - heading "Qu'est-ce que l'Offre de Bienvenue?" [level=3]
    - heading "LE PAIEMENT" [level=3]
    - definition:
      - heading "Mon paiement est-il sécurisé ?" [level=3]
    - heading "LA LIVRAISON DES COMMANDES" [level=3]
    - definition:
      - heading "Quand recevrai-je ma commande Buy Club ?" [level=3]
    - definition:
      - heading "Y a t-il une limite de commmandes par mois?" [level=3]
    - definition:
      - heading "Le produit commandé est arrivée en mauvais état, que puis-je faire ?" [level=3]
    - definition:
      - heading "Est-ce possible de me faire livrer à l'étranger ou dans les DOM-TOM ?" [level=3]
    - heading "LE CONTENU DE LE SHOP" [level=3]
    - definition:
      - heading "Quels produits puis-je commander sur Buy Club ?" [level=3]
    - heading "MON COMPTE" [level=3]
    - definition:
      - heading "Est-ce que je peux modifier mes informations personnelles ?" [level=3]
    - definition:
      - heading "Est-il possible de consulter l'historique de mes commandes et paiements ?" [level=3]
    - heading "UNE QUESTION ?" [level=3]
    - paragraph: Si vous n’avez pas trouvé votre réponse...
    - link "Ecrivez-nous":
      - /url: https://buy-club.net/fr/co/contact.html
    `);
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
  await expect(page.locator('#fq')).toMatchAriaSnapshot(`
    - heading "PRÉSENTATION DU SITE" [level=3]
    - definition:
      - heading "Comment fonctionne Buy Club ?" [level=3]
      - paragraph: Grace à Buy-Club, Profitez toute l’année de réductions incroyables sur vos produits préférés !
      - paragraph: HighTech, Petit électroménager, aide culinaire, Hi-Fi…
      - paragraph: /Le principe est simple, les personnes qui font partie du club bénéficient toute l’année de réductions immédiates sur leurs achats au sein de notre site\\. Pour faire partie du club il vous suffit de vous abonner pour seulement \\d+,\\d+€\\/mois ou \\d+€\\/trimestre\\./
    - definition:
      - heading "Y-a-t-il des frais supplémentaires en plus de l'abonnement ?" [level=3]
      - paragraph: /L'abonnement à Buy-Club\\.net est de \\d+,\\d+€ par mois ou \\d+€ par trimestre, ce montant vous permet de bénéficienr toute l’année de réductions immédiates sur tous vos achats au sein de notre site et les frais de livraison sont OFFERTS\\./
      - paragraph
    - definition:
      - heading "Je souhaite de désabonner, comment faire ?" [level=3]
      - paragraph: "L’abonnement n’a aucun engagement de durée, vous pouvez vous désabonner quand vous le souhaitez depuis notre site, votre espace membre ou en nous contactant par mail au : contact@buy-club.net"
    - definition:
      - heading "Quand serais-je débité de mon abonnement ?" [level=3]
      - paragraph: Vous serez débité(e) tous les mois à la date de votre premier prélèvement.
      - paragraph: "/Exemple pour un abonnement mensuel : je suis prélevé le \\\\d+ Avril, puis le \\\\d+ de chaque mois suivant jusqu’à la résiliation de mon abonnement\\\\./"
      - paragraph: "/Exemple pour un abonnement trimestriel : je suis prélevé le \\\\d+ Avril, puis le \\\\d+ du mois tous les 3 mois suivant jusqu’à la résiliation de mon abonnement\\\\./"
    - definition:
      - heading "Comment puis-je vous contacter ?" [level=3]
      - paragraph: VOUS POUVEZ NOUS CONTACTER
      - list:
        - listitem:
          - strong: Par mail
          - text: via l'adresse contact@buy-club.net
        - listitem:
          - strong: Par notre formulaire
          - text: directement sur le site, dans la rubrique "CONTACT"
        - listitem:
          - strong: Par téléphone
          - text: /au \\d+ \\d+ \\d+ \\d+ \\d+ du lundi au vendredi \\(\\d+[hmsp]+ à \\d+[hmsp]+\\)/
      - paragraph: /Nous nous efforçons de vous répondre dans les \\d+[hmsp]+ !/
    - definition:
      - heading "Qu'est-ce que l'Offre de Bienvenue?" [level=3]
      - paragraph: /L'offre de bienvenue consiste en un bon de contre-remboursement de \\d+€ pour seulement 1€! Afin d'en profiter, vous devez acheter le produit proposé dans l'offre de bienvenue dans la boutique physique ou en ligne de votre choix\\. Ensuite vous devez nous envoyer la facture dans les \\d+ jours qui suivent votre abonnement\\. Nous procéderons au remboursement dans la limite de \\d+€ sur votre compte Paypal/
      - paragraph: /Si vous souscrivez à notre offre vous serez débité de \\d+\\.\\d+€ le premier mois pour un abonnement mensuel ou \\d+€ pour un abonnement trimestriel\\./
      - paragraph: N'hésitez pas à en profiter!
    - heading "LE PAIEMENT" [level=3]
    - definition:
      - heading "Mon paiement est-il sécurisé ?" [level=3]
      - paragraph: Toutes les transactions effectuées sur Buy-club.net sont sécurisées par le système de paiement d'un des leaders des paiements en ligne. Toutes les informations bancaires sont cryptées grâce au protocole SSL, respectant ainsi les différentes réglementations européennes. Ces données ne sont pas accessibles ni modifiables.
      - paragraph: Lorsque vous vous trouvez sur notre page de paiement, le petit cadenas en bas à droite de votre navigateur, prouve que la page est bien sécurisée selon les protocoles de sécurité en vigueur.
    - heading "LA LIVRAISON DES COMMANDES" [level=3]
    - definition:
      - heading "Quand recevrai-je ma commande Buy Club ?" [level=3]
      - paragraph: Si vous avez commandé l'offre de bienvenue, vous devez acheter le produit en question et nous envoyer la preuve d'achat afin de recevoir votre remboursement. Attention, nous n'envoyons pas les produits annoncés dans nos offres de bienvenue, il s'agit d'une offre de contre remboursement
      - paragraph: Si vous avez commandé un produit de notre boutique, vous recevrez votre commande dans un délai de 7 jours maximum !
      - paragraph: Vous pouvez suivre l’état de préparation de votre colis depuis votre Espace Membre.
      - paragraph: Si vous rencontrez une anomalie pensez à vérifier vos coordonnées postales et à contacter le service client pour plus d'informations.
    - definition:
      - heading "Y a t-il une limite de commmandes par mois?" [level=3]
      - paragraph: Non, chaque mois vous pouvez passer autant de commandes que vous le souhaitez.
    - definition:
      - heading "Le produit commandé est arrivée en mauvais état, que puis-je faire ?" [level=3]
      - paragraph:
        - text: Veuillez nous envoyer un mail accompagné d’une photo à
        - link "contact@buy-club.net":
          - /url: mailto:contact@buy-club.net
        - text: et nous trouverons une solution ensemble
    - definition:
      - heading "Est-ce possible de me faire livrer à l'étranger ou dans les DOM-TOM ?" [level=3]
      - paragraph: Malheureusement non, Buy Club livre uniquement en France Métropolitaine et corse
    - heading "LE CONTENU DE LE SHOP" [level=3]
    - definition:
      - heading "Quels produits puis-je commander sur Buy Club ?" [level=3]
      - paragraph: Notre objectif est de vous offrir une sélection de produits de grande consommation avec des réductions très intéressantes réservées aux membres du club Buy-club
    - heading "MON COMPTE" [level=3]
    - definition:
      - heading "Est-ce que je peux modifier mes informations personnelles ?" [level=3]
      - paragraph: Oui, il suffit de vous connecter à votre Espace Membre, rubrique « Modifier mes Informations personnelles ».
    - definition:
      - heading "Est-il possible de consulter l'historique de mes commandes et paiements ?" [level=3]
      - paragraph: Oui, vous trouverez ces informations dans votre Espace Membre.
    - heading "UNE QUESTION ?" [level=3]
    - paragraph: Si vous n’avez pas trouvé votre réponse...
    - link "Ecrivez-nous":
      - /url: https://buy-club.net/fr/co/contact.html
    `);
});

test('TC_VerifyFooterExpeditionLivraisonContent', async ({ page }) => {
  await page.goto('https://shop.buy-club.net/', {waitUntil: "domcontentloaded"});
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.locator('#menu-item-2148').getByRole('link', { name: 'Expédition & Livraison' }).click();  await expect(page.getByRole('heading', { name: 'EXPEDITION ET LIVRAISON' })).toBeVisible();
  await expect(page.locator('#sd')).toMatchAriaSnapshot(`
    - heading "EXPEDITION ET LIVRAISON" [level=2]
    - paragraph: Nous sommes fiers d'offrir des services d'expédition qui livrent sous 7 jours ouvrables maximum après la réception du paiement. Rien n'est plus important pour nous que d'offrir à nos clients un service irréprochable. Nous continuerons à nous perfectionner pour répondre aux besoins de tous nos clients, en fournissant un service au-delà de toutes les attentes partout dans le monde.
    - heading "Comment transportez-vous les paquets?" [level=3]
    - paragraph: Les colis de notre entrepôt en Chine seront expédiés par ePacket ou EMS en fonction du poids et de la taille du produit. Les colis expédiés de notre entrepôt américain sont expédiés par USPS.
    - heading "Est-ce que vous offrez la livraison gratuite?" [level=3]
    - paragraph: Oui. Nous offrons une livraison gratuite à tous non membres VIP.
    - heading "Qu'en est-il des douanes?" [level=3]
    - paragraph: Nous ne sommes pas responsables des frais de douane une fois que les articles ont été expédiés. En achetant nos produits, vous consentez qu'un ou plusieurs paquets peuvent vous être expédiés et que vous receviez des frais supplémentaires lorsqu'ils arrivent dans votre pays.
    - heading "Combien de temps prend la livraison?" [level=3]
    - text: "Le temps de livraison varie selon l'emplacement. Ce sont nos estimations: Délai de livraison maximum – 7 jours ouvrables. *Cela n'inclut pas notre temps de traitement de 2 à 5 jours."
    - heading "Fournissez-vous des informations de suivi?" [level=3]
    - paragraph: Oui, vous recevrez un courrier électronique une fois que votre commande sera expédiée contenant vos informations de suivi. Si vous n'avez pas reçu d'informations de suivi dans les 5 jours, contactez-nous.
    - heading "Mon suivi indique \\"aucune information disponible pour le moment\\"." [level=3]
    - paragraph: Pour certaines entreprises de transport, il faut 2 à 5 jours ouvrables pour que les informations de suivi soient mises à jour sur le système. Si votre commande a été placée il y a plus de 5 jours ouvrables et qu'il n'y a toujours pas d'information sur votre numéro de suivi, contactez-nous.
    - heading "Mes articles seront-ils envoyés dans un seul paquet?" [level=3]
    - paragraph: Pour des raisons logistiques, les éléments du même achat seront parfois envoyés dans des paquets distincts, même si vous avez spécifié une livraison combinée.
    - paragraph: Si vous avez d'autres questions, contactez-nous et nous ferons de notre mieux pour vous aider.
    - heading "POLITIQUE DE REMBOURSEMENTS ET RETOURS" [level=2]
    - heading "Annulation de commande" [level=3]
    - paragraph: /Toutes les commandes peuvent être annulées avant leur expédition\\. Si votre commande a été payée et que vous devez apporter un changement ou annuler une commande, vous devez nous contacter dans les \\d+ heures\\. Une fois le processus d'emballage et d'expédition commencé, elles ne peuvent plus être annulé\\./
    - heading "Remboursements" [level=3]
    - paragraph: "Votre satisfaction est notre priorité n°1. Par conséquent, vous pouvez demander un remboursement ou une réexpédition pour les produits commandés si :"
    - list:
      - listitem: /Si vous avez ne pas Recevoir le produit dans le délai de garanti \\(\\d+ jours hors délai de traitement compris entre 2 et 5 jours\\), vous pouvez demander un remboursement ou un renvoi\\./
      - listitem: Si vous avez reçu un mauvais article, vous pouvez demander un remboursement ou un renvoi.
      - listitem: Si vous ne voulez pas du produit que vous avez reçu, vous pouvez demander un remboursement mais vous devez retourner l'objet à vos frais et l'article doit être inutilisé.
    - paragraph: "Nous faisons ne pas procéder au remboursement si :"
    - list:
      - listitem: "Votre commande n'est pas arrivée en raison d'une erreur de votre part (ex : mauvaise adresse d'expédition)"
      - listitem:
        - text: Votre commande n'est pas arrivée en raison de circonstances exceptionnelles hors de notre contrôle
        - link "buy-club.net":
          - /url: /
        - text: "(ex : non dédouané par les douanes, retardé par une catastrophe naturelle)."
      - listitem: D'autres circonstances exceptionnelles hors de notre contrôle https://shop.buy-club.net
    - paragraph:
      - text: /\\*Vous pouvez soumettre des demandes de remboursement dans les \\d+ jours suivant la fin de la période de livraison garantie \\(\\d+ jours\\)\\. Vous pouvez le faire en envoyant un message sur/
      - link "Contactez-nous":
        - /url: https://shop.buy-club.net/contact-us/
      - text: page
    - paragraph: /Si le remboursement est approuvé, vous serez alors crédité automatiquement sur votre carte de crédit ou via le mode de paiement que vous avez choisi dans un délai de \\d+ jours\\./
    - heading "Echanges" [level=3]
    - paragraph: Si, pour une raison quelconque, vous souhaitez échanger votre produit, vous devez nous contacter en premier lieu et nous vous guiderons dans les étapes à suivre.
    - paragraph: Ne pas nous renvoyer votre achat si nous ne vous autorisons pas à le faire.
    `);
});

test('TC_VerifyFooterPolitiqueDeRemboursementEtContent', async ({ page }) => {
  await page.goto('https://shop.buy-club.net/', {waitUntil: "domcontentloaded"});
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.locator('#menu-item-1375').getByRole('link', { name: 'Politique de remboursement et' }).click();
  await expect(page.locator('#rp').getByText('Politique de remboursement et')).toBeVisible();
  await expect(page.locator('#rp')).toMatchAriaSnapshot(`
    - heading "Annulation de commande" [level=3]
    - paragraph: /Toutes les commandes peuvent être annulées jusqu’à leur expédition\\. Si votre commande a été payée et que vous devez la modifier ou l’annuler, veuillez nous contacter dans les \\d+ heures\\./
    - heading "Remboursements" [level=3]
    - paragraph: Votre satisfaction est notre priorité n ° 1. Nous voulons que vous achetiez en toute confiance. C’est pourquoi nous offrons fièrement une garantie de satisfaction absolue qui garantit que vous recevrez votre article à temps et comme décrit.
    - paragraph: "Notre priorité absolue est de vous faire plaisir, afin que tous ceux qui achètent sur buy-club.net bénéficient des garanties suivantes:"
    - list:
      - listitem: remboursement total si vous ne recevez pas votre commande;
      - listitem: /remboursement total si votre commande n’arrive pas dans le délai garanti \\(\\d+ jours ouvrables hors traitement 2-5 jours ouvrables\\)/
      - listitem: remboursement total ou partiel si l’article n’est pas tel que décrit
    - paragraph: "Les remboursements complets ne sont pas disponibles dans les circonstances suivantes:"
    - list:
      - listitem: votre commande n’arrive pas en raison de facteurs sous votre contrôle (par exemple, fournir la mauvaise adresse de livraison)
      - listitem: votre commande n’arrive pas en raison de circonstances exceptionnelles hors de notre contrôle (par exemple non dédouanées, retardées par une catastrophe naturelle).
    - paragraph:
      - text: /Tous nos produits bénéficient d’une garantie de remboursement de \\d+ jours\\. Envoyez-nous simplement un message sur la page Contactez-nous ou/
      - link "contactez-nous":
        - /url: https://buy-club.net/fr/co/contact.html
      - text: sur contact@buy-club.net et nous vous rembourserons le prix d’achatt.
    - heading "Retours faciles" [level=3]
    - paragraph: /Tous nos produits bénéficient d’une garantie de remboursement de \\d+ jours\\. Contactez-nous et nous vous rembourserons le prix d’achat\\./
    - paragraph: Nous sommes fiers de tout ce que nous vendons. Si vous n’êtes pas satisfait de votre achat, vous pouvez le retourner pour un remplacement ou un remboursement. Aucune question posée! Vous devez par contre le retourner à vos frais.
    - paragraph: Veuillez nous contacter d’abord et nous vous guiderons à travers les étapes. Nous sommes toujours prêts à vous offrir les meilleures solutions!
    - paragraph: Veuillez ne pas nous renvoyer votre achat à moins que nous ne vous y autorisons.
    `);
});

test('TC_VerifyFooterPolitiqueDeConfidentialiteContent', async ({ page }) => {
  await page.goto('https://shop.buy-club.net/', {waitUntil: "domcontentloaded"});
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await page.locator('#menu-item-1376').getByRole('link', { name: 'Politique de Confidentialité' }).click();
  await expect(page.getByText('Politique de protection des données personnelles')).toBeVisible();
  await expect(page.locator('#pp')).toMatchAriaSnapshot(`
    - paragraph:
      - strong: Politique de Protection des Données à Caractère Personnel
    - paragraph:
      - text: Le site buy-club.net accessible via le lien suivant
      - link "buy-club.net":
        - /url: buy-club.net
      - text: est édité par la société CASSIOPEIA DIGITAL LTD, immatriculée au
      - strong: /OFFICE 9, DALTON HOUSE \\d+ WINDSOR AVENUE -/
      - strong: LONDON-
      - strong: UNITED KINGDOM -
      - strong: SW19 2RR
      - text: /, enregistrée sous le numéro \\d+\\. La présente Politique de Protection des données à caractère personne vous informe de manière transparente sur notre politique en matière de sécurité, de protection et de confidentialité des traitements effectués sur les données à caractère personnel que vous nous confiez lorsque vous naviguez sur le site\\./
    - paragraph:
      - strong: Présentation
    - paragraph: CASSIOPEIA DIGITAL LTD, est une société internationale évoluant dans le domaine du e-commerce et spécialisée dans la fourniture de services par abonnement.
    - paragraph: En accédant à l’un de sites édités par la société CASSIOPEIA DIGITAL LTD, et en utilisant les services proposés, l’Utilisateur reconnaît avoir lu et compris la présente Politique générale relative à la protection des données personnelles, ainsi que les pratiques de recueil de consentement, de collecte et de traitement des informations décrites dans ce document.
    - paragraph: La société CASSIOPEIA DIGITAL LTD s’est engagée à respecter toutes les obligations légales en matière de protection des données à caractère personnel, notamment en s’engageant dans la conformité au Règlement Général pour la Protection des Données et à la Loi Informatique et Libertés.
    - paragraph: /Règlement \\(UE\\) \\d+\\/\\d+, dit Règlement Général pour la Protection des Données \\(« RGPD »\\) et à la Loi n° \\d+-\\d+ du 6 janvier \\d+ relative à l’informatique, aux fichiers et aux libertés, modifiée par la loi \\d+-\\d+ du \\d+ juin \\d+ \\(« Loi Informatique et Libertés »\\)\\./
    - paragraph: "Conformément à la Loi Informatique et Libertés, et le Règlement Général pour la Protection des Données la société CASSIOPEIA DIGITAL LTD s’engage à :"
    - list:
      - listitem: ne traiter que des données loyalement et licitement collectées
      - listitem: ne traiter les données ainsi collectées que dans le cadre des finalités déterminées, explicites et légitimes
      - listitem: ne traiter que les données adéquates et pertinentes et non excessives au regard de la finalité de ses traitements
      - listitem: prendre toutes précautions utiles afin de préserver la sécurité des données, afin notamment d’empêcher qu’elles ne soient déformées, altérées, endommagées
      - listitem: ne pas communiquer ces données à des tiers en dehors de l’entreprise sans en informer les personnes.
    - paragraph:
      - strong: Coordonnées du responsable de traitements
    - paragraph:
      - text: "Adresse postale :"
      - strong: /OFFICE 9, DALTON HOUSE \\d+ WINDSOR AVENUE -/
      - strong: LONDON-
      - strong: UNITED KINGDOM -
      - strong: SW19 2RR
      - text: "/Courriel : contact@buy-club\\\\.net Téléphone : \\\\d+ \\\\d+ \\\\d+ \\\\d+ \\\\d+ Section du site web :/"
      - link "https://buy-club.net/":
        - /url: ../../../
    - paragraph:
      - strong: Sous-traitant hébergeur du site et des données
    - paragraph: "Société : ANYFES,"
    - paragraph: Type :LLC
    - paragraph: "/Siège social : C\\\\/ ALMOGÀVERS, \\\\d+-\\\\d+, \\\\d+ LES ROQUETES, Espagne/"
    - paragraph:
      - strong: Collecte et Utilisation des données collectées
    - paragraph: Des données à caractère personnel peuvent être collectées et/ou traitées par la société CASSIOPEIA DIGITAL LTD lorsque vous vous inscrivez au site buy-club.net ou que vous passez une commande sur une de pages du site buy-club.net.
    - paragraph:
      - strong: Base légale de nos traitements de données
    - paragraph: "Nous ne sommes en droit de traiter vos données qu’à partir du moment :"
    - paragraph: – où vous nous en donnez explicitement l’autorisation en validant la case « J’accepte… » (ou tout autre mention similaire) présente sur le formulaire d’inscription.
    - paragraph: – puis par la suite, si nous avons une relation contractuelle, le traitement sera légitime et nécessaire dans le cadre du suivi de celle-ci, dans la mesure où vous serez partie ou associée à l’exécution des mesures précontractuelles ou contractuelles engagées avec nous.
    - paragraph:
      - strong: Finalité de la collecte
    - paragraph: "La société CASSIOPEIA DIGITAL LTD utilise les données à caractère personnel qui lui sont confiées directement par les Utilisateurs ou indirectement par ses partenaires exclusivement :"
    - list:
      - listitem:
        - text: Pour vous faire parvenir les commandes passées sur le site
        - link "https://buy-club.net":
          - /url: ../../../
        - text: ;
      - listitem: Pour le traitement des demandes d’informations adressées via le site web
      - listitem: Pour prendre contact par téléphone ou par voie dématérialisée (courriel) avec les personnes l’ayant contacté
      - listitem: Pour que la société CASSIOPEIA DIGITAL LTD et/ou ses partenaires vous adresse des lettres d’information (Newsletters) auxquelles vous vous êtes abonnés
      - listitem: Pour répondre à nos obligations découlant du RGPD et relatives au stockage et à la suppression des données collectées et traitées.
    - paragraph:
      - strong: Catégories de données collectées
    - paragraph: Nous nous abstenons, s’agissant des informations nominatives que vous nous confiez de toute utilisation détournée, et plus généralement, de tout acte susceptible de porter atteinte à votre vie privée ou à votre réputation. La société CASSIOPEIA DIGITAL LTD peut néanmoins être amenée à collecter indirectement des informations à votre égard via ses partenaires. Dans ce cas, la société CASSIOPEIA DIGITAL LTD s’assure auprès de ses partenaires que vous avez consentis à ce qu’une telle collecte soit opérée.
    - paragraph: La société CASSIOPEIA DIGITAL LTD veille également à ne collecter que des données strictement nécessaires à la finalité déclarée des différents traitements mis en œuvre par la société.
    - paragraph: "Dans le cadre de ses activités d’ordre commercial les données suivantes sont notamment collectées auprès des Utilisateurs :"
    - list:
      - listitem: Nom Prénom Civilité
      - listitem: Adresse courriel
      - listitem: Adresse postale
      - listitem: Adresse IP, qui est un numéro d’identification d’un appareil connecté à un réseau utilisant le protocole Internet
      - listitem: TimeStamp (horodatage), qui permet d’associer une date/heure à une donnée/action informatique;
      - listitem: Le numéro de téléphone.
    - paragraph:
      - strong: Informations relatives aux enfants
    - paragraph: Les sites édités par la société CASSIOPEIA DIGITAL LTD sont destinés à un public majeur. Aussi, la société CASSIOPEIA DIGITAL LTD n’a pas vocation à collecter des données d’enfant. Dans le cas où un enfant enverrait des données personnelles à CASSIOPEIA DIGITAL LTD via les sites qu’elle édite, la société CASSIOPEIA DIGITAL LTD mettra tout en œuvre pour assurer la suppression et/ou la destruction des données transmises.
    - paragraph:
      - strong: Destinataires de vos données
    - paragraph: Vos données à caractère personnel ne seront pas transmises à des tiers, sauf pour les seuls besoins des finalités que vous aurez acceptées lors du recueil de votre consentement.
    - paragraph: "La société CASSIOPEIA DIGITAL LTD peut par ailleurs être amenée à divulguer ou transférer vos données personnelles à des tiers dans les circonstances particulières suivantes:"
    - list:
      - listitem: du fait de la loi, dans le cadre d’une procédure en justice, d’un litige et/ou d’une requête des autorités publiques de votre pays de résidence ou autre
      - listitem: si la divulgation est nécessaire à des fins de sécurité nationale, d’application de la loi ou autre sujet d’intérêt public
      - listitem: pour l’envoi de commandes auprès des sous-traitants logistique.
    - paragraph:
      - strong: Durée de conservation de vos informations
    - paragraph: La société CASSIOPEIA DIGITAL LTD, dans le respect de la législation en vigueur, ne conservera les Données à Caractère Personnel de ses prospects que pour la durée nécessaire au bon déroulement de l’engagement contractuel, et une année au plus au-delà.
    - paragraph: Les données à caractère personnel des clients seront conservées en base active cinq ans au plus, après la fin de la relation contractuelle.
    - paragraph: Les données collectées auprès des personnes concernées via leurs inscriptions aux newsletters de CASSIOPEIA DIGITAL LTD seront conservées jusqu’à la demande de désabonnement des personnes concernées.
    - paragraph:
      - strong: Exercice des droits
    - paragraph: /Conformément à la « Loi Informatique et Libertés » du 6 janvier \\d+ modifiée, en justifiant de votre identité, vous bénéficiez d’un droit d’accès et de rectification ou de suppression des informations vous concernant\\. Vous pouvez également, pour des motifs légitimes, vous opposer au traitement de ces données ou en demander la portabilité\\./
    - paragraph: "Pour exercer vos différents droits définis par la loi, vous devrez justifier de votre identité et optionnellement :"
    - list:
      - listitem: nous indiquer les raisons pour lesquelles vous souhaitez les exercer
      - listitem: définir précisément le périmètre des données dont vous souhaitez la copie
      - listitem: nous préciser le format de données que vous souhaitez en retour
    - paragraph: Vous contacterez à cet effet le correspondant de la CNIL responsable du suivi de notre conformité.
    - paragraph: L’opposition partielle (ou demande simple de désinscription) est un droit que vous pourrez exercer au travers d’un lien présent sur chaque courriel que vous recevrez de notre part.
    - paragraph:
      - strong: Information exhaustive de tous vos droits
    - paragraph:
      - text: "Pour plus d’informations sur vos droits, connectez-vous sur le site de la CNIL à l’adresse :"
      - link "https://www.cnil.fr":
        - /url: https://www.cnil.fr
    - paragraph: Vous avez également le droit de saisir directement la Commission si vous estimez que vos droits ont été violés, ou que notre société ne respecte pas ses engagements en matière de protection des données.
    - paragraph:
      - strong: Loi applicable et attribution de juridiction
    - paragraph: Notre site web et notre activité sont régis par le droit français. En cas de litige résultant de votre utilisation de nos sites web ou de son activité, les tribunaux français seront exclusivement compétents.
    - paragraph:
      - strong: Modification de la présente politique de Protection des Données
    - paragraph: La société CASSIOPEIA DIGITAL LTD se réserve la possibilité de modifier à tout moment la présente politique de Protection des Données, par exemple pour tenir compte des nouvelles données récoltées, de modifications de nos traitements ou de nos finalités, mais aussi pour nous mettre en conformité en cas de changement des certaines dispositions législatives et réglementaires, notamment vis-à-vis de la Loi Informatique et Libertés, ou du RGPD.
    - paragraph: Nous vous encourageons à consulter régulièrement ce document pour vous tenir informé des modifications éventuelles. Toutefois, en cas de modification substantielle de notre politique de confidentialité des données, vous en serez averti par e-mail ou lors de votre connexion sur le site.
    `);
});

test('TC_PSP_02_VerifyEmailAfterPurchaseMembership', async ({ page }) => {
  await page.goto('https://shop.buy-club.net/', {waitUntil: "domcontentloaded"});
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

test('TC_PSP_05_TC_PSP_07_VerifyEmailAfterPurchaseProduct', async ({ page }) => {
  await page.goto('https://shop.buy-club.net/');
  await page.waitForLoadState('networkidle');
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

test('TC_PSP_09_VerifyEmailAfterFillingUpContact', async ({ page }) => {
  await page.goto('https://shop.buy-club.net/');
  await page.waitForLoadState('networkidle');
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

test('TC_VerifySabonnerCGVContent', async ({ page }) => {
  await page.goto('https://shop.buy-club.net/', {waitUntil: "domcontentloaded"});
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await expect(page.getByRole('link', { name: 'S’abonner' })).toBeVisible();
  await page.getByRole('link', { name: 'S’abonner' }).click();
  await expect(page.getByText('S’abonner à buy-club.net')).toBeVisible();
  await expect(page.getByRole('link', { name: 'conditions générales de vente' })).toBeVisible();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'conditions générales de vente' }).click();
  const page1 = await page1Promise;
  await expect(page1.getByText('CONDITIONS GÉNÉRALES DE VENTE - BUY-CLUB.NET')).toBeVisible();
  await expect(page1.locator('#ts')).toMatchAriaSnapshot(`
    - paragraph:
      - strong: CONDITIONS GENERALES DE VENTE
    - paragraph:
      - strong: www.top-reduc.net
    - paragraph
    - paragraph:
      - strong: 1. Présentation
    - paragraph:
      - text: Les Présentes Conditions Générales de Vente (ci-après «
      - strong: Conditions Générales
      - text: » ou «
      - strong: CGV
      - text: ») ont pour objet de préciser les droits et obligations des parties entre
      - strong: CASSIOPEIA Digital Ltd
      - text: (ci-après la «
      - strong: Société
      - text: » ou «
      - strong: top-reduc.net
      - text: ») et toute personne ayant choisi de s’abonner au service (Ci-après l’«
      - strong: Utilisateur
      - text: »).
    - paragraph:
      - text: Tout abonnement contracté auprès de
      - strong: top-reduc.net
      - text: implique l’adhésion préalable aux présentes CGV.
    - paragraph:
      - text: "Adresse mail du service clients :"
      - link "contact@top-reduc.net":
        - /url: mailto:contact@top-reduc.net
    - paragraph:
      - text: "Numéro de téléphone du service clients :"
      - strong: /\\d+ \\d+ \\d+ \\d+ \\d+/
      - text: /\\(Du L au V de \\d+[hmsp]+ à 18h00\\)/
    - paragraph:
      - text: Adresse de
      - strong: CASSIOPEIA Digital Ltd
      - text: ":"
      - strong: /OFFICE 9, DALTON HOUSE \\d+ WINDSOR AVENUE-/
      - strong: LONDON -
      - strong: UNITED KINGDOM-
      - strong: SW19 2RR
    - paragraph:
      - text: La compagnie est immatriculée au registre des sociétés d’Angleterre et du Pays de galles sous le n°
      - strong: /\\d+/
    - paragraph:
      - text: Notre Service consiste à offrir à nos abonnés, via notre site internet
      - strong: www.top-reduc.net
      - text: "des réductions exclusives sur une sélection de produits (ci-après : «"
      - strong: le Service
      - text: »). Il est facturé mensuellement ou trimestriellement suivant le choix de l’utilisateur.
    - paragraph:
      - text: "L’abonné (ci-après : «"
      - strong: l’Abonné
      - text: ») peut commander sur notre boutique de manière illimitée. Les frais de livraison sont offerts. Chaque mois l’abonné est invité par email, à profiter des produits proposés sur le Site. En se connectant à son espace membre, l’Abonné aura accès au catalogue de produits avec des réductions exclusives réservées aux Abonnés.
    - paragraph:
      - text: L’utilisation du Site ou de toute fonctionnalité de celui-ci implique l’acceptation expresse, préalable, pleine et entière des présentes
      - strong: CGV
      - text: par l’
      - strong: Abonné
      - text: .
    - paragraph:
      - text: Les présentes
      - strong: CGV
      - text: s’appliquent à tout Abonnement réalisé sur le Site. Les
      - strong: CGV
      - text: sont exclusivement applicables aux consommateurs établis en France métropolitaine. Les
      - strong: CGV
      - text: ainsi que l’ensemble des informations contractuelles mentionnées sur le
      - strong: Site
      - text: sont rédigées, en langue française. L’acceptation en ligne des présentes
      - strong: CGV
      - text: est matérialisée par une case à cocher obligatoire.
    - paragraph
    - paragraph:
      - strong: 2. L’accès au site
    - paragraph: Pour pouvoir accéder au site, l’utilisateur est seul responsable des moyens technologiques nécessaires. Il conserve à sa charge les frais de télécommunication et d’accès à internet pour l’utilisation du Site.
    - paragraph: /L’accès au Site est possible \\d+[hmsp]+\\/\\d+, 7j\\/7, sauf en cas de force majeure ou d’un événement hors du contrôle de la Société et sous réserve des éventuelles pannes et interventions de maintenance nécessaire au bon fonctionnement de celui-ci\\./
    - paragraph: /Le Site internet est hébergé chez Anyfes Digital Almogàvers, \\d+-\\d+, Les Roquetes, Sant Père de Ribes \\d+ Barcelone, Espagne/
    - paragraph:
      - text: Le site internet est édité par la «
      - strong: Société
      - text: »
    - paragraph: "Directeur de la publication : Richard TURNER"
    - paragraph
    - paragraph:
      - strong: 3. Présentation de l’offre
    - paragraph: top-reduc.net est un club réservé à ses abonnés. Il propose une large sélection de produits (High-Tech, Bricolage, Jeux Vidéo, Audio&Vidéo…) à l’ensemble de ses Abonnés. Les réductions exclusives proposées aux membres sont toujours avec les frais de port offerts.
    - paragraph: Plusieurs fois par mois, nous envoyons notre sélection du moment par email à nos membres.
    - paragraph:
      - strong: "ATTENTION : TOUS LES ABONNES SONT FACTURES DE LA MENSUALITE TOUS LES MOIS (OU TOUS LES 3 MOIS). QU’ILS AIENT PROFITE OU NON DE LEUR ABONNEMENT EN PASSANT UNE OU PLUSIEURS COMMANDES."
    - paragraph: L'Abonné peut passer autant de commandes qu'il le souhaite pendant toute la durée de son abonnement. L’accès est ILLIMITÉ.
    - paragraph:
      - text: "Le Service consiste à mettre à disposition des réductions exclusives sur une sélection de produis à forte demande (ci-après : «"
      - strong: le Service
      - text: »), ce service est facturé par un
      - strong: Abonnement
      - text: "prélevé de façon mensuelle ou trimestrielle. L’abonné (ci-après : « l’"
      - strong: Abonné
      - text: »), en se connectant à son espace membre, aura accès au catalogue de produits avec des réductions exclusives qui lui sont réservées.
    - paragraph: Les produits proposés peuvent varier d’un mois sur l’autre. Les équipes s’efforcent de proposer aux abonnés une offre la plus large possible pour satisfaire le plus grand nombre.
    - paragraph: Les photographies et descriptions des Produits figurant sur le Site ne sont pas contractuelles.
    - paragraph
    - paragraph:
      - strong: 4. Abonnement au service
    - paragraph:
      - strong: a. L’abonnement
    - paragraph:
      - text: Les personnes qui souhaitent s’abonner à
      - strong: top-reduc.net
      - text: "devront se rendre sur le site internet : www.top-reduc.net ou sur l’une des pages proposant une offre de bienvenue réservée aux nouveaux Utilisateurs."
    - paragraph: Afin de souscrire un abonnement, l’Utilisateur garantit résider en France et pouvoir légalement conclure un contrat qui l’engage.
    - paragraph: Il doit également être majeur et responsable selon la loi en vigueur en France, ou bien avoir l’autorisation de ses parents.
    - paragraph: Pour s’abonner au Service, l’Utilisateur doit remplir le formulaire prévu à cet effet sur le Site en y complétant l’ensemble des champs. En cas de communication de données erronées, la Société ne pourra voir sa responsabilité engagée.
    - paragraph: "L’Utilisateur garantit que toutes les informations qu’il donne dans le formulaire sont exactes, à jour et sincères et ne sont entachées d’aucun caractère trompeur. Il s’engage à informer la Société à l’adresse mentionnée à l’article 1 en cas de modifications de ses coordonnées (notamment : changement d’adresse)."
    - paragraph: L’Utilisateur est informé et accepte que les informations saisies aux fins de création ou de mise à jour de son Compte valent preuve de son identité. Les informations saisies l’engagent dès leur validation, étant précisé que la Société se réserve le droit de vérifier l’exactitude des données fournies.
    - paragraph: A l’issue de son inscription, et après paiement du prix du Service conformément à l’article 5 des présentes, l’Utilisateur reçoit un email de confirmation de son Abonnement.
    - paragraph:
      - strong: b. Les « Offres de bienvenue »
    - paragraph:
      - strong: La Société
      - text: /propose régulièrement des « Offres de Bienvenue » dans le cadre de sa politique commerciale\\. Ces offres réservées aux nouveaux membres, permettent de s'abonner au Service en profitant d’une part d’un contre remboursement de \\d+€ pour seulement 1€ et d’autre part d’un accès découverte au site internet d’une durée de \\d+[hmsp]+, à l’issue duquel, et en l’absence de résiliation par l’Abonné, l’Abonnement de \\d+,\\d+€ \\(ou \\d+€ par trimestre\\) prendra effet automatiquement\\./
    - paragraph: Comment fonctionne l'offre de bienvenue top-reduc ?
    - paragraph: /Lorsque vous souscrivez à un abonnement top-reduc, vous bénéficiez automatiquement d’une période découverte de \\d+[hmsp]+ qui ne vous est facturée que 1€ ainsi qu'une offre de bienvenue pour un remboursement de \\d+€\\. Pour profiter de cette offre vous devez acheter le produit indiqué sur l'offre promotionnelle, envoyer la facture à contact@top-reduc\\.net et vous recevrez le remboursement sous \\d+ jours sur le compte paypal associé à votre email\\./
    - paragraph:
      - strong: "/Offre limitée : vous avez \\\\d+ jours pour envoyer la preuve d’achat et profiter de votre remboursement de \\\\d+€/"
    - paragraph: /A l’issu de cette période de \\d+[hmsp]+, et si vous ne nous avez pas fait part de votre souhait de vous désabonner, votre abonnement sera confirmé et vous serez prélevé \\(\\d+,\\d+€\\/mois ou \\d+€\\/trimestre\\)/
    - paragraph: /Les conditions de l’Abonnement sont stipulées dans l'article 7 précisant le prix et les modalités de paiement\\. Dans le cadre de cette offre, le Service débute \\d+[hmsp]+ suivant la confirmation d’Abonnement\\./
    - paragraph: /Les conditions de l’Abonnement sont stipulées dans l'article 5 précisant le prix et les modalités de paiement\\. Dans le cadre de cette offre, le Service débute \\d+[hmsp]+ suivant la confirmation d’Abonnement\\./
    - paragraph
    - paragraph:
      - strong: 5. Caractéristiques du Service
    - paragraph:
      - strong: a. Durée et Résiliation
    - paragraph: L’abonnement au service top-reduc.net est un abonnement mensuel ou trimestriel, sans engagement de durée, et à reconduction tacite.
    - paragraph: La résiliation peut être notifiée par l’Utilisateur à tout moment par courriel sans préavis et sans motif.
    - paragraph: "La résiliation devra être notifiée par l’Utilisateur :"
    - paragraph:
      - text: "- soit en remplissant le formulaire de résiliation en cliquant"
      - link "ici.":
        - /url: https://www.top-reduc.net/fr/rt/retractation.html
    - paragraph:
      - text: "- soit par un e-mail envoyé au Service Client de top-reduc.net à l’adresse courriel suivante :"
      - link "contact@top-reduc.net":
        - /url: mailto:contact@top-reduc.net
    - paragraph: La résiliation prendra effet à la fin de la période mensuelle en cours (mensuelle ou trimestrielle selon l’offre choisie par le client), de sorte que l’Utilisateur qui résilie son Contrat et qui aura payé pour la période en cours aura le droit d’utiliser le Site et l’application pour le reste de la période en cours. A la fin de la période en cours l’Utilisateur n’aura plus accès au Service et ne sera plus prélevé par top-reduc.net.
    - paragraph: top-reduc.net se réserve le droit de résilier le Service à tout moment en cas de non-respect par l’Abonné des présentes Conditions Générales.
    - paragraph: Elle se réserve également le droit d’arrêter de proposer le Service. L’arrêt du Service fera l’objet d’une information de l’Abonné par tout moyen approprié.
    - paragraph:
      - strong: b. Prix et Paiement
    - paragraph:
      - text: Les personnes qui souhaitent s’abonner à
      - strong: top-reduc.net
      - text: /et profiter de tous les produits et services proposés devront s’acquitter du montant de \\d+,\\d+€ TTC par mois \\(ou \\d+€ par trimestre\\)\\. Chaque mois \\(ou chaque trimestre\\), ils pourront retrouver la facture correspondante à la période au sein de leur compte client, une fois logué sur le site www\\.top-reduc\\.net/
    - paragraph: /Le paiement du montant de l’Abonnement s’effectue exclusivement par carte bancaire\\. La carte bancaire sera débitée de \\d+\\.\\d+€ chaque mois \\(ou de \\d+€ par trimestre\\) et cela jusqu’à ce que l’Utilisateur souhaite mettre fin à son Abonnement\\./
    - paragraph: En s’abonnant, l’Utilisateur garantit à la Société qu’il dispose des autorisations nécessaires pour régler le prix du service en respectant les modalités précisées dans le présent document. Il s’engage également à prendre les dispositions nécessaires afin que le prélèvement du prix par la Société puisse être effectué sans problème.
    - paragraph: Dans le cas où cela ne serait pas le cas, et/ou que la Société prenne connaissance d’un cas de fraude, ou de tentative de fraude, elle se réserve le droit de mettre fin à la relation commerciale et de résilier l’abonnement, et donc l’accès au service.
    - paragraph:
      - strong: c. Droit de Rétractation
    - paragraph: /Le souscripteur dispose d'un délai légal de rétractation de \\d+ jours calendaires, conformément à l'article L \\d+-\\d+ du Code de la consommation\\. Le délai de rétractation court à compter de la date d'abonnement au Site et expire \\d+ jours après\\. En se rétractant, l’Utilisateur résilie automatiquement son abonnement, et il reçoit le remboursement total des frais d'abonnement déjà payés\\. Ce remboursement a lieu au plus tard dans les \\d+ jours à compter de la date à laquelle La Société a reçu sa demande de rétractation\\. A la suite de sa demande de rétractation, un email sera envoyé à l’Utilisateur, précisant que sa demande a été prise en considération\\./
    - paragraph
    - paragraph
    - paragraph
    - paragraph: Cette rétractation peut être faite en utilisant le formulaire présent sur le site internet dans la rubrique « Rétractation », ou en recopiant le formulaire ci-dessous sur papier libre
    - paragraph:
      - emphasis:
        - text: Je vous notifie par la présente, ma rétractation du contrat pour la prestation de
        - strong: services top-reduc.net
    - paragraph:
      - emphasis: "Date de souscription à l'abonnement :"
    - paragraph:
      - emphasis: "Nom & Prénom :"
    - paragraph:
      - emphasis: "Adresse email utilisée:"
    - paragraph:
      - emphasis: "Date & Signature :"
    - paragraph:
      - emphasis: L'exercice du droit de rétractation entraîne la résiliation du contrat".
    - paragraph:
      - strong:
        - text: Ce formulaire de rétractation doit être adressé par email à
        - link "contact@top-reduc.net":
          - /url: mailto:contact@top-reduc.net
    - paragraph:
      - strong
    - paragraph:
      - strong:
        - strong: 6. Livraison
    - paragraph: Les livraisons de Produits sont effectuées à l’adresse de livraison indiquée par l’Abonné lors de la souscription de son abonnement.
    - paragraph: /Les livraisons sont effectuées par envoi postal, dans le délai maximum de \\d+ jours suivant la validation de la commande par l’Abonnée dans les conditions prévues à l’article 3\\./
    - paragraph:
      - text: "Dans le cas où l’Abonné ne reçoit pas le Produit commandé dans ce délai, il peut contacter top-reduc.net, par mail :"
      - link "contact@top-reduc.net.":
        - /url: mailto:contact@top-reduc.net.
      - text: /ou par téléphone au \\d+ \\d+ \\d+ \\d+ \\d+/
    - paragraph: La Société prendra toute mesure appropriée pour rechercher le Produit perdu et dès confirmation de cette perte, réadressera le Produit à l’Abonné, dans les meilleurs délais.
    - paragraph: En l’absence de livraison dans un délai raisonnable à la suite de la notification par l’Abonné du retard de livraison, celui-ci peut également demander, par email ou par téléphone, la résiliation du contrat.
    - paragraph: L’Abonné sera alors intégralement remboursé du dernier paiement en cours.
    - paragraph:
      - strong
    - paragraph:
      - strong:
        - strong: 7. Données personnelles et Bancaires
    - paragraph: La Société respecte le droit à la vie privée. Elle est amenée, lors de l’inscription de l’Utilisateur au site top-reduc.net, à collecter des données à caractère personnel (adresse email, nom, prénom, numéro de téléphone…).
    - paragraph: Dans le cas où l’Utilisateur prendrait finalement la décision de ne pas finaliser son abonnement, la Société collecte uniquement l’adresse email. Cette adresse email pourra être utilisée ultérieurement par la Société, afin de relancer le prospect qui n’aurait pas finalisé sa commande. Les autres informations ne sont conservées que pour les clients qui finalisent vraiment leur abonnement au service.
    - paragraph: En utilisant le Service, vous acceptez nos Conditions Générales et la collecte des informations, y compris le transfert des données vers un pays de l’Union européenne et/ou de l’espace économique européen.
    - paragraph: Sachez que vous pourrez revenir à tout moment sur votre consentement au partage de vos données.
    - paragraph: En souscrivant à l’Abonnement, l’Utilisateur accepte alors le traitement de ses données personnelles à des fins de gestion des Abonnements et de fourniture des Services du Site.
    - paragraph:
      - text: /Conformément aux dispositions de la loi n°\\d+-\\d+ dite loi Informatique et libertés, du 6 janvier \\d+ et au règlement de l’UE \\d+\\/\\d+ applicable depuis le \\d+ mai \\d+, l’Utilisateur dispose d'un droit d’obtention, d’effacement, d’opposition, d'accès, de rectification et de suppression de toutes données personnelles le concernant obtenues par la Société lors de l'utilisation du Service\\. Tout Abonné peut exercer ce droit en envoyant un e-mail à l'adresse/
      - link "contact@top-reduc.net.":
        - /url: mailto:contact@top-reduc.net.
    - paragraph: La Société avertit l’Utilisateur que ses données personnelles pourront être utilisées par la Société CASSIOPEIA Digital Ltd.
    - paragraph: La Société est particulièrement sensible à la sécurité de son site internet et aux informations que ses membres pourraient lui confier. C’est pour cela que nous avons contracté avec les meilleurs prestataires de paiements. Les prélèvements des mensualités sont effectués via ces prestataires et de manière totalement sécurisée. Ces derniers sont les seuls à avoir accès à vos informations bancaires.
    - paragraph:
      - strong
    - paragraph:
      - strong:
        - strong: 8. Droit applicable et compétence
    - paragraph: Les textes en vigueur exigent que certaines informations ou communications soient transmises par écrit. En utilisant ce Site, l’Utilisateur accepte que ces communications se fassent principalement par voie électronique. Pour des raisons contractuelles, l’Utilisateur accepte ce moyen de communication électronique et reconnaît que tous les contrats, avis, informations et autres communications que le Site fournira par voie électronique sont conformes aux obligations légales prévoyant que lesdites communications soient faites par écrit.
    - paragraph: La Société se réserve le droit de mettre à jour les présentes C.G.V à tout moment et pour quelque motif que ce soit. Dans une telle hypothèse, la Société vous avertira de ces modifications et vous communiquera les dernières C.G.V. En ne résiliant pas votre contrat après que nous vous aurons averti d’une modification, vous manifesterez votre acceptation d’être désormais lié par les Conditions Générales modifiées.
    - paragraph: Les présentes Conditions Générales sont régies par la loi française. En cas de contestation relative à l'interprétation, la validité et/ou l'exécution des présentes, l'Utilisateur pourra saisir à son choix, outre l'une des juridictions territorialement compétentes en vertu du code de procédure civile, la juridiction du lieu où il demeurait au moment de la conclusion du contrat ou de la survenance du fait dommageable. Si tout ou partie d’une clause des présentes s’avérait illicite, non écrite, nulle ou inapplicable, cette clause sera abandonnée, en tout ou partie, sans que la validité des autres clauses en soit affectée, le reste du présent accord conservant son plein effet.
    - paragraph: En ce qui concerne les litiges entre la Société et l’Utilisateur concernant l’Abonnement, l’Utilisateur est invité à tenter de résoudre le litige à l’amiable avant de saisir les juridictions judiciaires, en prenant le plus rapidement possible contact avec le service client de la Société.
    - paragraph:
      - text: "- en envoyant un email à l'adresse suivante :"
      - link "contact@top-reduc.net":
        - /url: mailto:contact@top-reduc.net
    - paragraph:
      - text: "- en utilisant le formulaire en ligne accessible"
      - link "ici":
        - /url: https://www.top-reduc.net/fr/co/contact.html
    - paragraph: /- en contactant le support téléphonique au numéro suivant \\d+ \\d+ \\d+ \\d+ \\d+/
    - paragraph:
      - text: /A défaut d’accord amiable, il pourra recourir à une médiation conventionnelle ou à tout autre mode alternatif de règlement des différends\\. Le Client pourra notamment saisir gratuitement, conformément aux articles L\\.\\d+-1 et suivants du Code de la consommation, la plateforme de règlement en ligne des litiges de la Commission Européenne\\. Cette plateforme est accessible/
      - link "ici":
        - /url: https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home.howitworks#heading-6
      - text: .
    - paragraph: Cette plateforme de Médiation permet aux consommateurs de déposer en ligne une demande de médiation accompagnée des documents justificatifs.
    `);
});

test('TC_VerifySabonnerFormulaireDeRétractationFunctionality', async ({ page }) => {
  await page.goto('https://shop.buy-club.net/', {waitUntil: "domcontentloaded"});
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



