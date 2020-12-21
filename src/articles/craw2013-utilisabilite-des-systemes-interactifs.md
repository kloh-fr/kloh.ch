---
layout: "layouts/article.njk"
title: "CRAW2013&nbsp;: utilisabilité des systèmes interactifs"
date: "2013-04-24T16:39:43+01:00"
permalink: "articles/craw2013-utilisabilite-des-systemes-interactifs/"
dateUpdate: "2020-06-11T22:22:22+01:00"
---

<p>Voici un nouveau morceau de mon compte-rendu de la Conférence Romande sur l’Accessibilité du Web 2013 organisée par <a href="https://www.telono.com/" rel="external">Telono <span class="screen-reader-text">(lien externe)</span></a>.<br />
Après <a href="/articles/craw2013-html5-aria-et-accessibilite-web/">HTML5 et ARIA</a>, <a href="/articles/craw2013-mobilite-et-accessibilite/">la mobilité</a> et <a href="/articles/craw2013-gestion-de-projet/">la gestion de projet</a>, on parle d’expérience utilisateur avec <a href="https://twitter.com/FlorianEgger" rel="external">Florian Egger <span class="screen-reader-text">(lien externe)</span></a> et <a href="https://twitter.com/lgiannettini" rel="external">Laetitia Giannettini <span class="screen-reader-text">(lien externe)</span></a> et leur présentation «&nbsp;Utilisabilité des systèmes interactifs&nbsp;»&nbsp;: méthodes et techniques d’évaluation ».</p>
<h2>Liens entre accessibilité et utilisabilité</h2>
<p>Pour commencer, Laetitia met en valeur les rapports entre les domaines de l’accessibilité et de l’utilisabilité.<br />
Il s’agit de domaines qui ont chacun leur propre évolution et qu’on peut presque considéré opposés dans un certain sens&nbsp;: si l’objectif de <strong>l’accessibilité est de permettre à tous l’accès aux contenus</strong> et aux fonctions d’un site, <strong>l’utilisabilité est centré sur un modèle d’utilisateur idéal</strong>, en fonction de la cible du site ou service. Quand d’un côté on cherche à répondre aux besoins de tous, de l’autre on a tendance à concentrer nos réponses sur un ou plusieurs profils d’utilisateurs spécifiques, généralement une cible jeune et en pleine possession de ses moyens.</p>
<p>Mais malgré cette apparente opposition, des parallèles peuvent être fait entre ces 2 spécialités. Ainsi, <strong>certains critères en accessibilité sont aussi des critères d’utilisabilité</strong>. Laetitia donne notamment l’exemple de l’information transmise par les couleurs ou les contrastes qui sont des critères de base à la fois en accessibilité et en utilisabilité.</p>
<p>Ces 2 domaines ne sont donc pas tant opposés que complémentaires. Ainsi, si l’accessibilité vise à <strong>garantir l’accès au contenu et aux fonctionnalités</strong> d’un site, l’utilisabilité a pour vocation d’<strong>améliorer l’utilisation de ces contenus et fonctionnalités</strong>, pour améliorer l’expérience utilisateur.</p>
<p>Pour illustrer ces propos, elle donne l’exemple d’un site Intranet dont les pages étaient accessibles mais dans lequel les utilisateurs rencontraient des difficultés d’accès à l’information.<br />
Malgré un bon niveau d’accessibilité, les utilisateurs – quels qu’ils soient – avaient beaucoup de mal à trouver le contenu, du fait d’une arborescence qu’ils ne comprenaient pas. En raison d’une mauvaise utilisabilité, les utilisateurs n’arrivaient pas à s’approprier l’Intranet et le délaissaient.</p>
<p>On voit donc que l’utilisabilité et l’accessibilité sont des sujets très complémentaires et qui, l’un comme l’autre, <strong>permettent de garantir l’universalité d’accès au contenus</strong>. La question est alors de savoir comment concevoir un site qui offre une expérience utilisateur satisfaisante pour tous et pas seulement pour une cible spécifique.</p>
<h2>Philosophies de conception et outils</h2>
<p>Comme élément de réponse, Laetitia présente 3 philosophies de conception distinctes mais complémentaires&nbsp;:</p>
<ul>
<li>Le <strong><span lang="en">design for all</span></strong> (conception pour tous) qui consiste à prendre en compte dès le départ tous les publics. Elle donne l’exemple des marches de train qui ne répondent pas à ce modèle&nbsp; un utilisateur en fauteuil ne peut pas monter dans le train, mais cette marche peut aussi être problématique voire dangereuse pour tous les usagers.</li>
<li>La <strong>méthode écologique</strong> qui consiste à observer et analyser les utilisateurs sur le terrain.</li>
<li>Le <strong><span lang="en">user-centered design</span></strong> (conception centrée utilisateur) qui consiste à se faire guider par l’utilisateur selon une méthode itérative&nbsp;: on réalise des tests utilisateurs au fur et à mesure de la conception.</li>
</ul>
<p>Suite à la présentation de ces méthodes, Florian prend la parole pour présenter certains outils permettant d’aider à définir l’arborescence et l’architecture de l’information d’un site, à l’aide de l’implication d’utilisateurs.</p>
<p>Il présente ainsi le <strong>tri de cartes</strong> dont l’objectif est de créer des groupements de contenus réalisés par les utilisateurs. En pratique, on donne un certain nombre de cartes à l’utilisateur, chaque carte portant un intitulé correspondant à un contenu du site. Et il est demandé à l’utilisateur de faire des regroupements et éventuellement de suggérer des formulations alternatives aux mots sur les cartes.<br />
Les résultats de ce travail peut prendre la forme d’un <strong>dendrogramme</strong>. C’est un graphique permettant de mettre en valeur les regroupements effectués lors du test. Il permet donc de disposer d’une base utile à la <strong>création de l’arborescence</strong> des contenus.</p>
<p>À partir de l’arborescence créée, on peut utiliser le second outil présenté&nbsp;: le <strong>test d’arborescence</strong>. Cela consiste à donner à l’utilisateur une tâche à effectuer à partir d’une arborescence définie. Ce test permet de détecter les difficultés d’utilisation ou de compréhension d’une arborescence mais aussi les chemins parcourus (en cas d’arborescence à plusieurs niveaux notamment).<br />
Le résultat se présente sous la forme d’un <strong><span lang="en">pietree</span></strong> qui prend la forme d’un arbre dont les noeuds sont des camemberts. Pour chaque nœud, on peut donc voir la proportion des choix effectués, permettant une visualisation des <strong>chemins les plus empruntés</strong> par les utilisateurs.</p>
<p>Les 2 outils présentés peuvent être réalisés avec des moyens très différents, mais Florian recommande d’utiliser des moyens informatiques qui ont l’avantage d’accélérer le rendu des résultats. Il cite notamment le service en ligne <a hreflang="en" href="https://www.optimalworkshop.com/" lang="en" rel="external">Optimal Workshop <span class="screen-reader-text">(lien externe)</span></a> qui permet – entre autres – de réaliser des tris de cartes et tests d’arborescence.</p>
<h2>Conclusion</h2>
<p>Voilà pour cette conférence plus orientée sur l’expérience utilisateur. Si ce sujet et l’accessibilité sont des sujets largement traités chacun de leur côté, il est plutôt rare de les voir traités ensemble et c’est plutôt rafraîchissant. Même si on peut en avoir conscience, ça permet de bien se rendre compte des liens intimes qu’il peut y avoir entre les différents domaines du web.<br />
Et c’est sans parler du fait que ça participe à enrichir encore plus cette journée déjà très riche. <span role="img" aria-label="Sourire">🙂</span></p>