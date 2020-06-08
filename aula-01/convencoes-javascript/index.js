
//CONVENÇÕES DE NOMENCLATURA JAVASCRIPT: VARIÁVEIS

/*As variáveis se diferenciam maiúsculas de minúsculas.
Portanto, as variáveis ​​JavaScript com caracteres minúsculos e
maiúsculos são diferentes: */


const name = 'Gabriele';

const Nome = 'Maria';

const NAME = 'Patrícia';

console.log(nome);
// "Gabriele"

console.log(nome);
// "Maria"

console.log(NAME);
// "Patrícia"

/*Uma variável deve ser auto-descritiva.
Não deve ser necessário adicionar um comentário para documentação adicional
à variável: */

// Tem como melhorar esse nome e ajustar essa variável, vai quebrar o código. :)
valor const = 'Andreia';

// Tem como melhorar esse nome. :)
const val = 'Marcia';

// Melhor forma! :)
const primeiroNome = 'Joana';

//Uma breve visão geral sobre os diferentes estilos de escrever uma variável:
//camelCase ou 

camelCase = primeiroNome // utilizado em declarações de variáveis, funções e métodos.
PascalCase = ContaCorrente //utilizado para declarações de classes e arquivos que contenha classes dentro.


//CONVENÇÕES DE NOMENCLATURA JAVASCRIPT: BOOLEAN

/*Um prefixo como is , é ou tem 
ajuda a distinguir um booleano de outra variável apenas olhando para ele: */

// Tem como melhorar esse nome. :)
const visivel = verdadeiro;

// Tem como melhorar esse nome. :)
const isVisible = true;

// Tem como melhorar esse nome. :)
const igual = falso;

// Melhor forma! :)
const isEqual = false;


//CONVENÇÕES DE NOMENCLATURA JAVASCRIPT: ARQUIVOS

/*Existem duas estratégias de nomeação de arquivos no JavaScript:
PascalCase e kebab-case.
Nos aplicativos frontend JavaScript,
você frequentemente vai ver o PascalCase para nomear classes, por exemplo: ContaCorrente.
Por outro lado, no aplicativo back-end JavaScript, kebab-case é o senso comum:*/




//CONVENÇÕES DE NOMENCLATURA JAVASCRIPT: FUNÇÃO

/*As funções também são escritas em camelCase.
Além disso, é uma prática recomendada contar o que a função está fazendo,
atribuindo um verbo ao nome da função como prefixo.*/

// Tem como melhorar esse nome. :)
function nome(primeiroNome, ultimoNome) {
  return ` ${primeiroNome} ${ultimoNome} `;
}

// Melhor forma! :)
function pegarNome(primeiroNome, ultimoNome) {
  return ` ${primeiroNome} ${ultimoNome} `;
}


function calcularIdade() {

}

function obterIdade() {

}
/*Esse verbo como prefixo pode ser qualquer coisa
(por exemplo, obter, buscar, enviar,
aplicar, calcular, calcular, publicar).
É mais uma regra simples a considerar
por ter mais variáveis auto-descritivas. */