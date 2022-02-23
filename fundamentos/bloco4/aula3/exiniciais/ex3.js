let array = ['java', 'javascript', 'python', 'html', 'css'];
let biggerWord=array[0];
let smallerWord=array[0];

//console.log(caracteresBiggerWord);
for(let word of array){

    //Lógica Maior word   
    if(word.length>=biggerWord.length){
        biggerWord=word;
    }

    //Lógica menor word
    if(word.length<=smallerWord.length){
        smallerWord=word;
    }
    
}
console.log("A maior palavra do array é: "+biggerWord);
console.log("A menor palavra do array é: "+smallerWord);