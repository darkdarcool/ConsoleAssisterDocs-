# Comment Data

## Usage
```js
.commentData()
```

This function is used to retrive information about a specific comment.

It doesn't take in any parameters.

## Example
**Example Code**:
```js
const replapi = require('replapi-it');

let myComment = new replapi.Comment(486420);

async function getCommentData() {
  let info = await myComment.commentData();
  console.log(info);
}

getCommentData();
```

**Example Response**:
```json
{
    "id": 486420,
    "body": "This is an Example Comment for the ReplAPI.it Package.",
    "voteCount": 2,
    "timeCreated": "2021-03-27T18:02:58.826Z",
    "timeUpdated": "2021-03-27T18:03:47.791Z",
    "user":
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
        "languages": [],
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
    },
    "url": "/talk/share/This-is-an-Example-Comment-for-the-ReplA/131485/486420",
    "post":
    {
        "id": 131485
    },
    "parentComment": null,
    "comments":
    [
        {
            "id": 486622
        }
    ],
    "isAuthor": false,
    "canEdit": false,
    "canVote": false,
    "canComment": false,
    "hasVoted": false,
    "canReport": false,
    "hasReported": false,
    "isAnswer": false,
    "canSelectAsAnswer": false,
    "canUnselectAsAnswer": false,
    "preview": "This is an Example Comment for the ReplAPI.it Package."
}
```