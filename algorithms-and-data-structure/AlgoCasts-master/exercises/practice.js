// String reversal
function rev(str) {
    let rev = '';
    for (let char of str) {
        rev = char + rev;
    }
    return rev;
}

function rev(str) {
    return str.split('').reduce((rev, char) => char + rev, '');
};

// Palindrome
function palindrome(str) {
    const rev = str.split('').reverse().join('');
    return str === rev;
};

function palin(str) {
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1];
    });
};

// Integer reversal
function reverseInt(n) {
    const rev = n.toString().split('').reverse().join('');
    return parseInt(rev) * Math.sign(n);
};

// Max Character
function maxChar(str) {
    let charsMap = {};
    let max = 0;
    let maxChar = '';


    for (let char of str) {
        if (charsMap[char]) {
            chars[char]++;
        } else {
            chars[char] = 1;
        }
    }
    for (let char in charsMap) {
        if (charsMap[char] > max) {
            max = charsMap[char];
            maxChar = char;
        }
        return maxChar;
    }
};