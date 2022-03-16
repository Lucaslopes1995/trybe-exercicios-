const pokemons = [
    {
      name: 'Bulbasaur',
      type: 'Grass',
      ability: 'Razor Leaf',
    },
    {
      name: 'Charmander',
      type: 'Fire',
      ability: 'Ember',
    },
    {
      name: 'Squirtle',
      type: 'Water',
      ability: 'Water Gun',
    },
  ];
  
  function getPokemonDetails(filter, callback) {
    setTimeout(() => {
      if (pokemons.find(filter) === undefined) {
          //console.log(new Error('Não temos esse pokemon para você :('), null)
        return callback(new Error('Não temos esse pokemon para você :('), null);
        
      }
      const pokemon = pokemons.find(filter);
  
      const { name, type, ability } = pokemon;
  
      const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;
  
      callback(null, messageFromProfOak);
    }, 2000);
  }
  const filterpokemon = (pokemon) => pokemon.name === 'Charmandera'


  getPokemonDetails(filterpokemon,
    (error, message) => {
      if (error) {
        console.log(error);
      } else {
        console.log(message);
      }
    }
  );
  
  module.exports = {
    getPokemonDetails,
  };