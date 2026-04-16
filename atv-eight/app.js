const pessoa = {
    nome: "Sarah",
    idade: 19,
    profissao: "Desenvolvedora",
    apresentar: function() {
        return `Olá, eu sou a ${this.nome}, tenho ${this.idade} anos e estudo ${this.profissao}.`;
    }
};

const carro = {
    marca: "Hyundai",
    modelo: "Civic",
    ano: 2009,
    ligar: function() {
        console.log("Status do Carro: Carro ligado!");
        return "Vrum vrum! " +
            "🏎️";
    }
};

const loja = {
    nome: "Tech Store",
    produtos: [
        { nome: "Mouse Gamer", preco: 150 },
        { nome: "Teclado Mecânico", preco: 350 },
        { nome: "Monitor 144hz", preco: 1200 }
    ]
};

console.log("--- Testando Objetos ---");
console.log(pessoa.apresentar());
console.log(carro.ligar());

console.log("--- Listando Produtos da Loja ---");
Object.entries(loja.produtos).forEach(([index, produto]) => {
    console.log(`${parseInt(index) + 1}. ${produto.nome} - R$ ${produto.preco}`);
});

const output = document.getElementById("output");

function render(titulo, conteudo) {
    output.innerHTML += `
        <div class="section">
            <h2>${titulo}</h2>
            <p>${conteudo}</p>
        </div>
    `;
}

render("Pessoa", pessoa.apresentar());
render("Carro", `Ação: <code>carro.ligar()</code> -> ${carro.ligar()}`);

let listaHtml = "<ul>";
for (let key in loja.produtos) {
    const p = loja.produtos[key];
    listaHtml += `<li><strong>${p.nome}</strong>: R$ ${p.preco}</li>`;
}
listaHtml += "</ul>";

render(`Produtos da Loja (${loja.nome})`, listaHtml);