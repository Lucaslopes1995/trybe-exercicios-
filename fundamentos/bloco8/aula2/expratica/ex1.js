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
  function authorBornIn1947(arr,year) {
   return arr.find((obj)=>obj.author.birthYear==year).name
  }
  //console.log(authorBornIn1947(books,1890))

  function smallerName(arr) {
    let nameBook="ab";
    // escreva aqui o seu código
    
    arr.forEach(element => {
        //console.log(element.name.length,nameBook.length)
        if(element.name.length>nameBook.length){
            nameBook=element.name
        }
        
    });



    // Variável nameBook que receberá o valor do menor nome;
    return nameBook;
  }

  //console.log(smallerName(books))

  const expectedResult = {
    author: {
      birthYear: 1948,
      name: 'George R. R. Martin',
    },
    genre: 'Fantasia',
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    releaseYear: 1991,
  };
  
  function getNamedBook(arr,n) {
    // escreva seu código aqui
   return arr.find((obj)=>obj.name.length==26)
   
  }

   //console.log(getNamedBook(books))

   function booksOrderedByReleaseYearDesc(arr) {
    // escreva aqui seu código

    return arr.sort((a,b)=>b.releaseYear-a.releaseYear)
  }

  //console.log(booksOrderedByReleaseYearDesc(books))



function everyoneWasBornOnSecXX(arr) {
  // escreva seu código aqui
    return arr.every((obj)=>obj.author.birthYear>1900 &&obj.author.birthYear<2000)

}

//console.log(everyoneWasBornOnSecXX(books))



function someBookWasReleaseOnThe80s(arr) {
  // escreva seu código aqui
  return arr.some((obj)=>obj.releaseYear>=1980 && obj.releaseYear<1990)
}

//console.log(someBookWasReleaseOnThe80s(books))

//books[3].author.birthYear=1947

function authorUnique(arr) {
  // escreva seu código aqui
  let contador =0;
  let validador=true;

  arr.forEach(element => {
      
      let dataNascimentoElAtual= element.author.birthYear
      
      arr.forEach(element1 =>{
        if(element1.author.birthYear==dataNascimentoElAtual){
            contador+=1;
        }
      })
      
      if(contador>=2){
        validador=false;
        return validador
      }
      contador=0;
  })
  return validador
}

//console.log(authorUnique(books))


//books[3].author.birthYear=1947
function resp() {
    return books.every((book) =>
    !books.some((bookSome) =>
    (bookSome.author.birthYear === book.author.birthYear)
    && (bookSome.author.name !== book.author.name)));
}

console.log(resp(books))