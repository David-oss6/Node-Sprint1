//aqui van los test
const { sumar, restar, dividir, multiplicar } = require("../app/app"); // import de las funciones a testear

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
