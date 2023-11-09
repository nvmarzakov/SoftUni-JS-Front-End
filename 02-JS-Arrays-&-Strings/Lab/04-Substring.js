function solve(str, ...args) {
    const startIndex = args[0];
    const count = args[1];

    const result = str.substring(startIndex, startIndex + count);
    console.log(result)
}

solve('ASentence', 1, 8)
solve('SkipWord', 4, 7)