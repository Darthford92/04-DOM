const {
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
} = require("./04-combinados");

describe("04 — Katas Combinadas (nivel Senior)", () => {
  test("KATA 1 — ticketCompra() suma solo los disponibles (precio * cantidad)", () => {
    expect(
      ticketCompra([
        { nombre: "TV", precio: 500, cantidad: 1, disponible: true },
        { nombre: "Cable", precio: 50, cantidad: 2, disponible: false },
        { nombre: "Mouse", precio: 100, cantidad: 3, disponible: true },
      ]),
    ).toBe(800); // 500 + 300
    expect(ticketCompra([])).toBe(0);
  });

  test("KATA 2 — resumenNotas() retorna aprobados, reprobados y promedio", () => {
    expect(
      resumenNotas([
        { nombre: "Ana", nota: 8 },
        { nombre: "Luis", nota: 4 },
        { nombre: "Zoe", nota: 6 },
      ]),
    ).toEqual({
      aprobados: ["Ana", "Zoe"],
      reprobados: ["Luis"],
      promedio: 6,
    });
  });

  test("KATA 3 — unicasEnMayusculas() retorna palabras únicas en mayúsculas", () => {
    expect(unicasEnMayusculas(["hola", "mundo", "hola", "js"])).toEqual([
      "HOLA",
      "MUNDO",
      "JS",
    ]);
    expect(unicasEnMayusculas([])).toEqual([]);
  });

  test("KATA 4 — top3MasCaros() retorna los 3 nombres más caros", () => {
    expect(
      top3MasCaros([
        { nombre: "Mouse", precio: 50 },
        { nombre: "TV", precio: 1200 },
        { nombre: "Laptop", precio: 2000 },
        { nombre: "Tablet", precio: 800 },
        { nombre: "Cable", precio: 10 },
      ]),
    ).toEqual(["Laptop", "TV", "Tablet"]);
  });

  test("KATA 5 — bonosPremium() aplica +10% al saldo de usuarios premium", () => {
    expect(
      bonosPremium([
        { nombre: "Ana", esPremium: true, saldo: 100 },
        { nombre: "Luis", esPremium: false, saldo: 200 },
        { nombre: "Zoe", esPremium: true, saldo: 50 },
      ]),
    ).toEqual([
      { nombre: "Ana", esPremium: true, saldo: 110 },
      { nombre: "Zoe", esPremium: true, saldo: 55 },
    ]);
    expect(bonosPremium([])).toEqual([]);
  });

  test("KATA 6 — ventasPorRegion() totaliza montos por región", () => {
    expect(
      ventasPorRegion([
        { producto: "TV", monto: 500, region: "norte" },
        { producto: "Radio", monto: 100, region: "norte" },
        { producto: "PC", monto: 800, region: "sur" },
      ]),
    ).toEqual({ norte: 600, sur: 800 });
    expect(ventasPorRegion([])).toEqual({});
  });

  test("KATA 7 — inventarioCritico() retorna nombres críticos en MAYUS y ordenados", () => {
    expect(
      inventarioCritico([
        { nombre: "tornillo", stock: 2, minimo: 10 },
        { nombre: "clavo", stock: 20, minimo: 5 },
        { nombre: "arandela", stock: 0, minimo: 8 },
      ]),
    ).toEqual(["ARANDELA", "TORNILLO"]);
    expect(inventarioCritico([])).toEqual([]);
  });

  test("KATA 8 — limpiarHistorial() limpia duplicados, vacíos y ordena", () => {
    expect(limpiarHistorial(["JS", "css", "JS", "", "html", "CSS"])).toEqual([
      "css",
      "html",
      "js",
    ]);
    expect(limpiarHistorial([])).toEqual([]);
  });

  test("KATA 9 — rankingJugadores() retorna top 3 activos formateados", () => {
    expect(
      rankingJugadores([
        { nombre: "Mario", puntos: 980, activo: true },
        { nombre: "Luigi", puntos: 750, activo: false },
        { nombre: "Peach", puntos: 860, activo: true },
        { nombre: "Toad", puntos: 400, activo: true },
        { nombre: "Bowser", puntos: 920, activo: true },
      ]),
    ).toEqual([
      "1. Mario — 980 pts",
      "2. Bowser — 920 pts",
      "3. Peach — 860 pts",
    ]);
  });

  test("KATA 10 — salarioPromedioTech() promedia activos del depto tecnología", () => {
    expect(
      salarioPromedioTech([
        {
          nombre: "Ana",
          departamento: "tecnología",
          salario: 1000,
          activo: true,
        },
        {
          nombre: "Luis",
          departamento: "tecnología",
          salario: 2000,
          activo: true,
        },
        {
          nombre: "Zoe",
          departamento: "marketing",
          salario: 1500,
          activo: true,
        },
        {
          nombre: "Rex",
          departamento: "tecnología",
          salario: 5000,
          activo: false,
        },
      ]),
    ).toBe(1500);
    expect(
      salarioPromedioTech([
        {
          nombre: "Rex",
          departamento: "tecnología",
          salario: 5000,
          activo: false,
        },
      ]),
    ).toBe(0);
    expect(salarioPromedioTech([])).toBe(0);
  });
});
