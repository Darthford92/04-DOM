/* ==========================================================================
   03 — Katas de .reduce() | 10 Katas de Acumulación
   Completá cada función usando OBLIGATORIAMENTE .reduce().
   ⚠️  NO uses bucles for/while ni .forEach().
========================================================================== */

/* --------------------------------------------------------------------------
   KATA 1 — La Caja Registradora
   Dado un array de números (precios), retorná la suma total.
   Ej: [10, 20, 30] → 60
-------------------------------------------------------------------------- */
function sumarTotal(numeros) {
  // TU CÓDIGO AQUÍ 👇
  return numeros.reduce((acumulador, numero) => acumulador + numero, 0);
}

/* --------------------------------------------------------------------------
   KATA 2 — El Producto
   Dado un array de números, retorná la multiplicación de todos entre sí.
   Ej: [2, 3, 4] → 24
-------------------------------------------------------------------------- */
function multiplicarTodo(numeros) {
  // TU CÓDIGO AQUÍ 👇
  //ponemos como valor inicial 1 así el primer número del arrai se multiplica con el, lo que dará el
  //mismo número, luego se van multiplicando con los demás.
  return numeros.reduce((acumulador, numero) => acumulador * numero, 1);
}

/* --------------------------------------------------------------------------
   KATA 3 — El Mayor
   Dado un array de números, retorná el valor máximo usando .reduce().
   (No vale Math.max con spread)
   Ej: [3, 7, 1, 9, 4] → 9
-------------------------------------------------------------------------- */
function encontrarMaximo(numeros) {
  // TU CÓDIGO AQUÍ 👇
  //usamos un operador ternario para definir que pasa con la condición dependiendo de si es true o false
  return numeros.reduce((acumulador, numero) => numero > acumulador ? numero : acumulador, numeros[0]);
}

/* --------------------------------------------------------------------------
   KATA 4 — Contar Ocurrencias
   Dado un array de strings, retorná un objeto que cuente cuántas veces
   aparece cada string.
   Ej: ['a','b','a','c','b','a'] → { a: 3, b: 2, c: 1 }
-------------------------------------------------------------------------- */
function contarOcurrencias(arr) {
  // TU CÓDIGO AQUÍ 👇
  return arr.reduce((acumulador,string) => {
    //acumulador[string] es lo mismo que acumulador.a ya que son formas equivalentes
    //de entrar a una propiedad, string acá funciona como variable
    //si ponemos ["string"] en vez de [string] buscará literalmente un string, así que hay que
    //quitar las comillas 
    acumulador[string] = (acumulador[string] || 0)+1;
    // esto: || 0 significa que si la variable no existe se use 0 como valor inicial
    //el OR devulve el primero que sea truthy, caso contrario el segundo
    //o sea está diciendo si acumulador[string] existe y tiene valor usalo
    //sino usa 0
    // luego el +1 suma un punto si el elemento es encontrado nuevamente en el array
    return acumulador;
  }, {});
}

/* --------------------------------------------------------------------------
   KATA 5 — Aplanar Array (flatten)
   Dado un array de arrays, retorná todos los elementos en un array plano.
   Ej: [[1,2],[3,4],[5]] → [1, 2, 3, 4, 5]
-------------------------------------------------------------------------- */
function aplanar(arrayDeArrays) {
  // TU CÓDIGO AQUÍ 👇
  // concat une dos arrays en uno
  //acumulador.concat(array), []); es lo mismo que "en el array donde vas a acumular todo
  // contaceta lo que hay dentro de este array (el que se le pasa a la función)"
  //entonces por cada vuelta va a ir pegando los distintos array que encuentre dentro
  //del array mayor
  return arrayDeArrays.reduce((acumulador, array) => acumulador.concat(array), []);
}

/* --------------------------------------------------------------------------
   KATA 6 — Total del Carrito con Objetos
   Dado un array de objetos { nombre, precio, cantidad }, retorná el importe
   total sumando precio * cantidad de cada item.
   Ej: [{nombre:'TV',precio:500,cantidad:2}] → 1000
-------------------------------------------------------------------------- */
function totalCarrito(items) {
  // TU CÓDIGO AQUÍ 👇
  // acumulador va a ir guardando la suma por cada objeto del array
  //se realiza la multiplicación y el valor que da queda grabado en el acumulador
  //y asi con todos los objetos
  return items.reduce((acumulador, item) => acumulador + (item.precio * item.cantidad), 0);
}

