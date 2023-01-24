const { Persona } = require("../app/app");
// NIVEL 2 PASO 2 ****************** NIVEL 2 PASO 2 ************
jest.mock("../app/app.js");
beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  Persona.mockClear();
});
describe("Nivel 2 paso 2", () => {
  it("comprobar si Persona llama al constructor", () => {
    const PersonaConsumer = new Persona("Paco");
    expect(Persona).toHaveBeenCalledTimes(1);
  });
  it("Llamar al metodo de clase Persona funciona", () => {
    const coolName = "David";
    const PersonaConsumer = new Persona(coolName);
    PersonaConsumer.dirNom();
  });
});
