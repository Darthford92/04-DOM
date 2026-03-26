# 🎭 El Show del DOM y los Datos

---

## 🚂 Acto 1: Arrays (Visualizando el Tren)

🗣️ **Lo que decís:** _"Chicos, imaginen un tren de carga. Vamos a armarlo en vivo."_

💻 **Lo que codeás en `app.js`:**

```javascript
let tren = ["🚂 Locomotora", "📦 Vagón 1", "📦 Vagón 2"];

// TRUCO PRO: No uses console.log, usá console.table
console.table(tren);
```

> **Visual:** La consola de Chrome les dibuja una tabla hermosa con el Índice (0, 1, 2) y los Valores. ¡Entienden al instante qué es un índice!

🗣️ **Lo que decís:** _"Le enganchamos un vagón nuevo al final..."_

💻 **Lo que codeás:**

```javascript
tren.push("🧨 Vagón Peligroso");
console.table(tren); // Ven cómo la tabla crece en vivo.
```

---

## 🥞 Acto 2: LIFO y FIFO (Animación en consola)

🗣️ **Lo que decís:** _"Ahora, ¿cómo sacamos cajas de acá? Hay dos reglas en el mundo de la programación: El tubo de Pringles (Pilas) y la Fila del súper (Colas)."_

💻 **Lo que codeás (El tubo de Pringles - LIFO):**

```javascript
let pringles = ["🥔 Pringle Base", "🥔 Pringle Medio", "🥔 Pringle Arriba"];
console.log("Tubo original:", pringles);

// Meto la mano en el tubo:
let papaComida = pringles.pop();
console.log("Me comí la:", papaComida); // Ven que saca la de Arriba
console.log("Quedan:", pringles);
```

💻 **Lo que codeás (La fila del súper - FIFO):**

```javascript
let filaSuper = ["🧍‍♂️ Neri", "🧍‍♀️ Ana", "🧍‍♂️ Juan"];
// Se abre la caja:
let atendido = filaSuper.shift();
console.log("Atendiendo a:", atendido); // Ven que saca al PRIMERO
```

---

## 👾 Acto 3: Objetos (El Menú de Pausa)

🗣️ **Lo que decís:** _"El array sirve para listas. Pero si aprieto 'Start' en un juego, veo la ficha técnica de mi personaje. Eso es un Objeto."_

💻 **Lo que codeás:**

```javascript
let jugador = {
  nombre: "Mario",
  profesion: "Plomero",
  vidas: 3,
  item: "🍄",
};

// TRUCO PRO: Console.table hace que el objeto se vea como una base de datos
console.table(jugador);

// Lo tocamos un enemigo:
jugador.vidas = 2;
jugador.item = "Vacio";
console.table(jugador); // Ven el cambio de estado en vivo.
```

---

## 🏭 Acto 4: Map, Filter, Reduce (La Fábrica con Emojis)

🗣️ **Lo que decís:** _"Basta de bucles `for` aburridos. Vamos a usar la maquinaria industrial de JavaScript."_

💻 **Lo que codeás (El mejor ejemplo visual de `.map` que existe):**

```javascript
// .MAP() (Transforma todo)
let papas = ["🥔", "🥔", "🥔"];
let papasFritas = papas.map((papa) => "🍟");
console.log("Fábrica Map:", papasFritas); // Ven ['🍟', '🍟', '🍟']

// .FILTER() (El Patovica)
let invitados = ["👶", "🧔", "👶", "👵"];
let mayores = invitados.filter((persona) => persona !== "👶");
console.log("Entran al boliche:", mayores); // Ven ['🧔', '👵']
```

> Te prometo que si les mostrás lo de las papas fritas, jamás en su vida se olvidan de cómo funciona un `map`.

---

## 🔮 Acto 5: El DOM (El puente entre los Datos y la Pantalla)

> **Preparación:** El HTML solo tiene un `<div id="tienda"></div>` y un `<button id="btn-ofertas">Ver Ofertas</button>`

🗣️ **Lo que decís (Teoría visual):** _"Chicos, el HTML que escriben en VS Code es texto muerto. Cuando el navegador lo lee, lo convierte en un árbol gigante de objetos llamado DOM (Document Object Model). Cada etiqueta es una rama que JavaScript puede agarrar, modificar o destruir."_

---

### 🔥 Demo 1: Renderizado Masivo (Conectando Arrays con la Pantalla)

🗣️ **Lo que decís:** _"En el mundo real, no escribimos 100 `<div>` a mano en el HTML. Le pedimos a una base de datos que nos mande un Array, y usamos JS para 'dibujarlo' en pantalla en milisegundos. Vamos a simular la base de datos de MercadoLibre."_

💻 **Lo que codeás en vivo:**

```javascript
// 1. Nuestra "Base de Datos"
const baseDeDatos = [
  { id: 1, nombre: "Laptop Gamer", precio: 1500, oferta: false },
  { id: 2, nombre: "Mouse RGB", precio: 50, oferta: true },
  { id: 3, nombre: "Teclado Mecánico", precio: 120, oferta: false },
  { id: 4, nombre: "Auriculares", precio: 80, oferta: true },
  { id: 5, nombre: "Monitor 144hz", precio: 300, oferta: false },
];

// 2. Atrapamos el contenedor vacío del HTML
const contenedorTienda = document.querySelector("#tienda");

// 3. LA MAGIA: Usamos .map() para transformar Objetos en etiquetas HTML
function renderizarProductos(productos) {
  const htmlGenerado = productos.map((producto) => {
    return `
      <div style="border: 1px solid #0f0; padding: 10px; margin: 5px;">
        <h3>${producto.nombre}</h3>
        <p>Precio: $${producto.precio}</p>
        <small>${producto.oferta ? "🔥 ¡EN OFERTA!" : ""}</small>
      </div>
    `;
  });

  // 4. Inyectamos todo el array de golpe en el DOM uniéndolo con .join('')
  contenedorTienda.innerHTML = htmlGenerado.join("");
}

// ¡Llamamos a la función y explota la pantalla con productos!
renderizarProductos(baseDeDatos);
```

> **Impacto:** Cuando guardás el archivo, la pantalla en blanco se llena instantáneamente de tarjetas de productos. Ahí entienden por qué aprendieron `.map()`.

---

### ⚡ Demo 2: Los Eventos (Dándole reflejos a la página)

🗣️ **Lo que decís:** _"El DOM no es solo para dibujar, es para interactuar. Cuando ustedes hacen clic, mueven el mouse o escriben, el navegador dispara un 'Evento'. Nosotros podemos ponerle un micrófono a un botón para que escuche ese evento y haga algo."_

💻 **Lo que codeás en vivo (Conectando un Evento con un `.filter()`):**

```javascript
// 1. Atrapamos el botón
const botonOfertas = document.querySelector("#btn-ofertas");

// 2. Le ponemos el "micrófono" (addEventListener)
botonOfertas.addEventListener("click", () => {
  // 3. Usamos nuestro Patovica (.filter) para quedarnos solo con los que SÍ están en oferta
  const soloOfertas = baseDeDatos.filter(
    (producto) => producto.oferta === true,
  );

  // 4. Volvemos a dibujar la pantalla, pero ahora solo con los filtrados
  renderizarProductos(soloOfertas);
});
```

> **Impacto:** Hacés clic en el botón de la página y automáticamente desaparecen los productos que no están en oferta. ¡Acaban de ver cómo se programa un sistema de filtrado real!
