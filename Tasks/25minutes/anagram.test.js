
const isAnagram = require('./anagram');


test('test that function returns true if words are anagram', () => {
  expect(isAnagram('anagram', 'nagaram')).toBe(true);
});

test('test that function returns false if words are not anagram', () => {
  expect(isAnagram('chair', 'cheer')).toBe(false);
});

