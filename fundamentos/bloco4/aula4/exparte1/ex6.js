let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

function mensagemLivroFavorito (objeto){
    for(let livrosfav in objeto.livrosFavoritos){
        console.log("O livro favorito de "+objeto.nome+" "+objeto.sobrenome+" se chama "+objeto.livrosFavoritos[livrosfav].titulo)
        console.log("");
    }
    
}

function criarLivroFavorito(obj,titulo,autor,editora){
    obj.livrosFavoritos.push({
        "titulo":titulo,
        "autor":autor,
        "editora":editora
    })
    console.log(obj.livrosFavoritos[obj.livrosFavoritos.length-1])
    
}

function contalivros(obj){
    console.log(obj.nome+" tem "+obj.livrosFavoritos.length+" livros favoritos")
}

criarLivroFavorito (leitor,"Harry Potter e o Prisioneiro de Azkaban","JK Rowling","Rocco")
mensagemLivroFavorito (leitor)
contalivros (leitor)

