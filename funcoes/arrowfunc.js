function funcao1() {
  console.log(this);
}

const funcao2 = () => {
  console.log(this);
};

const mateus = {
  nome: mateus,
  funcao1,
  funcao2,
};

mateus.funcao1();
mateus.funcao2();
