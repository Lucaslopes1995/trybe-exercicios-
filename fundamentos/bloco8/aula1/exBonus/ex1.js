const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

const danoDragon = () => Math.floor(Math.random()*(dragon["strength"]-15))+15;
const danoWarrior = () => Math.floor(Math.random()*((warrior["strength"]*warrior["weaponDmg"])-warrior["strength"]))+warrior["strength"];
const atributosMago = () =>{
    let atributosMago = {};
    if (mage["mana"]>=15){
        atributosMago["damage"]= Math.floor(Math.random()*(mage["intelligence"]*2-mage["intelligence"]))+mage["intelligence"];
        atributosMago["mana"] =mage["mana"]-15;
    }else{
        atributosMago["mensagem"]="Não possui mana suficiente";
        atributosMago["mana"]=0;
    }
    return atributosMago
}

const gameActions = {
    // Crie as HOFs neste objeto.
    warriorTurn: (danoWarrior) => {
        const dano = danoWarrior();
        dragon["healthPoints"]-=dano;
        warrior["damage"]=dano;
    },
    mageTurn: (atributosMago) => {
        const dano = atributosMago()["damage"];
        dragon["healthPoints"]-=dano;
        mage["mana"]=atributosMago()["mana"];
        mage["damage"]=dano;
        //console.log(dano);        
    },
    dragonTurn: (danoDragon) =>{
        const dano = danoDragon();
        mage["healthPoints"]-=dano;
        warrior["healthPoints"]-=dano;
        dragon["damage"]=dano;
    },
    battleMembers: () =>{
        console.log(battleMembers)
    }

  };


  gameActions.warriorTurn(danoWarrior)
  gameActions.mageTurn(atributosMago)
  gameActions.dragonTurn(danoDragon)
  gameActions.battleMembers()