const { Moto, Yamaha, Suzuki } = require("../app/app");
jest.mock("../app/app.js");
beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  Moto.mockClear();
  Yamaha.mockClear();
  Suzuki.mockClear();
});
describe("Nivel 2 paso 2", () => {
  it("comprobar si Moto llama al constructor", () => {
    const motoConsumer = new Moto("Paca");
    expect(Moto).toHaveBeenCalledTimes(1);
  });
  it("comprobar si clase heredad funciona", () => {
    const coolBike = "Yamaha";
    const motoConsumer = new Yamaha(coolBike);
    expect(Yamaha).toHaveBeenCalledTimes(1);
  });
});
