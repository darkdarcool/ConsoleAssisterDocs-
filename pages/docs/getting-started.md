# Getting Started

To get started with ReplAPI.it, first confirm that you have the **latest version of NodeJS** (currently v14.x) and your preferred package manager (NPM or Yarn). Then install the package:

```bash
$ # using NPM
$ npm install replapi-it
$
$ # or using Yarn
$ yarn install replapi-it
```

and finally require the package in your file.

```js
const replapi = require('replapi-it');
```

Now we can get started using the package!

This package is written to be **asynchronous** and **[class-based](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)**. You create a new class for each item you want query and then perform queries on the specific item. For example, **getting the posts on a board might look like**:

```js
const replapi = require('replapi-it');

let learnBoard = new replapi.Board('learn');

async function getBoardPosts(count) {
  // Remember to use async/await
  let info = await learnBoard.boardPosts('', '', count);
  console.log(info);
}

getBoardPosts(1);
```

Use asynchronous best practices with this package, as many errors in code can be avoided by double checking your async functions!