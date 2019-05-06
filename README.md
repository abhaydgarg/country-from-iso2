# country-from-iso2
Get country data from ISO 3166-1 alpha-2, which are two-letter country codes defined in ISO 3166-1, part of the ISO 3166 standard published by the International Organization for Standardization (ISO).

[![NPM](https://nodei.co/npm/country-from-iso2.png?downloads=true)](https://nodei.co/npm/country-from-iso2/)

## Installation

```sh
npm install --save country-from-iso2
```

## Run test

```sh
npm run test
```

## Usage

```javascript
// commonJS - Destructuring
const { getCountries, getCurrencySymbol } = require('country-from-iso2');

// ES6 - using webapack bundler
import { getCountries, getCurrencySymbol } from 'country-from-iso2';
```

## API

### getCountries([include])

Get a list of all countries from https://github.com/mledoze/countries

`include` parameter is an optional. Contains a list of country's properties to be included in the final result. Check out JSON file at https://github.com/mledoze/countries/blob/master/countries.json for the list of all country's properties.

```javascript
getCountries(); // retruns everything

getCountries(['cca2', 'name']); // gives you an array of countries with two properties only, named 'cca2' and 'name'.
```

### getCountry(iso2)

Get a country data from 'ISO 3166-1 alpha-2'.

```javascript
getCountry('us'); // case-insensitive
```

### getCurrencySymbol(currency)

Get a country's currency symbol from currency.

```javascript
getCurrencySymbol('usd') // case-insensitive and return `$`
```

### getCurrencySymbolFromIso2(iso2)

Get a country's currency symbol from 'ISO 3166-1 alpha-2'.

```javascript
getCurrencySymbolFromIso2('us') // case-insensitive and return `$`
```

## License

MIT
