let a=[];
let auxiliarMaior = 0;


function criaElementosArray (array,el){
    array.push(el);
}
function retornaMaiorlEmentosArray (array){
    for(let el in array){
        if(array[el]>auxiliarMaior){
            auxiliarMaior=el;
        }
    }
    console.log(auxiliarMaior)
    
}

criaElementosArray(a,2)
criaElementosArray(a,3)
criaElementosArray(a,6)
criaElementosArray(a,7)
criaElementosArray(a,10)
criaElementosArray(a,1)

retornaMaiorlEmentosArray(a)