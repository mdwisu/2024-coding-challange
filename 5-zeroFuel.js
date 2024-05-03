// WPU Coding Challange 2024
// 5/366
// https://www.codewars.com/kata/5861d28f124b35723e00005e

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  const needed = distanceToPump / mpg;
  return needed <= fuelLeft
};

    console.log( zeroFuel(50, 25, 2));
    console.log( zeroFuel(100, 50, 1));