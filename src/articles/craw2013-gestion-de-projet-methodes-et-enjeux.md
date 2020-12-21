---
layout: "layouts/article.njk"
title: "CRAW2013&nbsp;: gestion de projet, méthodes et enjeux"
date: "2013-04-23T12:37:06+01:00"
permalink: "articles/craw2013-gestion-de-projet-methodes-et-enjeux/"
dateUpdate: "2020-06-11T22:22:22+01:00"
---

<p>Après <a href="/articles/craw2013-html5-aria-et-accessibilite-web/">HTML5 et ARIA</a> et <a href="/articles/craw2013-mobilite-et-accessibilite/">la mobilité</a>, voici la troisième partie de mon compte-rendu de la Conférence Romande sur l’Accessibilité du Web 2013.<br />
Cette fois, nous parlons de gestion de projet avec la présentation d’<a href="https://twitter.com/armonyaltinier" rel="external">Armony Altinier <span class="screen-reader-text">(lien externe)</span></a>&nbsp;: « Gestion de projet&nbsp;: Intégrer l’accessibilité dans un projet web, méthodes et enjeux ».</p>
<p>Ayant commencé à bercer dans la gestion de projet dans mon précédent poste, c’est le genre de présentations qui m’intéressent particulièrement. J’étais donc assez impatient d’assister à cette-là.</p>
<h2>Méthodes existantes</h2>
<p>Avant de donner des réponses, Armony pose les bases et elle nous peint un état des lieux de l’accessibilité aujourd’hui.</p>
<p>La première question est de savoir s’il y une méthode de gestion de projet propre à l’accessibilité ou si l’accessibilité doit être intégrée dans les méthodes existantes.<br />
Le constat qu’elle fait est que, généralement, la méthode de base de l’accessibilité est l’évaluation ou l’audit. Autrement dit on commence un projet à partir de l’évaluation ou l’audit du site ou service web. Elle évoque les principaux référentiels utilisés&nbsp;: les <abbr lang="en" title="Web Content Accessibility Guidelines">WCAG</abbr> 2.0 (norme <abbr title="Organisation internationale de normalisation">ISO</abbr> depuis fin 2012), traduits en France par le référentiel Accessiweb ou le <abbr title="Référentiel Général d'Accessibilité pour les Administrations">RGAA</abbr>.</p>
<p>Conscient des limites des WCAG dans le cadre de projets web, le <abbr lang="en" title="World Wide Web Consortium">W3C</abbr> a mis en place une méthode d’évaluation plus opérationnelle&nbsp;: WCAG-<abbr lang="en" title="Evaluation Methodology">EM</abbr>. On y retrouve d’ailleurs pas mal de ressemblances avec nos référentiels français.</p>
<p>La méthode WCAG-EM se découpe en 5 phases&nbsp;:</p>
<ol>
<li><strong>Définition</strong> des objectifs et périmètre du projet</li>
<li><strong>Exploration</strong> du site</li>
<li><strong>Échantillonnage</strong> du site en fonction des objectifs et du périmètre</li>
<li><strong>Évaluation</strong> de l’échantillon</li>
<li><strong>Rapport</strong> d’évaluation</li>
</ol>
<p>Il s’agit là d’une méthode classique dans le cadre d’un audit. Concernant les objectifs, elle précise cependant que <strong>« atteindre le niveau AAA » ne doit pas être un objectif</strong>.<br />
La phase cruciale est la dernière&nbsp;: le rapport. Dans le cadre de la méthode WCAG-EM sont définis 3 types de rapports&nbsp;:</p>
<ul>
<li>Le <strong>rapport basique</strong> listant les points en conformité et les échecs à l’échelle du site. C’est une vue macro, si un critère est en échec sur une page, il est considéré en échec pour le site.</li>
<li>Le <strong>rapport détaillé</strong> qui contient le rapport basique complété par le détail des points de conformité et des échecs, page par page.</li>
<li>Enfin le <strong>rapport en profondeur</strong> correspond au rapport détaillé complété par une partie destinée aux décideurs. <span role="img" aria-label="Sourire">🙂</span></li>
</ul>
<p>Elle fait le rapprochement avec le rapport selon Accessiweb où on retrouve un peu le même esprit mais formulé autrement&nbsp;: on un <strong>rapport décideur</strong> non technique et pédagogique, accompagné par <strong>une (imposante) annexe technique</strong> qui détaille page par page les erreurs et les suggestions d’amélioration.</p>
<h2>Indicateurs de l’accessibilité</h2>
<p>Parmi les informations qu’on peut trouver dans un rapport et particulièrement la partie à destination des décideurs, ce sont des chiffres.<br />
Selon Armony, oui, il faut des chiffres, il faut des notes, il faut un score.</p>
<p>Sur le plan quantitatif, on compte notamment le <strong>nombre de points en conformité</strong> à l’échelle du site ainsi que page par page. Mais il faut aussi pouvoir donner la <strong>quantité de travail</strong> et le <strong>coût</strong> pour prendre en charge les corrections.</p>
<p>Mais il ne faut pas s’arrêter à ces indicateurs. Car un site qui répond à 80% des critères ne sera pas nécessairement accessible à 80%. Elle donne d’ailleurs un exemple imparable&nbsp;: <strong>un site peut répondre à 90% des critères, s’il y a un captcha dans son formulaire de connexion, il sera potentiellement totalement inaccessible.</strong></p>
<p>Il convient donc de mesurer aussi des <strong>indicateurs qualitatifs</strong>. Ça peut être le niveau à atteindre (A, AA, AAA) ou une liste de points bloquants identifiés. Généralement, il s’agira « d’inventer » les <strong>indicateurs en fonction des objectifs du projet</strong> et des contenus ou fonctionnalités jugées critiques pour l’utilisation du site ou du service.</p>
<p>Les méthodes d’évaluation et les indicateurs c’est bien joli, mais ce n’est pas évident à appliquer dans tous les projets. Et surtout, les méthodes d’évaluation s’appliquent forcément sur un site existant, c’est à dire après le projet de création ou refonte. Pour une meilleure prise en compte de l’accessibilité, il faut s’y prendre plus en amont.</p>
<h2>Les méthodes opérationnelles</h2>
<p>Fort de ce constat, différentes méthodologies ont été développées – ou sont en cours de développement – afin de prendre en compte l’accessibilité dès le départ. On y trouve notamment 3 initiatives françaises&nbsp;:</p>
<ul>
<li><strong><abbr title="Modèle d'Implémentation Progressive de l'Accessibilité Web">MIPAW</abbr></strong> est proposé par <a href="https://www.braillenet.org/" rel="external">BrailleNet <span class="screen-reader-text">(lien externe)</span></a> et Qelios. Sur la base du référentiel Accessiweb, une priorisation des critères a été faite en fonction de leur importance. Leur importance a été définie selon 4 niveaux&nbsp;:
<ol>
<li>Sécuriser l’accès à l’information.</li>
<li>Garantir l’accès  l’information.</li>
<li>Améliorer l’impact utilisateur.</li>
<li>Améliorer l’expérience.</li>
</ol>
</li>
<li><strong lang="en">Accessibility Steps</strong> est proposé par <a href="https://temesis.com/" rel="external">Temesis <span class="screen-reader-text">(lien externe)</span></a>. Basé sur <a href="https://www.opquast.com/opquast-reporting/" rel="external">Opquast Reporting <span class="screen-reader-text">(lien externe)</span></a>, cette méthode permet d’évaluer facilement tous les critères qui peuvent être testés de manière automatisée. On y trouve 3 niveaux&nbsp;:
<ol>
<li><span lang="en">First step</span> permet de vérifier ce qui constitue une erreur d’accessibilité immédiate.</li>
<li><span lang="en">Second step</span> permet de vérifier ce qui crée un risque d’accessibilité.</li>
<li><span lang="en">Third step</span> permet de vérifier ce qui améliore l’accessibilité à travers les alternatives et contenus eux-mêmes.</li>
</ol>
</li>
<li><strong>AcceDe Web</strong> est proposé par <a href="https://www.atalan.fr/" rel="external">Atalan <span class="screen-reader-text">(lien externe)</span></a>. Le projet vise à répartir la prise en charge de l’accessibilité en fonction du profil métier. Ils ont ainsi créé différentes notices par métier&nbsp;:
<ol>
<li>Notice d’accessibilité pour la conception graphique.</li>
<li>Notice d’accessibilité <abbr lang="en" title="HyperText Markup Langage">HTML</abbr>/<abbr lang="en" title="Cascading Style Sheet">CSS</abbr>.</li>
<li>Notice d’accessibilité interfaces riches et Javascript.</li>
<li>Notice d’accessibilité éditoriale.</li>
</ol>
</li>
</ul>
<h2>Mise en pratique de l’accessibilité au sein d’un projet</h2>
<p>Passée cette présentation exhaustive des outils et méthodologies à notre disposition, Armony présente des exemples concrets de projets web sur lesquels elle est intervenue.</p>
<p>Elle commence par un projet du groupe La Poste consistant à améliorer l’accessibilité d’un ensemble d’applications intranet pour la plupart. Le projet s’est déroulé en 4 temps&nbsp;:</p>
<ol>
<li><strong>Audit des applications</strong>. Dans un environnement Intranet et utilisées avec Internet Explorer 6 essentiellement, il s’agit d’un environnement maîtrisé et l’échantillon audité comportait 3 pages seulement.</li>
<li><strong>Mise en place d’indicateurs</strong> selon 3 niveaux de priorité, permettant de faire le plus urgent en premier&nbsp;:
<ol>
<li>Rendre accessible&nbsp;: actions faciles à mettre en place et indispensables.</li>
<li>Trouver une solution alternative&nbsp;: actions indispensables mais difficiles à mettre en place.</li>
<li>Plus tard&nbsp;: actions peu urgentes, fonctionnalités gadget…</li>
</ol>
</li>
<li><strong>Sensibilisation</strong> des agents.</li>
<li><strong>Formations ciblées</strong> par profil.</li>
</ol>
<p>En second exemple, elle présente le cas de Provaltis dont l’objectif était de valoriser sa démarche de labellisation argent (AA). Des formations des salariés ont été mises en place pour les sensibiliser et internaliser les compétences. S’en est suivi un audit réalisé en interne puis une mise en conformité du site et l’obtention finale de la labellisation du site.</p>
<p>Elle présentera 2 autres projets avec des objectifs différents et les réponses apportées à chaque fois. </p>
<h2>Conclusion</h2>
<p>Les leçons à retirer de ces exemples est que <strong>tout est une question de contexte</strong>. Il convient donc de <strong>bien définir les objectifs</strong> du projet pour apporter les réponses appropriées.<br />
De plus, <strong>la formation et/ou la sensibilisation</strong> apparaît comme l’une des pierres angulaires d’un projet réussi.</p>
<p>Qu’importe les choix effectués dans le projet, il faut aussi prendre les différentes méthodes présentées pour ce qu’elles sont&nbsp;: des outils, à utiliser ou pas suivant le contexte. Et il faut surtout ne pas oublier que l’objectif de base est de <strong>rendre accessible à tous les utilisateurs&nbsp;!</strong></p>
<p class="note">Vous pouvez trouver la présentation d’Armony <a href="https://fr.slideshare.net/armonyaltinier/intgrer-laccessibilit-dans-ses-projets-web" rel="external">sur Slideshare <span class="screen-reader-text">(lien externe)</span></a>.</p>
