class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
}
const lista = [
  new Pessoa("Mateus"),
  new Pessoa("Gabrielle"),
  new Pessoa("Marcely"),
  new Pessoa("Vitória"),
  new Pessoa("Doralice"),
];

const listaDeNomes2 = lista.map((element) => element.nome)
console.log(listaDeNomes2);

const listaDeNomes = [];

for (let i = 0; i < lista.length; i++) {
  const element = lista[i];
  listaDeNomes.push(element.nome);
}
console.log(listaDeNomes);
