function solve(num, ...operations) {
    let number = Number(num)
    for (let i = 0; i<5; i++) {
        let currentOperation = operations[i];

        switch (currentOperation) {
            case "chop":
                number /= 2;
                break;
            case "dice":
                number = Math.sqrt(number);
                break;
            case "spice":
                number += 1;
                break;
            case "bake":
                number *= 3;
                break;
            case "fillet":
                number -= 0.2 * number;
                break;
        }
         console.log(number)
    }

}

solve(
   '32', 'chop', 'chop', 'chop', 'chop', 'chop'
)