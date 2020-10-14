const path = require('path'); // for exact path making

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
