const { getEmployee, getSalary } = require("../app/app"); // import de las funciones a testear
//PASO 3
//Crea els tests corresponents per verificar el funcionament de les funcions de l'exercici Promises i Callbacks N2 E1 i Promises i Callbacks N2 E2 (getEmployee() i getSalary()).
describe("Nivel 1 paso 3", () => {
  test("add existing ID expect defined object", async () => {
    const data = await getEmployee(1);
    expect(data).toMatchObject({ id: 1, name: "Linux Torvalds" });
  });

  test("add employee object expect salary", async () => {
    const employee = { id: 1, name: "Linux Torvalds" }
    const data = await getSalary(employee);
    expect(data).toBe(4000);
  });
  // testeos adicionales **
  test("sin async await add existing ID expect name", () => {
    return expect(getEmployee(1)).resolves.toMatchObject({ id: 1, name: "Linux Torvalds" });
  });
  test("sin async await object expect salary", () => {
    const employee = { id: 1, name: "Linux Torvalds" }
    return expect(getSalary(employee)).resolves.toBe(4000);
  });
  test("sin async await add non existing ID expect error message", () => {
    return expect(getEmployee(4)).rejects.toMatch("No se encontró el empleado");
  });

  test("add null ID expect error message", () => {
    const mensaje = "No se encontró el empleado";
    const data = getEmployee(null).catch((err) => expect(err).not.toBeNull);
  });
  test("add string recieve error message", () => {
    return expect(getEmployee("sonsoles")).rejects.toMatch(
      "No se encontró el empleado"
    );
  });
  test("add undefined to recieve error message", () => {
    return expect(getEmployee(undefined)).rejects.toMatch(
      "No se encontró el empleado"
    );
  });
});
