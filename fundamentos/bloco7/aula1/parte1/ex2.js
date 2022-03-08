const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
let menorvalor=oddsAndEvens[0];
let arraycrescente=[];
let ordemcrescente = (array) => {
    for(let index =0;index<array.length;index+=1){
        //console.log(arraycrescente[arraycrescente.length-1])
        for(let index2=0;index2<array.length;index2+=1){
            if(menorvalor>array[index2] && (array[index2]>arraycrescente[arraycrescente.length-1] || index===0)){
                menorvalor= array[index2]
            }
        } 

        arraycrescente.push(menorvalor);
        menorvalor=50;
    
    }

    return arraycrescente
    
}

//console.log(oddsAndEvens); // será necessário alterar essa linha 😉

//ordemcrescente(oddsAndEvens)

ordemcrescente(oddsAndEvens)

console.log(`Os números ${arraycrescente} se encontram ordenados de forma crescente!`)