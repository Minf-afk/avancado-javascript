const pessoa = {
  nome: 'mateus',
  idade: 30,
};

function gritar(prefixo) {
    console.log(prefixo, this.nome)
}
gritar('Olaaaa')

gritar.apply(pessoa, ['Olaaaa']);
gritar.call(pessoa, 'Olaaaa');