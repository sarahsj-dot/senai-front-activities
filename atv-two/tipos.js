//Aula 02 – Tipos de Dados (Primitivos e Estruturados)

//Tipos de variáveis
let texto = "Sarah"; // String
let numero = 19; // Number
let viva = true; // Boolean

console.log(typeof texto);
console.log(typeof numero);
console.log(typeof viva);

//Conversão de tipos
let conv1 = Number("50"); 
let conv2 = String(100);
let conv3 = Boolean(1);

console.log(conv1, typeof conv1);
console.log(conv2, typeof conv2);
console.log(conv3, typeof conv3);

//Primitivos: guardam o valor diretamente e são copiados de forma independente
//Referência: guardam o endereço do objeto na memória; ao copiar, apontam para o mesmo dado