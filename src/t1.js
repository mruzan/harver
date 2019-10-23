const {getRandomWordSync} = require('word-maker');

let counter = 1;

while (counter <= 100) {
    console.log(`${counter}: ${getRandomWordSync()}`);
    counter++;
}