const chai = require('chai');
const {
  getCountries,
  getCountry,
  getCurrencySymbol,
  getCurrencySymbolFromIso2
} = require('../index');

describe('Get countries [getCountries]', function () {

  it('should get all countries with included properties only', function () {
    chai.assert.hasAllKeys(getCountries(['cca2', 'cca3', 'currency', 'name'])[0], ['cca2', 'cca3', 'currency', 'name']);
  });

});

describe('Get country [getCountry]', function () {

  it('should get country from lowercase ISO 3166-1 alpha-2', function () {
    chai.assert.strictEqual(getCountry('us').cca2, 'US');
  });

  it('should not get country if invalid ISO 3166-1 alpha-2', function () {
    chai.assert.isUndefined(getCountry('ABC'));
    chai.assert.isUndefined(getCountry('      '));
  });

});

describe('Get currency symbol [getCurrencySymbol]', function () {

  it('should get currency symbol from lowercase currency', function () {
    chai.assert.strictEqual(getCurrencySymbol('usd'), '$');
  });

  it('should not get currency symbol from invalid currency', function () {
    chai.assert.isUndefined(getCurrencySymbol('ABC'));
    chai.assert.isUndefined(getCurrencySymbol('   '));
  });

});

describe('Get currency symbol from ISO 3166-1 alpha-2 [getCurrencySymbolFromIso2]', function () {

  it('should get currency symbol from lowercase ISO 3166-1 alpha-2', function () {
    chai.assert.strictEqual(getCurrencySymbolFromIso2('us'), '$');
  });

  it('should not get currency symbol if invalid ISO 3166-1 alpha-2', function () {
    chai.assert.isUndefined(getCurrencySymbolFromIso2('ABC'));
    chai.assert.isUndefined(getCurrencySymbolFromIso2('  '));
  });

});
