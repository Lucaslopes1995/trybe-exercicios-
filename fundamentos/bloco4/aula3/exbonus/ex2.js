let n=5;
let meiotriangulo="";

for(let linha=0;linha<n;linha+=1){                        //For para criação da linha
    for(let colunas=0;colunas<linha+1;colunas+=1){                //for para criação das colunas                      
        meiotriangulo+="*";
        
    }
    meiotriangulo+="\n";
}

console.log(meiotriangulo);
