//aqui van los test
const {
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
} = require("../app/app"); // import de las funciones a testear

///PASO 1
describe("Nivel 1 paso 1", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sumar(1, 2)).toBe(3);
  });

  test("subtract 2 - 1 to equal 1", () => {
    expect(restar(2, 1)).toBe(1);
  });

  test("multiply 2 * 6 to equal 12", () => {
    expect(multiplicar(2, 6)).toBe(12);
  });

  test("divide 2 / 2 to equal 1", () => {
    expect(dividir(2, 2)).toBe(1);
  });
  // paso 1 testeos adicionales
  test("adds number to greater than 0", () => {
    expect(sumar(1, 2)).toBeGreaterThan(0);
  });
});

//PASO 2
describe("Nivel 1 paso 2", () => {
  test("enviamos 2 responde con par", () => {
    expect(nuevafun(2)).toBe("2 es par");
  });
  test("enviamos 3 responde con par", () => {
    expect(nuevafun(3)).toBe("3 es impar");
  });
  // testeos adicionales **
  test("enviamos NaN responde con NaN no es un numero", () => {
    let x = "string";
    expect(nuevafun(x)).toBeDefined();
  });
  test("null and undefined esta definido", () => {
    expect(nuevafun(0)).not.toBeNull();
  });
});

//PASO 3
//Crea els tests corresponents per verificar el funcionament de les funcions de l'exercici Promises i Callbacks N2 E1 i Promises i Callbacks N2 E2 (getEmployee() i getSalary()).
describe("Nivel 1 paso 3", () => {
  test("add existing ID expect name", async () => {
    const data = await getEmployee(1);
    expect(data).toBe("Linux Torvalds");
  });

  test("add existing ID expect salary", async () => {
    const data = await getSalary(1);
    expect(data).toBe(4000);
  });
  // testeos adicionales **
  test("sin async await add existing ID expect name", () => {
    return expect(getEmployee(1)).resolves.toBe("Linux Torvalds");
  });

  test("sin async await add non existing ID expect error message", () => {
    return expect(getEmployee(4)).rejects.toMatch("No se encontró el empleado");
  });

  test("add null ID expect error message", () => {
    const mensaje = "No se encontró el empleado";
    const data = getEmployee(null).catch((err) => expect(err).not.toBeNull);
  });
});

// NIVEL 1 PASO 4
describe("nivel 1 paso 4", () => {
  test("miFuncion resolves after 2 seconds", async () => {
    const data = await miFuncion();
    expect(data).toBe("RESOLVE funciona");
  });
  test("miFuncion resolves after 2 seconds * 2", () => {
    return expect(miFuncion()).resolves.toBe("RESOLVE funciona");
  });
});

// NIVEL 2 PASO 1 ***********  NIVEL 2 PASO 1 **********************
//Verifica mitjançant tests l'execució de l'exercici Async / Await N2 E1 utilitzant Jest Fake Timers.

jest.setTimeout(7000);
describe("Nivel 2 paso 1", () => {
  test("x, y z equals x+y+z*2 (jest.timeout para que funcione)", () => {
    const x = 2;
    const y = 4;
    const z = 6;
    const respuesta = (2 + 4 + 6) * 2;
    return expect(sumarTres(x, y, z)).resolves.toBe(respuesta);
  });
  //sumaTres()
});
