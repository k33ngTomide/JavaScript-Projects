const reverseVowels = require('./reverse_vowels');

test('test that vowels are reversed', () => {
  expect(reverseVowels("Hello")).toBe("Holle");
});

test('test that vowels are reversed again', () => {
  expect(reverseVowels("Leetcode")).toBe("Leotcede");
});