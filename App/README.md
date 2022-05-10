# ProgWebProjetM1
Enzo Filangi - S7

### Description du projet

Le sujet peut être trouvé à l'adresse [https://thomas-veillard.fr/front-end-web-development/project/](https://thomas-veillard.fr/front-end-web-development/project/)

Le thème est "VPS Builder".

### Installation du projet

1. Exécuter le script `SQL/Database_creation.sql` dans MySQL
2. Se rendre dans le dossier `Backend/` et y créer un fichier `.env` correspondant à la syntaxe décrite ci-dessous
3. Toujours dans le dossier `Backend/`, exécuter la commande `npm install`
4. Se rendre dans le dossier `Frontend/` et exécuter la commande `npm install`

Syntaxe du fichier .env :
- SECRET=[random string]
- DB_PASSWORD=
- DB_USER=
- DB_HOST=
- DB_NAME=
- CORS_URL = http://localhost:4200

### Exécution du projet

1. Se rendre dans le dossier `Backend/` et exécuter la commande `npm start`
2. Se rendre dans le dossier `Frontend/` et exécuter la commande `ng serve`
3. Ouvrir le navigateur sur http://localhost:4200
