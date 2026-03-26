/* =======================================================
   KATA 1: El Rey de la Colina (Algoritmo de Búsqueda)
   Misión: Encontrar el número más grande en un Array.
======================================================= */
// const numeros = [15, 42, 4, 99, 23];
// console.log("--- KATA 1: BÚSQUEDA DEL MAYOR ---");

// 🧑‍💻 LA FORMA JUNIOR (El Algoritmo Clásico a mano)
// let elMayor = numeros[0]; // Asumimos que el primero es el rey provisional

// for (let i = 1; i < numeros.length; i++) {
//   if (numeros[i] > elMayor) {
//     elMayor = numeros[i]; // ¡Hay un nuevo rey!
//   }
// }
// console.log("Algoritmo a mano. El mayor es:", elMayor);

// 🧙‍♂️ LA FORMA SENIOR (El Atajo de JS)
// Una vez que entienden el bucle de arriba, les mostrás este truco de magia:
// console.log(...numeros);
// const elMayorSenior = Math.max(...numeros);
// console.log("Atajo Senior. El mayor es:", elMayorSenior);

/* =======================================================
   KATA 2: El Patovica del Inventario (Filtrado)
   Misión: Dejar solo los productos que cuesten menos de $500.
======================================================= */
const tienda = [
  { nombre: "Zapatillas", precio: 1200 },
  { nombre: "Remera", precio: 300 },
  { nombre: "Gorra", precio: 150 },
  { nombre: "Campera", precio: 2500 },
];
// console.log("\n--- KATA 2: FILTRAR INVENTARIO ---");

// 🧑‍💻 LA FORMA JUNIOR (Algoritmo de Filtrado a mano)
// const productosBaratosManual = []; // Creamos un array vacío (el VIP)

// for (let i = 0; i < tienda.length; i++) {
//   let producto = tienda[i];
//   if (producto.precio < 500) {
//     productosBaratosManual.push(producto); // Lo dejamos pasar
//   }
// }
// console.log("Filtrado a mano:", productosBaratosManual);

// 🧙‍♂️ LA FORMA SENIOR (Usando la máquina .filter)
// const productosBaratosSenior = tienda.filter(
//   (producto) => producto.precio < 500,
// );
// console.log("Filtrado Senior:", productosBaratosSenior);

/* =======================================================
   KATA 3: La Inflación (Transformación)
   Misión: Aumentar el precio de TODOS los productos un 10%.
======================================================= */
console.log("\n--- KATA 3: APLICAR INFLACIÓN ---");

// 🧑‍💻 LA FORMA JUNIOR (Transformación a mano)
// const tiendaInflacionManual = [];

// for (let i = 0; i < tienda.length; i++) {
//   let productoOriginal = tienda[i];

//   // Creamos una copia del objeto para no romper el original
//   let productoModificado = {
//     nombre: productoOriginal.nombre,
//     precio: productoOriginal.precio * 1.1,
//   };

//   tiendaInflacionManual.push(productoModificado);
// }
// console.table(tiendaInflacionManual);

// 🧙‍♂️ LA FORMA SENIOR (Usando la máquina .map)
// const tiendaInflacionSenior = tienda.map((producto) => {
//   return { nombre: producto.nombre, precio: producto.precio * 1.1 };
// });
// console.table(tiendaInflacionSenior);

// /* =======================================================
//    KATA 4: El Ticket de Compra (Agregación)
//    Misión: Sumar el total de todo el inventario.
// ======================================================= */
console.log("\n--- KATA 4: SUMAR TOTAL ---");

// // 🧑‍💻 LA FORMA JUNIOR (El Acumulador)
// let totalManual = 0; // La caja registradora arranca en 0

// for (let i = 0; i < tienda.length; i++) {
//   totalManual = totalManual + tienda[i].precio;
// }
// console.log("Suma a mano: $", totalManual);

// // 🧙‍♂️ LA FORMA SENIOR (Usando la licuadora .reduce)
// const totalSenior = tienda.reduce(
//   (acumulador, producto) => acumulador + producto.precio,
//   0,
// );
// console.log("Suma Senior: $", totalSenior);
