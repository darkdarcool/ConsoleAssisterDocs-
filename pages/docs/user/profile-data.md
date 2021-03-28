# Profile Data

## Usage
```js
.profileData()
```

This function is used to retrive information about a specific user.

It doesn't take in any parameters.

## Example
**Example Code**:
```js
const replapi = require('replapi-it');

let myUser = new replapi.User('HelperFurret');

async function getProfileData() {
  let info = await myUser.profileData();
  console.log(info);
}

getProfileData();
```
**Example Response**:
```json
{
    "id": 4490250,
    "username": "HelperFurret",
    "url": "/@HelperFurret",
    "image": "https://storage.googleapis.com/replit/images/1616867701790_0e06eaf3f00d0c99cec2edda33640131.png",
    "karma": 2,
    "firstName": "The Most Helpful",
    "lastName": "Furret",
    "fullName": "The Most Helpful Furret",
    "displayName": "The Most Helpful",
    "isLoggedIn": false,
    "bio": "Hiya! I’m a nice helper Furret from Pokemon! Check out my favorite Trainer: https://replit.com/@RayhanADev!",
    "timeCreated": "2020-10-21T15:15:37.175Z",
    "organization":
    {
        "name": "Furret Developer"
    },
    "subscription":
    {
        "planId": "hacker2"
    },
    "languages":
    [
        {
            "id": "nodejs",
            "displayName": "Node.js",
            "key": "nodejs",
            "category": "Practical",
            "tagline": "Evented I/O for V8 JavaScript.",
            "icon": "https://repl.it/public/images/languages/nodejs.svg",
            "isNew": false
        }
    ],
    "roles":
    [
        {
            "id": "4490250:self_learner",
            "name": "self learner",
            "key": "SELF_LEARNER",
            "tagline": null
        },
        {
            "id": "4490250:explorer",
            "name": "explorer",
            "key": "EXPLORER",
            "tagline": "Helps test Repl.it beta features"
        }
    ]
}
```