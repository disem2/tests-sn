export const factorial = (n: number): number => {
  if (n < 0) {
    throw new Error("Factorial can not be defined for negative numbers");
  }

  return (n <= 1) ? 1 : n * factorial(n - 1);
}

export const mapReduce = (
  mapFn: (value: number) => number,
  reduceFn: (first: number, second: number) => number,
  zero: number
) => (a: number, b: number): number => {
  return a > b ? zero : reduceFn(mapFn(a), mapReduce(mapFn, reduceFn, zero)(a + 1, b));
}

export const mapReduce2 = (
  reduceFn: (first: number, second: number) => number, zero: number
) => (mapFn: (value: number) => number) => (a: number, b: number): number => {
  return a > b ? zero : reduceFn(mapFn(a), mapReduce2(reduceFn, zero)(mapFn)(a + 1, b));
}
