module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'react-app',
        'airbnb',
        'plugin:import/typescript',
        'plugin:prettier/recommended',
    ],
    overrides: [],
    ignorePatterns: [
        'scripts',
        'postcss.config.js',
        'config',
        '.eslintrc.js',
        'build',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', 'prettier'],
    rules: {
        quotes: [
            'warn',
            'single',
            {
                avoidEscape: true,
            },
        ],
        'no-param-reassign': [
            'error',
            {
                props: true,
                ignorePropertyModificationsFor: ['state'],
            },
        ],
        'react/react-in-jsx-scope': ['off'],
        'react/prop-types': ['off'],
        'react/button-has-type': ['off'],
        'react/function-component-definition': [
            2,
            {
                namedComponents: 'arrow-function',
                unnamedComponents: 'arrow-function',
            },
        ],
        'no-underscore-dangle': ['off'],
        'react/jsx-no-useless-fragment': ['off'],
        'no-console': ['error', { allow: ['warn', 'error'] }],
        'no-alert': ['off'],
        'jsx-a11y/click-events-have-key-events': ['off'],
        'jsx-a11y/no-static-element-interactions': ['off'],
        'jsx-a11y/no-noninteractive-element-interactions': ['off'],
        'consistent-return': ['off'],
        'prettier/prettier': ['off'],
        'react/jsx-indent': ['off'],
        'react/jsx-indent-props': ['off'],
        'import/order': ['off'],
        'import/prefer-default-export': ['off'],
        'no-console': ['warn'],
        'prefer-const': ['off'],
        'react/jsx-no-constructed-context-values': ['off'],
        'react/jsx-curly-newline': ['off'],
        'react/jsx-one-expression-per-line': ['off'],
        'react/jsx-props-no-spreading': ['off'],
        'import/no-unresolved': ['off'],
    },
};
