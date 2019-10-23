const {getRandomWordSync, getRandomWord} = require('word-maker');
const perf = require('execution-time')(console.log);
const fs = require('fs');
const http = require('http');

perf.start();

http.createServer(async (req, res) => {

    let counter = 1;
    const responseData = {};
    const devFile = fs.createWriteStream('fizzBuzz.txt');

    while (counter <= 100) {
        const result = `${counter % 3 ? '' : 'Fizz'}${counter % 5 ? '' : 'Buz'}`;

        try {
            devFile.write(`${counter}: ${result || await getRandomWord({withErrors: true})}\n`);
            responseData[counter] = `${result || await getRandomWord({withErrors: true})}`;
        } catch {
            devFile.write(`${counter}: It shouldn't break anything!\n`);
            responseData[counter] = `It shouldn't break anything!`;
        }

        counter++;
    }
    perf.stop();

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(responseData));
}).listen('3004');


