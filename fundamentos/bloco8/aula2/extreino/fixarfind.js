const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
  // Adiciona seu código aqui
  return numbers.find((number)=>{
    if(number%3==0 && number%5==0) {
        return true
    }else{
        return false
    }    
  })
}

console.log(findDivisibleBy3And5())