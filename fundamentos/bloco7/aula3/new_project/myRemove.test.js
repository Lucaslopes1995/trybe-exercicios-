let myRemove= require("./myRemove");

describe("Requisitos Necessários",()=>{
    it("Requisito1 Retorna Array",() => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([ 1, 2, 4 ])
    });
    it("Requisito 2 - Verificar Valor Errado",()=>{
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
    })
    it("Requisito 3 - Validação com N que não exite",() =>{
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
    })
});