# 04 — Tarea: Katas de Arrays

Colección de **40 katas** organizadas en 5 archivos para practicar los métodos de array más importantes de JavaScript: `.map()`, `.filter()`, `.reduce()` y combinaciones de todos ellos.

---

## Estructura del proyecto

```
04-Tarea-Katas-Arrays/
├── 00-metodos.js          ← 4 katas introductorias (repaso general)
├── 00-metodos.test.js
├── 01-map.js              ← 10 katas de .map()
├── 01-map.test.js
├── 02-filter.js           ← 10 katas de .filter()
├── 02-filter.test.js
├── 03-reduce.js           ← 10 katas de .reduce()
├── 03-reduce.test.js
├── 04-combinados.js       ← 10 katas combinadas (map + filter + reduce)
├── 04-combinados.test.js
└── package.json
```

---

## Requisitos previos

- Tener instalado **Node.js** (v18 o superior recomendado).
- Verificá tu versión en la terminal:

```bash
node -v
npm -v
```

---

## Instalación

Desde la carpeta de este proyecto, instalá las dependencias (Jest):

```bash
npm install
```

---

## Cómo correr los tests

### Modo watch (recomendado)

Corre todos los tests y se queda escuchando cambios. Cada vez que guardás un archivo, los tests se re-ejecutan automáticamente:

```bash
npm test
```

### Correr solo un archivo de tests

Si querés enfocarte en una sección específica:

```bash
npx jest 01-map
npx jest 02-filter
npx jest 03-reduce
npx jest 04-combinados
npx jest 00-metodos
```

---

## Cómo resolver las katas

1. Abrí el archivo `.js` correspondiente (por ej. `01-map.js`).
2. Cada función tiene un comentario con la consigna y un ejemplo de entrada/salida.
3. Escribí tu solución dentro de la función, reemplazando el comentario `// TU CÓDIGO AQUÍ 👇`.
4. **Guardá el archivo** — los tests se ejecutarán automáticamente si tenés el modo watch activo.
5. El test en verde ✅ significa que tu solución es correcta. El test en rojo ❌ muestra qué resultado esperaba y qué recibió.

> **Regla de oro:** está **prohibido usar bucles `for` / `while`**. Debés usar exclusivamente los métodos de array correspondientes a cada archivo.

---

## Descripción de cada archivo

### `00-metodos.js` — Repaso general (4 katas)

| Kata | Función                         | Descripción                                          |
| ---- | ------------------------------- | ---------------------------------------------------- |
| 1    | `aplicarDescuento(precios)`     | Aplica 20% de descuento a cada precio con `.map()`   |
| 2    | `filtrarDisponibles(productos)` | Filtra productos con `enStock: true` con `.filter()` |
| 3    | `calcularTotal(carrito)`        | Suma todos los precios del carrito con `.reduce()`   |
| 4    | `llamarSiguiente(salaDeEspera)` | Saca al primer paciente de la cola (FIFO)            |

---

### `01-map.js` — Transformaciones con `.map()` (10 katas)

| Kata | Función                       | Descripción                                               |
| ---- | ----------------------------- | --------------------------------------------------------- |
| 1    | `aplicarDescuento(precios)`   | 20% de descuento a cada precio                            |
| 2    | `doblar(numeros)`             | Multiplicar cada número x2                                |
| 3    | `nombresCompletos(personas)`  | Unir `nombre` + `apellido` en un string                   |
| 4    | `cuadrados(numeros)`          | Retornar el cuadrado de cada número                       |
| 5    | `celsiusAFahrenheit(celsius)` | Convertir °C a °F (F = C \* 9/5 + 32)                     |
| 6    | `agregarIVA(precios)`         | Sumar IVA del 21% a cada precio                           |
| 7    | `envolverEnLi(items)`         | Envolver cada string en una etiqueta `<li>`               |
| 8    | `extraerNombres(productos)`   | Extraer solo la propiedad `nombre`                        |
| 9    | `slugify(palabras)`           | Convertir strings a formato slug (minúsculas con guiones) |
| 10   | `marcarAprobados(alumnos)`    | Agregar `{ aprobado: true/false }` según nota >= 6        |

---

### `02-filter.js` — Filtrado con `.filter()` (10 katas)

