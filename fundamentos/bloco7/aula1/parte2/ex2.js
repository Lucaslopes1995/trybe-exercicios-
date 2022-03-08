let longestWord = frase => {
    let palavras = frase.split(" ");
    let maiorPalavra=palavras[0];
    for(let index =0;index<palavras.length;index+=1){
        if(maiorPalavra.length<palavras[index].length){
            maiorPalavra=palavras[index];
        }
    }
    return(maiorPalavra)
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'))