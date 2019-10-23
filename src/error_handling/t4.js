const { getRandomWord } = require('word-maker');

(async () => {
    let counter = 1;

    while (counter <= 100) {
        const result = `${counter % 3 ? '' : 'Fizz'}${counter % 5 ? '' : 'Buz'}`;

        try {
            console.log(`${counter}: ${result || await getRandomWord({withErrors: true})}`);
        } catch {
            console.log(`${counter}: It shouldn't break anything!`);
        }

        counter++;
    }
})();
