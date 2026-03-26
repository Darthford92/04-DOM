// [0, 1, 2, 3 ] -> Se empieza a contar desde el 0, no desde el 1
// let tren = ["🚂 Locomotora", "📦 Vagón 1", "📦 Vagón 2"];

// console.table(tren);
// // console.log(tren[0]);
// // console.log(tren[2]);

// tren.push("🚃 Vagón 3");

// console.table(tren);

// LIFO -> Last In First Out

// let pringles = ["🥔 Pringle Base", "🥔 Pringle Medio", "🥔 Pringle Arriba"];
// console.log("Tubo original:", pringles);

// // Meto la mano en el tubo:
// let papaComida = pringles.pop();
// console.log("Me comí la:", papaComida); // Ven que saca la de Arriba
// console.log("Quedan:", pringles);

// FIFO -> First In First Out

// let filaSuper = ["🧍‍♂️ Neri", "🧍‍♀️ Ana", "🧍‍♂️ Juan"];
// // Se abre la caja:
// let atendido = filaSuper.shift();
// console.log("Atendiendo a:", atendido); // Ven que saca al PRIMERO

// METODO MAP
// let papas = ["papa", "papa", "papa"];

// let noFritas = papas.map((value, index) => {
//   return `VALUE: ${value},  INDEX: ${index}`;
// });

// let fritas = papas.map((papa) => {
//   return "papa frita";
// });

// // → ['🍟', '🍟', '🍟']

// console.log(noFritas);
// console.log("\n\n");
// console.log(fritas);

// METODO FILTER
// let edades = [15, 22, 12, 30, 18];
// let edades = ["miguel", "pedro", "jose", "maxi", "messi"];
// // let adultos = edades.filter((value) => value !== 18);

// let campeon = edades.filter((value) => value === "messi");
// // → [22, 30, 18]

// // console.log(adultos);
// console.log(campeon);

// METODO REDUCE
// let carrito = [100, 250, 50, 300];
// let total = carrito.reduce(
//   (acumulador, currentValue) => acumulador + currentValue,
//   0,
// );
// // → 700

// console.log(total);

// let nums = [40, 1, 5, 200];
// nums.sort((indexA, indexB) => indexA - indexB); // ascendente
// → [1, 5, 40, 200]

// nums.sort((a, b) => b - a); // descendente

// → [200, 40, 5, 1]

// console.log(nums);

// let palabras = ["Hola", "Mundo", "JS"];
// palabras.join(" "); // → "Hola Mundo JS"
// palabras.join(" - "); // → "Hola - Mundo - JS"
// palabras.join(""); // → "HolaMundoJS"

// console.log(palabras.join(" - "));

// let fraseLargaEnArreglo = "Lorem ipsum dolor sit amet".split(" ");

// console.log(fraseLargaEnArreglo);
// console.log(
//   fraseLargaEnArreglo.filter((palabra) => palabra === "sit").join(""),
// );

// let jugador = {
//   nombre: "Mario",
//   profesion: "Plomero",
//   vidas: 3,
//   item: "🍄",
// };

// TRUCO PRO: Console.table hace que el objeto se vea como una base de datos
// console.table(jugador);
// console.log(jugador.vidas);
// console.log(jugador["vidas"]);

// Lo tocamos un enemigo:
// jugador.vidas = 2;
// jugador.item = "Vacio";
// console.table(jugador); // Ven el cambio de estado en vivo.

// console.table(jugador);

// let base = { hp: 100, ataque: 10 };
// let guerrero = {
//   ...base,
//   clase: "Guerrero",
//   ataque: 25,
// };

// console.log(base);
// console.log(guerrero);

// let jugador = { nombre: 'Mario', vidas: 3, item: '🍄' };

// const { nombre, vidas } = jugador;
// // nombre → 'Mario'
// // vidas  → 3

// const { item: poder } = jugador; // renombrar
// // poder → '🍄'
