//*  mostrar os números de 1 a 10.
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//*  mostrar os números pares de 2 a 20.
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

//*  peça uma senha ("1234") e só pare quando o usuário acertar.
let senha;
do {
  senha = prompt("Digite a senha:");
} while (senha !== "01052");
console.log("Senha correta!");