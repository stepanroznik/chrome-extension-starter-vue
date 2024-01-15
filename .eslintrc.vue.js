// this config is used to lint Frontend VUE files.
// Eslint config does only support ignoring files, but not only including
// see the npm script "lint:frontend"

module.exports = {
    extends: [
        './.eslintrc.json',
        'plugin:vue/vue3-essential',
        'plugin:vue/vue3-recommended',
        'plugin:vue/vue3-strongly-recommended',
        '@vue/typescript/recommended',
    ],
    parser: 'vue-eslint-parser',
    ignorePatterns: ['!**/*', '**/.nuxt/**', '**/.output/**', '**/*.json'],
    rules: {
        'comma-dangle': ['warn', 'only-multiline'],
        semi: ['warn', 'always'],
        'unicorn/filename-case': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        "@nx/workspace/no-native-date-without-arguments": "off",
        'vue/no-unused-components': 'warn',
        'vue/no-setup-props-destructure': 'off',
        'vue/no-template-shadow': 'off',
        'vue/no-setup-props-destructure': 'off',
        'vue/match-component-file-name': [
            'warn',
            { extensions: ['vue'], shouldMatchCase: true },
        ],
        'vue/require-name-property': 'warn',
        'vue/multi-word-component-names': 'off',
        'vue/max-attributes-per-line': [
            'warn',
            {
                singleline: {
                    max: 3,
                },
                multiline: {
                    max: 1,
                },
            },
        ],
        'vue/component-name-in-template-casing': [
            'warn',
            'PascalCase',
            {
                registeredComponentsOnly: true,
            },
        ],
        '@typescript-eslint/no-floating-promises': 'off',
    },
    env: {
        node: true,
    },
    overrides: [
        {
            files: ['**/*.spec.{j,t}s?(x)'],
            env: {
                jest: true,
            },
        },
        {
            files: ['**/*.vue'],
            rules: {
                'linebreak-style': 'off',
                'prettier/prettier': 'off',
                'vue/html-indent': [
                    'warn',
                    4,
                    {
                        attribute: 1,
                        closeBracket: 0,
                        alignAttributesVertically: true,
                        ignores: [],
                    },
                ],

                'vue/html-closing-bracket-newline': [
                    'warn',
                    {
                        singleline: 'never',
                        multiline: 'always',
                    },
                ],
            },
        },
    ],
};
