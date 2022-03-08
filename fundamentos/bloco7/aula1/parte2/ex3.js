let botao = document.querySelector("button");
let clickCount=0;

let paragrafo=document.createElement("p");
document.body.appendChild(paragrafo)

botao.addEventListener('click', ()=>{
    clickCount+=1;
    console.log(clickCount)
    paragrafo.innerText=clickCount;
})


