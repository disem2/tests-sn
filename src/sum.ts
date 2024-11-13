import { factorial, mapReduce2 } from "./utils";

export const sumInts = (a: number, b: number): number => {
  return (a > b) ? 0 : a + sumInts(a + 1, b);
}

export const sumSquares = (a: number, b: number): number => {
  return (a > b) ? 0 : Math.pow(a, 2) + sumSquares(a + 1, b);
}

export const sumCubes = (a: number, b: number): number => {
  return (a > b) ? 0 : Math.pow(a, 3) + sumCubes(a + 1, b);
}

export const sumFactorial = (a: number, b: number): number => {
  // In case of negative number provided, there should be an error
  if (a < 0 || b < 0) {
    throw new Error(`Factorial can not be defined for negative numbers (a=${a}, b=${b})`);
  }

  return (a > b) ? 0 : factorial(a) + sumFactorial(a + 1, b);
}

export const sumMap = (mapFn: (value: number) => number) =>
  (a: number, b: number): number => {
    return a > b ? 0 : mapFn(a) + sumMap(mapFn)(a + 1, b);
  };

export const sumInt2 = sumMap(x => x);
export const sumSquares2 = sumMap(x => Math.pow(x, 2));
export const sumCubes2 = sumMap(x => Math.pow(x, 3));
export const sumFactorial2 = sumMap(x => factorial(x));

export const sumMap2 = mapReduce2((a, b) => a + b, 0);