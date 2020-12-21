---
layout: "layouts/article.njk"
title: "Compass&nbsp;: import, minification et variables"
date: "2013-05-01T08:10:09+01:00"
permalink: "articles/compass-import-concatenation-et-variables/"
dateUpdate: "2020-06-11T22:22:22+01:00"
---

<p>Il y a quelques temps, je vous expliquais <a href="/articles/debuter-avec-sass-et-compass/">comment installer Sass et Compass et créer son premier projet</a>. Il s’agissait alors de démystifier le passage à la ligne de commande. Je n’avais pas encore eu l’occasion d’utiliser cet outil au sein d’un vrai projet, je m’étais donc gardé d’aller plus loin.</p>
<p>Entre-temps, j’ai commencé à m’y mettre en contexte de production et j’en profite donc pour aller un peu plus loin que mon précédent article.<br />
Même si je n’ai pas encore exploré les fonctions complexes de ce pré-processeur, je peux déjà vous présenter les quelques fonctions que je me suis appropriées et qui me simplifient un peu la vie. <span role="img" aria-label="Sourire">🙂</span></p>
<h2>Inclure un fichier avec @import</h2>
<p>Héritée de la règle @import en <abbr lang="en" title="Cascading Style Sheet">CSS</abbr>, cette règle a philosophiquement le même effet en Sass&nbsp;: elle permet d’inclure un fichier Sass au sein d’un autre fichier Sass.</p>
<p>Mais il y a une différence de taille&nbsp;:</p>
<ul>
<li>En CSS, la règle @import permet de faire référence à un autre fichier CSS. On conserve 2 fichiers distinct.</li>
<li>En Sass, la règle @import permet d’<strong>inclure directement le contenu du fichier CSS importé</strong> dans le fichier <abbr lang="en" title="Sassy CSS">CSS</abbr> qui contient la règle @import. Après compilation, on retrouvera donc 1 seul fichier CSS&nbsp;!</li>
</ul>
<p>L’avantage est donc de pouvoir segmenter ses CSS tout en conservant en sortie un unique fichier CSS. En édition, le découpage modulaire de CSS permet une maintenance aisée. En production, la compilation en 1 seul fichier permet un gain de performance en réduisant le nombre de requêtes <abbr lang="en" title="HyperText Transfer Protocol">HTTP</abbr>.</p>
<h3>Cas pratique</h3>
<p>Prenons l’exemple d’un fichier «&nbsp;styles&nbsp;» de base. On souhaite importer dans ce fichier les fichiers «&nbsp;reset&nbsp;», «&nbsp;structure&nbsp;» et «&nbsp;theme&nbsp;». Mes fichiers seront donc&nbsp;:</p>
<ul>
<li>styles.scss</li>
<li>_reset.scss</li>
<li>_structure.scss</li>
<li>_theme.scss</li>
</ul>
<p>Pourquoi un tiret bas (<code>_</code>) devant les noms des fichiers importés&nbsp;? C’est la nomenclature permettant de spécifier qu’il s’agit de feuilles de styles «&nbsp;partielles&nbsp;». L’intérêt est d’éviter la compilation de ces fichiers.<br />
En effet lors de la compilation du projet, tous les fichiers SCSS sont compilés par défaut en un fichier CSS équivalent. Ajouter un tiret bas en préfixe permettra d’ignorer ces fichiers et de ne pas créer de fichier CSS en sortie.</p>
<p>J’ai donc mes différents fichiers. Il suffit d’importer tous mes fichiers partiels dans le fichier «&nbsp;styles&nbsp;» comme suit&nbsp;:</p>
<pre>@import 'reset';
@import 'structure';
@import 'theme';</pre>
<p>Et voilà, une fois compilé, nous avons un seul fichier styles.css qui contiendra les contenus de l’ensemble de mes fichiers de base. <span role="img" aria-label="Sourire">🙂</span></p>
<h2>Minification</h2>
<p>Ce n’est pas vraiment la raison pour laquelle on choisit un pré-processeur car de nombreux outils permettent de faire ces opérations. Cependant, à partir du moment où on utilise un outil comme Compass, on aurait tort de ne pas profiter de cette option. Surtout que ça fait gagner du temps. <span role="img" aria-label="Sourire">🙂</span></p>
<p>Lors de la compilation du fichier, on peut <strong>définir le format de sortie souhaité</strong>.<br />
La première méthode est de définir un format de sortie par défaut dans le fichier de configuration du projet&nbsp;: <code>config.rb</code></p>
<p>Lors de la création du projet, ce fichier est créé avec plusieurs lignes de paramétrages commentées. Pour définir le format de sortie à la compilation, il faut se pencher sur cette ligne&nbsp;:</p>
<pre lang="en">
# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed
</pre>
<p>Comme vous pouvez le voir, 4 formats de sortie sont possibes&nbsp;:</p>
<ul>
<li><code>:expanded</code> est le format par défaut classique&nbsp;: Les règles sont indentées au même niveau et il y a une propriété par ligne.</li>
<li><code>:nested</code> est une «&nbsp;version Sass&nbsp;» du mode expanded&nbsp;: Le format est globalement le même, sauf au niveau de l’indentation des règles. Elles sont indentées en fonction de la profondeur des sélecteurs, ce qui permet de visualiser la profondeur de l’arborescence des sélecteurs.</li>
<li><code>:compact</code> est une version semi-compressée&nbsp;: Le sélecteur et ses propriétés sont sur une ligne.</li>
<li><code>:compressed</code> sort un code minifié et dépourvu de tout commentaire.</li>
</ul>
<p>On peut donc <strong>minifier automatiquement son CSS au moment de la compilation</strong>, sans avoir à utiliser un autre outil. <span role="img" aria-label="Sourire">🙂</span></p>
<p>Je vous ai présenté là la méthode automatique, à l’aide des paramètres du fichier de configuration du projet. Mais on peut aussi effectuer une compilation manuelle du projet à l’aide de la ligne de commande suivante&nbsp;:</p>
<pre>compass compile --output-style compressed</pre>
<p>Ça a beau ne pas être la fonction phare des pré-processeurs, il n’en reste pas moins qu’elle est très pratique et a l’avantage de s’intégrer de manière transparente au processus de création des CSS.</p>
<h2>Variables</h2>
<p>Un autre avantage mis en avant par tous les pré-processeurs, la possibilité de <strong>pouvoir utiliser des variables</strong>. À l’instar des langages de programmation, on peut ni plus ni moins déclarer des variables qu’on pourra ensuite appeler n’importe où dans nos fichiers de styles.</p>
<p>Le cas d’utilisation que j’ai mis en pratique, sans doute le plus évident pour beaucoup, est <strong>la gestion des couleurs et des éléments purement décoratifs</strong> qu’on peut assimiler au «&nbsp;thème&nbsp;».</p>
<p>Le premier site sur lequel je mets en application ces variables est Agora HD (version en cours de développement). L’équipe du site organise souvent des concours avec le support d’éditeurs plus ou moins importants. Forcément, quand un éditeur s’implique il s’attend à un minimum de mise en valeur pour les lots qu’il fourni généreusement. J’ai donc à de nombreuses reprises fait un thème aux couleurs des concours organisés.<br />
Je m’étais alors fait une feuille de thème avec toutes les déclarations que je modifiais systématiquement pour créer un thème, en écrasant celles présentes dans les fichiers de style principaux. En termes de maintenance ce n’était pas du tout insurmontable mais je devais quand même effectuer un certain nombre de changement de valeurs dans le CSS de mon thème.</p>
<p>Avec Compass, je définis dès le départ une variable pour chaque couleur ou élément visuel qui seront modifiés pour un thème. Je n’aurai plus qu’à changer chacune de ces variables au besoin. <span role="img" aria-label="Sourire">🙂</span></p>
<h3>Cas pratique</h3>
<p>Pour déclarer une variable, rien de bien compliqué. Par exemple pour déclarer la «&nbsp;variable&nbsp;» dont la valeur est la couleur blanche&nbsp;:</p>
<pre>
$variable: rgba(255, 255, 255, 1);
</pre>
<p>Il suffit ensuite d’appeler cette variable où on le souhaite dans les feuilles de styles&nbsp;:</p>
<pre>
body {
  color: $variable;
}
</pre>
<p>Et hop, plus de prise de tête pour changer toutes les couleurs du thème. Il suffit de mettre à jour les variables et le tour est joué. <span role="img" aria-label="Heureux">😀</span></p>
<h2>À votre tour</h2>
<p>Voilà pour les quelques premières possibilités que j’ai décidé d’exploiter, pour commencer. <span role="img" aria-label="Sourire">🙂</span><br />
Vous remarquerez que ça ne bouleverse pas énormément mes habitudes de travail, c’est donc une façon simple de se mettre aux pré-processeurs.</p>
<p>Étant personnellement favorable à l’apprentissage progressif (on ne devient pas expert du jour au lendemain ;)), le fait que Sass et Compass soient totalement compatibles avec du CSS écrit de manière classique est un réel avantage. On peut très bien commencer à utiliser un pré-processeurs et insérer son utilisation naturellement dans nos habitudes, <strong>sans lâcher du jour au lendemain notre CSS écrit à la main</strong></p>
