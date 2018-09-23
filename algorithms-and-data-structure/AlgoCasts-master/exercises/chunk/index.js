// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

/***************
* Solution #1
***************/
// Create empty array to hold chunks called 'chunked'
// For each element in the *unchuncked* array
// Retrieve the last element in 'chunked'
// If last element does not exist, or if its length is equal to chuck size
// Push a new chuck into 'chunked' with the current element
// Else add the current element into the chunk

// function chunk(arr, size) {
//     const chunked = [];

//     for (let el of arr) {
//         const last = chunked[chunked.length - 1];
//         if (!last || last.length === size) {
//             chunked.push([el]);
//         } else {
//             last.push(el);
//         }
//     }
//     return chunked;
// };

/***************
* Solution #2
***************/
// .slice() method creates a copy
// The first argument is the beginning index while the second argument is the up to index
// Create empty 'chunked' array
// Create 'index' start at 0
// While index is less than array.length
// Push a slice of length 'size' from 'array' into 'chunked'
// Add 'size to 'index'

// function chunk(arr, size) {
//     const chunked = [];
//     let index = 0; // let because this is a variable we want to change over time

//     while (index < arr.length) {
//         chunked.push(arr.slice(index, index + size));
//         index += size;
//     }
//     return chunked;
// };



module.exports = chunk;
