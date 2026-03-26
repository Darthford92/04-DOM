const {
  soloAdultos,
  palabrasLargas,
  enStock,
  sinNegativos,
  emailsValidos,
  solosPares,
  usuariosActivos,
  eliminarFalsy,
  filtroPrecio,
  sinDuplicados,
} = require("./02-filter");

describe("02 — Katas de .filter()", () => {
  test("KATA 1 — soloAdultos() retorna solo edades >= 18", () => {
    expect(soloAdultos([15, 22, 12, 30])).toEqual([22, 30]);
    expect(soloAdultos([18])).toEqual([18]);
    expect(soloAdultos([10, 12])).toEqual([]);
    expect(soloAdultos([])).toEqual([]);
  });

  test("KATA 2 — palabrasLargas() retorna strings con más de 5 caracteres", () => {
    expect(palabrasLargas(["hola", "javascript", "css"])).toEqual([
      "javascript",
    ]);
    expect(palabrasLargas(["uno", "dos"])).toEqual([]);
    expect(palabrasLargas([])).toEqual([]);
  });

  test("KATA 3 — enStock() retorna solo los productos con enStock: true", () => {
    const input = [
      { nombre: "TV", enStock: true },
      { nombre: "Radio", enStock: false },
      { nombre: "PC", enStock: true },
    ];
    expect(enStock(input)).toEqual([
      { nombre: "TV", enStock: true },
      { nombre: "PC", enStock: true },
    ]);
    expect(enStock([])).toEqual([]);
  });

  test("KATA 4 — sinNegativos() retorna solo números >= 0", () => {
    expect(sinNegativos([-3, 0, 5, -1, 8])).toEqual([0, 5, 8]);
    expect(sinNegativos([-1, -2])).toEqual([]);
    expect(sinNegativos([])).toEqual([]);
  });

  test("KATA 5 — emailsValidos() retorna solo strings con '@' y '.'", () => {
    expect(
      emailsValidos(["test@mail.com", "noesmail", "otro@x.co", "roto@"]),
    ).toEqual(["test@mail.com", "otro@x.co"]);
    expect(emailsValidos([])).toEqual([]);
  });

  test("KATA 6 — solosPares() retorna solo números pares", () => {
    expect(solosPares([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
    expect(solosPares([1, 3, 5])).toEqual([]);
    expect(solosPares([])).toEqual([]);
  });

  test("KATA 7 — usuariosActivos() retorna solo usuarios con activo: true", () => {
    const input = [
      { nombre: "Ana", activo: true },
      { nombre: "Luis", activo: false },
      { nombre: "Zoe", activo: true },
    ];
    expect(usuariosActivos(input)).toEqual([
      { nombre: "Ana", activo: true },
      { nombre: "Zoe", activo: true },
    ]);
    expect(usuariosActivos([])).toEqual([]);
  });

  test("KATA 8 — eliminarFalsy() descarta valores falsy", () => {
    expect(
      eliminarFalsy([0, "hola", null, 42, false, "js", undefined, NaN]),
    ).toEqual(["hola", 42, "js"]);
    expect(eliminarFalsy([])).toEqual([]);
  });

  test("KATA 9 — filtroPrecio() retorna precios dentro del rango (inclusive)", () => {
    expect(filtroPrecio([50, 100, 200, 300], { min: 80, max: 250 })).toEqual([
      100, 200,
    ]);
    expect(filtroPrecio([50, 100], { min: 200, max: 300 })).toEqual([]);
    expect(filtroPrecio([], { min: 0, max: 100 })).toEqual([]);
  });

  test("KATA 10 — sinDuplicados() elimina valores repetidos manteniendo orden", () => {
    expect(sinDuplicados([1, 2, 2, 3, 1, 4])).toEqual([1, 2, 3, 4]);
    expect(sinDuplicados([5, 5, 5])).toEqual([5]);
    expect(sinDuplicados([])).toEqual([]);
  });
});
