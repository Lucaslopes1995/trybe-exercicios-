let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };

let obj = {
    name: 'Marta',
    lastName:'Silva',
    age: 34,
    medals: { golden: 2, 
               silver: 3 },
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
}

console.log("A jogadora "+obj.name+" "+obj['lastName']+" tem "+obj.age+" anos de idade");
console.log("A jogadora "+obj.name+" "+obj['lastName']+" foi eleita a melhor do mundo por "+obj.bestInTheWorld.length+" vezes");
console.log("A jogadora possui "+obj.medals['golden']+" medalhas de ouro e "+obj.medals.silver+' medalhas de prata.');