let elementoOndeVoceEsta = document.querySelector("#elementoOndeVoceEsta")
elementoOndeVoceEsta.parentElement.style.backgroundColor="blue"
elementoOndeVoceEsta.firstElementChild.innerText="Primeiro Filho do Filho"

let pai = document.querySelector("#pai")

pai.firstElementChild.innerText="primeiroFilho"

elementoOndeVoceEsta.previousElementSibling.style.backgroundColor="red"

elementoOndeVoceEsta.nextSibling

elementoOndeVoceEsta.nextElementSibling

pai.children[2];

let irmaoElementOndeVoceEsta=document.createElement('section');
irmaoElementOndeVoceEsta.innerText="Eu Sou o Irmão do ElementoOndeVocêEstá";
irmaoElementOndeVoceEsta.id="irmaoElementOndeVoceEsta"
elementoOndeVoceEsta.parentNode.appendChild(irmaoElementOndeVoceEsta)

let filhoElementOndeVoceEsta = document.createElement('section');
filhoElementOndeVoceEsta.innerText="Eu Sou o Filho do ElementoOndeVocêEstá";
filhoElementOndeVoceEsta.id="filhoElementOndeVoceEsta"
elementoOndeVoceEsta.appendChild(filhoElementOndeVoceEsta)

let primeirofilhododofilhodoElementOndeVoceEsta = document.createElement('p');
primeirofilhododofilhodoElementOndeVoceEsta.innerText="Eu Sou o primeirofilhododofilhodoElementOndeVoceEsta";
primeirofilhododofilhodoElementOndeVoceEsta.id="primeirofilhododofilhodoElementOndeVoceEsta"
elementoOndeVoceEsta.firstElementChild.appendChild(primeirofilhododofilhodoElementOndeVoceEsta)

primeirofilhododofilhodoElementOndeVoceEsta.parentNode.parentNode.nextElementSibling.style.backgroundColor="pink"
primeirofilhododofilhodoElementOndeVoceEsta.parentNode.parentNode.nextElementSibling.innerText="Terceiro Filho"

//pai.removeChild(elementoOndeVoceEsta)

let primeirofilhodofilho =document.querySelector("#primeiroFilhoDoFilho")
primeirofilhodofilho.removeChild(primeirofilhododofilhodoElementOndeVoceEsta)


let filhosElementoOndeVoceEsta = elementoOndeVoceEsta.children;
for(let index=0;index<filhosElementoOndeVoceEsta.length;index+=1){
    //console.log(elementoOndeVoceEsta.childNodes[index])
    //console.log(filhosElementoOndeVoceEsta[index])
    //console.log(filhosElementoOndeVoceEsta[index].id!="primeiroFilhoDoFilho")
    if(elementoOndeVoceEsta.children[index].id!="primeiroFilhoDoFilho"){
        //console.log(filhosElementoOndeVoceEsta[index])
        //elementoOndeVoceEsta.removeChild(filhosElementoOndeVoceEsta[index]);
    }
}

let filhosDoPai =pai.children;

for(let index =0;index<filhosDoPai.length;index+=1){
    console.log(filhosDoPai[index]);
    console.log(filhosDoPai[index].id!="elementoOndeVoceEsta")
    if(filhosDoPai[index].id!="elementoOndeVoceEsta"){
        pai.removeChild(filhosDoPai[index]);
    }
}


