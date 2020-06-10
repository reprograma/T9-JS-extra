const alunas = ["Raquel", "Talita", "Lia", "Daiana Moraes", "Angelica Garcia", "Simara Conceição", "Simone Santos", "Monique Almeida", "Priscilla Alves"];

const lista = document.getElementById("lista-alunas");

//Criando itens da lista com forEach, um loop específico de array
alunas.forEach(function (aluna) {
  let item = document.createElement("li");

  item.textContent = aluna;

  lista.appendChild(item);
});


// Criando itens da lista com o for que já conhecemos bem

/* 
for (let i = 0; i < alunas.length; i++) {
    let item = document.createElement("li");
    item.textContent = alunas[i];

    lista.appendChild(item);
}
 */

// Adicionando um escutador de evento de click
const meuTitulo = document.querySelector(".titulo");

meuTitulo.addEventListener("click", function () {
  //    meuTitulo.style.color = "red";
  meuTitulo.classList.add("vermelha");
});
