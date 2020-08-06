import numeral from 'numeral';

function getLocaleData(locale) {
  let err = true;
  const messages = [];
  let data;

  try {
    err = false;
    data = numeral.localeData(locale);
  } catch {
    messages.push(`No locale data could be found for ${locale}.`);
    err = true;
  }

  if (err) {
    try {
      err = false;
      data = numeral.localeData(locale.split('-')[0]);
      messages.push(`Locale data found for ${locale.split('-')[0]}.`);
    } catch {
      messages.push(
        `No locale data could be found for ${locale.split('-')[0]}.`
      );
      err = true;
    }
  }

  if (err) {
    messages.push(
      `No locale data could be found for ${locale}. Defaulting to 'en'.`
    );
    data = numeral.localeData('en');
  }

  if (messages.length > 0) {
    console.warn(messages.join('\n\r'));
  }

  return data;
}

function getCurrencyNumberFormatParts(locale) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'XXX',
  }).formatToParts(1000);
}

function getPercentNumberFormatParts(locale) {
  return new Intl.NumberFormat(locale, { style: 'percent' }).formatToParts(100);
}

function getCurrencySymbolIndex(locale) {
  const parts = getCurrencyNumberFormatParts(locale);
  return parts.findIndex((x) => x.type === 'currency');
}

function getPercentSymbolIndex(locale) {
  const parts = getPercentNumberFormatParts(locale);
  return parts.findIndex((x) => x.type === 'percentSign');
}

export function getCurrencySymbolPosition(locale) {
  if (getCurrencySymbolIndex(locale) === 0) {
    return 'start';
  }
  return 'end';
}

export function getPercentSymbolPosition(locale) {
  if (getPercentSymbolIndex(locale) === 0) {
    return 'start';
  }
  return 'end';
}

export function getCurrencySymbol(locale) {
  return getLocaleData(locale).currency.symbol;
}

export function getPercentSymbol(locale) {
  const parts = getPercentNumberFormatParts(locale);

  return parts[getPercentSymbolIndex(locale)].value;
}

export function formatNumber(num, decimalPlaces, locale) {
  return num.toLocaleString(locale, {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  });
}
