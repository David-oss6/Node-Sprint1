const { sumarTres } = require("../app/app"); // import de las funciones a testear
// NIVEL 2 PASO 1 ***********  NIVEL 2 PASO 1 **********************


jest.setTimeout(7000);
// jest.useFakeTimers()
// jest.spyOn(global, 'setTimeout');

describe("Nivel 2 paso 1", () => {
  test("x, y z equals x+y+z*2 (jest.timeout para que funcione)", () => {
    const x = 2;
    const y = 4;
    const z = 6;
    const respuesta = (2 + 4 + 6) * 2;
    return expect(sumarTres(x, y, z)).resolves.toBe(respuesta);
  });
  test("with undefiend number (jest.timeout para que funcione)", () => {
    const x = 'undefined';
    const y = 4;
    const z = 6;
    const respuesta = 'uno de los valores no es un numero'
    return expect(sumarTres(x, y, z)).resolves.toBe(NaN);
  });
});
