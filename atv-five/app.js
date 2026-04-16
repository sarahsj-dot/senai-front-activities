//*mostrar os números de 1 a 10.
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//*mostrar os números pares de 2 a 20.
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

//*peça uma senha ("1234") e só pare quando o usuário acertar.
let senhaDigitada;
const senhaCorreta = "1234";

do {
    senhaDigitada = prompt("Digite a senha (Dica: 1234):");

    if (senhaDigitada !== senhaCorreta) {
        alert("Senha incorreta! Tente novamente.");
    }
} while (senhaDigitada !== senhaCorreta);

alert("Acesso concedido!");
console.log("Usuário acertou a senha.");