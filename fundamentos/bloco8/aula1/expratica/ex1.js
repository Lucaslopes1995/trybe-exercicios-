const newEmployees = (callback,name) => {
    const employees = {
      id1: callback("Pedro Guerra"),
      id2: callback("Luiza Drumond"), 
      id3: callback("Carla Paiva"), 
    }
    return employees;
  };

  const geraEmail = (name) => {
      //console.log(name)
      let arraynome = name.toLowerCase().split(" ")
      let email =arraynome.join("_")+"@trybe.com"
      //console.log(email)
      return {"Fullname":name,"email":email}
  }

   //newEmployees["id1"](geraEmail("Pedro Guerra"));
//    newEmployees["id2"](geraEmail("Luiza Drumond"));
//    newEmployees["id3"](geraEmail("Carla Paiva"));

console.log(newEmployees(geraEmail))