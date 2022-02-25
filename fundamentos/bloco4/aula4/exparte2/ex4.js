let arrayNomes=['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
let maiorNome=arrayNomes[0];

function encontraMaiorNome(array){
    for(let nomes in array){
        if(maiorNome.length<array[nomes].length){
            maiorNome=array[nomes];
            //console.log(nomes)
        }
        //console.log(array[nomes])
    }

    console.log(maiorNome)
}

encontraMaiorNome (arrayNomes)