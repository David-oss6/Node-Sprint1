//codigo a testear

// const { salaries, employees } = require("../../entrega1.3/app");
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

// NIVEL 1 PASO 1
//Crea un arxiu amb les funcions sumar, restar, multiplicar i dividir dos o més operands. Testeja la correcta execució d'aquestes funcions.
const sumar = (x, y) => {
  return x + y;
};

const restar = (x, y) => {
  return x - y;
};
const dividir = (x, y) => {
  return x / y;
};

const multiplicar = (x, y) => {
  return x * y;
};
//NIVEL 1 PASO 2
// Crea els tests corresponents per verificar el funcionament de les dues funcions de l'exercici Promises i Callbacks N1 E2.

const nuevafun = (z) => {
  let mensaje = (z) => {
    x = z % 2;
    let res;
    if (x == 0) {
      res = `${z} es par`;
    } else {
      res = `${z} es impar`;
    }
    console.log(res);
    return res;
  };
  return mensaje(z);
  console.log(mensaje);
};

// NIVEL 1 PASO 3
//Crea els tests corresponents per verificar el funcionament de les funcions de l'exercici Promises i Callbacks N2 E1 i Promises i Callbacks N2 E2 (getEmployee() i getSalary()).

//NIVELL 2 ex 1
// let employees = [
//   {
//     id: 1,
//     name: "Linux Torvalds",
//   },
//   {
//     id: 2,
//     name: "Bill Gates",
//   },
//   {
//     id: 3,
//     name: "Jeff Bezos",
//   },
// ];

// let salaries = [
//   {
//     id: 1,
//     salary: 4000,
//   },
//   {
//     id: 2,
//     salary: 1000,
//   },
//   {
//     id: 3,
//     salary: 2000,
//   },
// ];

const getEmployee = (id) => {
  const employee = new Promise((resolve, reject) => {
    let a = employees.find((x) => {
      return x.id === id;
    });
    a ? resolve(a.name) : reject("No se encontró el empleado");
  });
  // employee
  //   .then((res) => {
  //     console.log("Nivell 2 ex 1:", res);
  //     return res;
  //   })
  //   .catch((err) => {
  //     console.log("Nivell 2 ex 1:", err);
  //     return err;
  //   });

  return employee.toString();
};
// getEmployee(1);
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

//FIN DE TODOS LOS PAOS
if (typeof module !== "undefined") {
  module.exports = {
    sumar,
    restar,
    dividir,
    multiplicar,
    nuevafun,
    getEmployee,
    getSalary,
  };
}
