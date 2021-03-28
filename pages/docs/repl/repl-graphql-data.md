# Repl GraphQL Data

## Usage
```js
.replGraphQLData()
```

This function is used to retrive information about a specific repl **from the GraphQL**.

It doesn't take in any parameters.

## Example
**Example Code**:
```js
const replapi = require('replapi-it');

let myRepl = new replapi.Repl('HelperFurret', 'Example Project');

async function getReplGraphQLData() {
  let info = await myRepl.replGraphQLData();
  console.log(info);
}

getReplGraphQLData();
```

**Example Response**:
```json
{
    "id": "7f7c5b9f-8cff-49f3-ab09-5666dca1104b",
    "hostedUrl": "https://7f7c5b9f-8cff-49f3-ab09-5666dca1104b.id.repl.co",
    "title": "Example Project",
    "lang":
    {
        "id": "nodejs_static",
        "displayName": "nodejs statuc: this is just a test... pls don't use",
        "key": "nodejs_static",
        "category": "Hidden",
        "tagline": "azaaaaaaaaaaaaaaaaaaaaa",
        "icon": "https://repl.it/public/images/languages/javascript.svg",
        "isNew": false
    },
    "language": "nodejs_static",
    "timeCreated": "2021-03-27T17:58:47.979Z",
    "comments":
    {
        "pageInfo":
        {
            "nextCursor": null
        },
        "items": []
    }
}
```