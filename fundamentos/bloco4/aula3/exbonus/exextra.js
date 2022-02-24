let n=5;
let meioTriangulInvertido="";

for(let linha=0;linha<n;linha+=1){  //For para criação de linhas
    for(let coluna=n;coluna>0;coluna-=1){
        if(coluna<linha+1){
            meioTriangulInvertido+=" ";
            //console.log(meioTriangulInvertido)    
        }else{
            meioTriangulInvertido+="*";
        }
    }
    meioTriangulInvertido+="\n";

}

console.log(meioTriangulInvertido)