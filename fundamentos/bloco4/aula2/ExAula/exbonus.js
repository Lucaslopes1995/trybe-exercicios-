let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersaux = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; //como fazer para copiar o array para cá, sem alterar ele?
let numbersauxmenor = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let auxsplice;
let auxsplicemenor;
let novoarray=[];
let arraymaior=[];
let arraymenor=[];
let auxmaior=numbers[0];
let auxmenor=numbers[0];

for(let index1=0;index1<numbers.length;index1+=1){
    if(index1<(numbers.length-1)){
        novoarray.push(numbers[index1]*numbers[index1+1]);
    }else if(index1==(numbers.length-1)){
        novoarray.push(numbers[index1]*2);
    }    
    // Parte Maior

    
    for(let index2=0;index2<numbersaux.length;index2+=1){
        if(numbersaux[index2]>=auxmaior){
            auxmaior=numbersaux[index2];
            auxsplice=index2
        
        }
    }

    arraymaior.push(auxmaior)
    numbersaux.splice(auxsplice,1)
    
    auxmaior=numbersaux[0];


    //Part Menor
    for(index3=0;index3<numbersauxmenor.length;index3+=1){
        if(numbersauxmenor[index3]<=auxmenor){
            auxmenor=numbersauxmenor[index3];
            auxsplicemenor=index3;
        }
    }    

    
    
    arraymenor.push(auxmenor)
    numbersauxmenor.splice(auxsplicemenor,1)

    auxmenor = numbersauxmenor[0];
}




console.log("Array Decrescente: "+arraymaior)
console.log("Array Crescente: "+arraymenor)
console.log("Novo Array: "+novoarray)
