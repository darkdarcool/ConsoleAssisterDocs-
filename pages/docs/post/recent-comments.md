# Recent Comments

## Usage
```js
.recentComments()
```

This function is used to retrive the three most recent comments on a post.

It doesn't take in any parameters.

## Example
**Example Code**:
```js
const replapi = require('replapi-it');

let myPost = new replapi.Post(131485);

async function getPostData() {
  let info = await myPost.recentComments();
  console.log(info);
}

getRecentComments();
```

**Example Response**:
```json
// Working on it!
```