function solve(word, text) {

    let wordsArray = text.toLowerCase().split(' ');
    let output = `${word} not found!`

    for(let index = 0; index < wordsArray.length; index++){
        let currentWord = wordsArray[index];

        if (word === currentWord) {
            output = currentWord;
        }
    }
    console.log(output);
}

solve('javascript', 'JavaScript is the best programming language');