| Kata | Función                              | Descripción                                  |
| ---- | ------------------------------------ | -------------------------------------------- |
| 1    | `soloAdultos(edades)`                | Retornar edades >= 18                        |
| 2    | `palabrasLargas(palabras)`           | Retornar strings con más de 5 caracteres     |
| 3    | `enStock(productos)`                 | Retornar solo los productos disponibles      |
| 4    | `sinNegativos(numeros)`              | Retornar solo los números >= 0               |
| 5    | `emailsValidos(emails)`              | Retornar solo los que contengan `@` y `.`    |
| 6    | `solosPares(numeros)`                | Retornar solo los números pares              |
| 7    | `usuariosActivos(usuarios)`          | Retornar usuarios con `activo: true`         |
| 8    | `eliminarFalsy(arr)`                 | Quitar valores falsy (null, 0, '', false...) |
| 9    | `mayoresDe(numeros, limite)`         | Retornar los que superen el límite dado      |
| 10   | `buscarPorCategoria(productos, cat)` | Filtrar por categoría específica             |

---

### `03-reduce.js` — Acumulación con `.reduce()` (10 katas)

| Kata | Función                          | Descripción                                         |
| ---- | -------------------------------- | --------------------------------------------------- |
| 1    | `sumarTotal(numeros)`            | Suma de todos los elementos                         |
| 2    | `multiplicarTodo(numeros)`       | Producto de todos los elementos                     |
| 3    | `encontrarMaximo(numeros)`       | Valor máximo sin usar `Math.max` con spread         |
| 4    | `contarOcurrencias(arr)`         | Objeto con el conteo de cada string                 |
| 5    | `aplanar(arrayDeArrays)`         | Convertir array de arrays en array plano            |
| 6    | `totalCarrito(items)`            | Suma `precio * cantidad` de cada item               |
| 7    | `agruparPorCategoria(productos)` | Agrupar nombres por categoría en un objeto          |
| 8    | `promedio(numeros)`              | Media aritmética redondeada a 2 decimales           |
| 9    | `construirObjeto(pares)`         | Convertir array de pares `[clave, valor]` en objeto |
| 10   | `balanceCuenta(movimientos)`     | Sumar ingresos y restar egresos                     |

---

### `04-combinados.js` — Map + Filter + Reduce encadenados (10 katas)

| Kata | Función                        | Descripción                                         |
| ---- | ------------------------------ | --------------------------------------------------- |
| 1    | `ticketCompra(productos)`      | Total de productos disponibles (precio \* cantidad) |
| 2    | `resumenNotas(alumnos)`        | Objeto con aprobados, reprobados y promedio         |
| 3    | `unicasEnMayusculas(palabras)` | Palabras únicas en MAYÚSCULAS sin repetidas         |
| 4    | `top3MasCaros(productos)`      | Nombres de los 3 productos más caros                |
| 5    | `bonosPremium(usuarios)`       | Usuarios premium con saldo \* 1.1                   |
| 6    | `ventasPorRegion(ventas)`      | Total de ventas agrupado por región                 |
| 7    | `inventarioCritico(productos)` | Nombres en MAYÚSCULAS con stock bajo el mínimo      |
| 8    | `reporteEdades(personas)`      | Reporte con conteo por rangos de edad               |
| 9    | `rankingVendedores(ventas)`    | Vendedores ordenados por total vendido              |
| 10   | `facturaDetallada(items)`      | Factura con subtotales, IVA y total general         |

---

## Ejemplo de flujo de trabajo

```bash
# 1. Instalá dependencias (solo la primera vez)
npm install

# 2. Arrancá los tests en modo watch
npm test

# 3. Abrí 01-map.js y completá la primera función
# 4. Guardá el archivo
# 5. Mirá el resultado en la terminal — ¿verde o rojo?
# 6. Seguí con la siguiente kata
```

---

## Tips

- Leé el **comentario de consigna y el ejemplo** antes de escribir código.
- En las katas de `04-combinados.js` podés **encadenar** los métodos: `.filter(...).map(...).reduce(...)`.
- Si un test falla, Jest te muestra exactamente qué valor esperaba (`Expected`) y qué recibió (`Received`).
- Usá `console.log()` libremente para depurar — no afecta los tests.
