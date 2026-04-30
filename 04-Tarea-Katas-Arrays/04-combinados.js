/* ==========================================================================
   04 — Katas Combinadas | 10 Katas nivel Senior
   Cada función combina map + filter + reduce de forma encadenada.
   ⚠️  Prohibido usar bucles for/while. Solo métodos de array.
========================================================================== */

/* --------------------------------------------------------------------------
   KATA 1 — Ticket de Compra
   Dado un array de productos { nombre, precio, cantidad, disponible },
   retorná el total a pagar sumando solo los disponibles (precio * cantidad).
   Ej: [{nombre:'TV',precio:500,cantidad:1,disponible:true},
        {nombre:'Cable',precio:50,cantidad:2,disponible:false}]
   → 500
-------------------------------------------------------------------------- */
function ticketCompra(productos) {
  // TU CÓDIGO AQUÍ 👇
  return productos
  //primero filtramos por productos disponibles
  .filter((producto) => producto.disponible === true)
  //luego vamos acumulando el valor de cada precio*cantidad de productos disponibles
  .reduce((acumulador, producto) => acumulador + producto.precio * producto.cantidad ,0);
}

/* --------------------------------------------------------------------------
   KATA 2 — Resumen de Notas
   Dado un array de alumnos { nombre, nota }, retorná un objeto:
   { aprobados: [...nombres], reprobados: [...nombres], promedio: N }
   Aprobado si nota >= 6. Promedio redondeado a 2 decimales.
   Ej: [{nombre:'Ana',nota:8},{nombre:'Luis',nota:4}]
   → { aprobados: ['Ana'], reprobados: ['Luis'], promedio: 6 }
-------------------------------------------------------------------------- */
function resumenNotas(alumnos) {
  // TU CÓDIGO AQUÍ 👇
    //constante que filtra por aprobados y extrae el nombre en string de cada uno
    const aprobados = alumnos.filter((alumno) => alumno.nota >= 6).map((alumno) => alumno.nombre);
    //constante que filtra por reprobados y extrae el nombre en string de cada uno
    const reprobados = alumnos.filter((alumno) => alumno.nota < 6).map((alumno) => alumno.nombre);
    // constante que suma todas las notas de todos los alumnos
    const sumatoria = alumnos.reduce((acumulador, alumno) => acumulador + alumno.nota,0);
    //constante que saca el promedio de todas las notas sumadas dicidiendola por la cantidad de notas
    //para redondear a dos decimales multiplica por 100 dentro de math y divide luego fuera
    const promedio = Math.round((sumatoria / alumnos.length)*100)/100;
    //se retorna el objeto con las claves y avlores (asignados por las variables)
    return {
      aprobados: aprobados,
      reprobados: reprobados,
      promedio: promedio,
    }
}

/* --------------------------------------------------------------------------
   KATA 3 — Palabras Únicas en Mayúsculas
   Dado un array de strings (posiblemente con duplicados), retorná un array
   con cada palabra única convertida a MAYÚSCULAS, sin repetidas.
   Ej: ['hola','mundo','hola','js'] → ['HOLA','MUNDO','JS']
-------------------------------------------------------------------------- */
function unicasEnMayusculas(palabras) {
  // TU CÓDIGO AQUÍ 👇
  return palabras
  //se filtran las palabras, indexOf permite filtrar las palabras que aparecen por primera vez
  //su lógica es si en el array palabras, palabra aparece por primera vez en la posición actual, entonces guardala
  //sino descartala
  .filter((palabra, index) => palabras.indexOf(palabra) === index)
  //por ultimo el map toma cada palabra por separado y la vuelve mayuscula con toUpperCase
  .map((palabra) => palabra.toUpperCase());
}

/* --------------------------------------------------------------------------
   KATA 4 — Top 3 Más Caros
   Dado un array de productos { nombre, precio }, retorná los 3 de mayor
   precio (ordenados de mayor a menor) como array de nombres.
   Ej: retorná ['TV','Laptop','Tablet'] si son los 3 más caros.
-------------------------------------------------------------------------- */
function top3MasCaros(productos) {
  // TU CÓDIGO AQUÍ 👇
  //con spread operator copiamos el objeto exactmanete igual
  return [...productos]
  //con sort le damos un orden para que se acomoden b.precio - a.precio significa de mayor(b) a menor(a)
  .sort((a, b) => b.precio - a.precio )
  //con slice limitamos y cortamos el array dejando solo la cantidad que queremos
  // , en este caso solo 3
  .slice(0, 3)
  //por ultimo map los transforma y deja solo sus nombres
  .map((producto) => producto.nombre);
}

/* --------------------------------------------------------------------------
   KATA 5 — Usuarios Premium con Descuento
   Dado un array de usuarios { nombre, esPremium, saldo },
   retorná un array con los usuarios premium y su saldo con 10% de descuento
   (saldo con bono aplicado: saldo * 1.1).
   Ej: [{nombre:'Ana',esPremium:true,saldo:100}]
   → [{nombre:'Ana',esPremium:true,saldo:110}]
-------------------------------------------------------------------------- */
function bonosPremium(usuarios) {
  // TU CÓDIGO AQUÍ 👇
  return usuarios
  //primero filtramos para ver cuales de los usuarios son premium
  .filter((usuario) => usuario.esPremium === true)
  //luego transformamos con map, para ello hay que con un spread operator
  //copiar el objeto y luego modificarle la propiedad saldo
  //pero nos va a quedar con muchos decimales así que hay que redondearlo
  //lo cual podemos hacer con mathround(xxx*100)/100
  //o con tofixed
  .map((usuario) => ({...usuario, saldo: Math.round(usuario.saldo *1.1*100)/100}));
}

