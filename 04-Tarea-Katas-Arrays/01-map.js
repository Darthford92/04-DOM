/* ==========================================================================
   01 — Katas de .map() | 10 Katas de Transformación
   Completá cada función usando OBLIGATORIAMENTE .map().
   ⚠️  NO uses bucles for/while — retorná siempre un array nuevo.
========================================================================== */

/* --------------------------------------------------------------------------
   KATA 1 — Black Friday
   Dado un array de precios, retorná un nuevo array con el 20% de descuento
   aplicado a cada precio.
   Ej: [100, 200, 50] → [80, 160, 40]
-------------------------------------------------------------------------- */
function aplicarDescuento(precios) {
  // TU CÓDIGO AQUÍ 👇
  return precios.map((precio) => precio * 0.8);
}

/* --------------------------------------------------------------------------
   KATA 2 — Doblar los Números
   Dado un array de números, retorná un array con cada número multiplicado x2.
   Ej: [1, 2, 3] → [2, 4, 6]
-------------------------------------------------------------------------- */
function doblar(numeros) {
  // TU CÓDIGO AQUÍ 
  return numeros.map((numero) => numero * 2);
}

/* --------------------------------------------------------------------------
   KATA 3 — Nombre Completo
   Dado un array de objetos { nombre, apellido }, retorná un array de strings
   con el nombre completo de cada persona.
   Ej: [{nombre:'Ana',apellido:'Gil'}] → ['Ana Gil']
-------------------------------------------------------------------------- */
function nombresCompletos(personas) {
  // TU CÓDIGO AQUÍ 👇
  return personas.map((persona) => `${persona.nombre} ${persona.apellido}` );
}

/* --------------------------------------------------------------------------
   KATA 4 — Cuadrados
   Dado un array de números, retorná un array con el cuadrado de cada uno.
   Ej: [2, 3, 4] → [4, 9, 16]
-------------------------------------------------------------------------- */
function cuadrados(numeros) {
  // TU CÓDIGO AQUÍ 👇
  return numeros.map ((numero) => numero*numero);
}

/* --------------------------------------------------------------------------
   KATA 5 — Celsius a Fahrenheit
   Dado un array de temperaturas en Celsius, convertí cada una a Fahrenheit.
   Fórmula: F = C * 9/5 + 32
   Ej: [0, 100] → [32, 212]
-------------------------------------------------------------------------- */
function celsiusAFahrenheit(celsius) {
  // TU CÓDIGO AQUÍ 
  return celsius.map((grado) => grado * 9/5 + 32);
}

/* --------------------------------------------------------------------------
   KATA 6 — Precios con IVA
   Dado un array de precios sin IVA, retorná un array con IVA incluido (21%).
   Redondeá cada resultado a 2 decimales.
   Ej: [100, 50] → [121, 60.5]
-------------------------------------------------------------------------- */
function agregarIVA(precios) {
  // TU CÓDIGO AQUÍ 👇
  return precios.map((precio) => Number((precio*1.21).toFixed(2)));
}

/* --------------------------------------------------------------------------
   KATA 7 — Etiquetas HTML
   Dado un array de strings, envolvé cada uno en una etiqueta <li>.
   Ej: ['Pan','Leche'] → ['<li>Pan</li>','<li>Leche</li>']
-------------------------------------------------------------------------- */
function envolverEnLi(items) {
  // TU CÓDIGO AQUÍ 👇
  return items.map((item) =>  `<li>${item}</li>`);
}

/* --------------------------------------------------------------------------
   KATA 8 — Extractar Propiedad
   Dado un array de objetos producto { nombre, precio, stock },
   retorná un array solo con los nombres.
   Ej: [{nombre:'TV',precio:500,stock:3}] → ['TV']
-------------------------------------------------------------------------- */
function extraerNombres(productos) {
  // TU CÓDIGO AQUÍ 👇
  return productos.map((producto) => producto.nombre);
}

/* --------------------------------------------------------------------------
   KATA 9 — Índice Visible
   Dado un array de strings, retorná un array donde cada elemento sea:
   "N. valor" (índice base 1).
   Ej: ['Manzana','Pera'] → ['1. Manzana', '2. Pera']
-------------------------------------------------------------------------- */
function numerarLista(items) {
  // TU CÓDIGO AQUÍ 👇
  return items.map((item,index) => `${index+1}. ${item}` );
}

/* --------------------------------------------------------------------------
   KATA 10 — Normalizar Usuarios
   Dado un array de objetos { nombre, edad }, retorná un array donde:
   - nombre esté en MAYÚSCULAS
   - se añada la propiedad esMayor: true si edad >= 18, false si no
   Ej: [{nombre:'ana',edad:20}] → [{nombre:'ANA',edad:20,esMayor:true}]
-------------------------------------------------------------------------- */
function normalizarUsuarios(usuarios) {
  // TU CÓDIGO AQUÍ 👇
  return usuarios.map((usuario) => {
    return { 
      //el spread operator ... crea un objeto nuevo con las mismas caracteristicas que el original
      //lo usamos para modificar el objeto original
      ...usuario, 
      //ahora reasignamos el valor en nombre, esta vez todo en mayusculas
      nombre: usuario.nombre.toUpperCase(),
      //la clave valor edad no se toca
      //creamos una nueva clave esMayor y le asignamos un ternario para que guarde true o false
      //segun si es mayor o menor de edad
      esMayor: usuario.edad >= 18 ? true : false,
    };
  });
}

// 🚨 ¡NO TOCAR ESTA LÍNEA!
module.exports = {
  aplicarDescuento,
  doblar,
  nombresCompletos,
  cuadrados,
  celsiusAFahrenheit,
  agregarIVA,
  envolverEnLi,
  extraerNombres,
  numerarLista,
  normalizarUsuarios,
};
