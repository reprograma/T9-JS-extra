/*Crie uma função que receba o parametro ano de nascimento
 e retorne a idade a partir do ano atual */

function calcularIdade(ano) {
  const anoAtual = new Date().getFullYear(); //2020 - ano atual 
  const calcularIdade = anoAtual - ano;
  console.log(`A sua idade é ${calcularIdade} anos.`)
}

const resultadoIdade = calcularIdade(1992);

console.log(resultadoIdade);