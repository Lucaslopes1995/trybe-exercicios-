let techList = (array,name) => {
    let arraySaida = [];
    array.sort();
    if(array.length==0){
        return 'Vazio!'
    }else{
        for(let index=0;index<array.length;index+=1){
            //console.log(arraySaida[0]["tech"])
            arraySaida[index]=new Object();
            arraySaida[index]["tech"]=array[index];
            arraySaida[index]["name"] = name;
            
            
            
        }
        
        return arraySaida
    }   
}
console.log(techList([],"lucas"))
module.exports = techList;