# TIW8 App React WebRTC

TP #3 de l'UE Technologies Web synchrones et multi-dispositifs (M2) https://aurelient.github.io/tiw8/2019/

## Authors
Florent CLEMENT (https://gitlab.com/florent.clement)

Baptiste CONTRERAS (https://github.com/BaptisteContreras)



## Utilisation de l'application en mode 'development'


Lancement de l'application :
```
npm run dev
```
Cette commande fait appel à webpack qui permettra d'avoir un visuel du site.
Le site se trouvera sur l'url http://localhost:8080. Cette méthode de développement ne permet pas de faire fonctionner 
le socket mais permet de tester le client. Via la méthode watch le site s'actualisera avec les nouvelles modifications.


Vérification eslint:
```
npm run lint
```
Une fois les modifications apportées au code vous pouvez faire appel à eslint pour vérifier que le code est correct.
Une vérification sera réalisé sur le CI et refusera le commit s'il n'est pas conforme.


## Utilisation de l'application en mode 'production'

Build de l'application

```
npm run build
```
la commande suivante permettra la génération des fichiers statiques nécessaire au fonctionnement de l'application dans le répertoire `dist`.


Lancement l'application 
```
npm run start
```
Le start de l'application vous lancera le serveur node sur le port 3000 et intègrera les sockets.


## Déploiement de l'application

Pour le déploiement de l'application deux sites sont disponibles.
Le premier `staging` est disponible à l'url suivante : https://tiw8-tp3-staging.herokuapp.com/. <br>
Le second `production` est disponible à l'url suivante : https://tiw8-tp3-production.herokuapp.com/. <br>
Ces deux sites sont gérés par une application heroku gérant le staging et la production. Le staging nous permet ainsi de faire tout nos tests tandis que la production est réservé au client.
Le déploiement de `staging` se fait automatiquement via le CI de la forge sur la branche `develop` et la production via la branche `master`.

## Comment tester

- Cliquer sur "MON PSEUDO" et renseigner votre username
- Cliquer sur "Modifier" dans la Card `Destinataire` et renseigner l'username du destinataire
- Cliquer sur "Se connecter"
- Normalement si le destinataire clique aussi sur "Se connecter", la connexion devrait être établie et l'interface de chat apparait.
- Si se n'est pas le cas, ne pas hésiter à recliquer sur "Se connecter" si rien ne s'est passé alors que l'écran de chargement s'est terminé.
