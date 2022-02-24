let n=19;
let meioTriangulInvertido="";
let meiostring=(n/2)-0.5;
let a=0;

for(let linha=0;linha<n;linha+=1){  //For para criação de linhas
    for(let coluna=0;coluna<n;coluna+=1){      
        
        if(linha%2==0){ 
            
            if(coluna==meiostring && linha==0){
                meioTriangulInvertido+="*";
            }else if(meiostring-a == coluna || coluna == meiostring+a){
                meioTriangulInvertido+="*";
            }else if(linha==n-1){
                meioTriangulInvertido+="*";
            }else{
                meioTriangulInvertido+=" ";
                }
            
        }else{
            meioTriangulInvertido+=" ";
        }
    }
    meioTriangulInvertido+="\n";
    a+=0.5;
    

}

console.log(meioTriangulInvertido)