# Board Data

## Usage
```js
.boardData()
```

This function is used to retrive information about a specific board.

It doesn't take in any parameters.

## Example
**Example Code**:
```js
const replapi = require('replapi-it');

let myBoard = new replapi.Board('share');

async function getBoardData() {
  let info = await myBoard.boardData();
  console.log(info);
}

getBoardData();
```
**Example Response**:
```json
{
    "id": 3,
    "url": "/talk/share",
    "slug": "share",
    "cta": "Share your repl!",
    "titleCta": "Title",
    "bodyCta": "Describe your repl or website",
    "buttonCta": "Share",
    "description": "Share your repls and programming experiences",
    "name": "Share",
    "replRequired": true,
    "isLocked": false,
    "isPrivate": false
}
```