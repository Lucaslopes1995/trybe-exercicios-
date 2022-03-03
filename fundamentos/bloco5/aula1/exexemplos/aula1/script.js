document.querySelector("#header-container").style.backgroundColor="green"

let divsUrgentes = document.querySelectorAll(".emergency-tasks");
divsUrgentes[0].style.backgroundColor = "pink"
let h3Urgentes = document.querySelectorAll(".emergency-tasks h3");
for(let el=0;el<h3Urgentes.length;el+=1){
    h3Urgentes[el].style.backgroundColor = "purple"
}

let divsNaoUrgentes = document.querySelectorAll(".no-emergency-tasks");
divsNaoUrgentes[0].style.backgroundColor = "yellow"
let h3NaoUrgentes = document.querySelectorAll(".no-emergency-tasks h3");
for(let el=0;el<h3Urgentes.length;el+=1){
    h3NaoUrgentes[el].style.backgroundColor = "black"
}


let footer = document.querySelectorAll("#footer-container");
footer[0].style.backgroundColor = "green"
