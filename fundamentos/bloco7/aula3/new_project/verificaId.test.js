const searchEmployee = require('./verificaId.js')


describe("Requisições de Teste", ()=>{
    it("Requisição 1: Verifica se a Função é Definida",()=>{
        expect(searchEmployee).toBeDefined();
    })
    it("Requisição 2: Verifica se a Função searchEmployee é Função",()=>{
        expect(typeof(searchEmployee)).toBe("function");
    })
    it("Requisição 3: Verifica se Retorno de Specialities é Array",()=>{
        expect(typeof(searchEmployee("5569-4","specialities"))).toBe("object");
    })
    it("Requisição 4: Verifica Id e Detalhe Correto",()=>{
        expect(searchEmployee("8579-6","lastName")).toEqual("Gates")
    })
    it("Requisição 5: Verifica Id e Detalhe Correto",()=>{
        expect(searchEmployee("5569-4","specialities")).toEqual(['Frontend', 'Redux', 'React', 'CSS'])
    })
    it("Requisição 6: Verifica Id e Detalhe Correto",()=>{
        expect(searchEmployee("4456-4","firstName")).toEqual("Leila")
    })
    it("Requisição 7: Verifica Id e Detalhe Correto",()=>{
        expect(searchEmployee("1256-4","specialities")).toEqual(['Hooks', 'Context API', 'Tailwind CSS'])
    })
    it("Requisição 8: Verifica Id Errado",()=>{
        expect(searchEmployee("1256-41","specialities")).toEqual("ID não identificada")
    })
    it("Requisição 9: Verifica Id Errado",()=>{
        expect(searchEmployee("12256-4","firstName")).toEqual("ID não identificada")
    })
    it("Requisição 10: Verifica Id Errado",()=>{
        expect(() =>{searchEmployee("1256-41","specialitiesa")}).toThrowError(new Error ("Informação indisponível" ))
    })

})