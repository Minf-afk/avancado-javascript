const fs = require("fs");
const path = require("path");

const caminhoDoArquivo = path.join(__dirname, "tarefas.csv");

const promessaDaLeituraDoArquivo = fs.promises.readFile(caminhoDoArquivo);

promessaDaLeituraDoArquivo.then((arquivo) => {
  console.log(arquivo.toString("utf-8"));
}).catch((erro) => {
  console.error("Erro ao ler o arquivo:", erro);
});