/*Plano de Viagem:
Na Agência Turismo é viver, existem alguns planos
de viagens de acordo com a idade da pessoa.

A tabela é:

PLANO TEEN: A partir de 12 anos até 17 anos.
PLANO PROFISSIONAL: A partir de 18 anos até 29 anos.
PLANO EXPERIENTE: A partir de 30 anos.

Faça uma função chamada obterPlanos que receba apenas um parâmetro
e insira essas condições dentro da função.

Se não inserirem um valor de acordo com as idades,
é para retornar: Entrar em contato com a agência de turismo.

Aqui você pode utilizar:
If/ else if

A saída deverá ser algo parecido com:

obterPlano(12) //SAÍDA: Você pode verificar os nossos pacotes TEEN.

*/


function obterPlanos(idade) {
  if (idade >= 12 && idade <= 17) {
    return `Pacote Teen`
  }
  else if (idade >= 18 && idade <= 29) {
    return `Pacote Profissional`
  }
  else if (idade >= 30) {
    return `Pacote experiente`
  }
  else {
    return `Entrar em contato com a agência de turismo`
  }

}

const resultadoPlanos = obterPlanos(11);

console.log(resultadoPlanos)
