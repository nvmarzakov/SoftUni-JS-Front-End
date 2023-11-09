function solve(age) {
    let result;
    if (age >= 66) {
        result = "elder";
    } else if (20 <= age) {
        result = "adult";
    } else if (14 <= age) {
        result = "teenager";
    } else if (3 <= age) {
        result = "child";
    } else if (0 <= age) {
        result = "baby";
    } else {
        result = "out of bounds"
    }
    console.log(result)
}

solve(-1)