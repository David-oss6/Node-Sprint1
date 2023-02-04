//NIVELL 1
console.log((funcioSuma = () => {
  return 2 + 2
})())

// NIVELL 2 exercici 1
const fun = (x) => {
  return { age: x };
};
console.log("Nivell 2 ex 1:", fun(3));
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
let creadora = (x) => {
  Moto.prototype.haceRum = function () {
    console.log('Rumm rummm')
  };
  let newMoto = new Moto(x)
  return newMoto
};
creadora("yamaha").haceRum()

