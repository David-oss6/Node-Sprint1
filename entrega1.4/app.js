//Nivell 1 ex 1
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
    a ? resolve(a.name) : reject("No se encontró el empleado");
  });
  employee
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });

  return employee;
};

const getSalary = (id) => {
  const salary = new Promise((resolve, reject) => {
    let a = salaries.find((x) => {
      return x.id === id;
    });
    a ? resolve(a.salary) : reject("No se encontró el salario");
  });
  salary
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });

  return salary;
};

const exTres = async (id) => {
  let name = await getEmployee(id);
  let salary = await getSalary(id);
  console.log(`Nivell 1 ex 1: ${name} ${salary}`);
};
// exTres(Math.floor(Math.random(1) * 4));

// Nivell 1 EX 2
const myPromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("RESOLVE funciona");
    }, [2000]);
  });
};
const miFuncion = async () => {
  let respuesta = await myPromise();
  console.log("Nivell 1 ex 2:", respuesta);
};
// miFuncion();

//Nivell 2 ex 1

const doble = (x) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      x = x * 2;
      resolve(x);
    }, [2000]);
  });
};
const sumarTres = async (x, y, z) => {
  let uno = await doble(x);
  let dos = await doble(y);
  let tres = await doble(z);
  let respuesta = uno + dos + tres;
  console.log(`Nivell 2 ex 1 Segunda parte: ${respuesta}`);
};
const llamarOperaciones = async (x, y, z) => {
  let respuesta = await doble(x);
  sumarTres(x, y, z);
  console.log(`Nivell 2 ex 1 primera parte: ${respuesta}`);
};
llamarOperaciones(2, 4, 6);
