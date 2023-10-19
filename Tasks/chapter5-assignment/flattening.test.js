const flatten = require('./flattening');

test('test that a flattened array is returned', () => {
  expect(flatten([[13, 6, 9, 4], [4, 6, 3], [2, 4, 7]])).toStrictEqual([13, 6, 9, 4, 4, 6, 3, 2, 4, 7]);
});

test('test that a flattened array is returned', () => {
  expect(flatten([[4, 5, 7], [3, 14], [2, 19, 10, 7]])).toStrictEqual([4, 5, 7, 3, 14, 2, 19, 10, 7]);
});