function censoredWords(sentence, word) {
    const regex = new RegExp(word, 'g');
    const replacement = "*".repeat(word.length);
    console.log(sentence.replace(regex, replacement));
}

censoredWords("test 1234534 test", "test")