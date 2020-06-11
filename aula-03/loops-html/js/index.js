const alunas = ["Od", "Nayla", "Sindi",
  "Maria", "Liana", "Viviane",
  "Lorena", "Nathalia",
  "Raquel", "Raquel", "Marisa",
  "Nathy", "Patricia",
  "Jordana", "Ilza",
  "Talisia", "Débora", "Tabita", "Gabrielli",
  "Claudia", "Sara", "Jemima", "Suzelen", "Giulia", "Vanessa",
  "Carol", "Ariane", "Millena", "Adela",
  "Gabi Fernandes"];

const lista = document.getElementById("lista-alunas");

alunas.forEach((aluna) => {
  let item = document.createElement("li");
  item.textContent = aluna;

  lista.appendChild(item)


})

