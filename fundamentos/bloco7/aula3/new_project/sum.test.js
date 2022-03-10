const sum = require('./sum')

describe('Requisitos necessários', () => {
  it('Requisito 1 - 4+5=9',()=>{
    expect(sum(4,5)).toEqual(9);
  });
  it('Requisito 2 - 0+0=0',()=>{
    expect(sum(0,0)).toEqual(0);
  });
  it('Testa se Manda o Erro ao Colocar String',()=>{
    expect(() => {sum(4,"5")}).toThrow();
  });
  it('Testa a Mensagem do Erro',()=>{
    expect(() => {sum(4,"5")}).toThrow(new Error("parameters must be numbers"));
  });
});