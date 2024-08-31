// jest.config.js
module.exports = {
    preset: 'ts-jest', // Use ts-jest preset
    //testEnvironment: 'jsdom', // Simulate a browser-like environment
    testEnvironment: 'jest-environment-jsdom', // Specify the correct jsdom environment
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'], // Adjust based on your setup
    moduleNameMapper: {
        '^.+\\.css$': 'identity-obj-proxy', // Mock CSS modules
    },
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest', // Transform TypeScript files
    },
    "resetMocks": false
};
