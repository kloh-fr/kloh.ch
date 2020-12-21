---
layout: "layouts/article.njk"
title: "Créer plusieurs pages avec Photoshop"
date: "2013-03-28T09:19:04+01:00"
permalink: "articles/creer-plusieurs-pages-avec-photoshop/"
dateUpdate: "2020-06-11T22:22:22+01:00"
---

<p>Il n’aura échappé à personne que <strong>Photoshop est nul pour faire des maquettes d’un site web</strong>. Quand il s’agit de faire une page, on s’en sort. Quand on commence à faire plusieurs pages pour un même site, on commence à s’arracher les cheveux&nbsp;!</p>
<h2>L’enfer de la gestion de plusieurs pages en <abbr lang="en" title="Photoshop Document">PSD</abbr></h2>
<p>La plupart du temps on commence par créer notre super maquette de page d’accueil. Puis au moment de faire une page secondaire, deux façons de faire se dégagent&nbsp;:</p>
<ul>
<li>On duplique notre PSD de page d’accueil pour faire un PSD par page.</li>
<li>On crée un groupe de calques par page, sur le même PSD.</li>
</ul>
<p>Malheureusement, aucune de ces solutions n’est simple à gérer à long terme.</p>
<ul>
<li>Lorsqu’on duplique le PSD, la moindre modification donne envie de sauter par la fenêtre et génère immanquablement <strong>des erreurs et incohérences</strong> entre les différents fichiers.</li>
<li>Lorsqu’on crée un groupe de calques pour chaque page, on arrive très rapidement à une taille de fichier énorme et une impressionnante arborescence de calques. On est au final <strong>ralenti dès lors qu’on commence à naviguer dedans</strong>.</li>
</ul>
<h2>Quelle alternative&nbsp;?</h2>
<p>Pour m’épargner les désagréments ci-dessus, la méthode que j’ai décidé d’adopter est toute bête&nbsp;: j’utilise les objets dynamiques.</p>
<p>Les objets dynamiques, qu’est-ce que c’est&nbsp;?<br />
Tout graphiste/designer qui se respecte utilise les objets dynamiques, ils permettent d’<strong>intégrer dans son PSD un objet graphique que l’on pourra modifier sans altérer la source de l’objet</strong>.</p>
<p>C’est notamment très utile lorsqu’on importe une forme vectorielle depuis Illustrator. En insérant ma forme vectorielle sous forme d’objet dynamique, je peux la modifier comme n’importe quel calque, lui ajouter des effets, jouer avec les filtres, la déformer… sans que ma forme d’origine ne soit modifiée.<br />
Si je souhaite modifier ma forme vectorielle, un double clic sur l’objet dynamique qui la contient ouvrira ma forme d’origine dans Illustrator. Je peux ainsi la modifier et le changement de ma forme est pris en compte dans mon PSD automatiquement, sans perdre les effets qui auront été appliqués à l’objet dynamique.</p>
<p>Généralement, on utilise cette fonction pour insérer des formes vectorielles, des photographies ou des illustrations.<br />
J’ai juste poussé le principe jusqu’au bout en l’appliquant à des PSD complets&nbsp;! <span role="img" aria-label="Heureux">😀</span></p>
<h2>Inclure un PSD dans un PSD</h2>
<p>Ma méthode est la suivante&nbsp;:</p>
<ol>
<li>Je crée mon PSD initial, généralement la page d’accueil. Je fais donc la maquette comme j’ai l’habitude de le faire&nbsp;: je crée la page complète.</li>
<li><strong>J’organise les blocs de ma page par groupe de calques</strong> (je le fais personnellement dès le départ, mais si ce n’est pas le cas, il est temps de s’y mettre à ce moment). J’ai donc un groupe «&nbsp;header&nbsp;», un groupe «&nbsp;footer&nbsp;», et ainsi de suite.</li>
<li>C’est à partir de là que j’applique ma méthode&nbsp;: <strong>je crée un objet dynamique pour chaque groupe de calques qui sera récurrent</strong> sur toutes les pages de mon site.</li>
</ol>
<p>Pour créer un objet dynamique, il suffit de faire un clic-droit sur le groupe à convertir dans la liste des calques, et choisir l’option «&nbsp;Convertir en objet dynamique&nbsp;».</p>
<figure>
<img src="{{ site.path.images }}/{{ permalink }}objet-convertir.png" width="280" height="310" alt="" loading="lazy" />
</figure>
<p>Mon groupe de calques est donc converti en objet dynamique.</p>
<figure>
<img src="{{ site.path.images }}/{{ permalink }}objet-dynamique.png" width="255" height="40" alt="" loading="lazy" />
</figure>
<p>Il me suffit de double-cliquer sur ce nouveau calque pour qu’un nouveau fichier s’ouvre, contenant mes calques originaux. À ce stade cependant, il y a quelques petits points à améliorer&nbsp;:</p>
<ul>
<li>En l’état mon objet dynamique est totalement inclu dans mon fichier d’origine. Je ne peux pas l’importer dans un autre PSD.</li>
<li>En ouvrant l’objet dynamique, vous pourrez voir que ce fichier inclu est au format <abbr lang="en" title="Photoshop Big">PSB</abbr>. Ce format est destiné aux fichiers très volumineux. Dans le cas présent, ce n’est pas forcément utile.</li>
</ul>
<p>Vous l’aurez peut-être deviné, ce qui m’intéresse est d’<strong>avoir un fichier PSD indépendant que je puisse «&nbsp;appeler&nbsp;» dans plusieurs fichiers PSD</strong>. C’est parti pour les derniers réglages&nbsp;:</p>
<ol>
<li>Ayant ouvert mon objet dynamique, je suis dans le fichier PSB. Je commence donc par «&nbsp;Enregistrer sous&nbsp;» mon PSB pour <strong>créer un PSD indépendant de ma maquette</strong>.<br /> <span class="note">Astuce à suivre selon vos préférences&nbsp;: pour me retrouver facilement dans mes différents PSD, je préfixe avec un tiret-bas (<code>_</code>) les PSD qui seront inclus comme objet dynamique. J’ai donc par exemple des fichiers «&nbsp;_header.psd&nbsp;» et «&nbsp;_footer.psd&nbsp;».</span></li>
<li>Une fois que mon PSD externe est créé, j’effectue donc mes modifications dans ce fichier. Pour prendre en compte ces changements dans ma maquette, il suffit simplement de faire un clic-droit sur l’objet dynamique correspondant (dans la fenêtre des calques) et de sélectionner l’option «&nbsp;Remplacer le contenu…&nbsp;».</li>
</ol>
<figure>
<img src="{{ site.path.images }}/{{ permalink }}remplacer-contenu.png" width="277" height="242" alt="" loading="lazy" />
</figure>
<p>Il n’y a plus qu’à choisir votre PSD et hop&nbsp;! Les modifications apportées au PSD s’appliquent à votre maquette aussitôt&nbsp;! <span role="img" aria-label="Heureux">😀</span></p>
<h2>Conclusion</h2>
<p>Je vous ai décris le processus pour 1 seule maquette ici. Ça peut paraître un peu long présenté textuellement, mais dès le moment où on doit travailler sur plus de 2 ou 3 pages, le gain de temps est évident&nbsp;! Le temps pris pour effectuer une modification sur mes éléments récurrents ne change pas, mais <strong>le temps nécessaire à l’application de ces changements sur les PSD de toutes les pages est drastiquement réduit</strong>. Un simple clic-droit puis une sélection de fichier, et la maquette est actualisée, sans risque d’erreurs ou d’oublis. <span role="img" aria-label="Sourire">🙂</span></p>
