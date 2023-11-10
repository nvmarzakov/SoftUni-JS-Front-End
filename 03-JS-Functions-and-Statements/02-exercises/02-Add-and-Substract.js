function demo(first, second, third) {
    let sum = (first, second) => {
        return first + second;
    };

    let subtract = (sum, third) => {
        return sum - third;
    }

    console.log(subtract(sum(first, second), third));
}

demo(23, 6, 10);
