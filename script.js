/** @format */

// Exercise 1

// Add all the values between 200 and 2700 (inclusively) that are divisible by 3 or 5, but not both 3 and 5. To solve this task you might want to use the modulus operator.

// let sum = 0;

// for (let i = 200; i <= 2700; i++) {
//   if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
//     sum += i;
//   }
// }
// console.log(sum);

// Exercise 2

// Given any array X, for example [2,1,6,4,-7], create an algorithm that shifts each number by one to the front. When your program is done the output for array [2,1,6,4,-7] should be [-7,4,6,1,2].

// function shiftArray(arr) {
//   if (arr.length === 0) return arr; // Handle empty array case

//   // Store the last element
//   const lastElement = arr[arr.length - 1];

//   // Shift elements to the right
//   for (let i = arr.length - 1; i > 0; i--) {
//     arr[i] = arr[i - 1];
//   }

//   // Place the last element at the front
//   arr[0] = lastElement;

//   return arr;
// }

// // Example usage
// const X = [2, 1, 6, 4, -7];
// const shiftedArray = shiftArray(X);
// console.log(shiftedArray); // Output: [-7, 2, 1, 6, 4]

// 3. FizzBuzz

// Let  arr = [];

// for (let i = 1; i <= 135 ; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         arr.push('FizzBuzz');
//         } else if (i % 3 === 0) {
//             arr.push('Fizz');
//             } else if (i % 5 === 0) {
//                 arr.push('Buzz');
//                 } else {
//                     arr.push(i);
//                     }
//                  }

//                     console.log(arr(i));

// 4. Fibonacci

// let a = 0;
// let b = 1;
// let sum = 0;

// while (b <= 10000) {
//   sum += a;
//   let temp = b;
//   b = temp + b;
//   a = temp;
// }
// console.log(sum);

// 2nd way

// // Initialize the first two Fibonacci numbers
// let a = 0,
//   b = 1;
// let fibonacciSum = 0;

// // Loop until the next Fibonacci number exceeds 1,000,000
// while (a < 1000000) {
//   fibonacciSum += a; // Add the current Fibonacci number to the sum
//   let next = a + b; // Calculate the next Fibonacci number
//   a = b; // Update a to the next number
//   b = next; // Update b to the next number
// }

// // Output the result
// console.log(
//   `The sum of all Fibonacci numbers below 1,000,000 is: ${fibonacciSum}`
// );

// 5. Remove the Negative

// Given any array X, for example [1,-2,4,1], remove the negative numbers, so that the output becomes: [1,4,1].

// Given array

// Let X = [1,-2,4,1] ;

// // Use filter() to remove negative numbers

// let Y = X.filter(x => x >= 0);

// console.log(Y);

// 2nd way

// Given array
// let X = [1, -2, 4, 1];

// // Initialize an empty array to store the result
// let Y = [];

// // Iterate over the array
// for (let i = 0; i < X.length; i++) {
//   // Check if the current element is non-negative
//   if (X[i] >= 0) {
//     // Add the non-negative element to the result array
//     Y.push(X[i]);
//   }
// }

// // Output the result
// console.log(Y);

// 6. Communist Censorship

// Given the array of strings X = ['Man', 'I','Love','The','Matrix','Program'], replace every letter of the word Program with *, so the output would be ['Man', 'I','Love','The','Matrix','*******']. Then make your algorithm work for any word of your choice

// let X = ["Man", "I", "Love", "The", "Matrix", "Program"];

// // The word to be censored
// let word = "Love";

// // Create a censored version of the word
// let censoredWord = "*".repeat(word.length);

// // Use map() to replace the word with asterisks
// let result = X.map((x) => (x === word ? censoredWord : x));

// console.log(result);
