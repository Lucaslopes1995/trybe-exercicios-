let palavraAuxiliar="";
let palavracompletaDivida="";
let juntarArrayparavalidar="";

function verificaFimPalavra(palavracompleta,palavramenor){
    palavracompletaDivida =palavracompleta.split([palavramenor]);
    juntarArrayparavalidar=palavracompletaDivida.join().replace(",","")

    //console.log(palavracompletaDivida,juntarArrayparavalidar)


    if(palavracompletaDivida[1] == ""){
        console.log("É o final")
    }else{
        console.log("A palavra 2 não é o final da 1")
    }
}

verificaFimPalavra("trybe","be")

