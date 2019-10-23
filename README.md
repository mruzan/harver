Harver JS Exercise
============================

## Get started

Set this repository up by running:

```
npm install
```

Edit your code in `src/index.js` and run `npm start` to run the code.

The tasks in this assessment use the included package `word-maker` which can be found in the directory
`./word-maker`. This directory also contains a *README.md* with details about its usage and API. The module
is already *required* for you in `src/index.js`

## Tasks

Complete these tasks in order. If you can't complete a task, just proceed with the next one.

1. Print numbers from 1 to 100 to the console, but for each number also print a random word using the function `getRandomWordSync`. E.g.

```
1: four
2: firm
3: shape
4: choice
5: coach
6: purple
...
100: buffalo
```

2. Modify your code to be a "Fizz Buzz" program. That is, print the numbers as in the previous step, but
for multiples of three, print "Fizz" (instead of the random word), for multiples of five, print "Buzz" and
for numbers which are both multiples of three and five, print "FizzBuzz".

3. Create a version of steps *1* and *2* using the **asynchronous** function, `getRandomWord`. This function
returns a Promise, which resolves to a random word string.

4. Add error handling to both the synchronous and asynchronous solutions (calling `getRandomWord({ withErrors: true })` will intermitently throw an error instead of returning a random word). When an error is caught, the programm should print "It shouldn't break anything!" instead of the random word, "Fizz", "Buzz" or "FizzBuzz"

5. For:
 * **Node developers**: Instead of printing the console. Write the information to a file in the root of this project.
 * **Frontend developers**, send your result to an HTTP endpoint (since there is no running endpoint, this
part of your solution does not need to actually run)

**Bonus:**
* The numbers should be printed in ascending order.
* Imagine `getRandomWord`'s implementation is slow and takes 500ms to complete (call `getRandomWord({ slow: true })` to emulate this). Can you make your solution run in less than 1000ms with the `slow` option turned on?