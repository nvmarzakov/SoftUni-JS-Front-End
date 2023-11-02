function solve(n, inputArr) {
    let arr = [];
    for (let index = 0; index < n; index++) {
        let element = inputArr[index]
        arr.push(element);
        
    }
    arr.reverse();
    console.log(arr.join(" "))
}

solve(3, [10, 20, 30, 40, 50]);
solve(4, [-1, 20, 99, 5])