module.exports = {
    plugins: {
        'postcss-import': {},
        'postcss-advanced-variables': {},
        'tailwindcss/nesting': {},
        tailwindcss: { config: __dirname + '/tailwind.config.js' },
        autoprefixer: {},
    },
};
