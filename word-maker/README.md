Word Maker
=======================

## Usage

```javascript
const { getRandomWordSync } = require('random-word');

const word = getRandomWordSync({ withErrors: false });
console.log(word);
```

## API

### getRandomWordSync(): string

Returns a random word

### Params

#### opts: object

An map of options

#### opts.withErrors: boolean

Will intermittently throw/reject instead of returning a random word.

Default: `false`

### getRandomWord(): Promise<string>

Asynchronous version of `getRandomWordSync()`. Returns a Promise which resolves to a random word string

### Params

#### opts: Object

An map of options

#### opts.withErrors: boolean

Will intermittently throw/reject instead of a random

Default: `false`


