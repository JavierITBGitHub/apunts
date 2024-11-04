# **JAVASCRIPT BÀSIC** 
---
### **Introducció a JavaScript**
- **Què és JavaScript?**
  - Llenguatge de programació que s’executa en el navegador.
  - Permet crear pàgines web interactives.

  **Exemple:**
  ```javascript
  console.log("Hola, món!");
  ```

---
### **Variables**
- **Declaració de variables**:
  - `var`, `let`, `const`

 - Usa **var** quan necessitis àmbit de funció o compatibilitat amb JavaScript antic (tot i que avui dia és millor evitar-ho).
 - Usa **let** quan necessitis una variable que pugui canviar de valor dins d’un àmbit de bloc.
 - Usa **const** per variables que no canviaran o quan vols assegurar que la variable no sigui reassignada.

    **Exemple:**
    ```javascript
    let nom = "Joan";
    const edat = 25;
    console.log(nom, edat);
    ```

---

### **Tipus de dades**
- **Tipus primitius**: `string`, `number`, `boolean`, `null`, `undefined`

  **Exemple**
  ```javascript
  let text = "Hola!";
  let numero = 42;
  let esCert = true;
  console.log(text, numero, esCert);
  ```

---

### **Operadors**
- **Operadors aritmètics i lògics**:
  - `+`, `-`, `*`, `/`, `%`
  - `==`, `===`, `&&`, `||`, `!`

  **Exemple**
  ```javascript
  let a = 10;
  let b = 20;
  let suma = a + b;
  console.log(suma > 15 && b === 20);  // true
  ```

---

### **Condicionals**
- **Estructura `if` i `else`**:
  - Condicions per executar diferents blocs de codi.

  **Exemple**
  ```javascript
  let edat = 18;
  if (edat >= 18) {
      console.log("Ets adult");
  } else {
      console.log("Ets menor d'edat");
  }
  ```

---

### **Bucles**
- **Bucle `for` i `while`**:
  - Repeteixen blocs de codi.

  **Exemple (for):**
  ```javascript
  for (let i = 0; i < 5; i++) {
      console.log("Iteració " + i);
  }
  ```
  
  **Exemple (while):**
  ```javascript
   let i = 0;
   while (i < 5) {
     console.log("Iteració " + i);
     i++;  // Incrementa 'i' per evitar un bucle infinit
   }
   ```
   ---
### **Funcions**

  **Exemple**
  ```javascript
  function saludar(nom) {
      return "Hola, " + nom;
  }
  console.log(saludar("Maria"));
  ```

---
## Arrays
Un **array** és una col·lecció ordenada de valors, que es poden emmagatzemar en una sola variable. Aquí tens una explicació bàsica:

### Crear un array

1. **Array buit**:
   ```javascript
   let arr = [];
   ```

2. **Array amb elements**:
   ```javascript
   let fruits = ["poma", "plàtan", "maduixa"];
   ```

### Accedir a elements

Per accedir a un element, utilitza l'índex (la posició). Els índexs comencen en `0`.

```javascript
console.log(fruits[0]); // "poma"
console.log(fruits[1]); // "plàtan"
```

### Modificar elements

Assigna un nou valor a un element de l'array:
```javascript
fruits[1] = "taronja";
console.log(fruits); // ["poma", "taronja", "maduixa"]
```

### Afegir elements

1. **Al final**:
   ```javascript
   fruits.push("mango");
   ```

2. **Al principi**:
   ```javascript
   fruits.unshift("cirera");
   ```

### Eliminar elements

1. **Del final**:
   ```javascript
   fruits.pop();
   ```

2. **Del principi**:
   ```javascript
   fruits.shift();
   ```

### Longitud de l'array

`length` ens dona el nombre d'elements.
```javascript
console.log(fruits.length); // Nombre d'elements en l'array
```

### Exemple:

```javascript
let fruits = ["poma", "plàtan"];
fruits.push("maduixa"); // Afegim "maduixa"
console.log(fruits); // ["poma", "plàtan", "maduixa"]
```




