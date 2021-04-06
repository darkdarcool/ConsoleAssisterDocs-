# The Login Class

The Login class is used to setup a client to use on Replit.

> At the current time, logged in functions are not possible due to Replit locking the site down

> To use a logged in function, you need to be added to the whitelist. Ping @RayhanADev on [https://replit.com/](https://replit.com/) to be added to the whitelist.

## Initializing Login
To login, you do the following:

```js
const replapi = require('replapi-it');

let myClient = new replapi.Login('HelperFurret', 'SuperSecretPassword');
```

This class takes your username and password (in proper case) as a string.

> It is good practice to store your username and password in a .env file or other form of protection.