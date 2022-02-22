const valorCusto=50;
const valorVenda=150;
let valorCustoTotal;
let impostoSobreOCusto;
let lucro;

if(valorCusto<0 ||valorVenda<0){
    console.log("Valores de Entradas Errados")
}else{
    impostoSobreOCusto = 0.2*valorCusto;
    valorCustoTotal = valorCusto + impostoSobreOCusto;
    lucro = valorVenda - valorCustoTotal;
    console.log(lucro);
}