module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jest/recommended',
        'next/core-web-vitals',
        'prettier'
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: [
        'react',
        'react-hooks',
        'jest'
    ],
    rules: {
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off'
    },
    settings: {
        react: {
            version: 'detect'
        }
    }
}
