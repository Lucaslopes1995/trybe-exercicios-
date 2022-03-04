function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

let contadorCliques=2;
let contadorCliquesSexta=2;
let contadorCliquesDivTasks=2;
let contadorCliquesdias=2;
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const ulDays = document.querySelector("#days")

function creatElement(tagACriar,tagPai){
    let elementoACriar=document.createElement(tagACriar);
    tagPai.appendChild(elementoACriar)
    return elementoACriar;
}

function adicionaAtributo(elemento,atributo,atributoJs,style){
    elemento[atributoJs]=atributo;
    if(style=="style"){
        elemento.style[atributoJs]=atributo;
    }
}

let auxiliarClassDia=0;
for(let index=0;index<dezDaysList.length;index+=1){
    
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    let lis=[];
    
    lis[index]=creatElement('li',ulDays);
    adicionaAtributo(lis[index],dezDaysList[index],"innerText")
    
    lis[index].setAttribute("class","day "+weekDays[auxiliarClassDia])
    lis[index].addEventListener('mouseover',criaZoomMais)
    lis[index].addEventListener('mouseout',criaZoomMenos)
    lis[index].addEventListener('click',mudaCorDia)
    
    auxiliarClassDia+=1;
    if(auxiliarClassDia>6){
        auxiliarClassDia=0;
    }
}

let divFeriados=creatElement('div',document.body);
adicionaAtributo(divFeriados,"buttons-container","className")

let botaoFeriados=creatElement('button',divFeriados);
adicionaAtributo(botaoFeriados,"btn-holiday","id")
adicionaAtributo(botaoFeriados,"Feriados","innerText")


botaoFeriados.addEventListener('click',mudaCorFeriados)

function mudaCorFeriados(){
    let elementosClassFeriado=document.querySelectorAll(".holiday");
    //console.log(contadorCliques)
    
    if(contadorCliques%2==0){
        for(let index=0;index<elementosClassFeriado.length;index+=1){
            //console.log(elementosClassFeriado[index].style.backgroundColor="Blue")
            adicionaAtributo(elementosClassFeriado[index],"red","backgroundColor","style",)
            //adicionaAtributo(elementosClassFeriado[index],"rgb(238,238,238)","backgroundColor","style",)
        }

    }else{
        for(let index=0;index<elementosClassFeriado.length;index+=1){
            //console.log(elementosClassFeriado[index].style.backgroundColor="Blue")
            //adicionaAtributo(elementosClassFeriado[index],"red","backgroundColor","style",)
            adicionaAtributo(elementosClassFeriado[index],"rgb(238,238,238)","backgroundColor","style",)
        }
    }
    contadorCliques+=1
}

let divSextaFeira=creatElement('div',document.body);
adicionaAtributo(divFeriados,"buttons-container","className")

let botaoSextaFeira=creatElement('button',divSextaFeira);
adicionaAtributo(botaoSextaFeira,"btn-friday","id")
adicionaAtributo(botaoSextaFeira,"Sexta-Feira","innerText")

botaoSextaFeira.addEventListener('click',mudaCorSexta)


function mudaCorSexta(){
    let elementoClassSexta=document.querySelectorAll(".Sexta");
    //console.log(contadorCliquesSexta)
    
    if(contadorCliquesSexta%2==0){
        for(let index=0;index<elementoClassSexta.length;index+=1){
            //console.log(elementoClassSexta[index].style.backgroundColor="Blue")
            adicionaAtributo(elementoClassSexta[index],"red","backgroundColor","style",)
            //adicionaAtributo(elementoClassSexta[index],"rgb(238,238,238)","backgroundColor","style",)
        }

    }else{
        for(let index=0;index<elementoClassSexta.length;index+=1){
            //console.log(elementoClassSexta[index].style.backgroundColor="Blue")
            //adicionaAtributo(elementoClassSexta[index],"red","backgroundColor","style",)
            adicionaAtributo(elementoClassSexta[index],"rgb(238,238,238)","backgroundColor","style",)
        }
    }
    contadorCliquesSexta+=1
}

function criaZoomMais(){
    event.target.style.width=240+"px";
}

function criaZoomMenos(){
    event.target.style.width=123+"px";
}

let divTarefas= document.querySelector(".my-tasks");
let inputsTarefas= document.querySelector("#task-input");
let botaoAddTarefas= document.querySelector("#btn-add");
botaoAddTarefas.addEventListener('click',adicionanaDiv);
document.addEventListener('keypress',function(e){
    //console.log(e);
    if (e.key==="Enter"){
        adicionanaDiv();
    }

});

function adicionanaDiv(){
    if(inputsTarefas.value!==""){
        let elementSpan = creatElement('span',divTarefas);
        elementSpan.innerText=inputsTarefas.value;
        inputsTarefas.value="";
        
        let elementDiv = creatElement('div',divTarefas);
        let elementBr = creatElement('br',divTarefas);
        elementDiv.className="task";
        elementDiv.style.backgroundColor="blue";
        elementDiv.addEventListener('click',selecionoutask)
    }else{
        alert("Adicione um Compromisso antes de Clicar")
    }
}

function selecionoutask(){
    if(contadorCliquesDivTasks%2==0){
        event.target.className="task selected"
    }else{
        event.target.className="task"
    }
    contadorCliquesDivTasks+=1;    
}

function mudaCorDia(){
    
    console.log(contadorCliquesdias)
    if(contadorCliquesdias%2==0){
        event.target.style.color="blue";
        
    }else{
        event.target.style.color="rgb(119,119,119)";
    }
    contadorCliquesdias+=1;
}