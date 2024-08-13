// const path = require('path');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

// module.exports = {
// 	mode: 'production',
// 	entry: {
// 		autofill: './src/contents/autofill.js',
// 		registerKey: './src/contents/registerKey.js',
// 		popup: './src/popup/popup.js'
// 	},
// 	output: {
// 		filename: (pathData) => {
// 			// エントリーポイントの名前によって出力先のパスを決定
// 			if (pathData.chunk.name === 'popup') {
// 				return 'popup/[name].js';
// 			}
// 			return 'contents/[name].js';
// 		},
// 		path: path.resolve(__dirname, 'dist/')
// 	},
// 	module: {
// 		rules: [
// 			{
// 				test: /\.js$/,
// 				exclude: /node_modules/,
// 				use: {
// 					loader: 'babel-loader',
// 					options: {
// 						presets: ['@babel/preset-env']
// 					}
// 				}
// 			}
// 		]
// 	},
// 	plugins: [
// 		new CopyWebpackPlugin({
// 			patterns: [
// 				{ from: 'src/manifest.json', to: '' },
// 				{ from: 'src/popup/popup.html', to: './popup/' },
// 				{ from: 'src/popup/popup.css', to: './popup/' },
// 				{ from: 'src/setting/*', to: './setting/' },
// 				{ from: 'src/instruction/*', to: 'instruction/' },
// 				{ from: 'src/contents/autoAgree.js', to: 'contents/' },
// 				{ from: 'src/contents/autoLogin.js', to: 'contents/' },
// 			]
// 		})
// 	]
// };
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: {
		autofill: './src/contents/autofill.js',
		registerKey: './src/contents/registerKey.js',
		popup: './src/popup/popup.js'
	},
	output: {
		filename: (pathData) => {
			// エントリーポイントの名前によって出力先のパスを決定
			if (pathData.chunk.name === 'popup') {
				return 'popup/[name].js';
			}
			return 'contents/[name].js';
		},
		path: path.resolve(__dirname, 'dist/')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	},
	plugins: [
		new CopyWebpackPlugin({
			patterns: [
				{ from: path.resolve(__dirname, 'src/manifest.json'), to: path.resolve(__dirname, 'dist/') },
				{ from: path.resolve(__dirname, 'src/popup/popup.html'), to: path.resolve(__dirname, 'dist/popup/') },
				{ from: path.resolve(__dirname, 'src/popup/popup.css'), to: path.resolve(__dirname, 'dist/popup/') },
				{ from: path.resolve(__dirname, 'src/setting/'), to: path.resolve(__dirname, 'dist/setting/'), globOptions: { dot: true } }, 
				{ from: path.resolve(__dirname, 'src/instruction/'), to: path.resolve(__dirname, 'dist/instruction/'), globOptions: { dot: true } }, 
				{ from: path.resolve(__dirname, 'src/contents/autoAgree.js'), to: path.resolve(__dirname, 'dist/contents/') },
				{ from: path.resolve(__dirname, 'src/contents/autoLogin.js'), to: path.resolve(__dirname, 'dist/contents/') },
			]
		})
	]
};