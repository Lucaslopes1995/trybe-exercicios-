let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
let vectorPares=[];

function arrayOfNumbers (arrayBase){
    for (let validadorPar in arrayBase){
        //console.log(arrayBase[validadorPar][1])
        for(let arrayInterno in arrayBase[validadorPar]){
            if(arrayBase[validadorPar][arrayInterno]%2==0){
                vectorPares.push(arrayBase[validadorPar][arrayInterno]);
                //console.log(arrayBase[validadorPar][arrayInterno])
            }
        }
    }
    console.log(vectorPares)
}

arrayOfNumbers(vector);