# Comment 

## Usage
```js
.commentData(after, count, order)
```

This function is used to retrive the comments a specific user wrote.

It takes in the *after*, *count*, and *order* fields.

| Parameter Name | Description | Default Value |
| :---: | :---: | :---: |
| after | page to continue from | '' |
| count | number of comments to retrieve | 50 |
| order | order to sort the comments | '' |

> Be warned, getting comments by User is not very efficient, and it is recommend that you use the *Comment* class to gather data on specific comment.

## Example
**Example Code**:
```js
const replapi = require('replapi-it');

let myUser = new replapi.User('HelperFurret');

async function getCommentData() {
  let info = await myUser.commentData('', 2, '');
  console.log(info);
}

getCommentData();
```

**Example Response**:
```json
[
	{
		id: 486420,
		body: 'This is an Example Comment for the ReplAPI.it Package.',
		voteCount: 2,
		timeCreated: '2021-03-27T18:02:58.826Z',
		timeUpdated: '2021-03-27T18:03:47.791Z',
		user: {
			id: 4490250,
			username: 'HelperFurret',
			url: '/@HelperFurret',
			image:
				'https://storage.googleapis.com/replit/images/1616867701790_0e06eaf3f00d0c99cec2edda33640131.png',
			karma: 2,
			firstName: 'The Most Helpful',
			lastName: 'Furret',
			fullName: 'The Most Helpful Furret',
			displayName: 'The Most Helpful',
			isLoggedIn: false,
			bio:
				'Hiya! I’m a nice helper Furret from Pokemon! Check out my favorite Trainer: https://replit.com/@RayhanADev!',
			timeCreated: '2020-10-21T15:15:37.175Z',
			organization: { name: 'Furret Developer' },
			subscription: { planId: 'hacker2' },
			languages: [],
			roles: [
				{
					id: '4490250:self_learner',
					name: 'self learner',
					key: 'SELF_LEARNER',
					tagline: null
				},
				{
					id: '4490250:explorer',
					name: 'explorer',
					key: 'EXPLORER',
					tagline: 'Helps test Repl.it beta features'
				}
			]
		},
		url: '/talk/share/This-is-an-Example-Comment-for-the-ReplA/131485/486420',
		post: { id: 131485 },
		parentComment: null,
		comments: [],
		isAuthor: false,
		canEdit: false,
		canVote: false,
		canComment: false,
		hasVoted: false,
		canReport: false,
		hasReported: false,
		isAnswer: false,
		canSelectAsAnswer: false,
		canUnselectAsAnswer: false,
		preview: 'This is an Example Comment for the ReplAPI.it Package.'
	},
	{
		id: 486421,
		body: 'This is another Example Comment for the ReplAPI.it Package.',
		voteCount: 1,
		timeCreated: '2021-03-27T18:03:15.307Z',
		timeUpdated: '2021-03-27T18:03:15.307Z',
		user: {
			id: 4490250,
			username: 'HelperFurret',
			url: '/@HelperFurret',
			image:
				'https://storage.googleapis.com/replit/images/1616867701790_0e06eaf3f00d0c99cec2edda33640131.png',
			karma: 2,
			firstName: 'The Most Helpful',
			lastName: 'Furret',
			fullName: 'The Most Helpful Furret',
			displayName: 'The Most Helpful',
			isLoggedIn: false,
			bio:
				'Hiya! I’m a nice helper Furret from Pokemon! Check out my favorite Trainer: https://replit.com/@RayhanADev!',
			timeCreated: '2020-10-21T15:15:37.175Z',
			organization: { name: 'Furret Developer' },
			subscription: { planId: 'hacker2' },
			languages: [],
			roles: [
				{
					id: '4490250:self_learner',
					name: 'self learner',
					key: 'SELF_LEARNER',
					tagline: null
				},
				{
					id: '4490250:explorer',
					name: 'explorer',
					key: 'EXPLORER',
					tagline: 'Helps test Repl.it beta features'
				}
			]
		},
		url: '/talk/share/This-is-another-Example-Comment-for-the/131485/486421',
		post: { id: 131485 },
		parentComment: null,
		comments: [],
		isAuthor: false,
		canEdit: false,
		canVote: false,
		canComment: false,
		hasVoted: false,
		canReport: false,
		hasReported: false,
		isAnswer: false,
		canSelectAsAnswer: false,
		canUnselectAsAnswer: false,
		preview: 'This is another Example Comment for the ReplAPI.it Package.'
	}
];
```