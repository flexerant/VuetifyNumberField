import * as localization from "@/utils/localizations";

describe("localization", () => {
  it("Currency symbol is prefix for en-CA", () => {
    expect(localization.getCurrencySymbolPosition("en-CA")).toBe("start");
  });

  it("Currency symbol is suffix for fr-CA", () => {
    expect(localization.getCurrencySymbolPosition("fr-CA")).toBe("end");
  });

  it("Currency symbol is suffix for de", () => {
    expect(localization.getCurrencySymbolPosition("de")).toBe("end");
  });

  it("Percent symbol is suffix for en-CA", () => {
    expect(localization.getPercentSymbolPosition("en-CA")).toBe("end");
  });

  it("Percent symbol is suffix for fr-CA", () => {
    expect(localization.getPercentSymbolPosition("fr-CA")).toBe("end");
  });

  it("Percent symbol is suffix for de", () => {
    expect(localization.getPercentSymbolPosition("de")).toBe("end");
  });

  it("1000.00 for en-CA", () => {
    expect(localization.formatNumber(1000, 2, "en-CA")).toBe("1,000.00");
  });

  it("1000.00 for fr-CA", () => {
    expect(
      localization.formatNumber(1000, 2, "fr-CA").replace(/\s+/g, " ")
    ).toBe("1 000,00");
  });

  it("1000.00 for de", () => {
    expect(localization.formatNumber(1000, 2, "de")).toBe("1.000,00");
  });

  it("100.0000 for en-CA", () => {
    expect(localization.formatNumber(100, 4, "en-CA")).toBe("100.0000");
  });

  it("100.0000 for fr-CA", () => {
    expect(
      localization.formatNumber(100, 4, "fr-CA").replace(/\s+/g, " ")
    ).toBe("100,0000");
  });

  it("100.0000 for de", () => {
    expect(localization.formatNumber(100, 4, "de")).toBe("100,0000");
  });
});
