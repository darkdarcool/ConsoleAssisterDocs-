# Create Comment ($)

## Usage
```js
.createComment(message)
```

This function is used to create a comment on a post.

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

let myPost = new replapi.Post(131485);

async function createComment() {
  let info = await myPost.createComment('Hello!');
  console.log(info);
}

createComment();
```

**Example Response**:
```json
NA
```