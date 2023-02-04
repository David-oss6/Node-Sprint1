//Nivell 1 ex 1
const prom = true;

const miFuncion = () => {
  let novaPromesa = new Promise((resolve, reject) => {
    if (prom) {
      resolve("Nivell 1 ex 1 resolve: La promesa era true");
    } else {
      reject("Nivell 1 ex 1 reject: La promesa era falsa");
    }
  })
  return novaPromesa
};
miFuncion()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));

//NIVELL 1 ex 2
const myCallback = (message) => {
  console.log(message)
}
const myArrow = (prom, callback) => {
  let mensaje;
  if (prom) { mensaje = 'Nivell 1 ex 2: prom es true' }
  else { mensaje = 'Nivell 1 ex 2: prom es false' }
  callback(mensaje)
}
myArrow(prom, myCallback) // faig servir la variable prom definida al ex 1

//NIVELL 2 ex 1
let employees = [
  {
    id: 1,
    name: "Linux Torvalds",
  },
  {
    id: 2,
    name: "Bill Gates",
  },
  {
    id: 3,
    name: "Jeff Bezos",
  },
];

let salaries = [
  {
    id: 1,
    salary: 4000,
  },
  {
    id: 2,
    salary: 1000,
  },
  {
    id: 3,
    salary: 2000,
  },
];

const getEmployee = (id) => {
  const employee = new Promise((resolve, reject) => {
    let a = employees.find((x) => {
      return x.id === id;
    });
    a ? resolve(a) : reject("No se encontró el empleado");
  });
  return employee;
};

getEmployee(2)
  .then(res => console.log(`Nivell 2 ex 1`, res))
  .catch(err => console.log(`Nivell 2 ex 1`, err))

//NIVELL 2 ex 2
const getSalary = (empleat) => {
  const salary = new Promise((resolve, reject) => {
    try {
      let a = salaries.find((x) => {
        return x.id === empleat.id;
      });
      a ? resolve(a.salary) : reject("No se encontró el salario");
    } catch {
      console.log("No se encontró al empleado")
    }
  });
  return salary;
};
getSalary(employees[1]).then(res => console.log(`Nivell 2 ex 2`, res))
  .catch(err => console.log(`Nivell 2 ex 2`, err))

//NIVELL 2 ex 3
const exTres = (x) => {
  getEmployee(x)
    .then(
      (res) => {
        console.log(`Nivell 2 ex 3 emp`, res),
          getSalary(res)
            .then(res2 => console.log(`Nivell 2 ex 3 sal`, res2))
            .catch(err2 => console.log(err2))
      }
    )
    .catch(err => console.log(err))
};
exTres(1);
