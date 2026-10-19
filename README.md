# 🖥️ PC Builder (Montador de PC)

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/status-v1%20complete-brightgreen?style=flat)

🔗 **Live demo:** https://yaakz007.github.io/montador-pc/

A small web app where you pick a **processor** and a **motherboard** from two dropdown lists. The page checks whether the two parts are **compatible (same socket)** and shows the **total price**. Built with plain HTML, CSS and JavaScript (no frameworks) while learning JavaScript and DOM manipulation in my Software Engineering degree (FIAP).

## Why this repository exists

This is my first JavaScript project that ties everything together: data stored in arrays of objects, functions, loops, conditionals and, mainly, **DOM manipulation and events**. The goal was to go from "JavaScript that prints to the console" to "JavaScript that builds and updates a real page".

## What it does

- Fills two `<select>` lists from JavaScript arrays (19 processors and 18 motherboards), sorted alphabetically.
- Shows each option as `Name - R$ price (socket)`.
- Updates a summary every time you change either selection, and also when the page first loads.
- Shows whether the pair is **Compatible** or **Incompatible**, based on the CPU and motherboard sockets (AM4, AM5, LGA1700).
- Calculates the total price of the two selected parts.

## Project structure

| File | Purpose |
|------|---------|
| `index.html` | Page structure: title, the two `<select>` elements (`#cpu` and `#placa`) and the `<p id="resumo">` where the summary appears |
| `js/montador.js` | All the logic: data, functions, building the lists and updating the summary |
| `css/styles.css` | Page styling |
| `LICENSE` | MIT License |

## How the code works

### 1. Data as arrays of objects

Each part is an object with a name, a price and a socket:

```js
{ nome: "Ryzen 5 7600X", preco: 1000, socket: "AM5" }
```

The processors live in the `cpus` array and the motherboards in the `placas` array. New parts are added with `push`, and both arrays are sorted by name with `sort` and `localeCompare` before the lists are built.

### 2. Helper functions

- `calcularTotal(lista)` loops over a list and returns the sum of all prices.
- `maisBarato(lista)` loops over a list keeping the "best so far" and returns the cheapest item.

Both are tested with `console.log` at the top of the file.

### 3. Building the dropdown lists

For each part, a `for ... of` loop creates an `<option>` with `document.createElement`, writes its text with `textContent` (using a template literal) and adds it to the `<select>` with `appendChild`:

```js
for (const cpu of cpus) {
    const option = document.createElement("option")
    option.textContent = `${cpu.nome} - R$${cpu.preco.toFixed(2)} (${cpu.socket})`
    option.value = cpu.nome
    pc.appendChild(option)
}
```

### 4. Linking the screen to the data

The browser only tells us the **position** of the chosen option (`selectedIndex`). Because the array is sorted *before* the options are created, the position on screen matches the position in the array, so the chosen part is found with:

```js
const cpu = cpus[pc.selectedIndex]
const placa = placas[placaSelect.selectedIndex]
```

### 5. Compatibility check and summary

```js
const compativel = cpu.socket === placa.socket
const total = cpu.preco + placa.preco
```

The summary text uses a ternary operator (`compativel ? "Compatível" : "Incompatível"`) to show the status, plus both parts and the total.

### 6. Events

`atualizarResumo` is passed to `addEventListener("change", ...)` on both selects, so the summary refreshes whenever the user picks something different. It is also called once at the end of the file, so the summary is already filled when the page opens.

## Concepts practiced

- Arrays of objects, `push`, `sort` and `localeCompare`
- `for ... of` loops, functions and `return`
- Conditionals, strict equality (`===`) and the ternary operator
- Template literals and `toFixed(2)` for prices
- DOM: `getElementById`, `createElement`, `appendChild`, `textContent`, `selectedIndex`
- Events with `addEventListener` and the difference between passing a function and calling it
- Keeping the order of an array and the order of a list on screen in sync

## How to run

No installation needed. Download or clone the repository and open `index.html` in your browser, or use the **Live Server** extension in VS Code so the page reloads on every change.

```bash
git clone https://github.com/yaakz007/montador-pc.git
```

## Next steps

- Publish it with GitHub Pages to get a live link.
- Add more components (RAM, graphics card, power supply) with their own compatibility rules.
- Show a warning style (color) when the selected parts are incompatible.
- Move the parts data into a separate file to keep the logic cleaner.

## License

Distributed under the MIT License. See `LICENSE` for details.
