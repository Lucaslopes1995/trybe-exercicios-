let moradores = {
    blocoUm: [
      {
        nome: 'Luiza',
        sobrenome: 'Guimarães',
        andar: 10,
        apartamento: 1005,
      },
      {
        nome: 'William',
        sobrenome: 'Albuquerque',
        andar: 5,
        apartamento: 502,
      },
    ],
    blocoDois: [
      {
        nome: 'Murilo',
        sobrenome: 'Ferraz',
        andar: 8,
        apartamento: 804,
      },
      {
        nome: 'Zoey',
        sobrenome: 'Brooks',
        andar: 1,
        apartamento: 101,
      },
    ],
  };

  function validaBlocoEImpremeNomePessoa(){
      let arrayEntradas = Object.keys(moradores)
      for(let bloco in arrayEntradas){
        let  arraybloco=moradores[arrayEntradas[bloco]]
          
            for(let pessoa=0;pessoa<arraybloco.length;pessoa+=1){
                
                console.log("O morador do "+arrayEntradas[bloco]+" de nome "+arraybloco[pessoa]["nome"]+" "+arraybloco[pessoa]["sobrenome"]+" mora no "+arraybloco[pessoa]["andar"]+"°Andar, apartamento "+arraybloco[pessoa]["apartamento"])
            }
          
        
      }
      
  }

  validaBlocoEImpremeNomePessoa()