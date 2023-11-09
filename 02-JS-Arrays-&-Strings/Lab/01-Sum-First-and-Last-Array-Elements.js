function solve(arrOfNumbers) {
    let firstElement = arrOfNumbers[0];
    let lastElement = arrOfNumbers[arrOfNumbers.length - 1];
    let sumElements = firstElement + lastElement;

    console.log(sumElements);
}

solve([20, 30, 40])
solve([10, 17, 22, 33])