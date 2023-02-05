const { Moto, creadora } = require("../app/app");
jest.mock("../app/app.js");
beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  Moto.mockClear();

});
describe("Nivel 2 paso 2", () => {
  it("comprobar si Moto llama al constructor", () => {
    const motoConsumer = new Moto("Paca");
    expect(Moto).toHaveBeenCalledTimes(1);
  });
  it("Llamar al metodo creado de clase abstarcta Moto", () => {
    const marca = "Yamaha";
    const motoConsumer = new Moto(marca);
    motoConsumer.acelera();
  });
});
