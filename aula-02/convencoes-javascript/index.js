//CONVENÇÕES DE NOMENCLATURA JAVASCRIPT: FUNÇÃO

/*As funções também são escritas em camelCase.
Além disso, é uma prática recomendada contar o que a função está fazendo,
atribuindo um verbo ao nome da função como prefixo.*/

// ruim
function nome(primeiroNome, ultimoNome) {
  return ` ${primeiroNome} ${ultimoNome} `;
}

// Boa
function pegarNome(primeiroNome, ultimoNome) {
  return ` ${primeiroNome} ${ultimoNome} `;
}

/*Esse verbo como prefixo pode ser qualquer coisa
(por exemplo, obter, buscar, enviar,
aplicar, calcular, calcular, publicar).
É mais uma regra simples a considerar
por ter mais variáveis auto-descritivas. */