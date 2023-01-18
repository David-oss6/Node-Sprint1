//aqui van los test
const {
  sumar,
  restar,
  dividir,
  multiplicar,
  nuevafun,
  getEmployee,
  getSalary,
} = require("../app/app"); // import de las funciones a testear

///PASO 1
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

//PASO 2

test("enviamos 2 responde con par", () => {
  expect(nuevafun(2)).toBe("2 es par");
});
test("enviamos 3 responde con par", () => {
  expect(nuevafun(3)).toBe("3 es impar");
});

//PASO 3
//Crea els tests corresponents per verificar el funcionament de les funcions de l'exercici Promises i Callbacks N2 E1 i Promises i Callbacks N2 E2 (getEmployee() i getSalary()).

test("a ver que pasa", () => {
  expect(getEmployee(1)).toBe("Nivell 2 ex 1: Linux Torvalds");
});
