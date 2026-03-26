const {
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
} = require("./03-reduce");

describe("03 — Katas de .reduce()", () => {
  test("KATA 1 — sumarTotal() suma todos los números", () => {
    expect(sumarTotal([10, 20, 30])).toBe(60);
    expect(sumarTotal([0])).toBe(0);
    expect(sumarTotal([])).toBe(0);
  });

  test("KATA 2 — multiplicarTodo() multiplica todos entre sí", () => {
    expect(multiplicarTodo([2, 3, 4])).toBe(24);
    expect(multiplicarTodo([1, 1, 1])).toBe(1);
    expect(multiplicarTodo([5])).toBe(5);
  });

  test("KATA 3 — encontrarMaximo() retorna el valor máximo", () => {
    expect(encontrarMaximo([3, 7, 1, 9, 4])).toBe(9);
    expect(encontrarMaximo([-5, -1, -9])).toBe(-1);
    expect(encontrarMaximo([42])).toBe(42);
  });

  test("KATA 4 — contarOcurrencias() cuenta cuántas veces aparece cada string", () => {
    expect(contarOcurrencias(["a", "b", "a", "c", "b", "a"])).toEqual({
      a: 3,
      b: 2,
      c: 1,
    });
    expect(contarOcurrencias([])).toEqual({});
  });

  test("KATA 5 — aplanar() convierte array de arrays en array plano", () => {
    expect(aplanar([[1, 2], [3, 4], [5]])).toEqual([1, 2, 3, 4, 5]);
    expect(aplanar([[1], [2], [3]])).toEqual([1, 2, 3]);
    expect(aplanar([])).toEqual([]);
  });

  test("KATA 6 — totalCarrito() calcula precio * cantidad de cada item", () => {
    expect(
      totalCarrito([
        { nombre: "TV", precio: 500, cantidad: 2 },
        { nombre: "Cable", precio: 50, cantidad: 3 },
      ]),
    ).toBe(1150);
    expect(totalCarrito([])).toBe(0);
  });

  test("KATA 7 — agruparPorCategoria() agrupa nombres por categoría", () => {
    expect(
      agruparPorCategoria([
        { nombre: "Manzana", categoria: "fruta" },
        { nombre: "TV", categoria: "electro" },
        { nombre: "Pera", categoria: "fruta" },
      ]),
    ).toEqual({
      fruta: ["Manzana", "Pera"],
      electro: ["TV"],
    });
    expect(agruparPorCategoria([])).toEqual({});
  });

  test("KATA 8 — promedio() calcula la media redondeada a 2 decimales", () => {
    expect(promedio([10, 20, 30])).toBe(20);
    expect(promedio([1, 2, 3, 4])).toBe(2.5);
    expect(promedio([7])).toBe(7);
  });

  test("KATA 9 — construirOracion() une palabras con espacio sin .join()", () => {
    expect(construirOracion(["Hola", "Mundo", "JS"])).toBe("Hola Mundo JS");
    expect(construirOracion(["Solo"])).toBe("Solo");
    expect(construirOracion([])).toBe("");
  });

  test("KATA 10 — calcularBalance() suma ingresos y resta egresos", () => {
    expect(
      calcularBalance([
        { tipo: "ingreso", monto: 1000 },
        { tipo: "egreso", monto: 300 },
        { tipo: "ingreso", monto: 500 },
        { tipo: "egreso", monto: 200 },
      ]),
    ).toBe(1000);
    expect(calcularBalance([])).toBe(0);
  });
});
