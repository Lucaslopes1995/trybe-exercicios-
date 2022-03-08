let localiza = (letra,palavra,letraAAlterar) =>{
    let novaPalavra;
    for(let index=0;index<palavra.length;index+=1){
        if(palavra[index]==letra){
            console.log(palavra.split(palavra[index])[1])
            novaPalavra=palavra.split(palavra[index])[0]+letraAAlterar+palavra.split(palavra[index])[1]
        }
    }
    return novaPalavra
}

let skills =["JavaScript","Css","HTML","React", "Back"]

console.log(`${localiza("x","Tryber x aqui!","Bebeto")}! Minhas cinco principais habilidades são:\n ${skills.sort()}`)



//console.log(skills.sort())