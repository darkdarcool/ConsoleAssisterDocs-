# Board Posts

## Usage
```js
.boardPosts()
```

This function is used to retrive the posts on a specific board.

It takes in the *after*, *count*, and *order* fields.

| Parameter Name | Description | Default Value |
| :---: | :---: | :---: |
| after | page to continue from | '' |
| count | number of posts to retrieve | 50 |
| order | order to sort the posts | '' |

## Example
**Example Code**:
```js
const replapi = require('replapi-it');

let myBoard = new replapi.Board('share');

async function getBoardPosts() {
  let info = await myBoard.boardPosts('', 1, '');
  console.log(info);
}

getBoardData();
```
**Example Response**:
```json
[
    {
        "id": 133256,
        "title": "Bruhify! A game similar to Cookie Clicker.",
        "body": "Bruhify! A game similar to Cookie Clicker. Click the character to get Bruhs. Buy power ups to speed up Bruh production!",
        "showHosted": true,
        "voteCount": 11,
        "votes":
        {
            "pageInfo":
            {
                "nextCursor": null
            },
            "items":
            [
                {
                    "user":
                    {
                        "id": 4703247,
                        "username": "nro2collaborate",
                        "url": "/@nro2collaborate",
                        "image": "https://www.gravatar.com/avatar/5a038ec736f677d1742c08d8a4e339e1?d=https://repl.it/public/images/evalbot/evalbot_26.png&s=256",
                        "karma": 1,
                        "firstName": null,
                        "lastName": null,
                        "fullName": "",
                        "displayName": "nro2collaborate",
                        "isLoggedIn": false,
                        "bio": null,
                        "timeCreated": "2020-11-09T23:57:01.352Z",
                        "organization": null,
                        "subscription": null,
                        "languages":
                        [
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
                                "id": "html",
                                "displayName": "HTML, CSS, JS",
                                "key": "html",
                                "category": "Web",
                                "tagline": "The languages that make up the web.",
                                "icon": "/public/images/languages/web_project.svg",
                                "isNew": false
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
                                "id": "cpp",
                                "displayName": "C++",
                                "key": "cpp",
                                "category": "Practical",
                                "tagline": "A general purpose system programming language.",
                                "icon": "https://repl.it/public/images/languages/cpp.svg",
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
                            }
                        ],
                        "roles": []
                    }
                },
                {
                    "user":
                    {
                        "id": 2759447,
                        "username": "DynamicSquid",
                        "url": "/@DynamicSquid",
                        "image": "https://storage.googleapis.com/replit/images/1608842455532_b488f4555813756626329cceb20ca02c.png",
                        "karma": 4587,
                        "firstName": null,
                        "lastName": null,
                        "fullName": "",
                        "displayName": "DynamicSquid",
                        "isLoggedIn": false,
                        "bio": "changing the world one squid at a time",
                        "timeCreated": "2020-01-25T01:12:06.578Z",
                        "organization": null,
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
                                "id": "cpp",
                                "displayName": "C++",
                                "key": "cpp",
                                "category": "Practical",
                                "tagline": "A general purpose system programming language.",
                                "icon": "https://repl.it/public/images/languages/cpp.svg",
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
                                "id": "c",
                                "displayName": "C",
                                "key": "c",
                                "category": "Practical",
                                "tagline": "Low-level and cross-platform imperative language.",
                                "icon": "https://repl.it/public/images/languages/c.svg",
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
                                "id": "java10",
                                "displayName": "Java",
                                "key": "java10",
                                "category": "Practical",
                                "tagline": "A concurrent, class-based, statically typed object-oriented language.",
                                "icon": "https://repl.it/public/images/languages/java.svg",
                                "isNew": false
                            }
                        ],
                        "roles":
                        [
                            {
                                "id": "2759447:moderator",
                                "name": "moderator",
                                "key": "MODERATOR",
                                "tagline": "Helps moderate Repl Talk by wielding the power of the banhammer"
                            },
                            {
                                "id": "2759447:explorer",
                                "name": "explorer",
                                "key": "EXPLORER",
                                "tagline": "Helps test Repl.it beta features"
                            }
                        ]
                    }
                },
                {
                    "user":
                    {
                        "id": 4150006,
                        "username": "PYTHORE3605",
                        "url": "/@PYTHORE3605",
                        "image": "https://storage.googleapis.com/replit/images/1614098835672_6f419037e5b2ba552acd2ec10232c78d.jpeg",
                        "karma": 100,
                        "firstName": "NA",
                        "lastName": null,
                        "fullName": "NA",
                        "displayName": "NA",
                        "isLoggedIn": false,
                        "bio": "Just ur avg coder. I knows python, CSS, and HTML fluently and I am currently teaching himself JS. Contact me at samueljoyak@gmail.com.",
                        "timeCreated": "2020-09-17T16:37:36.820Z",
                        "organization": null,
                        "subscription": null,
                        "languages":
                        [
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
                                "id": "html",
                                "displayName": "HTML, CSS, JS",
                                "key": "html",
                                "category": "Web",
                                "tagline": "The languages that make up the web.",
                                "icon": "/public/images/languages/web_project.svg",
                                "isNew": false
                            },
                            {
                                "id": "java10",
                                "displayName": "Java",
                                "key": "java10",
                                "category": "Practical",
                                "tagline": "A concurrent, class-based, statically typed object-oriented language.",
                                "icon": "https://repl.it/public/images/languages/java.svg",
                                "isNew": false
                            }
                        ],
                        "roles":
                        [
                            {
                                "id": "4150006:self_learner",
                                "name": "self learner",
                                "key": "SELF_LEARNER",
                                "tagline": null
                            },
                            {
                                "id": "4150006:explorer",
                                "name": "explorer",
                                "key": "EXPLORER",
                                "tagline": "Helps test Repl.it beta features"
                            }
                        ]
                    }
                },
                {
                    "user":
                    {
                        "id": 6040131,
                        "username": "kwe",
                        "url": "/@kwe",
                        "image": "https://storage.googleapis.com/replit/images/1612552797502_383e2534c0e9a9df057474fec5c61ad5.png",
                        "karma": 10,
                        "firstName": "kwesw",
                        "lastName": "   ",
                        "fullName": "Kwesw    ",
                        "displayName": "Kwesw",
                        "isLoggedIn": false,
                        "bio": "beginner in love2d slowly turning to less beginner,\n\nwebsite - https://kwesw.repl.co",
                        "timeCreated": "2021-02-05T17:00:24.380Z",
                        "organization": null,
                        "subscription": null,
                        "languages":
                        [
                            {
                                "id": "love2d",
                                "displayName": "Love2D",
                                "key": "love2d",
                                "category": "Game Development",
                                "tagline": "A free, open-source Lua framework for 2D games",
                                "icon": "https://lang-images--timmy-i-chen.repl.co/love2d.png",
                                "isNew": false
                            },
                            {
                                "id": "php7",
                                "displayName": "PHP Web Server",
                                "key": "php7",
                                "category": "Web",
                                "tagline": "A popular general-purpose scripting language.",
                                "icon": "https://repl.it/public/images/languages/php.svg",
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
                                "id": "lua",
                                "displayName": "Lua",
                                "key": "lua",
                                "category": "Practical",
                                "tagline": "A lightweight multi-paradigm scripting language.",
                                "icon": "https://repl.it/public/images/languages/lua.svg",
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
                                "id": "python_turtle",
                                "displayName": "Python (with Turtle)",
                                "key": "python_turtle",
                                "category": "Pratical",
                                "tagline": "A simple version of Python that supports Turtle.",
                                "icon": "https://repl.it/public/images/languages/python_turtle.svg",
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
                            }
                        ],
                        "roles":
                        [
                            {
                                "id": "6040131:student",
                                "name": "student",
                                "key": "STUDENT",
                                "tagline": null
                            },
                            {
                                "id": "6040131:self_learner",
                                "name": "self learner",
                                "key": "SELF_LEARNER",
                                "tagline": null
                            }
                        ]
                    }
                },
                {
                    "user":
                    {
                        "id": 5396970,
                        "username": "Dunce",
                        "url": "/@Dunce",
                        "image": "https://storage.googleapis.com/replit/images/1608873065844_1c0610cbb93565a2fd15c4cd4d21d28d.jpeg",
                        "karma": 43,
                        "firstName": null,
                        "lastName": null,
                        "fullName": "",
                        "displayName": "Dunce",
                        "isLoggedIn": false,
                        "bio": "I make websites, and pygame stuff.",
                        "timeCreated": "2020-12-25T00:05:44.624Z",
                        "organization": null,
                        "subscription": null,
                        "languages":
                        [
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
                                "id": "pygame",
                                "displayName": "Pygame",
                                "key": "pygame",
                                "category": "Game Development",
                                "tagline": "A cross-platform python graphics library",
                                "icon": "https://repl.it/public/images/languages/python.svg",
                                "isNew": false
                            },
                            {
                                "id": "tkinter",
                                "displayName": "Tkinter",
                                "key": "tkinter",
                                "category": "GUI Development",
                                "tagline": "Python's standard GUI tooklit",
                                "icon": "https://repl.it/public/images/languages/python.svg",
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
                                "id": "python_turtle",
                                "displayName": "Python (with Turtle)",
                                "key": "python_turtle",
                                "category": "Pratical",
                                "tagline": "A simple version of Python that supports Turtle.",
                                "icon": "https://repl.it/public/images/languages/python_turtle.svg",
                                "isNew": false
                            }
                        ],
                        "roles": []
                    }
                },
                {
                    "user":
                    {
                        "id": 2711574,
                        "username": "Astrroidd",
                        "url": "/@Astrroidd",
                        "image": "https://www.gravatar.com/avatar/d71bfe3be023f39de54a94b1a841c2d1?d=https://repl.it/public/images/evalbot/evalbot_35.png&s=256",
                        "karma": 0,
                        "firstName": null,
                        "lastName": null,
                        "fullName": "",
                        "displayName": "Astrroidd",
                        "isLoggedIn": false,
                        "bio": null,
                        "timeCreated": "2020-01-15T18:47:00.489Z",
                        "organization": null,
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
                                "id": "nodejs",
                                "displayName": "Node.js",
                                "key": "nodejs",
                                "category": "Practical",
                                "tagline": "Evented I/O for V8 JavaScript.",
                                "icon": "https://repl.it/public/images/languages/nodejs.svg",
                                "isNew": false
                            },
                            {
                                "id": "java10",
                                "displayName": "Java",
                                "key": "java10",
                                "category": "Practical",
                                "tagline": "A concurrent, class-based, statically typed object-oriented language.",
                                "icon": "https://repl.it/public/images/languages/java.svg",
                                "isNew": false
                            }
                        ],
                        "roles":
                        [
                            {
                                "id": "2711574:explorer",
                                "name": "explorer",
                                "key": "EXPLORER",
                                "tagline": "Helps test Repl.it beta features"
                            }
                        ]
                    }
                },
                {
                    "user":
                    {
                        "id": 5520103,
                        "username": "UnluckyFroggy",
                        "url": "/@UnluckyFroggy",
                        "image": "https://storage.googleapis.com/replit/images/1613138869645_4c52222d764e95b2db58a385b0ee659c.png",
                        "karma": 756,
                        "firstName": " ",
                        "lastName": " ",
                        "fullName": "   ",
                        "displayName": " ",
                        "isLoggedIn": false,
                        "bio": "I am a frog.",
                        "timeCreated": "2021-01-06T18:44:04.080Z",
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
                                "id": "java10",
                                "displayName": "Java",
                                "key": "java10",
                                "category": "Practical",
                                "tagline": "A concurrent, class-based, statically typed object-oriented language.",
                                "icon": "https://repl.it/public/images/languages/java.svg",
                                "isNew": false
                            },
                            {
                                "id": "php7",
                                "displayName": "PHP Web Server",
                                "key": "php7",
                                "category": "Web",
                                "tagline": "A popular general-purpose scripting language.",
                                "icon": "https://repl.it/public/images/languages/php.svg",
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
                            },
                            {
                                "id": "dart",
                                "displayName": "Dart",
                                "key": "dart",
                                "category": "Practical",
                                "tagline": "A general-purpose programming language used to build web, server, desktop, and mobile applications.",
                                "icon": "https://logos.turbio.repl.co/dart.svg",
                                "isNew": false
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
                                "id": "love2d",
                                "displayName": "Love2D",
                                "key": "love2d",
                                "category": "Game Development",
                                "tagline": "A free, open-source Lua framework for 2D games",
                                "icon": "https://lang-images--timmy-i-chen.repl.co/love2d.png",
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
                                "id": "php_cli",
                                "displayName": "PHP CLI",
                                "key": "php_cli",
                                "category": "Practical",
                                "tagline": "A popular general-purpose scripting language.",
                                "icon": "https://repl.it/public/images/languages/php.svg",
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
                            }
                        ],
                        "roles":
                        [
                            {
                                "id": "5520103:teacher",
                                "name": "teacher",
                                "key": "TEACHER",
                                "tagline": null
                            },
                            {
                                "id": "5520103:self_learner",
                                "name": "self learner",
                                "key": "SELF_LEARNER",
                                "tagline": null
                            },
                            {
                                "id": "5520103:explorer",
                                "name": "explorer",
                                "key": "EXPLORER",
                                "tagline": "Helps test Repl.it beta features"
                            }
                        ]
                    }
                },
                {
                    "user":
                    {
                        "id": 4469392,
                        "username": "IGamer123",
                        "url": "/@IGamer123",
                        "image": "https://storage.googleapis.com/replit/images/1603485013799_e69098e983fdca6da7e8442a13c837d2.jpeg",
                        "karma": 30,
                        "firstName": "Logan",
                        "lastName": "Green",
                        "fullName": "Logan Green",
                        "displayName": "Logan",
                        "isLoggedIn": false,
                        "bio": "New/Experienced Coder\nRank - Bronze I",
                        "timeCreated": "2020-10-19T18:26:16.546Z",
                        "organization":
                        {
                            "name": "International Leadership of Texas, College Station K-8"
                        },
                        "subscription": null,
                        "languages":
                        [
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
                                "id": "html",
                                "displayName": "HTML, CSS, JS",
                                "key": "html",
                                "category": "Web",
                                "tagline": "The languages that make up the web.",
                                "icon": "/public/images/languages/web_project.svg",
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
                                "id": "java10",
                                "displayName": "Java",
                                "key": "java10",
                                "category": "Practical",
                                "tagline": "A concurrent, class-based, statically typed object-oriented language.",
                                "icon": "https://repl.it/public/images/languages/java.svg",
                                "isNew": false
                            }
                        ],
                        "roles": []
                    }
                },
                {
                    "user":
                    {
                        "id": 6792812,
                        "username": "STCollier",
                        "url": "/@STCollier",
                        "image": "https://www.gravatar.com/avatar/b2cb7162dd1a0b1c80833d9a406434f4?d=https://repl.it/public/images/evalbot/evalbot_34.png&s=256",
                        "karma": 0,
                        "firstName": null,
                        "lastName": null,
                        "fullName": "",
                        "displayName": "STCollier",
                        "isLoggedIn": false,
                        "bio": "Started coding March 24, 2021. I use Python 2.7.",
                        "timeCreated": "2021-03-25T01:21:57.618Z",
                        "organization": null,
                        "subscription": null,
                        "languages":
                        [
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
                                "id": "python3",
                                "displayName": "Python",
                                "key": "python3",
                                "category": "Practical",
                                "tagline": "A dynamic language emphasizing readability.",
                                "icon": "https://repl.it/public/images/languages/python.svg",
                                "isNew": false
                            }
                        ],
                        "roles": []
                    }
                },
                {
                    "user":
                    {
                        "id": 3535778,
                        "username": "JWZ6",
                        "url": "/@JWZ6",
                        "image": "https://storage.googleapis.com/replit/images/1615817571222_b25e81b61137bccb6c395824b271a090.gif",
                        "karma": 139,
                        "firstName": "Mr Yeet",
                        "lastName": null,
                        "fullName": "Mr Yeet",
                        "displayName": "Mr Yeet",
                        "isLoggedIn": false,
                        "bio": "A founder of Chicken and Duck.",
                        "timeCreated": "2020-06-21T22:42:33.169Z",
                        "organization": null,
                        "subscription": null,
                        "languages":
                        [
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
                                "id": "html",
                                "displayName": "HTML, CSS, JS",
                                "key": "html",
                                "category": "Web",
                                "tagline": "The languages that make up the web.",
                                "icon": "/public/images/languages/web_project.svg",
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
                                "id": "bash",
                                "displayName": "Bash",
                                "key": "bash",
                                "category": "Practical",
                                "tagline": "The classic Unix shell",
                                "icon": "https://icons.util.repl.co/bash.svg",
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
                                "id": "dart",
                                "displayName": "Dart",
                                "key": "dart",
                                "category": "Practical",
                                "tagline": "A general-purpose programming language used to build web, server, desktop, and mobile applications.",
                                "icon": "https://logos.turbio.repl.co/dart.svg",
                                "isNew": false
                            }
                        ],
                        "roles": []
                    }
                },
                {
                    "user":
                    {
                        "id": 3973970,
                        "username": "ch1ck3n",
                        "url": "/@ch1ck3n",
                        "image": "https://storage.googleapis.com/replit/images/1614447916318_5462f5ecc0df379a0772bcd4eee24d88.gif",
                        "karma": 1486,
                        "firstName": "p",
                        "lastName": "og",
                        "fullName": "P Og",
                        "displayName": "P",
                        "isLoggedIn": false,
                        "bio": "mary had a little doge, little doge, little doge...",
                        "timeCreated": "2020-09-02T23:01:23.550Z",
                        "organization":
                        {
                            "name": "Somewhere"
                        },
                        "subscription":
                        {
                            "planId": "hacker2"
                        },
                        "languages":
                        [
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
                                "id": "html",
                                "displayName": "HTML, CSS, JS",
                                "key": "html",
                                "category": "Web",
                                "tagline": "The languages that make up the web.",
                                "icon": "/public/images/languages/web_project.svg",
                                "isNew": false
                            },
                            {
                                "id": "php7",
                                "displayName": "PHP Web Server",
                                "key": "php7",
                                "category": "Web",
                                "tagline": "A popular general-purpose scripting language.",
                                "icon": "https://repl.it/public/images/languages/php.svg",
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
                                "id": "python_turtle",
                                "displayName": "Python (with Turtle)",
                                "key": "python_turtle",
                                "category": "Pratical",
                                "tagline": "A simple version of Python that supports Turtle.",
                                "icon": "https://repl.it/public/images/languages/python_turtle.svg",
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
                                "id": "c",
                                "displayName": "C",
                                "key": "c",
                                "category": "Practical",
                                "tagline": "Low-level and cross-platform imperative language.",
                                "icon": "https://repl.it/public/images/languages/c.svg",
                                "isNew": false
                            },
                            {
                                "id": "tkinter",
                                "displayName": "Tkinter",
                                "key": "tkinter",
                                "category": "GUI Development",
                                "tagline": "Python's standard GUI tooklit",
                                "icon": "https://repl.it/public/images/languages/python.svg",
                                "isNew": false
                            },
                            {
                                "id": "php_cli",
                                "displayName": "PHP CLI",
                                "key": "php_cli",
                                "category": "Practical",
                                "tagline": "A popular general-purpose scripting language.",
                                "icon": "https://repl.it/public/images/languages/php.svg",
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
                            },
                            {
                                "id": "crystal",
                                "displayName": "Crystal",
                                "key": "crystal",
                                "category": "Practical",
                                "tagline": "Fast as C, slick as Ruby",
                                "icon": "https://logos.turbio.repl.co/crystal.svg",
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
                                "id": "lolcode",
                                "displayName": "LOLCODE",
                                "key": "lolcode",
                                "category": "Esoteric",
                                "tagline": "The basic language of lolcats.",
                                "icon": "/public/images/languages/lolcode.svg",
                                "isNew": false
                            },
                            {
                                "id": "apl",
                                "displayName": "APL",
                                "key": "apl",
                                "category": "Classic",
                                "tagline": "An array-oriented language using funny characters.",
                                "icon": "https://repl.it/public/images/languages/language.svg",
                                "isNew": false
                            },
                            {
                                "id": "basic",
                                "displayName": "Basic (beta)",
                                "key": "basic",
                                "category": "Classic",
                                "tagline": "A fun and simple programming language for beginners",
                                "icon": "https://icons--util.repl.co/basic.svg",
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
                                "id": "fsharp",
                                "displayName": "F#",
                                "key": "fsharp",
                                "category": "Practical",
                                "tagline": "A Microsoft .NET functional programming language.",
                                "icon": "https://repl.it/public/images/languages/fsharp.svg",
                                "isNew": false
                            }
                        ],
                        "roles":
                        [
                            {
                                "id": "3973970:self_learner",
                                "name": "self learner",
                                "key": "SELF_LEARNER",
                                "tagline": null
                            },
                            {
                                "id": "3973970:explorer",
                                "name": "explorer",
                                "key": "EXPLORER",
                                "tagline": "Helps test Repl.it beta features"
                            }
                        ]
                    }
                }
            ]
        },
        "commentCount": 26,
        "isPinned": false,
        "isLocked": false,
        "timeCreated": "2021-04-06T16:36:47.732Z",
        "timeUpdated": "2021-04-06T21:08:01.557Z",
        "url": "/talk/share/Bruhify-A-game-similar-to-Cookie-Clicker/133256",
        "user":
        {
            "id": 5520103,
            "username": "UnluckyFroggy",
            "url": "/@UnluckyFroggy",
            "image": "https://storage.googleapis.com/replit/images/1613138869645_4c52222d764e95b2db58a385b0ee659c.png",
            "karma": 756,
            "firstName": " ",
            "lastName": " ",
            "fullName": "   ",
            "displayName": " ",
            "isLoggedIn": false,
            "bio": "I am a frog.",
            "timeCreated": "2021-01-06T18:44:04.080Z",
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
                    "id": "java10",
                    "displayName": "Java",
                    "key": "java10",
                    "category": "Practical",
                    "tagline": "A concurrent, class-based, statically typed object-oriented language.",
                    "icon": "https://repl.it/public/images/languages/java.svg",
                    "isNew": false
                },
                {
                    "id": "php7",
                    "displayName": "PHP Web Server",
                    "key": "php7",
                    "category": "Web",
                    "tagline": "A popular general-purpose scripting language.",
                    "icon": "https://repl.it/public/images/languages/php.svg",
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
                },
                {
                    "id": "dart",
                    "displayName": "Dart",
                    "key": "dart",
                    "category": "Practical",
                    "tagline": "A general-purpose programming language used to build web, server, desktop, and mobile applications.",
                    "icon": "https://logos.turbio.repl.co/dart.svg",
                    "isNew": false
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
                    "id": "love2d",
                    "displayName": "Love2D",
                    "key": "love2d",
                    "category": "Game Development",
                    "tagline": "A free, open-source Lua framework for 2D games",
                    "icon": "https://lang-images--timmy-i-chen.repl.co/love2d.png",
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
                    "id": "php_cli",
                    "displayName": "PHP CLI",
                    "key": "php_cli",
                    "category": "Practical",
                    "tagline": "A popular general-purpose scripting language.",
                    "icon": "https://repl.it/public/images/languages/php.svg",
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
                }
            ],
            "roles":
            [
                {
                    "id": "5520103:teacher",
                    "name": "teacher",
                    "key": "TEACHER",
                    "tagline": null
                },
                {
                    "id": "5520103:self_learner",
                    "name": "self learner",
                    "key": "SELF_LEARNER",
                    "tagline": null
                },
                {
                    "id": "5520103:explorer",
                    "name": "explorer",
                    "key": "EXPLORER",
                    "tagline": "Helps test Repl.it beta features"
                }
            ]
        },
        "board":
        {
            "id": 3,
            "url": "/talk/share",
            "slug": "share",
            "cta": "Share your repl!",
            "titleCta": "Title",
            "bodyCta": "Describe your repl or website",
            "buttonCta": "Share",
            "description": "Share your repls and programming experiences",
            "name": "Share",
            "replRequired": true,
            "isLocked": false,
            "isPrivate": false
        },
        "repl":
        {
            "id": "b56d2650-61c4-48de-b021-d2c3989ddb0b",
            "hostedUrl": "https://b56d2650-61c4-48de-b021-d2c3989ddb0b.id.repl.co",
            "title": "bruhify",
            "lang":
            {
                "id": "html",
                "displayName": "HTML, CSS, JS",
                "key": "html",
                "category": "Web",
                "tagline": "The languages that make up the web.",
                "icon": "/public/images/languages/web_project.svg",
                "isNew": false
            },
            "language": "html",
            "timeCreated": "2021-02-17T14:12:22.599Z"
        },
        "isAnnouncement": false,
        "isAuthor": false,
        "canEdit": false,
        "canComment": false,
        "canVote": false,
        "canPin": false,
        "canSetType": false,
        "canChangeBoard": false,
        "canLock": false,
        "hasVoted": false,
        "canReport": false,
        "hasReported": false,
        "isAnswered": false,
        "isAnswerable": false,
        "answeredBy": null,
        "answer": null,
        "tutorialPages":
        [
            "Bruhify! A game similar to Cookie Clicker. Click the character to get Bruhs. Buy power ups to speed up Bruh production!\n"
        ],
        "preview": "Bruhify! A game similar to Cookie Clicker. Click the character to get Bruhs. Buy power ups to speed up Bruh production!"
    }
]
```