// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


/***************
* Solution #1
***************/
// function palindrome(str) {
//     const rev = str.split('').reverse().join('');
//     return str === rev;
// };


/***************
* Solution #2
***************/
// every() method tests whether all elements in the array pass the test(boolean check) implemented by the provided function.
// Not ideal solution because it requires twice the number of calculations due to double comparison.
function palindrome(str) {
    return str.split('').every((char, i) => {
        return char === str[str.length - i -1]; // To get the mirror side of the current element(char), -1 because of 0 index JavaScript arrays.
    });
};


module.exports = palindrome;
