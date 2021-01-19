import useMethods from "@/VNumberField.vue.methods";

const methods = useMethods();

describe("methods", () => {
  it("Min or greater", () => {
    expect(methods.adjustNumber(0, 1, 10, 1000)).toBe(10);
  });

  it("Max or lower", () => {
    expect(methods.adjustNumber(1000, 1, 10, 100)).toBe(100);
  });

  it("Between min and max", () => {
    expect(methods.adjustNumber(100, 1, 10, 1000)).toBe(100);
  });
});
