const { getEmployee, getSalary } = require("../app/app"); // import de las funciones a testear
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
