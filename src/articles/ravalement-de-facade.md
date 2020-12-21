---
layout: "layouts/article.njk"
title: "Ravalement de façade"
date: "2020-06-11T17:13:41+01:00"
permalink: "articles/ravalement-de-facade/"
dateUpdate: "2020-06-14T17:20:00+01:00"
---

<p>Le dernier rafraîchissement de mon site date d’il y a <a href="/articles/hello-world/">un peu plus de 7 ans</a>.<br />
Il a vécu quelques temps puis la vie a fait qu’il est resté en friche.</p>

<p>À l’époque, j’étais passé du bien-aimé <a href="https://fr.dotclear.org/" rel="external">Dotclear <span class="screen-reader-text">(lien externe)</span></a> à <a href="https://wordpress.org/" hreflang="en" rel="external">WordPress <span class="screen-reader-text">(lien externe)</span></a>. Ce dernier était déjà incontournable et même si je l’avais déjà utilisé sur différents projets, c’était l’occasion pour moi de le prendre en main sérieusement. C’est notamment à ce moment-là que j’ai commencé à exploiter pleinement le mécanisme des thèmes enfants et à prêter une attention particulière aux bonnes pratiques de développement WordPress.</p>

<p>Aujourd’hui, je profite une nouvelle fois de ce rafraîchissement pour élargir mes horizons techniques et me plonger cette fois dans la JAMstack.<sup><a href="#note-1" id="ref-note-1">[1]</a></sup></p>

<h2>Site statique</h2>

<p>Au-delà de la nouveauté technique, je souhaitais en particulier utiliser un <abbr title="Genérateur de site statique">GSS</abbr>, ou générateur de site statique.<br />
Ma principale motivation est de fournir un contenu totalement statique au navigateur, en opposition aux <abbr title="Gestionnaire de site statique">CMS</abbr> tel que WordPress, qui livre du contenu généré en <abbr title="PHP: Hypertext Preprocessor">PHP</abbr> à chaque appel de page, ce qui implique des appels à une base de données et du travail supplémentaire sur le serveur.<br />
Bref, je voulais me passer d’une telle machinerie alors que les pages de mon site n’ont pas du tout besoin d’être re-générées à chaque affichage, bien au contraire&nbsp;!<sup><a href="#note-2" id="ref-note-2">[2]</a></sup></p>

<p>Après quelques recherches, des lectures d’articles, de tutoriels et d’avis d’utilisateurices sur les dizaines de GSS disponibles, mon choix s’est finalement porté sur <a href="https://www.11ty.dev/" hreflang="en" rel="external">Eleventy <span class="screen-reader-text">(lien externe)</span></a>. En particulier parce qu’il est unanimement réputé pour sa simplicité de prise en main et sa flexibilité. Et voilà le résultat&nbsp;!</p>

<h2>Thème sombre ou clair</h2>

<p>Toujours au rayon technique, le site prend en compte les préférences de thème défini par l’utilisateurice&nbsp;: le site affichera le thème (sombre ou clair) en fonction de la préférence définie.<br />
Si toutefois il n’y a aucune préférence définie – ce qui est le cas par défaut, c’est le thème sombre qui sera affiché. J’ai fait ce choix unilatéralement car c’est mon mode préféré. <span role="img" aria-label="Tire la langue">😛</span><br />
Et il est bien sûr possible de passer de l’un à l’autre sans aucun problème. Le cas échéant, le choix est enregistré dans le <a href="https://developer.mozilla.org/fr/docs/Web/API/Window/localStorage" rel="external">stockage local <span class="screen-reader-text">(lien externe)</span></a> du navigateur.</p>

<h2>Vie privée</h2>

<p>Au-delà de l’aspect technique du site, un de mes grands objectifs avec cette refonte était de prendre soin de la vie privée des internautes qui naviguent sur le site. J’ai donc fait en sorte que le site ne récolte absolument <strong>aucune donnée personnelle&nbsp;!</strong><br />
Il n’y a pas de cookie, pas de traqueur ni d’outil d’analyse de trafic. Il n’y a pas non plus de contenus embarqués depuis des sites ou service tiers, afin d’éviter tout pistage indésirable.<br />
Enfin la totalité des images, vidéos, polices de caractères, fichiers… utilisés sont hébergés sur le site.</p>

<p>Bonne navigation&nbsp;!</p>

<div class="notes">
    <ol>
        <li id="note-1">Si le concept de JAMstack ne vous parle pas, je vous conseille <a href="https://jamstatic.fr/2019/02/07/c-est-quoi-la-jamstack/" rel="external">cette très bonne introduction <span class="screen-reader-text">(lien externe)</span></a> sur <a href="https://jamstatic.fr/" rel="external">Jamstatic <span class="screen-reader-text">(lien externe)</span></a>. <a href="#ref-note-1"><span class="screen-reader-text">Retour</span></a></li>
        <li id="note-2">En vérité il existe des solutions pour servir les contenus d’un site WordPress sous la forme de page statique. Mais l’appel de l’exploration technique était plus fort. <span role="img" aria-label="Tire la langue">😛</span> <a href="#ref-note-2"><span class="screen-reader-text">Retour</span></a></li>
    </ol>
</div>
