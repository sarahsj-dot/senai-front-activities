let idadeInput = prompt("Digite a sua idade:");
let idade = parseInt(idadeInput);
let categoriaIdade = "";

if (idade >= 0 && idade <= 12) {
    categoriaIdade = "Criança";
} else if (idade >= 13 && idade <= 17) {
    categoriaIdade = "Adolescente";
} else if (idade >= 18 && idade <= 59) {
    categoriaIdade = "Adulto";
} else if (idade >= 60) {
    categoriaIdade = "Idoso";
} else {
    categoriaIdade = "Idade inválida";
}

let mes = 4;
let nomeMes = "";

switch (mes) {
    case 1: nomeMes = "Janeiro"; break;
    case 2: nomeMes = "Fevereiro"; break;
    case 3: nomeMes = "Março"; break;
    case 4: nomeMes = "Abril"; break;
    case 5: nomeMes = "Maio"; break;
    case 6: nomeMes = "Junho"; break;
    case 7: nomeMes = "Julho"; break;
    case 8: nomeMes = "Agosto"; break;
    case 9: nomeMes = "Setembro"; break;
    case 10: nomeMes = "Outubro"; break;
    case 11: nomeMes = "Novembro"; break;
    case 12: nomeMes = "Dezembro"; break;
    default: nomeMes = "Mês inexistente";
}

let nota = prompt("Digite uma nota:");
let notaNum = parseFloat(nota);
let statusNota = "";

if (notaNum >= 9) {
    statusNota = "Excelente";
} else if (notaNum >= 7) {
    statusNota = "Bom";
} else if (notaNum >= 5) {
    statusNota = "Regular";
} else {
    statusNota = "Reprovado";
}

console.log(`Categoria: ${categoriaIdade}`);
console.log(`Mês selecionado: ${nomeMes}`);
console.log(`Desempenho: ${statusNota}`);

document.getElementById("saida").innerHTML = `
    <p><strong>Idade:</strong> ${idade} anos (${categoriaIdade})</p>
    <p><strong>Mês (Número ${mes}):</strong> ${nomeMes}</p>
    <p><strong>Nota ${notaNum}:</strong> ${statusNota}</p>
`;