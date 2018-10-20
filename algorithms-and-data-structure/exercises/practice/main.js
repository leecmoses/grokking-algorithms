(function questionGen() {  
    
    var questions = {
        0: 'String Reversal',
        1: 'Palindromes',
        2: 'Integer Reversal',
        3: 'MaxChars',
        4: 'FizzBuzz'
    };
    
    let numQs = Object.keys(questions).length  
    let rand = Math.floor(Math.random() * numQs);

    console.log(questions[rand]);
})();

// Max Character

// function maxChar(str) {
//     const charsMap = {};
//     let max = 0;
//     let maxChar = '';

//     for (let char of str) {
//         if (charsMap[char]) {
//             charsMap[char]++;
//         } else {
//             charsMap[char] = 1;
//         }
//     }

//     for (let char in charsMap) {
//         if (charsMap[char] > max) {
//             max = charsMap[char];
//             maxChar = char;
//         }
//     }
//     return maxChar;
// };