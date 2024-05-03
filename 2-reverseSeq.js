// WPU Coding Challange 2024
// 2/366
// https://www.codewars.com/kata/5a00e05cc374cb34d100000d

// const reverseSeq = (n) => {
//   const result = [];
//   for (i = n; i >= 1; i--) {
//     result.push(i)
//   }
//   return result
// };

// reverseSeq = (n) => {
//   // return [...Array(n)].map((el, i) => i + 1).reverse();
//   return Array(n).fill().map((el, i) => n - i);
// };

// const reverseSeq = (n) =>  Array.from({ n }, (_, i) => n - i);

const reverseSeq = length =>  Array.from({ length }, () => length--);
console.log(reverseSeq(5));
