# The Languages Class

The Languages class is used when you want to retrieve data on a language available on Replit.

## Initializing a Language
To create a language, you can do either of the following:

**Initialize Languages for a Specific Language**
```js
const replapi = require('replapi-it');

let myLanguage = new replapi.Languages('nodejs-static');
```

or **Initialize Languages for a All Languages**
```js
const replapi = require('replapi-it');

let myLanguage = new replapi.Languages();
```

This class can take no parameters or the slug of the language (in lower case) as a string.