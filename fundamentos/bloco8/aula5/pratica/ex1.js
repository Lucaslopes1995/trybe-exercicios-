const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  rectangleArea(...rectangle) // altere a chamada da funcao rectangleArea
  //console.log(rectangle[0] * rectangle[1]);
});

const somaElementos = (...elementos) => {
    return elementos.reduce(((acc,atual)=>acc+atual),0)
}

//console.log(somaElementos(...[2,5,6,10]))

const alex = {
    name: 'Alex',
    age: 26,
    likes: ['fly fishing'],
    nationality: 'Australian',
};

const gunnar = {
    name: 'Gunnar',
    age: 30,
    likes: ['hiking', 'scuba diving', 'taking pictures'],
    nationality: 'Icelandic',
};


// complete a assinatura da função abaixo
const personLikes = (pessoa) => {
    const {name, age,likes,nationality} = pessoa
    return `${name} is ${age} years old and likes ${likes.join(', ')}.`};

//console.log(personLikes(alex)); // 'Alex is 26 years old and likes fly fishing.'

//console.log(personLikes(gunnar)); // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'

const people = [
    {
      name: 'Nicole',
      bornIn: 1992,
      nationality: 'Australian',
    },
    {
      name: 'Harry',
      bornIn: 2008,
      nationality: 'Australian',
    },
    {
      name: 'Toby',
      bornIn: 1901,
      nationality: 'Australian',
    },
    {
      name: 'Frida',
      bornIn: 1960,
      nationality: 'Dannish',
    },
    {
      name: 'Fernando',
      bornIn: 2001,
      nationality: 'Brazilian',
    },
  ];
  
  // escreva filterPeople abaixo

const filterPeople = (arr) =>{
    return arr.filter(person=> (person.nationality=="Australian"&&person.bornIn<2000)).map(({nationality,bornIn})=>{
        return {nationality,bornIn}
    
    })
}

//console.log(filterPeople(people))

const myList = [1, 2, 3];

// escreva swap abaixo
const swap = ([num1,num2,num3]) => [num3,num2,num1]

//console.log(swap(myList))

const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo

const toObject = ([carro,marca,ano]) => {return {carro,marca,ano}}

//console.log(toObject(palio))

const ships = [
{
    name: 'Titanic',
    length: 269.1,
    measurementUnit: 'meters',
},
{
    name: 'Queen Mary 2',
    length: 1132,
    measurementUnit: 'feet',
},
{
    name: 'Yamato',
    length: 256,
    measurementUnit: 'meters',
},
];

// escreva shipLength abaixo

const shipLength = ({name,length}) => {
    return `${name} is ${length} meters long`
}

// console.log(shipLength(ships[0])) // 'Titanic is 269.1 meters long'
// console.log(shipLength(ships[1])) // 'Queen Mary 2 is 1132 feet long'
// console.log(shipLength(ships[2])) // 'Yamato is 256 meters long'


// escreva greet abaixo
const greet = (name,saudacao="Hi") => (`${saudacao} ${name}`)


// console.log(greet('John')) // 'Hi John'
// console.log(greet('John', 'Good morning')) // 'Good morning John'
// console.log(greet('Isabela', 'Oi')) // 'Oi Isabela'

const yearSeasons = {
    spring: ['March', 'April', 'May'],
    summer: ['June', 'July', 'August'],
    autumn: ['September', 'October', 'November'],
    winter: ['December', 'January', 'February'],
  };

const {spring,summer,autumn,winter} = yearSeasons

const months = [...spring,...summer,...autumn,...winter]

console.log(months)