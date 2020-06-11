const formulario = document.querySelector(".lista__form");
const tabela = document.querySelector(".extrato__table");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();


  let inputNome = document.querySelector("#listaInputNome");
  let valorInputNome = inputNome.value;

  let inputValor = document.getElementById("listaInputValor");
  let valorInputValor = inputValor.value;

  let inputData = document.getElementById("listaInputData");
  let valorInputData = inputData.value;


  let novaLinha = document.createElement("tr");
  tabela.appendChild(novaLinha);

  let novoNome = document.createElement("td");
  novaLinha.appendChild(novoNome);
  novoNome.textContent = valorInputNome;

  let novoValor = document.createElement("td");
  novaLinha.appendChild(novoValor);
  novoValor.textContent = valorInputValor;

  let novaData = document.createElement("td");
  novaLinha.appendChild(novaData);
  novaData.textContent = valorInputData;

  formulario.reset();
});