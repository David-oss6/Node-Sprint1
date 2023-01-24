const { nuevafun } = require("../app/app"); // import de las funciones a testear
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
