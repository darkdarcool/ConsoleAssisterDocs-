# Post Data
```js
.postData()
```

This function is used to retrive information about a specific post.

It doesn't take in any parameters.

> Be warned, getting posts by User is not very efficient, and it is recommend that you use the *Post* class to gather data on specific posts.

**Example Code**:
```js
const replapi = require('replapi-it');

let myPost = new replapi.Post(131485);

async function getPostData() {
  let info = await myUser.postData('', 1, '');
  console.log(info);
}

getPostData();
```

**Example Response**:
```json
[
	{
		id: 131485,
		title: 'Example Post',
		body:
			"This is an Example Post for the ReplAPI.it Package.\nCould a mod please unlist this post for me? (it's @RayhanADev btw)",
		showHosted: false,
		voteCount: 2,
		votes: {
			pageInfo: { nextCursor: null },
			items: [
				{
					user: {
						id: 4045907,
						username: 'RayhanADev',
						url: '/@RayhanADev',
						image:
							'https://storage.googleapis.com/replit/images/1614269164801_e6b32cfbd77875fe6cf8287890ef1247.png',
						karma: 1620,
						firstName: 'Ray',
						lastName: 'The Furret Dev',
						fullName: 'Ray The Furret Dev',
						displayName: 'Ray',
						isLoggedIn: false,
						bio:
							'Hiya, name’s Ray and I sometimes do Fullstack Development! || Check out https://ray.is-a.dev/ or https://github.com/RayhanADev! || 🄵🅄🅁🅁🄴🅃🅂',
						timeCreated: '2020-09-09T12:47:49.218Z',
						organization: { name: 'Gone Like the Wind?' },
						subscription: { planId: 'hacker2' },
						languages: [
							{
								id: 'nodejs',
								displayName: 'Node.js',
								key: 'nodejs',
								category: 'Practical',
								tagline: 'Evented I/O for V8 JavaScript.',
								icon: 'https://repl.it/public/images/languages/nodejs.svg',
								isNew: false
							},
							{
								id: 'html',
								displayName: 'HTML, CSS, JS',
								key: 'html',
								category: 'Web',
								tagline: 'The languages that make up the web.',
								icon: '/public/images/languages/web_project.svg',
								isNew: false
							},
							{
								id: 'bash',
								displayName: 'Bash',
								key: 'bash',
								category: 'Practical',
								tagline: 'The classic Unix shell',
								icon: 'https://icons.util.repl.co/bash.svg',
								isNew: false
							},
							{
								id: 'python3',
								displayName: 'Python',
								key: 'python3',
								category: 'Practical',
								tagline: 'A dynamic language emphasizing readability.',
								icon: 'https://repl.it/public/images/languages/python.svg',
								isNew: false
							},
							{
								id: 'polygott',
								displayName: 'polygott',
								key: 'polygott',
								category: 'Hidden',
								tagline: 'An elegant image for a more civilized age',
								icon: 'https://repl.it/public/images/languages/language.svg',
								isNew: false
							},
							{
								id: 'lolcode',
								displayName: 'LOLCODE',
								key: 'lolcode',
								category: 'Esoteric',
								tagline: 'The basic language of lolcats.',
								icon: '/public/images/languages/lolcode.svg',
								isNew: false
							}
						],
						roles: [
							{
								id: '4045907:self_learner',
								name: 'self learner',
								key: 'SELF_LEARNER',
								tagline: null
							},
							{
								id: '4045907:explorer',
								name: 'explorer',
								key: 'EXPLORER',
								tagline: 'Helps test Repl.it beta features'
							},
							{
								id: '4045907:content_creator',
								name: 'content creator',
								key: 'CONTENT_CREATOR',
								tagline: 'Creates awesome tutorials and templates for Repl.it'
							}
						]
					}
				},
				{
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
						languages: [
							{
								id: 'nodejs',
								displayName: 'Node.js',
								key: 'nodejs',
								category: 'Practical',
								tagline: 'Evented I/O for V8 JavaScript.',
								icon: 'https://repl.it/public/images/languages/nodejs.svg',
								isNew: false
							}
						],
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
					}
				}
			]
		},
		commentCount: 2,
		isPinned: false,
		isLocked: false,
		timeCreated: '2021-03-27T18:02:13.975Z',
		timeUpdated: '2021-03-27T18:03:43.471Z',
		url: '/talk/share/Example-Post/131485',
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
			languages: [
				{
					id: 'nodejs',
					displayName: 'Node.js',
					key: 'nodejs',
					category: 'Practical',
					tagline: 'Evented I/O for V8 JavaScript.',
					icon: 'https://repl.it/public/images/languages/nodejs.svg',
					isNew: false
				}
			],
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
		board: {
			id: 3,
			url: '/talk/share',
			slug: 'share',
			cta: 'Share your repl!',
			titleCta: 'Title',
			bodyCta: 'Describe your repl or website',
			buttonCta: 'Share',
			description: 'Share your repls and programming experiences',
			name: 'Share',
			replRequired: true,
			isLocked: false,
			isPrivate: false
		},
		repl: {
			id: '7f7c5b9f-8cff-49f3-ab09-5666dca1104b',
			hostedUrl: 'https://7f7c5b9f-8cff-49f3-ab09-5666dca1104b.id.repl.co',
			title: 'Example Project',
			lang: {
				id: 'nodejs_static',
				displayName: "nodejs statuc: this is just a test... pls don't use",
				key: 'nodejs_static',
				category: 'Hidden',
				tagline: 'azaaaaaaaaaaaaaaaaaaaaa',
				icon: 'https://repl.it/public/images/languages/javascript.svg',
				isNew: false
			},
			language: 'nodejs_static',
			timeCreated: '2021-03-27T17:58:47.979Z'
		},
		isAnnouncement: false,
		isAuthor: false,
		canEdit: false,
		canComment: false,
		canVote: false,
		canPin: false,
		canSetType: false,
		canChangeBoard: false,
		canLock: false,
		hasVoted: false,
		canReport: false,
		hasReported: false,
		isAnswered: false,
		isAnswerable: false,
		answeredBy: null,
		answer: null,
		tutorialPages: [
			"This is an Example Post for the ReplAPI.it Package.\nCould a mod please unlist this post for me? (it's @RayhanADev btw)\n"
		],
		preview:
			"This is an Example Post for the ReplAPI.it Package.\nCould a mod please unlist this post for me? (it's @RayhanADev btw)"
	}
];
```