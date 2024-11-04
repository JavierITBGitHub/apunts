## **EVENTS**
Els **events** en JavaScript són accions que es desencadenen quan passa alguna cosa en una pàgina web, com fer clic en un botó, moure el ratolí, o carregar la pàgina. Aquí tens un manual bàsic sobre com treballar amb events en JavaScript.
### Com funcionen els events?
- **Escollim un element HTML** (com un botó o un formulari).
- **Assignem un "listener"** amb `addEventListener`, especificant el tipus d'event (com `click` o `submit`).
- **Escrivim la funció** que volem que s'executi quan passa l'event.
### 1. Escoltar un event amb `addEventListener`

L'ús més comú per gestionar events és amb la funció `addEventListener`. Aquesta funció permet "escoltar" un event en un element i executar una funció quan passa.

```javascript
// Seleccionem un element HTML (com un botó)
let myButton = document.getElementById("myButton");

// Afegim un "event listener" per a l'event "click"
myButton.addEventListener("click", function() {
  alert("Has fet clic al botó!");
});
```

### 2. Tipus d'events comuns

- **`click`**: Quan es fa clic en un element.
- **`mouseover`**: Quan el ratolí passa per sobre d'un element.
- **`mouseout`**: Quan el ratolí surt de sobre un element.
- **`keydown`**: Quan es prem una tecla.
- **`submit`**: Quan es fa clic en "submit" en un formulari.

### 3. Exemple senzill: `click`

Si volem que passi alguna cosa quan fem clic en un botó:

```html
<button id="myButton">Clica'm</button>

<script>
  let myButton = document.getElementById("myButton");
  myButton.addEventListener("click", function() {
    alert("Has clicat el botó!");
  });
</script>
```

### 4. Exemple amb el camp de text: `keydown`

També pots reaccionar quan l'usuari escriu en un camp de text.

```html
<input type="text" id="myInput" placeholder="Escriu alguna cosa">

<script>
  let myInput = document.getElementById("myInput");
  myInput.addEventListener("keydown", function(event) {
    console.log("Tecla premuda:", event.key);
  });
</script>
```

### 5. Exemple amb el formulari: `submit`

Quan l'usuari envia un formulari, podem interceptar aquest event i fer alguna cosa abans de l'enviament.

```html
<form id="myForm">
  <input type="text" placeholder="Nom">
  <button type="submit">Enviar</button>
</form>

<script>
  let myForm = document.getElementById("myForm");
  myForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita l'enviament
    alert("Formulari enviat!");
  });
</script>
```

### En resum
- **Escollim un element HTML** (com un botó o un formulari).
- **Assignem un "listener"** amb `addEventListener`, especificant el tipus d'event (com `click` o `submit`).
- **Escrivim la funció** que volem que s'executi quan passa l'event.
