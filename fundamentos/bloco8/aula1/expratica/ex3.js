const RightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const StudentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const countAnswers = (arrayRestostas,ArrayEstudante,callback) => {
    let total =0;
    for(let index=0;index<arrayRestostas.length;index+=1){
        //console.log(arrayRestostas[index],ArrayEstudante[index],total)
        total = callback(arrayRestostas[index],ArrayEstudante[index],total)
        //console.log(arrayRestostas[index],ArrayEstudante[index],total)
    }
    return total
}

const checkAnswers = (respostacerta,respostaEstudante,total) => {
    
    return (respostaEstudante=="N.A") ? total=total : ((respostacerta==respostaEstudante) ? total+=1 : total-= 0.5)

}


console.log(`A Nota do Estudante é: ${countAnswers(RightAnswers,StudentAnswers,checkAnswers)}`)