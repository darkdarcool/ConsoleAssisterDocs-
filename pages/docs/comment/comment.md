# The Comment Class

The Comment class is used when you want to query and mutate data on a specific comment on Replit.

## Initializing a Comment
To create a comment, you do the following:

```js
const replapi = require('replapi-it');

let myComment = new replapi.user('replace-with-comment-id');
```

This class only takes the id of the comment as a number.