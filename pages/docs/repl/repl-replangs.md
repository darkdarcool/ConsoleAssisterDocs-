# REPLangs Data

## Usage
```js
.replLangs()
```

This function is used to retrive language data about a specific repl from RayhanADev's REPLangs API.

It doesn't take in any parameters.

## Example
**Example Code**:
```js
const replapi = require('replapi-it');

let myRepl = new replapi.Repl('HelperFurret', 'Example Project');

async function getReplLangs() {
  let info = await myRepl.replLangs();
  console.log(info);
}

getReplLangs();
```

**Example Response**:
```json
{
    "totalLanguages": 1,
    "languageCounts":
    [
        {
            "name": "javascript",
            "count": 1
        }
    ]
}
```