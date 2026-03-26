const baseDeDatos = [
  { id: 1, nombre: "Laptop Gamer", precio: 1500, oferta: false, color: "red" },
  { id: 2, nombre: "Mouse RGB", precio: 50, oferta: true, color: "blue" },
  {
    id: 3,
    nombre: "Teclado Mecánico",
    precio: 120,
    oferta: false,
    color: "black",
  },
  { id: 4, nombre: "Auriculares", precio: 80, oferta: true, color: "white" },
  { id: 5, nombre: "Monitor 144hz", precio: 300, oferta: false, color: "gray" },
];

// const contenedorTienda = document.getElementById("tienda");
const contenedorTienda = document.querySelector("#tienda");
// Bonton para filtrar ofertas
const botonOfertas = document.querySelector("#btn-ofertas");
const botonVerTodos = document.querySelector("#btn-todos");

function renderizarProductos(productos) {
  const htmlGenerado = productos.map((producto) => {
    return `
      <div class="producto" style="border: 1px solid ${producto.color}; padding: 10px; margin: 5px;">
        <h3>${producto.nombre}</h3>
        <p>Precio: $${producto.precio}</p>
        <small>${producto.oferta ? "🔥 ¡EN OFERTA!" : ""}</small>
      </div>
    `;
  });

  // 4. Inyectamos todo el array de golpe en el DOM uniéndolo con .join('')
  contenedorTienda.innerHTML = htmlGenerado.join("");
}

renderizarProductos(baseDeDatos);

botonOfertas.addEventListener("click", () => {
  const productosEnOferta = baseDeDatos.filter(
    (producto) => producto.oferta === true,
  );

  // prodcutosEnOferta es un nuevo array que solo contiene los productos que están en oferta
  renderizarProductos(productosEnOferta);
});

botonVerTodos.addEventListener("click", () => {
  renderizarProductos(baseDeDatos);
});