/* --------------------------------------------------------------------------
   KATA 7 — Agrupar por Categoría
   Dado un array de objetos { nombre, categoria }, retorná un objeto donde
   cada clave es una categoría y su valor es un array con los nombres.
   Ej: [{nombre:'Manzana',categoria:'fruta'},{nombre:'TV',categoria:'electro'}]
       → { fruta: ['Manzana'], electro: ['TV'] }
-------------------------------------------------------------------------- */
function agruparPorCategoria(productos) {
  // TU CÓDIGO AQUÍ 👇
  return productos.reduce((acumulador, producto) => {
    //Creamos un if que evalúe si la clave existe en el nuevo objeto
    //el acumulador será el objeto y [producto.categoría] será la clave
    //es lo mismo que decir objeto.clave
    if (!acumulador[producto.categoria]){
      //en el caso de que no exista esa clave, se crea, dentro del objeto,
      //un nuevo array con esa clave
      acumulador[producto.categoria] = [];
    }
    //luego, se agarra el array y se le pushea el nombre del producto
    acumulador[producto.categoria].push(producto.nombre);
    //por ultimo se retorna el acumulador.
    return acumulador;
  } , {});
}

/* --------------------------------------------------------------------------
   KATA 8 — Promedio
   Dado un array de números, retorná el promedio (media aritmética).
   Redondeá a 2 decimales con Math.round(n * 100) / 100.
   Ej: [10, 20, 30] → 20
-------------------------------------------------------------------------- */
function promedio(numeros) {
  // TU CÓDIGO AQUÍ 👇
  //creamos una constante que va a gaurdar la suma que el acumulador va haciendo
  const suma = numeros.reduce((acumulador, numero) => numero + acumulador ,0);
  //creamos otra constante dónde esa suma se divida por la cantidad de numeros sumados
  // para dar con el promedio
  const promedio = suma / numeros.length;
  //retornamos el valor luego de multiplicarlo por 100 y dividirlo también por 100
  // para simular un redondeo de dos cifras
  return Math.round(promedio*100)/100;
}

/* --------------------------------------------------------------------------
   KATA 9 — Construir String desde Array
   Dado un array de palabras, construí una oración uniéndolas con espacio
   usando reduce (sin usar .join()).
   Ej: ['Hola','Mundo','JS'] → 'Hola Mundo JS'
-------------------------------------------------------------------------- */
function construirOracion(palabras) {
  // TU CÓDIGO AQUÍ 👇
  //
  return palabras.reduce((acumulador, palabra) => 
    //Se tuvo que poner un ternario para evitar que si se pasa un array vacio no se rompa todo
    //entonces si acumulador es un string vacio se acumula la palabra sola
    //sino se acumula el acumulador, el espacio y la palabra
    //para evitar el uso de .join
    acumulador === "" ? palabra : acumulador + " " + palabra,"");
}

/* --------------------------------------------------------------------------
   KATA 10 — Balance de Cuenta
   Dado un array de transacciones { tipo: 'ingreso'|'egreso', monto },
   calculá el saldo final. Los ingresos suman, los egresos restan.
   Ej: [{tipo:'ingreso',monto:1000},{tipo:'egreso',monto:300}] → 700
-------------------------------------------------------------------------- */
function calcularBalance(transacciones) {
  // TU CÓDIGO AQUÍ 👇
  return transacciones.reduce((acumulador, transaccion) => {
    //se crea un if para saber si la transacción es un ingreso
    if (transaccion.tipo === "ingreso"){
      //si lo es se retorna el acumulador sumado al monto
      return acumulador + transaccion.monto;
    } else {
      //caso contrario es un agreso y se retorna el acumulador menos el monto
      return acumulador - transaccion.monto;
    }
  },0);
}

// 🚨 ¡NO TOCAR ESTA LÍNEA!
module.exports = {
  sumarTotal,
  multiplicarTodo,
  encontrarMaximo,
  contarOcurrencias,
  aplanar,
  totalCarrito,
  agruparPorCategoria,
  promedio,
  construirOracion,
  calcularBalance,
};
