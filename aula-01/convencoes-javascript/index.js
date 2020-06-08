
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

// ruim
valor const = 'Andreia';

// ruim
const val = 'Marcia';

// Boa
const primeiroNome = 'Joana';

//Uma breve visão geral sobre os diferentes estilos de escrever uma variável:
//camelCase ou 

camelCase = primeiroNome // utilizado em declarações de variáveis, funções e métodos.
PascalCase = ContaCorrente //utilizado para declarações de classes e arquivos que contenha classes dentro.


//CONVENÇÕES DE NOMENCLATURA JAVASCRIPT: BOOLEAN

/*Um prefixo como is , é ou tem 
ajuda a distinguir um booleano de outra variável apenas olhando para ele: */

// ruim
const visivel = verdadeiro;

// Boa
const isVisible = true;

// ruim
const igual = falso;

// Boa
const isEqual = false;


//CONVENÇÕES DE NOMENCLATURA JAVASCRIPT: ARQUIVOS

/*Existem duas estratégias de nomeação de arquivos no JavaScript:
PascalCase e kebab-case.
Nos aplicativos frontend JavaScript,
você frequentemente vai ver o PascalCase para nomear classes, por exemplo: ContaCorrente.
Por outro lado, no aplicativo back-end JavaScript, kebab-case é o senso comum:*/