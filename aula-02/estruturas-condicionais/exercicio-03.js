/*Crie uma estrutura switch case na qual armazene o dia da semana
em que estamos em uma variável auxiliadora.

Você precisará de uma variável para armazenar,
durante os cases, o dia da semana.

Cada dia da semana pode ser um valor:

0     1    2    3   4     5   6
dom  seg  ter  quar quin sext sab

Para você conseguir pegar a data de hoje,
utilize o (new Date().getDay()) como parâmetro.

Onde
case 0:
 diaSemana = "Domingo";
 break;
case 1:
  ...
*/

let diaSemana;
let diaHoje = new Date().getDay();

switch (diaHoje) {
  case 0:
    diaSemana = "Domingo"
    break;
  case 1:
    diaSemana = "Segunda"
    break;
  case 2:
    diaSemana = "Terça";
    break;
  case 3:
    diaSemana = "Quarta";
    break;
  case 4:
    diaSemana = "Quinta";
    break;
  case 5:
    diaSemana = "Sexta";
    break;
  case 6:
    diaSemana = "Sábado"
};

console.log(diaSemana)







/*
function obterDiaSemana() {
  let dia = new Date().getDay();
  let mensagem;

  switch (true) {
    case dia === 0:
      return mensagem = "Domingo";
      break;
    case dia === 1:
      return mensagem = "Segunda";
      break;
    case dia === 2:
      return mensagem = "Terça";
      break;
    default: "Deu ruim"
      break;
  }
}
*/