# Leaderboard Data

## Usage
```js
.leaderboardData(after, count, since)
```

This function is used to retrive the profile data of those on the leaderboard.

It takes in the *after*, *count*, and *since* fields.

| Parameter Name | Description | Default Value |
| :---: | :---: | :---: |
| after | page to continue from | '' |
| count | number of users to retrieve | 50 |
| since | a *KarmaSince* Enum  | *none* |

## Example
**Example Code**:
```js
const replapi = require('replapi-it');

let myLeaderboard = new replapi.Leaderboard();

async function getLeaderboardData() {
  let info = await myLeaderboard.leaderboardData('', 3, 'PAST_24_HOURS');
  console.log(info);
}

getLeaderboardData();
```

**Example Response**:
```json
[
    {
        "id": 1629507,
        "username": "HazTheWaz",
        "url": "/@HazTheWaz",
        "image": "https://storage.googleapis.com/replit/images/1550866621566_1146c7ae2b1a10494150ece4b1e53247.gi",
        "karma": 266,
        "firstName": null,
        "lastName": null,
        "fullName": "",
        "displayName": "HazTheWaz",
        "isLoggedIn": false,
        "bio": "the wavy colors of the Omega calms you\n",
        "timeCreated": "2019-02-22T13:45:30.000Z",
        "organization": null,
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
            },
            {
                "id": "ruby",
                "displayName": "Ruby",
                "key": "ruby",
                "category": "Practical",
                "tagline": "A natural dynamic object-oriented language.",
                "icon": "https://repl.it/public/images/languages/ruby.svg",
                "isNew": false
            },
            {
                "id": "html",
                "displayName": "HTML, CSS, JS",
                "key": "html",
                "category": "Web",
                "tagline": "The languages that make up the web.",
                "icon": "/public/images/languages/web_project.svg",
                "isNew": false
            },
            {
                "id": "python3",
                "displayName": "Python",
                "key": "python3",
                "category": "Practical",
                "tagline": "A dynamic language emphasizing readability.",
                "icon": "https://repl.it/public/images/languages/python.svg",
                "isNew": false
            },
            {
                "id": "bash",
                "displayName": "Bash",
                "key": "bash",
                "category": "Practical",
                "tagline": "The classic Unix shell",
                "icon": "https://icons.util.repl.co/bash.svg",
                "isNew": false
            },
            {
                "id": "go",
                "displayName": "Go",
                "key": "go",
                "category": "Practical",
                "tagline": "Statically typed yet expressive language with a focus on concurrency.",
                "icon": "https://repl.it/public/images/languages/go.svg",
                "isNew": false
            },
            {
                "id": "polygott",
                "displayName": "polygott",
                "key": "polygott",
                "category": "Hidden",
                "tagline": "An elegant image for a more civilized age",
                "icon": "https://repl.it/public/images/languages/language.svg",
                "isNew": false
            },
            {
                "id": "python",
                "displayName": "Python 2.7",
                "key": "python",
                "category": "Practical",
                "tagline": "A dynamic language emphasizing readability.",
                "icon": "https://repl.it/public/images/languages/python.svg",
                "isNew": false
            },
            {
                "id": "lolcode",
                "displayName": "LOLCODE",
                "key": "lolcode",
                "category": "Esoteric",
                "tagline": "The basic language of lolcats.",
                "icon": "/public/images/languages/lolcode.svg",
                "isNew": false
            },
            {
                "id": "csharp",
                "displayName": "C#",
                "key": "csharp",
                "category": "Practical",
                "tagline": "A Microsoft .NET programming language.",
                "icon": "https://repl.it/public/images/languages/csharp.svg",
                "isNew": false
            }
        ],
        "roles": []
    },
    {
        "id": 554831,
        "username": "thesephist",
        "url": "/@thesephist",
        "image": "https://storage.googleapis.com/replit/images/1546541348284_8c128ba70a96163ae76d0f3c7bd07963.jpe",
        "karma": 120,
        "firstName": "Linus",
        "lastName": "Lee",
        "fullName": "Linus Lee",
        "displayName": "Linus",
        "isLoggedIn": false,
        "bio": "I mostly tinker with JavaScript infrastructure. Find me at thesephist.com",
        "timeCreated": "2017-11-08T03:39:10.000Z",
        "organization":
        {
            "name": "UC Berkeley"
        },
        "subscription": null,
        "languages":
        [
            {
                "id": "html",
                "displayName": "HTML, CSS, JS",
                "key": "html",
                "category": "Web",
                "tagline": "The languages that make up the web.",
                "icon": "/public/images/languages/web_project.svg",
                "isNew": false
            },
            {
                "id": "nodejs",
                "displayName": "Node.js",
                "key": "nodejs",
                "category": "Practical",
                "tagline": "Evented I/O for V8 JavaScript.",
                "icon": "https://repl.it/public/images/languages/nodejs.svg",
                "isNew": false
            },
            {
                "id": "python3",
                "displayName": "Python",
                "key": "python3",
                "category": "Practical",
                "tagline": "A dynamic language emphasizing readability.",
                "icon": "https://repl.it/public/images/languages/python.svg",
                "isNew": false
            },
            {
                "id": "bash",
                "displayName": "Bash",
                "key": "bash",
                "category": "Practical",
                "tagline": "The classic Unix shell",
                "icon": "https://icons.util.repl.co/bash.svg",
                "isNew": false
            },
            {
                "id": "go",
                "displayName": "Go",
                "key": "go",
                "category": "Practical",
                "tagline": "Statically typed yet expressive language with a focus on concurrency.",
                "icon": "https://repl.it/public/images/languages/go.svg",
                "isNew": false
            },
            {
                "id": "sqlite",
                "displayName": "SQLite",
                "key": "sqlite",
                "category": "Practical",
                "tagline": "Embedded SQL database engine.",
                "icon": "https://icons--util.repl.co/sqlite.svg",
                "isNew": false
            }
        ],
        "roles": []
    },
    {
        "id": 1004283,
        "username": "eankeen",
        "url": "/@eankeen",
        "image": "https://storage.googleapis.com/replit/images/1566584196199_ab97cbc8621cc8b8ce54ea0d8025e8fa.gif",
        "karma": 2032,
        "firstName": "Edwin",
        "lastName": "Kofler",
        "fullName": "Edwin Kofler",
        "displayName": "Edwin",
        "isLoggedIn": false,
        "bio": "in-progress full stack and devops engineer. kofler.dev",
        "timeCreated": "2018-07-23T00:18:33.000Z",
        "organization":
        {
            "name": "UC Santa Cruz"
        },
        "subscription": null,
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
            },
            {
                "id": "html",
                "displayName": "HTML, CSS, JS",
                "key": "html",
                "category": "Web",
                "tagline": "The languages that make up the web.",
                "icon": "/public/images/languages/web_project.svg",
                "isNew": false
            },
            {
                "id": "bash",
                "displayName": "Bash",
                "key": "bash",
                "category": "Practical",
                "tagline": "The classic Unix shell",
                "icon": "https://icons.util.repl.co/bash.svg",
                "isNew": false
            },
            {
                "id": "python3",
                "displayName": "Python",
                "key": "python3",
                "category": "Practical",
                "tagline": "A dynamic language emphasizing readability.",
                "icon": "https://repl.it/public/images/languages/python.svg",
                "isNew": false
            },
            {
                "id": "go",
                "displayName": "Go",
                "key": "go",
                "category": "Practical",
                "tagline": "Statically typed yet expressive language with a focus on concurrency.",
                "icon": "https://repl.it/public/images/languages/go.svg",
                "isNew": false
            },
            {
                "id": "polygott",
                "displayName": "polygott",
                "key": "polygott",
                "category": "Hidden",
                "tagline": "An elegant image for a more civilized age",
                "icon": "https://repl.it/public/images/languages/language.svg",
                "isNew": false
            },
            {
                "id": "deno",
                "displayName": "Deno (beta)",
                "key": "deno",
                "category": "Practical",
                "tagline": "A secure runtime for JavaScript and TypeScript",
                "icon": "https://icons.util.repl.co/deno-no-transparent.svg",
                "isNew": true
            },
            {
                "id": "pygame",
                "displayName": "Pygame",
                "key": "pygame",
                "category": "Game Development",
                "tagline": "A cross-platform python graphics library",
                "icon": "https://repl.it/public/images/languages/python.svg",
                "isNew": false
            },
            {
                "id": "c",
                "displayName": "C",
                "key": "c",
                "category": "Practical",
                "tagline": "Low-level and cross-platform imperative language.",
                "icon": "https://repl.it/public/images/languages/c.svg",
                "isNew": false
            },
            {
                "id": "rust",
                "displayName": "Rust",
                "key": "rust",
                "category": "Practical",
                "tagline": "A fast and safe systems programming language.",
                "icon": "https://repl.it/public/images/languages/rust.svg",
                "isNew": false
            },
            {
                "id": "nim",
                "displayName": "Nim",
                "key": "nim",
                "category": "Practical",
                "tagline": "An imperative, multi-paradigm, compiled programming language",
                "icon": "https://lang-images--timmy-i-chen.repl.co/nim.png",
                "isNew": false
            },
            {
                "id": "typescript",
                "displayName": "TypeScript",
                "key": "typescript",
                "category": "Practical",
                "tagline": "A typed superset of JavaScript.",
                "icon": "https://tsnodelogo.masfrost.repl.co/typescript.png",
                "isNew": false
            },
            {
                "id": "pyxel",
                "displayName": "Pyxel",
                "key": "pyxel",
                "category": "Game Development",
                "tagline": "A retro game engine for Python",
                "icon": "https://repl.it/public/images/languages/python.svg",
                "isNew": false
            },
            {
                "id": "kaboom",
                "displayName": "Kaboom (beta)",
                "key": "kaboom",
                "category": "Game Development",
                "tagline": "Kaboom Game Programming Environment",
                "icon": "/public/images/languages/kaboom.svg",
                "isNew": false
            },
            {
                "id": "cpp",
                "displayName": "C++",
                "key": "cpp",
                "category": "Practical",
                "tagline": "A general purpose system programming language.",
                "icon": "https://repl.it/public/images/languages/cpp.svg",
                "isNew": false
            }
        ],
        "roles":
        [
            {
                "id": "1004283:self_learner",
                "name": "self learner",
                "key": "SELF_LEARNER",
                "tagline": null
            }
        ]
    }
]
```