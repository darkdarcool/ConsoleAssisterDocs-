# Update Comment ($)

## Usage
```js
.updateComment(message)
```

This function is used to update a comment's content.

It takes in the *message* field.

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

async function updateComment() {
  let info = await myComment.updateComment('This is difference!');
  console.log(info);
}

updateComment();
```

**Example Response**:
```json
NA
```