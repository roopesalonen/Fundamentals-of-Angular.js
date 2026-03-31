type ArrayValues = {
    sum: number;
    count: number;
}

function calcArray(numbers: number[]): ArrayValues {
    let sum = 0
    let count = numbers.length

    for (let i = 0; i < count; i++) {
        sum += numbers[i]
    }

    return {
        sum, count
    }

}

const arrayNumbers: number[] = [1, 5, 5, 5, 6];
const test = calcArray(arrayNumbers);
console.log(`Sum: ${test.sum} & count: ${test.count}`);