/* --------------------------------------------------------------------------
   KATA 6 — Estadísticas de Ventas
   Dado un array de ventas { producto, monto, region },
   retorná un objeto con el total vendido por región.
   Ej: [{producto:'TV',monto:500,region:'norte'},{producto:'Radio',monto:100,region:'norte'},{producto:'PC',monto:800,region:'sur'}]
   → { norte: 600, sur: 800 }
-------------------------------------------------------------------------- */
function ventasPorRegion(ventas) {
  // TU CÓDIGO AQUÍ 👇
  return ventas.reduce((acumulador, venta) => {
    //creamos un fi que evalua si existen las regiones en el nuevo objeto
    if (!acumulador[venta.region]){
      //si no existe las crea y les asigna 0 de valor, ya que va a sumar un numero
      acumulador[venta.region] = 0;
    }
    //si la region existe va a sumar todos los valores que haya en esa región en la
    //parte del monto
    acumulador[venta.region] += venta.monto ;
    //luego retorna el valor
    return acumulador;
  } ,{} )
}

/* --------------------------------------------------------------------------
   KATA 7 — Inventario Crítico
   Dado un array de productos { nombre, stock, minimo },
   retorná los nombres de los productos cuyo stock sea menor al mínimo,
   en MAYÚSCULAS y ordenados alfabéticamente.
   Ej: [{nombre:'tornillo',stock:2,minimo:10},{nombre:'clavo',stock:20,minimo:5}]
   → ['TORNILLO']
-------------------------------------------------------------------------- */
function inventarioCritico(productos) {
  // TU CÓDIGO AQUÍ 👇
  return productos
  //primero creamos un filter que busque solo los productos con stock menor
  //al mínimo
  .filter((producto) => producto.stock < producto.minimo)
  //luego mapeamos sus nombres y los convertimos a mayusculas
  .map((producto) => producto.nombre.toUpperCase())
  //por ultimo usamos un sort para ordenarlos pero usando localeCompare
  //que sirve para comparar strings
  .sort((a, b) => a.localeCompare(b) );
}

/* --------------------------------------------------------------------------
   KATA 8 — Historial de Búsqueda Limpio
   Dado un array de strings (historial), retorná un array sin duplicados,
   sin strings vacíos y con cada término en minúsculas, ordenado
   alfabéticamente.
   Ej: ['JS', 'css', 'JS', '', 'html', 'CSS']
   → ['css', 'html', 'js']
-------------------------------------------------------------------------- */
function limpiarHistorial(historial) {
  // TU CÓDIGO AQUÍ 👇
  //primero guardamos el historial transformado por map a minusculas en una constante para que luego filter no acceda
  //directamente al historial que se le pasa a la funcion y se rompa.
  //también usamos trim para descartar strings vacios
  const histTransformado = historial.map((histGuardado) => histGuardado.toLowerCase().trim())
  return histTransformado
  //luego usamos filter con dos condiciones, primero evaluar si existe algo en el string y no está
  //vacio y la segunda es que no exista ya ese string y eliminar así duplicados
  .filter((histGuardado, index) => histGuardado && histTransformado.indexOf(histGuardado) === index)
  //por ultimo ordenarlos con sort y localeCompare
  .sort((a, b) => a.localeCompare(b));
}

/* --------------------------------------------------------------------------
   KATA 9 — Ranking de Jugadores
   Dado un array de jugadores { nombre, puntos, activo },
   retorná el TOP 3 de jugadores ACTIVOS con más puntos como array de strings
   en formato "N. nombre — puntos pts".
   Ej: "1. Mario — 980 pts"
-------------------------------------------------------------------------- */
function rankingJugadores(jugadores) {
  // TU CÓDIGO AQUÍ 👇
  return jugadores.filter((jugador) => jugador.activo === true)
  .sort((a, b) => b.puntos - a.puntos)
  .slice(0, 3)
  .map((jugador, index) => `${index+1}. ${jugador.nombre} — ${jugador.puntos} pts` );
}

/* --------------------------------------------------------------------------
   KATA 10 — Pipeline de Datos
   Dado un array de empleados { nombre, departamento, salario, activo },
   retorná el salario promedio del departamento "tecnología"
   considerando SOLO los empleados activos.
   Redondeá a 2 decimales. Si no hay empleados activos, retorná 0.
-------------------------------------------------------------------------- */
function salarioPromedioTech(empleados) {
  // TU CÓDIGO AQUÍ 👇
  const tecActivos = empleados.filter((empleado) => empleado.departamento === "tecnología" && empleado.activo === true);
  const promedioSalarios = tecActivos.reduce((acumulador, empleado) => acumulador + empleado.salario ,0);
  return tecActivos.length === 0 ? 0 : Number((promedioSalarios/tecActivos.length).toFixed(2));
}

// 🚨 ¡NO TOCAR ESTA LÍNEA!
module.exports = {
  ticketCompra,
  resumenNotas,
  unicasEnMayusculas,
  top3MasCaros,
  bonosPremium,
  ventasPorRegion,
  inventarioCritico,
  limpiarHistorial,
  rankingJugadores,
  salarioPromedioTech,
};
