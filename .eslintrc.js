module.exports = {    
    env: {
        "browser": true,
        "es2021": true
    },
    extends: [
        "airbnb-base",
        "airbnb-typescript/base",        
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended"
    ],
    overrides: [],    
    parser: '@typescript-eslint/parser',
    parserOptions: {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": './tsconfig.json'
    },
    plugins: [ "prettier", '@typescript-eslint' ],
    root: true,
    rules: {
        'import/extensions': 'off',
        'prettier/prettier': 'error',
        'import/prefer-default-export': 'off',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/array-type': [
            'error', { default: 'array'}
        ]
    }
}
