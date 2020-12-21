---
layout: "layouts/article.njk"
title: "CRAW2013&nbsp;: évaluation, logiciel libre et accessibilité des vidéos"
date: "2013-04-25T14:07:12+01:00"
permalink: "articles/craw2013-evaluation-logiciel-libre-et-accessibilite-des-videos/"
dateUpdate: "2020-06-11T22:22:22+01:00"
---

<p>Voici la dernière partie de mon compte-rendu de la Conférence Romande sur l’Accessibilité du Web 2013. On y parle de techniques d’évaluation, des bénéfices du logiciel libre pour les utilisateurs handicapés et pour finir de la mise en accessibilité collaborative de vidéos.</p>
<h2>Démonstration de techniques d’évaluation</h2>
<p>Retour de Jean-Pierre Villain pour une présentation bien plus opérationnelle&nbsp;: il nous présente des <strong>techniques d’évaluation simples</strong> et à la portée de tout un chacun. Les opérations sont tellement simples qu’il envoie sa fille Shanni, 15 ans, les effectuer devant l’assemblée.</p>
<p>Je ne vais pas détailler toutes les manipulations à effectuer mais les pré-requis de base sont assez légers&nbsp;: il suffit d’avoir installé la <a hreflang="en" href="https://chrispederick.com/work/web-developer/" rel="external">Web Developer Toolbar <span class="screen-reader-text">(lien externe)</span></a> (disponible pour Firefox et Chrome).</p>
<p>Shanni nous montre ainsi en direct comment vérifier la présence d’<strong>alternatives sur les images</strong>, des <strong>liens images sans <code>alt</code></strong> ou la <strong>présence de titre sur une <code>iframe</code></strong>. Elle montre aussi comment vérifier la présence et la <strong>hiérarchie des titres</strong> de la page, la présence et la pertinence de l’<strong>utilisation de listes</strong> ainsi que la présence d’<strong>étiquettes dans les formulaires</strong>.<br />
Même si les profanes auront peut-être eu du mal à suivre du fait du volume conséquent d’informations, il n’en reste pas moins que tout le monde a pu constater le peu d’effort à fournir pour vérifier tous ces éléments.</p>
<p>Suite à cette petit démonstration, Jean-Pierre reprend la parole pour revenir sur certains points.<br />
Le principal concerne la <strong>désactivation systématique des CSS</strong> pour chacune des opérations effectuées. L’avantage est qu’on a ainsi <strong>directement accès au contenu</strong>, sans fioritures visuelles. On a du coup aussi la vision de la <strong>structure réelle du contenu</strong>, dans l’ordre du code source, ainsi que la <strong>visibilité des contenus cachés en CSS</strong>.</p>
<p>Même si l’ensemble des tests de vérification de l’accessibilité ne sont pas couverts, ces quelques tests permettent de détecter une grosse partie des erreurs récurrentes et généralement facilement corrigeables.</p>
<h2>Le logiciel libre comme outil d’accessibilité à l’information pour les personnes déficientes visuelles</h2>
<p>De l’évaluation on passe au monde du libre avec Jean-Philippe Mengual d’<a href="https://accelibreinfo.eu/?fr/" rel="external">Accelibreinfo <span class="screen-reader-text">(lien externe)</span></a>.</p>
<figure>
<img src="{{ site.path.images }}/{{ permalink }}jpmengual.jpg" width="500" height="331" alt="" loading="lazy" />
<figcaption>Crédit&nbsp;: <a href="https://www.facebook.com/media/set/?set=a.10151435246139751.1073741825.90215014750&#038;type=3" rel="external">Telono <span class="screen-reader-text">(lien externe)</span></a></figcaption>
</figure>
<p>Jean-Philippe est aveugle et nous raconte son histoire. Comme toute personne touchée par un handicap, l’outil informatique lui est accessible à condition de disposer du matériel nécessaire. Dans son cas il utilise une plage braille et une synthèse vocale.</p>
<p>Mais dès lors qu’on souhaite souhaite acquérir ce matériel, <strong>l’investissement est conséquent</strong>. Il donne alors l’exemple du principal logiciel de synthèse vocale&nbsp;: <a hreflang="en" href="https://www.freedomscientific.com/products/software/jaws/" rel="external"><abbr lang="en" title="Job Access With Speech">JAWS</abbr> <span class="screen-reader-text">(lien externe)</span></a>. Le prix du logiciel est facilement rédhibitoire pour un particulier. Des aides existent pour financer ce type d’outils, mais Jean-Philippe explique qu’<strong>entre la demande d’aide et le moment où le financement est accordé, de nombreux mois peuvent passer</strong>. Alors que dans la vraie vie, on voudra avoir ce matériel au plus vite.</p>
<p>Ajouté au paramètre prix, il explique qu’en tant que passionné d’informatique, il aime bien <strong>paramétrer et personnaliser son environnement</strong> comme bon lui semble. Problème, la licence de JAWS ne le permet pas…</p>
<p>Au moment de s’équiper, entre le coût important et l’absence de possibilités d’adaptation de l’outil, Jean-Philippe s’est alors tourné vers le monde du libre avec Linux.<br />
Il explique et démontre que même si le monde du libre est réputé comme un environnement de geek, il est tout à fait <strong>à la portée de tout un chacun</strong>. Les différentes solutions sous Linux proposent des environnements graphiques identiques à ce qui se fait sous Windows (même si le look paraît daté). Et surtout, <strong>des solutions rendant l’environnement accessible sont pré-intégrées et gratuites&nbsp;!</strong> Il parle notamment du lecteur d’écran <a hrelang="en" href="https://wiki.gnome.org/Projects/Orca" rel="external">Orca <span class="screen-reader-text">(lien externe)</span></a>.</p>
<p>Il précise aussi qu’un ordinateur utilisant Linux peut sans problème être connecté à un réseau d’entreprise qui se trouve sur un autre système (comme Windows au hasard <span role="img" aria-label="Tire la langue">😛</span>). Donc même les entreprises peuvent très facilement s’équiper de postes accessibles à moindre coût&nbsp;!</p>
<p>Bref, il n’y a aucune restriction à utiliser les outils proposés par le monde du libre pour les personnes handicapées. Au contraire, les avantages sont nombreux&nbsp;: le coût est moindre (il faut dans tous les cas acheter le matériel physique&nbsp;: ordinateur, plage braille…), les outils sont personnalisables et la communauté active permet de faire évoluer l’ensemble des outils.</p>
<h2>Annotation collaborative pour l’accessibilité des vidéos sur le web</h2>
<p>Pour la dernière présentation de la journée, Benoît Encelle présente le projet <abbr title="Annotation Collaborative pour l'Accessibilité des Vidéos sur le web">ACAV</abbr>.</p>
<p>En introduction, Benoît explique que de plus en plus de contenus sont mis en ligne sous format vidéo. Sur Youtube, l’équivalent de <strong>72 heures de vidéo sont mises en ligne toutes les minutes</strong>. Malheureusement, la majorité de ces contenus ne sont pas accessibles.</p>
<p>Le projet ACAV consiste donc à trouver des solutions permettant une mise en accessibilité collaborative des vidéos publiées. Il a été mis en place avec l’aide de plusieurs partenaires, notamment <a href="https://www.dailymotion.com/fr" rel="external">Dailymotion <span class="screen-reader-text">(lien externe)</span></a> et l’<a href="https://www.avh.asso.fr/" rel="external">Association Valentin Haüy <span class="screen-reader-text">(lien externe)</span></a>.</p>
<p>Il présente les cibles principalement concernées et les solutions à mettre en place pour leur rendre accessibles les vidéos&nbsp;:</p>
<ul>
<li>Les mal et non-voyants ont besoin d’<strong>audiodescriptions</strong>.</li>
<li>Les mal et non-entendants ont besoin de <strong>sous-titres</strong>, de <strong>langue des signes</strong>.</li>
</ul>
<p>L’enjeu du projet est de répondre à ces besoins, tant en termes quantitatifs que qualitatifs. Dans l’objectif de rendre accessible un maximum de vidéos avec de la meilleure qualité possible.</p>
<p>Pour y arriver, un workflow en plusieurs étapes a été imaginé&nbsp;:</p>
<ol>
<li>Les vidéos sont <strong>automatiquement annotées</strong> avec un outil de <span lang="en">Speech-To-Text</span>. Une reconnaissance automatique des paroles et des mouvements permet de créer la base des sous-titres et audiodescriptions.</li>
<li>Organisés sous forme de réseau social, <strong>des annotateurs ajustent les contenus</strong> produits automatiquement.</li>
</ol>
<p>Les annotations créées peuvent ainsi prendre la forme de sous-titre, télétexte, avatar <abbr title="Langue des Signes Françaises">LSF</abbr>, synthèse vocale, icônes sonores, braille…</p>
<p>Au delà de la génération des vidéos accessibles, la question de <strong>la présentation des informations</strong> s’est aussi posée. Plusieurs tests ont ainsi été effectués pour répondre à ces questions.</p>
<p>L’une de ces questions concerne les icônes sonores. <strong>Une icône sonore est un son permettant de transmettre une idée</strong>, comme une icône graphique le permet. L’exemple donné est le bruit de papier froissé lorsqu’on vide la corbeille sous Windows.<br />
Ces icônes peuvent servir pour des éléments récurrents comme un changement de décor. En effet Benoît, qui parle aussi d’<strong><span lang="en">earcons</span></strong>, précise que pour que l’icône fonctionne, elle doit être apprise et la récurrence de l’information permet cela.</p>
<p>Autre question abordée, la <strong>mise en pause de la vidéo pour ajouter plus d’informations sonores</strong>. Après l’avoir expérimenté, il s’avère que la mise en pause de la vidéo ne perturbe pas les utilisateurs si elle est inférieure à 1,5 blanc filmique.</p>
<p>Benoît termine sa présentation avec un aperçu de l’outil d’annotation sur le site Dailymotion. Malheureusement, puisqu’il ne s’agit que d’un projet expérimental, il n’est utilisable qu’avec Chrome.</p>
<p>Voilà pour les dernières présentations de cette journée très riche&nbsp;!</p>
