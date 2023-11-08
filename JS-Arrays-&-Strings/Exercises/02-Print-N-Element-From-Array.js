function solve(array, step) {
    let output = [];
    let arrayLenght = array.length;

    for (let index = 0; index < arrayLenght; index += step) {
        let currentNumber = array[index];
        output.push(currentNumber);
    }

    return output;

}

let result = solve(['5', '20', '31', '4', '20'], 2);
console.log(result);