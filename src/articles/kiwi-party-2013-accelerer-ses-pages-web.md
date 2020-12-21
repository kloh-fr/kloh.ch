---
layout: "layouts/article.njk"
title: "Kiwi Party 2013&nbsp;: accélerer ses pages Web"
date: "2013-07-11T17:03:12+01:00"
permalink: "articles/kiwi-party-2013-accelerer-ses-pages-web/"
dateUpdate: "2020-06-11T22:22:22+01:00"
---

<p>Après les <a href="/articles/kiwi-party-2013-css-livres/">CSS pour les livres numériques</a>, <a href="/articles/kiwi-party-2013-google-analytics-integrateur/">Google Analytics</a> et <a href="/articles/kiwi-party-2013-pepins-et-accessibilite/">l’ergonomie et l’accessibilité</a>, voici le compte-rendu d’une autre conférence suivie lors de la Kiwi Party&nbsp;: les techniques d’accélération de ses pages web, présentée par <a href="https://twitter.com/theystolemynick" rel="external">Jean-Pierre Vincent <span class="screen-reader-text">(lien externe)</span></a>.</p>
<p>Ayant loupé le début de la conférence (temps pour déjeuner et rentrer un peu plus long que prévu <span role="img" aria-label="Tire la langue">😛</span>), mon compte-rendu commence là où j’ai commencé à suivre. Ça correspond au slide 8 de <a href="https://fr.slideshare.net/jpvincent/techniques-acceleration-des-pages-web-kiwiparty" rel="external">sa présentation disponible sur Slideshare <span class="screen-reader-text">(lien externe)</span></a>.</p>
<h2>Le coût de l’absence de performance</h2>
<p>Bref, au moment où je fus enfin installé, Jean-Pierre parlait du <strong>coût d’une seconde de perdue au chargement d’une page</strong>. 1 seconde de perdue correspond à&nbsp;:</p>
<ul>
<li><strong>7% de conversions en moins</strong> dans un tunnel d’achat&nbsp;;</li>
<li>une <strong>baisse de 6% des vues</strong> sur une vidéo&nbsp;;</li>
<li><strong>50% de conversion de perdus</strong> sur un site e-commerce&nbsp;;</li>
<li><strong>10% de pages vues en moins</strong> sur mobile.</li>
</ul>
<p>Il conclut sur ces chiffres éloquents en rapportant que <strong>60% des personnes sur mobile abandonnent complètement après 4 secondes d’attente</strong>. Autant dire que l’absence d’optimisation de la performance de nos pages web peut coûter très cher, ou du moins rapporter beaucoup moins&nbsp;!</p>
<h2>Gestion de la performance web</h2>
<p>Les chiffres parlent d’eux-même, il est crucial de mettre en place une gestion de la performance web. Jean-Pierre détaille alors les étapes de ce chantier&nbsp;:</p>
<ol>
<li>Fixer des objectifs</li>
<li>Mesurer</li>
<li>Coder</li>
<li>Surveiller</li>
</ol>
<p>Ce n’est pas une coïncidence de retrouver les étapes de la <strong>gestion de la qualité</strong>. La performance fait partie intégrante des domaines directement lié à la qualité d’un site ou d’un service web. Et ce n’est pas la <a href="https://checklists.opquast.com/fr/webperf/" rel="external">checklist webperf d’Opquast <span class="screen-reader-text">(lien externe)</span></a> qui contredira ça.</p>
<h2>Accès à la fonctionnalité et premier rendu</h2>
<p>Concernant les objectifs, Jean-Pierre présente les 2 principales métriques à prendre en compte&nbsp;:</p>
<ul>
<li>L’<strong>accès à la fonctionnalité</strong>. Le nom parle de lui-même, il s’agit du temps nécessaire avant de <strong>pouvoir accéder et interagir</strong> avec la fonctionnalité.</li>
<li>Le <strong>premier rendu</strong>. Un peu plus technique, il s’agit du temps nécessaire pour <strong>afficher le premier pixel</strong>. C’est à dire le temps pour <strong>afficher le premier contenu</strong>.</li>
</ul>
<p>Ces 2 données sont très proches mais peuvent être «&nbsp;vécues&nbsp;» par l’utilisateur très différemment suivant le code de la page. Par exemple, suivant que les scripts sont placé dans l’entête du document ou en bas de page, le premier rendu sera beaucoup plus long (si les scripts sont dans l’entête) tandis que le temps d’accès à la fonctionnalité ne sera pas nécessairement différent.</p>
<p>Pour mesurer ces 2 métriques, plusieurs outils sont disponibles.<br />
Concernant <strong>l’accès à la fonctionnalité</strong>, il s’agit surtout de scripts à insérer dans sa page comme <a href="https://developers.google.com/analytics/devguides/collection/gajs/gaTrackingTiming" hreflang="en" rel="external">Google Analytics «&nbsp;User Timings&nbsp;» <span class="screen-reader-text">(lien externe)</span></a> ou <a href="http://lognormal.github.io/boomerang/doc/" hreflang="en" rel="external">Boomerang <span class="screen-reader-text">(lien externe)</span></a>.<br />
Pour <strong>mesurer le premier rendu</strong>, il cite particulièrement <a href="https://www.webpagetest.org/" rel="external">WebPagetest <span class="screen-reader-text">(lien externe)</span></a>.</p>
<p>Passée la présentation des outils de mesure, Jean-Pierre parle du <strong>chemin critique</strong>.<br />
Le chemin critique, c’est tout ce qu’il se passe <strong>entre l’ouverture de la page et le premier rendu</strong>. Et c’est donc là qu’on doit travailler.<br />
Les principaux éléments sur lesquels on peut jouer sont les <strong>redirections</strong> et les <strong>appels aux fichiers externes</strong>&nbsp;: <abbr lang="en" title="Cascading Style Sheet">CSS</abbr>, scripts et fonts.</p>
<p>En résumé, voici les actions qu’on peut mener&nbsp;:</p>
<ul>
<li>Redirections&nbsp;: faire <strong>maximum 1 redirection</strong>. Ne pas faire de redirection en javascript et privilégier une solution côté serveur.</li>
<li>CSS&nbsp;: <strong>concaténer et minifier</strong> les feuilles de styles. Avoir maximum 2 feuilles de styles.</li>
<li>Fonts&nbsp;: limiter leur usage. En cas d’utilisation de font, prêter une attention particulière au poids (<strong>50 ko maximum</strong>) ainsi qu’à sa compatibilité (<abbr lang="en" title="Operating System">OS</abbr>/navigateur). Privilégier un <strong>chargement asynchrone</strong>.</li>
<li>Javascript&nbsp;: sans doute le domaine où il y a le plus de travail de gain à espérer. En fonction des cas, on pourra privilégier d’appeler les scripts <strong>en bas de page ou en haut de page</strong>, on peut utiliser les <strong>attributs <code>defer</code> ou <code>async</code></strong>.
<ul>
<li>On placera les scripts en bas de page si la page est légère, qu’il n’y a pas de dépendance ou de <code>document.write</code> dans la page. Il faut aussi savoir que cette technique n’a aucune influence sur iOS.</li>
<li>L’attribut <code>defer</code> permet de <strong>mettre en attente l’exécution du javascript</strong> jusqu’au chargement complet de la page. Habituellement, le temps d’exécution du javascript met en pause le chargement du reste de la page, utiliser cet attribut permet d’exécuter le script une fois la page entièrement chargée.</li>
<li>Le chargement asynchrone permet de bloquer le chargement des scripts tant que la page n’est pas chargée. Mais cela implique de respecter des contraintes fortes comme la nécessité de gérer une <strong>file de téléchargements</strong> ainsi que <strong>la priorité et les dépendances entre les différents scripts</strong>. C’est donc une pratique à réserver aux équipes expérimentées. Heureusement des outils existent pour faciliter le travail. Il cite notamment <a href="https://github.com/getify/LABjs" hreflang="en" rel="external">LABjs <span class="screen-reader-text">(lien externe)</span></a> et <a href="https://requirejs.org/" hreflang="en" rel="external">RequireJS <span class="screen-reader-text">(lien externe)</span></a>.</li>
<li>Enfin il conseille de conserver l’appel des scripts en haut de page s’ils répondent à quelques conditions&nbsp;: <strong>s’il n’y en a pas plus de 2</strong> et <strong>s’ils sont optimisés</strong> (légers, concaténés…)</li>
</ul>
</li>
</ul>
<p>En conclusion il n’y a pas de recette miracle, seulement une diversité de solutions à utiliser ou non en fonction du contexte.</p>
<h2>L’affichage de la page</h2>
<p>Jusque là on a parlé uniquement de tout ce qu’il se passe <strong>avant</strong> que la page ne commence à s’afficher.<br />
Naturellement, il y a encore beaucoup de choses à optimiser après cette étape. L’affichage de la page, c’est à dire <strong>le HTML et tous les contenus qui y sont appelés</strong>, peut être aussi amélioré à de nombreux niveaux.</p>
<p>Ça commence par la <strong>mise en cache des ressources</strong>. Selon la complexité et la fréquence des mises à jour des contenus, il peut-être utile de <strong>mettre en cache la totalité des pages web</strong>. Le cas échéant, les ressources de la page ne seront chargées qu’à la première connexion et toutes les connexions suivantes exploiteront les contenus mis en cache. Différentes solutions existent&nbsp;: cache serveur, mécanisme de cache intégrés aux <abbr lang="en" title="Content Management System">CMS</abbr>, outils spécialisés comme <a href="https://varnish-cache.org/" hreflang="en" rel="external">Varnish <span class="screen-reader-text">(lien externe)</span></a>…<br />
Bien sûr, tous les sites ne peuvent pas être totalement mis en cache. Par exemple sur les sites de e-commerce, certains contenus doivent être constamment frais (prix, stocks…).<br />
Il convient donc de mettre en cache toutes les <strong>ressources statiques</strong> (notamment tout ce qui relève purement de l’interface) et d’y insérer des contenus dynamiques à la demande avec <abbr lang="en" title="XMLHttpRequest">XHR</abbr> ou <abbr lang="en" title="Server Side Includes">SSI</abbr> par exemple.<br />
L’exemple extrême de cette logique est Facebook dont la quasi-totalité du contenu est personnalisé pour chaque utilisateur.</p>
<p>Enfin, le dernier indicateur important à prendre en compte est le temps nécessaire au <strong>chargement complet de la page</strong> ou «&nbsp;onload&nbsp;», incluant l’ensemble des ressources présentes dans la page. Cet indicateur est particulièrement important pour le <strong>référencement</strong> car il fait partie des critères pris en compte par Google dans son algorithme.<br />
Les principales ressources problématiques sont les <strong>images</strong>, les <strong>objets flash et vidéo</strong> et les <strong>iframes</strong>.</p>
<p>Jean-Pierre se concentre sur le cas des images et donne toutes les pistes d’optimisations possibles&nbsp;:</p>
<ul>
<li>Remplacer les images de décoration par des <strong>caractères unicodes</strong> ou des <strong>effets CSS3</strong> (dégradés, arrondis, ombres, rotations, opacités…)</li>
<li><strong>Charger les images «&nbsp;à la demande&nbsp;»</strong> avec la technique du <a href="https://github.com/fasterize/lazyload" hreflang="en" rel="external">lazy-load <span class="screen-reader-text">(lien externe)</span></a></li>
<li><strong>Réduire le nombre d’images</strong> à l’aide des sprites. Pour une maintenance plus facile, un pré-processeur CSS peut être utilisé.</li>
<li>Limiter le nombre de requêtes en <strong>encodant les petites images en base64</strong> (attention à <abbr title="Internet Explorer">IE</abbr>8 et inférieur cependant).</li>
<li>Utiliser le meilleur format d’images possible en fonction de chaque cas (<abbr lang="en" title="Portable Network Graphics">PNG</abbr> pour les images avec aplats ou textes, <abbr lang="en" title="Joint Photographic Experts Group">JPG</abbr> pour les images photo-réalistes) et utiliser les <strong>outils de compression automatique</strong> pour réduire le poids des images au maximum.</li>
</ul>
<p>Enfin, toujours concernant les ressources appelées dans la page, il est nécessaire de porter une attention particulière à toutes les <strong>ressources fournies par un tiers</strong>.</p>
<p>Pour finir, Jean-Pierre présente une <strong>grosse liste d’outils et techniques</strong> pour gérer son cache et monitorer les performances de son site. Je ne vais pas tout lister ici car la liste et longue, je vous conseille donc plutôt de consulter <a href="https://fr.slideshare.net/jpvincent/techniques-acceleration-des-pages-web-kiwiparty" rel="external">sa présentation sur Slideshare <span class="screen-reader-text">(lien externe)</span></a>. <span role="img" aria-label="Clin d'œil">😉</span></p>
<h2>Conclusion</h2>
<p>Voilà pour cette conférence <strong>extrêmement riche et intéressante</strong>&nbsp;! <span role="img" aria-label="Heureux">😀</span><br />
Personnellement, je trouve que c’est un sujet passionnant mais aussi complexe. Ça demande des connaissances et compétences techniques avancées si on souhaite s’investir réellement dans une démarche d’amélioration des performances de son site. Mais une présentation comme celle-ci donne toutes les informations nécessaires pour creuser la question sérieusement, et ça donne vraiment envie de scruter de prêt les résultats des sites qu’on produit.<br />
Comme dirait l’autre, y’a plus qu’à&nbsp;! <span role="img" aria-label="Tire la langue">😛</span></p>
