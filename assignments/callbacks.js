// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we can use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  const test1 = firstItem(items, item => `I love my ${item}!`);
  console.log(test1); // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    return `this ${article} is worth a million dollars!`;
  };

  const test2 = firstItem(items, logExorbitantPrice);
  console.log(test2); // "this Pencil is worth a million dollars!"
*/

// My HOF
function calculate(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr);
}

// My Callback
function getLength(array) {
  return array.length;
}
console.log("Length: " + calculate(items, getLength));

function last(array) {
  // last passes the last item of the array into the callback.
  return array[array.length-1]
}
console.log("Last: " + calculate(items, last));

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x,y);
}

function mysum (x,y) {
  return x + y;
}
console.log("Sum: " + sumNums(4,5,mysum));


function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x,y);
}
function myMultiplication (x,y) {
  return x * y;
}
console.log("Multiplication: " + myMultiplication(4,5,mysum));

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(item, list);
}

function findIn (query, array) {
  return array.includes(query);
};

console.log(contains("Gum", items, findIn));

// Doesn't work
// function findIn (query, array) {
//   array.forEach(function(arrayItem) {
//     if (arrayItem === query) {
//       // console.log("Found it!");
//       return true;
//     } else {
//       // console.log("Sorry, not found.");
//       return false;
//     }
//   });
// }

// findIn("Gum", items);
// console.log(contains("Gum", items, findIn))

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
