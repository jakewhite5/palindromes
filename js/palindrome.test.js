

const palindrome = require('./palindrome')

test('properly return true on palindrom', () => {
  expect(palindrome('racecar')).toBe(true)
})

test('properly return true on palindrom', () => {
  expect(palindrome('racecarx')).toBe(false)
})


// console.log(pal.palindrome('racecar') === true);
// console.log(pal.palindrome('Noon') === true);
// console.log(pal.palindrome('ciVic') === true);
// console.log(pal.palindrome('nice') === false);
// console.log(pal.palindrome(434) === true);
// console.log(pal.palindrome(123) === false);

// console.log("The following should be true if you're trying to do the extra portion of this challenge");
// console.log(pal.palindrome("Sore was I ere I saw Eros.") === true);
// console.log(pal.palindrome("A man, a plan, a canal -- Panama") === true);
