// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

/***************
* Solution #1
***************/
// \w in a regExp ignores anything that are not characters
// Helper function is used to create charMaps for strA and str B

// function anagrams(stringA, stringB) {
//     const aCharMap = buildCharMap(stringA);
//     const bCharMap = buildCharMap(stringB);

//     if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) { // tests to see if same number of types of characters
//         return false;
//     }
    
//     for (let char in aCharMap) { // compares the frequency of the characters
//         if (aCharMap[char] !== bCharMap[char]) {
//             return false;
//         }
//     }

//     return true;
// }

// function buildCharMap(str) {
//     const charMap = {};

//     for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//         charMap[char] = charMap[char] + 1 || 1;
//     }

//     return charMap;
// }


/***************
* Solution #2
***************/
// .sort() method will try to meaningfully sort the order of the elements

// function anagrams(strA, strB) {
//     return cleanStr(strA) === cleanStr(strB);
// };

// function cleanStr(str) {
//     return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
// };

module.exports = anagrams;
