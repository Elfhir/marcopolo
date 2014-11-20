# Marcopolo

Projet AngularJS, à titre de démonstration.
L'idée du site était de proposer une galerie, un résau social de partage de sorties, d'expériences de voyages.

Le site est disponible à cette adresse :
http://marcopolo.jeremy-ta.fr/

Soyez gentil, ne cassez pas tout !
Testez, c'est responsive !

### Version
0.8

### Secret technique

* [AngularJS] - HTML, JS et CSS aux hormones
* [Twitter Bootstrap] - Framework CSS/JS front End 3.2
* [Yeoman] - Générateur du projet de départ
* [Grunt] - grunt serve, grunt build, hop jshint, compass, livereload sans le demander !
* [Bower] - bower install un truc qui manque, sauf si c'est avec npm le mieux


### Installation

Cloner le repo dans le dossier où vous souhaitez travailler :

```sh
$ git clone https://github.com/Elfhir/marcopolo.git
```
Il vous faut pas mal de trucs, et c'est mieux d'être sous Linux.
Trouvez comment installez Nodejs, Bower, Grunt, Sass, Compass, Yeoman, Tout ça en global.
Normalement, après avoir cloner le repo, il vous faudra satisfaire les dépendances du projet, ceci avec bower. Le .bowerrc et package.json sont sensés définir les bonnes dépendances.
```sh
$ bower install
```

Si ça marche pas, contactez moi.
Mais peu de chance que vous vouliez vraiment ce projet démo ^^



### Development

Si vous voulez démarrer le serveur localhost.
Référez vous à la doc du generator angular de yeoman
```sh
$ grunt serve
```

### Todo's

- Code for Users page and Voyages
- Code the php part for users (register, comment, https)
- Add documentation beside
- Add Code Comments
- Write Tests

License
----

Artistic 2.0


**Free Software, Hell Yeah!**

[Yeoman]:http://yeoman.io
[Grunt]:htp://gruntjs.com
[Bower]:http://bower.io
[node.js]:http://nodejs.org
[Twitter Bootstrap]:http://twitter.github.com/bootstrap/
[AngularJS]:http://angularjs.org
