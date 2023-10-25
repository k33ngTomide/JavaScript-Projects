const isSubsequence = require("./is_subsequence");

test('test that met is not a subsequence of stream', () => {
  expect(isSubsequence("met", "stream")).toBe(false);
});


test('test that ace is a subsequence of abcde', () => {
  expect(isSubsequence("ace", "abcde")).toBe(true);
});
