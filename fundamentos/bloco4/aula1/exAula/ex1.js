let a=10;
let b=2;
let resultado;
let operador="divisão";

switch (operador){
    case "adição":
        resultado=a+b;
        break;

    case "subtração":
        resultado=a-b;
        break;
    case "multiplicação":
        resultado=a*b;
        break;  
    
    case "divisão":
        if(b==0){
            resultado="Infinito";
        }else{
        resultado=a/b;
        }
        break;   
        
    default:
        resultado="Operador Errado";    
        
}

console.log (resultado);