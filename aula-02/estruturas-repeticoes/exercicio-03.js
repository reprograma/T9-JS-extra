/* Imprima os números de 0 a 50 e imprima
se o número é par ou ímpar*/

for (let indice = 0; indice < 10; indice++) {

  //ternário
  const verificarImparPar = indice % 2 === 0 ?
    `${indice} par` : `${indice} impar`

  /* Bloco
  if (indice % 2 === 0) {
     console.log(`${indice} par`)
   } else {
     console.log(`${indice} impar`)
   }*/

  console.log(verificarImparPar);
}