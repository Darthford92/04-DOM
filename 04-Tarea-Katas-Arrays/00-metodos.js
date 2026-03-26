/* ==========================================================================
   KATA 1: El Black Friday (.map)
   Consigna: Recibirás un array de precios. Debes retornar un NUEVO array 
   donde a cada precio se le haya aplicado un 20% de descuento.
   ¡Prohibido usar bucles for! Usa .map()
========================================================================== */
function aplicarDescuento(precios) {
  // TU CÓDIGO AQUÍ 👇
  return precios.map((precio) => precio * 0.8);
}

/* ==========================================================================
   KATA 2: Control de Stock (.filter)
   Consigna: Recibirás un array de objetos (productos). Debes retornar un 
   nuevo array SOLO con los productos que tengan su propiedad 'enStock' en true.
========================================================================== */
function filtrarDisponibles(productos) {
  // TU CÓDIGO AQUÍ 👇
}

/* ==========================================================================
   KATA 3: La Caja Registradora (.reduce)
   Consigna: Recibirás un array de números (precios de un carrito). 
   Debes retornar la suma total de todos los números.
========================================================================== */
function calcularTotal(carrito) {
  // TU CÓDIGO AQUÍ 👇
}

/* ==========================================================================
   KATA 4: El Consultorio (FIFO - Colas)
   Consigna: Recibirás un array con nombres de pacientes en espera. 
   Debes sacar al PRIMER paciente de la fila, y retornar un string que diga:
   "Atendiendo a: [nombre_del_paciente]".
========================================================================== */
function llamarSiguiente(salaDeEspera) {
  // TU CÓDIGO AQUÍ 👇
}

// 🚨 ¡NO TOCAR ESTA LÍNEA!
module.exports = {
  aplicarDescuento,
  filtrarDisponibles,
  calcularTotal,
  llamarSiguiente,
};
