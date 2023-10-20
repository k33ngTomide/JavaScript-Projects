
const implSpace = require('./implement_space');


test('test that all zeros are moved', () => {
  expect(implSpace("The&name&of&my&guy&is&Seyi%And&he&is&a&mad&guy")).toBe("The name of my guy is Seyi.    And he is a mad guy");
});