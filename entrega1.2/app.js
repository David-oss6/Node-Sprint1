//NIVELL 1
(() => {
  console.log(`Nivell 1: ${1 + 1}`);
})();
// NIVELL 2 exercici 1
let x = 6;
let y = {};
const fun = (x) => {
  y = { age: x };
  return y;
};
fun(x);
console.log("Nivell 2 ex 1:", y);
// NIVELL 2 exercici 2
class Persona {
  constructor(nom) {
    this.nom = nom;
  }
  dirNom() {
    console.log(this.nom);
  }
}
let per = new Persona("Nivell 2 ex 2: David");
per.dirNom();
// NIVELL 3
class Moto {
  constructor(x) {
    this.x = x;
  }
}
class Yamaha extends Moto {
  constructor(marca) {
    super(marca);
    this.marca = marca;
  }
}
class Honda extends Moto {
  constructor(marca) {
    super(marca);
    this.marca = marca;
  }
}
class Suzuki extends Moto {
  constructor(marca) {
    super(marca);
    this.marca = marca;
  }
}

let creadora = (marca) => {
  let newMoto;
  switch (marca) {
    case "Yamaha":
      newMoto = new Yamaha(marca);
      console.log("Nivell 3 ex 3:", newMoto);
      break;
    case "Sukuzi":
      newMoto = new Suzuki(marca);
      console.log("Nivell 3 ex 3:", newMoto);
      break;
    case "Honda":
      newMoto = new Honda(marca);
      console.log("Nivell 3 ex 3:", newMoto);
    default:
      console.log("Nivell 3 ex 3: La marca no existe");
  }
};
creadora("Yamaha");
