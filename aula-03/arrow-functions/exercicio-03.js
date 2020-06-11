/* Reescreva a função abaixo utilizando 
Arrow Function */

/*function objetoUsuario (id, nome) {
  return {
    id: id,
    nome: nome
  }
}*/

const objetoUsuarioArrowFunction = (id, nome) => ({ id: id, nome: nome })

console.log(objetoUsuarioArrowFunction(123, 'jessica'))