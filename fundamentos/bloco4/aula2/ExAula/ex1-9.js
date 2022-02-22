let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma=0;
let media=0;
let auxmaior=numbers[0];
let auxmenor=numbers[0];
let impares=[];
let novoarray=[];

for(let index=0;index<numbers.length; index+=1){
    //console.log(numbers[index])
    soma=soma+numbers[index];
    //console.log(numbers[index])

    if(numbers[index]>auxmaior){
        console.log(numbers[index])
        auxmaior=numbers[index];
    }

    if((numbers[index]%2)==!0){
        impares.push(numbers[index])
    }else{
        impares=impares;
    }

    if(numbers[index]<auxmenor){
        auxmenor=numbers[index];
    }else{
        
    }
    
    
}
media=soma/numbers.length;
console.log("Soma: "+soma)

if(media>20){
    console.log("Média maior que 20")

}else{
    console.log("Média menor que 20")
}

console.log("O maior do array é: "+auxmaior)

for(let impar of impares){
    //console.log("Os Ímpares do array são: "+impar)
}

for(let i=1;i<26;i+=1){
    novoarray.push(i);
}
console.log("O Menor valor do array é: "+auxmenor)

console.log("O Novo Array é: "+novoarray)

for(let metade of novoarray){
    console.log("O Valor do n/2 é: "+metade/2)
}