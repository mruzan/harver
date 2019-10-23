const { getRandomWordSync, getRandomWord } = require('word-maker');
const perf = require('execution-time')(console.log);

perf.start();

(async () => {
    let counter = 1;

    while (counter <= 100) {
        const result = `${counter%3 ? '':'Fizz'}${counter%5 ? '':'Buz'}`;

        console.log(`${counter}: ${result || await getRandomWord({ slow: true })}`);
        
        counter++;
    }
    perf.stop();
})();