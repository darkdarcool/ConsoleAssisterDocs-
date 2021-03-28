# Delete Comment ($)

## Usage
```js
.deleteComment()
```

This function is used to delete a comment from ReplTalk.

It doesn't take in any parameters.

| Parameter Name | Description | Default Value |
| :---: | :---: | :---: |
| message | your string message | NA |

> At the current time, logged in functions are not possible due to Replit locking the site down

> To use a logged in function, you need to be added to the whitelist. Ping @RayhanADev on [https://replit.com/](https://replit.com/) to be added to the whitelist.

## Example
**Example Code**:
```js
const replapi = require('replapi-it');

let myComment = new replapi.Comment(486420);

async function deleteComment() {
  let info = await myComment.deleteComment();
  console.log(info);
}

deleteComment();
```

**Example Response**:
```json
NA
```