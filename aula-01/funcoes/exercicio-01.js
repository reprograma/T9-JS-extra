//Crie uma função que dado o objeto a seguir com o parâmetro nome e sobrenome:
const endereco = {
  rua: "Rua dos pinheiros",
  numero: 1293,
  bairro: "Centro",
  cidade: "São Paulo",
  uf: "SP"
};

/*Retorne o seguinte conteúdo:*

A {nome} {Sobrenome} mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com
nº 1293.

O retorno deverá ser template string*/

function pegarNomeCompleto(nome, sobrenome) {
  const nomeSobrenome = nome + " " + sobrenome;

  const modificarNomeCompleto = nomeSobrenome.toUpperCase();
  console.log(modificarNomeCompleto);
}

console.log(pegarNomeCompleto('Jéssica', 'Osko'))

