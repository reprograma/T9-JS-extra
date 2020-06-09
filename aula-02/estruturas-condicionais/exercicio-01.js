/*Escreva uma função chamada compararNumero que receberá dois parâmetros,
em seguida, retorne o número que for maior.

O retorno deverá conter essa mensagem:

"O maior número entre 5 e 10 é 10"

Passo a passo da função:
Criar função compararValor(parametro1, parametro2)
Inserir uma condição onde parametro1 é maior que parametro dois?
Se a condição for verdadeira, retornar "O maior número entre 5 e 10 é 10"
Se for falsa, retornar que a segundo parametro é maior que o primeiro. */


function compararNumero(primeiroNumero, segundoNumero) {

  if (primeiroNumero > segundoNumero) {
    return `O ${primeiroNumero} é maior que o ${segundoNumero}`
  }
  else if (primeiroNumero === segundoNumero) {
    return `Os números são iguais`
  } else {
    return `O ${segundoNumero} é maior que o ${primeiroNumero}`

  }

}

const obterResultado = compararNumero(10, 20)

console.log(obterResultado)
