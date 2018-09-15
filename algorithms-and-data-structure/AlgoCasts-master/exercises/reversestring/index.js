// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


/***************
* Solution #1
***************/
// Turn 'str' into an array
// Call 'reverse' method on the array
// Join the array back into a string
// Return the result

// function reverse(str) {
//     const arr = str.split('');
//     arr.reverse();
//     return arr.join('');
// };

// // Code clean up
// function reverse(str) {
//     return str.split('').reverse().join('');
// };


/***************
* Solution #2
***************/
// Create an empty string called 'reversed'
// for each character in the provided string
// Take the character and add it to the start of 'reversed'
// Return the variable 'reversed'
// TIP: Avoid the classic long form 'for loops' higher likelihood of a typo, use the new syntax when possible

// function reverse(str) {
//     let reversed = '';

//     for (let char of str) {
//         reversed = char + reversed;
//     }
//     return reversed;
// };


/***************
* Solution #3
***************/
// Use arrow syntax
// Use array helper, '.reduce()'
// Most likely to impress your interviewer
// function rev(str) {
//     return str.split('').reduce((reversed, character) => {
//         return character + reversed;
//     }, '');
// }


// The above function can be rewritten as the following:
// function reverse(str) {
//     return str.split('').reduce((rev, char) => char + rev, '');
// };

// module.exports = reverse;
