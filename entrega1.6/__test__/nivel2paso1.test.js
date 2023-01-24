const { sumarTres } = require("../app/app"); // import de las funciones a testear
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
