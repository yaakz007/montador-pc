const produto = "iphone 16"
const preco = 2000
let sit = ""

if (preco > 3000) {
    sit = "CARO"
}

else if (preco > 1500) {
    sit = "MÉDIO"
}

else {
    sit = "BARATO"
}

console.log(`O produto ${produto} custa um total de R$${preco.toFixed(2)} e é um produto ${sit}`)

console.log("5" == 5) //deu true no console
console.log("5" === 5) //deu false no console

produto = "galaxy s24" //deu montador.js:22 Uncaught TypeError: Assignment to constant variable.

