const moveZero = require('./moving_zeros');


test('test that all zeros are moved', () => {
  expect(moveZero([4, 3, 0, 2, 0, 4, 10, 12])).toStrictEqual([4, 3, 2, 4, 10, 12, 0, 0]);
});