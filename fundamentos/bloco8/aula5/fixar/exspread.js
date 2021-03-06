// Faça uma lista com as suas frutas favoritas
const specialFruit = ['melancia', 'uva', 'goiaba'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['abacaxi', 'banana', 'melão'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...fruit,additional]
};

//console.log(fruitSalad(specialFruit, additionalItens));

const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];

//console.log(imc(...patientInfo)); // 20.76


const user = {
name: 'Maria',
age: 21,
nationality: 'Brazilian',
};
  
const jobInfos = {
profession: 'Software engineer',
squad: 'Rocket Landing Logic',
squadInitials: 'RLL',
};
const testeKeys= Object.keys({...user,...jobInfos});
const {name,age,nationality,profession,squad,squadInitials} = {...user,...jobInfos}

//console.log({...user,...jobInfos}) //parte 1

//console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`)

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

//saudacoes[1](saudacoes[0]); // Olá

//const [el1,el2] = saudacoes

//el2(el1)

// Produza o mesmo resultado acima, porém utilizando array destructuring

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

[comida,animal,bebida] = [bebida,comida,animal]

//console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

[a,b,c,...numerosPares] = numerosPares;

//console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

const getNationality = ({ firstName, nationality ="Brazilian"}) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

///console.log(getNationality(otherPerson)); // Ivan is Russian
//console.log(getNationality(person));

const getPosition = (latitude, longitude) => ({
  latitude,
  longitude});

//console.log(getPosition(-19.8157, -43.9542));

const multiply = (number=1, value=1) => {
  // Escreva aqui a sua função
  return number*value
};

console.log(multiply(8));

