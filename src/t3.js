const { getRandomWord } = require('word-maker');

(async () => {
    let counter = 1;

    while (counter <= 100) {
        const result = await getRandomWord();
        console.log(`${counter}: ${result}`);
        counter++;
    }
})();