"use strict";
/**
 *
 * @param {number|bigint} number
 * @returns {number|bigint|error}
 */
const calcFactorialRecursion = (number) => {
  if (typeof number !== "number" && typeof number !== "bigint") {
    throw new TypeError("Type incorrect - enter a number or bigint");
  }
  if (number < 0) {
    throw new Error("Number incorrect - enter a positive number");
  }
  if (!Number.isInteger(number)) {
    throw new Error("Number incorrect - enter an integer");
  }
  if (typeof number === "number") {
    return number === 0 ? 1 : number * calcFactorialRecursion(number - 1);
  }
  if (typeof number === "bigint") {
    return number === 0n ? 1n : number * calcFactorialRecursion(number - 1n);
  }
  /* або замінити останні 2 умови одним рядком
  return number === 0 || number === 0n ? 1n : number * calcFactorial(number - 1n);
  */
};

try {
  console.log(calcFactorialRecursion(4));
  console.log(calcFactorialRecursion(1.7)); //Error: Number incorrect - enter an integer
  console.log(calcFactorialRecursion(-4)); //Error: Number incorrect - enter a positive number
  console.log(calcFactorialRecursion("1n")); //TypeError: Type incorrect - enter a number or bigint
} catch (error) {
  console.log(error);
} finally {
  console.log("Completion of calculation");
}
