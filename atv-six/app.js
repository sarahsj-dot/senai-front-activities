function saudar(nome, idade) {
    return `Olá, ${nome}! Você tem ${idade} anos!`;
}

function calcularDobro(numero) {
    return numero * 2;
}

const somar = (a, b) => a + b;

function verificarPar(numero) {
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}

console.log("Testando Funções");
console.log(saudar("Lucas", 27));
console.log("Dobro de 15:", calcularDobro(15));
console.log("Soma de 10 + 20:", somar(10, 20));
console.log("O número 7 é:", verificarPar(7));

const output = document.getElementById("output");

const resultados = [
    saudar("Sarah", 19),
    `O dobro de 15 é ${calcularDobro(15)}`,
    `A soma de 10 + 20 é ${somar(10, 20)}`,
    `O número 7 é ${verificarPar(7)}`
];

resultados.forEach(res => {
    output.innerHTML += `<div class="card">${res}</div>`;
});