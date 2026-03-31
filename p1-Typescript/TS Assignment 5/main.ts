import { Calculator } from "./calculator"

const arrayNumbers: number[] = [1, 5, 5, 5, 6]
const test = new Calculator().calcArray(arrayNumbers)
console.log(`Sum: ${test.sum} & count: ${test.count}`);
