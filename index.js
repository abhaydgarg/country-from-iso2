const countries = require('world-countries');
const getSymbolFromCurrency = require('currency-symbol-map');
const { isEmpty } = require('@abhaydgarg/is');

/**
 * get all countries
 * @param {array} include Optional, country's properties to be included in the final result,
 * check out JSON file at https://github.com/mledoze/countries for the list of country's properties.
 *
 * @example
 * getCountries(['cca2']); gives you an array of countries with one property only, named 'cca2'.
 */
function getCountries(include = []) {
  let data = [];
  if (include.length === 0) {
    return countries;
  }
  countries.forEach(function (country) {
    let collector = {};
    Object.keys(country).forEach(function (prop) {
      if (include.indexOf(prop) !== -1) {
        collector[prop] = country[prop];
      }
    });
    data.push(collector);
  });

  return data;
}

/**
 * get a country data from 'ISO 3166-1 alpha-2'
 * @param {string} iso2 case-insensitive
 * @returns {object|undefined} undefined if country is not found.
 */
function getCountry(iso2) {
  if (isEmpty(iso2)) {
    return undefined;
  }
  iso2 = (iso2.trim()).toUpperCase();
  return countries.find(function (country) {
    return country.cca2 === iso2;
  });
}

/**
 * get a country currency symbol from currency
 * @param {string} currency case-insensitive
 * @returns {string|undefined} undefined if currency symbol is not found.
 */
function getCurrencySymbol(currency) {
  if (isEmpty(currency)) {
    return undefined;
  }
  return getSymbolFromCurrency(currency.trim());
}

/**
 * get a country currency symbol from 'ISO 3166-1 alpha-2'
 * @param {string} iso2 case-insensitive
 * @returns {string|undefined} undefined if currency symbol is not found.
 */
function getCurrencySymbolFromIso2(iso2) {
  let country = getCountry(iso2);
  if (isEmpty(country)) {
    return undefined;
  }
  return getSymbolFromCurrency(country.currency[0]);
}

module.exports = {
  getCountries,
  getCountry,
  getCurrencySymbol,
  getCurrencySymbolFromIso2
};
