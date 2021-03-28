# The Post Class

The Post class is used when you want to query and mutate data on a specific post on Replit.

## Initializing a Post
To create a post, you do the following:

```js
const replapi = require('replapi-it');

let myPost = new replapi.user('replace-with-post-id');
```

This class only takes the id of the post as a number.