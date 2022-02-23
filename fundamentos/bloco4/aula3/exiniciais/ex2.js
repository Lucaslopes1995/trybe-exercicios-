let word = 'tryber';
let wordReverse="";
let auxarray=0;




for(let index=(word.length-1);index>=0;index-=1){
    wordReverse=wordReverse+word[index];
    auxarray=auxarray+1;
}

console.log("A palavra "+word+" ao contrário é: "+wordReverse)