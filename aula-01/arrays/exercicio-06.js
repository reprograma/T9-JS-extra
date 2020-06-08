/*Separe a seguinte frase onde cada palavra será um item de um array. */

let frase = "Na programação, muitas vezes é errando que se aprende. Permita-se"

/*A forma que terá que ficar:*/

// let modificarFrase = ["Na", "programação,",
//   "muitas", "vezes", "é", "errando", "que",
//   "se", "aprende.", "Permita-se"]

/* Em seguida, verifique o length do array, a saída terá que ser 10*/

let modificarFrase = frase.split(' ')

console.log(modificarFrase);
console.log(modificarFrase.length);

// O .split pega sua string, sua frase inteira e ele divide ela em palavras