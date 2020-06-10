/* Dado um array de objetos: */

const usuarios = [
  { nome: "Jordana", idade: 18 },
  { nome: "Lilian", idade: 28 },
  { nome: "Janaina", idade: 19 }];

/*Imprima todos nome e idade da variável usuários.
A saída deverá ser:

Jordana
18

Lilian
28
...*/


// for
//fornecem acesso ao índice do array, não ao elemento real
for (let indice = 0; indice < usuarios.length; indice++) {
  console.log(usuarios[indice])
  console.log(indice)
}


console.log('------------')

usuarios.forEach((valorAtual, indice) => {
  console.log(valorAtual)
  console.log(indice)
})

console.log('------------')

for (usuario of usuarios) {
  console.log(usuario);
}

//forEach() e for..of, você tem acesso ao próprio elemento do array.
//Com forEach() você pode acessar o índice do array em indice,


 //Com for..of você não pode.

//Adicionar novas propriedades
