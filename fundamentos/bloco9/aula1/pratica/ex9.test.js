// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("./ex8.js");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    // Escreva aqui seu código
    function callback(error,result){
        const expectedError= new Error('Não temos esse pokemon para você :(');
          expect(error).toEqual(expectedError)
          done();
    }

    getPokemonDetails((pokemon) => pokemon.name === "Pikachu",callback);
    
    
    
  });
  
  it("retorna um pokemon que existe no banco de dados", (done) => {
    // Escreva aqui seu código

    const expectedString= 'Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember';
    
    function callback(error,result){
          expect(result).toEqual(expectedString)
          done();
    }

    getPokemonDetails((pokemon) => pokemon.name === 'Charmander', callback);


    





  });
});

