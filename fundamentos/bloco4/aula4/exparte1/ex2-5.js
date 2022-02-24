let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
let info2 ={};

function novoElemento(objeto,nomeElemento,valorElemento){
    objeto[nomeElemento]=valorElemento;
}

function boasVindas (nome){
    console.log("Bem-vinda, "+info.personagem)
}  

function encontrandoChaves (objeto){
    for(let elementos in objeto){
        console.log(elementos)
    }
}

function encontrandoValores (objeto){
    for(let elementos in objeto){
        console.log(objeto[elementos])
    }
}

function impressaoMensagem (obj1,obj2){
    for(let el in obj1){
        console.log(obj1[el]+" e "+obj2[el]);
    }
    
}

novoElemento(info,"recorrente","Sim")

novoElemento(info2,"personagem","Tio Patinhas")
novoElemento(info2,"origem",'Christmas on Bear Mountain, Dell\'s Four Color Comics #178')
novoElemento(info2,"nota",'O último MacPatinhas')
novoElemento(info2,"recorrente","Sim")


impressaoMensagem (info,info2);
//info.recorrente="Sim";
//boasVindas(info)
//encontrandoChaves (info)
//encontrandoValores(info2);
//console.log(info)