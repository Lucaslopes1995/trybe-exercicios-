// apiScript.js
//const fetch = require('node-fetch');
const API_URL = 'https://icanhazdadjoke.com/';



const fetchJoke = async () => {
  // Adicionar lógica aqui!

  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  const result = await fetch(API_URL,myObject).then((response)=>response.json())
  .then((data)=>{document.getElementById("jokeContainer").innerHTML=`<h3>${data.joke}</h3>`; console.log(data)})
  .catch((error)=>`Algo deu errado:/ ${error}`)
    
};


window.onload = () => fetchJoke();
