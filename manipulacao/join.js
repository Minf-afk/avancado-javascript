const lista = [
  { nome: 'Ronaldo' },
  { nome: 'Mateus' },
  { nome: 'Maria' },
  { nome: 'Gabrielle' },
];

console.log(
  lista
    .map((e) => e.nome)
    .filter((e) => e.startsWith("M"))
    .join(" ;")
);
