const checaNumero = (numero,numeroSorteado) => numero == numeroSorteado




let validaSorteio = (numero,callback) => {
    let numSorteado = Math.floor(Math.random()*6);

    return callback(numero,numSorteado) ? "Parabéns você ganhou" : "Tente novamente";
}

console.log(validaSorteio(2,checaNumero))