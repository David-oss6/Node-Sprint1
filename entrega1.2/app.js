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

class Nuevo {
  constructor(x) {
    this.x = x;
  }
  correr() {
    console.log("corriendo");
  }
  saltar() {
    console.log("saltando");
  }
}
let creadora = (x) => {
  x = new Nuevo(x);
  console.log("Nivell 3 ex 3:");
  x.correr();
  x.saltar();
};
creadora();
