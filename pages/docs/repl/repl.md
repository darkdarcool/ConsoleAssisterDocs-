# The Repl Class

The Repl class is used when you want to query and mutate data on a specific repl on Replit.

## Initializing a Repl
To create a repl, you do the following:

```js
const replapi = require('replapi-it');

let myRepl = new replapi.Repl('replace-with-username', 'replace-with-slug');
```

This class only takes the name of the user (in proper case) and the slug/title of the repl (in proper case) as a string.