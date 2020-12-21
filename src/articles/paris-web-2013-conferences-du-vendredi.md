---
layout: "layouts/article.njk"
title: "Paris Web 2013&nbsp;: conférences du vendredi"
date: "2013-10-21T14:08:23+01:00"
permalink: "articles/paris-web-2013-conferences-du-vendredi/"
dateUpdate: "2020-06-11T22:22:22+01:00"
---

<p>Après <a href="/articles/paris-web-2013-conferences-du-jeudi/">le compte-rendu de la première journée</a>, c’est parti pour la seconde journée&nbsp;!</p>
<h2>Le web après les mots de passe</h2>
<p>J’ai commencé la journée sur le thème de la <strong>sécurité</strong> avec la présentation d’<a href="https://twitter.com/opoto" rel="external">Olivier Potonniée <span class="screen-reader-text">(lien externe)</span></a>.</p>
<p>Olivier pose le constat de base&nbsp;: la majorité des systèmes d’authentification utilisés aujourd’hui se résument à un <strong>couple nom d’utilisateur/mot de passe</strong>. Petit problème, la majorité des utilisateurs définissent des <strong>mots de passe peu sécurisés</strong>.<br />
Il étaye d’ailleurs son discours avec un cas réel. En 2009, le réseau social RockYou a été hacké et les comptes de 30 millions d’utilisateurs dont les mots de passe étaient stockés en clair (pas bien&nbsp;!) ont été récupérés. L’analyse des mots de passe a révélé des statistiques édifiantes&nbsp;:</p>
<ul>
<li>290 729 utilisateurs (1%) avaient <strong>le même mot de passe «&nbsp;123456&nbsp;»</strong>.</li>
<li>Seuls <strong>40% des mots de passe étaient uniques</strong>. C’est à dire que pour les 60% de mots de passe restants, chaque mot de passe était utilisé par au moins 2 utilisateurs.</li>
<li>Les <strong>10 000 mots de passe les plus courants</strong> (soit 0,03% des 30 millions d’enregistrements) étaient utilisés par <strong>24% des utilisateurs</strong>.</li>
</ul>
<p>Autre chiffre édifiant, d’après une étude de BitDefender, 75% des utilisateurs utilisent <strong>le même mot de passe pour leurs comptes emails et leurs comptes de réseaux sociaux</strong>. Bref, les mots de passe sont insuffisants pour assurer la sécurité de nos comptes d’après l’orateur.</p>
<p>Olivier a donc fait un étalage des alternatives, à commencer par les solutions dites d’<strong>authentification forte</strong>. L’idée étant d’apporter un niveau de sécurité supplémentaire en combinant les classiques noms d’utilisateurs/mot de passe avec une autre solution d’authentification&nbsp;: <a href="https://fr.wikipedia.org/wiki/Mot_de_passe_%C3%A0_usage_unique" rel="external">mots de passe uniques <span class="screen-reader-text">(lien externe)</span></a>, certificats numériques embarqués sur une clé USB, solution biométrique… Les solutions ne manquent pas.</p>
<p>Il a ensuite présenté les solutions d’identification sociale telles qu’<a href="https://openid.net/" rel="external">OpenID <span class="screen-reader-text">(lien externe)</span></a>. Plus qu’une sécurisation supplémentaire, l’idée est ici de simplifier la gestion des différents comptes de l’utilisateur en lui demandant de ne retenir qu’un seul couple d’identifiants qu’il utilisera sur tous les sites.<br />
Olivier apporte cependant une nuance sur ces services car si certains sont des services d’<strong>authentification</strong> (OpenID, Browser ID), d’autres ne sont que des services d’<strong>identification</strong> (OAuth utilisé notamment par Facebook et Twitter). Dans ce dernier cas, il y a plus de risques au niveau de la vie privée de l’utilisateur, notamment parce qu’au delà de se connecter avec notre identité pré-existante, <strong>on donne accès à tout ou partie de nos données</strong>.</p>
<p>Au final, si la problématique est intéressante et bien réelle, elle reste toute relative. Car comme l’a très justement signalé un des auditeurs au moment des questions, quelque soit la solution utilisée, toutes s’appuient à la base sur un compte auquel on est identifié avec… <strong>un mot de passe&nbsp;!</strong><br />
Il suffit donc que le mot de passe du compte principal soit peu sécurisé pour que l’accès à toutes nos données et comptes soit possible à partir d’un seul compte. Autant dire que le risque est même finalement plus élevé.</p>
<p>Bref, pour être tranquille, choisissez <strong>un mot de passe unique et fort pour chacun de vos comptes</strong>, et <strong>évitez la facilité</strong> des Facebook Connect et consors. C’est la recette que j’utilise depuis un bon moment et je ne m’inquiète pas trop pour mes données et informations. <span role="img" aria-label="sourire">🙂</span></p>
<p>Les ressources de la conférence&nbsp;:</p>
<ul>
<li><a href="https://fr.slideshare.net/opoto/beyond-passwords-time-for-a-change" rel="external">Slides de «&nbsp;Le web après les mots de passe&nbsp;» sur Slideshare <span class="screen-reader-text">(lien externe)</span></a></li>
</ul>
<h2>Un bon design n’est pas beau&nbsp;!</h2>
<p>Pour enchaîner sur le sujet tout à fait sérieux des mots de passe, je suis resté dans la même salle pour écouter <a href="https://desbenoit.net/" rel="external">Sébastien Desbenoit <span class="screen-reader-text">(lien externe)</span></a> parler de bon/beau design. J’ai découvert ses qualités d’orateur lors de l’édition de l’année dernière et je dois dire que j’adore. Il a une façon <strong>très ludique</strong> de présenter l’information tout en prenant le soin d’avoir extrêmement bien <strong>préparé et documenté son sujet</strong>. J’étais donc pressé de voir sa prestation.</p>
<p>En 15 petites minutes il a pu nous placer les définitions du beau dans l’histoire pour mettre en valeur le fait que <strong>la notion de «&nbsp;beau&nbsp;» est toute relative</strong>. Suivant nos aspirations personnelles, on ne trouvera pas tous le «&nbsp;beau&nbsp;» aux mêmes endroits.<br />
Au delà de cet état de fait très scientifique, ce qu’on peut trouver beau ne signifie par pour autant que c’est bon. Il prend comme exemple les désormais classiques <strong>Le bon coin</strong> et <strong>Cdiscount</strong> qui sont les exemples typiques de sites que tout le monde trouve globalement moches et qui pourtant marchent du tonnerre.<br />
La raison qu’il met en avant&nbsp;: il faut savoir écouter le marketing, un site peut tout à fait être moche et fonctionner pour la simple raison qu’<strong>il répond aux besoins de sa cible</strong>. Le designer doit donc créer son design en fonction de la cible du site Internet. Et si pour y répondre le site doit être moche, alors le designer doit un peu ravaler sa fierté et se préoccuper des utilisateurs.</p>
<p>Les ressources de la conférence&nbsp;:</p>
<ul>
<li><a href="https://speakerdeck.com/desbenoit/un-bon-design-nest-pas-beau" rel="external">Slides de «&nbsp;Un bon design n’est pas beau&nbsp;!&nbsp;» sur Speaker Deck <span class="screen-reader-text">(lien externe)</span></a></li>
</ul>
<h2>Vers une nouvelle éthique</h2>
<p>Toujours dans la même salle, on passe du design à la politique. En écho de la conférence d’Amaëlle Guilton la veille, celle de <a href="https://dascritch.net" rel="external">Xavier Mouton-Dubosc <span class="screen-reader-text">(lien externe)</span></a> remet sur le tapis <strong>l’importance de s’engager</strong>, en tant que professionnel du web, pour <strong>défendre et promouvoir un modèle de société</strong> révélé par l’évolution fulgurante du web ces 20 dernières années.<br />
Sur un ton résolument burlesque, Xavier a donc enchaîné les images révélatrices de l’écart entre le monde politique d’aujourd’hui (et de ces dernières années) et du monde du web, le premier menaçant sérieusement le second. Je ne saurais que trop vous conseiller de vous jeter sur la vidéo de la conférence lorsqu’elle sera diffusée. <strong>Car en plus d’être très drôle, la conférence est riche en contenu et met en valeur des intérêts qui nous concernent tous.</strong></p>
<p>Les ressources de la conférence&nbsp;:</p>
<ul>
<li><a href="https://dascritch.net/vrac/.blog2/sitcom/1310-ParisWeb-ConferenceCaptures/presentation.html#/" rel="external">Slides de «&nbsp;Vers une nouvelle éthique&nbsp;» <span class="screen-reader-text">(lien externe)</span></a></li>
<li><a href="https://dascritch.net/post/2013/10/15/Vers-une-nouvelle-%C3%A9thique" rel="external">Retranscription de la conférence sur le blog de Xavier Mouton-Dubosc <span class="screen-reader-text">(lien externe)</span></a>
</ul>
<h2>Livre Électronique et Standards du Web</h2>
<p>Après la petite pause du matin, je suis allé voir <a href="http://www.glazman.org" rel="external">Daniel Glazman <span class="screen-reader-text">(lien externe)</span></a> venu parler des évolutions techniques qui lient les livres électroniques et le web. Même si c’est un sujet qui paraît loin du web, c’est quelque chose qui m’intéresse beaucoup.</p>
<p>Daniel commence donc par brosser un petit historique de l’évolution du livre électronique jusqu’au format <abbr lang="en" title="Electronic Publication">EPUB</abbr> 3, dont l’objectif est de <strong>faire converger les technologies des livres électroniques avec les standards du web</strong>.<br />
Si les améliorations au fil du temps sont notables, il apparaît qu’<strong>il reste quand même un énorme travail de standardisation</strong> pour que la spécification EPUB 3 soit solide. Notamment parce que la spécifications EPUB 3 s’appuie sur des spécifications du <abbr lang="en" title="World Wide Web Consortium">W3C</abbr> en brouillon et donc <strong>soumises à des évolutions intempestives permanentes</strong>. En conséquence, un livre en EPUB 3 développé il y a un an et un autre développé aujourd’hui <strong>peuvent contenir des différences notables pour la simple raison que les spécifications sur lesquelles se sont appuyés les développeurs ont évolué entre temps</strong>.</p>
<p>Bref, l’état des lieux en termes de standardisation des livres électroniques n’est pas brillant d’après le tableau peint par Daniel. Mais les choses bougent et <strong>les industriels et le W3C travaillent désormais ensemble</strong> pour développer un standard solide.</p>
<p>Les ressources de la conférence&nbsp;:</p>
<ul>
<li><a href="https://fr.slideshare.net/glazou/20131011-parisweb" rel="external">Slides de «&nbsp;Livre Électronique et Standards du Web&nbsp;» sur Slideshare <span class="screen-reader-text">(lien externe)</span></a></li>
<li><a href="https://www.paris-web.fr/2013/conferences/livre-electronique-et-standards-du-web.php" rel="external">Vidéo sur le site de Paris Web <span class="screen-reader-text">(lien externe)</span></a></li>
</ul>
<h2 lang="en">Keep calm and carry on</h2>
<p>Après la conférence de Delphine la veille, en voici une autre traitant du <strong>bien-être des collaborateurs</strong> avec cette fois un retour d’expérience très concret. Ainsi, <a href="https://twitter.com/schwartzlou" rel="external">Lou Schwartz <span class="screen-reader-text">(lien externe)</span></a> raconte comment elle a réagit et ce qu’elle a mis en place pour rassurer une stagiaire submergée par le stress. Malgré des tentatives de discussion et même en déchargeant la stagiaire de certaines de ses tâches, son niveau de stress ne baissait pas.<br />
Elle a donc mis en place une série d’exercices pour <strong>identifier l’origine de son stress</strong> et <strong>mettre en place les solutions permettant d’y remédier</strong>. Avec de la persévérance, Lou a ainsi pu <strong>rassurer et déverrouiller les points de blocage</strong> de sa stagiaire.<br />
La stagiaire a ainsi pu compléter ses tâches avant la fin de son stage, son état d’esprit s’est amélioré ce qui a par extension un <strong>effet positif sur l’ensemble de l’équipe</strong>.</p>
<p>Les ressources de la conférence&nbsp;:</p>
<ul>
<li><a href="https://fr.slideshare.net/louschwartz/grand-auditorium-vendredi12h10keepcalmandcarryonparisweb11" rel="external">Slides de «&nbsp;Keep calm and carry on&nbsp;» sur Slideshare <span class="screen-reader-text">(lien externe)</span></a></li>
<li><a href="https://www.paris-web.fr/2013/conferences/keep-calm-and-carry-on.php" rel="external">Vidéo sur le site de Paris Web <span class="screen-reader-text">(lien externe)</span></a></li>
</ul>
<h2>Les méthodes d’influence dans le web par l’exemple</h2>
<p>On passe ensuite à une conférence de rêve pour les «&nbsp;marketeux&nbsp;». Yannick Bonnieux a fait défiler les <strong>méthodes d’influence existantes dans le cadre d’un parcours d’achat</strong>. Il étaye son propos avec pas mal d’études chiffrées et il en ressort une présentation très dense en termes de contenu.<br />
Une présentation donc très instructive mais le format de 15 minutes était un peu limite étant donnée la richesse des contenus.<br />
Il me semble qu’il y a eu aussi des reproches quant aux chiffres avancés – issus d’études scientifiques, mais j’ai envie de dire que c’est toujours la même chose. les statistiques sont toujours <strong>à prendre avec du recul</strong> et ne sont pas applicables telles quelles sur un projet. <strong>Chaque cas est particulier</strong> et c’est seulement une étude au cas par cas qui permet de mesurer réellement quelles techniques marchent le mieux dans un cas précis.</p>
<p>Les ressources de la conférence&nbsp;:</p>
<ul>
<li><a href="https://fr.slideshare.net/YannickBonnieux/les-mthodes-dinfluence-dans-le-web-par-lexemple-paris-web-2013" rel="external">Slides de «&nbsp;Les méthodes d’influence dans le web par l’exemple&nbsp;» sur Slideshare <span class="screen-reader-text">(lien externe)</span></a></li>
<li><a href="https://www.paris-web.fr/2013/conferences/les-methodes-dinfluence-dans-le-web-par-lexemple.php" rel="external">Vidéo sur le site de Paris Web <span class="screen-reader-text">(lien externe)</span></a></li>
</ul>
<h2>Esthétique et pratique du Web qui rouille</h2>
<p>Suite à une matinée intense, j’ai commencé l’après-midi avec un grand bol d’air et une ouverture maximale de mes chakras. Les conférences qui prennent autant de hauteur sont celles que je préfère – et de loin – et celle-ci ne déroge pas à la règle&nbsp;: <strong>j’ai a-do-ré&nbsp;!</strong></p>
<p><a href="https://www.la-grange.net/" rel="external">Karl Dubost <span class="screen-reader-text">(lien externe)</span></a> et <a href="https://olivier.thereaux.net/" rel="external">Olivier Thereaux <span class="screen-reader-text">(lien externe)</span></a> se posent la question de <strong>la gestion de nos données</strong> diffusées sur le web et plus largement de nos données numériques. Leur présentation est ainsi tissée d’exemples et de parallèles issus de la vie réelle qui aident à matérialiser les idées.<br />
Ainsi, Karl commence par donner l’exemple du ticket de caisse, <strong>espace de communication restreint au possible et pourtant riche en données</strong>&nbsp;: date, lieu, magasin, nom de l’hôtesse de caisse, etc. La plupart du temps, on jette ces tickets aussi vite qu’on les a reçus. Mais parfois, ce ticket sert de preuve d’achat voire même de garantie. <strong>Soudain, le ticket qu’on jette habituellement devient important et on le conserve.</strong> C’est la même chose pour nos données numériques.<br />
Ils parlent aussi de l’<strong>infobésité</strong>. Pour eux, il n’y a pas plus d’information que par le passé, la surabondance d’informations est simplement le résultat d’<strong>une plus grande capacité à enregistrer et conserver les informations</strong>. Ainsi, depuis l’avènement du web et du numérique, on a effectivement tendance à stocker une quantité incroyable d’information.</p>
<p>D’exemple en exemple, d’image en image, les deux compères nous amènent à la question du <strong>choix des <abbr lang="en" title="Uniform Resource Identifier">URI</abbr> de nos contenus web</strong>. Au delà du choix technique, il faut d’abord faire un choix «&nbsp;éditorial&nbsp;» et se poser la question de l’importance de nos contenus. Tel contenu nécessite-t-il d’être accessible en permanence&nbsp;? Vaut-il la peine d’être supprimé&nbsp;?<br />
Pour aller plus loin, je vous invite à lire l’<a href="https://www.24joursdeweb.fr/2012/un-site-web-de-1000-ans/" rel="external">article posté par Karl sur 24 jours de web <span class="screen-reader-text">(lien externe)</span></a> dans lequel il évoquait déjà ces réflexions.</p>
<ul>
<li><a href="https://github.com/olivierthereaux/rustyweb" rel="external">Slides et matériel de «&nbsp;Esthétique et pratique du Web qui rouille&nbsp;» sur Github <span class="screen-reader-text">(lien externe)</span></a></li>
</ul>
<h2>Multimodalité & interfaces. Le design est une question d’humains, pas de machine</h2>
<p>Après l’air frais du web qui rouille, je suis resté dans un domaine conceptuel, le design. J’ai suivi la conférence de <a href="https://geoffreydorne.com/" rel="external">Geoffrey Dorne <span class="screen-reader-text">(lien externe)</span></a> qui nous a parlé de multimodalité. Le titre m’intriguait et je n’étais pas le seul. Quand Geoffrey demande si nous savons ce que signifie la multimodalité, relativement peu de personnes se manifestent.<br />
En gros, la multimodalité est le fait de pouvoir <strong>accomplir une action de plusieurs manières différentes</strong>. Pour illustrer l’idée, il donne l’exemple d’un déplacement d’un point A à un point B, qu’on peut potentiellement faire à pied, à vélo, en voiture, en bus, en train… Appliqué au web, cela consiste donc à donner la possibilité aux utilisateurs d’<strong>accomplir la même chose quelque soit le périphérique utilisé</strong>. Et donc de réfléchir et concevoir des <strong>services adaptés aux contextes d’utilisation</strong> (on ne proposera pas la même ergonomie sur un mobile tactile que sur un ordinateur ou une télévision).<br />
Armé une d’une <strong>belle quantité d’exemples et de mises en application</strong>, Geoffrey a déroulé sa présentation comme un chef et j’ai pu découvrir avec grand plaisir ses qualités d’orateur.</p>
<ul>
<li><a href="https://fr.slideshare.net/geoffreydorne/salon-d-honneurvendredi15h05multimodaliteetinterfacesdesignquestiondhumainspasdemachine-27072507" rel="external">Slides de «&nbsp;Multimodalité & interfaces. Le design est une question d’humains, pas de machine&nbsp;» sur Slideshare <span class="screen-reader-text">(lien externe)</span></a></li>
</ul>
<h2>Mobile et accessibilité, une partie à Troie</h2>
<p>Courte conférence de <a href="https://userland.fr/" rel="external">Goulven Champenois <span class="screen-reader-text">(lien externe)</span></a> qui met en rapport les efforts d’accessibilité à poursuivre sur le web, notamment dans un contexte mobile. Notamment parce qu’<strong>en tant qu’utilisateur mobile, on se retrouve facilement en situation de handicap</strong> car un site visité peut proposer une expérience pas du tout adaptée.<br />
Il enchaîne ainsi les exemples à éviter / à suivre mis en parallèle avec les grandes règles d’accessibilité qu’on peut déjà connaître.<br />
Beaucoup de contenus balancés en 15 minutes. Étant déjà personnellement très sensibilisé aux problématiques d’accessibilité, je n’ai pas découvert grand chose mais nul doute que les personnes pas très au fait auront appris beaucoup de choses.</p>
<p>Ah si, Goulven en a profité pour pré-annoncer l’édition 2014 de <a href="https://sudweb.fr/2014/" rel="external">Sud Web <span class="screen-reader-text">(lien externe)</span></a> qui aura lieu à Toulouse fin mai. <span role="img" aria-label="Heureux">😀</span></p>
<ul>
<li><a href="https://speakerdeck.com/goulvench/mobile-et-accessibilite-une-partie-a-troie" rel="external">Slides de «&nbsp;Mobile et accessibilité, une partie à Troie&nbsp;» sur Speaker Deck <span class="screen-reader-text">(lien externe)</span></a></li>
<li><a href="https://www.paris-web.fr/2013/conferences/mobile-et-accessibilite-une-partie-a-troie.php" rel="external">Vidéo sur le site de Paris Web <span class="screen-reader-text">(lien externe)</span></a></li>
</ul>
<h2>Le paradoxe du choix</h2>
<p>Et pour finir avec les conférences «&nbsp;sérieuses&nbsp;», <a href="https://twitter.com/haia212" rel="external">Anne Lacan <span class="screen-reader-text">(lien externe)</span></a> a parlé de la problématique du choix dans une société où <strong>on a désormais le choix pour à peu près tout</strong>, qu’il s’agisse de notre vie professionnelle mais aussi personnelle.<br />
Le fait d’avoir le choix nous bloque dans une certaine mesure. En effet, suivant notre état d’esprit, on peut être tellement dépassé par la quantité de choix qu’<strong>on finira par ne rien choisir</strong>. Ou encore, une fois qu’on aura fait un choix, on pourra <strong>regretter ce choix</strong> et/ou penser qu’<strong>on aurait pu faire un meilleur choix</strong>. Au final, on subit une frustration qui nous empêche d’être heureux.<br />
Anne finit sa présentation en donnant des exemples de pratiques à suivre ou à éviter pour <strong>éviter les problèmes de choix</strong> des utilisateurs dans un contexte de site marchand.<br />
Bref, conférence intéressante et bien animée par Anne qui a su présenter les choses très simplement.</p>
<ul>
<li><a href="https://fr.slideshare.net/AnneLacan/paris-web-2013-paradoxe-du-choix" rel="external">Slides de &nbsp;Le paradoxe du choix&nbsp;» sur Slideshare <span class="screen-reader-text">(lien externe)</span></a></li>
<li><a href="https://www.paris-web.fr/2013/conferences/le-paradoxe-du-choix.php" rel="external">Vidéo sur le site de Paris Web <span class="screen-reader-text">(lien externe)</span></a></li>
</ul>
<h2>Lightning talks</h2>
<p>Pas de résumé pour les Lightning talks, c’est tout simplement <strong>impossible à résumer</strong> et il faut le vivre. Malheureusement, la vidéo n’est pas encore disponible mais filez la voir quand ce sera dispo&nbsp;! Voici quand même les quelques slides disponibles&nbsp;:</p>
<ul>
<li><a href="https://www.nicolas-hoffmann.net/parisweb/presentation-4mn-save-world/#/" rel="external">Slides de «&nbsp;J’ai décidé d’arrêter de sauver le monde&nbsp;» <span class="screen-reader-text">(lien externe)</span></a></li>
<li><a href="https://jolicode.github.io/code-typographique-conf/#/" rel="external">Slides de «&nbsp;Le code typographique français en 4 minutes sans respirer&nbsp;» <span class="screen-reader-text">(lien externe)</span></a></li>
</ul>
<h2>Fin du deuxième jour</h2>
<p>Voilà pour les conférences que j’ai suivies le vendredi. Toujours riche de rencontres et de découvertes, cette deuxième journée a été d’une grande richesse. Je donne une <strong>mention spéciale à la conférence «&nbsp;Esthétique et pratique du Web qui rouille&nbsp;»</strong> élue ma conférence préférée de cette édition. <span role="img" aria-label="Heureux">😀</span> C’est le genre de conférence que je kiffe totalement à Paris Web, on s’ouvre complètement l’esprit pour réfléchir au delà des problèmes du quotidien et je trouve que c’est ce qu’il y a de plus ressourçant sur ces quelques jours (en ce qui me concerne). <span role="img" aria-label="Clin d'œil">😉</span></p>
<p>Si vous avez loupé tout ou partie des conférences qui étaient retransmises en direct, vous pouvez toujours les voir <a href="https://www.paris-web.fr/2013/" rel="external">sur le site de Paris Web <span class="screen-reader-text">(lien externe)</span></a>.
