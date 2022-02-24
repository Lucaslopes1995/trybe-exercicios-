let n=5;
let meioTriangulInvertido="";
let aux=false;

for(let linha=0;linha<n;linha+=1){  //For para criação de linhas
    for(let coluna=0;coluna<n;coluna+=1){      
        //meioTriangulInvertido+="*"; 
        if(linha%2==0){ 
            
            if(coluna==(n/2+0.5) ){
                
                meioTriangulInvertido+="*";
                aux=true;
            }else{
                meioTriangulInvertido+=" ";
            }
        
            
                //meioTriangulInvertido+="*";
                //console.log(meioTriangulInvertido)
                //console.log(linha);
              
            //console.log(meioTriangulInvertido)    
        }
    }
    meioTriangulInvertido+="\n";

}

console.log(meioTriangulInvertido)