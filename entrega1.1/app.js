// NIVELL 1 Y 2
let name = "David";
const myFunction = (x) => {
  console.log(`Nivell 1 y 2 exercici 2: ${x}`);
};
myFunction(name);
// NIVELL 2 EXERCICI2
let x = "Nivell 2 Exercici 2";
let templatefunction = (x) => {
  return x;
};
console.log(`${templatefunction(x)}`);

// NIVELL 3 EXERCICI  1
//revisar lo que es una matriz
let arrayDeSumas = [];
const generarMatriz = () => {
  for (let i = 0; i <= 10; i++) {
    arrayDeSumas[i];
    let add = nuevaArray();
    arrayDeSumas.push(add);
  }
  console.log("Nivell 3 ex 1:", arrayDeSumas);
};
const nuevaArray = () => {
  let nueva = [];
  for (let i = 0; i <= 10; i++) {
    nueva.push(i);
  }

  return nueva;
};
generarMatriz();

console.log(arrayDeSumas);
// NIVELL 3 EXERCICI 2
let usuari = "El nombre de usuario va aqui";
((usuari) => {
  console.log(`Nivell 3 exercici 2:${usuari}`);
})(usuari);
