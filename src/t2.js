const {getRandomWordSync} = require('word-maker');

let counter = 1;

while (counter <= 100) {
    console.log(`${counter}: ${counter % 3 ? '' : 'Fizz'}${counter % 5 ? '' : 'Buz'}`);
    counter++;
}

// OR
console.log('===========================');
// Non Fizz | Buzz numbers get random string using 'getRandomWordSync()' method

counter = 1;

while (counter <= 100) {
    const result = `${counter % 3 ? '' : 'Fizz'}${counter % 5 ? '' : 'Buz'}`;
    console.log(`${counter}: ${result || getRandomWordSync()}`);
    counter++;
}