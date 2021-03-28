# Repl RESTful Data

## Usage
```js
.replRESTData()
```

This function is used to retrive information about a specific repl **from the RESTful API**.

It doesn't take in any parameters.

## Example
**Example Code**:
```js
const replapi = require('replapi-it');

let myRepl = new replapi.Repl('HelperFurret', 'Example Project');

async function getReplRESTData() {
  let info = await myRepl.replRESTData();
  console.log(info);
}

getReplRESTData();
```

**Example Response**:
```json
{
    "id": "7f7c5b9f-8cff-49f3-ab09-5666dca1104b",
    "user_id": 4490250,
    "title": "Example Project",
    "description": "",
    "is_project": false,
    "is_private": false,
    "time_created": "2021-03-27T17:58:47.979Z",
    "time_updated": "2021-03-27T17:59:10.045Z",
    "views": 0,
    "content_length": 0,
    "origin_id": "80718afa-47f0-4c89-b95f-c0b8693de964",
    "slug": "Example-Project",
    "config": {},
    "is_renamed": true,
    "folder_id": null,
    "url": "/@HelperFurret/Example-Project",
    "language": "nodejs_static",
    "fileNames":
    [
        "index.js"
    ],
    "is_owner": false,
    "show_chat": false,
    "is_mobile": false
}
```