# The Notifications Class

The Notifications class is used when you want to query data on a client's notifications.

> The Notifications class is still in beta and still has not undergone proper testing, as such it does not have proper public documentation

> At the current time, logged in functions are not possible due to Replit locking the site down

> To use a logged in function, you need to be added to the whitelist. Ping @RayhanADev on [https://replit.com/](https://replit.com/) to be added to the whitelist.

## Initializing Notifications
To create a notifications, you do the following:

```js
const replapi = require('replapi-it');

let myNotifications = new replapi.Notifications();
```

This class takes no parameters.