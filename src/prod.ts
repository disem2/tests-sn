import {factorial, mapReduce2} from "./utils";

export const prodInts = (a: number, b: number): number => {
  return (a > b) ? 1 : a * prodInts(a + 1, b);
};

export const prodSquares = (a: number, b: number): number => {
  return (a > b) ? 1 : Math.pow(a, 2) * prodSquares(a + 1, b);
};

export const prodCubes = (a: number, b: number): number => {
  return (a > b) ? 1 : Math.pow(a, 3) * prodCubes(a + 1, b);
};

export const prodFactorial = (a: number, b: number): number => {
  // In case of negative number provided, there should be an error
  if (a < 0 || b < 0) {
    throw new Error(`Factorial can not be defined for negative numbers (a=${a}, b=${b})`);
  }

  return (a > b) ? 1 : factorial(a) * prodFactorial(a + 1, b);
}

export const prodMap = (mapFn: (value: number) => number) =>
  (a: number, b: number): number => {
    return a > b ? 1 : mapFn(a) * prodMap(mapFn)(a + 1, b);
  };

export const prodInt2 = prodMap(x => x);
export const prodSquares2 = prodMap(x => Math.pow(x, 2));
export const prodCubes2 = prodMap(x => Math.pow(x, 3));
export const prodFactorial2 = prodMap(x => factorial(x));

export const prodMap2 = mapReduce2((a, b) => a * b, 1);
