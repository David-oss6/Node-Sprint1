//Nivell 1 ex 1
const prom = false;
const miFuncion = () => {
  return new Promise((resolve, reject) => {
    if (prom) {
      resolve("Nivell 1 ex 1 resolve: La promesa era true");
    } else {
      reject("Nivell 1 ex 1 reject: La promesa era falsa");
    }
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
};
miFuncion();
//NIVELL 1 ex 2

const ultimafun = (x) => {
  x = x % 2;
  let res;
  if (x == 0) {
    res = "x es par";
  } else {
    res = "x es impar";
  }
  return res;
};
const nuevafun = (x, callback) => {
  const mensaje = callback(x);
  console.log(`Nivell 1 ex 2: ${x} ${mensaje}`);
};
nuevafun(4, ultimafun);

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
// let idEmpleado = 1; //Math.floor(Math.random(1) * 4);
const getEmployee = (id) => {
  const employee = new Promise((resolve, reject) => {
    let a = employees.find((x) => {
      return x.id === id;
    });
    a ? resolve(a.name) : reject("No se encontró el empleado");
  });
  employee
    .then((res) => {
      console.log("Nivell 2 ex 1:", res);
      return res;
    })
    .catch((err) => {
      console.log("Nivell 2 ex 1:", err);
      return err;
    });

  return employee;
};
// getEmployee(3);
//NIVELL 2 ex 2
const getSalary = (id) => {
  const salary = new Promise((resolve, reject) => {
    let a = salaries.find((x) => {
      return x.id === id;
    });
    a ? resolve(a.salary) : reject("No se encontró el salario");
  });
  salary
    .then((res) => {
      console.log("Nivell 2 ex 2:", res);
      return res;
    })
    .catch((err) => {
      console.log("Nivell 2 ex 2:", err);
      return err;
    });

  return salary;
};
// getSalary(3);
//NIVELL 2 ex 3
const exTres = (x) => {
  Promise.all([getEmployee(x), getSalary(x)])
    .then((values) => console.log("Respuesta nivell 2 ex 3:", values))
    .catch((err) =>
      console.log("Respuesta nivell 3 ex 1: No es troba el treballador")
    );
};
exTres(3);

module.esports = { salaries, employees };
