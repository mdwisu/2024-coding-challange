// https://www.codewars.com/kata/5715eaedb436cf5606000381

function positiveSum(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      continue;
    } else {
      result += arr[i];
    }
  }
  return result;
}

console.log(positiveSum([1, -4, 7, 12]));
console.log(positiveSum([-1, -4, -7, -12]));
