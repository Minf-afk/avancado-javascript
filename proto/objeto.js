function Pessoa (nome, idade){
    this.nome = nome
    this.idade = idade
}

Pessoa.prototype.falar = function(){
    console.log(`Meu nome é: ${this.nome}`)
}

const mateus = new Pessoa('mateus', 23);
mateus.falar();

console.log(new Pessoa('mateus', 23));