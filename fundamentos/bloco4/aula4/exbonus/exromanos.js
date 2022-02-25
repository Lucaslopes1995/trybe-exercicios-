let tabelaConsulta={
    I:1,
    V:5,
    X:10,
    L:50,
    C:100,
    D:500,
    M:1000,
}
let contador=0;
let valorDoNumero=0;
let keysRomanos;
let valuesRomanos;
let auxiliarNumeroAnterior;

function localizaPosicaoNumero(arrayBase,numeroASerVerificado){
    for(let arrayKeysRomanos in arrayBase){
        if(numeroASerVerificado==arrayBase[arrayKeysRomanos]){
            return arrayKeysRomanos
        }
    }
}

function validadorOrdemCorreta(posicaoAnterior,posicaoAtual){
    //console.log(posicaoAnterior,posicaoAtual)
    if(posicaoAtual<posicaoAnterior-1){
        //valorDoNumero+=
        //console.log("Certo")
    }
}

function valorEmNDoObjeto (numeroAconverter,arrayBase){
    let valor=0;
            
    //console.log(keyObj,numero[key],valorDoNumero)
    for(let key in numeroAconverter){
        
        let posicaoNumeroAConverter = localizaPosicaoNumero(keysRomanos,numeroAconverter[key]);
                      

        valor+=valuesRomanos[posicaoNumeroAConverter];
            
        console.log(numeroAconverter[key],valuesRomanos[posicaoNumeroAConverter],valor)
        
    }
        
        
    
}




function geral (numero,obj){
    keysRomanos = Object.keys(obj);
    valuesRomanos = Object.values(obj);
    valorDoNumero=valorEmNDoObjeto(numero,valuesRomanos)
      
    for(let key in numero){
        let posicaoRomanoAnterior=localizaPosicaoNumero(keysRomanos,auxiliarNumeroAnterior)
        let posicaoRomanoAtual= localizaPosicaoNumero(keysRomanos,numero[key])
        validadorOrdemCorreta(posicaoRomanoAnterior,posicaoRomanoAtual)

        //comparação de romano anterior com o romano atual

        //console.log(key)

        
        
        
        auxiliarNumeroAnterior=numero[key];
    }
    
}

geral("VIII",tabelaConsulta)