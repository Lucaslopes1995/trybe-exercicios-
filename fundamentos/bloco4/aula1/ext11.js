let salarioBruto=2200;
let ir;
let salInssDeduzido;

if(salarioBruto<1556.95){
    salInssDeduzido=((100-8)/100)*salarioBruto;
}else if(salarioBruto>=1556.95 && salarioBruto<2594.92){
    salInssDeduzido=((100-9)/100)*salarioBruto;
}else if(salarioBruto>=2594.92 && salarioBruto<5189.82){
    salInssDeduzido=((100-11)/100)*salarioBruto;
}else{
    salInssDeduzido=salarioBruto-570.88;
}


if(salInssDeduzido<1903.98){
    ir=0;
}else if(salInssDeduzido>=1903.98 && salInssDeduzido<2826.66){
    ir=((7.5/100)*salInssDeduzido)-142.80;
}else if(salInssDeduzido>=2826.66 && salInssDeduzido<3751.05){
    ir=((15/100)*salInssDeduzido)-354.80;
}else if(salInssDeduzido>=3751.05 && salInssDeduzido<4664.68){
    ir=((22.5/100)*salInssDeduzido)-636,13;
}else{
    ir=((27.5/100)*salInssDeduzido)-869.36;
}

console.log(salInssDeduzido-ir)