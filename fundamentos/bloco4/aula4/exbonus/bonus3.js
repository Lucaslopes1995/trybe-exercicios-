const basket = [
    'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
    'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
    'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
    'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
    'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
    'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
    'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
    'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
    'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
    'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
    'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
    'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
    'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
    'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
    'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
    'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
    'Banana', 'Pera', 'Abacate', 'Uva'
  ];
let contFrutas=0;
let frutaEQuantidade={};


function contadorFrutas(arrayBase){
    let frutaAtual=arrayBase[0];
    for(let fruta=0;fruta<arrayBase.length;fruta+=1){
        //console.log(frutaAtual,arrayBase[fruta],contFrutas)
        for(let frutaInterna=fruta;frutaInterna<arrayBase.length;frutaInterna+=1){
            //console.log(frutaAtual,fruta,frutaInterna,arrayBase[frutaInterna],contFrutas,frutaNaoExiste(frutaEQuantidade,arrayBase[fruta]))
            if(frutaAtual==arrayBase[frutaInterna] && ( contFrutas!==0 || frutaNaoExiste(frutaEQuantidade,arrayBase[fruta]))){
                contFrutas+=1;
                frutaEQuantidade[arrayBase[fruta]] = contFrutas;
                //console.log(frutaAtual,frutaInterna,arrayBase[frutaInterna],contFrutas,frutaNaoExiste(frutaEQuantidade,arrayBase[fruta]))
                //console.log(frutaEQuantidade)
            }
            
        }
        contFrutas=0;
        frutaAtual=arrayBase[fruta+1];
        
    }
    console.log(frutaEQuantidade)
}

function frutaNaoExiste (objAVerificar,frutaASerVerificada){
    let AuxiliarvalidadorFrutaExiste=true;
    for (let frutaExiste in Object.keys(objAVerificar)){
        //console.log(frutaExiste,Object.keys(objAVerificar))
        if(frutaASerVerificada==Object.keys(objAVerificar)[frutaExiste]){
            AuxiliarvalidadorFrutaExiste = false;
        }
    }
    return AuxiliarvalidadorFrutaExiste
}


contadorFrutas(basket);