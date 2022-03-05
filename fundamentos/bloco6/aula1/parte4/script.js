// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

HREF_LINK.addEventListener('click',function pausaclick(){
    event.preventDefault();
    window.location.href="https://www.google.com/"
})

INPUT_CHECKBOX.addEventListener('click',function paraselecao(){
    event.preventDefault();
    console.log(event.target)
    //event.target.value="checked"
})

INPUT_TEXT.addEventListener('keypress',function selecionaletra(e){
    event.preventDefault();
    if(e.key=="a"){
        event.target.value+=e.key
    }else{
        event.target.value+=""
    }
})