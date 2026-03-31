import { Values } from "./values"

export class Calculator {
    calcArray(numbers: number[]): Values {
        let sum = 0
        let count = numbers.length

        for (let i = 0; i < count; i++) {
            sum += numbers[i]
        }

        return new Values(sum, count)
    }
}
