# Node ES6 URL Shortener

![](https://img.shields.io/badge/node-success-brightgreen.svg)
![](https://img.shields.io/badge/test-success-brightgreen.svg)

# Stack

![](https://img.shields.io/badge/node_8-✓-blue.svg)
![](https://img.shields.io/badge/ES6-✓-blue.svg)
![](https://img.shields.io/badge/express-✓-blue.svg)
![](https://img.shields.io/badge/sequelize-✓-blue.svg)

***

<h3 align="center">Please help this repo with a :star: if you find it useful! :blush:</h3>

***

# File structure

```
node-es6-url-shortener/
│
├── api/
│   ├── controllers/
│   │   └── UrlController.js
│   │
│   ├── models/
│   │   └── Url.js
│   │
│   └── helpers/
│      └── base58.js
│
├── config/
│   ├── env/
│   │   ├── development.js
│   │   ├── index.js
│   │   ├── production.js
│   │   └── test.js
│   │
│   ├── routes/
│   │   ├── index.js
│   │   └── url.js
│   │
│   ├── express.js
│
├── view/
│   ├── css/
│   │   └── styles.css
│   │
│   ├── javascript/
│   │   └── shorten.js
│   │
│   └── index.html
│
├── test/
│   └── url.test.js
│
├── .eslintrc                     * ESLint configuration file
├── .gitignore                    * Example git ignore file
├── index.mjs                     * Entry point of our Node's app
├── LICENSE                       * MIT License
├── package.json                  * Defines our JavaScript dependencies
├── package-lock.json             * Defines our exact JavaScript dependencies tree
└── README.md                     * This file
```

# Screenshot

<p align="center">
  <img src="https://github.com/murraco/node-es6-url-shortener/blob/master/screenshot.png" width="90%" />
</p>

# Introduction

## What's a URL Shortener?

 URL shortening is a technique to convert a long URL (site or page address) to a shorter version. This shorter version of the URL is usually cleaner and easier to share or remember. When someone accesses the shortened address, the browser redirects to the original (large) url address. It is also called URL redirection or URL redirect.

For example, the large version of this url:
http://en.wikipedia.org/wiki/URL_shortening

Can be shortened with bit.do service to this small address, that redirects to the previous longer address:
http://bit.do/urlwiki

## How does it work?

Essentially, your database has 3 fields: `_id`, `shortCode` and `targetURL`.

You will also have short URLs since the number of URLs you can have is 36^n where n is the number of characters in the shortened URL. So you can see that just with 4 letters you can have a possible of 2,313,441 different URLs. If you use capital letters (a larger base), this gets even larger. 

## How to use this code?

1. Make sure you have the latest stable version of Node.js installed

  ```
  $ sudo npm cache clean -f
  $ sudo npm install -g n
  $ sudo n stable
  ```
  
2. Configure your database and jsonwebtoken in `config/env`. For example `config/env/development.js` would look like this:

  ```js
  module.exports = {
    host: '<database host>',
    port: '<database port>',
    database: '<database name>',
    username: '<database username>',
    password: '<database password>',
    mongoose_debug: true,
    express_port: 3000
  };
  ```
  
3. Fork this repository and clone it
  
  ```
  $ git clone https://github.com/<your-user>/url-shortener
  ```
  
4. Navigate into the folder  

  ```
  $ cd url-shortener
  ```
  
5. Install NPM dependencies

  ```
  $ npm install
  ```
  
6. Run the project

  ```
  $ node index.js
  ```
  
7. Or use `nodemon` for live-reload
  
  ```
  $ npm start
  ```
  
  > `npm start` will run `node index.js`.
  
8. Navigate to `http://localhost:3000` in your browser to test it!

9. If you want to execute the tests

```
$ npm test
```

> `npm test` will run `mocha`.

# Contribution

- Report issues
- Open pull request with improvements
- Spread the word
- Reach out to me directly at <kks.4084@gmail.com>
