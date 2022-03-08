
let valor=1;

let fatorial = (n) =>{
    if(n==0){
        valor=1;
    }else{
        for(let index=n;index>1;index-=1){
            valor=valor*index;
        }
    }
    return valor
}



console.log(fatorial(0))