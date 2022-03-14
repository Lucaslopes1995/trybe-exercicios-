const people = [
    { name: 'Mateus', age: 22 },
    { name: 'José', age: 118 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 33 },
    { name: 'Bruna', age: 42 },
  ];
  
  const verifyAges = (arr, minimumAge) => {
    //Adicione seu código aqui

    return arr.every((obj)=> obj["age"]>=minimumAge)
  }
  
  console.log(verifyAges(people, 22));