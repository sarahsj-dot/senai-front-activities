//Pergunte ao usuário com prompt a idade
let idade = prompt("Qual a sua idade?");
idade = Number(idade);
console.log(idade);


//Crie uma variável mes (1 a 12). Use switch para mostrar o nome do mês.
let mes = 6;

switch (mes) {
  case 1:  console.log("Janeiro");   break;
  case 2:  console.log("Fevereiro"); break;
  case 3:  console.log("Março");     break;
  case 4:  console.log("Abril");     break;
  case 5:  console.log("Maio");      break;
  case 6:  console.log("Junho");     break;
  case 7:  console.log("Julho");     break;
  case 8:  console.log("Agosto");    break;
  case 9:  console.log("Setembro");  break;
  case 10: console.log("Outubro");   break;
  case 11: console.log("Novembro");  break;
  case 12: console.log("Dezembro");  break;
}

//crie um programa que receba uma nota e exiba:>= 9: Excelente / >= 7: Bom />= 5: Regular / < 5: Reprovado
let nota = prompt("Digite uma nota:");
nota = Number(nota);

if (nota >= 9) {
  console.log("Excelente");
} else if (nota >= 7) {
  console.log("Bom");
} else if (nota >= 5) {
  console.log("Regular");
} else {
  console.log("Reprovado");
}