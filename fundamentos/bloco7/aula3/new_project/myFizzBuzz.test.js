let myFizzBuzz = require('./myFizzBuzz')

describe("Requisitos Necessários",() =>{
    it("Requisito 1- Divisível por 3 e 5",() =>{
        expect(myFizzBuzz(15)).toEqual("fizzbuzz");
    })
    it("Requisito 2-Divisível só por 3",() =>{
        expect(myFizzBuzz(9)).toEqual("fizz");
    })
    it("Requisito 3 - Divisível só por 5",() =>{
        expect(myFizzBuzz(10)).toEqual("buzz");
    })
    it("Requisito 4 - Não Divisível por 3 nem por 5",() => {
        expect(myFizzBuzz(7)).toEqual(7);
    })
    it("Requisito 5 - Diferente de N",() => {
        expect(myFizzBuzz("5")).toEqual(false)
    })
})