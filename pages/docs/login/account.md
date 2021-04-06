# Create Client

## Usage
```js
.account()
```

This function is used login a client.

It doesn't take in any parameters.

> At the current time, logged in functions are not possible due to Replit locking the site down

> To use a logged in function, you need to be added to the whitelist. Ping @RayhanADev on [https://replit.com/](https://replit.com/) to be added to the whitelist.

## Example
**Example Code**:
```js
const replapi = require('replapi-it');

let myClient = new replapi.Login('HelperFurret', 'SuperSecretPassword');

async function loginAccount() {
  let info = await myClient.account();
  console.log(info);
}

loginAccount();
```
**Example Response**:
```json
NA
```