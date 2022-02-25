let arrayInteiros = [2, 3, 2, 5, 8, 2, 3];
let auxliaContador=0;
let numeroDoFor;
let numRepetições=0;
let numMaisRepetido=0;

function validadorMaisRepetido(array){
    for(let num=0;num<array.length;num+=1){
        

        for(let num2=num+1;num2<array.length;num2+=1){
            

            if(array[num2]==array[num]){
                auxliaContador+=1;                   
            }

        }
        if(numRepetições<auxliaContador){
            numRepetições=auxliaContador;
            numMaisRepetido=array[num];
        }
        auxliaContador=0;
        
    }
    
    console.log(numMaisRepetido)
}

validadorMaisRepetido(arrayInteiros);