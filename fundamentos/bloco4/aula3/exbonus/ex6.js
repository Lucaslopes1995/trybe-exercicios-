let primo=15;
let validadorPrimo="é Primo";


for(let index=2;index<primo;index+=1){
    if(primo%index==0){
        validadorPrimo="Não é Primo"
    }
}

console.log("O número "+validadorPrimo)