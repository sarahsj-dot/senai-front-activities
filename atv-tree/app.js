const nome = "Sarah";
const idade = 19;
const cidade = "São Paulo";

const num1 = 1;
const num2 = 9;

const fraseConcatenada = "Meu nome é " + nome + ", tenho " + idade + " anos e moro em " + cidade + ".";

const soma = num1 + num2;
const subtracao = num1 - num2;
const multiplicacao = num1 * num2;
const divisao = num1 / num2;

const resultadoOperacoes = `Soma: ${soma} | Subtração: ${subtracao} | Multiplicação: ${multiplicacao} | Divisão: ${divisao}`;

const fraseTemplate = `Olá! Eu sou o ${nome}, moro em ${cidade} e daqui a 5 anos terei ${idade + 5} anos.`;

console.log(fraseConcatenada);
console.log("Operações:", resultadoOperacoes);
console.log(fraseTemplate);

const divResultado = document.getElementById("resultado");
divResultado.innerHTML = `
    <p>${fraseConcatenada}</p>
    <p><strong>Resultados Matemáticos:</strong> ${resultadoOperacoes}</p>
    <p>${fraseTemplate}</p>
`;