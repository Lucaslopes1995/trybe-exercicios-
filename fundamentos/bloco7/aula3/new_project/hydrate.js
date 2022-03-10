let hydrate = (string) =>{
    let bebidas = string.split(" ");
    let totalBebidas=0;
    for(index=0;index<bebidas.length;index+=1){
        // console.log(parseInt(bebidas[index]))
        // console.log(isNaN(parseInt(bebidas[index])))
        if(isNaN(parseInt(bebidas[index]))){
            
            //console.log(bebidas[index])
        }else{
            totalBebidas+=parseInt(bebidas[index]);
        }
    }
    //console.log(`${totalBebidas} copos de água`)
    //console.log(bebidas)
    if(totalBebidas==1){
        return (`${totalBebidas} copo de água`)
    }else{
        return (`${totalBebidas} copos de água`)
    }
    
    
}

hydrate("1 cachaça, 5 cervejas e 1 copo de vinho")

module.exports = hydrate;