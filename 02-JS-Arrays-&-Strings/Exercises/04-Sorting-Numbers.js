function solve(array) {

    let resultArray = [];
    let sortedArray = array.sort((a, b) => a - b);
    let arrayLenght = array.length;

    for (let index = 0; index < arrayLenght; index++) {
        
        if (index % 2 === 0) {
            resultArray.push(sortedArray.shift());
        } else {
            resultArray.push(sortedArray.pop());
        }
    }
    return resultArray
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])