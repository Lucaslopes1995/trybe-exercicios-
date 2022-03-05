let button=document.querySelector(".button");
let input=document.querySelector(".input");
button.addEventListener("click",pegaUsuario)
addEventListener("keypress",function (e){
    if(e.key=="Enter"){
        
        pegaUsuario();
    }
})


let usuarioLogado="";
//console.log(localStorage.getItem("Usuarios"))
usuarioLogado=JSON.parse(localStorage.getItem("Usuarios"))

/*let usuarios={
    usuario1:"Lucas",
    usuario2:"Fernanda",
    usuario3:"Gabriela",
}*/
//localStorage.setItem("Usuarios",JSON.stringify(usuarioLogado))
//usuarios=JSON.parse(localStorage.getItem("Usuarios"))

//if(usuarios["usuario3"],usuarioLogado)

//console.log(usuarios["usuario1"])

window.onload=validadorUsuario();


function pegaUsuario(){
    usuarioLogado=input.value
    //usuarios["usuario"]=usuarios
    input.value="";
    localStorage.setItem("Usuarios",JSON.stringify(usuarioLogado));
    validadorUsuario();
    
}
console.log(usuarioLogado,usuarioLogado=="lucas")

function validadorUsuario(){
    if(usuarioLogado=="lucas"){

        document.body.style.backgroundColor="red"
        document.body.style.color="white"
        document.body.style.fontSize=18+"px";
        document.body.style.lineHeight=23+"px";
        document.body.style.fontFamily="ariel";
    }
    if(usuarioLogado=="fernanda"){

        document.body.style.backgroundColor="green"
        document.body.style.color="black"
        document.body.style.fontSize=22+"px";
        document.body.style.lineHeight=30+"px";
        document.body.style.fontFamily="fantasy";
    }
    if(usuarioLogado=="gabriela"){

        document.body.style.backgroundColor="blue"
        document.body.style.color="yellow"
        document.body.style.fontSize=32+"px";
        document.body.style.lineHeight=37+"px";
        document.body.style.fontFamily="cursive";
    }
}