const { miFuncion } = require("../app/app");

// NIVEL 1 PASO 4
describe("nivel 1 paso 4", () => {
  test("miFuncion resolves after 2 seconds", async () => {
    const data = await miFuncion();
    expect(data).toBe("RESOLVE funciona");
  });
  test("miFuncion resolves after 2 seconds * 2", () => {
    return expect(miFuncion()).resolves.toBe("RESOLVE funciona");
  });
});
