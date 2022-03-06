let botaoEnviar = document.querySelector("#botaoEnviar");
let inputImagem = document.querySelector("#checkbox2");
let inputNome = document.querySelector("#name");
let inputEmail = document.querySelector("#email");

//document.getElementById('myInputId').DatePickerX.init();

botaoEnviar.addEventListener('click',function cancelaEnvio(){
    if(inputImagem.checked){
        validadorcaracteres()
    }else{
        event.preventDefault();
    }

})

function validadorcaracteres (){
    console.log(inputNome)
    if(inputNome.value.length<=10 || inputNome.value.length>=40 ){
        alert("O número de Caracteres do Nome precisa estar entre 10 e 40 Caracteres")
    }else if(inputEmail.value.length<=10 || inputEmail.value.length>=40 ){
        alert("O número de Caracteres do Email precisa estar entre 10 e 50 Caracteres")
    }else{
        alert("Dados Enviados com Sucesso")
    }
}