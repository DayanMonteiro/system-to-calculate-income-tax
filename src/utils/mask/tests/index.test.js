import cpfMask from "../cpfMask";

describe("Mask/cep", () => {
  it("deve retornar uma mascara", () => {
    expect(cpfMask({ value: "01133322244" })).toBe("011.333.222-44");
  });
});
