# All Language Data

## Usage
```js
.getAllLangs()
```

This function is used to retrive all the information about a every language used on Replit.

It doesn't take in any parameters.

## Example
**Example Code**:
```js
const replapi = require('replapi-it');

let myLanguage = new replapi.Languages();
// or you could use:
// let myLanguage = new replapi.Languages('nodejs_static');

async function getAllLanguageData() {
  let info = await myLanguage.getAllLangs();
  console.log(info);
}

getAllLanguageData();
```
**Example Response**:
```json
NA
```