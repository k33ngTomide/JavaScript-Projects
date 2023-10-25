const maxim = require("./maximum_substring");

test('test that total maximum substring is returned', () => {
  expect(maxim([-4, 2, -5, 1, 2, 3, 6, -5, 1])).toBe(12);
});

test('test that total maximum substring is returned again', () => {
  expect(maxim([-2, 45, -7, -5, -15, -6])).toBe(45);
});

