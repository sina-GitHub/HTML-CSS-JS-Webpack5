## HTML + CSS + JS + Webpack5 = LOL ;)

1- in this case src/index.js depends on src/hello-world.js(manually added!)

2- web pack will create a correct dependency graph automatically so we try to
use webpack right now...

2.5- create a nodeJS project

    -----I> npm init -y

3- we need webpack & webpack-cli as dev-dependency to do the job

    -----I> npm install -D webpack webpack-cli

4- creating webpack.config.js

5- comment all <script src="..."></script> lines

6- write : <script src="./dist/bundle.js"></script>

## in webpack.config.js:

7-

```js script
const path = require('path'); // for exact path making
```

8-

```js script
module.exports = {};
```

9-adding "entry: // entry piont

```js script
module.exports = {
	entry: './src/index.js', // the main JS file
};
```

10- adding "output": // out put file and directory path:

## output file and folder will be created automatically after build

```js script
module.exports = {
	entry: './src/index.js', // the main JS file
	output: {
		// out put file (which is used in project).
		filename: 'bundle.js',

		// out put directory
		path: path.resolve(__dirname, 'dist'),
	},
};
```

11- adding "mode": // which mode? production or developememt?

```js script
module.exports = {
	entry: './src/index.js', // the main JS file
	output: {
		// out put file (which is used in project).
		filename: 'bundle.js',

		// out put directory
		path: path.resolve(__dirname, 'dist'),
	},
	// which mode? production or developememt?
	mode: 'none',
};
```

12- export all js dependency files, like "./src/hello-world.js" in ES6 way:

```js script
export default whatever;
```

13- import all js dependency files, into main file "./src/index.js" in ES6 way:

```js script
import whatever from './directory/file.js';
```

14- create a script in package.json about webpack:

```js script
    {
	"name": "webpack-html-css-js",
	"version": "1.0.0",
	"description": "",
	"main": "index.js",
	"scripts": {
		"test": "echo \"Error: no test specified\" && exit 1",
		"web-pack-build-test": "webpack"
	},
	"keywords": [],
	"author": "",
	"license": "ISC",
	"devDependencies": {
		"webpack": "^5.1.0",
		"webpack-cli": "^4.0.0"
	}
}

```

15- run the command : npm run web-pack-build-test

## -----I> Done!!!!
