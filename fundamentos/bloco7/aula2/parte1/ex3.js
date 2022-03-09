const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  let adicionaAtributo = (objeto,chave,value) => {
    objeto[chave]=value;
  }

  let chavesObjeto = (objeto) =>{
    for (let index in Object.keys(objeto)){
        Object.keys(objeto)[index]
        console.log(Object.keys(objeto)[index])
    }
  }
  let ValoresObjeto = (objeto) =>{
    for (let index in Object.values(objeto)){
        Object.values(objeto)[index]
        console.log(Object.values(objeto)[index])
    }
  }

  let tamanhoObjeto = (objeto) =>{
      console.log(Object.keys(objeto).length);
  }

  let allLessons = Object.assign({},{lesson1},{lesson2},{lesson3})
  adicionaAtributo(lesson2,"turno","noite")
  //chavesObjeto (lesson2)
  //tamanhoObjeto(lesson2)
  //console.log(lesson2)

  //ValoresObjeto(lesson2)

  //console.log(allLessons)

  let totalEstudantes = (obj) =>{
      let keyALllLessons =Object.keys(obj)
      let somaEstudantes=0;
      for(let index=0; index<keyALllLessons.length; index+=1){
        somaEstudantes+=allLessons[keyALllLessons[index]]["numeroEstudantes"];
      }
      console.log(somaEstudantes)
  }

  //totalEstudantes(allLessons)

  let getValueByNumber = (obj,key) => {
    console.log(obj[Object.keys(obj)[key]])
  }

  //getValueByNumber(lesson1,"0")

  let verifyPair = (obj,chave,valor) => {
      let arrayChaveValor=Object.entries(obj)
      let arrayAVerificar=[chave,valor]
      let validador=false;
      for(let index=0;index<arrayChaveValor.length;index+=1){
            
          if(arrayAVerificar[0]==arrayChaveValor[index][0] && arrayAVerificar[1]==arrayChaveValor[index][1]){
            validador=true;
            
          }
          
        }

        console.log(validador)
  }

  //verifyPair(lesson3,"numeroEstudantes","10")
  
  let verificaAlunosPorMatéria = (obj,materia) =>{
    let arraykeysArraycompleto=Object.keys(obj);
    let contadorEstudantes=0;
    for(let index=0;index<arraykeysArraycompleto.length;index+=1){
        
        //console.log(obj[arraykeysArraycompleto[index]]["materia"],materia,obj[arraykeysArraycompleto[index]]["materia"]==materia)
        if(obj[arraykeysArraycompleto[index]]["materia"]==materia){
            contadorEstudantes+=obj[arraykeysArraycompleto[index]]["numeroEstudantes"]
        }
    }
    console.log(contadorEstudantes)
    
  }

  //verificaAlunosPorMatéria(allLessons,"Matemática")


  let criaObjetoProfessor = (obj,professor) =>{
    let arraykeysArraycompleto=Object.keys(obj);
    //let contadorEstudantes=0;
    let objetoProf={professor:"",
                    aulas:[],
                    Estudantes:0
    };
    let somadorEstudante=0;
    for(let index=0;index<arraykeysArraycompleto.length;index+=1){
        
        //console.log(obj[arraykeysArraycompleto[index]]["professor"],professor,obj[arraykeysArraycompleto[index]]["professor"]==professor)
        if(obj[arraykeysArraycompleto[index]]["professor"]==professor){
            objetoProf["professor"]=obj[arraykeysArraycompleto[index]]["professor"];
            objetoProf["aulas"].push(obj[arraykeysArraycompleto[index]]["materia"]);
            somadorEstudante+=obj[arraykeysArraycompleto[index]]["numeroEstudantes"];
        }
    }
    objetoProf["Estudantes"]=somadorEstudante;
    console.log(objetoProf)
    
  }

  criaObjetoProfessor(allLessons,"Maria Clara")