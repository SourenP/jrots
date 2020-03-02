WORD_LENGTH_TO_WORD = {
    1: ["A", "B", "C"],
    2: ["CG"],
    3: ["GAL"]
}

assignWords = function(letters) {
    // Get displayed letter
    var displayed_letters = letters.filter(
        letter => letter.getDisplay() && letter.text !== undefined);
    if (displayed_letters.length === 0) {
        return;
    }

    // Pick the word to show
    if (WORD_LENGTH_TO_WORD[displayed_letters.length] === undefined) {
        return;
    }
    var words = WORD_LENGTH_TO_WORD[displayed_letters.length]
    var word = words[Math.floor(Math.random() * words.length)];

    // Sort to be in left to right order horizontally
    displayed_letters.sort(function(a, b) {
        return a.position.x - b.position.x;
    });

    // Replace letters with word
    for (let i = 0; i < displayed_letters.length; i++) {
        displayed_letters[i].text = word[i];
    }
}