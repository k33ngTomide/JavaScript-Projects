const math = require('./sum');

test('test the addition function created', () => {
  expect(math.sum(6, 5)).toBe(11);
});

test('test the addition function created again', () => {
  expect(math.sum(-3, 5)).toBe(2);
});


test('test the multiply function created', () => {
  expect(math.multiply(3, 5)).toBe(15);
});

