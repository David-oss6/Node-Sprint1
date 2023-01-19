//codigo a testear

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

// NIVEL 1 PASO 1 *******************

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
//NIVEL 1 PASO 2 ******************

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

// NIVEL 1 PASO 3 ******************

//nivell 2 ex 1
const getEmployee = async (id) => {
  const employee = await new Promise((resolve, reject) => {
    let a = employees.find((x) => {
      return x.id === id;
    });
    a ? resolve(a.name) : reject("No se encontró el empleado");
    employee
      .then((res) => {
        console.log(`Nivell 2 ex 1: ${res}`);
        res = `Nivell 2 ex 1: ${res}`;
        return res;
      })
      .catch((err) => {
        console.log(`Nivell 2 ex 1: ${err}`);
        err = `Nivell 2 ex 1: ${err}`;
        return err;
      });
  });

  return employee;
};

//nivell 2 ex 2
const getSalary = (id) => {
  const salary = new Promise((resolve, reject) => {
    let a = salaries.find((x) => {
      return x.id === id;
    });
    a ? resolve(a.salary) : reject("No se encontró el salario");
  });
  salary
    .then((res) => {
      console.log(`Nivell 2 ex 2: ${res}`);
      res = `Nivell 2 ex 2: ${res}`;
      return res;
    })
    .catch((err) => {
      console.log(`Nivell 2 ex 2: ${err}`);
      err = `Nivell 2 ex 2: ${err}`;
      return err;
    });
  return salary;
};

// NIVEL 1 PASO 4 ***************
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
  console.log(respuesta);
  return respuesta;
};

// NIVEL 2 PASO 1 ***********  NIVEL 2 PASO 1 **********************
//Verifica mitjançant tests l'execució de l'exercici Async / Await N2 E1 utilitzant Jest Fake Timers.
const doble = async (x) => {
  return await new Promise((resolve, reject) => {
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
  // console.log(`Nivell 2 ex 1 Segunda parte: ${respuesta}`);
  return respuesta;
};
// (async () => await console.log(await doble(2)))();
//FIN DE TODOS LOS PASOS ******************************************************
if (typeof module !== "undefined") {
  module.exports = {
    sumar,
    restar,
    dividir,
    multiplicar,
    nuevafun,
    getEmployee,
    getSalary,
    miFuncion,
    sumarTres,
    doble,
  };
}
