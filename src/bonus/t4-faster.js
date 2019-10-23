const { getRandomWord } = require('word-maker');
const perf = require('execution-time')(console.log);

perf.start();

const dataLength = 100;
const promises = [];
const results = new Array(dataLength);

const generateWord = async (counter) => {
    const result = `${counter % 3 ? '' : 'Fizz'}${counter % 5 ? '' : 'Buz'}`;
    results[counter.toString()] = `${counter}: ${result || await getRandomWord({slow: false})}`;
};

(async () => {
    let counter = 1;

    while (counter <= dataLength) {
        promises.push(generateWord(counter));
        counter++;
    }

    await Promise.all(promises);

    console.log(results.toString().split(',').join("\n"));

    perf.stop();
})();