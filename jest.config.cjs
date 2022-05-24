// @ts-check
const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.json');

/** @type { import('@jest/types').Config.InitialOptions } */
const initialOptions = {
	moduleFileExtensions: [
		'js',
		'jsx',
		'ts',
		'tsx',
		'json',
		// tell Jest to handle *.vue files
		'vue',
	],
	testMatch: [
		'**/tests/**/*.spec.[jt]s?(x)',
	],
	transform: {
		// process *.vue files with vue-jest
		'^.+\\.vue$': '@vue/vue3-jest',
		'^.+\\.tsx?$': 'ts-jest',
	},

	testEnvironment: 'jsdom',
	globals: {
		'ts-jest': {
			babelConfig: true,
			tsconfig: './tests/tsconfig.json',
		},
	},
};

module.exports = {
	...initialOptions,
	moduleNameMapper: pathsToModuleNameMapper(
		compilerOptions.paths,
		{
			prefix: '<rootDir>/',
		},
	),
};
