function solve(num1, num2) {
    let elements = [];
    let sumElements = 0;
    for(let i= num1; i <= num2; i++) {
        elements.push(i)
        sumElements += i;
    }
    console.log(elements.join(" "))
    console.log(`Sum: ${sumElements}`)
}

solve(0, 26)