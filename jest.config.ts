const nextJest = require('next/jest');

const createJestConfig = nextJest({
	dir: './',
});

const customJestConfig = {
	testEnvironment: 'jest-environment-jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
	moduleDirectories: ['node_modules', '<rootDir>/'],
	clearMocks: true,
	moduleNameMapper: {
		'@/(.*)': '<rootDir>/$1',
	},
	testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
};

module.exports = createJestConfig(customJestConfig);

export {};
