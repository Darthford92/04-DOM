const {
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
} = require("./01-map");

describe("01 — Katas de .map()", () => {
  test("KATA 1 — aplicarDescuento() aplica 20% de descuento a cada precio", () => {
    expect(aplicarDescuento([100, 200, 50])).toEqual([80, 160, 40]);
    expect(aplicarDescuento([0])).toEqual([0]);
    expect(aplicarDescuento([])).toEqual([]);
  });

  test("KATA 2 — doblar() multiplica cada número por 2", () => {
    expect(doblar([1, 2, 3])).toEqual([2, 4, 6]);
    expect(doblar([0, -5])).toEqual([0, -10]);
    expect(doblar([])).toEqual([]);
  });

  test("KATA 3 — nombresCompletos() une nombre y apellido con espacio", () => {
    expect(
      nombresCompletos([
        { nombre: "Ana", apellido: "Gil" },
        { nombre: "Luis", apellido: "López" },
      ]),
    ).toEqual(["Ana Gil", "Luis López"]);
    expect(nombresCompletos([])).toEqual([]);
  });

  test("KATA 4 — cuadrados() eleva cada número al cuadrado", () => {
    expect(cuadrados([2, 3, 4])).toEqual([4, 9, 16]);
    expect(cuadrados([0, 1])).toEqual([0, 1]);
    expect(cuadrados([])).toEqual([]);
  });

  test("KATA 5 — celsiusAFahrenheit() convierte correctamente", () => {
    expect(celsiusAFahrenheit([0, 100])).toEqual([32, 212]);
    expect(celsiusAFahrenheit([-40])).toEqual([-40]);
    expect(celsiusAFahrenheit([])).toEqual([]);
  });

  test("KATA 6 — agregarIVA() añade 21% y redondea a 2 decimales", () => {
    expect(agregarIVA([100, 50])).toEqual([121, 60.5]);
    expect(agregarIVA([10])).toEqual([12.1]);
    expect(agregarIVA([])).toEqual([]);
  });

  test("KATA 7 — envolverEnLi() envuelve cada string en <li>...</li>", () => {
    expect(envolverEnLi(["Pan", "Leche"])).toEqual([
      "<li>Pan</li>",
      "<li>Leche</li>",
    ]);
    expect(envolverEnLi([])).toEqual([]);
  });

  test("KATA 8 — extraerNombres() extrae solo la propiedad nombre", () => {
    const productos = [
      { nombre: "TV", precio: 500, stock: 3 },
      { nombre: "Radio", precio: 80, stock: 0 },
    ];
    expect(extraerNombres(productos)).toEqual(["TV", "Radio"]);
    expect(extraerNombres([])).toEqual([]);
  });

  test("KATA 9 — numerarLista() añade índice base 1 a cada elemento", () => {
    expect(numerarLista(["Manzana", "Pera", "Uva"])).toEqual([
      "1. Manzana",
      "2. Pera",
      "3. Uva",
    ]);
    expect(numerarLista([])).toEqual([]);
  });

  test("KATA 10 — normalizarUsuarios() pone nombre en mayus y añade esMayor", () => {
    expect(
      normalizarUsuarios([
        { nombre: "ana", edad: 20 },
        { nombre: "pedro", edad: 15 },
      ]),
    ).toEqual([
      { nombre: "ANA", edad: 20, esMayor: true },
      { nombre: "PEDRO", edad: 15, esMayor: false },
    ]);
    expect(normalizarUsuarios([])).toEqual([]);
  });
});
