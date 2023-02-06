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
    a ? resolve(a) : reject("No se encontró el empleado");
  });
  return employee;
};
const getSalary = (empleat) => {
  const salary = new Promise((resolve, reject) => {
    try {
      let a = salaries.find((x) => {
        return x.id === empleat.id;
      });
      a ? resolve(a.salary) : reject("No se encontró el salario");
    } catch {
      console.log("No se encontró al empleado");
    }
  });
  return salary;
};
const exTres = async (id) => {
  let employee = await getEmployee(id);
  let salary = await getSalary(employee);
  console.log(`Nivell 1 ex 1: ${employee.name} ${salary}`);
};
// exTres(1);

// Nivell 1 EX 2
const myPromise = () => {
  let retProm = new Promise((resolve) => {
    setTimeout(() => {
      resolve("RESOLVE funciona");
    }, [2000]);
  });
  return retProm;
};
const miFuncion = async () => {
  let respuesta = await myPromise();
  console.log("Nivell 1 ex 2:", respuesta);
};
// miFuncion();

//Nivell 2 ex 1
const doble = (x) => {
  try {
    let resposta = new Promise((resolve) => {
      setTimeout(() => {
        x = x * 2;
        resolve(x);
      }, [2000]);
    });
    return resposta;
  } catch {
    let errDoble = "algo salio mal en doble()";
    return errDoble;
  }
};
// doble(2).then(res => console.log('Nivell 2 ex 1:', res))
const sumarTres = async (x, y, z) => {
  let uno, dos, tres;
  let err1,
    err2,
    err3 = false;
  try {
    uno = await doble(x);
    dos = await doble(y);
    tres = await doble(z);
    let respuesta = uno + dos + tres;
    return respuesta;
  } catch {
    (err) => {
      console.log(err);
    };
  }
};

// sumarTres(2, 2, 2).then((res) => console.log(res));
