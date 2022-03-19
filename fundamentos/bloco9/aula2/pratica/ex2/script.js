

//const fetch = require('node-fetch');



const API_URL = "https://api.coincap.io/v2/assets";

const cryptoMoedas = async () => {
    
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
    const coins = await fetch(API_URL)
        .then(response => response.json())
        .then(data => data.data)
        .catch(error => console.log('error', error));

    //console.log(coins)
    const objetoAjustado=coins.filter((el)=>parseInt(el.priceUsd)>1)
    .sort((a,b)=>parseInt(b.priceUsd)-parseInt(a.priceUsd))    
    .map((result)=>{
        parseInt(result.priceUsd)>5;
        return {moeda:result.id,"valor em dolar":result.priceUsd}
    
    })
    
    

    criaLista(objetoAjustado);
    //criaLista(objetoAjustado,"valor em dolar","tr");
    return objetoAjustado;

}



const valorMoeda = async () => {
    const baseUrl= `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest`  
    const endpoint= `/currencies/usd.min.json`
    const URLMoeda= baseUrl+endpoint;


    const moeda = await fetch(URLMoeda)
    .then((response)=>response.json())
    .then((data)=>data.usd.brl)
    .catch((error)=>console.log(`Erro: ${error.tostring()}`))
    console.log(moeda)
    return moeda
}


const criaLista = async (obj) =>{
    const cotacaomoeda = await valorMoeda();
    //console.log(cotacaomoeda)
    const body = document.body;
    const elementoTabela = document.createElement("table")
    body.appendChild(elementoTabela)
    for(let index=0;index<obj.length;index+=1){
        const eltr = document.createElement("tr")
        elementoTabela.appendChild(eltr)

        const elMoeda = document.createElement("td")
        elMoeda.innerText=obj[index]["moeda"]
        elementoTabela.appendChild(elMoeda)

        const elValor = document.createElement("td")
        elValor.innerText="U$ "+parseInt(obj[index]["valor em dolar"]).toFixed(2)
        elementoTabela.appendChild(elValor)

        const elValorreal = document.createElement("td")
        elValorreal.innerText="R$ "+parseInt(obj[index]["valor em dolar"]*parseInt(cotacaomoeda)).toFixed(2)
        elementoTabela.appendChild(elValorreal)
        
    }
    
    
}


cryptoMoedas();