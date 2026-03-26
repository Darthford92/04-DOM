// ============================================================
//  Helpers de visualización
// ============================================================

function esc(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function fmtVal(v) {
  if (Array.isArray(v)) return "[" + v.map(fmtVal).join(", ") + "]";
  if (v === undefined) return "undefined";
  if (v === null) return "null";
  if (typeof v === "string") return `"${v}"`;
  if (typeof v === "object") return JSON.stringify(v);
  return String(v);
}

// Renderiza un array como cajas visuales
// options: { added:[], removed:[], highlight:[], found:[] }  (índices)
function arrViz(arr, opts = {}) {
  if (arr.length === 0)
    return `<div class="vis-array empty">(array vacío [ ])</div>`;
  const { added = [], removed = [], highlight = [], found = [] } = opts;
  const items = arr.map((item, i) => {
    let cls = "vis-item";
    if (added.includes(i)) cls += " added";
    if (removed.includes(i)) cls += " removed";
    if (highlight.includes(i)) cls += " highlight";
    if (found.includes(i)) cls += " found";
    return `<span class="${cls}">${esc(item)}</span>`;
  });
  return `<div class="vis-array">${items.join("")}</div>`;
}

// Renderiza array con índice debajo de cada ítem
function arrVizIdx(arr, opts = {}) {
  if (arr.length === 0)
    return `<div class="vis-array empty">(array vacío [ ])</div>`;
  const { highlight = [], found = [] } = opts;
  const items = arr.map((item, i) => {
    let cls = "vis-item";
    if (highlight.includes(i)) cls += " highlight";
    if (found.includes(i)) cls += " found";
    return `<div class="vis-item-wrap">
      <span class="${cls}">${esc(item)}</span>
      <span class="vis-idx">[${i}]</span>
    </div>`;
  });
  return `<div class="vis-array">${items.join("")}</div>`;
}

// Renderiza un objeto como tabla clave → valor
function objViz(obj, hlKeys = []) {
  const rows = Object.entries(obj)
    .map(
      ([k, v]) =>
        `<tr class="${hlKeys.includes(k) ? "hl" : ""}">
      <td class="key">${k}</td>
      <td class="val">${esc(fmtVal(v))}</td>
    </tr>`,
    )
    .join("");
  return `<table class="vis-obj">
    <thead><tr><th>Clave</th><th>Valor</th></tr></thead>
    <tbody>${rows}</tbody>
  </table>`;
}

// Sección con etiqueta
function step(label, html) {
  return `<div class="step"><span class="step-label">${label}</span>${html}</div>`;
}

// Flecha con texto
function arrow(txt) {
  return `<div class="arrow">▼ ${txt}</div>`;
}

// Valor de retorno
function ret(val, label = "↩ Retorna") {
  return `<div class="ret"><span class="ret-label">${label}:</span><code>${esc(fmtVal(val))}</code></div>`;
}

// ============================================================
//  DEMOS — ARRAYS
// ============================================================

const DEMOS_ARRAYS = [
  /* ---- push() ---- */
  {
    emoji: "📦",
    titulo: ".push()",
    desc: "Añade uno o más elementos al <strong>final</strong> del array. Muta el original. Retorna la nueva longitud.",
    codigo: `let frutas = ['🍎', '🍊', '🍋'];
let len = frutas.push('🍇');
// frutas → ['🍎', '🍊', '🍋', '🍇']
// len    → 4`,
    run() {
      let frutas = ["🍎", "🍊", "🍋"];
      const antes = [...frutas];
      const len = frutas.push("🍇");
      return `
        ${step("Antes", arrViz(antes))}
        ${arrow("push('🍇')")}
        ${step("Después", arrViz(frutas, { added: [3] }))}
        ${ret(len, "↩ Nueva longitud")}
      `;
    },
  },

  /* ---- pop() ---- */
  {
    emoji: "🫳",
    titulo: ".pop()",
    desc: "Elimina y retorna el <strong>último</strong> elemento. Muta el original.",
    codigo: `let frutas = ['🍎', '🍊', '🍋', '🍇'];
let eliminado = frutas.pop();
// eliminado → '🍇'
// frutas    → ['🍎', '🍊', '🍋']`,
    run() {
      let frutas = ["🍎", "🍊", "🍋", "🍇"];
      const antes = [...frutas];
      const eliminado = frutas.pop();
      return `
        ${step("Antes", arrViz(antes, { highlight: [3] }))}
        ${arrow("pop() → saca el último")}
        ${step("Después", arrViz(frutas))}
        ${ret(eliminado, "↩ Elemento eliminado")}
      `;
    },
  },

  /* ---- unshift() ---- */
  {
    emoji: "⬆️",
    titulo: ".unshift()",
    desc: "Añade elementos al <strong>inicio</strong> del array. Muta el original. Retorna la nueva longitud.",
    codigo: `let fila = ['🧍 Ana', '🧍 Juan'];
fila.unshift('🧍 Neri');
// → ['🧍 Neri', '🧍 Ana', '🧍 Juan']`,
    run() {
      let fila = ["🧍 Ana", "🧍 Juan"];
      const antes = [...fila];
      fila.unshift("🧍 Neri");
      return `
        ${step("Antes", arrViz(antes))}
        ${arrow("unshift('🧍 Neri') → añade al inicio")}
        ${step("Después", arrViz(fila, { added: [0] }))}
      `;
    },
  },

  /* ---- shift() ---- */
  {
    emoji: "⬇️",
    titulo: ".shift()",
    desc: "Elimina y retorna el <strong>primer</strong> elemento. Muta el original. Simula una <strong>cola FIFO</strong>.",
    codigo: `let fila = ['🧍 Neri', '🧍 Ana', '🧍 Juan'];
let atendido = fila.shift();
// atendido → '🧍 Neri'
// fila     → ['🧍 Ana', '🧍 Juan']`,
    run() {
      let fila = ["🧍 Neri", "🧍 Ana", "🧍 Juan"];
      const antes = [...fila];
      const atendido = fila.shift();
      return `
        ${step("Cola original", arrViz(antes, { highlight: [0] }))}
        ${arrow("shift() → atiende al primero (FIFO)")}
        ${step("Cola restante", arrViz(fila))}
        ${ret(atendido, "↩ Elemento atendido")}
      `;
    },
  },

  /* ---- map() ---- */
  {
    emoji: "🏭",
    titulo: ".map()",
    desc: "Transforma <strong>cada</strong> elemento y retorna un array <strong>nuevo</strong> del mismo tamaño. No muta el original.",
    codigo: `let papas = ['🥔', '🥔', '🥔'];
let fritas = papas.map(papa => '🍟');
// → ['🍟', '🍟', '🍟']

let precios = [100, 200, 300];
let conIva = precios.map(p => p * 1.21);
// → [121, 242, 363]`,
    run() {
      const papas = ["🥔", "🥔", "🥔"];
      const fritas = papas.map(() => "🍟");
      const pairs = papas
        .map(
          (p, i) =>
            `<div class="map-pair">
          <span class="vis-item">${p}</span>
          <span class="map-arrow">↓</span>
          <span class="vis-item added">${fritas[i]}</span>
        </div>`,
        )
        .join("");
      return `
        <div class="step">
          <span class="step-label">Cada 🥔 se transforma en 🍟</span>
          <div class="map-flow">${pairs}</div>
        </div>
        ${ret(fritas)}
      `;
    },
  },

  /* ---- filter() ---- */
  {
    emoji: "🚫",
    titulo: ".filter()",
    desc: "Retorna un array <strong>nuevo</strong> solo con los elementos que cumplen la condición. No muta el original.",
    codigo: `let edades = [15, 22, 12, 30, 18];
let adultos = edades.filter(e => e >= 18);
// → [22, 30, 18]`,
    run() {
      const edades = [15, 22, 12, 30, 18];
      const adultos = edades.filter((e) => e >= 18);
      const pairs = edades
        .map((e) => {
          const pasa = e >= 18;
          return `<div class="filter-pair">
          <span class="vis-item ${pasa ? "added" : "removed"}">${e}</span>
          <span>${pasa ? "✅" : "❌"}</span>
        </div>`;
        })
        .join("");
      return `
        <div class="step">
          <span class="step-label">Condición: edad >= 18</span>
          <div class="filter-flow">${pairs}</div>
        </div>
        ${arrow("Solo pasan los ✅")}
        ${step("Resultado", arrViz(adultos.map(String), { added: adultos.map((_, i) => i) }))}
        ${ret(adultos)}
      `;
    },
  },

  /* ---- reduce() ---- */
  {
    emoji: "🧮",
    titulo: ".reduce()",
    desc: "Acumula todos los elementos hasta devolver <strong>un solo valor</strong>. Ideal para totales de carrito.",
    codigo: `let carrito = [100, 250, 50, 300];
let total = carrito.reduce((acc, item) => acc + item, 0);
// → 700`,
    run() {
      const carrito = [100, 250, 50, 300];
      let acc = 0;
      const pasos = carrito
        .map((item) => {
          const prev = acc;
          acc += item;
          return `<div class="reduce-step">
          <span class="r-acc">acc(${prev})</span>
          <span class="r-eq"> + </span>
          <span class="r-cur">${item}</span>
          <span class="r-eq"> = </span>
          <span class="r-res">${acc}</span>
        </div>`;
        })
        .join("");
      return `
        ${step("Array", arrViz(carrito.map(String)))}
        <div class="reduce-steps">
          <span class="step-label">Pasos del acumulador (empieza en 0):</span>
          ${pasos}
        </div>
        ${ret(acc)}
      `;
    },
  },

  /* ---- find() ---- */
  {
    emoji: "🔍",
    titulo: ".find()",
    desc: "Retorna el <strong>primer elemento</strong> que cumple la condición. Si no hay ninguno, retorna <code>undefined</code>.",
    codigo: `let nums = [4, 7, 2, 9, 1];
let primero = nums.find(n => n > 5);
// → 7  (el primero que supera 5)`,
    run() {
      const nums = [4, 7, 2, 9, 1];
      const r = nums.find((n) => n > 5);
      const rIdx = nums.indexOf(r);
      let parado = false;
      const items = nums
        .map((n, i) => {
          if (parado)
            return `<span class="vis-item" style="opacity:.35">${n}</span>`;
          if (n === r) {
            parado = true;
            return `<span class="vis-item found">${n} 🎯</span>`;
          }
          return `<span class="vis-item removed">${n}</span>`;
        })
        .join("");
      return `
        <div class="step">
          <span class="step-label">Busca: n > 5 — para al encontrar el primero</span>
          <div class="vis-array">${items}</div>
        </div>
        ${ret(r, "↩ Primer elemento encontrado")}
      `;
    },
  },

  /* ---- findIndex() ---- */
  {
    emoji: "📍",
    titulo: ".findIndex()",
    desc: "Como <code>find()</code> pero retorna el <strong>índice</strong> del elemento encontrado. Retorna <code>-1</code> si no existe.",
    codigo: `let nums = [4, 7, 2, 9, 1];
let idx = nums.findIndex(n => n > 5);
// → 1  (índice de 7)`,
    run() {
      const nums = [4, 7, 2, 9, 1];
      const idx = nums.findIndex((n) => n > 5);
      return `
        ${step("Array con índices", arrVizIdx(nums.map(String), { found: [idx] }))}
        ${ret(idx, "↩ Índice del primer n > 5")}
      `;
    },
  },

  /* ---- includes() ---- */
  {
    emoji: "🎫",
    titulo: ".includes()",
    desc: "Retorna <code>true</code> si el array contiene el valor exacto, <code>false</code> si no. Rápido y simple.",
    codigo: `let roles = ['admin', 'editor', 'viewer'];
roles.includes('admin');  // → true
roles.includes('guest');  // → false`,
    run() {
      const roles = ["admin", "editor", "viewer"];
      return `
        ${step("Array", arrViz(roles, { highlight: [0] }))}
        <div style="display:flex;flex-direction:column;gap:.5rem">
          ${ret(roles.includes("admin"), "includes('admin')")}
          ${ret(roles.includes("guest"), "includes('guest')")}
        </div>
      `;
    },
  },

  /* ---- some() ---- */
  {
    emoji: "🤔",
    titulo: ".some()",
    desc: "Retorna <code>true</code> si <strong>al menos uno</strong> de los elementos cumple la condición.",
    codigo: `let edades = [15, 12, 9, 22];
edades.some(e => e >= 18);
// → true  (22 cumple)`,
    run() {
      const edades = [15, 12, 9, 22];
      const pairs = edades
        .map((e) => {
          const ok = e >= 18;
          return `<div class="filter-pair">
          <span class="vis-item ${ok ? "added" : ""}">${e}</span>
          <span>${ok ? "✅" : ""}</span>
        </div>`;
        })
        .join("");
      return `
        <div class="step">
          <span class="step-label">Condición: e >= 18</span>
          <div class="filter-flow">${pairs}</div>
        </div>
        ${ret(true, "↩ some() — ¿alguno cumple?")}
      `;
    },
  },

  /* ---- every() ---- */
  {
    emoji: "✅",
    titulo: ".every()",
    desc: "Retorna <code>true</code> solo si <strong>todos</strong> los elementos cumplen la condición.",
    codigo: `[20, 25, 30, 18].every(e => e >= 18); // → true
[20, 15, 30].every(e => e >= 18);     // → false`,
    run() {
      const a1 = [20, 25, 30, 18];
      const a2 = [20, 15, 30];
      function vizEvery(arr) {
        const pairs = arr
          .map(
            (e) => `
          <div class="filter-pair">
            <span class="vis-item ${e >= 18 ? "added" : "removed"}">${e}</span>
            <span>${e >= 18 ? "✅" : "❌"}</span>
          </div>`,
          )
          .join("");
        return `<div class="filter-flow">${pairs}</div>`;
      }
      return `
        ${step("Array 1", vizEvery(a1))}
        ${ret(
          a1.every((e) => e >= 18),
          "every(e >= 18) en array 1",
        )}
        ${step("Array 2", vizEvery(a2))}
        ${ret(
          a2.every((e) => e >= 18),
          "every(e >= 18) en array 2",
        )}
      `;
    },
  },

  /* ---- slice() ---- */
  {
    emoji: "✂️",
    titulo: ".slice()",
    desc: "Extrae una porción del array en un array <strong>nuevo</strong>. <strong>No muta</strong> el original. slice(inicio, fin) — fin no incluido.",
    codigo: `let arr = ['A', 'B', 'C', 'D', 'E'];
let parte = arr.slice(1, 4);
// → ['B', 'C', 'D']  (índices 1, 2, 3)`,
    run() {
      const arr = ["A", "B", "C", "D", "E"];
      const parte = arr.slice(1, 4);
      return `
        ${step("Original (índices resaltados)", arrVizIdx(arr, { highlight: [1, 2, 3] }))}
        ${arrow("slice(1, 4) → copia índices 1 a 3")}
        ${step("Nueva porción", arrViz(parte, { added: [0, 1, 2] }))}
        ${ret(parte)}
      `;
    },
  },

  /* ---- sort() ---- */
  {
    emoji: "🔀",
    titulo: ".sort()",
    desc: "Ordena el array <strong>mutando</strong> el original. Para números siempre usar función comparadora: <code>(a, b) => a - b</code>.",
    codigo: `let nums = [40, 1, 5, 200];
nums.sort((a, b) => a - b);  // ascendente
// → [1, 5, 40, 200]

nums.sort((a, b) => b - a);  // descendente
// → [200, 40, 5, 1]`,
    run() {
      const asc = [40, 1, 5, 200].sort((a, b) => a - b);
      const desc = [40, 1, 5, 200].sort((a, b) => b - a);
      return `
        ${step("Antes (desordenado)", arrViz(["40", "1", "5", "200"]))}
        ${arrow("sort((a, b) => a - b)")}
        ${step("Ascendente", arrViz(asc.map(String), { added: [0, 1, 2, 3] }))}
        ${step("Descendente", arrViz(desc.map(String), { highlight: [0, 1, 2, 3] }))}
      `;
    },
  },

  /* ---- join() ---- */
  {
    emoji: "🔗",
    titulo: ".join()",
    desc: "Une todos los elementos en un <strong>string</strong>, separados por el separador que elijas.",
    codigo: `let palabras = ['Hola', 'Mundo', 'JS'];
palabras.join(' ');    // → "Hola Mundo JS"
palabras.join(' - ');  // → "Hola - Mundo - JS"
palabras.join('');     // → "HolaMundoJS"`,
    run() {
      const palabras = ["Hola", "Mundo", "JS"];
      return `
        ${step("Array", arrViz(palabras))}
        <div style="display:flex;flex-direction:column;gap:.5rem">
          ${ret(palabras.join(" "), "join(' ')")}
          ${ret(palabras.join(" - "), "join(' - ')")}
          ${ret(palabras.join(""), "join('')")}
        </div>
      `;
    },
  },

  /* ---- forEach() ---- */
  {
    emoji: "🔁",
    titulo: ".forEach()",
    desc: "Ejecuta una función por cada elemento. <strong>No retorna nada</strong> (undefined). Úsalo solo para efectos secundarios.",
    codigo: `let frutas = ['🍎', '🍊', '🍋'];
frutas.forEach((fruta, i) => {
  console.log(i, fruta);
});
// 0 🍎
// 1 🍊
// 2 🍋`,
    run() {
      const frutas = ["🍎", "🍊", "🍋"];
      const logs = frutas
        .map(
          (f, i) =>
            `<div class="reduce-step">
          <span class="r-acc">[${i}]</span>
          <span class="r-eq">→</span>
          <span class="r-cur" style="font-size:1.1rem">${f}</span>
        </div>`,
        )
        .join("");
      return `
        ${step("Array", arrViz(frutas))}
        <div class="reduce-steps">
          <span class="step-label">Ejecución por cada elemento:</span>
          ${logs}
        </div>
        ${ret(undefined, "↩ Retorna (siempre)")}
      `;
    },
  },
];

// ============================================================
//  DEMOS — OBJETOS
// ============================================================

const DEMOS_OBJETOS = [
  /* ---- Crear objeto ---- */
  {
    emoji: "🃏",
    titulo: "Crear un Objeto",
    desc: 'Un objeto agrupa datos relacionados como pares <strong>clave: valor</strong>. Es la "ficha técnica" de cualquier cosa.',
    codigo: `let jugador = {
  nombre:    'Mario',
  profesion: 'Plomero',
  vidas:     3,
  item:      '🍄'
};`,
    run() {
      const jugador = {
        nombre: "Mario",
        profesion: "Plomero",
        vidas: 3,
        item: "🍄",
      };
      return step("Objeto creado", objViz(jugador));
    },
  },

  /* ---- Acceder ---- */
  {
    emoji: "👁️",
    titulo: "Acceder a Propiedades",
    desc: "Dos formas: <strong>notación de punto</strong> (la más usada) y <strong>notación de corchetes</strong> (para claves dinámicas o con espacios).",
    codigo: `jugador.nombre       // → 'Mario'
jugador['vidas']     // → 3

const key = 'item';
jugador[key]         // → '🍄'`,
    run() {
      const jugador = {
        nombre: "Mario",
        profesion: "Plomero",
        vidas: 3,
        item: "🍄",
      };
      return `
        ${step("Objeto", objViz(jugador, ["nombre", "vidas", "item"]))}
        <div style="display:flex;flex-direction:column;gap:.5rem">
          ${ret(jugador.nombre, "jugador.nombre")}
          ${ret(jugador["vidas"], "jugador['vidas']")}
          ${ret(jugador.item, "jugador.item")}
        </div>
      `;
    },
  },

  /* ---- Modificar / Añadir ---- */
  {
    emoji: "✏️",
    titulo: "Modificar y Añadir Props",
    desc: "Podés cambiar el valor de una clave existente o <strong>añadir claves nuevas</strong> directamente sobre el objeto.",
    codigo: `let jugador = { nombre: 'Mario', vidas: 3 };

jugador.vidas   = 2;    // modifica
jugador.monedas = 50;   // añade nueva clave`,
    run() {
      const antes = { nombre: "Mario", vidas: 3 };
      const despues = { nombre: "Mario", vidas: 2, monedas: 50 };
      return `
        ${step("Antes", objViz(antes))}
        ${arrow("jugador.vidas = 2 | jugador.monedas = 50")}
        ${step("Después", objViz(despues, ["vidas", "monedas"]))}
      `;
    },
  },

  /* ---- delete ---- */
  {
    emoji: "🗑️",
    titulo: "Eliminar Propiedad",
    desc: "El operador <code>delete</code> elimina una clave del objeto definitivamente.",
    codigo: `let jugador = { nombre: 'Mario', nivel: 5, debug: true };
delete jugador.debug;
// → { nombre: 'Mario', nivel: 5 }`,
    run() {
      const antes = { nombre: "Mario", nivel: 5, debug: true };
      const despues = { nombre: "Mario", nivel: 5 };
      return `
        ${step("Antes", objViz(antes, ["debug"]))}
        ${arrow("delete jugador.debug")}
        ${step("Después", objViz(despues))}
      `;
    },
  },

  /* ---- Object.keys() ---- */
  {
    emoji: "🗝️",
    titulo: "Object.keys()",
    desc: "Retorna un array con todas las <strong>claves</strong> del objeto.",
    codigo: `let jugador = { nombre: 'Mario', vidas: 3, item: '🍄' };
Object.keys(jugador);
// → ['nombre', 'vidas', 'item']`,
    run() {
      const jugador = { nombre: "Mario", vidas: 3, item: "🍄" };
      const r = Object.keys(jugador);
      return `
        ${step("Objeto", objViz(jugador))}
        ${arrow("Object.keys()")}
        ${step("Claves", arrViz(r, { added: r.map((_, i) => i) }))}
        ${ret(r)}
      `;
    },
  },

  /* ---- Object.values() ---- */
  {
    emoji: "💎",
    titulo: "Object.values()",
    desc: "Retorna un array con todos los <strong>valores</strong> del objeto, en el mismo orden que las claves.",
    codigo: `Object.values(jugador);
// → ['Mario', 3, '🍄']`,
    run() {
      const jugador = { nombre: "Mario", vidas: 3, item: "🍄" };
      const r = Object.values(jugador);
      return `
        ${step("Objeto", objViz(jugador))}
        ${arrow("Object.values()")}
        ${step("Valores", arrViz(r.map(String), { added: r.map((_, i) => i) }))}
      `;
    },
  },

  /* ---- Object.entries() ---- */
  {
    emoji: "📋",
    titulo: "Object.entries()",
    desc: "Retorna un array de pares <code>[clave, valor]</code>. Perfecto para iterar un objeto con <code>.map()</code>.",
    codigo: `Object.entries(jugador);
// → [['nombre','Mario'], ['vidas',3], ['item','🍄']]`,
    run() {
      const jugador = { nombre: "Mario", vidas: 3, item: "🍄" };
      const pairsHTML = Object.entries(jugador)
        .map(
          ([k, v]) =>
            `<div style="background:var(--surface2);border:1px solid var(--border);border-radius:8px;padding:.4rem .9rem;font-family:monospace;font-size:.83rem;display:flex;gap:.5rem;">
          <span style="color:var(--purple)">"${k}"</span>
          <span style="color:var(--muted)">:</span>
          <span style="color:var(--green)">${fmtVal(v)}</span>
        </div>`,
        )
        .join("");
      return `
        ${step("Objeto", objViz(jugador))}
        <div class="step">
          <span class="step-label">Object.entries() →</span>
          <div style="display:flex;flex-direction:column;gap:.4rem">${pairsHTML}</div>
        </div>
      `;
    },
  },

  /* ---- Spread ---- */
  {
    emoji: "🧬",
    titulo: "Spread  { ...obj }",
    desc: "Copia o <strong>combina</strong> objetos sin mutar el original. Muy usado en React, Redux y JS moderno.",
    codigo: `let base     = { hp: 100, ataque: 10 };
let guerrero = { ...base, clase: 'Guerrero', ataque: 25 };
// guerrero → { hp: 100, ataque: 25, clase: 'Guerrero' }
// base no se modifica`,
    run() {
      const base = { hp: 100, ataque: 10 };
      const gue = { ...base, clase: "Guerrero", ataque: 25 };
      return `
        ${step("Objeto base", objViz(base))}
        ${arrow('{ ...base, clase: "Guerrero", ataque: 25 }')}
        ${step("Objeto nuevo (base no fue modificado)", objViz(gue, ["clase", "ataque"]))}
      `;
    },
  },

  /* ---- Destructuring ---- */
  {
    emoji: "📦",
    titulo: "Destructuring",
    desc: "Extrae propiedades del objeto en variables individuales de forma limpia. Se puede renombrar y poner valores por defecto.",
    codigo: `let jugador = { nombre: 'Mario', vidas: 3, item: '🍄' };

const { nombre, vidas } = jugador;
// nombre → 'Mario'
// vidas  → 3

const { item: poder } = jugador; // renombrar
// poder → '🍄'`,
    run() {
      const jugador = { nombre: "Mario", vidas: 3, item: "🍄" };
      const { nombre, vidas, item: poder } = jugador;
      return `
        ${step("Objeto original", objViz(jugador, ["nombre", "vidas", "item"]))}
        ${arrow("const { nombre, vidas, item: poder } = jugador")}
        <div style="display:flex;flex-direction:column;gap:.5rem">
          ${ret(nombre, "nombre")}
          ${ret(vidas, "vidas")}
          ${ret(poder, "poder  (renombrado de item)")}
        </div>
      `;
    },
  },
];

// ============================================================
//  Motor de render
// ============================================================

// Guarda las funciones run() indexadas por id de botón
const runners = {};

function renderSection(demos, containerId) {
  const container = document.getElementById(containerId);

  demos.forEach((demo) => {
    const id = Math.random().toString(36).slice(2);
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <div class="card-header">
        <span class="card-emoji">${demo.emoji}</span>
        <div>
          <div class="card-title">${demo.titulo}</div>
          <div class="card-desc">${demo.desc}</div>
        </div>
      </div>
      <pre class="card-code">${esc(demo.codigo)}</pre>
      <div class="card-footer">
        <button class="btn-run" onclick="ejecutar('${id}')">▶ Ejecutar</button>
      </div>
      <div class="output" id="out-${id}"></div>
    `;

    container.appendChild(card);
    runners[id] = demo.run.bind(demo);
  });
}

function ejecutar(id) {
  const out = document.getElementById(`out-${id}`);
  out.innerHTML = runners[id]();
  // Re-trigger animation
  out.classList.remove("visible");
  void out.offsetWidth;
  out.classList.add("visible");
}

// ── Tabs ──────────────────────────────────────────────────
document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document
      .querySelectorAll(".tab")
      .forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    document
      .querySelectorAll(".grid")
      .forEach((g) => g.classList.add("hidden"));
    document.getElementById(tab.dataset.target).classList.remove("hidden");
  });
});

// ── Init ──────────────────────────────────────────────────
renderSection(DEMOS_ARRAYS, "arrays");
renderSection(DEMOS_OBJETOS, "objetos");
