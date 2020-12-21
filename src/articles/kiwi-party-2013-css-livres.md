---
layout: "layouts/article.njk"
title: "Kiwi Party 2013&nbsp;: CSS pour les livres numériques"
date: "2013-07-02T13:44:11+01:00"
permalink: "articles/kiwi-party-2013-css-livres/"
dateUpdate: "2020-06-11T22:22:22+01:00"
---

<p>Le 28 juin dernier, j’étais à Strasbourg pour assister à ma première <a href="http://2013.kiwiparty.fr/" rel="external">Kiwi Party <span class="screen-reader-text">(lien externe)</span></a>. L’occasion pour moi de voir et revoir du beau monde, mais aussi d’en apprendre plus sur les différents sujets tournants autour de la conception web et traités ce jour là.<br />
C’est parti pour un petit tour d’horizon des moments marquants de la journée.</p>
<p>On commence la journée avec <a href="https://www.w3.org/People/Bos/" rel="external">Bert Bos <span class="screen-reader-text">(lien externe)</span></a> venu présenter les différentes techniques <abbr lang="en" title="Cascading Style Sheets">CSS</abbr> existantes ou à venir pour mettre en page des livres.<br />
Il commence par brosser un bref contexte historique, à savoir que pendant longtemps le CSS n’était utilisé que pour les documents interactifs. Pour les documents imprimés, c’est <abbr lang="en" title="eXtensible Stylesheet Language">XSL</abbr> qui prévalait. Mais le développement de ce dernier a été arrêté. Parallèlement, le format <abbr lang="en" title="Electronic PUBlication">EPUB</abbr> s’est développé et sa mise en forme s’appuie sur CSS.</p>
<p>Bert Bos nous présente ensuite les propriétés CSS pour mettre en page un livre. Pour rappel, certaines d’entre elles sont déjà relativement bien implémentées, mais <strong>la majorité restent expérimentales</strong>.<br />
Nous avons pu voir&nbsp;:</p>
<ul>
<li>Les <strong>colonnes</strong> avec la propriété <code>columns</code> permettant de définir l’affichage du contenu sous forme de colonnes qui peuvent être à largeur fixe (plus exactement une largeur minimale fixe) ou en nombre fixe.</li>
<li>Les <strong>sauts de page</strong> avec les propriétés <code>page-break-*</code> permettant de forcer ou empêcher les sauts de page, par exemple avant/après les titres. À noter que la propriété se voit raccourcie par un simple <code>break-*</code> pour permettre son utilisation dans un autre contexte que la page. <code>page-break-*</code> reste cependant valide pour le moment.</li>
<li>Les <strong>veuves</strong> et les <strong>orphelines</strong> avec, respectivement, les propriétés <code>widows</code> et <code>orphans</code> permettant de définir un nombre minimal de ligne à afficher en cas de début/fin de paragraphe en bas/haut de colonne.</li>
<li>Les <strong>marges de la page</strong> peuvent être gérées à l’aide de la règle <code>@page</code>. Il suffit de définir les marges comme pour n’importe quel élément, par exemple&nbsp;: <code>@page { margin: 2cm 1.5cm; }</code></li>
<li>L’adaptation du contenu pour les <strong>pages recto-verso</strong> se fait simplement avec les pseudo-classes <code>:right</code>, <code>:left</code> ou encore <code>:first</code> pour la première page du document. Il suffit de les appliquer à la règle <code>@page</code>. Utile pour ajuster les marges en fonction de la reliure par exemple.</li>
<li>Les <strong>numéros de page</strong> peuvent être insérés avec la règle <code>content: counter(page);</code>.</li>
<li>On peut insérer en <strong>entête</strong> des informations issues du contenu, par exemple le titre. Cela se passe en deux temps&nbsp;:
<ol>
<li>On définit une <em>variable</em> reprenant le contenu du titre&nbsp;: Ainsi le code <code>h2 {string-set: chapter contents;}</code> définit une <em>variable</em> «&nbsp;chapter&nbsp;» reprenant le contenu de la balise <code>h2</code>.</li>
<li>On affiche ce contenu dans l’entête avec le code suivant&nbsp;: <code>@page { @top { content: string(chapter); } }</code>.</li>
</ol>
</li>
<li>Les <strong>césures</strong> se gèrent avec la propriété <code>hyphens</code> et a 3 valeurs possibles&nbsp;: <code>none</code> qui supprime toute césure, <code>auto</code> qui applique les règles par défaut dans la langue du document (le dictionnaire de langue étant géré par le navigateur, donc avec des résultats variés) et enfin <code>manual</code> pour définir soi-même les césures dans le <abbr title="HyperText Markup Langage" lang="en">HTML</abbr>.</li>
</ul>
<p>Enfin un exemple d’expérimentation pour les <strong>notes de bas de page</strong> est présenté mais va au delà de CSS.<br />
Il complète cette liste par les fonctionnalités qui restent encore à être étudiées&nbsp;: notes dans les marges, catégories de notes, gestion des <code>float</code> vers le haut et le bas, références, texte sur 2 pages opposées, tables des matières… Autant dire qu’il reste du boulot&nbsp;!</p>
<p>Pour finir on a droit à la présentation d’une méthode de <strong>pagination</strong> à l’aide d’une nouvelle valeur de la propriété <code>overflow</code>. En utilisant <code>paged-x</code> ou <code>paged-y</code>, on peut ainsi faire une pagination horizontale (x) ou verticale (y) permettant de faire défiler les «&nbsp;pages&nbsp;». On peut même ajouter des contrôles avec les valeurs <code>paged-x-controls</code> ou <code>paged-y-controls</code>.</p>
<p>Voilà pour cette première conférence de la journée&nbsp;!<br />
Ce fut une introduction très intéressante car elle m’a permis de prendre connaissance de techniques de mise en page que je ne connaissais pas encore et qui sortent du cadre de la simple feuille d’impression.<br />
Cependant des questions se posent sur l’<strong>accessibilité</strong> de tout ça, comme l’a très justement remonté <a href="https://twitter.com/armonyaltinier" rel="external">Armony <span class="screen-reader-text">(lien externe)</span></a> lors des questions/réponses. Bert Bos a en effet présenté plusieurs techniques permettant de <strong>manipuler du contenu</strong> (entêtes, notes de bas de page, numérotation des pages…) alors que le contenu n’est pas censé être une affaire de CSS.<br />
Prévoir de pouvoir mettre en forme tous ces éléments à l’aide de propriétés CSS prévues à cet effet c’est bien. Retrouver le pendant de ces propriétés dans le balisage du contenu lui-même, ce sera bien mieux.<br />
Mais relativisons, la plupart de ces propriétés sont encore <strong>au stade expérimental</strong>. Elles vont donc encore certainement évoluer et des solutions seront certainement trouvées pour répondre aux contraintes de mises en page de documents imprimés, tout en offrant un support de l’accessibilité qu’on est en droit d’attendre pour ces documents.</p>
<p>Vous pouvez retrouver <a href="https://www.w3.org/Talks/2013/0628-CSS-Strasbourg/" rel="external">les slides de la conférences en ligne <span class="screen-reader-text">(lien externe)</span></a>.</p>
