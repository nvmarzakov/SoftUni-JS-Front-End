function sumDigits(number) {
    let result = 0;
    let digitsToString = number.toString();
    for (let i = 0; i < digitsToString.length; i++) {
        let digit = Number(digitsToString[i]);
        result += digit;
    }

    console.log(result)

}

sumDigits(543)