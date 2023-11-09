function solve(inputArr) {
    let sumEven = 0;
    let sumOdd = 0;

    for (let index = 0; index < inputArr.length; index++) {
        const element = Number(inputArr[index]);
        
        if (element % 2 === 0) {
            sumEven += element;
        } else {
            sumOdd += element
        }
    }

    return sumEven - sumOdd
}


let result = solve([3,5,7,9])
console.log(result)