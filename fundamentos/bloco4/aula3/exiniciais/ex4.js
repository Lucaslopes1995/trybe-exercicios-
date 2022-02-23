let primo=1000;
let maiorprimo=1;
let naoPrimo=0;

for(let index=3;index<primo;index+=1){
    naoPrimo=0;

    for(let index2=2;index2<index;index2+=1){
        //console.log(index2)
        if(index%index2==0){
            maiorprimo=index;
            naoPrimo=1;
        }
    }
    
    if(naoPrimo==0){
        maiorprimo=index;
    }
}

console.log("O maior número primo menor que "+primo+" é:"+maiorprimo)