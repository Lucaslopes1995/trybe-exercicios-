let n=5;
let meioTriangulInvertido="";
let aux=false;
let meiostring=(n/2)-0.5;
let AuxColunaMenor=meiostring-1;
let AuxColunaMaior=meiostring+1;
let a=0;

for(let linha=0;linha<n;linha+=1){  //For para criação de linhas
    for(let coluna=0;coluna<n;coluna+=1){      
        //meioTriangulInvertido+="*"; 
        if(linha%2==0){ 
            
            //console.log(a)
            if(coluna==meiostring){
                meioTriangulInvertido+="*";
            }else if(coluna == meiostring-a || coluna == meiostring+a){
                meioTriangulInvertido+="*";
            }else{
            meioTriangulInvertido+=" ";
            }
            
            
                //meioTriangulInvertido+="*";
                //console.log(meioTriangulInvertido)
                //console.log(linha);
              
            //console.log(meioTriangulInvertido)    
        }else{
            meioTriangulInvertido+=" ";
        }
    }
    aux=false;
    meioTriangulInvertido+="\n";
    AuxColunaMenor-=1;
    a+=0.5;
    

}

console.log(meioTriangulInvertido)