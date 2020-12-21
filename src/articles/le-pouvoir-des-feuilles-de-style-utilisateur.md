---
layout: "layouts/article.njk"
title: "Le pouvoir des feuilles de style utilisateur"
date: "2013-03-20T10:50:03+01:00"
permalink: "articles/le-pouvoir-des-feuilles-de-style-utilisateur/"
dateUpdate: "2020-06-11T22:22:22+01:00"
---

<p>Alors que je parcourais nonchalamment ma <span lang="en">timeline<span> Facebook, le statut d’un de mes contacts m’a interpellé&nbsp;:</p>
<blockquote><p>Hmm, je sens que ça va vite me gaver cette nouveauté Facebook qui consiste à mettre des suggestions de pages (de la pub quoi) au milieu de ma <span lang="en">timeline</span>…</p></blockquote>
<p>En effet, la Suggestion de Page Facebook s’insère dans votre timeline mais prend malicieusement, peu ou prou, la même forme que les publications de vos amis.</p>
<figure>
<img src="{{ site.path.images }}/{{ permalink }}facebook-suggestion.png" width="475" height="150" alt="" loading="lazy" />
<figcaption>Suggestion de page Facebook</figcaption>
</figure>
<p>Et tout d’un coup, l’idée de masquer ces satanées publicités à l’aide d’une feuille de style utilisateur me traverse l’esprit&nbsp;! Ni une, ni deux, je me lance&nbsp;!</p>
<h2>Feuilles de style utilisateurs&nbsp;? Qu’est-ce que c’est&nbsp;?</h2>
<p>Avant de rentrer dans le vif du sujet, une petite explication peut être nécessaire si le sujet ne vous parle pas. Sinon, <a href="#creer-css-user">vous pouvez directement aller lire comment créer sa feuille de style utilisateur</a>.</p>
<p>Les feuilles de styles (<abbr lang="en" title="Cascading Style Sheet">CSS</abbr>) permettent de mettre en forme le contenu d’une page web. Elles servent à définir les couleurs, les typographies, les dimensions… bref tous les paramètres qui permettent de gérer l’affichage et de définir comment se présentera une page web.</p>
<p>Lorsqu’on parle de feuilles de styles, on pense généralement aux <strong>feuilles de styles auteur</strong>, c’est à dire les styles définis par le créateur du site web. C’est en effet son travail de définir comment s’affichera les pages de son site.<br />
Mais le créateur de site web n’a pas tous les pouvoirs&nbsp;! Il existe aussi d’autres feuilles de style&nbsp;: celles du navigateur et celles de l’utilisateur.</p>
<p>Les <strong>feuilles de styles navigateur</strong> appliquent un certain nombre de styles par défaut pour s’assurer d’un rendu minimal des pages web. En tant qu’utilisateur, on peut voir leurs effets sur les formulaires par exemple. Si vous avez déjà navigué avec différents navigateurs/systèmes d’exploitation, vous aurez peut-être constaté des traitements différents sur des éléments comme les cases à cocher, les boutons radio ou encore les listes déroulantes. On doit généralement ces effets aux feuilles de styles navigateurs.</p>
<p>Mais ce qui nous intéresse aujourd’hui est la dernière catégorie&nbsp;: la <strong>feuille de styles utilisateur</strong>&nbsp;!<br />
Cette dernière permet à l’utilisateur final de définir ses propres styles, c’est un outil puissant en terme d’accessibilité. On peut effectivement, par exemple, définir une taille de texte élevée. Dans ce cas, la taille des textes sera appliquée à toutes les pages web et permettra à un utilisateur malvoyant de lire des textes qu’il n’aurait pas forcément pu lire avec la taille défini dans les styles auteur.<br />
Dans la pratique, ce n’est pas toujours aussi simple et l’application des styles utilisateurs n’est possible qu’à condition que les styles auteur respectent un minimum les bonnes pratiques d’usage en CSS. Mais à partir du moment où c’est le cas, l’utilisateur a tous les pouvoir pour adapter une page web à sa convenance&nbsp;!</p>
<p>Voyons donc comment prendre le pouvoir en tant qu’utilisateur.</p>
<h2 id="creer-css-user">Créer sa feuille de style utilisateur</h2>
<p>Chaque navigateur donne la possibilité d’ajouter des styles utilisateurs. Il suffit généralement d’éditer un fichier mis à disposition par défaut, ou d’en créer. Chaque navigateur ayant un mécanisme qui lui est propre, je vous détaille ci-dessous la démarche pour <a href="#css-firefox">Firefox</a>, <a href="#css-chrome">Chrome</a>, <a href="#css-ie">Internet Explorer</a>, <a href="#css-safari">Safari</a> et <a href="#css-opera">Opéra</a>.</p>
<h3 id="css-firefox">Dans Firefox</h3>
<p>Pour appliquer ses styles personnalisés, il est nécessaire de les insérer dans un fichier nommé spécifiquement «&nbsp;userContent.css&nbsp;». Il faut alors le copier dans le répertoire suivant, en fonction de votre <abbr lang="en" title="Operating System">OS</abbr>&nbsp;</p>
<p>Sur Windows Vista / Windows&nbsp;7</p>
<pre>C:\Users\USERNAME\AppData\Roaming\Mozilla\Firefox\Profiles\ PROFILE.default\chrome\userContent.css</pre>
<p>Sur Windows&nbsp;XP</p>
<pre>C:\Documents and Settings\USERNAME\Application Data\Mozilla\Firefox\Profiles\default.PROFILE\chrome\userContent.css</pre>
<p>Sur Ubuntu</p>
<pre>home/.mozilla/firefox/.default/chrome/userContent.css</pre>
<p class="note">Note&nbsp;: lorsque vous créez ou modifiez ce fichier, il est nécessaire de redémarrer Firefox pour que les changements soient pris en compte.<br />Note 2&nbsp;: ne disposant pas de toutes les configurations possibles, j’invite ceux qui le souhaitent à me transmettre les chemins des OS qui sont absents de cet article, notamment Windows&nbsp;8 et Mac&nbsp;OSX.</p>
<p><abbr title="Mise à jour">MAJ</abbr>&nbsp;: Il existe aussi le module complémentaire <a href="https://addons.mozilla.org/fr/firefox/addon/stylish/" rel="external">Stylish <span class="screen-reader-text">(lien externe)</span></a> pour ajouter ses propres styles, sans avoir à parcourir les dossiers sur son poste.</p>
<h3 id="css-chrome">Dans Chrome</h3>
<p>À l’instar de Firefox, un fichier prédéfini permet d’ajouter ses propres styles dans Chrome. Il se nomme «&nbsp;Custom.css&nbsp;» et se trouve dans le répertoire suivant, en fonction de votre OS&nbsp;<br />
Sur Windows Vista / Windows&nbsp;7</p>
<pre>C:\Users\USERNAME\AppData\Local\Google\Chrome\User Data\Default\User StyleSheets\Custom.css</pre>
<p>Sur Windows&nbsp;XP</p>
<pre>C:\Documents and Settings\USERNAME\Application Data\Google\Chrome\User Data\Default\User StyleSheets\Custom.css</pre>
<p><abbr title="Mise à jour">MAJ</abbr>&nbsp;: Il existe aussi l’extension <a href="https://chrome.google.com/webstore/detail/stylish-custom-themes-for/fjnbnpbmkenffdnngjfgmeleoegfcffe" rel="external">Stylish <span class="screen-reader-text">(lien externe)</span></a> pour ajouter ses propres styles, sans avoir à parcourir les dossiers sur son poste.</p>
<h3 id="css-ie">Dans Internet Explorer</h3>
<p>Il faut au préalable avoir créé votre feuille de style personnalisée et la stocker sur votre ordinateur. Une fois fait, procédez comme suit&nbsp;:</p>
<ol>
<li>Dans le menu «&nbsp;Outils&nbsp;», sélectionnez l’option «&nbsp;Options Internet&nbsp;» pour ouvrir la fenêtre des options.</li>
<li>Sur l’onglet «&nbsp;Général&nbsp;», cliquez sur le bouton «&nbsp;Accessibilité&nbsp;» qui se trouve en bas.</li>
<li>Cochez la case «&nbsp;Mettre les documents en forme en utilisant ma feuille de style&nbsp;».</li>
<li>Le champ «&nbsp;Feuile de style&nbsp;» est rendu actif et vous pouvez spécifier le chemin de votre feuille de style personnalisée.</li>
</ol>
<h3 id="css-safari">Dans Safari</h3>
<p>Il faut au préalable avoir créé votre feuille de style personnalisée et la stocker sur votre ordinateur. Une fois fait, procédez comme suit&nbsp;:</p>
<ol>
<li>Rendez-vous dans le menu «&nbsp;Préférences&nbsp;» (vous pouvez aussi utiliser le raccourci <code>Ctrl + ,</code>) pour ouvrir la fenêtre des Préférences.</li>
<li>Allez sur l’onglet «&nbsp;Avancées&nbsp;».</li>
<li>Vous verrez une liste déroulante «&nbsp;Feuilles de style&nbsp;» avec la valeur «&nbsp;Aucune sélection&nbsp;» par défaut. À l’aide de cette liste, vous n’avez plus qu’à spécifier le chemin de votre feuille de style personnalisée.</li>
</ol>
<h3 id="css-opera">Dans Opéra</h3>
<p>Il faut au préalable avoir créé votre feuille de style personnalisée et la stocker sur votre ordinateur. Une fois fait, procédez comme suit&nbsp;:</p>
<ol>
<li>Rendez-vous dans le menu «&nbsp;Réglages&nbsp;» puis «&nbsp;Préférences&nbsp;» (vous pouvez aussi utiliser le raccourci <code>Ctrl + F12</code>) pour ouvrir la fenêtre des Préférences.</li>
<li>Allez sur l’onglet «&nbsp;Avancé&nbsp;».</li>
<li>Cliquez sur l’entrée «&nbsp;Contenu&nbsp;» puis le bouton «&nbsp;Options de style&nbsp;» pour ouvrir la fenêtre Options de style.</li>
<li>Dans le champ «&nbsp;Mon style&nbsp;», vous n’avez plus qu’à spécifier le chemin de votre feuille de style personnalisée.</li>
</ol>
<h2>Exemples de styles utilisateur pratiques</h2>
<p>Vous savez désormais comment créer vos propres styles utilisateur. Retournons donc au point d’origine de cet article&nbsp;: comment masquer les publicités Facebook&nbsp;?<br />
Le code suivant permet donc de masquer les Suggestions de page, mais aussi les colonnes de publicité à droite des pages (sur la <span lang="en">timeline</span>, le profil et la messagerie)&nbsp;:</p>
<pre>
#pagelet_ego_pane_w,
#pagelet_side_ads,
#pagelet_ego_pane,
.uiStreamStoryAttachmentOnly {
	display: none;
}
</pre>
<p>Dans le même ordre d’idée, il est possible de masquer les tweets sponsorisés sur Twitter&nbsp;:</p>
<pre>
.promoted-tweet {display: none;}
</pre>
<p>Et voilà, <span lang="en">bye bye</span> les publicités Facebook (de visu en tout cas).</p>
<h2>Conclusion</h2>
<p>Avec cet article vous avez les armes pour créer vos propres styles utilisateurs. Après, il est vrai que ce n’est à la portée de tous car il est nécessaire d’avoir un minimum de connaissance en CSS. La portée de ce mécanisme est donc plutôt limitée mais il ne tient qu’à nous (<abbr title="note de l’auteur">ndla</abbr>: aux personnes maîtrisant CSS) d’accompagner les personnes qui n’ont pas les connaissances suffisantes mais souhaiteraient profiter des bienfaits des feuilles de styles utilisateur. <span role="img" aria-label="sourire">🙂</span></p>
