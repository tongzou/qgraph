import webpack from "webpack";
import pkg from "./package.json";

var banner = `
	${pkg.name} - ${pkg.description}
	Author: ${pkg.author}
	Version: v${pkg.version}
	Url: ${pkg.homepage}
	License(s): ${pkg.license}
`;

export default {
	output: {
		library: pkg.name,
		libraryTarget: "umd",
		filename: `${pkg.name}.js`
	},
	devtool: "#inline-source-map",
	externals: [
		{
			lodash: {
				root: "_",
				commonjs: "lodash",
				commonjs2: "lodash",
				amd: "lodash"
			},
			d3: {
				root: "d3",
				commonjs: "d3",
				commonjs2: "d3",
				amd: "d3"
			}
		}
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/,
				query: {
					// https://github.com/babel/babel-loader#options
					cacheDirectory: true,
					presets: ['es2015', 'stage-2']
				}
			}
		]
	},
	plugins: [
		new webpack.BannerPlugin( banner )
	]
};
