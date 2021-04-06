# The Board Class

The Board class is used when you want to query and data on a specific user on Replit.

> Note, mutations on the Board are not included in the package for security reasons

## Initializing a Board
To create a board, you do the following:

```js
const replapi = require('replapi-it');

let myBoard = new replapi.Board('replace-with-board-slug');
```

This class only takes the slug of the board (in lower case) as a string.