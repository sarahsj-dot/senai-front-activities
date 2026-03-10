//Aula 02 – Tipos de Dados (Primitivos e Estruturados)

//Tipos de variáveis
const nome = "Sarah"; // String
const idade = 19; // Number (int)
const altura = 1.60; // Number (float)
const estudante = true; // Boolean

console.log("String: ", nome);
console.log("Number (int): ", idade);
console.log("Number (float): ", altura);
console.log("Boolean: ", estudante);

//Conversões
//String para Number
const idadeString = "19";
const idadeNumber = Number(idadeString);
console.log("Idade como String: ", idadeString);
console.log("Idade como Number: ", idadeNumber);

//Number para String
const alturaNumber = 1.60;
const alturaString = String(alturaNumber);
console.log("Altura como Number: ", alturaNumber);
console.log("Altura como String: ", alturaString);

//Number para Boolean
const estudanteNumber = 1;
const estudanteBoolean = Boolean(estudanteNumber);
console.log("Estudante como Number: ", estudanteNumber);
console.log("Estudante como Boolean: ", estudanteBoolean);
