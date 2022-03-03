let tagsli=[];
let tagsh3=[];



let tagh1 = document.createElement('h1');
tagh1.innerText="Exercício 5.2 - JavaScript DOM "

document.body.appendChild(tagh1)

let tagmain = document.createElement('main');
tagmain.className="main-content";

document.body.appendChild(tagmain);

function criaElemento(tagasercriada,atributo,atributojs,variavelpai){
    let tagParaAdicao=document.createElement(tagasercriada);
    tagParaAdicao[atributojs]=atributo;

    variavelpai.appendChild(tagParaAdicao)

    return tagParaAdicao;
}

let tagsection=criaElemento("section","main-content","className",document.body)
let tagp =criaElemento("p","Olha","innerText",tagsection)
let sectionleftContent =criaElemento("section","left-content","className",tagmain)
let sectionRightontent =criaElemento("section","right-content","className",tagmain)
let imageLeft =criaElemento("img","https://picsum.photos/200","src",sectionleftContent)
imageLeft.className="small-image";

let tagul =criaElemento("ul","classul","className",sectionRightontent)



for(let index=1;index<=10;index+=1){
    
    
    tagsli[index]=criaElemento("li",index,"innerText",tagul)
}

for(let index=0;index<3;index+=1){
    
    tagsh3[index]=criaElemento("h3","description","className",tagmain)
    tagsh3[index].innerText=index;
}

tagh1.className="title"

tagmain.removeChild(sectionleftContent)

sectionRightontent.style.marginRight="Auto"

tagmain.style.backgroundColor="green"

tagul.removeChild(tagsli[9])
tagul.removeChild(tagsli[10])