const useBackSpace = require("./impl_backSpace");

test('test that all hash are used as backspace', () => {
  expect(useBackSpace("chr###chr", "chr")).toBe(true);
});
