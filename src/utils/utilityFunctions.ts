export const totalErrors = (enteredChar: string, expectedChar: string) => {
    const expectedCharacters = expectedChar.split("");

    return expectedCharacters.reduce((errors, expected, i) => {
        const entered = enteredChar[i];
        if (entered !== expected) {
            errors++;
        }
        return errors;
    }, 0);
};

export const totalWords = (enteredText: string, expectedText: string) => {
    const enteredWords = enteredText.trim().split(/\s+/);
    const expectedWords = expectedText.trim().split(/\s+/);


    let correctWordsAmount = 0;

    for (let i = 0; i < expectedWords.length; i++) {
        if (enteredWords[i] === expectedWords[i]) {
            correctWordsAmount++;
        }
    }

    return correctWordsAmount;
};
