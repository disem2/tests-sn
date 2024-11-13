import {
  sumCubes,
  sumCubes2,
  sumFactorial,
  sumFactorial2,
  sumInt2,
  sumInts,
  sumMap,
  sumMap2,
  sumSquares,
  sumSquares2
} from "./sum";
import {
  prodCubes,
  prodInts,
  prodSquares,
  prodFactorial,
  prodMap,
  prodInt2,
  prodSquares2,
  prodCubes2,
  prodFactorial2,
  prodMap2
} from "./prod";
import { mapReduce } from "./utils";

console.log('sumInts(1, 5)', sumInts(1, 5));
console.log('sumSquares(1, 5)', sumSquares(1, 5));
console.log('sumCubes(1, 5)', sumCubes(1, 5));
console.log('sumFactorial(1, 5)', sumFactorial(1, 5));
console.log('sumMap(x => x)(1, 5)', sumMap(x => x)(1, 5));
console.log('sumMap(x => Math.pow(x, 2))(1, 5)', sumMap(x => Math.pow(x, 2))(1, 5));
console.log('sumInt2(1, 5)', sumInt2(1, 5));
console.log('sumSquares2(1, 5)', sumSquares2(1, 5));
console.log('sumCubes2(1, 5)', sumCubes2(1, 5));
console.log('sumFactorial2(1, 5)', sumFactorial2(1, 5));
console.log('prodInts(1, 5)', prodInts(1, 5));
console.log('prodSquares(1, 5)', prodSquares(1, 5));
console.log('prodCubes(1, 5)', prodCubes(1, 5));
console.log('prodFactorial(1, 5)', prodFactorial(1, 5));
console.log('prodMap(x => Math.pow(x, 2))(1, 5)', prodMap(x => Math.pow(x, 2))(1, 5));
console.log('prodInt2(1, 5)', prodInt2(1, 5));
console.log('prodSquares2(1, 5)', prodSquares2(1, 5));
console.log('prodCubes2(1, 5)', prodCubes2(1, 5));
console.log('prodFactorial2(1, 5)', prodFactorial2(1, 5));
console.log('mapReduce for prodCube (1, 5)', mapReduce(x => Math.pow(x, 3), (a, b) => a * b, 1)(1, 5));
console.log('sumMap2(x => x)(1, 5)', sumMap2(x => x)(1, 5));
console.log('prodMap2(x => x)(1, 5)', prodMap2(x => x)(1, 5));
