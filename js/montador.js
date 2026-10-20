const cpus = [
    { nome: "Ryzen 5 7600X", preco: 1000, socket: "AM5" },
    { nome: "Ryzen 7 7800X3D", preco: 2500, socket: "AM5" },
    { nome: "Ryzen 5 5600", preco: 700, socket: "AM4" },
    { nome: "Ryzen 5 5500", preco: 550, socket: "AM4" },
    { nome: "Intel Core i3-12100F", preco: 500, socket: "LGA1700" },
    { nome: "Intel Core i5-12400F", preco: 700, socket: "LGA1700" },
    { nome: "Intel Core i5-13400F", preco: 1000, socket: "LGA1700" },
    { nome: "Intel Core i5-14400F", preco: 1100, socket: "LGA1700" },
    { nome: "Intel Core i5-12600K", preco: 1200, socket: "LGA1700" },
    { nome: "Intel Core i7-12700K", preco: 1600, socket: "LGA1700" },
    { nome: "Intel Core i7-13700K", preco: 2200, socket: "LGA1700" },
    { nome: "Intel Core i9-12900K", preco: 2300, socket: "LGA1700" },
    { nome: "Intel Core i9-14900K", preco: 3500, socket: "LGA1700" },
    { nome: "Ryzen 3 4100", preco: 400, socket: "AM4" },
    { nome: "Ryzen 5 4500", preco: 450, socket: "AM4" },
    { nome: "Ryzen 7 5700X3D", preco: 1500, socket: "AM4" },
    { nome: "Ryzen 5 8500G", preco: 1000, socket: "AM5" },
    { nome: "Ryzen 7 7700", preco: 1700, socket: "AM5" },
    { nome: "Ryzen 9 7950X", preco: 3500, socket: "AM5" }
]


// Função que calulca o preço total de todos os itens
function calcularTotal(lista) {
    let total = 0
    for (let p of lista) {
        total += p.preco
    }
    return total
}


// Função que calcula o item mais barato da lista
function maisBarato(lista) {
    let melhor = lista[0]
    for (let cpu of lista) {
        if (cpu.preco < melhor.preco) {
            melhor = cpu
        }
    }
    return melhor
}


const pc = document.getElementById("cpu")
const resumo = document.getElementById("resumo")

// Placa mãe
const placas = [
    // Placas-mãe AM5
    { nome: "B650M Gaming WiFi", preco: 730, socket: "AM5" },
    { nome: "B650M AORUS Elite AX", preco: 1100, socket: "AM5" },
    { nome: "ASUS TUF Gaming B650-PLUS", preco: 1250, socket: "AM5" },
    { nome: "MSI PRO B650M-A WiFi", preco: 1050, socket: "AM5" },
    { nome: "ASRock B650M-HDV/M.2", preco: 850, socket: "AM5" },
    { nome: "ASUS PRIME B650M-A II", preco: 950, socket: "AM5" },

    // Placas-mãe AM4
    { nome: "B550M AORUS Elite", preco: 900, socket: "AM4" },
    { nome: "MSI B550M PRO-VDH WiFi", preco: 750, socket: "AM4" },
    { nome: "ASUS TUF Gaming B550M-PLUS", preco: 950, socket: "AM4" },
    { nome: "ASRock B550M Steel Legend", preco: 900, socket: "AM4" },
    { nome: "Gigabyte B550M DS3H", preco: 650, socket: "AM4" },
    { nome: "MSI B550-A PRO", preco: 800, socket: "AM4" },

    // Placas-mãe LGA1700
    { nome: "TUF Gaming B760M-PLUS", preco: 1050, socket: "LGA1700" },
    { nome: "MSI PRO B760M-A WiFi", preco: 1000, socket: "LGA1700" },
    { nome: "Gigabyte B760M DS3H", preco: 800, socket: "LGA1700" },
    { nome: "ASUS PRIME B760M-A", preco: 900, socket: "LGA1700" },
    { nome: "MSI MAG B760 TOMAHAWK WiFi", preco: 1350, socket: "LGA1700" },
    { nome: "Gigabyte Z790 AORUS Elite AX", preco: 1800, socket: "LGA1700" }
]

const placaSelect = document.getElementById("placa")

// Criando o loop na lista de placas mãe no  <select>
placas.sort((a, b) => a.nome.localeCompare(b.nome))
for (const placa of placas) {
    const option_dois = document.createElement("option")
    option_dois.textContent = `${placa.nome} - R$${placa.preco.toFixed(2)} (${placa.socket})`
    option_dois.value = placa.nome
    placaSelect.appendChild(option_dois)
}

// Criando o loop da lista de cpus no <select>
cpus.sort((a, b) => a.nome.localeCompare(b.nome))
for (const cpu of cpus) {
    const option = document.createElement("option")
    option.textContent = `${cpu.nome} - R$${cpu.preco.toFixed(2)} (${cpu.socket})`
    option.value = cpu.nome
    pc.appendChild(option)
}

function atualizarResumo() {
    const cpu = cpus[pc.selectedIndex]
    const placa = placas[placaSelect.selectedIndex]
    if (!cpu || !placa) {
        resumo.textContent = "Selecione os componentes."
        return
    }
    const compativel = cpu.socket === placa.socket
    const total = cpu.preco + placa.preco

    // Adicionando feedback de cores 
    if (compativel) {
        resumo.classList.add("compativel")
        resumo.classList.remove("incompativel")
    } else {
        resumo.classList.add("incompativel")
        resumo.classList.remove("compativel")
    }

    resumo.textContent = `
    Status: ${compativel ? "Compatível" : "Incompatível"}
    Processador: ${cpu.nome} - R$${cpu.preco.toFixed(2)}
    Placa-mãe: ${placa.nome} - R$${placa.preco.toFixed(2)}
    Total = R$${total.toFixed(2)}
    `
}

pc.addEventListener("change", atualizarResumo)
placaSelect.addEventListener("change", atualizarResumo)

atualizarResumo()