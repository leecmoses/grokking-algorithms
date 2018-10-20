// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// Common String Questions
// What is the most common character in the string?
// Does string A have the same characters as string B (is it an anagram)?
// Does the given string have any repeated characters in it?


/***************
* Notes and Tip
***************/
// const string = 'Hello there!';
// const chars = {};

// for (let char of string) {
//     if (!chars[char]) {
//         chars[char] = 1;
//     } else {
//         chars[char]++;
//     }
// }

// The 'for of' loop can alternatively be written as the following
// for (let char of string) {
//     chars[char] = chars[char] + 1 || 1;
// }


/***************
* Solution #1
***************/
// 'for in' loop is used for iterating an object, while 'for of' is used for strings, numbers, arrays.
function maxChar(str) {
    const charMap= {};
    let max = 0;
    let maxChar = '';

    for (let char of str) {
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }
    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }
    return maxChar;
};

module.exports = maxChar;
