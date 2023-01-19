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
test("adds 1 + 2 to equal 3", () => {
  expect(sumar(1, 2)).toBe(3);
});
test("adds number to greater than 0", () => {
  expect(sumar(1, 2)).toBeGreaterThan(0);
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

test("add ID expect name", async () => {
  const data = await getEmployee(1);
  expect(data).toBe("Linux Torvalds");
});

test("add ID expect salary", async () => {
  const data = await getSalary(1);
  expect(data).toBe(4000);
});

// NIVEL 1 PASO 4

test("add ID expect salary", async () => {
  const data = await miFuncion();
  expect(data).toBe("RESOLVE funciona");
});

// NIVEL 2 PASO 1 ***********  NIVEL 2 PASO 1 **********************
//Verifica mitjançant tests l'execució de l'exercici Async / Await N2 E1 utilitzant Jest Fake Timers.
jest.useRealTimers();
jest.spyOn(global, "setTimeout");

test("add x expect x *2", async () => {
  const x = 2;
  const respuesta = x * 2;
  const data = await doble(x);
  expect(data).toBe(respuesta);
  expect(setTimeout).toHaveBeenCalledTimes(1);
});

// test("waits 1 second before ending the game", () => {
//   doble(2);
//   expect(setTimeout).toHaveBeenCalledTimes(1);
//   // expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
// });

// test("add 3 numbers expect (x+y+z) * 2", async () => {
//   const x = 2;
//   const y = 2;
//   const z = 2;
//   const mensaje = (x + y + z) * 2;
//   const data = await sumarTres(x, y, z);
//   expect(data).toBe(mensaje);
//   expect(setTimeout).toHaveBeenCalledTimes(3);
// });
