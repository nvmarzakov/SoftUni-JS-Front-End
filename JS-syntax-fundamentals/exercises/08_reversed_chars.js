function solve(char1, char2, char3) {
    let string = char1 + char2 + char3
    let reversedString = [];
    for (let i = string.length - 1; i >=0; i--)
        reversedString.push(string[i])
    console.log(reversedString.join(" "))
}

solve('1',
'L',
'&')