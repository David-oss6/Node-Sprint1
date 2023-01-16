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
let arrayDeSumas = []
for (let i = 0; i < arrayDeSumas.length; i++) {
  arrayDeSumas[i] = new Array;
  for (let z = 0; z < arrayDeSumas.length; z++) {
    arrayDeSumas[i][z] = x + y
  }
}
arrayDeSumas.forEach((list) => {
  console.log(list)
})
console.log(arrayDeSumas)
// NIVELL 3 EXERCICI 2
let usuari = "El nombre de usuario va aqui";
((usuari) => {
  console.log(`Nivell 3 exercici 2:${usuari}`);
})(usuari);
