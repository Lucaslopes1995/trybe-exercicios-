let arrayvalores = [2, 4, 6, 7, 10, 0, -3]
let auxiliaMenorValor=arrayvalores[0];

function menorValor(array){
    for(let el in array){
        if(array[el]<auxiliaMenorValor){
            auxiliaMenorValor=el;
        }
    }
    console.log(auxiliaMenorValor)
}

menorValor(arrayvalores)