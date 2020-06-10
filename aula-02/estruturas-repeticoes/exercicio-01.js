/*REPETIR PARALAVRA

Dado duas variáveis:

obterNome > vai armazenar um nome.
repetirNome > vai armazenar números

Faça um programam que repita a palavra
De acordo com a quantidade de vezes que você
inserir para que essa palavra repita.

exemplo:
const obterNome = "Jéssica";
const repetirNome = 4

A saída terá que ser:

"Alessandra"
"Alessandra"
"Alessandra"
"Alessandra"*/

const obterNome = "Vanessa";
const repetirNome = 4;
let contador = 0;

while (contador <= repetirNome) {
  console.log(obterNome);
  contador++;
}

console.log('-----------')

for (let i = 0; i < repetirNome; i++) {
  console.log(repetirNome);
  console.log(i)
}








