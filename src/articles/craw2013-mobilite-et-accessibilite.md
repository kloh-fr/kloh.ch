---
layout: "layouts/article.njk"
title: "CRAW2013&nbsp;: mobilité et accessibilité"
date: "2013-04-22T08:42:06+01:00"
permalink: "articles/craw2013-mobilite-et-accessibilite/"
dateUpdate: "2020-06-11T22:22:22+01:00"
---

<p>Après le <a href="/articles/craw2013-html5-aria-et-accessibilite-web/">la conférence de Jean-Pierre Villain sur HTML5 et ARIA</a>, voici la deuxième partie de mon compte-rendu de la Conférence Romande sur l’Accessibilité du Web 2013, cette fois sur les aspects de mobilité.</p>
<p>Il n’a échappé à personne que nous vivons désormais dans un monde mobile. Depuis la sortie de l’iPhone en 2007, notre usage de l’Internet a complètement changé, si bien qu’on le consomme aujourd’hui davantage sur mobiles et/ou tablettes, que sur nos traditionnels ordinateurs de bureau. Il n’est donc pas surprenant que plusieurs des présentations de cette journée soient portées sur le web mobile. Car si le web a évolué, l’accessibilité a – et doit – évoluer avec.</p>
<h2>Démonstration d’usages mobiles</h2>
<p>La première présentation sur le sujet consistait en une démonstration de la révolution permise par le mobile pour les personnes handicapées, et particulièrement pour les non-voyants.</p>
<p>Ainsi, <a href="https://twitter.com/Pianist_85" rel="external">Daniele Corciulo <span class="screen-reader-text">(lien externe)</span></a>, non-voyant, explique tout ce que l’iPhone lui permet de faire.<br />
Il commence par une démonstration des possibilités de navigation basiques une fois les options d’accessibilité activées.</p>
<ul>
<li><strong>Pour déverrouiller le téléphone</strong>, le configuration classique demande de faire glisser un slider sur le côté. Mais en tant que non-voyant, c’est une opération délicate. En activant les options d’accessibilité, il suffit de faire un double tap.</li>
<li>De manière générale, <strong>le double tap permet de valider une action</strong>. Ainsi, pour naviguer parmi les applications, il suffit de glisser le doit sur la droite ou la gauche (on passe alors à l’application suivante ou précédente). Une fois sur l’application désirée, un double tap permet de la lancer.</li>
</ul>
<p>Il s’agit des manipulations de base, mais avec ces quelques adaptations ergonomiques natives, le téléphone est totalement utilisable par un non-voyant&nbsp;!</p>
<p>Après cette première présentation, il passe à la démonstration de quelques applications.</p>
<p>Il commence par <a hreflang="en" lang="en" href="https://www.blindsquare.com/" rel="external">Blindsquare <span class="screen-reader-text">(lien externe)</span></a> qui est une application dédiée aux non-voyants et combinant <a href="https://fr.foursquare.com/" lang="en" rel="external">Foursquare <span class="screen-reader-text">(lien externe)</span></a> et <a href="https://www.openstreetmap.org/" lang="en" rel="external">Open Street Map <span class="screen-reader-text">(lien externe)</span></a>. À partir de sa position géographique, l’application liste tous les lieux alentours (commerces, monuments, transports…). En sélectionnant un lieu, l’application donne l’itinéraire à emprunter pour s’y rendre.</p>
<p>Une autre application donnée en exemple est celle des <abbr title="Chemins de Fer Fédéraux">CFF</abbr> (équivalent Suisse de notre <abbr title="Société Nationale des Chemins de Fer">SNCF</abbr>) qui lui permet à tout moment de <strong>consulter les horaires de trains, les arrêts mais aussi le quai de départ des trains</strong>.</p>
<p>Une autre application qui a changé sa vie quotidienne&nbsp;: l’application du journal 20 Minutes. Avant, pour lire le journal, il devait attendre que la version audio soit téléchargeable, il devait la télécharger et une fois fait, il lui fallait encore le matériel pour l’écouter. Aujourd’hui, <strong>il lui suffit de lancer l’application et toutes les informations lui sont directement accessibles</strong>. Il peut ainsi écouter le journal dans le train, à l’instar d’un voyant lisant son journal sur la route de travail.</p>
<p>Malgré ces quelques très bons exemples, Daniele émet quand même un bémol. Car si l’iPhone est totalement utilisable nativement par un non-voyant, ce n’est pas nécessairement le cas de toutes les applications.<br />
En effet, <strong>l’accessibilité d’une application dépend de la qualité du développement</strong>. Si les développeurs ne respectent pas les normes définies par Apple pour créer leur application, cette dernière peut être au final totalement inaccessible…</p>
<p>Il donne en exemple – de ce qu’il ne faut pas faire – l’application <span lang="en">TicketCorner</a>. Cette application permettant de réserver des places de spectacles ou d’évènements sportifs est en effet inutilisable pour un non-voyant&nbsp;: la liste des évènements n’est absolument pas restituée par <span lang="en">VoiceOver</span>.</p>
<p>Pour ne pas finir sur une mauvaise note, Daniele donne encore de bons exemples&nbsp;: <a href="https://twitter.com/Access4All/status/324093150161432577" rel="external">il envoie ainsi un tweet en direct <span class="screen-reader-text">(lien externe)</span></a> depuis l’application Twitter ou encore effectue un transfert d’argent avec l’application PostFinance.</p>
<p>Après cet ensemble de démonstrations toujours impressionnantes, un auditeur pose la question de l’accessibilité d’Android par rapport à iOS. Et ça tombe bien, la présentation suivante compare justement les 2 systèmes. <span role="img" aria-label="Sourire">🙂</span></p>
<h2>Évaluation de l’accessibilité des téléphones tactiles à l’aide de tests utilisateurs</h2>
<p>Directement après la démonstration de Daniele Corciulo, <a href="https://twitter.com/arnaudbgu1" rel="external">Arnaud Béguin <span class="screen-reader-text">(lien externe)</span></a> présente les résultats d’une étude comparative sur l’accessibilité de l’iPhone 4S et du Nexus (sous Android 4.0), réalisée à la fin de l’été 2012.<br />
L’étude s’est déroulée sous forme de <strong>tests utilisateurs impliquant 10 utilisateurs non-voyants</strong>. Chacun de ces utilisateurs devait effectuer des tâches prédéfinies, sur iPhone et sur Android. L’objectif était d’évaluer l’usage des fonctions primaires du téléphone&nbsp;:</p>
<ul>
<li>Interactions gestuelles</li>
<li>Retours d’information</li>
<li>Entrée de texte</li>
<li>Navigation dans une liste</li>
<li>Appel téléphonique</li>
</ul>
<p>L’analyse des tests s’est portée sur l’observation de réussite ou non des tâches ainsi que sur les retours du ressenti des utilisateurs. Et sans trop de surprise, <strong>l’iPhone se détache clairement d’Android</strong>.</p>
<p>L’une des principales raisons est que l’iPhone a été <strong>pensé dès le départ pour être utilisable par des personnes non-voyantes</strong>. Au contraire d’Android qui ne disposait pas d’options d’accessibilité dans ces premières versions.<br />
Et même si Google a beaucoup amélioré cet aspect au fil des versions, le fait qu’Android soit hautement personnalisable ajoute une difficulté à l’obtention, en bout de chaîne, d’une interface accessible. Ainsi, Arnaud explique que des téléphones sous Android peuvent être totalement inaccessible quand le constructeur personnalise trop – et surtout mal&nbsp;? – l’interface.</p>
<p>Au delà de la différence de maturité de chacune des plateformes sur le point de l’accessibilité, certains points constatés pendant les tests mettent tout de même des différences cruciales en lumière.</p>
<p>Déjà pour la navigation dans les menus&nbsp;:</p>
<ul>
<li><strong>Sur iPhone&nbsp;:</strong> il faut glisser à droite ou à gauche comme on l’a vu lors de la présentation de Daniele. À chaque glissement, l’intitulé de l’item sur lequel on se trouve est restitué et il faut effectuer un double tap pour l’ouvrir.</li>
<li><strong>Sur Android&nbsp;:</strong> on navigue à l’aide de 2 doigts avec un mouvement de haut en bas. Et déjà un premier problème apparaît&nbsp;: avec un mouvement haut/bas, il arrive que les utilisateurs déroulent le panneau de paramètres du téléphone (la barre d’état en haut du téléphone qui se déroule), ce qui les interromps dans leur navigation. De la même manière, avec un mouvement bas/haut, les utilisateurs retournent à l’accueil ou à l’étape précédente, puisque la plupart des téléphones sous Android ont des boutons pour ces fonctions en dessous de l’écran.</li>
</ul>
<p>Autant dire que l’avantage au profit du modèle de la marque à la pomme est déjà flagrant.<br />
Mais ce n’est pas fini, un autre point noir d’Android se situe dans la saisie et la validation d’information&nbsp;:</p>
<ul>
<li><strong>Sur iPhone&nbsp;:</strong> la saisie d’information se fait assez intuitivement, en fonction de la position de son doigts sur l’écran, on prend le focus sur une option. On navigue ensuite dans les options de gauche à droite et inversement. Chaque option est vocalisée, permettant à l’utilisateur de savoir sur laquelle il se trouve. Un double tap permet de valider l’option et elle est, le cas échéant, vocalisée avec une intonation différente, indiquant bien que l’action a été effectuée. À noter que cette logique s’applique à la navigation dans les menus mais aussi à la saisie d’informations avec le clavier.</li>
<li><strong>Sur Android&nbsp;:</strong> c’est une autre paire de manche. À commencer par le parcours du clavier&nbsp;! La navigation se fait en parcourant l’écran avec le doigt. Les options parcourues sont restituées. Mais dès lors que l’utilisateur lève le doigt, l’option sur laquelle il se trouvait est saisi, sans retour d’information vocal. Si pour la moindre raison son doigt perd le contact avec l’écran, il active une option indésirée… Lorsqu’il s’agit de saisir du texte, les manipulations a effectuer se révèlent être un parcours du combattant.</li>
</ul>
<p>Arnaud a donné bien d’autres détails, mais ces 2 aspects étaient ce qu’il y avait de plus marquants et ils permettent de se faire une idée assez claire de la différence de niveau.</p>
<p>Après, <strong>Android ne cumule pas que des mauvais points</strong>. Dans les points positifs, une <strong>gestion du clavier numérique assez intelligente</strong>&nbsp;: peu importe où le doigt est posé sur l’écran, c’est systématiquement le 5 qui se trouve dessous. Le reste du clavier numérique est donc positionné autour du 5, à l’instar d’un clavier numérique physique. Pour taper 2, il suffit de glisser le doigt au dessus. Pour 9, il faut glisser le doigt dans la diagonale bas/droite. Même s’il y a quelques problèmes, lorsque le doigt est posé sur un bord de l’écran notamment, c’est un système assez intelligent qui permet une saisie rapide.</p>
<p>En attendant la présentation détaillée, vous avez déjà un aperçu des retours de l’étude. <span role="img" aria-label="Sourire">🙂</span> Au final, la comparaison est donc difficilement équitable et l’iPhone se détache clairement si on s’arrête à l’accessibilité des 2 plateformes.</p>
<p>Il serait intéressant d’avoir une étude équivalente avec Firefox OS quand ce dernier sera disponible chez nous. L’étude a en effet montré que <strong>l’un des avantages de l’iPhone était son environnement fermé</strong>. Est-ce qu’un environnement à l’opposé, entièrement à base de HTML, a une chance de concurrencer l’iPhone et de proposer un environnement modèle d’accessibilité&nbsp;? Je l’espère. </p>
<h2>Conclusion</h2>
<p>Voilà pour cette deuxième partie orientée mobilité et qui clôture la matinée de conférences. <span role="img" aria-label="Sourire">🙂</span><br />
Sorti des aspects techniques, <strong>ces démonstrations et retours d’expériences ont toujours ce goût de réveil à l’eau froide</strong>. À titre personnel, j’adore. Ce sont des moments où on se trouve confronté à la réalité « du terrain » et à l’expérience réelle des utilisateurs. C’est toujours très enrichissant et ça permet de se rendre compte de la complexité à laquelle certains font face pour réaliser des tâches qui nous paraissent simples.</p>
<p>Mais au delà de cet aspect, c’est incroyable de se rendre compte que sans autre matériel que son téléphone, un non-voyant peut se déplacer de manière totalement indépendante. <strong>Si le web était déjà une révolution en termes d’accès à l’information pour les personnes en situation de handicap, le web mobile est une révolution pour l’accès au monde physique&nbsp;!</strong></p>
<p>À bientôt pour la suite de ce compte-rendu. <span role="img" aria-label="Heureux">😀</span></p>
