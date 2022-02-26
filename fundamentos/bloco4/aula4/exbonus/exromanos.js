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
let valorTotalDoNumeroRomano=0;
let validarordem=true;

function localizaPosicaoNumero(arrayBase,numeroASerVerificado){
    for(let arrayKeysRomanos=0;arrayKeysRomanos<arrayBase.length;arrayKeysRomanos+=1){
        if(numeroASerVerificado==arrayBase[arrayKeysRomanos]){
            return arrayKeysRomanos
        }
    }
}

function validadorOrdemCorreta(posicaoAnterior,posicaoAtual,authenticacaoPrimeiroNumero){
    //console.log(posicaoAnterior,posicaoAtual)
    //console.log(posicaoAtual,posicaoAnterior)

    
    if(posicaoAtual<=posicaoAnterior || authenticacaoPrimeiroNumero==0){
        
        valorTotalDoNumeroRomano+=valuesRomanos[posicaoAtual];
        //console.log(posicaoAnterior,posicaoAtual,validarordem,valorTotalDoNumeroRomano,"OK",posicaoAnterior+1==posicaoAtual)
        
    }else if(posicaoAnterior+1==posicaoAtual){
        valorTotalDoNumeroRomano=valorTotalDoNumeroRomano-(2*valuesRomanos[posicaoAnterior])+valuesRomanos[posicaoAtual];
        //console.log(posicaoAnterior,posicaoAtual,validarordem,valorTotalDoNumeroRomano,"Anterior")
    }else if(posicaoAtual>posicaoAnterior+1){
        validarordem=true;
        valorTotalDoNumeroRomano=valorTotalDoNumeroRomano-(2*valuesRomanos[posicaoAnterior])+valuesRomanos[posicaoAtual];
        //console.log(posicaoAnterior,posicaoAtual,validarordem,valorTotalDoNumeroRomano,"Errado")
        
    }
    //console.log(posicaoAnterior,posicaoAtual,validarordem,valorTotalDoNumeroRomano,"Primeiro",posicaoAtual+1)
    return validarordem;
    
}

function valorEmNDoObjeto (numeroAconverter,arrayBase){
    
            
    //console.log(keyObj,numero[key],valorDoNumero)
    for(let key in numeroAconverter){
                
        let posicaoRomanoAnterior=localizaPosicaoNumero(keysRomanos,auxiliarNumeroAnterior)
        let posicaoRomanoAtual= localizaPosicaoNumero(keysRomanos,numeroAconverter[key])

        //valorTotalDoNumeroRomano+=valuesRomanos[posicaoRomanoAtual];
            
        //console.log(numeroAconverter[key],valuesRomanos[posicaoRomanoAtual],valor)

        
        validadorOrdemCorreta(posicaoRomanoAnterior,posicaoRomanoAtual,key)

        //comparação de romano anterior com o romano atual


        
        
        
        auxiliarNumeroAnterior=numeroAconverter[key];
        
    }
        
        
    
}




function geral (numero,obj){
    keysRomanos = Object.keys(obj);
    valuesRomanos = Object.values(obj);
    valorDoNumero=valorEmNDoObjeto(numero)


    console.log("O Valor de "+numero+" em Decimal é "+valorTotalDoNumeroRomano);
    
      
}

geral("IL",tabelaConsulta)