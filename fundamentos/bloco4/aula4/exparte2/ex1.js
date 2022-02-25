let validadorPalindromo=false;
let palavraInvertidaarray;
let palavraInvertidastring="";
let teste = []

function verificaPalindrome (palavra){
    let palavraParaArray=[];
    for (let word of palavra){
        palavraParaArray.push(word)
    }
    palavraInvertidaarray = palavraParaArray.reverse()
    for(let word of palavraInvertidaarray){
        palavraInvertidastring+=word;
    }
    
    if(palavra==palavraInvertidastring){
        validadorPalindromo=true;
    }else{
        validadorPalindromo=false;
    }
    console.log(validadorPalindromo)

}

verificaPalindrome ('reviver');