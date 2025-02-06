const umNumeroAleatorio = new Promise((resolve, reject) => {
  const numero = parseInt(Math.random() * 500);
  resolve(numero);
});

umNumeroAleatorio
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finalizou");
  });
