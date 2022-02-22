let weekDay="sábado";
let message="";

if(weekDay=="segunda-feira" || weekDay=="terça-feira" || weekDay=="quarta-feira"|| weekDay=="quinta-feira" || weekDay=="sexta-feira"){
    message= "Oba, mais um dia de aprendizado na Trybe >:D";
}else if(weekDay=="sábado" || weekDay=="domingo"){
    message="FINALMENTE, descanso merecido UwU";
}else{
    message="Dia da Semana Errado"
}

console.log(message);