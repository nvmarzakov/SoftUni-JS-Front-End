function solve(num) {
    let result = 0;
    let numToString = num.toString();
    let isSame = true;
    let stringNew = ""
    for (let i = 0; i < numToString.length; i++) {
        if (numToString[0] === numToString[i]) {
            stringNew += numToString[i];
        }
        let digit = Number(numToString[i]);
        result += digit;


    }
    console.log(stringNew === numToString);
    console.log(result)

}

solve(2222222)