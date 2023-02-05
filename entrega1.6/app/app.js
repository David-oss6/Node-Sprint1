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

const myCallback = (message) => {
  console.log(message)
  return message
}
const myArrow = (prom, callback) => {
  let mensaje;
  console.log(prom)
  if (prom == true) { mensaje = 'Nivell 1 ex 2: prom es true' }
  else if (prom == false) { mensaje = 'Nivell 1 ex 2: prom es false' }
  return callback(mensaje)
}


// NIVEL 1 PASO 3 ******************

const getEmployee = (id) => {
  const employee = new Promise((resolve, reject) => {
    let a = employees.find((x) => {
      return x.id === id;
    });
    a ? resolve(a) : reject("No se encontró el empleado");
  });
  return employee;
};

//nivell 2 ex 2
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

// NIVEL 1 PASO 4 ***************
const myPromise = () => {
  let retProm = new Promise((resolve) => {
    setTimeout(() => {
      resolve("RESOLVE funciona");
    }, [2000]);
  })
  return retProm
};
const miFuncion = async () => {
  let respuesta = await myPromise();
  return respuesta
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
  let uno, dos, tres;
  let err1, err2, err3 = false;
  try {
    try { uno = await doble(x); } catch { err1 = true }
    try { dos = await doble(y); } catch { err2 = true }
    try { tres = await doble(z); } catch { err3 = true }
    let respuesta = uno + dos + tres;
    return respuesta
  } catch {
    err1 && console.log(console.log(`dobele ${x} fallo`))
    err2 && console.log(console.log(`dobele ${y} fallo`))
    err3 && console.log(console.log(`dobele ${z} fallo`))
    return err1, err2, err3
  }
};
// sumarTres(4, 2, 4).then(res => console.log(res)).catch(err => console.log(err))
// NIVEL 2 PASO 2 ****************** NIVEL 2 PASO 2 ************
class Persona {
  constructor(nom) {
    this.nom = nom;
  }
  dirNom() {
    console.log(this.nom);
    return this.nom;
  }
}
let per = new Persona("Nivell 2 ex 2: David");
per.dirNom();
// NIVEL 2 PASO 3 ****************** NIVEL 2 PASO 3 ************
class Moto {
  constructor(x) {
    this.x = x;
  }
}
let creadora = (x) => {
  Moto.prototype.haceRum = function () {
    console.log(`${x} hace Rumm rummm`)
  };
  Moto.prototype.acelera = function () {
    console.log(`${x} esta acelerando`)
  }
  Moto.prototype.frena = function () {
    console.log(`${x} esta frenando`)
  }
  let newMoto = new Moto(x)
  return newMoto
};
creadora("yamaha").haceRum()
creadora("suzuki").acelera()
creadora("honda").frena()

//FIN DE TODOS LOS PASOS ******************************************************
if (typeof module !== "undefined") {
  module.exports = {
    sumar,
    restar,
    dividir,
    multiplicar,
    myArrow,
    myCallback,
    getEmployee,
    getSalary,
    myPromise,
    miFuncion,
    sumarTres,
    doble,
    Persona,
    Moto,
    creadora

  };
}
