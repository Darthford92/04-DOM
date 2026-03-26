// 1. LA BASE DE DATOS MOCK
const peliculas = [
  { titulo: "El Señor de los Anillos", año: 2001 },
  { titulo: "Matrix", año: 1999 },
  { titulo: "Inception", año: 2010 },
  { titulo: "El Padrino", año: 1972 },
  { titulo: "Interstellar", año: 2014 },
  { titulo: "Batman: El Caballero de la Noche", año: 2008 },
];

// 2. ATRAPANDO ELEMENTOS DEL DOM
const contenedor = document.querySelector("#contenedor-peliculas");
const inputBusqueda = document.querySelector("#input-busqueda");

// 3. FUNCIÓN PARA RENDERIZAR (DIBUJAR) PELÍCULAS
// Consigna: Recibe un array de películas, limpia el contenedor,
// y usa un bucle (for o forEach) para crear <div> con la clase 'tarjeta' e inyectarlos.
function renderizarPeliculas(arrayPeliculas) {
  // 💡 Tip: Primero limpia el HTML del contenedor usando contenedor.innerHTML = '';
  // TU CÓDIGO AQUÍ 👇
}

// 4. EL BUSCADOR (Event Listener + Filter)
// Consigna: Escuchar cuando el usuario escribe en el input.
// Capturar ese texto, usar .filter() sobre el array 'peliculas' original
// para buscar coincidencias (usando .includes()), y volver a llamar a renderizarPeliculas().
inputBusqueda.addEventListener("input", (evento) => {
  const textoBuscado = evento.target.value.toLowerCase();

  // TU CÓDIGO AQUÍ 👇
});

// 5. INICIALIZACIÓN
// Ejecutamos la función por primera vez para que la pantalla no arranque vacía
renderizarPeliculas(peliculas);
