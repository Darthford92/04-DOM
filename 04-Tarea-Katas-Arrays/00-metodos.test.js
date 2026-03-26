const {
  aplicarDescuento,
  filtrarDisponibles,
  calcularTotal,
  llamarSiguiente,
} = require("./00-metodos");

describe("Katas Semana 4: Arrays y Métodos", () => {
  test("aplicarDescuento() debe restar el 20% a cada precio", () => {
    expect(aplicarDescuento([100, 200, 50])).toEqual([80, 160, 40]);
  });

  test("filtrarDisponibles() debe retornar solo productos en stock", () => {
    const inventario = [
      { nombre: "Mouse", enStock: true },
      { nombre: "Teclado", enStock: false },
      { nombre: "Monitor", enStock: true },
    ];
    expect(filtrarDisponibles(inventario)).toEqual([
      { nombre: "Mouse", enStock: true },
      { nombre: "Monitor", enStock: true },
    ]);
  });

  test("calcularTotal() debe sumar todos los elementos", () => {
    expect(calcularTotal([10, 20, 30, 40])).toBe(100);
    expect(calcularTotal([])).toBe(0); // Prueba de fuego para el valor inicial
  });

  test("llamarSiguiente() debe sacar al primero (FIFO)", () => {
    const pacientes = ["Ana", "Juan", "Pedro"];
    expect(llamarSiguiente(pacientes)).toBe("Atendiendo a: Ana");
    expect(pacientes.length).toBe(2); // Verifica que realmente lo sacó del array original
  });
});
