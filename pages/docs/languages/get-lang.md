# Specific Language Data

## Usage
```js
.getLang()
```

This function is used to retrive information about a specific language used on Replit.

It doesn't take in any parameters.

> Note: This function is only available to a Languages class initialized with a language slug

## Example
**Example Code**:
```js
const replapi = require('replapi-it');

let myLanguage = new replapi.Languages('nodejs_static');

async function getLanguageData() {
  let info = await myLanguage.getLang();
  console.log(info);
}

getLanguageData();
```
**Example Response**:
```json
{
    "displayName": "nodejs statuc: this is just a test... pls don't use",
    "tagline": "azaaaaaaaaaaaaaaaaaaaaa",
    "key": "nodejs_static",
    "entrypoint": "index.js",
    "ext": "js",
    "hasLint": false,
    "hasUnitTests": false,
    "hasProjectMode": true,
    "hasFormat": false,
    "hasLibraries": false,
    "hasUPM": true,
    "hasGit": true,
    "hasEval": false,
    "hasInterpreter": true,
    "hasLanguageServer": true,
    "header": "node v10.16.0",
    "category": "Hidden",
    "icon": "https://repl.it/public/images/languages/javascript.svg",
    "engine": "goval",
    "isNew": false,
    "config":
    {
        "isServer": false,
        "isVnc": false
    }
}
```