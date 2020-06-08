/*Separe a seguinte frase onde cada palavra será um item de um array. */

let frase = "Na programação, muitasvezes é errando que se aprende. Permita-se"

/*A forma que terá que ficar:*/


/* Em seguida, verifique o lenght do array, a saída terá que ser 10*/


let modificarFrase = frase.split(" ", 3)

//verificar o que contém
console.log(modificarFrase);

//quantidade de itens no array
console.log(modificarFrase.length);
