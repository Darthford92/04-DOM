// 1. LA BASE DE DATOS (El Array de Cartas). Son pares.
const cartas = [
  { id: 1, icono: "🍎" },
  { id: 2, icono: "🍎" },
  { id: 3, icono: "🍌" },
  { id: 4, icono: "🍌" },
  { id: 5, icono: "🍇" },
  { id: 6, icono: "🍇" },
  { id: 7, icono: "🍉" },
  { id: 8, icono: "🍉" },
];

// 2. EL ALGORITMO SHUFFLE (Para mezclar las cartas al azar)
// Este es un truco matemático hermoso para mezclar Arrays en JS
cartas.sort(() => 0.5 - Math.random());

// 3. ATRAPAMOS EL TABLERO DEL HTML
const tablero = document.querySelector("#tablero");
let cartasElegidas = [];

let juegoBloqueado = false;


const div = document.createElement("div");
const texto = document.createElement("p");
const botonReinicio = document.createElement("button");
botonReinicio.textContent = "Reiniciar juego";
div.appendChild(texto);
div.appendChild(botonReinicio);
document.querySelector(".contenedor").appendChild(div);
div.classList.add("contenedor-resultado");
botonReinicio.classList.add("btn-reinicio");
botonReinicio.addEventListener("click", reiniciarJuego);

// 4. LA FÁBRICA (Dibujar las cartas en el DOM)
function crearTablero() { 
  // Usamos un loop clásico para recorrer el array mezclado 
  cartas.forEach((cartaData, index) => { 
    // Creamos un <div> en el aire (RAM) 
    const carta = document.createElement("div");
    carta.classList.add("carta"); 
    // Le guardamos el índice y el ícono en secreto (Data Attributes) 
    carta.dataset.id = index;
    carta.dataset.icono = cartaData.icono;
    // Le agregamos el evento CLICK 
    carta.addEventListener("click", voltearCarta);
    // Lo inyectamos en el HTML real
      tablero.appendChild(carta);
  }); 
}


// 5. LA LÓGICA DE JUEGO
function voltearCarta(evento) {
  // evento.target es literalmente el <div> exacto que el usuario tocó
  const cartaClickeada = evento.target;
  if (juegoBloqueado) return;
  
  //agregamos un if que identifique si la carta ya tiene la clase volteada
  //para evitar doble clicks y otros bugs
  if (cartaClickeada.classList.contains("volteada")){
    return;
  }

  // Ahora le pedimos los datos a esa carta específica
  let cartaId = cartaClickeada.dataset.id;
  let icono = cartaClickeada.dataset.icono;


  // Mostramos el emoji y le agregamos la clase
  cartaClickeada.textContent = icono;
  cartaClickeada.classList.add("volteada");

  // Guardamos la carta en nuestro array temporal
  cartasElegidas.push({
    id: cartaId,
    elemento: cartaClickeada,
    icono: icono,
  });

  // Si ya tocó 2 cartas, verificamos si son iguales
  if (cartasElegidas.length === 2) {
    juegoBloqueado = true;
    setTimeout(verificarPareja, 500);
  }
}

function verificarPareja() {
  const carta1 = cartasElegidas[0];
  const carta2 = cartasElegidas[1];

  // Condición de victoria de ese turno
  if (carta1.icono === carta2.icono) {
    // Son iguales: las dejamos destapadas o las ponemos en verde
    carta1.elemento.classList.add("resuelta");
    carta2.elemento.classList.add("resuelta");
    texto.textContent = "Encontraste una pareja";

  } else {
    // Se equivocó: las volvemos a dar vuelta
    carta1.elemento.textContent = "";
    carta2.elemento.textContent = "";
    carta1.elemento.classList.remove("volteada");
    carta2.elemento.classList.remove("volteada");
    texto.textContent = "¡UPS! No son las mismas cartas";
  }

  const todasResueltas = document.querySelectorAll(".carta.resuelta").length === cartas.length;
  if (todasResueltas) {
    texto.textContent = "¡Ganaste! ¡Encontraste todos los pares!";
}

  cartasElegidas = [];
  juegoBloqueado = false;
}

function reiniciarJuego() {
  cartasElegidas = [];
  juegoBloqueado = false;
  texto.textContent = "";
  tablero.innerHTML = "";
  cartas.sort(() => 0.5 - Math.random());
  crearTablero();
}

// ¡ARRANCAMOS EL JUEGO!
crearTablero();
