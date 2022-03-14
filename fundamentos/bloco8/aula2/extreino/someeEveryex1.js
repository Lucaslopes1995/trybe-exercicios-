const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  //Adicione seu código aqui
  return arr.some((nome,indice,teste)=> {
        //console.log(nome,indice,teste,name,nome==name)
        return nome==name ? true : false;
  })  
}

console.log(hasName(names, 'Ana'))