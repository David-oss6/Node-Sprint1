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

const logMatriz = () => {
  for (let i = 0; i <= 10; i++) {
    console.log("Nivell 3 ex 1:", i)
  }
}
let arrayDeSumas = [logMatriz, logMatriz, logMatriz, logMatriz, logMatriz, logMatriz, logMatriz, logMatriz, logMatriz, logMatriz];
arrayDeSumas.forEach((element) => {
  element()
})

// NIVELL 3 EXERCICI 2
const llamarUsuario = ((usuari) => {
  console.log(`Nivell 3 exercici 2: ${usuari}`);
})('David');
