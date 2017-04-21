module.exports = {
    entry: "./src/ts/index.tsx",
    output: {
        filename: "./dist/bundle.js",
    },

	// Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

	resolve: {
        extensions: [ ".ts", ".tsx", ".js" ],
    },
	module: {
        rules: [
            {
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: [
					"ts-loader",
				],
			}
        ],
		// preLoaders: [
        //     // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        //     { test: /\.js$/, loader: "source-map-loader" }
        // ]
    },
};
