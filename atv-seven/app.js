let frutas = ["Maçã", "Banana", "Laranja"];
frutas.push("Uva");
frutas.unshift("Morango");
frutas.pop();
frutas.shift();

const listaFrutasFinal = [...frutas]
const numeros = [10, 5, 8, 20, 15, 3];
const pares = numeros.filter(num => num % 2 === 0);
const quadrados = numeros.map(num => num ** 2);
const somaTotal = numeros.reduce((acumulador, atual) => acumulador + atual, 0);
const ordenados = [...numeros].sort((a, b) => a - b)
const invertidos = [...ordenados].reverse();

console.log("Frutas Finais:", listaFrutasFinal);
console.log("Apenas Pares:", pares);
console.log("Quadrados:", quadrados);
console.log("Soma Total:", somaTotal);
console.log("Ordenados:", ordenados);
console.log("Invertidos:", invertidos);

const display = document.getElementById("display");

function renderizar(titulo, dado) {
    display.innerHTML += `
        <h2>${titulo}</h2>
        <pre>${JSON.stringify(dado, null, 2)}</pre>
    `;
}

renderizar("Lista de Frutas (após push/pop/unshift/shift)", listaFrutasFinal);
renderizar("Números Pares (Filter)", pares);
renderizar("Números ao Quadrado (Map)", quadrados);
renderizar("Soma de tudo (Reduce)", somaTotal);
renderizar("Ordem Crescente (Sort)", ordenados);
renderizar("Ordem Invertida (Reverse)", invertidos);