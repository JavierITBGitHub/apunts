# **Manipulació del DOM** amb **JavaScript**

### **Què és el DOM?**
- **Document Object Model (DOM)**:
  - Representació en arbre dels elements HTML d'una pàgina web.
  - Permet accedir i modificar elements de la pàgina.

  **Exemple**
  ```javascript
  console.log(document);
  ```

---

### **Seleccionar elements per `id`**
- **Utilitza `getElementById`** per seleccionar un element per el seu `id`.

  **Exemple de codi:**
  ```javascript
  let titol = document.getElementById("titol");
  console.log(titol.innerHTML);
  ```

  ```html
  <h1 id="titol">Hola, món!</h1>
  ```

---

### **Seleccionar elements per `class`**
- **Utilitza `getElementsByClassName`** per seleccionar elements amb una classe CSS específica.

  **Exemple de codi:**
  ```javascript
  let elements = document.getElementsByClassName("element");
  console.log(elements[0].innerHTML);
  ```

  ```html
  <div class="element">Element 1</div>
  <div class="element">Element 2</div>
  ```

---

### **Seleccionar elements amb `querySelector`**
- **Utilitza `querySelector`** per seleccionar el primer element que compleix un selector CSS.

  **Exemple:**
  ```javascript
  let element = document.querySelector(".element");
  console.log(element.innerHTML);
  ```

  ```html
  <div class="element">Primer element</div>
  <div class="element">Segon element</div>
  ```

---

### **Canviar el contingut d'un element**
- **Modifica el contingut d'un element amb `innerHTML` o `textContent`.**

  **Exemple:**
  ```javascript
  document.getElementById("titol").innerHTML = "Títol canviat!";
  ```

  ```html
  <h1 id="titol">Títol inicial</h1>
  ```

---

### **Canviar els estils d'un element**
- **Modifica els estils d'un element utilitzant la propietat `style`.**

  **Exemple:**
  ```javascript
  let parraf = document.getElementById("parraf");
  parraf.style.color = "blue";
  parraf.style.fontSize = "20px";
  ```

  ```html
  <p id="parraf">Aquest text canviarà d'estil.</p>
  ```

---

### **Afegir i eliminar classes**
- **Utilitza `classList` per afegir o eliminar classes d'estil a un element.**

  **Exemple:**
  ```javascript
  let div = document.getElementById("box");
  div.classList.add("nou-estil");
  ```

  ```html
  <div id="box" class="caixa">Contingut</div>
  ```

  ```css
  .nou-estil { background-color: yellow; }
  ```

---

### **Crear i afegir nous elements**
- **Crea un nou element amb `createElement` i afegeix-lo al DOM amb `appendChild`.**

  **Exemple:**
  ```javascript
  let nouParagraf = document.createElement("p");
  nouParagraf.textContent = "Nou paràgraf afegit.";
  document.body.appendChild(nouParagraf);
  ```

  ```html
  <!-- Es crearà i afegirà un nou paràgraf aquí -->
  ```

---

### **Eliminar elements**
- **Elimina un element del DOM amb `removeChild`.**

  **Exemple de codi:**
  ```javascript
  let parent = document.getElementById("contenidor");
  let child = document.getElementById("element-eliminar");
  parent.removeChild(child);
  ```

  ```html
  <div id="contenidor">
    <p id="element-eliminar">Aquest element serà eliminat.</p>
  </div>
  ```

---

### **Gestionar esdeveniments**
- **Afegeix esdeveniments a un element amb `addEventListener`.**

  **Exemple:**
  ```javascript
  let boto = document.getElementById("boto");
  boto.addEventListener("click", function() {
      alert("Botó clicat!");
  });
  ```

  ```html
  <button id="boto">Clica'm</button>
  ```

---

