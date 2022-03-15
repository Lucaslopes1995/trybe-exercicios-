const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten(arr) {
    return arrays.reduce(((a,b)=>a.concat(b)))
  }

  //console.log(flatten(arrays))

  const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // Adicione o código do exercício aqui:

  function reduceNames(arr) {
    // escreva seu código aqui
    return arr.reduce(((a,b,index,arrays)=> (index !== arrays.length-1) ? a+b.author.name+", " : a+b.author.name+"."),"")
  }

  //console.log(reduceNames(books))


function averageAge(arr) {
  // escreva seu código aqui
  return arr.reduce((a,b,index,array)=>(index!==array.length-1)?(a+(b.releaseYear-b.author.birthYear)):(a+(b.releaseYear-b.author.birthYear))/(index+1),0)
}

//console.log(averageAge(books))

function longestNamedBook(arr) {
    // escreva seu código aqui
    return arr.reduce(((ac,b)=>{
            (b.name.length>ac)? b.name.length:ac   
     return (b.name.length>ac)? b :ac
    
    }),0)
}

//console.log(longestNamedBook(books))

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
function containsA(arr) {
// escreva seu código aqui
return arr.reduce((ac,b)=>ac+b).split("").filter((word)=>word=="a" || word=="A").length
}

//console.log(containsA(names))

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage(nomes,notas) {
  // escreva seu código aqui
  return notas.map((el,index)=>{
      return {
        name:students[index],
        average:el.reduce((a,b)=>a+b)/el.length}})


}
//console.log(studentAverage(students,grades))
