## **ESTRUCTURA D'UN PROJECTE WEB**
L'organització d'un projecte web és clau per mantenir el codi net, escalable i fàcil de mantenir. A continuació, es presenta una estructura de carpetes i fitxers bàsica, però completa, que pots utilitzar per organitzar projectes web amb HTML, CSS, JavaScript i altres tecnologies relacionades.

---

### 1. **Estructura bàsica del projecte**

```
projecte-web/
│
├── index.html              # Pàgina principal
├── about.html              # Altres pàgines HTML
├── contact.html
│
├── src/                    # Codi font
│   ├── css/                # Estils CSS
│   │   ├── main.css        # CSS principal
│   │   └── components/     # CSS específic per a components o pàgines
│   │       └── header.css
│   │       └── footer.css
│   │
│   ├── js/                 # JavaScript
│   │   ├── main.js         # JS principal
│   │   ├── api/            # Funcions per gestionar API
│   │   │   └── fetchData.js
│   │   └── utils/          # Funcions d'utilitat
│   │       └── helpers.js
│   │
│   └── assets/             # Recursos estàtics
│       ├── images/         # Imatges
│       ├── icons/          # Icones
│       └── fonts/          # Fonts personalitzades
│
├── dist/                   # Arxius generats (optimitzats per a producció)
├── node_modules/           # Llibreries instal·lades amb npm (si s'utilitza)
│
├── .gitignore              # Fitxer per ignorar arxius en Git
├── package.json            # Configuració i dependències del projecte
└── README.md               # Documentació del projecte
```

---

### 2. **Fitxers principals**

- **`index.html`**: La pàgina principal del projecte. Conté la estructura base del HTML i enllaça el CSS i JavaScript principals.
- **`src/`**: Aquesta carpeta conté tot el codi font que el desenvolupador escriu directament. Pot tenir subcarpetes per organitzar el codi CSS, JS i els recursos estàtics.
  - **`css/`**: Conté tots els fitxers CSS. La divisió entre `main.css` i `components/` permet tenir estils globals a `main.css` i estils específics per a cada component dins de la subcarpeta `components/`.
  - **`js/`**: Conté tot el JavaScript. `main.js` pot servir com a punt d'entrada principal, i la resta de subcarpetes com `api/` i `utils/` ajuden a dividir el codi segons la funcionalitat.
  - **`assets/`**: Una carpeta per a arxius com imatges, icones i fonts, que s’utilitzen al lloc web.

### 3. **Carpetes addicionals**

- **`dist/`**: Aquesta carpeta es genera quan el projecte es compila o s’optimitza per a producció. Conté la versió minificada i optimitzada dels fitxers CSS i JS, així com altres recursos optimitzats.
- **`node_modules/`**: Si utilitzes npm (Node Package Manager), aquí es guardaran les llibreries que instal·lis, com frameworks o utilitats de desenvolupament.
- **`.gitignore`**: Un fitxer per indicar quins arxius o carpetes s'han d'ignorar al fer un `commit` a Git. Per exemple, `node_modules` i `dist`.
- **`package.json`**: Aquest fitxer conté informació sobre el projecte (com el nom, la versió i els scripts de construcció), així com les dependències de Node.

### 4. **Scripts i dependències**

En el fitxer `package.json`, pots definir scripts per automatitzar tasques comunes, com ara:

```json
"scripts": {
  "start": "live-server src",       // Engega un servidor local per a desenvolupament
  "build": "webpack --mode production", // Compila el projecte per a producció
  "test": "jest"                    // Executa tests si en tens
}
```

### 5. **Gestió de dependències**

Amb npm o yarn, pots instal·lar dependències segons les necessitats del projecte:

```bash
npm install bootstrap         # Instal·la Bootstrap
npm install axios             # Instal·la Axios per a crides a API
```

---

### Exemple d'un fitxer HTML amb CSS i JS enllaçats

Un exemple de com s’estructuraria l’HTML per enllaçar l'arxiu CSS i JavaScript principals:

```html
<!DOCTYPE html>
<html lang="ca">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>El Meu Projecte</title>
  <link rel="stylesheet" href="src/css/main.css"> <!-- Enllaç CSS -->
</head>
<body>

  <header>
    <h1>Benvingut al Projecte!</h1>
  </header>

  <script src="src/js/main.js"></script> <!-- Enllaç JavaScript -->
</body>
</html>
```

---

### Consells d'organització

- **Organitza per funcionalitat**: Divideix el codi JavaScript i CSS per funcionalitats en lloc de fer un fitxer gran. Això facilita trobar i mantenir el codi.
- **Utilitza mòduls (si és possible)**: En JavaScript modern, pots utilitzar `import` i `export` per modularitzar el codi i mantenir-lo més clar.
- **Usa control de versions**: Configura un repositori Git per gestionar canvis i col·laboracions.
- **Documenta el projecte**: Utilitza el fitxer `README.md` per descriure l'objectiu del projecte, els passos per instal·lar-lo, i qualsevol altra informació útil.

Aquesta estructura proporciona una base sòlida que és fàcilment escalable a mesura que el projecte creix.
