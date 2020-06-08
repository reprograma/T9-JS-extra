// Dado uma variável
const pokemon = ["Pikachu", "Bulbassauro", "Charizard", "Squirtle", "Toguepi", "Meowth"];

/*Utilizando o método join(), converta o array para string e insira o traço entre cada palavra.

Desta forma:*/ "Pikachu-Bulbassauro-Charizard-Squirtle-Toguepi-Meowth"

const modificarPokemon = pokemon.join('-'); 
console.log(typeof (modificarPokemon));
console.log((modificarPokemon));

// .joi adiciona elementos de um array separados para string