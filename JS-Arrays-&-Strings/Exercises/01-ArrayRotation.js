function solve(array, rotations) {

    for (let index = 0; index < rotations; index++) {
        let firstElement = array.shift();
        array.push(firstElement);
    }

    console.log(array.join(' '));

}

solve([51, 47, 32, 61, 21], 2);
solve([32, 21, 61, 1], 4);
