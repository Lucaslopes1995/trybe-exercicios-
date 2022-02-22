const a =15;
const b =215;
const c =25;

if(a>b && a>c){
    console.log ("A é o Maior");
}else if(b>a && b>c){
    console.log ("B é o Maior");
} else if(c>a && c>b){
    console.log ("C é o Maior");
}else if(c==a && c==b){
    console.log ("Todos são iguais");
}else{
    console.log ("Erro");
}

console.log(a,b,c)
