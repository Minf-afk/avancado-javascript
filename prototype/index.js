const pessoa = {
    genero: 'masculino',
}


const mateus = {
    nome: 'mateus',
    idade: 23,
    __proto__: pessoa
}


console.log(mateus.genero);