const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  // Adicione seu código aqui:
  return names.find((elemento)=> {
      if(elemento.length==5){
          return true
      }
})
}

console.log(findNameWithFiveLetters());