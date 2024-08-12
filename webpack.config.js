const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: {
		autofill: './src/contents/autofill.js',
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
				{ from: 'src/manifest.json', to: '' },
				{ from: 'src/popup/popup.html', to: 'popup/' },
				{ from: 'src/popup/popup.css', to: 'popup/' },
				{ from: 'src/reset/reset.html', to: 'reset/' },
				{ from: 'src/reset/reset.js', to: 'reset/' },
				{ from: 'src/setting/setting.html', to: 'setting/' },
				{ from: 'src/contents/autoAgree.js', to: 'contents/' }
			]
		})
	]
};
