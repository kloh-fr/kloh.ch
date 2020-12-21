---
layout: "layouts/article.njk"
title: "Débuter avec Sass et Compass"
date: "2013-02-13T18:23:37+01:00"
permalink: "articles/debuter-avec-sass-et-compass/"
dateUpdate: "2020-06-11T22:22:22+01:00"
---

<p>L’avantage d’une période sans emploi, c’est de pouvoir plonger la tête la première dans certains sujets sans craindre de manquer de temps. C’est ainsi que je décide cette semaine de me pencher sur <a href="https://sass-lang.com/" lang="en" rel="external">Sass <span class="screen-reader-text">(lien externe)</span></a> et <a href="http://compass-style.org/" lang="en" rel="external">Compass <span class="screen-reader-text">(lien externe)</span></a>. J’avais déjà pu appréhender le sujet grâce au <a href="https://www.eyrolles.com/Informatique/Livre/css-maintenables-avec-sass-et-compass-9782212136401/" rel="external">livre <abbr lang="en" title="Cascading Style Sheet">CSS</abbr> maintenables <span class="screen-reader-text">(lien externe)</span></a>, je n’avais plus qu’à me lancer.</p>
<p>Je commence à me mettre dedans et la première difficulté arrive&nbsp;: la ligne de commande. Outre le fait d’être totalement néophyte sur ce point, il y a quelques pré-requis techniques auxquels il faut répondre.</p>
<h3>Paramétrer son poste</h3>
<p>En premier lieu, il est nécessaire d’installer <a href="https://www.ruby-lang.org/fr/" rel="external">Ruby <span class="screen-reader-text">(lien externe)</span></a> (pour ce qui est des machines Windows en tout cas) et d’effectuer quelques réglages.<br />
Rien de compliqué&nbsp;: il suffit de <a href="https://rubyinstaller.org/" lang="en" rel="external">télécharger la dernière version de Ruby <span class="screen-reader-text">(lien externe)</span></a> et de lancer l’installation.</p>
<figure>
<img src="{{ site.path.images }}/{{ permalink }}installation-ruby.png" width="513" height="398" alt="" loading="lazy" />
<figcaption>Lors de l’installation, il faut cocher la case «&nbsp;Add Ruby Executables to your PATH&nbsp;» lorsque l’option est proposée</figcaption>
</figure>
<p>Une fois Ruby installé, c’est au tour de Compass. Il faut alors ouvrir l’Invite de commande (sous Windows 7, on y accède depuis le menu Démarrer&nbsp;> Tous les programmes&nbsp;> Accessoires).<br />
À l’ouverture de l’Invite de commande, la ligne commence d’office par quelque chose comme <code>C:\Users\Nom></code>. Il suffit alors de saisir l’instruction suivante et valider avec la touche «&nbsp;Entrée&nbsp;»&nbsp;:</p>
<pre>gem install compass</pre>
<p><span class="note">Note&nbsp;: si Sass peut aussi être installé à part, il n’y a pas besoin de s’en préoccuper car en installant Compass, Sass l’est aussi.</span></p>
<figure>
<img src="{{ site.path.images }}/{{ permalink }}installation-compass.png" width="541" height="227" alt="" loading="lazy" />
<figcaption>Installation de Compass</figcaption>
</figure>
<p>Voilà la partie facile de l’installation passée, il est temps de passer à la création et la configuration d’un projet.</p>
<h3>Créer un projet&nbsp;: l’essai</h3>
<p>C’est la partie la moins triviale, en particulier si on n’est pas du tout familier de la ligne de commande. Les documentations officielles ne sont pas toujours très claires pour un néophyte, je vais donc tenter de vulgariser le plus possible la description des opérations.</p>
<p>Une fois Compass installé, la création d’un projet se fait avec l’instruction suivante, à rentrer dans l’Invite de commande&nbsp;:</p>
<pre>compass create nom-du-projet</pre>
<p>Exposé comme ça, ça a l’air très simple. Mais pour quelqu’un qui n’y connaît rien comme moi, une foultitude de questions surgissent alors. Qu’est-ce que cette instruction génère concrètement&nbsp;? Où est-ce que mon projet se trouve&nbsp;?</p>
<p>Comme tout un chacun, j’ai effectivement une arborescence propre pour mes projets, dépendante de certaines conventions personnelles. L’une de mes conventions est notamment de ne conserver aucun fichier sur mon PC. Ce dernier étant doté d’un disque <abbr lang="en" title="Solid-State Drive">SSD</abbr> de seulement 128&nbsp;<abbr title="Gigaoctet">Go</abbr>, les seules données présentes sur mon poste sont celles des programmes que j’installe et utilise. Toutes mes autres données vont tout droit sur un disque dur externe de travail.</p>
<p>Or, lorsque j’ai testé la création d’un projet «&nbsp;test&nbsp;» avec la commande <code>compass create test</code>, j’ai été bien désappointé de voir que cette commande me crée un répertoire «&nbsp;test&nbsp;» dans mon dossier utilisateur Windows (sur le disque local C:\Utilisateurs\nom-utilisateur). En complément, la création d’un nouveau projet s’accompagne par défaut de la création de différents répertoires et fichiers. On y trouve le répertoire «&nbsp;.sass-cache&nbsp;» et le fichier «&nbsp;config.rb&nbsp;»&nbsp;: le premier est un cache utile à la compilation des fichiers (lorsqu’on convertit le fichier .scss en fichier .css)&nbsp;; le deuxième est le fichier de configuration du projet. Jusque là, rien d’anormal.</p>
<figure>
<img src="{{ site.path.images }}/{{ permalink }}compass-projet.png" width="422" height="122" alt="" loading="lazy" />
<figcaption>Projet par défaut Compass</figcaption>
</figure>
<p>Mais sont aussi créés deux répertoires «&nbsp;sass&nbsp;» et «&nbsp;stylesheets&nbsp;», respectivement pour accueillir les fichiers d’édition et les fichiers de sortie. Et dans ces répertoires sont encore créés des fichiers «&nbsp;ie&nbsp;», «&nbsp;print&nbsp;» et «&nbsp;screen&nbsp;» par défaut.<br />
Moi qui souhaite utiliser Compass sur un projet existant, dont l’arborescence est déjà bien définie et pour lequel j’ai déjà des CSS existantes, me voilà bien embêté&nbsp;!<br />
Mais fort de ce premier essai, je me retrousse donc les manches pour arriver à faire ce que je souhaite&nbsp;: utiliser Compass sur mon projet existant, en l’intégrant pleinement dans mon organisation habituelle.</p>
<h3 id="repertoire-projet">Intégrer un projet Compass dans un projet existant</h3>
<p>À force de recherches et d’expérimentations, je trouve donc le moyen de gérer les fichiers sur mon projet déjà présent.</p>
<p>La première étape consiste à cibler le répertoire de mon projet plutôt que mon dossier utilisateur Windows. Dans mon cas, il s’agit d’un disque dur externe dont la lettre du lecteur est «&nbsp;G&nbsp;». Je commence donc par changer de lecteur dans l’Invite de commande&nbsp;:</p>
<pre>G:</pre>
<p><span class="note">Note&nbsp;: bien évidemment, si vous travaillez sur le disque C, vous n’avez pas à faire cette première manipulation.</span></p>
<p>L’étape suivante consiste à cibler le répertoire de mon projet. Le mien se trouve dans un répertoire «&nbsp;projet&nbsp;» lui-même dans un répertoire «&nbsp;sites&nbsp;». Pour le cibler, je rentre la commande suivante&nbsp;:</p>
<pre>cd \sites\projet</pre>
<p>Ici <code>cd</code> permet de cibler le répertoire.<br />
Il est suivi par le chemin du-dit répertoire. Ce chemin, précédé d’un anti-slash (<code>\</code>), fait référence à la racine de mon lecteur. Notez que contrairement à une <abbr lang="en" title="Uniform Resource Locator">URL</abbr>, l’ensemble des séparateurs de niveau sont des anti-slash.</p>
<p>À ce stade, je suis dans le répertoire de mon projet. Il ne me reste plus qu’à créer mon projet Compass en son sein. Ce que je fais avec l’instruction suivante&nbsp;:</p>
<pre>compass create --bare --sass-dir "sass" --css-dir "css"</pre>
<p>Décortiquons ça morceau par morceau&nbsp;:</p>
<ol>
<li><code>compass create</code> consiste donc à créer le projet Compass comme nous l’avons vu plus haut.</li>
<li><code>--bare</code> évite la création des répertoires et fichiers par défaut. Cette instruction est donc essentielle dès lors qu’on a déjà une arborescence de fichiers et qu’on ne souhaite pas la voir polluée par des dossiers et fichiers générés par Compass.</li>
<li><code>--sass-dir</code> définit le répertoire qui accueillera mes fichiers de travail .scss. Il est suivi de la valeur entre guillemets <code>"sass"</code>. Cela veut dire qu’un dossier «&nbsp;sass&nbsp;» sera créé à la racine du répertoire de mon projet.</li>
<li><code>--css-dir</code> définit le répertoire qui accueillera mes fichiers .css (qui seront compilés à partir des fichiers .scss). La valeur correspondante est <code>"css"</code>. Un dossier «&nbsp;css&nbsp;» sera en conséquence créé à la racine de mon projet. Dans mon cas, un dossier «&nbsp;css&nbsp;» existe déjà. Dans ce cas de figure, l’instruction ne touche à rien et l’information est simplement renseignée dans le fichier de configuration.</li>
</ol>
<p>Et voilà, en validant cette instruction, mon projet Compass est créé au sein de mon projet global&nbsp;! Le fichier de config est créé à la racine de mon projet, tout comme les répertoires de travail. Si l’opération se déroule avec succès, vous obtenez un message de confirmation <code>Congratulations! Your compass project has been created...</code> dans l’Invite de commande.</p>
<figure>
<img src="/images/articles/debuter-avec-sass-et-compass/compass-congrats.png" width="569" height="359" alt="" loading="lazy" />
<figcaption>Confirmation de création de projet Compass</figcaption>
</figure>
<h3>Produire les fichiers CSS avec Compass</h3>
<p>Maintenant que tout est prêt pour utiliser Sass et Compass sur mon projet&nbsp;! Il n’y a plus qu’à créer un premier fichier .scss à compiler pour obtenir mon fichier .css, c’est lui qui sera mis en ligne.</p>
<p>Je crée donc mon fichier que je nomme «&nbsp;style.scss&nbsp;» et que je place dans le répertoire «&nbsp;sass&nbsp;» de mon projet. Pour le compiler et générer mon fichier CSS final, il faut repasser par la ligne de commande. Je saisis dans l’Invite de commande l’instruction suivante&nbsp;:</p>
<pre>compass compile</pre>
<p>Cette commande a pour effet de compiler l’ensemble des fichier .scss présents dans le répertoire «&nbsp;sass&nbsp;» et de générer leur équivalent .css dans le répertoire «&nbsp;css&nbsp;».</p>
<p><span class="note">Note&nbsp;: cette ligne de commande fonctionne si on est situé dans le répertoire de mon projet dans l’Invite de commande. Si on se situe pas au niveau du bon répertoire dans l’Invite de commande, il faut répéter <a href="#repertoire-projet">l’opération pour cibler le répertoire du projet</a>. En effet, il faut savoir qu’on est toujours situé dans le répertoire par défaut à l’ouverture de l’Invite. Donc dès lors que vous fermez l’Invite de commande, il faudra cibler à nouveau votre répertoire quand vous vous reconnectez, avant de pouvoir compiler vos fichiers.</span></p>
<p>Si tout se passe bien, un fichier «&nbsp;style.css&nbsp;» est créé dans mon répertoire «&nbsp;css&nbsp;». Par défaut c’est en effet le nom du fichier .scss qui est utilisé.</p>
<p>Je sais désormais compiler mes fichiers Sass, mais l’opération est un peu lourde car la commande <code>compile</code> est manuelle. Il faut donc la saisir à chaque fois qu’on veut générer les fichiers CSS. Mais il existe une commande bien pratique qui permet d’automatiser la compilation. Au lieu de l’instruction précédente, il faut saisir&nbsp;:</p>
<pre>compass watch</pre>
<p>Cette commande a pour effet de compiler automatiquement les fichiers .scss dès lors qu’ils sont modifiés. Une fois qu’elle est saisie, on n’a plus qu’à se concentrer sur l’édition des fichiers Sass et le reste se fait tout seul. <span role="img" aria-label="Sourire">🙂</span></p>
<p>Nous voilà enfin opérationnels&nbsp;!</p>
<h3>Au boulot&nbsp;!</h3>
<p>Avec cette introduction aux premiers pas avec Sass et Compass, vous êtes normalement parés à vous lancer&nbsp;!<br />
Même si je n’ai pas encore eu le temps d’aller beaucoup plus loin, je pense que cette première étape de paramétrage est la plus compliquée à passer. J’espère donc pouvoir aider quelques frileux à se lancer et à découvrir cet outil. <span role="img" aria-label="Sourire">🙂</span></p>
<p>Bien sûr, cet article reste une introduction très vulgarisée.<br />
Même si je n’ai pas pu tester toutes les possibilités de Compass, je sais qu’il existe pas mal d’autres paramètres qu’on peut prendre en compte, ne serait-ce qu’au moment de la création du projet.<br />
Cette introduction a donc avant tout pour objectif de démystifier l’utilisation de la ligne de commande auprès des néophytes et de tenter d’expliquer la logique de base de l’outil.</p>
<p>Comme c’est mon premier article sur ce blog, j’invite aussi les lecteurs qui auront été jusqu’au bout à me faire part de leurs critiques sur le fond comme sur la forme. J’essaierai d’améliorer les choses en conséquence pour les futures publications. <span role="img" aria-label="Sourire">🙂</span></p>
