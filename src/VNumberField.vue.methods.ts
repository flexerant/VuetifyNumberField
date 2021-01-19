import * as localization from "@/utils/localizations";

export type Format = "none" | "currency" | "percent";

export default function useMethods() {
  function adjustNumber(
    num: number,
    decimalPlaces: number,
    min: number,
    max: number
  ) {
    let adustedNumber = Number(num.toFixed(decimalPlaces));
    const minimum = Number(min);
    const maximum = Number(max);

    if (Number.isNaN(adustedNumber)) adustedNumber = minimum;

    if (num < minimum) adustedNumber = minimum;
    if (num > maximum) adustedNumber = maximum;

    return adustedNumber;
  }

  function prefix(format: Format, locale: string) {
    if (format === "currency") {
      if (localization.getCurrencySymbolPosition(locale) === "start") {
        return localization.getCurrencySymbol(locale);
      }
    } else if (format === "percent") {
      if (localization.getPercentSymbolPosition(locale) === "start") {
        return localization.getPercentSymbol(locale);
      }
    }

    return undefined;
  }

  function suffix(format: Format, locale: string) {
    if (format === "currency") {
      if (localization.getCurrencySymbolPosition(locale) === "end") {
        return localization.getCurrencySymbol(locale);
      }
    } else if (format === "percent") {
      if (localization.getPercentSymbolPosition(locale) === "end") {
        return localization.getPercentSymbol(locale);
      }
    }

    return undefined;
  }

  // function textValue(
  //   numberValue: number,
  //   decimalPlaces: number,
  //   locale: string
  // ) {
  //   return localization.formatNumber(numberValue, decimalPlaces, locale);
  // }

  return {
    adjustNumber,
    prefix,
    suffix,
    // textValue,
  };
}
