---
layout: "layouts/article.njk"
title: "Éditeur personnalisé et guide de contribution"
date: "2015-09-14T09:00:57+01:00"
permalink: "articles/editeur-personnalise-guide-contribution/"
dateUpdate: "2024-12-01T11:22:00+01:00"
---

<p>L’un des premiers éléments qui fait la qualité d’un site web est <strong>son contenu</strong>. Pour certains types de site (actualités, information), le contenu est d’ailleurs le cœur même du site&nbsp;!</p>
<p>Et ce contenu, il n’arrive pas comme ça sur le site&nbsp;: il doit être rédigé d’une part, puis intégré dans le site d’autre part.<br />
Dans cet article, je parlerai essentiellement de cette deuxième partie : comment <strong>l’intégration</strong> peut contribuer à la qualité éditoriale d’un site et comment, en travaillant un éditeur et proposant un guide de contribution j’ai tenté d’optimiser l’édition sur l’un de mes projets personnels.<span id="more-787"></span></p>
<h2>Analysons l’existant</h2>
<p>Le projet dont je parle était un site d’actualités et de critiques de films sur le support Blu-ray, il avait donc une grosse composante éditoriale.<br />
L’équipe du site était composée de bénévoles passionnés de cinéma&nbsp;: <strong>de nombreux rédacteurs créaient et inséraient du contenu</strong>.</p>
<figure>
<img src="{{ site.path.images }}/{{ permalink }}equipe.jpg" alt="" width="500" height="232" />
</figure>
<p>Parmi les rédacteurs, certains pouvaient appliquer des mises en formes toutes personnelles, avec pour résultat un <strong>manque d’homogénéité</strong> dans le rendu des différents articles et contenus, <strong>visuel voire sémantique</strong>.<br />
Il y avait une raison flagrante à ce manque de cohérence&nbsp;:<strong> un éditeur de texte bien trop complexe et complet</strong>, qui avait le défaut de proposer aux rédacteurs trop de possibilités. Plus il y a de possibilités, plus il y a de façons différentes de faire les choses.</p>
<h2>Améliorons&nbsp;: rationalisons</h2>
<p>Mon premier objectif était de<strong> rationaliser et d’uniformiser le rendu</strong> des articles. Au-delà de l’aspect visuel, il s’agissait aussi d’<strong>améliorer la qualité sémantique</strong> des contenus.<br />
J’ai donc travaillé sur une simplification de l’éditeur pour limiter les fonctionnalités au strict minimum, tout en répondant aux besoins de mises en forme de l’équipe.</p>
<p>Mais comme vous le savez, un outil a beau être merveilleux,<strong> il faut encore savoir comment l’utiliser</strong>. J’ai donc travaillé en parallèle sur la mise en place d’un <strong>guide de contribution</strong> permettant aux rédacteurs de savoir comment utiliser correctement l’éditeur.</p>
<h2>Personnalisons l’éditeur</h2>
<p>Dans le cadre du projet, nous travaillions avec l’éditeur <a href="https://www.tiny.cloud/">TinyMCE</a> pour fournir l’éditeur de texte aux contributeurs. TinyMCE est très répandu (c’est notamment l’éditeur de texte par défaut de WordPress) et a l’avantage d’être très facilement personnalisable.<br />
J’ai donc profité des possibilités de personnalisation de l’éditeur pour proposer aux rédacteurs et contributeurs des fonctionnalités sur mesure.</p>
<figure>
<img src="{{ site.path.images }}/{{ permalink }}sur-mesure.jpg" alt="" width="500" height="232" loading="lazy" />
</figure>
<p>Je me suis notamment arrêté sur les quelques points suivants&nbsp;:</p>
<ul>
<li>J’ai limité l’éditeur aux <strong>fonctions sémantiques essentielles</strong> (listes ordonnées et non ordonnées par exemple) et <strong>supprimé tous les boutons de mise en forme</strong> «&nbsp;risqués&nbsp;» pour le rendu (couleur de texte, couleur de fond, police…) et potentiellement pour l’accessibilité des contenus. D’un point de vue sémantique, ces fonctions ne sont pas très dangereuses car elles s’appuient sur des styles en ligne. Cependant, d’un point de vue visuel, elles peuvent facilement <strong>mettre en péril la cohérence visuelle</strong> des contenus.</li>
<li>En remplacement des boutons de mise en forme supprimés, j’ai demandé à l’équipe de me dire quelles mises en forme ils souhaitaient pouvoir appliquer sur leurs contenus. Une fois leurs besoins recueillis, je me suis attelé à mettre en place des raccourcis pour reproduire ces mises en forme dans l’éditeur. Il s’agit de l’option «&nbsp;>Formats&nbsp;» de TinyMCE, permettant d’ajouter aux contenus une class CSS spécifique par exemple. Ajouter une simple class plutôt que des styles en ligne <strong>garantit ainsi de pouvoir facilement faire évoluer le rendu</strong> des contenus dans le temps&nbsp;!</li>
<li>Pour les mises en forme un peu plus exotiques, j’ai été jusqu’à créer des modèles de contenu permettant aux rédacteurs d’être libérés de toute la mise en forme et de se consacrer entièrement aux contenus. Pour ce faire, je me suis appuyé sur l’extension «&nbsp;Templates&nbsp;» de TinyMCE permettant d’importer dans son contenu un <strong>modèle HTML qu’il ne reste plus qu’à remplir</strong>.</li>
<li>Enfin, j’ai ajouté un certain nombre de raccourcis pour les caractères spéciaux très couramment utilisés et aussi très souvent malmenés car absents des claviers. C’est le cas notamment des majuscules accentuées ou des caractères de ponctuation comme les points de suspension, l’apostrophe ou encore les guillemets français. Les rédacteurs n’ont ainsi pas besoin d’apprendre par cœur tout un tas de raccourcis clavier échappant à toute logique.</li>
</ul>
<p>Et voilà, avec ces quelques points d’attention, on est déjà en mesure de proposer un éditeur texte qui donne toutes les cartes en main aux contributeurs pour qu’ils mettent en ligne des contenus d’une qualité technique suffisante, sans effort démesuré.<br />
Oui mais voilà, un bon outil c’est bien, mais il faut encore savoir l’utiliser…</p>
<p><strong>Rédigeons le guide de contribution</strong></p>
<p>Une fois l’éditeur personnalisé, je me suis donc attelé à <strong>rédiger un guide de contribution</strong> à destination des contributeurs.</p>
<figure>
<img src="{{ site.path.images }}/{{ permalink }}guide.jpg" alt="" width="500" height="232" loading="lazy" />
</figure>
<p>Ce guide avait plusieurs objectifs&nbsp;:</p>
<ul>
<li>Définir et clarifier les <strong>règles éditoriales</strong> propres au site. Il s’agit essentiellement ici de définir les règles liées au vocabulaire intrinsèque du ou des sujets traités sur le site.</li>
<li>Définir (si ce n’est rappeler) les grandes <strong>règles de typographie</strong>. Il s’agit là de donner un contenu pédagogique sur le rôle et l’utilisation des éléments typographique couramment utilisés&nbsp;: paragraphes, listes, gras, italique… Expliquer le rôle sémantique de chacun de ces éléments permet de limiter l’usage abusif de ces derniers.</li>
<li>Et enfin expliquer <strong>comment utiliser chacune des fonctions de l’éditeur</strong>. Il fallait notamment expliquer comment utiliser les différents modèles de contenu et autres options de mises en forme qui avaient été développés sur mesure pour le site.</li>
</ul>
<p>Comme il ne sert à rien de palabrer des heures là dessus, je vous laisse plutôt consulter vous-même <a href="https://www.kloh.ch/w3q/editeur/tiny-mce.html">le guide complet</a> ainsi rédigé.</p>
<h2>Utilisons tout ça</h2>
<p>Les changements de l’éditeur et le fait de les accompagner d’un guide d’utilisation a été très bien reçus par les contributeurs. <strong>Expliquer et sensibiliser</strong> sur les bonnes (ou les mauvaises) pratiques de contribution leur permet d’<strong>améliorer leur travail</strong> sur le site&nbsp;: le rédacteur est content et l’intégrateur est content&nbsp;!<br />
Au delà de l’aspect pédagogique, les rédacteurs avaient particulièrement apprécié tous les changements leur permettant d’<strong>être plus efficaces</strong>. Par exemple, les modèles leur ont permis de mettre en forme très simplement des contenus qu’ils publiaient de manière récurrente «&nbsp;à la main&nbsp;», comme les plannings.</p>
<h2>Ressources</h2>
<ul>
<li><a href="https://www.kloh.ch/w3q/editeur/tiny-mce.html">Guide de contribution</a></li>
<li><a href="https://github.com/kloh-fr/tiny-mce/blob/master/config.js">Fichier de configuration de TinyMCE sur GitHub</a></li>
</ul>
<p>Dans l’ordre, illustrations tirées des films <em>Reservoir Dogs</em>, <em>Pacific Rim</em> et <em>Kill Bill</em>.</p>
