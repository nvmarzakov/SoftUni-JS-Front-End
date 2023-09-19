function solve(numberOfPeoples, typeOfGroup, dayOfWeek) {
    let totalPrice;
    let pricePerPerson;

    if (typeOfGroup === "Students") {
        switch (dayOfWeek) {
            case "Friday":
                pricePerPerson = 8.45;
                break;
            case "Saturday":
                pricePerPerson = 9.80;
                break;
            case "Sunday":
                pricePerPerson = 10.46;
        }

    } else if (typeOfGroup === "Business") {
        switch (dayOfWeek) {
            case "Friday":
                pricePerPerson = 10.90;
                break;
            case "Saturday":
                pricePerPerson = 15.60;
                break;
            case "Sunday":
                pricePerPerson = 16;
                break;
        }
    } else if (typeOfGroup === "Regular") {
        switch (dayOfWeek) {
            case "Friday":
                pricePerPerson = 15;
                break;
            case "Saturday":
                pricePerPerson = 20;
                break;
            case "Sunday":
                pricePerPerson = 22.50;
        }
    }
    totalPrice = numberOfPeoples * pricePerPerson
    if (typeOfGroup === "Students" && numberOfPeoples >= 30) {
        totalPrice *= 0.85;
    } else if (typeOfGroup === "Business" && numberOfPeoples >= 100) {
        totalPrice -= 10 * pricePerPerson;
    } else if (typeOfGroup === "Regular" && numberOfPeoples >= 10 && numberOfPeoples <= 20) {
        totalPrice *= 0.95;
    }
        console.log(`Total price: ${totalPrice.toFixed(2)}`)
}

solve(
    40,
"Regular",
"Saturday"
)
