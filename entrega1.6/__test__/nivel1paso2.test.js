const { myArrow, myCallback } = require("../app/app"); // import de las funciones a testear
//PASO 2
describe("Nivel 1 paso 2", () => {

  test("enviamos prom = true, expect 'Nivell 1 ex 2: prom es true'", () => {
    let prom = true
    expect(myArrow(prom, myCallback)).toBe('Nivell 1 ex 2: prom es true');
  });
  test("enviamos prom = false, expect 'Nivell 1 ex 2: prom es false'", () => {
    let prom = false
    expect(myArrow(prom, myCallback)).toBe('Nivell 1 ex 2: prom es false');
  });
  // testeos adicionales **
  test("enviamos un string en lugar de true o false responde con undefined", () => {
    let prom = 'asd'
    expect(myArrow(prom, myCallback)).toBeUndefined();
  });
  test("enviamos NULL en lugar de true o false responde con null", () => {
    prom = null
    expect(myArrow(prom, myCallback)).not.toBeNull();
  });
});
