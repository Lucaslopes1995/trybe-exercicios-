// setTimeout(() => {
//     console.log('Comprar parafusos') // Comprar parafusos
//     console.log('Adicionar ao estoque') // Adicionar ao estoque
//   }, 2000);
  
//   console.log('1 - Receber roda'); // 1 - Receber roda
//   console.log('2 - Encaixar parafusos'); // 2 - Encaixar parafusos
//   console.log('3 - Fixar roda no carro'); // 3 - Fixar roda no carro

// const pushNumber = (list, number) => list.push(number);

// let numbers = [];

// setTimeout(() => pushNumber(numbers, 1), 3000);
// pushNumber(numbers, 2);
// pushNumber(numbers, 3);

// setTimeout(() => console.log(numbers), 3000);

// const despesas = [
//     {
//       gym: 99,
//     },
//     {
//       ifood: 200,
//     },
//     {
//       phone: 60,
//     },
//     {
//       internet: 100,
//     },
//   ];
  
//   const renda = 1000;

//   const despesaMensal = (renda, despesas, callback) => {

//     const despesaTotal = callback(despesas);
//     const saldoFinal = renda - despesaTotal;
  
//     console.log(`Balanço do mês:
//       Recebido: R$${renda},00
//       Gasto: R$${despesaTotal},00
//       Saldo: R$${saldoFinal},00 `);
//   };

//   //despesaMensal(renda, despesas, callback)

//   const somaDespesas = (despesas) => {
//     const custoItem = despesas.map((item) => Object.values(item));
    
//     const despesaTotal = custoItem.reduce((acc, curr) => acc += curr[0], 0);
//     return despesaTotal;
//   };
  
//   // acc é a sigla para accumulator (acumulador)
//   // curr é a sigla para current (valor atual)
  
//   //despesaMensal(renda, despesas, somaDespesas);


//   // Definição da função userFullName

//   const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
//   const userNationality = ({ firstName, lastName, nationality}) => `${firstName} is ${nationality}`;
//   const delay =({ firstName, lastName }) =>setTimeout(()=>{`Hello! My name is ${firstName} ${lastName}`



// },2000)

// Definição da função getUser
// const getUser = (callback) => {
//   const userToReturn = {
//     firstName: "Ivan",
//     lastName: "Ivanovich",
//     nationality: "Russian"
//   };
//   // Retornamos nosso parâmetro, que será uma função (callback)
//   return callback(userToReturn);
// };

// // Chamada/execução da função getUser, que vai receber como parâmetro nossa função userFullName.
// console.log(getUser(userFullName));
// console.log(getUser(userNationality));
// console.log(getUser(delay));

const countryName = ({ name }) => console.log(`Returned country is ${name}`);
const countryCurrency = ({ name, currency }) => console.log(`${name}'s currency is the ${currency}`);

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const printErrorMessage = (error) => console.log(`Error getting country: ${error}`);

const getCountry = (onSuccess,onError) => {
  setTimeout(() => {
    const didOperationSucceed = Math.random() >= 0.5;
    if(didOperationSucceed) {
      const country = {
        name: "Brazil",
        hdi: 0.759,
        currency: "Real",
      };
      onSuccess(country);
    } else {
        onError("Country could not be found");
    }
  }, delay());
};

// Deve imprimir "Returned country is Brazil" no sucesso ou "Error getting country: Country could not be found" em caso de falha
getCountry(countryName, printErrorMessage);

// Deve imprimir "Brazil's currency is the Real" no sucesso, ou "Error getting country: Country could not be found" em caso de falha
getCountry(countryCurrency, printErrorMessage);