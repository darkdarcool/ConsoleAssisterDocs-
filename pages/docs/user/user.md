# The User Class

The User class is used when you want to query and mutate data on a specific user on Replit.

## Initializing a User
To create a user, you do the following:

```js
const replapi = require('replapi-it');

let myUser = new replapi.User('replace-with-username');
```

This class only takes the name of the user (in proper case) as a string.